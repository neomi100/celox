<template>
  <section v-if="yachts" >
    <!-- <yacht-filter
      :filterBy="filterBy"
      :typeList="typeList"
      @onSetFilter="setFilter"
    ></yacht-filter> -->
    <yachtList :yachts="yachts" />
  </section>
</template>

<script>
import yachtList from '../cmps/yacht-list.vue';
// import yachtFilter from '../cmps/yacht-filter.vue';
export default {
  computed: {
    yachts() {
      console.log(this.$store.getters.yachtsForShow, 'yachtPage');
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

  // methods: {
    // setFilter(filterBy) {
    //   this.$store.commit({ type: 'setFilter', filterBy });
    //   this.$store.dispatch({ type: 'loadyachts' });
    // },
  // },

  components: {
    yachtList,
    // yachtFilter,
  },
};
</script>
