<template>
  <section>
    <div class="review-card">
      <div class="flex">
      <img
        class="reviewer-img thumb-img"
        :src="review.by.imgUrl"/>
      <div class="review-txt-section">
        <h3>{{review.by.fullname}}</h3>
        <span class="review-date">{{date}}</span>
      </div>
      </div>
      <div>{{ reviewPrevTxt}}</div>
    </div>
  </section>
</template>
            
<script>
const moment = require("moment");

export default {
  name: "review-preview",
  props: {
    review: Object,
  },
  data(){
    return{
      reviewTxt:'',
      isReadMore:false,
      isShowMoreReviews:false
    }
  },
  computed: {
    date() {
      var date=moment(this.review.by.time).format ("MMMM YYYY")
      return date
    },
  reviewPrevTxt(){
    if (this.review.txt.split(' ').length<45) {
      return this.review.txt
    }else{
      return this.review.txt.split(' ').splice(0,45).join(' ')+' ...'
    }
  }
  },
};
</script>




