<template>
  <section class="continer" @click="onDetails">
      <div class="main">
        <el-carousel indicator-position="none" trigger="click" :autoplay="false">
          <el-carousel-item v-for="(img, idx) in imgs" :key="idx">
            
    <!-- <router-link :to="'/details/' + yacht._id"> -->
   
            <img class="img" :src= imgs[idx] style="width:100%; height: 100%"/>
       
             <button
              @click.stop.prevent="toggleLike()"
            >
              <i :class="thisLike" class="fas fa-heart"></i>
            </button>
        
    <!-- </router-link> -->
          </el-carousel-item>
        </el-carousel>
      <div class="yacht-preview">
      
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
  </section>
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


