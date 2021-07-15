<template>
  <section>
    <h1>review categories</h1>
    <ul>
        <li v-for="(cat,idx) in categories" :key="idx">
            <p>{{categories[idx][0]}}</p>
            <el-progress :show-text="false" color="#ca4c4c" :stroke-width="8" :percentage="starNum(idx)"></el-progress>
            <p>{{categories[idx][1]}}</p>
        </li>
    </ul>
  </section>
</template>
<script>
export default {
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
};
</script>
