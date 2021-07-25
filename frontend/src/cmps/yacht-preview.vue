<template>
  <section class="continer" @click="onDetails">
    <div class="main">
      <el-carousel indicator-position="none" trigger="click" :autoplay="false">
        <el-carousel-item v-for="(img, idx) in imgs" :key="idx">
          <img class="img" :src="imgs[idx]" style="width: 100%; height: 100%" />
          <button @click.stop.prevent="toggleLike()">
            <i :class="thisLike" class="fas fa-heart"></i>
          </button>
        </el-carousel-item>
      </el-carousel>
      <div class="yacht-preview">
          <div class="yacht-up flex space-between" @click="onDetails">
            <!-- <div class="right-up flex"> -->
              <p class="full-address"> <span class="country">{{ yacht.loc.country }}</span>, {{yacht.loc.city}}, {{yacht.loc.address}}</p>
              <p class="max-pepole"><span> {{ capacity }}</span
              ><span class="icon" title="Max-pepole"></span></p>
            <!-- </div> -->
          </div>
          <div class="yacht-down">
          <div>
          <span class="yacht-name">{{ yacht.name }}</span>
          <div class="bottom-line flex align-center">

          <span class="yacht-price">Daily price: ${{ yacht.price }}</span>
          <p class="rating-container">
          <i class="fas fa-star"></i>
          <span>{{rate.toFixed(1)}}</span>
          </p>
          <p class="review-lng"> ({{yacht.reviews.length}})</p>
          </div>
          <!-- <button class="edit" @click.stop.prevent="edit">Edit</button> -->
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { utilService } from '../services/util.service';

export default {
  props: {
    yacht: Object,
  },
  data() {
    return {
      imgs: this.yacht.imgUrls,
      isLiked: false,
      res:''
    };
  },
  computed: {
    rate() {

      const rates = this.yacht.reviews.map(({rate})=>rate)
      return utilService.getAvg(rates)
    },
    capacity() {
      const maxPepole = this.yacht.size;
      switch (maxPepole) {
        case "small":
          return 5;
        case "medium":
          return 12;
        case "large":
          return 35;
        default:
          return "";
      }
    },
    thisLike() {
      if (this.isLiked) return "like";
      return "like-btn";
    },
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
    onDetails() {
      this.$router.push(`/yacht/` + this.yacht._id);
    },
    edit() {
      this.$router.push(`/become-owner/` + this.yacht._id);
    },
  },
};
</script>


