<template>
  <section >
    <div v-if="isWideWindow" class="img-grid-container">
      <img
        v-for="(img, idx) in imgs"
        :key="idx"
        class="yacht-img object-fit"
        :src="imgs[idx]"
      />
    </div>
    <el-carousel v-else :autoplay="true" :interval="4000" trigger="click">
      <el-carousel-item v-for="(img, idx) in imgs" :key="idx" autoplay="false">
        <img :src="imgs[idx]" :class="`slide-imgs${idx}`" style="width: 100%" />
      </el-carousel-item>
    </el-carousel>
  </section>
</template>

<script>
export default {
  name: "yacht-img-gallery",
  props: {
    imgs: Array,
  },
  data() {
    return {
      isWideWindow: false,
    };
  },
  methods: {
    windowSize() {
      this.isWideWindow = window.innerWidth > 700 ? true : false
    },
  },
  created() {
    this.windowSize()
    window.addEventListener('resize', () => {
      this.windowSize()
    })
  }
};
</script>