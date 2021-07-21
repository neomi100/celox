<template>
  <section class="yacht-list">
        <yacht-preview v-for="yacht in yachts" :key="yacht._id" :yacht="yacht" />
  </section>
</template>

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

