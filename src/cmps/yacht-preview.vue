<template>
  <router-link :to="'/yacht-details/' + yacht._id">
    <section class="yacht-preview">
      <p>
        <span class="yacht-name">{{ yacht.name }}</span>
      </p>
      <p>
        <span class="yacht-price">Daily price:{{ yacht.price }}</span>
      </p>
      <img class="yacht-img" :src="yacht.imgUrl" />
    </section>
  </router-link>
</template>

<script>
export default {
  props: {
    yacht: Object,
  },
  data(){
    return{
yacht: ()
    }
  },
  created() {
    console.log(this.yacht,'hi');
 
  },
};
</script>


