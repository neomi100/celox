<template>
  <section class="user-dashboard-container">
    <h2 class="dash-title">{{ user.fullname }} Favorites</h2>

    <section v-if="!likes.length" class="no-fav-container">
      <h2 class="no-fav-title">No Favorites</h2>
      <p>There are no favorites at the moment</p>
      <p>To add some - click the button!</p>
      <router-link class="router explore-fav-btn" :to="`/yacht`">
        <el-button
          title="Explore"
          type="primary"
          icon="el-icon-star-off"
          circle
        ></el-button>
      </router-link>
    </section>

    <el-row v-else>
      <div class="sort-container">
        <el-button class="sort-btn" @click="sortBy('price')" round
          >Price</el-button
        >
        <el-button class="sort-btn" @click="sortBy('rate')" round
          >Popularity</el-button
        >
      </div>

      <div class="home-pop" v-for="yacht in likes" :key="yacht._id" :yacht="yacht">
        <section class="preview-card like-preview flex space-between">
          <div class="card-info flex column space-between">
            <div class="flex column">
            <span>
              {{ yacht.name }} -
              <span class="yacht-address"> {{ yacht.loc.address }} </span>
            </span>
            <span class="summary-txt"> {{ yacht.summary }}</span>
              
            </div>
            <div class="rate-and-price flex column">
            <star-rating :reviews="yacht.reviews" />
            <span><span class="price-bold"> ${{ yacht.price }} </span> /Night</span>
            </div>
          </div>
          <div class="preview-img">
          <router-link class="router" :to="`/yacht/${yacht._id}`">
            <img
              class="explore-img" 
              :src= "yacht.imgUrls[0]"
            />
          </router-link>

          <img
            title="Remove From Favorites"
            @click="ToggleLike(yacht)"
            class="like-btn"
            src="../assets/imgs/icons/fillheart.png"
          />
          </div>
        </section>
      </div>
    </el-row>
  </section>
</template>

<script>
import starRating from "../cmps/star-rating.vue";
export default {
  props: ["user"],

  methods: {
    async ToggleLike(yacht) {
      if (!this.$store.getters.loggedinUser) {
        return;
      }
      try {
        await this.$store.dispatch({ type: "toggleLike", yacht });
      } catch (err) {
        console.log(err);
      }
    },
    sortBy(sortBy) {
      if (sortBy === "price") this.$store.getters.sortByPrice;
      else if (sortBy === "rate") this.$store.getters.sortByPopularity;
    },
    imgLink(img){
      if (img.startsWith('http'))  return "imgUrl";
    }
  },

  computed: {
    likes() {
      const likes = this.$store.getters.getAllUserLike;
      return likes;
    },
  },
  components: {
    starRating,
  },
};
</script>

