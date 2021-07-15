<template>
  <section v-if="reviews" class="star-rating">
    <span class="star-container">  
      <p class="star-txt">
        <i class="fas fa-star"></i> 
        <span class="avg-rate">{{avgRateFromAllReviewers}}</span>
        <!-- <span class="review-num"> ({{incRate*reviews.length }})</span> -->
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
    avgRateFromAllReviewers() {
      if (this.reviews) {
        let sum = this.reviews.reduce((acc, currVal) => {
          acc += currVal.avgRate;
          return acc;
        }, 0);
        return parseFloat(sum / this.reviews.length).toFixed(1);
      }else{return 0}
    },
  },
};
</script>

<style>
.review-num{
color: rgb(113,113,113);
margin-left: 3px;
}
.avg-rate{
  margin-left: 3px;
color: #222222;
font-weight: 500;
}

.star-rating{
  font-size:14px;
}
</style>