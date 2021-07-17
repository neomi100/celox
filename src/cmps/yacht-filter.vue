<template>
  <section class="filter">
    <div class="right">
      <!-- <label> Search our yacht: </label>
        <input ref="title" type="text" @input="setFilter" placeholder="Search...." v-model="filterBy.location"> -->

      <!-- <div class="block">
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
      <button class="filter-btn" @click="changeSize">Size ▼</button>

      <div :class="size">
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
    </div>

      <button class="filter-btn" @click="changeRate">Rate ▼</button> -->

<div class="sub-filter-container f-as-jfs"><div class="pointer el-dropdown"><span class="item fill-parent f-ac-jc el-dropdown-selfdefine   " aria-haspopup="list" aria-controls="dropdown-menu-9877" role="button" tabindex="0"> Price </span></div><div class="el-dropdown"><span class="item fill-parent f-ac-jc el-dropdown-selfdefine" aria-haspopup="list" aria-controls="dropdown-menu-8017" role="button" tabindex="0"> Type </span><ul class="el-dropdown-menu el-popper filter-popper flex column" id="dropdown-menu-8017" style="display: none;"><li tabindex="-1" class="el-dropdown-menu__item"><!----><div role="group" aria-label="checkbox-group" class="el-checkbox-group f-as-jsb column"><label class="el-checkbox"><span class="el-checkbox__input"><span class="el-checkbox__inner"></span><input type="checkbox" aria-hidden="false" class="el-checkbox__original" value="Villa"></span><span class="el-checkbox__label">Villa</span></label><label class="el-checkbox"><span class="el-checkbox__input"><span class="el-checkbox__inner"></span><input type="checkbox" aria-hidden="false" class="el-checkbox__original" value="House"></span><span class="el-checkbox__label">House</span></label><label class="el-checkbox"><span class="el-checkbox__input"><span class="el-checkbox__inner"></span><input type="checkbox" aria-hidden="false" class="el-checkbox__original" value="Cabin"></span><span class="el-checkbox__label">Cabin</span></label><label class="el-checkbox"><span class="el-checkbox__input"><span class="el-checkbox__inner"></span><input type="checkbox" aria-hidden="false" class="el-checkbox__original" value="Hut"></span><span class="el-checkbox__label">Hut</span></label><label class="el-checkbox"><span class="el-checkbox__input"><span class="el-checkbox__inner"></span><input type="checkbox" aria-hidden="false" class="el-checkbox__original" value="Appartment"></span><span class="el-checkbox__label">Appartment</span></label></div></li><div class="sub-filter-btns"><button type="button" class="el-button clear el-button--default"><!----><!----><span> Clear </span></button><button type="submit" class="el-button update el-button--default"><!----><!----><span> Update </span></button></div></ul></div><div class="el-dropdown"><span class="item fill-parent f-ac-jc el-dropdown-selfdefine" aria-haspopup="list" aria-controls="dropdown-menu-3389" role="button" tabindex="0"> Amenities </span><ul class="el-dropdown-menu el-popper filter-popper flex column" id="dropdown-menu-3389" style="display: none;"><li tabindex="-1" class="el-dropdown-menu__item"><!----><div role="group" aria-label="checkbox-group" class="el-checkbox-group f-as-jsb"><div class="f-as-jsb column"><label class="el-checkbox"><span class="el-checkbox__input"><span class="el-checkbox__inner"></span><input type="checkbox" aria-hidden="false" class="el-checkbox__original" value="Wifi"></span><span class="el-checkbox__label">Wifi</span></label><label class="el-checkbox"><span class="el-checkbox__input"><span class="el-checkbox__inner"></span><input type="checkbox" aria-hidden="false" class="el-checkbox__original" value="Kitchen"></span><span class="el-checkbox__label">Kitchen</span></label><label class="el-checkbox"><span class="el-checkbox__input"><span class="el-checkbox__inner"></span><input type="checkbox" aria-hidden="false" class="el-checkbox__original" value="Elevator"></span><span class="el-checkbox__label">Elevator</span></label><label class="el-checkbox"><span class="el-checkbox__input"><span class="el-checkbox__inner"></span><input type="checkbox" aria-hidden="false" class="el-checkbox__original" value="Hair dryer"></span><span class="el-checkbox__label">Hair dryer</span></label><label class="el-checkbox"><span class="el-checkbox__input"><span class="el-checkbox__inner"></span><input type="checkbox" aria-hidden="false" class="el-checkbox__original" value="Iron"></span><span class="el-checkbox__label">Iron</span></label></div><div class="f-as-jsb column"><label class="el-checkbox"><span class="el-checkbox__input"><span class="el-checkbox__inner"></span><input type="checkbox" aria-hidden="false" class="el-checkbox__original" value="Self check-in"></span><span class="el-checkbox__label">Self check-in</span></label><label class="el-checkbox"><span class="el-checkbox__input"><span class="el-checkbox__inner"></span><input type="checkbox" aria-hidden="false" class="el-checkbox__original" value="Air conditioning"></span><span class="el-checkbox__label">Air conditioning</span></label><label class="el-checkbox"><span class="el-checkbox__input"><span class="el-checkbox__inner"></span><input type="checkbox" aria-hidden="false" class="el-checkbox__original" value="TV"></span><span class="el-checkbox__label">TV</span></label><label class="el-checkbox"><span class="el-checkbox__input"><span class="el-checkbox__inner"></span><input type="checkbox" aria-hidden="false" class="el-checkbox__original" value="Hangers"></span><span class="el-checkbox__label">Hangers</span></label><label class="el-checkbox"><span class="el-checkbox__input"><span class="el-checkbox__inner"></span><input type="checkbox" aria-hidden="false" class="el-checkbox__original" value="Essentials"></span><span class="el-checkbox__label">Essentials</span></label></div></div></li><div class="sub-filter-btns"><button type="button" class="el-button clear el-button--default"><!----><!----><span> Clear </span></button><button type="submit" class="el-button update el-button--default"><!----><!----><span> Update </span></button></div></ul></div></div>

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

    <!-- <el-select  v-model="filterBy.rate"
    @change="setFilter" placeholder="Rate:" size="medium" >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select> -->

    <!-- <label>Rate:</label>
    <select v-model="filterBy.rete" @change="setFilter" id="filter">
      <option>All</option>
      <option value="1">★</option>
      <option value="2">★★</option>
      <option value="3">★★★</option>
      <option value="4">★★★★</option>
      <option value="5">★★★★★</option>
    </select> -->

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
    <!-- <div class="block">
    <span class="demonstration">Dayly price: {{filterBy.price}}$</span>
    <el-slider min=500 max=1000000 step=10 v-model="filterBy.price"  @change="setFilter" ></el-slider>
  </div>  -->
  </section>
</template>

<script>
// import datePicker from "./date-picker.vue";
export default {
  data() {
    return {
      size: {
        isOpen: false,
      },
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
        this.size.isOpen=!this.size.isOpen
    },
  },
  // created(){
  // },
  //   components: {
  //     datePicker,

  //   },
};
</script>

