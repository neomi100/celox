<template>
  <section class="owner-yachts-headline">
    <h2 class="assets-title">{{ userName }} Assets :</h2>
    <ul v-if="yachts" class="owner-yachts">
      <li v-for="yacht in yachts" :key="yacht._id" class="owner-yacht-and-orders">
        <div class="owner-yacht flex">
          <div class="owner-yacht-img-container">
            <img
              class="owner-yacht-img"
              :src="yacht.imgUrls[0]"
              alt="img not found"
            />
          </div>
          <div class="owner-yacht-txt">
            <h2>{{ yacht.name }}</h2>
            <single-yacht-order :yacht="yacht" />
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import singleYachtOrder from "../cmps/single-yacht-order.vue";

export default {
  name: "owner-yachts",
  props: ["owner"],
  computed: {
    yachts() {
      //TODO do filter in store
      return this.$store.getters.yachtsForShow.filter((yacht) => {
        return yacht.owner._id === this.owner._id;
      });
    },
    userName() {
      return this.$store.getters.loggedinUser.fullname;
    },
  },
  components: {
    singleYachtOrder,
  },
  async created() {
    await this.$store.dispatch({ type: "loadYachts" });
    console.log(this.$store.getters.yachtsForShow);
  },
};
</script>