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
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"], 
      reviewToAdd: {
        reviewTxt:'',
        userReviewRate: null,
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
      this.reviewToAdd.userReviewRate=sum/keysCount;
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
        userReviewRate: null
      }
    }
  },
  computed: {
    categoryName() {
      return Object.keys(this.reviewToAdd.categoryMap);
    },
  },
};
</script>

