<template>
  <div id="app">
    <div class="wrapper ">
      <header class="header full">
       <router-link to="/"> <img class="logo" src="@/assets/logo.svg" alt="" /></router-link>
        <nav id="nav">
          <router-link to="/yacht-page">Search</router-link> |
          <router-link to="/become-host">Become Host </router-link> 
        </nav>
      </header>
    <router-view />
    </div>
    <footer class="footer full">footer &copy;</footer>
  </div>
</template>


<script>
// import home from '@/views/home.vue';

export default {
  // components: { home },
    created() {
    this.$store.dispatch({ type: 'loadYachts' });
  },
  };
</script>
