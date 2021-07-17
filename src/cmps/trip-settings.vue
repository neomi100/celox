<template>
  <section>
    <div class="box">
      <div class="price-star flex space-between align-baseline">
        <span class="price">{{ price }}</span>
        <star-rating :reviews="reviews" />
      </div>

      <date-picker></date-picker>

      <button class="call-to-action-btn s">Check availability</button>
    </div>
  </section>
</template>

<script>
import datePicker from "./date-picker.vue";
import starRating from "./star-rating.vue";
export default {
  props: {
    yacht: Object,
    reviews: Array,
  },
  data() {
    return {};
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
  },
  computed: {
    price() {
      return "$" + this.yacht.price + "/ Night";
    },
  },
  components: {
    datePicker,
    starRating,
  },
};
</script>


<style>
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>