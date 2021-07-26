<template>
  <section>
    <div class="review-section-title flex align-center">
      <i class="fas fa-star"></i> 
      <span  class="rate">{{rateFromAllReviewers}}</span>
      <span>({{reviews.length}} reviews)</span>
    </div>
    <ul class="two-column-grid-categories">
        <li v-for="(cat,idx) in categories" :key="idx" class="clean-list two-column-grid">
            <p>{{categories[idx][0]}}</p>
            <div class="bar flex">
            <p class="score">{{(categories[idx][1]).toFixed(1)}}</p>
            <el-progress class="progress-bar" :show-text="false"  :stroke-width="8" :percentage="starNum(idx)"></el-progress>
            </div>
        </li>
    </ul>
    <star-rating/>
  </section>
</template>
<script>
import starRating from './star-rating.vue';
export default {
  components: { starRating },
  name: "review-category",
  props: {
    reviews: Array,
  },
  data() {
    return {
      categories: null,
    };
  },
  methods:{
      starNum(idx){
          return this.categories[idx][1]*20
      }
  },
  created() {
    if (this.reviews) {
      var categories = this.reviews.map((review) => {
        return { ...review.category };
      });
      var categoryMap = { ...categories[0] };
      for (var i = 1; i < categories.length; i++) {
        var currCategory = categories[i];
        for (const cat in currCategory) {
          categoryMap[cat] += currCategory[cat];
        }
      }
      for (const cat in categoryMap) {
        categoryMap[cat] /= this.reviews.length;
      }
      var categoriesToRender = Object.keys(categoryMap).map((key) => [
        key,
        categoryMap[key],
      ]);
      this.categories = categoriesToRender;
    }
  },
  computed:{
     rateFromAllReviewers() {
      if (this.reviews) {
        let sum = this.reviews.reduce((acc, currVal) => {
          acc += currVal.rate;
          return acc;
        }, 0);
        return parseFloat(sum / this.reviews.length).toFixed(1);
      }else{
         return console.log('No avg');
    }
  },
  }
};
</script>
