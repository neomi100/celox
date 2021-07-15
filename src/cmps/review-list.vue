<template>
  <section>
    <ul class="review-card-grid two-column-grid clean-list">
      <li v-for="review in reviews" :key="review._id">
        <review-preview :review="review"></review-preview>
      </li>
    </ul>
  </section>
</template>

<script>
import reviewPreview from "../cmps/review-preview.vue";

export default {
  name: "review-list",
  props: {
    reviews: Array,
  },
  methods: {
  },
  components: {
    reviewPreview,
  }
};
</script>