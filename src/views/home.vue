<template>
  <section>
    <div class="home">
      <img class="main-img" src="@/assets/main-img.jpg" />
      <div class="searchBox">
        <div class="sb-input div0" onclick="a()">
          <span class="sb-input-title">Check In Date</span>
          <span class="sb-input-data">Select date</span>
        </div>
        <div class="sb-input div1" onclick="a()">
          <span class="sb-input-title">Check Out Date</span>
          <span class="sb-input-data">Select data</span>
        </div>
        <div class="sb-input div2" onclick="b()">
          <span class="sb-input-title">Location</span>
          <span class="sb-input-data">Select Location</span>
        </div>
        <a href="#">
          <img src="@/assets/images/search1_trans.png" alt="Alternate Text" />
        </a>
      </div>

      <div class="pickDate"></div>

      <div class="pickLocation"></div>

      <div class="random-search">
        <span class="rs-title">Didn't find what you were looking for ?'</span>
        <div class="rs-inner">
          <span>Find your random yacht !</span>
        </div>
      </div>
    </div>
    <div>
      <h2>Filter Locations</h2>
      
    </div>
    <div class="top-destinations" style="display: none">
      <h3>Top Destinations</h3>
      <div class="destination">
        <ul>
          <li v-for="(yacht, idx) in yachts" :key="idx">
            <span>{{ yacht.name }}</span>
          </li>
        </ul>
        <!-- {{ yacht }} -->
      </div>
    </div>
    <div>
      <h3>Top Rated Yachts</h3>
      <ul class="top-rated-yachts">
        <li v-for="(yacht, idx) in yachts" :key="idx">
          <a v-bind:href="'/details/' + yacht._id">
            <img v-bind:src="yacht.imgUrls[0]" alt="" />
          </a>
          <h3 class="yacht-name">{{ yacht.name }}</h3>
          <h4 class="yacht-price">{{ formatPrice(yacht.price) }} USD</h4>
        </li>
      </ul>
      <!-- {{ yacht.name }} -->
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    yachts() {
      return this.$store.getters.yachtsForShow;
    },
  },
  methods: {
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },
};
</script>
