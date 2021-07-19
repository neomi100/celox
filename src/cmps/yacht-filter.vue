<template>
  <section class="filter">
    <div class="right">
 
<!-- ref="" -->
    <div class="date">
        <el-date-picker
          v-model="filterBy.dates"
          @change="setFilter"
          type="daterange"
          start-placeholder="Start Date"
          end-placeholder="End Date"
          size="mini"
        >
        </el-date-picker>
      </div>
      
            <el-input
            class="search"
    size="mini"
    placeholder="Search..."
    v-model="filterBy.txt">
  </el-input>
 <!-- <input  type="text" @input="setFilter" placeholder="" v-model=""  > -->

 </div>
    <div class="left">
      <div class="filter-main">
        <button class="filter-btn" @click="changeSize">Size</button>
        <div class="size" :class="open">
          <el-radio-group
            v-model="filterBy.size"
            @change="setFilter"
            size="small"
          >
            <!-- v-model="radio1" -->
            <el-radio-button label="All"></el-radio-button>
            <el-radio-button label="Small"></el-radio-button>
            <el-radio-button label="Medium"></el-radio-button>
            <el-radio-button label="Large"></el-radio-button>
          </el-radio-group>
        </div>

        <button class="filter-btn" @click="changeRate">Rate</button>
        <div class="rate" :class="openRate">
          <el-rate v-model="filterBy.rate" @change="setFilter"></el-rate>
        </div>

        <button class="filter-btn" @click="changePrice">Price</button>
        <div class="price" :class="openPrice">
          <label for="price">Dayly price: ${{ filterBy.price }}</label>
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
      </div>

      <button class="clear" @click="clearFilter">Clear filter</button>
    </div>
  </section>
</template>

<script>
// import datePicker from "./date-picker.vue";
export default {
  data() {
    return {
      showSize: false,
      showRate: false,
      showPrice: false,
      filterBy: {
        txt:'',
        dates: "",
        price: 500,
        size: "All",
        // rate:'All'
      },
      options: [
        {
          value: "All",
          label: "All",
        },
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
      //     console.log(filterBy,'filter');
      // console.log(this.filterBy.dates, 'dates');
      // console.log(filterBy.rate, 'rate');
      // console.log(this.filterBy.size, 'size');
    },
    changeSize() {
      this.showRate = false;
      this.showPrice = false;
      this.showSize = !this.showSize;
    },
    changeRate() {
      this.showRate = !this.showRate;
      this.showSize = false;
      this.showPrice = false;
    },
    changePrice() {
      this.showPrice = !this.showPrice;
      this.showSize = false;
      this.showRate = false;
    },
    clearFilter() {
      this.filterBy = {
        dates: "",
        price: 500,
        size: "All",
        rate:'All',
        txt:''
      }
      this.setFilter()
      // console.log(this.filterBy);
      this.showSize = false;
      this.showPrice = false;
      this.showRate = false;
    },
  },
  computed: {
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

  created(){
console.log("filterede", this.filterBy);
  },
  //   components: {
  //     datePicker,

  //   },
};
</script>

