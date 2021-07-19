<template>
  <section class="review-card flex row">
    <div>
      <img
        class="thumb-img"
        :src="review.by.imgUrl"
      />
      <h3>{{review.by.fullname}}</h3>
      <p>{{ review.txt }}</p>
    </div>
  </section>
</template>
            
<script>
export default {
  name: "review-preview",
  props: {
    review: Object,
  },
  computed: {
    date() {
      return new Date(this.review.createdAt).toLocaleDateString("he-IL");
    },
  },
};
</script>