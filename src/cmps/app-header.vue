<template>
  <header class="full main-layout header-container">
    <div class="nav-container">
      <el-menu
        class="el-menu-demo menu-flex"
        style="border: none; border: none"
        mode="horizontal"
      >
        <!-- @select="handleSelect" -->
        <el-menu-item index="1">
          <router-link class="router" :to="`/`">
            <img
              class="logo-img"
              :src="require(`@/assets/imgs/icons/logo.svg`)"
              alt="img not found"
            />
            <!-- <span class="logo txt"> HomeAway </span> -->
          </router-link>
        </el-menu-item>
        <el-menu-item index="4"> </el-menu-item>
      </el-menu>

      <div class="header-right-corner flex">
        <router-link class="router explore-nav" :to="`/yacht`">
          <span @click="reloadyachts" class="txt"> Explore </span>
        </router-link>
        <!-- <div class="new-owner">Become a owner</div> -->
        <!-- < class="new-owner" :to=`/user/${loggedInUser._id}>Become a owner</div> -->
        <!-- <router-link v-if="loggedinUser" class="new-owner" :to="`/user/$loggedInUser._id}`">Become a owner</router-link> -->
        <span class="new-owner" @click="becomeowner()">Become a owner</span>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "app-header",
  data() {
    return {
      // loggedinUser: null,
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    // handleSelect(key, keyPath) {},
    async reloadyachts() {
      await this.$store.dispatch({ type: "loadyachts" });
    },
    becomeowner() {
        if (
          this.loggedinUser &&
          this.$route.path !== `/user/${this.loggedinUser._id}`
        ) {
          this.$router.push(`/user/${this.loggedinUser._id}`);
        } else {
          this.$router.push("/login");
        }
      }
    },
  computed: {
    loggedinUser() {
      return this.$store.getters.loggedinUser;
    },
  },
  components: {
  },
};
</script>