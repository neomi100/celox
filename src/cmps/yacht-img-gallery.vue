<template>
  <section class="img-grid-container">
      
    <el-carousel class="yacht-details-img-carousel-container" :autoplay="false" height="200px" indicator-position="none">
      <el-carousel-item style="background-color: #fff" v-for="(img, idx) in imgs" :key="idx" >
          <img class="yacht-img-prev yacht-details-img-prev" :src= imgs[idx] />
      </el-carousel-item>
      
    </el-carousel>
      <!-- <ul class="yacht-details-img-grid-container">
        <img v-for="(img,idx) in imgs" :key="idx" class="yacht-img"
            :src="imgs[idx]">
      </ul> -->
  </section>
</template>

<script>
export default {
  name: "yacht-img-gallery",
  props: {
    imgs: Array,
  },

  methods:{
   
  }
};
</script>
//  :src="require(`@/assets/imgs/yacht-imgs/${primaryImg}.jpg`)"