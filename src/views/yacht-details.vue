<template>
  <section v-if="yacht" class="yacht-details-container">
    <div class="header-img-gallery">
      <div class="yacht-details-title flex column">
        <div class="yacht-title-primary">{{ yacht.summary }}</div>
        <div class="yacht-title-secondary flex space-between center">
          <div class="left flex space-between center">
            <star-rating :reviews="this.reviews" /> <span> · </span>
            <a class="link" href="#location">{{ yacht.loc.address }}</a>
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

    <div class="yacht-details">
      <div class="bottom-border yacht-description">
        <div class="flex space-between bottom-border yacht-desctiption-title">
          <div>
            <h2 class="ownered-by">
              {{ yacht.name }} ownered by {{ yacht.owner.fullname }}
            </h2>
            <p>Up to {{ 12 }}</p>
          </div>
          <img class="thumb-img" :src="yacht.owner.imgUrl" />
        </div>
        <div class="description-section flex column bottom-border">
          <div class="description-txt">
            Come to see my yacht in the middle of
            {{ yacht.loc.address }}. It is located in near the bay. This
            apartment can accommodate up to <span>{{ 12 }}</span> people, it is
            on the {{ yacht.capacity + 3 }}th floor (with a large lift) and is
            very well equipped. This accommodation is surrounded by shops for
            shopping, bakeries, groceries but also restaurants and bars ... Do
            not hesitate any more!
          </div>
          <p class="contact-owner-btn underline">Contact owner</p>
        </div>
        <div>
          <yacht-amenities :yacht="yacht" />
        </div>
      </div>

      <div class="trip-cmp">
        <trip-settings class="trip-settings" :yacht="yacht" />
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
import yachtImgGallery from "../cmps/yacht-img-gallery.vue";
import yachtAmenities from "../cmps/yacht-amenities.vue";
import tripSettings from "../cmps/trip-settings.vue";
// import tripSettingsMobile from "../cmps/trip-settings-mobile.vue";
import reviewList from "../cmps/review-list.vue";
import reviewCategories from "../cmps/review-categories.vue";
import starRating from "../cmps/star-rating.vue";
import yachtMap from "../cmps/yacht-map.vue";
import { yachtService } from "../services/yacht-service.js";

export default {
  name: "yacht-details",
  data() {
    return {
      reviews: null,
      yacht: null,
      textarea: "",
      isLiked: false,
    };
  },
  methods: {
    toggleLike() {
      this.isLiked = !this.isLike;
      if (this.isLiked) {
        this.class = "save-btn btn fas fa-heart";
        this.$store.dispatch("saveyacht", this.yacht.id);
      } else {
        this.class = "save-btn btn far fa-heart";
        this.$store.dispatch("unsaveyacht", this.yacht._id);
      }
    },
  },
  computed: {
    // guestAmount() {
    //   if (this.yacht.capacity > 1) {
    //     return this.yacht.capacity.toString() + " guests";
    //   } else {
    //     return this.yacht.capacity.toString() + " guest";
    //   }
    // },
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
  },
};
</script>
