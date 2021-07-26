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
import { socketService } from "./services/socket.service.js";

export default {
  data() {
    return {
      topClass: "top",
      widthCalss: "",
    };
  },
  methods: {

    async loadOrder() {

      const owner = this.$store.getters.loggedinUser;
      await this.$store.dispatch({ type: "loadOwnerOrders", owner });
    },
  },
  async created() {
    this.$store.dispatch({ type: "loadUsers" });
    this.$store.dispatch({ type: "loadYachts" });

    addEventListener("scroll", () => {
      if (window.scrollY !== 0) this.topClass = "";
      else this.topClass = "top";
    });
    //relevant only if there is a loggedin user:
    const user = this.$store.getters.loggedinUser;
    await this.$store.dispatch({ type: "loadOwnerOrders", owner: user });

    socketService.setup();
    socketService.on("loadOrders", this.loadOrder);
  },
  destroyed() {
    socketService.off("loadOrders");
  },

  components: {
    myHeader,
    myFooter,
  },
};
</script>
