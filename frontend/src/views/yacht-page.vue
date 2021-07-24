<template>
  <section  class="layout-yacht" >
    <div class="title">{{title}}</div>
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
      return this.$store.getters.yachtsForShow;
    },
    title(){
       return this.$store.getters.getTitle;
    }
  },
  methods: {
    filterBy(filterBy) {
      this.$store.commit({ type: 'setFilter', filterBy });
      this.$store.dispatch({ type: 'loadYachts' });
    },
  },
  created() {
      this.$store.dispatch({ type: 'loadYachts' });  
  },
  components: {
    yachtList,
    yachtFilter,
  },
};
</script>
