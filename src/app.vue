<template>
  <div id="app" :class="`${topClass}`">
    <my-header />
    <router-view  />
    <my-footer/>
  </div>
</template>


<script>
import myHeader from "./cmps/app-header.vue";
import myFooter from "./cmps/app-footer.vue";
// import socketService from "@/services/socket.service.js";



export default {
  // components: { home },
  data(){
    return{
      topClass : 'top'
    }
  },
    created() {
    this.$store.dispatch({ type: 'loadYachts' });
    window.onscroll = () =>{
      if(window.scrollY !== 0) this.topClass = ''
      else this.topClass = 'top'
    }
  },
   components: {
    myHeader,
    myFooter,
  },
  };
</script>
