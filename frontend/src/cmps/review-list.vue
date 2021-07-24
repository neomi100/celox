<template>
  <section>
    <ul class="review-card-grid two-column-grid clean-list">
      <li v-for="review in reviews" :key="review._id">
        <review-preview :review="review" :showTime="showTime"></review-preview>
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
    showTime: Boolean
  },
  components: {
    reviewPreview,
  }
};
</script>