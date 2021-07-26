<template>
  <section>
    <div ref="wrapper" class="wrapper flex" :class="{ out: isOpen }">
      <span class="box">
        <div class="location">
          <span class="title title-location">Location</span>
            <!-- @input.native="copyData" -->
            <!-- @select="copyData" -->
          <!-- @input.native="setFilter" -->
      
          <!-- <advanced-search
            :options="options"
            v-model="model"
            style="border: none"
            class="advanced-input-section desc"
            :placeholder="filterBy.location || 'Search'"
          /> -->
 <!-- @input="setFilter" -->
               <div class="search-input">
          <el-input
            class="search"
            size="small "
            placeholder="Search..."
            v-model="filterBy.txt"
           
          >
          
          </el-input>
        </div>
        </div>
      </span>
      <span class="box">
        <div class="">
          <span class="title date-title">Dates</span>
          <date-picker class="filter-date-picker" @pick="datePick" />
        </div>
      </span>
      <span class="box">
        <div class="guests">
          <span class="title">Guests</span>
          <input
            v-model="filterBy.guests"
            type="text"
            placeholder=""
            class="desc guest-dd"
            @click="openGuests"
          />
          <el-input-number
            v-model="filterBy.guests"
            v-if="isGuests"
            size="mini"
            style="position: absolute; top: 60px"
          ></el-input-number>
        </div>
      </span>

      <div @click="submitSearch" class="search-icon">
        <div class="btn-search-large"></div>
      </div>
    </div>

    <div v-if="isOpen" class="secondary wrapper">
      <span class="box">
        <div class="location">
          <span class="title">Location</span>
           <!-- @input.native="copyData"
            @select="copyData" -->
          <!-- <advanced-search
            v-model="filterBy.txt"
           
            :options="options"
            style="border: none"
            class="advanced-input-section desc"
            placeholder="Where are we going?"
          /> -->
               <div class="search-input">
          <el-input
            class="search"
             size="small "
            placeholder="Search..."
            v-model="filterBy.txt"           
          >        
          </el-input>
        </div>
        </div>
      </span>
      <span class="box">
        <div class="location">
          <span class="title date-title-sec">Dates</span>
          <date-picker @pick="datePick" />
        </div>
      </span>
      <span class="box">
        <div class="guests">
          <span class="title">Guests</span>
          <input
            v-model="filterBy.guests"
            type="text"
            placeholder= ""
            class="desc"
            @click="openGuests"
          />
          <el-input-number
            v-model="filterBy.guests"
            v-if="isGuests"
            size="mini"
            style="position: absolute; top: 60px"
          ></el-input-number>
        </div>
      </span>

      <div @click="submitSearch" class="search-icon">
        <div class="btn-search-large"></div>
      </div>
    </div>

    <div @click.stop="openSearch" class="search-btn-sticky" v-if="isSticky">
      <span v-if="filterBy.location" class="title-sticky">
        {{ filterBy.location }}
      </span>
      <span v-else class="title-sticky"> Start Searching</span>
      <div class="search-icon sticy-search-icon">
        <div class="btn-search"></div>
      </div>
    </div>
  </section>
</template>

<script>
import datePicker from "./date-picker.vue";
// import AdvancedSearch from "vue-advanced-search";

export default {
  name: "yachtFilter",
  data() {
    return {
      count: 0,
      isSticky: false,
      isOpen: false,
      filterBy: {
        txt: "",
        location: "",
        startDate: "",
        endDate: "",
        guests: null,
        price: 0,
        size: 'All',
        rate: 'All',
      },
      isGuests: false,
      model: "",
      options: [
        { label: "portugal", value: "Portugal" },
        { label: "morocco", value: "Morocco" },
        { label: "guadeloupe", value: "Guadeloupe" },
        { label: "france", value: "France" },
      ],
    };
  },
  methods: {
    datePick(date) {
      this.filterBy.startDate = date[0];
      this.filterBy.endDate = date[1];
    },
    openGuests() {
      this.isGuests = !this.isGuests;
    },
    async submitSearch() {
      // const filterBy = JSON.parse(JSON.stringify(this.filterBy));
      // var filterBy = JSON.parse(JSON.stringify(this.filterBy));
    console.log(this.model,'model');
      var filterBy = this.filterBy;
      console.log('this.filterBy',this.filterBy);
      if (this.$route.path !== "/yacht")
        await this.$router.push(`/yacht/?location=${this.filterBy.txt}`);
    //   this.$store.dispatch({ type: "searchResults", title: this.filterBy.txt });
   
      this.$store.commit({ type: "setFilter", filterBy });
      return this.$store.getters.yachtsForShow;
      // this.$store.dispatch({ type: "loadYachts" });
      // await this.$store.dispatch({ type: "loadYachts", filterBy });
    },
    copyData(ev) {
      // console.log(ev, ev.target, "copy date");
      var location = ev.target?.value || ev;
      if (typeof location !== "string") location = "";
      this.filterBy.location = location;
    },
    checkOffset() {
      this.count++;
      if (this.count % 11) return;
      if (!this.$refs.wrapper) return;
      const sticky = this.$refs.wrapper.offsetTop;
      if (window.pageYOffset > sticky) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
      this.isOpen = false;
    },
    openSearch() {
      this.isSticky = false;
      this.isOpen = true;
    },
  },
  created() {
    this.filterBy.txt = this.$route.query.location;
    // this.filterBy.txt = this.$route.query.location;
    // this.model = this.$route.query.location;
    window.onscroll = () => {
      this.checkOffset();
    };
  },
  destroyed() {},
  components: {
    datePicker,
    // AdvancedSearch,
  },
};
</script>

