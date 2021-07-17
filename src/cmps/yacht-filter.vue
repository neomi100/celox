<template>
  <section class="filter">
    <div class="right">
      <!-- <label> Search our yacht: </label>
        <input ref="title" type="text" @input="setFilter" placeholder="Search...." v-model="filterBy.location"> --> 

    <div class="block">
        <el-date-picker
          v-model="filterBy.dates"
          @change="setFilter"
          type="daterange"
          start-placeholder="Start Date"
          end-placeholder="End Date"
        >
        </el-date-picker>
      </div>
    </div>

    <div class="left">
      <button class="filter-btn" @click="changeSize">Size ▽</button>
      <div class="size" :class="open" >
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
      </div>

      <button class="filter-btn" @click="changeRate">Rate ▽</button>
      <div :class="openRate">
  <el-rate  v-model="filterBy.rate" 
    @change="setFilter" ></el-rate>
</div>


      <button class="filter-btn" @click="changePrice">Price ▽</button>
      <div :class="openPrice">
    <label for="age">Dayly price: ${{ filterBy.price }}</label>
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

<button>Clear filter</button>

      <!-- <div class="size" :class="openRate">
    <el-select  v-model="filterBy.rate" 
    @change="setFilter" placeholder="Rate:" size="medium" >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </div> -->
    <!-- <date-picker></date-picker> -->

    <!-- OLD DATES -->
    <!-- <label for="dob">Dates:</label>
        <input type="date" id="dob" name="dob" /> -->
    <!-- OLD size -->
    <!-- <label for="browser">Size:</label>
    <input
      v-model="filterBy.size"
      list="browsers"
      name="browser"
      id="browser"
      @change="setFilter"
    />
    <datalist id="browsers">
      <option>All</option>
      <option value="small">Small</option>
      <option value="medium">Medium</option>
      <option value="large">Large</option>
    </datalist> -->


    <!-- <label>Rate:</label>
    <select v-model="filterBy.rete" @change="setFilter" id="filter">
      <option>All</option>
      <option value="1">★</option>
      <option value="2">★★</option>
      <option value="3">★★★</option>
      <option value="4">★★★★</option>
      <option value="5">★★★★★</option>
    </select> -->

    <!-- <label for="age">Dayly price: ${{ filterBy.price }}</label>
    <input
      type="range"
      id="price"
      name="price"
      min="500"
      max="1900"
      step="10"
      @change="setFilter"
      v-model="filterBy.price"
    /> -->

    
  </section>
</template>

<script>
// import datePicker from "./date-picker.vue";
export default {
  data() {
    return {
    showSize:false,
    showRate:false,
    showPrice:false,
      filterBy: {
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
        this.showSize=!this.showSize  
    },
    changeRate(){
        this.showRate=!this.showRate
    },
    changePrice(){
        this.showPrice=!this.showPrice
    }
  },
  computed:{
      open(){
          let size = (this.showSize)?  'isOpen':  'isClose';
          return size;
      },
      openRate(){
          let rate = (this.showRate)?  'isOpen':  'isClose';
          return rate;
      },
      openPrice(){
          let price = (this.showPrice)?  'isOpen':  'isClose';
          return price;
      },
  }
  // created(){
  // },
  //   components: {
  //     datePicker,

  //   },
};
</script>

