<template>
  <section v-if="reviews" class="star-rating">
    <span class="star-container">  
      <p class="star-txt">
        <i class="fas fa-star"></i> 
        <span class="avg-rate">{{rateFromAllReviewers}}</span>
        <span class="review-num"> ({{reviews.length }})</span>
      </p>
      </span>
  </section>
</template>

<script>
export default {
  name: "star-rating",
  props: {
    reviews: Array,
    incRate:{
      type:Number,
      default:1
    }
  },
  computed: {
    rateFromAllReviewers() {
      if (this.reviews) {
        let sum = this.reviews.reduce((acc, currVal) => {
          acc += currVal.rate;
          return acc;
        }, 0);
        return parseFloat(sum / this.reviews.length).toFixed(1);
      }else{return 0}
    },
  },
};
</script>
