<template>
  <router-link :to="'/details/' + yacht._id">
    <section class="yacht-preview">
      <img class="yacht-img" :src="yacht.imgUrls[currentSrc]"  />
      <p>
        <span class="yacht-name">{{ yacht.name }}</span>
      </p>
      <p>
        <span class="yacht-price">Daily price:{{ yacht.price }}</span>
      </p>
      
     
    </section>
  </router-link>
</template>
// @click="changeImage"
<script>
export default {
  props: {
    yacht: Object,
  },
  data(){
return{
  // imgs:this.yacht.imgUrls
  currentSrc: 0
}
  },
  created() {
    // console.log(this.yacht,'hi');
 
  },
};
</script>


