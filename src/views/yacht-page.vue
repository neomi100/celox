<template>
  <section  class="layout-yacht" >
    <yachtFilter @filterede="filterBy" />
    <yachtList :yachts="yachts" />
  </section>
</template>
<script>
import yachtList from '../cmps/yacht-list.vue';
import yachtFilter from '../cmps/yacht-filter.vue';
export default {
  computed: {
    yachts() {
      // console.log(this.$store.getters.yachtsForShow, 'yachtPage');
      // return JSON.parse(JSON.stringify(this.$store.getters.yachtsForShow)) ;
      return this.$store.getters.yachtsForShow;
    },
  },

  methods: {
    filterBy(filterBy) {
      console.log(filterBy, 'page');
      this.$store.commit({ type: 'setFilter', filterBy });
      this.$store.dispatch({ type: 'loadYachts' });
    },
  },
  created() {
// var filterBy = {};
      this.$store.dispatch({ type: 'loadYachts' });

    
  },
  components: {
    yachtList,
    yachtFilter,
  },
};
</script>
