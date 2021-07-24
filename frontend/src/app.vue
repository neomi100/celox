<template>
  <div id="app" :class="`${topClass}`">
    <my-header />
    <router-view />
    <my-footer />
  </div>
</template>

<script>
import myHeader from "./cmps/app-header.vue";
import myFooter from "./cmps/app-footer.vue";

export default {
  data(){
    return{
      topClass : 'top',
      widthCalss: ''
    }
  },
  methods: {
    async loadOrder() {
      const host = this.$store.getters.loggedinUser;
      await this.$store.dispatch({ type: "loadHostOrders", host });
    },},
    created() {
       this.$store.dispatch({ type: "loadUsers" });
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
