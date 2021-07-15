<template>
  <section class="img-grid-container">
    <img
      class="main-img"
      :src="imgs[0]"
     
    />
    <div class="secondary-imgs">
      <!-- <ul class="yacht-details-img-grid-container">
        <li v-for="img in secondaryImgs" :key="img">
          <img
            class="yacht-img"
            :src="require(`@/assets/imgs/yacht-imgs/${img}.jpg`)"
          />
        </li>
      </ul> -->
    </div>
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
      // primaryImg: this.imgs[0],
      // secondaryImgs : imgs.slice(1,imgs.length-1)
    };
  },
  created(){
    console.log(this.imgs, 'imgs');
  }
};
</script>
//  :src="require(`@/assets/imgs/yacht-imgs/${primaryImg}.jpg`)"