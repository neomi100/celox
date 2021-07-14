<template>
  <section>
    <ul class="yacht-list" v-if="yachts">
      <li v-for="yacht in yachts" :key="yacht._id" class="yacht-preview-container">
        <yacht-preview :yacht="yacht" />
      </li>
    </ul>
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

