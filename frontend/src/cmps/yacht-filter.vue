<template>
  <section class="filter layout-yacht">
      <!-- <div class="filter-yacht-filter">{{title}}</div> -->
  <div
        class="filter-container flex justify-center align-center scroll-serarch"
      >
        <home-filter></home-filter>
 
      </div>
    <!-- <div class="right">
      <div class="filter-search">
        <div class="search-input">
          <el-input
            class="search"
            size="mini"
            placeholder="Search..."
            v-model="filterBy.txt"
            @input="setFilter"
          >
          </el-input>
        </div>
        <button class="btn-search"></button>
      </div>
    </div> -->
    <!-- <div class="left"> -->
      <div class="filter-main align-center">
        <!-- <button class="filter-btn" @click="selectDates">Dates</button>
        <div class="date" :class="openDates">
          <el-date-picker
            v-model="filterBy.dates"
            @change="setFilter"
            type="daterange"
            start-placeholder="Start Date"
            end-placeholder="End Date"
            size="mini"
          >
          </el-date-picker>
        </div> -->

        <!-- <button class="filter-btn" @click="changeSize">Size</button>
        <div class="size" :class="open">
          <el-radio-group
            v-model="filterBy.size"
            @change="setFilter"
            size="small"
          >
            <el-radio-button label="All"></el-radio-button>
            <el-radio-button label="Small"></el-radio-button>
            <el-radio-button label="Medium"></el-radio-button>
            <el-radio-button label="Large"></el-radio-button>
          </el-radio-group>
        </div> -->

        <button class="filter-btn" @click="changeRate">Rate</button>
        <div class="rate" :class="openRate">
          <el-rate v-model="filterBy.rate" @change="setFilter"></el-rate>
        </div>

        <button class="filter-btn" @click="changePrice">Price</button>
        <div class="price" :class="openPrice">
          <label for="price">Daily price: ${{ filterBy.price }}</label>
          <input
            type="range"
            id="price"
            name="price"
            min="500"
            max="1900"
            step="10"
            @change="setFilter"
            v-model="filterBy.price"          
          />
        </div>
     <button class="clear filter-btn" @click="clearFilter">Clear filter</button>
      <!-- </div> -->

    </div>
  </section>
</template>

<script>
import homeFilter from "@/cmps/home-filter.vue";
export default {
 components: { homeFilter }, 
  data() {
    return {
      showDates: false,
      showSize: false,
      showRate: false,
      showPrice: false,
      filterBy: {
        txt: "",
        dates: "",
        price: 500,
        size: "All",
        guests:null
      },
      options: [
        // {
        //   value: "All",
        //   label: "All",
        // },
        {
          value: 1,
          label: "★",
        },
        {
          value: 2,
          label: "★★",
        },
        {
          value: 3,
          label: "★★★",
        },
        {
          value: 4,
          label: "★★★★",
        },
        {
          value: 5,
          label: "★★★★★",
        },
      ],
    };
  },
  methods: {
    setFilter() {
      var filterBy = JSON.parse(JSON.stringify(this.filterBy));
      this.$emit("filterede", filterBy);
    },
    selectDates() {
      this.showDates = !this.showDates;
      this.showRate = false;
      this.showPrice = false;
      this.showSize = false;
    },
    changeSize() {
      this.showSize = !this.showSize;
      this.showDates = false;
      this.showRate = false;
      this.showPrice = false;
    },
    changeRate() {
      this.showRate = !this.showRate;
      this.showDates = false;
      this.showSize = false;
      this.showPrice = false;
    },
    changePrice() {
      this.showPrice = !this.showPrice;
      this.showDates = false;
      this.showSize = false;
      this.showRate = false;
    },
    clearFilter() {
      this.filterBy = {
        dates: "",
        price: 500,
        size: "All",
        rate: "All",
        txt: "",
      };
      this.setFilter();
      this.showSize = false;
      this.showPrice = false;
      this.showRate = false;
    },
  },
  computed: {
        title(){
       return this.$store.getters.getTitle;
    },
    openDates() {
      let date = this.showDates ? "isOpen" : "isClose";
      return date;
    },
    open() {
      let size = this.showSize ? "isOpen" : "isClose";
      return size;
    },
    openRate() {
      let rate = this.showRate ? "isOpen" : "isClose";
      return rate;
    },
    openPrice() {
      let price = this.showPrice ? "isOpen" : "isClose";
      return price;
    },
  },
};
</script>

