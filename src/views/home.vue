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

    <section class="top-destinations">
      <div class="txt-header">
        <h2>Top Destinations</h2>
      </div>

      <div class="destinations-imgs">
        <section>
          <ul class="destinations-imgs-ul">
            <li v-for="(img, idx) in (imgs, yachts)" :key="idx" class="gallery-item">
              <a href="/yacht-page" class="gallery-item-a overlay-2" >
                <div class="gallery-img">
                  <img class="loc-img object-fit" :src="imgs[idx]" />
                </div>
                <div class="gallery-txt">
                  <h4>Yacht Charter {{ yachts[idx].loc.country }}</h4>
                  <br />
                  <p>Starting from ${{ yachts[idx].price }}/day</p>
                </div>
              </a>
            </li>
          </ul>
        </section>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      imgs: [
        "https://cdn.zizoo.com/media/images/top-destinations/bahamas-lg.jpg",
        "https://cdn.zizoo.com/media/images/top-destinations/puerto-rico.jpg",
        "https://cdn.zizoo.com/media/images/top-destinations/greece.jpg",
        "https://cdn.zizoo.com/media/images/top-destinations/croatia.jpg",
        "https://cdn.zizoo.com/media/images/top-destinations/british-virgin-islands.jpg",
        "https://cdn.zizoo.com/media/images/top-destinations/spain.jpg",
        "https://cdn.zizoo.com/media/images/top-destinations/turkey.jpg",
        "https://cdn.zizoo.com/media/images/top-destinations/italy.jpg",
      ],
    };
  },

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
