<template>
  <section class="user-details">
    <section>
      <div class="main-layout">
        <div class="user-heading">
          <div class="content">
            <div class="profile-img-container">
              <img :src="user.imgUrl" alt="" />
            </div>
            <h3>Hi I'm {{ user.username }}</h3>
            <p>Joined in 2021</p>
            <a class="edit-profile-button">Edit profile</a>
          </div>
          <a href="" class="update-photo-button">Update photo</a>
          <button class="revealRate" @click="toggleReviews()">Show my reviews</button>
        </div>
        <transition name="fade-reviews">
          <div v-if="isShown" class="reviews-container">
            <div class="head flex align-center">
              <i class="fas fa-star"></i>
              <p>{{ relativeReviews.length }} reviews</p>
            </div>
            <review-list :reviews="relativeReviews" :showTime="true" />
          </div>
        </transition>
      </div>
    </section>
  </section>
</template>
 <script>
import { yachts } from "../../data/yacht";
import reviewList from "../cmps/review-list.vue";

export default {
  data() {
    return {
      isShown: false,
    };
  },
  methods: {
    toggleReviews() {
      this.isShown = !this.isShown;
    },
  },
  computed: {
    user() {
      return this.$store.getters.loggedinUser;
    },
    relativeReviews() {
      return yachts.reduce((accum, { reviews }) => {
        const currRelatedReviews = reviews.filter(
          ({ by }) => by._id === this.user._id
        );
        return [...accum, ...currRelatedReviews];
      }, []);
    },
  },
  components: {
    reviewList,
  },
};
</script>

