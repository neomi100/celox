<template>
  <section>
    <form>
      <div class="settings-container flex column center">
        <div class="value-for-money flex space-between">
          <span>
            <span class="price">${{ price }}</span>
            <span>/ day</span>
            </span>
          <star-rating :reviews="yacht.reviews" />
        </div>
        <div class="settings flex column align-center">
          <date-picker class="date-picker flex center" :yachtId="yacht._id" @pick="setDates"></date-picker>
          <guest-settings class="guest-picker" @pickguests="setGuests"></guest-settings>
        </div>

        <button v-if="!isTotalPriceClalculable" class="special-btn">
          <span class="middle-level">
            <span class="inner-level" @mousemove="mousemove" :style="mousePos"></span>
          </span>
          <span class="special-btn-txt">Check availability</span>
        </button>

        <div v-else class="reservation-summary flex column center">
          <button v-if="!isReserved" class="special-btn" type="button" @click="sendOrderRequest()">
            <span class="middle-level">
              <span class="inner-level" @mousemove="mousemove" :style="mousePos"></span>
            </span>
            <span class="special-btn-txt">Reserve</span>
          </button>
           <ShareNetwork v-if="!isReserved" class="facebook-share"
        network="facebook"
        url="https://celox.herokuapp.com"
        title="I've just booked an yacht trip with celox!"
        description="I'm going to a yacht trip."
        quote="I've just booked an yacht trip. with celox!"
        hashtags="celox"
      >
        Share on Facebook
      </ShareNetwork>
           
          <button v-else class="special-btn-reserved">Booked</button>

          <p>You won't be charged yet</p>
          <div class="price-calc flex space-between">
            <span class="underline">${{ yacht.price }} X {{ orderSettings.nightsNum }} days</span>
            <span>${{ priceCalc }}</span>
          </div>
          <div class="service-fee flex space-between">
            <span class="underline">Service fee</span>
            <span>${{ serviceFee }}</span>
          </div>
          <div class="total-price flex space-between">
            <span>Total</span>
            <span>${{ orderSettings.totalPrice }}</span>
          </div>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
import datePicker from "./date-picker.vue";
import starRating from "./star-rating.vue";
import guestSettings from "./guest-settings.vue";

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
        buyer: {},
        totalPrice: 0,
        nightsNum: 5,
        currYacht: this.yacht,
      },
      isTotalPriceClalculable: false,
    };
  },
  methods: {
    setDates(value) {
      this.calcNightsNum(value);
      const startDate = value[0].split("-").join("/");
      const endDate = value[1].split("-").join("/");
      this.orderSettings.requestedDates = [startDate, endDate];
      this.isTotalPriceClalculable = true;
    },

    calcNightsNum(dates) {
      const [startDay, startMonth, startYear] = dates[0].split("-");
      const [endDay, endMonth, endYear] = dates[1].split("-");

      const start = new Date(startYear, startMonth - 1, startDay).getTime();
      const end = new Date(endYear, endMonth - 1, endDay).getTime();

      this.orderSettings.nightsNum = Math.round(
      (end - start) / (1000 * 3600 * 24));
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
    open2() {
      this.$notify.warning({
        title: "In order to set a reservation you must login",
        message: "You can login with a demo user or sign-up with your own user",
        type: "warning",
      });
    },
    open4() {
      this.$notify.error({
        title: "Error",
        message: "Please Try Again later",
      });
    },
    mousemove(ev) {
      this.mouseX = ev.offsetX;
      this.mouseY = ev.offsetY;
    },
  },
  computed: {
    priceCalc() {
      var priceCalc = this.yacht.price * this.orderSettings.nightsNum;
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.orderSettings.totalPrice = priceCalc + this.serviceFee;
      return priceCalc;
    },
    price() {
      return this.yacht.price;
    },
    mousePos() {
      return {
        backgroundPosition: `${100 - this.mouseX / 3}% ${100 - this.mouseY * 2}% `,
      };
    },
  },
  created() {
    this.orderSettings.buyer = this.$store.getters.loggedinUser;
  },
  components: {
    datePicker,
    starRating,
    guestSettings,
  },
};
</script>   
