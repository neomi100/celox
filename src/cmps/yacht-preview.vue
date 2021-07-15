<template>
<div class="continer">
<div class="continer">
  <router-link :to="'/details/' + yacht._id">
    <section class="yacht-preview">
      <!-- <el-carousel class="yacht-details-img-carousel-container" :autoplay="false" height="200px" indicator-position="none">
      <el-carousel-item style="background-color: #fff" v-for="(img, idx) in imgs" :key="idx" >
          <img class="yacht-img-prev yacht-details-img-prev" :src= imgs[idx] />
      </el-carousel-item>
      
    </el-carousel> -->

      <img class="yacht-img" :src="yacht.imgUrls[currentSrc]"/>
      <!-- <button class="right"></button><img/> --> 
    </section>
<div class="main">
      <div class="yacht-up">    
      <p class="right-up">
        <span class="icon" title="Max pepole"></span><span>     {{capacity}}</span><span class="country">   {{yacht.loc.country }}</span>
      </p>
      <span>{{rate}}</span> 
        </div>  
        <span class="yacht-name">{{ yacht.name }}</span>
        <span class="yacht-price">Daily price: {{ yacht.price }}$</span>
</div>
  </router-link>
</div>
</div>
</template>

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


