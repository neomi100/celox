<template>
  <header :class="`full main-layout header-container`">
    <div class="nav-container">
      <el-menu
        class="el-menu-demo menu-flex"
        style="border: none; background-color: unset;"
        mode="horizontal"
      >
        <el-menu-item >
          <router-link class="router" :to="`/`">
            <img
              class="logo-img"
              :src="require(`@/assets/logo.svg`)"
              alt="img not found"
            />
          </router-link>
        </el-menu-item>
      </el-menu>

      <div class="header-right-corner flex">
        <router-link class="router explore-nav" :to="`/yacht-page`">
          <span @click="reloadyachts" class="txt"> Explore </span>
        </router-link>

        <span class="new-owner" @click="becomeowner()">Become a owner</span>

        <section class="user-select">
          <el-dropdown>
            <span class="el-dropdown-link">
              <img
                class="user-menu-img burger"
                :src="require(`@/assets/imgs/icons/hamburger.png`)"
              />
              <img
                class="user-menu-img"
                :src="require(`@/assets/imgs/icons/userGuest.jpg`)"
              />
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item class="user-option" @click.native="navTo">
                Log-in
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </section>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "app-header",
  data() {
    return {
      
    };
  },
  methods: {
    async reloadyachts() {
      await this.$store.dispatch({ type: "loadYachts" });
    },
    becomeowner() {
      this.$router.push("/become-owner");
    },
    navTo() {
      console.log("click");
      this.$router.push("/login");

      // switch (ev.target.textContent) {
      //   case "Log-in": {
      //       this.$router.push("/login");
      //     }
      //     break;
      // }
    },

  },
  computed: {
  
    // loggedinUser() {
    //   return this.$store.getters.loggedinUser;
    // },
  },
};
</script>