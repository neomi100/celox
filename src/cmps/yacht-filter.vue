<template>
     <section class="filter">
        <!-- <label> Search our yacht: </label>
        <input ref="title" type="text" @input="setFilter" placeholder="Search...." v-model="filterBy.location"> -->

<!-- FILTER PRICE? -->
         

    <div>
    <el-radio-group v-model="filterBy.size" @change="setFilter" size="medium">
    <el-radio-button label="All"></el-radio-button>
      <el-radio-button label="Small"></el-radio-button>
      <el-radio-button label="Medium"></el-radio-button>
      <el-radio-button label="Large"></el-radio-button>
    </el-radio-group>
  </div>
   <!-- <date-picker></date-picker> -->

    <div class="block">
    <!-- <span >Dates:</span> -->
    <el-date-picker
      v-model="filterBy.dates"
      @change="setFilter"
      type="datetimerange"
      start-placeholder="Start Date"
      end-placeholder="End Date"
      :default-time="['12:00:00']">
    </el-date-picker>
  </div>


  <!-- OLD DATES -->
 <!-- <label for="dob">Dates:</label>
        <input type="date" id="dob" name="dob" /> -->
   <!-- OLD size -->
        <!-- <label for="browser">Size:</label>
                <input v-model="filterBy.size" list="browsers" name="browser" id="browser" @change="setFilter" >
            <datalist id="browsers">
               <option >All</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
            </datalist> -->

             <el-select  v-model="filterBy.rate"
    @change="setFilter" placeholder="Rate:" size="medium" >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
        <!-- <label>Rate:</label>
          <select v-model="filterBy.rete" @change="setFilter" id="filter" >
                <option>All</option>
                <option value="1">★</option>
                <option value="2">★★</option>
                <option value="3">★★★</option>
                <option value="4">★★★★</option>
                <option value="5">★★★★★</option>
          </select> -->
            <label for="age">Dayly price: {{filterBy.price}}$</label>
        <input type="range" id="price" name="price" min="500" max="1000000" step="10"  value="500" @change="setFilter" v-model="filterBy.price" /> 
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
            filterBy: {
                dates: '',
                price: '',
                size: 'All',
                // rate:'All'
            },
              options: [{
          value: 'All',
          label: 'All'
        }, {
          value: 1,
          label: '★'
        }, {
          value: 2,
          label: '★★'
        }, {
          value: 3,
          label: '★★★'
        }, {
          value: 4,
          label: '★★★★'
        }, {
          value: 5,
          label: '★★★★★'
        }],
        }
    },
        methods: {
        setFilter() {
            var filterBy = JSON.parse(JSON.stringify(this.filterBy))
            this.$emit('filterede', filterBy)
        //     console.log(filterBy,'filter');
        // console.log(this.filterBy.dates, 'dates');
        // console.log(filterBy.rate, 'rate');
        // console.log(this.filterBy.size, 'size');
        },
  

    },
    // created(){
    // },
//   components: {
//     datePicker,
   
//   },
}
</script>

