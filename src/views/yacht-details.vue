<template>
  <section v-if="yacht" class="yacht-details-container">
    <h1>{{ yacht.summary }}</h1>
    <!-- TODO: finish routerLink -->
    <div>
      <star-rating :reviews="yacht.reviews" />
      <router-link to="/yacht/:id/:location?">{{yacht.loc.address}}</router-link>
    </div>

    <div>
      <i class="share-btn btn fas fa-share-square">Share</i>

      <i class="save-btn btn fas fa-heart" style="color: #ca4c4c" v-if="isLiked" @click="toggleLike()">Save</i>

      <i class="save-btn btn far fa-heart" v-if="!isLiked" @click="toggleLike()">Save</i>
    </div>

    <div class="img-gallery" :imgs="yacht.imgUrls" />

    <h1>{{ yacht.name }} ownered by {{ yacht.owner.fullname }}</h1>

    <p>Up to {{ guestAmount }}</p>

    <img class="thumb-img" :src="yacht.owner.imgUrl" />

    <yacht-amenities :yacht="yacht" />


    <review-list :reviews="yacht.reviews" />

    <review-categories :reviews="yacht.reviews" />

    <div>
      Contact owner
      <el-input
        type="textarea"
        :rows="2"
        placeholder="Please input"
        v-model="textarea"
      >
      </el-input>

      <button class="call-to-action-btn">Send message</button>
    </div>

    <yacht-map :location="yacht.loc" />
  </section>
</template>

<script>
import yachtAmenities from "../cmps/yacht-amenities.vue";
// import yachtImgGallery from "../cmps/yacht-img-gallery.vue";
import reviewList from "../cmps/review-list.vue";
import reviewCategories from "../cmps/review-categories.vue";
import starRating from "../cmps/star-rating.vue";
import yachtMap from "../cmps/yacht-map.vue";
import { yachtService } from "../services/yacht-service.js";

export default {
  name: "yacht-details",
  data() {
    return {
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
    yachtService.getById(_id)
    .then((yacht) => {
      console.log(yacht);
      this.yacht = yacht;
    });
  },
  components: {
    // yachtImgGallery,
    reviewList,
    yachtMap,
    reviewCategories,
    starRating,
    yachtAmenities,
  },
};
</script>
