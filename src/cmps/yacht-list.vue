<template>
  <section class="yacht-list">
        <yacht-preview v-for="yacht in yachts" :key="yacht._id" :yacht="yacht" />
 
  </section>
</template>
    <!-- <ul class="yacht-list" v-if="yachts">
      <li v-for="yacht in yachts" :key="yacht._id" >
      </li>
    </ul> -->

<script>
import yachtPreview from '../cmps/yacht-preview.vue';
export default {
  props: {
    yachts: Array,
  },
  components: {
    yachtPreview,
  },

};
</script>

