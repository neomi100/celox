<template>
  <section v-if="yacht" class="yacht-details-container main-layout">
    <div class="header-img-gallery">
      <div class="yacht-details-title flex column">
        <!-- <div class="yacht-title-primary">{{ yacht.summary }}</div> -->
        <div class="yacht-title-secondary flex space-between center">
          <div class="left flex space-between center">
            <star-rating :reviews="reviews" /> <span> · </span>
            <a class="link" href="#location"> {{ yacht.loc.address }}</a>
          </div>

          <div class="right flex space-between">
            <button class="btn flex center space-evenly action-btn">
              <i class="share-btn btn fas fa-share-square"></i><span></span>
            </button>

            <button
              class="btn flex center space-evenly action-btn"
              v-if="isLiked"
              @click="toggleLike()"
            >
              <i class="save-btn btn fas fa-heart" style="color: hotpink"></i>
              <span></span>
            </button>

            <button
              class="btn flex center space-evenly action-btn"
              v-if="!isLiked"
              @click="toggleLike()"
            >
              <i class="save-btn btn far fa-heart"></i><span></span>
            </button>
          </div>
        </div>
      </div>
      <yacht-img-gallery
        class="img-gallery img-grid-wide-view"
        :imgs="yacht.imgUrls"
      />
    </div>

    <div class="yacht-details flex space-between">
      <div class="bottom-border yacht-description">
        <div class="flex space-between bottom-border yacht-desctiption-title">
          <div>
            <h2 class="ownered-by">
              {{ yacht.name }} ownered by {{ yacht.owner.fullname }}
            </h2>
            <p>Up to {{ capacity }} guests</p>
          </div>
          <img class="owner-img" :src="yacht.owner.imgUrl" />
        </div>

        <div class="description-section flex column bottom-border">
          <div class="description-txt">
            Come to see my yacht in the middle of
            {{ yacht.loc.address }}. It is located in near the bay. This yacht
            can accommodate up to <span> {{ capacity }} </span> people, yacht
            equipped with an adjustable swimming platform and with hot and cold
            water shower and a 4.50 m auxiliary boat with 10 HP engine. At the
            central bridge we find a cabin with dining table, sofa and chairs,
            entering a lounge with independent air conditioning, coffee table
            and plasma TV, dining room with independent air conditioning, table
            and sofa, a kitchen equipped with refrigerator, sink,
          </div>
          <p class="contact-owner-btn underline">Contact owner</p>
        </div>
        <div>
          <yacht-amenities :yacht="yacht" />
        </div>
      </div>

      <div class="trip-cmp">
        <order-edit class="trip-settings" :yacht="yacht" />
      </div>
    </div>

    <div class="review-section bottom-border">
      <review-categories :reviews="this.reviews" />
      <review-list :reviews="this.reviews" />
      <review-add @postReview="postReview"></review-add>
    </div>

    <div class="map-location">
      <yacht-map id="location" :location="yacht.loc" />
    </div>

    <trip-settings-mobile
      class="trip-settings-mobile full-width"
      :yacht="yacht"
    />
  </section>
</template> 


   

<script>
import yachtAmenities from "../cmps/yacht-amenities.vue";
import yachtImgGallery from "../cmps/yacht-img-gallery.vue";
import orderEdit from "../cmps/order-edit.vue";
import tripSettingsMobile from "../cmps/trip-settings-mobile.vue";
import reviewList from "../cmps/review-list.vue";
import reviewCategories from "../cmps/review-categories.vue";
import starRating from "../cmps/star-rating.vue";
import yachtMap from "../cmps/yacht-map.vue";
import { yachtService } from "../services/yacht-service.js";
import reviewAdd from "../cmps/review-add.vue";
import { socketService } from "@/services/socket.service.js";

export default {
  name: "yacht-details",
  data() {
    return {
      first: true,
      reviews: null,
      yacht: null,
      contactOwnerMsg: "",
      review: {
        rate: null,
        category: {
          Cleanliness: null,
          Accuracy: null,
          Communication: null,
          Location: null,
          CheckIn: null,
          Accessibility: null,
        },
      },
      isLiked: null,
      buyer: null,
    };
  },
  methods: {
    open1() {
      if (this.first === false) return;
      this.first = false;
      this.$notify({
        title: `${this.yacht.owner.fullname} has ACCEPTED your Reservation`,
        message: `${this.buyer.fullname} Enjoy your trip in ${this.yacht.loc.address} :)`,
        type: "success",
        position: "top-right",
        duration: 20000,
      });
    },
   contactOwner() {
      var msg = {
        txt: this.contactOwnerMsg,
        buyerId: this.buyer._id,
        ownerId: this.yacht.owner_id,
        yachtId: this.yacht._id,
        date: Date.now(),
      };
      this.$store.dispatch({ type: "contactOwner", msg });
    },
    async postReview(postedReview) {
      var review = {
        txt: postedReview.reviewTxt,
        buyer: this.buyer,
        ownerId: this.yacht.owner._id,// will be used in the future for updating owner
        yacht: this.yacht,
        rate: postedReview.userReviewRate,
        category: {
          Cleanliness: postedReview.categoryMap.Cleanliness,
          Accuracy: postedReview.categoryMap.Accuracy,
          Communication: postedReview.categoryMap.Communication,
          Location: postedReview.categoryMap.Location,
          CheckIn: postedReview.categoryMap.CheckIn,
          Accessibility: postedReview.categoryMap.Accessibility,
        },
      };
      try {
        const updatedYacht = await this.$store.dispatch({
          type: "postReview",
          review,
        });
        this.yacht = updatedYacht;
      } catch (err) {
        console.log("could not update yacht with new review:", err);
      }
    },
    async toggleLike() {
      this.isLiked = !this.isLiked;
      if (this.isLiked) {
        this.class = "save-btn btn fas fa-heart";
      } else {
        this.class = "save-btn btn far fa-heart";
      }
      await this.$store.dispatch({ type: "toggleLike", yacht: this.yacht });
    },
  },
  computed: {
    capacity() {
      const maxPepole = this.yacht.size;
      switch (maxPepole) {
        case "small":
          return 5;
        case "medium":
          return 12;
        case "large":
          return 35;
        default:
          return "";
      }
    },
  },
 created() {
    const _id = this.$route.params.id;
    yachtService.getById(_id).then((yacht) => {
      if (yacht) {
        this.yacht = yacht;
        this.yacht.owner._id;
        this.reviews = yacht.reviews;
        this.$store.dispatch({ type: "loadAllOrders", yachtId: yacht._id });
      const user = this.$store.getters.loggedinUser;
        if (!user){
          this.isLiked=false;
        }else{
          this.isLiked= this.yacht.favorites.some(({userId}) => {
                return userId === user._id;
          })
        }
      }
    });
    if (this.$store.getters.loggedinUser) {
      this.buyer = this.$store.getters.loggedinUser;
    }
    socketService.on("updatedAns", this.open1);
      },
  destroyed() {
    socketService.off("updatedAns");
  },

  components: {
    yachtImgGallery,
    reviewList,
    orderEdit,
    tripSettingsMobile,
    yachtMap,
    reviewCategories,
    starRating,
    yachtAmenities,
    reviewAdd,
  },
};
</script>