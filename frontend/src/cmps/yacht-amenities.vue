<template>
  <section v-if="yacht">
    <h2>Amenities</h2>
    <ul class="two-column-grid clean-list amenities-grid">
      <li v-for="(amen, idx) in yacht.amenities" :key="idx">
        <i :class="icon(idx)" /> {{ yacht.amenities[idx] }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "yacht-amenities",
  props: {
    yacht: Object,
  },
  methods: {
    icon(idx) {
      var icon = null;
      switch (this.yacht.amenities[idx]) {
        case "No Smoking":
          icon = "fas fa-smoking-ban";
          return icon;
        case "TV":
          icon = "fas fa-tv";
          return icon;
        case "Wifi":
          icon = "fas fa-wifi";
          return icon;
        case "Air-conditioning":
          icon = "far fa-snowflake";
          return icon;
        case "Smoking allowed":
          icon = "fas fa-smoking";
          return icon;
        case "Pets allowed":
          icon = "fas fa-paw";
          return icon;
        case "Cooking basics":
          icon = "fas fa-utensils";
          return icon;
        case "Washing machine":
          icon = "far fa-dryer-alt";
          return icon;
        case "work area":
          icon = "fas fa-chair-office";
          return icon;
        case "Baby accessories":
          icon = "fas fa-baby";
          return icon;
        case "Water slide":
          icon = "fab fa-accusoft";
          return icon;
        case "Smoke detector":
          icon = "far fa-sensor-on";
          return icon;
      }
    },
  },
};
</script>
