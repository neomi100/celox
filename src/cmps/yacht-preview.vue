<template>
  <div class="continer">
      <section class="yacht-preview">
        <!-- <img class="yacht-img" :src="yacht.imgUrls[currentSrc]"/> -->
        <!-- <button class="right"></button><img/> -->
        <el-carousel trigger="click" :autoplay="false">
          <el-carousel-item v-for="(img, idx) in imgs" :key="idx">
    <router-link :to="'/details/' + yacht._id">
            <img class="yacht-img" :src= imgs[idx] />
    </router-link>
          </el-carousel-item>
        </el-carousel>
      </section>
      <div class="main">
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
      </div>
  </div>
</template>

<script>
// import Filter from './filter.vue';
export default {
  props: {
    yacht: Object,
  },
  data() {
    return {
      imgs: this.yacht.imgUrls,
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
  },
  methods: {},
  created() {
    // this.rate
    console.log(this.imgs, "hi3");
  },
};
</script>


