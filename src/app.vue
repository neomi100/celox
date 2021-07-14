<template>
  <div id="app">
    <div class="wrapper main-layout">
      <header class="header full">
       <router-link to="/"> <img class="logo" src="@/assets/logo.png" alt="" /></router-link>
        <nav id="nav">
          <router-link to="/explore">Explore</router-link> |
          <router-link to="/become-host">Become Host </router-link> 
        </nav>
      </header>
    </div>
     <img class="main-img" src="@/assets/main-img.jpg"/>
    <footer class="footer full">footer &copy;</footer>
  </div>
</template>


<script>
export default {};
</script>
