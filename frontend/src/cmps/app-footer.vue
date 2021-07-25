<template>
<div :class="`flex  main-footer ${layoutClass} `">
    <div class="footer-rights flex">
      © 2021 Celox, Inc. All rights reserved
    </div>
    <div class="footer-lang flex">English (US)
     <span class="footer-money flex">USD $</span></div>
    <div class="social flex">
      <div class="facebook flex">
        <i class="fab fa-facebook-f flex"></i>
      </div>
      <div class="instagram flex">
        <i class="fab fa-instagram flex"></i>
      </div>
      <div class="twitter flex">
        <i class="fab fa-twitter flex"></i>
      </div>
    </div>
  </div>
</template>
<script>


export default {
    data() {
    return {
      layoutClass: "main-layout-home",
    };
  },
    watch: {
    "$route.path": {
       immediate: true,
      handler() {
        if (this.$route.path === "/yacht/:id") {
          this.layoutClass = "main-layout";
        } else {
          this.layoutClass = "layout-yacht";
        }
      },
    },
  },
}
</script>


