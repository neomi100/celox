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



export default {
  // components: { home },
  data(){
    return{
      topClass : 'top'
    }
  },
    created() {
    this.$store.dispatch({ type: 'loadYachts' });
  
    addEventListener('scroll', () =>{
      if(window.scrollY !== 0) this.topClass = ''
      else this.topClass = 'top'
    })
  },
   components: {
    myHeader,
    myFooter,
  },
  };
</script>
