<template>
  <section class="home main-layout-home" v-if="yachts">
    <div class="home-hero full">
      <img class="main-img" src="@/assets/imgs/main-img.jpg" />
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
        <button class="search-btn"></button>
      </div>
      <div class="random-search">
        <span class="rs-title">Can't decide ?</span>
        <button class="rs-inner" onclick="randYacht()">
          <p>Surprise me</p>
        </button>
      </div>
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
          <router-link to="/yacht-page" class="gallery-item-a">
            <div class="gallery-img">
              <div class="txt">
                <h4>Yacht Charter {{ loc.txt }}</h4>
                <p>Starting from ${{ loc.minPrice }}/day</p>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </section>

    <section class="top-destinations">
      <h3>Top Rated Yachts</h3>
      <div class="top-yacht-list">
        <router-link
          v-for="(yacht, idx) in yachts"
          :key="idx"
          class="top-rated-yachts"
          :to="'/details/' + yacht._id"
        >
          <img :src="yacht.imgUrls[0]" />
          <div class="top-yacht-txt">
            <h3 class="top-yacht-name">{{ yacht.name }}</h3>
            <h4 class="top-yacht-price">${{ yacht.price }}</h4>
          </div>
        </router-link>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      topLocs: [
        {
          class: "first",
          img: "https://cdn.zizoo.com/media/images/top-destinations/bahamas-lg.jpg",
          txt: "loc1",
          minPrice: 30,
        },
        {
          class: "",
          img: "https://cdn.zizoo.com/media/images/top-destinations/puerto-rico.jpg",
          txt: "loc2",
          minPrice: 30,
        },
        {
          class: "",
          img: "https://cdn.zizoo.com/media/images/top-destinations/greece.jpg",
          txt: "loc3",
          minPrice: 30,
        },
        {
          class: "",
          img: "https://cdn.zizoo.com/media/images/top-destinations/croatia.jpg",
          txt: "loc4",
          minPrice: 30,
        },
        {
          class: "",
          img: "https://cdn.zizoo.com/media/images/top-destinations/british-virgin-islands.jpg",
          txt: "loc5",
          minPrice: 30,
        },
        {
          class: "",
          img: "https://cdn.zizoo.com/media/images/top-destinations/spain.jpg",
          txt: "loc6",
          minPrice: 30,
        },
        {
          class: "",
          img: "https://cdn.zizoo.com/media/images/top-destinations/turkey.jpg",
          txt: "loc7",
          minPrice: 30,
        },
        {
          class: "",
          img: "https://cdn.zizoo.com/media/images/top-destinations/italy.jpg",
          txt: "loc8",
          minPrice: 30,
        },
      ],
    };
  },
  computed: {
    yachts() {
      return this.$store.getters.yachtsForShow;
    },
  },
};
</script>
