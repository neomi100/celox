<template>
  <section class="owner-order-container">
    <h2 class="reservations-title">Pending Reservations</h2>
    <section class="owner-orders">
      <p
        class="noReserv"
        v-if="
          !orders.filter((order) => order.status === 'pending') ||
          !orders.filter((order) => order.status === 'pending').length
        "
      >
        No reservations at the moment
      </p>
      <ul class="all-owner-orders">
        <li
          v-for="order in orders.filter((order) => order.status === 'pending')"
          :key="order.id"
          class="owner-order"
        >
          <h3 class="order-buyer-mobile">{{ order.buyer.fullname }}</h3>
          <div class="order-details cell-1">
            <h3 class="order-buyer">{{ order.buyer.fullname }}</h3>
            <h3 class="response-dates">Dates:</h3>
            <p>{{ order.startDate }}-{{ order.endDate }}</p>
          </div>
          <div class="order-details cell-2">
            <h3>Yacht &nbsp;</h3>
            <p>"{{ order.yacht.name }}"</p>
          </div>
          <div class="order-details cell-3">
            <h3>Guests:</h3>
            <p>
              Adults:&nbsp; {{ order.guests.adults }}
            </p>
          </div>
          <div class="owner-order-btns flex align-center cell-4">
              <button @click="changeOrderStat($event, order)" class="approve">
                Approve
              </button>
              <button @click="changeOrderStat($event, order)" class="reject">
                Reject
              </button>
          </div>
        </li>
      </ul>
    </section>
  </section>
</template>

<script>
import { socketService } from "../services/socket.service.js";
export default {
  props: ["owner"],
  computed: {
    orders() {
      return this.$store.getters.getOwnerOrders;
    },
  },
  methods: {
    async loadOrders() {
      await this.$store.dispatch({
        type: "loadOwnerOrders",
        owner: { ...this.owner },
      });
      // this.orders = this.$store.getters.orders;
    },
    async changeOrderStat(event, order) {
      order = JSON.parse(JSON.stringify(order));
      switch (event.target.className) {
        case "reject":
          order.status = "deny";
          await this.$store.dispatch({ type: "updateOrderStatus", order });
          break;
        case "approve":
          order.status = "approve";
          await this.$store.dispatch({ type: "updateOrderStatus", order });
          break;
      }
      this.$emit("reloadYachts");
      this.loadOrders();
      socketService.emit("updateAns", order);
    },
  },

  created() {
    this.loadOrders();
  },
};
</script>
