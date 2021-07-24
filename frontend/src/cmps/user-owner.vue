<template>
  <section>
      <el-tabs class="user-status-btns" v-model="ownerCurrTab" >
          <el-tab-pane  class="inbox" label="Inbox" name="inbox"></el-tab-pane>
          <el-tab-pane class="owner-yachts" label="Bookings" name="owner-yachts"></el-tab-pane>
          <el-tab-pane class="add-yacht" label="Add a list" name="add-yacht"></el-tab-pane>
          <el-tab-pane class="statistics" label="Statistics" name="user-statistics"></el-tab-pane> 
      </el-tabs>
      <div>
        <owner-orders v-if="ownerCurrTab === 'inbox'" :owner="owner" />
        <owner-yachts v-if="ownerCurrTab === 'owner-yachts'" :owner="owner" />
        <add-yacht v-if="ownerCurrTab === 'add-yacht'" :owner="owner" />
        <user-statistics v-if="ownerCurrTab === 'user-statistics'" class="user-statistics" />
      </div>
  </section>
</template>

<script>
import ownerOrders from "./owner-orders.vue";
import ownerYachts from "./owner-yachts.vue";
import addYacht from './add-yacht.vue';
import userStatistics from './user-statistics.vue';
export default {
 name:'user-owner',
 props: ['owner'],
  data(){
    return{ 
    ownerCurrTab:'inbox'
    }
  },
    components: {
      userStatistics,
      ownerOrders,
      ownerYachts,
      addYacht
    },
};
</script>
