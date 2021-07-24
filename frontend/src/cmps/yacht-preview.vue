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
          <div class="yacht-up" @click="onDetails">
            <p class="right-up">
              <span class="icon" title="Max pepole"></span
              ><span> {{ capacity }}</span
              ><span class="country"> {{ yacht.loc.country }}</span>
            </p>
            <span class="rate stars">{{ rate }}</span>
          </div>
          <div class="yacht-down">
          <div>
          <span class="yacht-name">{{ yacht.name }}</span>
          <span class="yacht-price">Daily price: {{ yacht.price }}$</span>
          </div>
    <button class="edit" @click.stop.prevent="edit">Edit</button>
    </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    yacht: Object,
  },
  data() {
    return {
      imgs: this.yacht.imgUrls,
      isLiked: false
    };
  },
  computed: {
    rate() {
      const star = this.yacht.reviews[0].rate;
      var starStr = "";
      for (let i = 0; i < 5; i++) {
        if (i < star) {
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
    edit(){
      this.$router.push(`/become-owner/` + this.yacht._id);
    }
  },
};
</script>


