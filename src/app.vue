<template>
  <div id="app">
    <my-header />
    <router-view class="main-layout" />
    <my-footer/>
  </div>
</template>


<script>
import myHeader from "./cmps/app-header.vue";
import myFooter from "./cmps/app-footer.vue";


export default {
  // components: { home },
    created() {
    this.$store.dispatch({ type: 'loadYachts' });
  },
   components: {
    myHeader,
    myFooter,
  },
  };
</script>
