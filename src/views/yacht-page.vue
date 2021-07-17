<template>
  <section v-if="yachts" >
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
      return this.$store.getters.yachtsForShow;
    },
    // filterBy() {
    //   return { ...this.$store.getters.filterBy };
    // },
    // typeList() {
    //   const types = this.$store.getters.allyachts.map((t) => t.type);
    //   return [...new Set(types)];
    // },
  },
// @onSetFilter="setFilter" :typeList="typeList"
  methods: {
    filterBy(filterBy) {
      console.log(filterBy, 'page');
      this.$store.commit({ type: 'setFilter', filterBy });
      this.$store.dispatch({ type: 'loadYachts' });
    },
  },

  components: {
    yachtList,
    yachtFilter,
  },
};
</script>
