<template>
  <section>
    <div class="wrapper">
      <div class="price-star flex space-between align-baseline">
    <span class="price">{{ price }}</span>

    <star-rating :reviews="reviews" />

      </div>

    <date-picker></date-picker>

    <!-- <el-dropdown>
      <span class="el-dropdown-link">
        GUESTS<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item
          >Adults:
          <el-input-number
            v-model="adultsNum"
            @change="handleChange"
            :min="1"
            :max="10"
          >
          </el-input-number>
        </el-dropdown-item>
        <el-dropdown-item
          >Children:
          <el-input-number
            v-model="childrenNum"
            @change="handleChange"
            :min="1"
            :max="10"
          >
          </el-input-number>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown> -->


    <button class="call-to-action-btn">Check availability</button>
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
    return {
    };
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