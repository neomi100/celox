<template>
<!-- <div> -->
  <!-- <filter @filtered="filter" /> -->
  <div class="continer" @click="onDetails">
      <section class="yacht-preview">

        <!-- <img class="yacht-img" :src="yacht.imgUrls[currentSrc]"/> -->
        <!-- <button class="right"></button><img/> -->
        <el-carousel indicator-position="none" trigger="click" :autoplay="false">
          <el-carousel-item v-for="(img, idx) in imgs" :key="idx">
    <router-link :to="'/details/' + yacht._id">
    <!-- <a> -->
            <img class="img" :src= imgs[idx] />
            <!-- <img
        v-if="!isLiked"
        title="Save To Favorites"
        @click="ToggleLike(stay)"
        class="like-btn"
        src="../assets/imgs/icons/heart.png"
      />
      <img
        v-else
        title="Remove From Favorites"
        @click="ToggleLike(stay)"
        class="like-btn"
        src="../assets/imgs/icons/fillheart.png"
      /> -->
    <!-- <button
              class="btn flex center space-evenly action-btn"
              v-if="isLiked"
              @click="toggleLike()"
            > -->
    <!-- <button
              class="like-btn fas fa-heart"
              @click="toggleLike()" -->
           
              <!-- <i class="save-btn btn fas fa-heart" style="color: #ca4c4c"></i> -->
              <!-- <span>Save</span> -->
            <!-- </button> -->


              <!-- class="like-btn far fa-heart" -->
             <button
              @click.stop.prevent="toggleLike()"
            >
              <i :class="thisLike" class="fas fa-heart"></i>
            </button>
            <!-- </a> -->
    </router-link>
          </el-carousel-item>
        </el-carousel>
      </section>
      <div class="main">
      
 <router-link :to="'/details/' + yacht._id">
        <div class="yacht-up">
          <p class="right-up">
            <span class="icon" title="Max pepole"></span
            ><span> {{ capacity }}</span
            ><span class="country"> {{ yacht.loc.country }}</span>
          </p>
          <span>{{ rate }}</span>
        </div>
        <span class="yacht-name">{{ yacht.name }}</span>
        <span class="yacht-price">Daily price: {{ yacht.price }}$</span>
     </router-link>  
      </div>
  </div>
<!-- </div> -->
</template>

<script>
// import filter from './filter.vue';


export default {
  // components: { filter },

  props: {
    yacht: Object,
  },
  data() {
    return {
      imgs: this.yacht.imgUrls,
      isLiked:false
      // currentSrc: 0,
    };
  },
  computed: {
    rate() {
      const star = this.yacht.reviews[0].rate;
      var starStr = "";
      for (let i = 0; i < 5; i++) {
        // console.log(i,'i');
        if (i < star) {
          // console.log(starStr,'starsStr');
          starStr += "★";
        } else {
          starStr += "☆";
        }
      }
      return starStr;
    },
    capacity() {
      const maxPepole = this.yacht.size;
      switch (maxPepole) {
        case "small":
          return "5";
        case "medium":
          return "12";
        case "large":
          return "35";
        default:
          return "";
      }
    },
    thisLike(){
      if(this.isLiked)return 'like'
      return 'like-btn'
    }
  },
  methods: {
              async toggleLike() {
      this.isLiked = !this.isLiked;
      if (this.isLiked) {
        this.class = "save-btn btn fas fa-heart";
      } else {
        this.class = "save-btn btn far fa-heart";
      }
      await this.$store.dispatch({ type: "toggleLike", yacht: this.yacht });
    },
    onDetails(){
const id= this.yacht._id
      this.$router.push('/details/:'+id)
    }
  },
  created() {
    // this.rate
    // console.log(this.imgs, "hi3");
  },
};
</script>


