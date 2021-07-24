<template>
  <section class="user-details main-layout">
    <section class="user-profile">
      <div>
        <img :src="user.imgUrl" alt="User profile IMG" />
      </div>
      <h2>{{ userName }}</h2>
      <small>Joined in {{ userCreationTime }}</small>
      <div class="dashboard-status flex column">
      <h4>You manage <span class="clr-num">{{ yachts.length }}</span> assets</h4>
      <h4><span class="clr-num">{{ pendingOrders.length }}</span> pending reservations</h4>
      </div>
    </section>
     <section class="user-back-office">
       <el-tabs class="user-status-btns" v-model="userStatus" >
          <el-tab-pane class="owner" label="Owner" name="owner"></el-tab-pane>
          <el-tab-pane label="Traveler" name="traveler"></el-tab-pane>
      </el-tabs>
      <div>
        <user-owner v-if="userStatus === 'owner'" :owner="user" />
        <user-dashboard v-if="userStatus === 'traveler'" :user="user" />
      </div>
    </section>
  </section>
</template>

<script>
import userOwner from "../cmps/user-owner.vue";
import userDashboard from "../cmps/user-dashboard.vue";

export default {
  name:"user-details",
  data() {
    return {
      userStatus: null,
    };
  },
  computed: {
        yachts() {
      return this.$store.getters.yachtsForShow.filter((yacht) => {
        return yacht.owner._id === this.user._id;
      })
        },
    pendingOrders(){ 
    return this.$store.getters.pendingOrders
    },
    userName() {
      return this.user.fullname;
    },
    user() {
      return this.$store.getters.loggedinUser;
    },
    userCreationTime() {
      return "June 2019";
    }
  },
  created() {
    this.userStatus = "owner";
  },
  components: {
    userOwner,
    userDashboard,
  },
};
</script>