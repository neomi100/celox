<template>
  <section>
    <h3>Add Your Review:</h3>
    <div class="add-review-inputs flex column">
        <div class="flex justify-content user-review-inputs">
          <el-input class="txt-input" type="textarea" :rows="8" 
          placeholder="Share your experience here..." v-model="reviewToAdd.reviewTxt"/>
          <ul class="clean-list review-star-input flex column">
            <li>
              <span class="category">{{ categoryName[0] }}</span>
              <el-rate v-model="reviewToAdd.categoryMap.Cleanliness" :colors="colors"/>
            </li>
            <li>
              <span class="category">{{ categoryName[1] }}</span>
              <el-rate v-model="reviewToAdd.categoryMap.Accuracy" :colors="colors"/>
            </li>
            <li>
              <span class="category">{{ categoryName[2] }}</span>
              <el-rate v-model="reviewToAdd.categoryMap.Communication" :colors="colors"/>
            </li>
            <li>
              <span class="category">{{ categoryName[3] }}</span>
              <el-rate v-model="reviewToAdd.categoryMap.Location" :colors="colors"/>
            </li>
            <li>
              <span class="category">{{ categoryName[4] }}</span>
              <el-rate v-model="reviewToAdd.categoryMap.CheckIn" :colors="colors"/>
            </li>
            <li>
              <span class="category">{{ categoryName[5] }}</span>
              <el-rate v-model="reviewToAdd.categoryMap.Accessibility" :colors="colors"/>
            </li>
          </ul>
        </div>
    </div>
        <button class="btn add-review-btn" @click="addReview()">
          Add Review
        </button>
  </section>
</template>

<script>
export default {
  name: "review-add",
  data() {
    return {
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"], // same as { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
      reviewToAdd: {
        reviewTxt:'',
        userReviewAvgRate: null,
        categoryMap: {
          Cleanliness: null,
          Accuracy: null,
          Communication: null,
          Location: null,
          CheckIn: null,
          Accessibility: null,
        },
      }
    };
  },
  methods:{
      addReview(){
      var sum=0;
      var keysCount=0;
      for (var category in this.reviewToAdd.categoryMap){
        keysCount++
        sum+=this.reviewToAdd.categoryMap[category]
      }
      this.reviewToAdd.userReviewAvgRate=sum/keysCount;
      this.$emit('postReview',this.reviewToAdd)
      this.reviewToAdd={
        reviewTxt:'',
        categoryMap: {
          Cleanliness: null,
          Accuracy: null,
          Communication: null,
          Location: null,
          CheckIn: null,
          Accessibility: null,
        },
        userReviewAvgRate: null
      }
    }
  },
  computed: {
    categoryName() {
      // if (this.reviewToAdd)
      return Object.keys(this.reviewToAdd.categoryMap);
    },
  },
};
// var categories = this.reviews.map((review) => {
//         return { ...review.category };
//       });
//       var categoryMap = { ...categories[0] };
//       for (var i = 1; i < categories.length; i++) {
//         var currCategory = categories[i];
//         for (const cat in currCategory) {
//           categoryMap[cat] += currCategory[cat];
//         }
//       }
//       for (const cat in categoryMap) {
//         categoryMap[cat] /= this.reviews.length;
//       }
//       var categoriesToRender = Object.keys(categoryMap).map((key) => [
//         key,
//         categoryMap[key],
//       ]);
//       this.categories = categoriesToRender;
</script>

