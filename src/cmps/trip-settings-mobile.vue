<template>
  <section>
    <div v-if="!isFullSettingsPanel" class="main-layout">
      <div  class="settings-container flex center">
        <div class="value-for-money flex column">
          <span
            ><span class="price">${{ price }}</span
            ><span>/ night</span></span
          >
            <span class="star-container">
              <p class="star-txt">
                <i class="fas fa-star"></i>
                <span class="avg-rate">{{ avgRateFromAllReviewers }}</span>
                <span class="review-num">
                  ({{ yacht.reviews.length }} reviews)</span
                >
              </p>
            </span>
        </div>
        <button @click="openFullSettings()" class="special-btn">
          <span class="middle-level">
            <span class="inner-level" @mousemove="mousemove" :style="mousePos">
            </span>
          </span>
          <span class="special-btn-txt">Check availability</span>
        </button>
      </div>
    </div>

    <mobile-modal v-if="isFullSettingsPanel" @closeModal="closeFullSettings()" :yacht="yacht"/>
  </section>
</template>

<script>
import mobileModal from "./mobile-modal.vue";
// import datePicker from "./date-picker.vue";
// import starRating from "./star-rating.vue";
// import guestSettings from "./guest-settings.vue";
// import tripSettings from './trip-settings.vue';
// const Swal = require("sweetalert2");

export default {
  props: {
    yacht: Object,
  },
  data() {
    return {
      msg: false,
      isReserved: false,
      // mousePos:null,
      mouseX: 0,
      mouseY: 0,
      serviceFee: 10,
      orderSettings: {
        requestedDates: [],
        guest: {
          adultsNum: 1,
          childrenNum: 0,
          infantsNum: 0,
        },
        buyer: null,
        totalPrice: 0,
        nightsNum: 5,
        curryacht: this.yacht,
      },
      isTotalPriceClalculable: false,
      isFullSettingsPanel: false,
    };
  },
  methods: {
    openFullSettings(){
      this.isFullSettingsPanel=true;
      console.log('hi');
    },
    closeFullSettings(){
      this.isFullSettingsPanel=false;
    },
    setDates(value) {
      this.calcNightsNum(value);
      const startDate = value[0].split("-").join("/");
      const endDate = value[1].split("-").join("/");
      this.orderSettings.requestedDates = [startDate, endDate];
      this.isTotalPriceClalculable = true;
    },
    calcNightsNum(value) {
      var start = value[0].split("-");
      var end = value[1].split("-");
      start = new Date(start[2], start[1] - 1, start[0]).getTime();
      end = new Date(end[2], end[1] - 1, end[0]).getTime();
      this.orderSettings.nightsNum = Math.round(
        (end - start) / 1000 / 3600 / 24
      );
    },
    setGuests(value) {
      this.orderSettings.guest = value;
    },
    async sendOrderRequest() {
      // console.log('tripSettings', this.orderSettings);
      try {
        await this.$store.dispatch({
          type: "setPendingOrder",
          orderSettings: this.orderSettings,
        });
        this.isReserved = true;
        this.open1();
      } catch (err) {
        console.log(this.orderSettings, "this.orderSettings");
        console.log("could not send order request", err);
        this.open4();
      }
    },
    open1() {
      this.$notify({
        title: "Reservation sent successfully",
        message: "Final order confirmation will be sent by mail",
        type: "success",
        position: "bottom-right",
      });
    },

    open4() {
      this.$notify.error({
        title: "Error",
        message: "Please Try Again later",
      });
    },

    mousemove(e) {
      this.mouseX = e.offsetX;
      this.mouseY = e.offsetY;
      // this.mousePos= `{background-position: calc((100 - var(${this.mouseX}, 0)) * 1%) calc((100 - var(${this.mouseY}, 0)) * 1%)}`
      // console.log(this.mouseX);
    },
    avgRateFromAllReviewers() {
      if (this.yacht.reviews) {
        let sum = this.yacht.reviews.reduce((acc, currVal) => {
          acc += currVal.avgRate;
          return acc;
        }, 0);
        return parseFloat(sum / this.yacht.reviews.length).toFixed(1);
      }
    },
    nights() {
      return (this.orderSettings.nightsNum = 5);
    },
  },
  computed: {
    price() {
      return this.yacht.price;
    },
    priceCalc() {
      var priceCalc = this.yacht.price * this.orderSettings.nightsNum;
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.orderSettings.totalPrice = priceCalc + this.serviceFee;
      return priceCalc;
    },
    mousePos() {
      return {
        backgroundPosition: `${100 - this.mouseX / 3}% ${
          100 - this.mouseY * 2
        }% `,
      };
      // return {backgroundPosition: `calc((100 - var(${this.mouseX}, 0)) * 1%) calc((100 - var(${this.mouseY}, 0)) * 1%)`}
    },
  },
  created() {
    this.orderSettings.buyer = this.$store.getters.loggedinUser;
  },
  components: {
    // datePicker,
    // starRating,
    // guestSettings,
    // tripSettings,
    mobileModal
  },
};
</script>   

<style>
.el-dropdown-link {
  cursor: pointer;
  color: #3888ff;
}
.el-icon-arrow-down {
  font-size: 12px;
}

.review-num{
color: rgb(113,113,113);
margin-left: 3px;
  font-size: 12px;
}
.avg-rate{
  margin-left: 3px;
color: #222222;
font-weight: 500;
font-size: 18px;
}

.star-rating{
  font-size:14px;
}
</style>