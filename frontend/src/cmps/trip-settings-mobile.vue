<template>
  <section>
    <div v-if="!isFullSettingsPanel" class="main-layout">
      <div  class="settings-container flex center">
        <div class="value-for-money flex column">
          <span
            ><span class="price">${{ price }}</span
            ><span>/ night</span></span>
            <span class="star-container">
              <p class="star-txt">
                <i class="fas fa-star"></i>
                <span class="avg-rate">{{ rateFromAllReviewers }}</span>
                <span class="review-num">
                  ({{ yacht.reviews.length }} reviews)</span>
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

export default {
  props: {
    yacht: Object,
  },
  data() {
    return {
      msg: false,
      isReserved: false,
      mouseX: 0,
      mouseY: 0,
      serviceFee: 10,
      orderSettings: {
        requestedDates: [],
        guest: {
          adultsNum: 1,
        },
        buyer: null,
        totalPrice: 0,
        nightsNum: 5,
        currYacht: this.yacht,
      },
      isTotalPriceClalculable: false,
      isFullSettingsPanel: false,
    };
  },
  methods: {
    openFullSettings(){
      this.isFullSettingsPanel=true;
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
        (end - start) / 1000 / 3600 / 24);
    },
    setGuests(value) {
      this.orderSettings.guest = value;
    },
    async sendOrderRequest() {
      try {
        await this.$store.dispatch({
          type: "setPendingOrder",
          orderSettings: this.orderSettings,
        });
        this.isReserved = true;
        this.open1();
      } catch (err) {
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
    },
    rateFromAllReviewers() {
      if (this.yacht.reviews) {
        let sum = this.yacht.reviews.reduce((acc, currVal) => {
          acc += currVal.rate;
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
          100 - this.mouseY * 2}% `,
      };
    },
  },
  created() {
    this.orderSettings.buyer = this.$store.getters.loggedinUser;
  },
  components: {
    mobileModal
  },
};
</script>   
