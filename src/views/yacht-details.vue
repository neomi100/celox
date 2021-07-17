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
              <i class="share-btn btn fas fa-share-square"></i
              ><span>Share</span>
            </button>

            <button
              class="btn flex center space-evenly action-btn"
              v-if="isLiked"
              @click="toggleLike()"
            >
              <i class="save-btn btn fas fa-heart" style="color: #ca4c4c"></i>
              <span>Save</span>
            </button>

            <button
              class="btn flex center space-evenly action-btn"
              v-if="!isLiked"
              @click="toggleLike()"
            >
              <i class="save-btn btn far fa-heart"></i><span>Save</span>
            </button>
          </div>
        </div>
      </div>
      <yacht-img-gallery
        class="img-gallery img-grid-wide-view"
        :imgs="yacht.imgUrls"
      />
    </div>

    <div class="yacht-details flex">
      <div class="bottom-border yacht-description">
        <div class="flex space-between bottom-border yacht-desctiption-title">
          <div>
            <h2 class="ownered-by">
              {{ yacht.name }} ownered by {{ yacht.owner.fullname }}
            </h2>
            <p>Up to {{ capacity }}</p>
          </div>
          <img class="owner-img" :src="yacht.owner.imgUrl" />
        </div>

        <div class="description-section flex column bottom-border">
          <div class="description-txt">
            Come to see my yacht in the middle of
            {{ yacht.loc.address }}. It is located in near the bay. This
            yacht can accommodate up to <span> {{ capacity }} </span> people, 
            yacht equipped with an adjustable swimming platform 
            and with hot and cold water shower and a 4.50 m auxiliary 
            boat with 10 HP engine.
            At the central bridge we find a cabin with dining 
            table, sofa and chairs, entering a lounge with independent air conditioning,
             coffee table and plasma TV, 
             dining room with independent air conditioning, 
             table and sofa, a kitchen equipped with refrigerator, sink, 
          </div>

          <p class="contact-owner-btn underline">Contact owner</p>
        </div>
        <div>
          <yacht-amenities :yacht="yacht" />
        </div>
      </div>

      <div class="trip-cmp">
        <trip-settings
          class="trip-settings"
          :yacht="yacht"
          :reviews="reviews"
        />
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

    <!-- <trip-settings-mobile
      class="trip-settings-mobile full-width"
      :yacht="yacht"
    /> -->
  </section>
</template> 


   

<script>
import yachtAmenities from "../cmps/yacht-amenities.vue";
import yachtImgGallery from "../cmps/yacht-img-gallery.vue";
import tripSettings from "../cmps/trip-settings.vue";
// import tripSettingsMobile from "../cmps/trip-settings-mobile.vue";
import reviewList from "../cmps/review-list.vue";
import reviewCategories from "../cmps/review-categories.vue";
import starRating from "../cmps/star-rating.vue";
import yachtMap from "../cmps/yacht-map.vue";
import { yachtService } from "../services/yacht-service.js";
import reviewAdd from "../cmps/review-add.vue";

export default {
  name: "yacht-details",
  data() {
    return {
      reviews: null,
      yacht: null,
      textarea: "",
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
    async postReview(postedReview) {
      var review = {
        txt: postedReview.reviewTxt,
        buyer: this.buyer,
        ownerId: this.yacht.owner._id, // will be used in the future for updating owner
        yacht: this.yacht,
        rate: postedReview.userReviewrate,
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
        const updatedyacht = await this.$store.dispatch({
          type: "postReview",
          review,
        });
        this.yacht = updatedyacht;
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
      this.yacht = yacht;
      this.yacht.owner._id;
      this.reviews = yacht.reviews;
    });
  },
  components: {
    yachtImgGallery,
    reviewList,
    tripSettings,
    // tripSettingsMobile,
    yachtMap,
    reviewCategories,
    starRating,
    yachtAmenities,
    reviewAdd,
  },
};
</script>
