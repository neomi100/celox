
<script>
import { Bar } from "vue-chartjs";

export default {
  name: "user-statistics",
  extends: Bar,
  computed: {
    ownerOrders() {
      return this.$store.getters.getOwnerOrders;
    },
  },
  async mounted() {
    // Overwriting base render method with actual data.
    console.log(this.ownerOrders);
    const janOrders = this.ownerOrders.filter((order) => {
      const date = new Date(order.createdAt);
      const month = date.getMonth() + 1;
      if (month === 1) return order;
    }).length;
    const febOrders = this.ownerOrders.filter((order) => {
      const date = new Date(order.createdAt);
      const month = date.getMonth() + 1;
      if (month === 2) return order;
    }).length;
    const marchOrders = this.ownerOrders.filter((order) => {
      const date = new Date(order.createdAt);
      const month = date.getMonth() + 1;
      if (month === 3) return order;
    }).length;
    const aprilOrders = this.ownerOrders.filter((order) => {
      const date = new Date(order.createdAt);
      const month = date.getMonth() + 1;
      if (month === 4) return order;
    }).length;
    const mayOrders = this.ownerOrders.filter((order) => {
      const date = new Date(order.createdAt);
      const month = date.getMonth() + 1;
      if (month === 5) return order;
    }).length;
    const juneOrders = this.ownerOrders.filter((order) => {
      const date = new Date(order.createdAt);
      const month = date.getMonth() + 1;
      if (month === 6) return order;
    }).length;
    const julyOrders = this.ownerOrders.filter((order) => {
      const date = new Date(order.createdAt);
      const month = date.getMonth() + 1;
      if (month === 7) return order;
    }).length;
    const augustOrders = this.ownerOrders.filter((order) => {
      const date = new Date(order.createdAt);
      const month = date.getMonth() + 1;
      if (month === 8) return order;
    }).length;
    const sepOrders = this.ownerOrders.filter((order) => {
      const date = new Date(order.createdAt);
      const month = date.getMonth() + 1;
      if (month === 9) return order;
    }).length;
    const octOrders = this.ownerOrders.filter((order) => {
      const date = new Date(order.createdAt);
      const month = date.getMonth() + 1;
      if (month === 10) return order;
    }).length;
    const novOrders = this.ownerOrders.filter((order) => {
      const date = new Date(order.createdAt);
      const month = date.getMonth() + 1;
      if (month === 11) return order;
    }).length;
    const decOrders = this.ownerOrders.filter((order) => {
      const date = new Date(order.createdAt);
      const month = date.getMonth() + 1;
      if (month === 12) return order;
    }).length;

    this.renderChart({
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      datasets: [
        {
          label: "Places orders:",
          backgroundColor: "#f87979",
          // data: [3, 2, 4, 7, 5, 3, 2, 0, 0, 1, 2, 0],
          data: [
            janOrders,
            febOrders,
            marchOrders,
            aprilOrders,
            mayOrders,
            juneOrders,
            julyOrders,
            augustOrders,
            sepOrders,
            octOrders,
            novOrders,
            decOrders,
          ],
        },
      ],
    });
  },
};
</script>