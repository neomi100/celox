<template>
  <section class="home main-layout-home" v-if="yachts">
    <section class="hero full main-layout">
      <h2 class="zayin">BOOK YOUR NEXT DREAM</h2> 
      <div
        class="filter-container flex justify-center align-center scroll-serarch top-part"
      >
        <home-filter></home-filter>
      </div>
      <div class="random-search">
        <span class="rs-title">Can't decide ?</span>
        <button class="rs-inner" @click="randomYacht()">
          <p>Surprise me !</p>
        </button>
      </div>
    </section>
    <div class="home-hero full">
      
    </div>

    <section>
      <h2>Top destinations</h2>
      <ul class="destinations-imgs-ul destinations-imgs">
        <li
          v-for="loc in topLocs"
          :key="loc.txt"
          :class="`gallery-item ${loc.class}`"
          :style="{ backgroundImage: 'url(' + loc.img + ')' }"
        >
          <router-link to="/yacht" class="gallery-item-a">
            <div class="gallery-img">
              <div class="txt">
                <h4>Yachts Charter {{ loc.txt }}</h4>
                <p>Starting from ${{ loc.minPrice }}/day</p>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </section>

    <section class="top-destinations">
      <img src="../assets/imgs/free.jpeg" alt="" />
      <div class="content">
        <h2>Try hosting</h2>
        <h4>
          Earn extra income and unlock new opportunities by sharing your space
        </h4>
        <button>Join Us</button>
      </div>
    </section>
  </section>
</template>

<script>
import homeFilter from "@/cmps/home-filter.vue";
export default {
  components: { homeFilter },
  data() {
    return {
      title: "",
      showDates: false,
      showSearch: false,
      showCheckOut: false,
      topLocs: [
        {
          class: "first",
          img:
            "https://cdn.zizoo.com/media/images/top-destinations/bahamas-lg.jpg",
          txt: "Macau",
          minPrice: 30,
        },
        {
          class: "",
          img:
            "https://cdn.zizoo.com/media/images/top-destinations/puerto-rico.jpg",
          txt: "London",
          minPrice: 30,
        },
        {
          class: "",
          img: "https://cdn.zizoo.com/media/images/top-destinations/greece.jpg",
          txt: "Israel",
          minPrice: 30,
        },
        {
          class: "",
          img:
            "https://cdn.zizoo.com/media/images/top-destinations/croatia.jpg",
          txt: "Tanzania",
          minPrice: 30,
        },
        {
          class: "",
          img:
            "https://cdn.zizoo.com/media/images/top-destinations/british-virgin-islands.jpg",
          txt: "Madrid",
          minPrice: 30,
        },
        {
          class: "",
          img: "https://cdn.zizoo.com/media/images/top-destinations/spain.jpg",
          txt: "France",
          minPrice: 30,
        },
        {
          class: "",
          img: "https://cdn.zizoo.com/media/images/top-destinations/turkey.jpg",
          txt: "Guadeloupe",
          minPrice: 30,
        },
        {
          class: "",
          img: "https://cdn.zizoo.com/media/images/top-destinations/italy.jpg",
          txt: "Sweden",
          minPrice: 30,
        },
      ],
    };
  },
  methods: {
    selectDates() {
      this.showDates = !this.showDates;
    },
    onSearch() {
      this.showSearch = !this.showSearch;
    },
    selectCheckOut() {
      this.showCheckOut = !this.showCheckOut;
    },
    // onSearchResults() {
    //   this.$router.push("/yacht");
    //   this.$store.dispatch({ type: "searchResults", title: this.title });
    // },
    randomYacht() {
      const yachts = this.yachts;
      var yacht = yachts[Math.floor(Math.random() * yachts.length)];
      return this.$router.push("/yacht/" + yacht._id);
    },
  },
  computed: {
    yachts() {
      return this.$store.getters.yachtsForShow;
    },
    openDates() {
      let date = this.showDates ? "isOpen" : "isClose";
      return date;
    },
    openSearch() {
      let search = this.showSearch ? "isOpen" : "isClose";
      return search;
    },
    checkOut() {
      let check = this.showCheckOut ? "isOpen" : "isClose";
      return check;
    },
  },
};
</script>
