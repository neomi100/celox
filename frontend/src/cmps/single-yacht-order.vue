<template>
    <section class="yacht-order-details">
      <div class="yacht-order-headlines">
          <div class="cell"><h3>Name</h3></div>
          <div class="cell"><h3>Guests</h3></div>
          <div class="cell check"><h3>Check-in</h3></div>
          <div class="cell check"><h3>Check-out</h3></div>
          <div class="cell check-mobile"><h3>Dates</h3></div>
      </div>

      <div class="yacht-full-orders"> 
        <div class="single-yacht-order" v-for="order in singleYachtOrders" :key="order._id">
          <div class="cell" v-if="order.status === 'approve'">
            <b>{{ order.buyer.fullname }}</b>
          </div>
          <div class="cell" v-if="order.status === 'approve'">
            <p>
              Adults:&nbsp;{{ order.guests.adults }} 
            </p>
          </div>
          <div class="cell date" v-if="order.status === 'approve'">
            <p>{{ order.startDate }}</p>
          </div>
          <div class="cell date" v-if="order.status === 'approve'">
            <p>{{ order.endDate }}</p>
          </div>
          
          <div class="cell dates-mobile" v-if="order.status === 'approve'">
            <p>{{ order.startDate }}</p>
            <p>{{ order.endDate }}</p>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  props: ["yacht"],
  computed: {
    yachtOrders() {
      return this.$store.getters.getOwnerOrders.filter((order) => {
        return order.yacht._id === this.yacht._id;
      });
    },
    singleYachtOrders() {
      if (!this.yachtOrders || !this.yachtOrders.length) return;
      return this.yachtOrders;
    },
  },
};
</script>

<style>
</style>