<template>
  <router-link :to="'/yacht-details/' + yacht._id">
    <section class="yacht-preview">
      <img class="yacht-img" :src="yacht.imgUrls[currentSrc]"/>
      <!-- <button class="right"></button><img/> -->
      
      <p class="yacht-up">
        <span class="icon"></span><span>  {{capacity}}</span><span>  {{yacht.loc.country }}</span>
      </p>
        <span class="yacht-name">{{ yacht.name }}</span>
        <span class="yacht-price">Daily price: {{ yacht.price }}$</span>
      <span>{{rate}}</span>
    </section>
  </router-link>
</template>
// @click="changeImage"
<script>
export default {
  props: {
    yacht: Object,
  },
  data() {
    return {
      // imgs:this.yacht.imgUrls
      currentSrc: 0,
    };
  },
  computed: {
    rate() {
      const star = this.yacht.reviews[0].rate;
      var starStr = ""
      for (let i = 0; i < 5; i++) {
        // console.log(i,'i');
        if (i < star) {
          // console.log(starStr,'starsStr');
          starStr+="★"
        } else {
          starStr+="☆"
        }
      }
      return starStr;
    },
    capacity() {
      const maxPepole = this.yacht.size;
      switch (maxPepole) {
        case 'small':
          return '5';
        case 'medium':
          return '12';
        case 'large':
          return '35';
      default: return ''
      }
    },
  },
  methods:{

  },
  created() {
    // this.rate
    console.log(this.yacht.size, "hi3");

  },
};
</script>


