<template>
<section class="googl-map">
<h1>Location</h1>
  <GmapMap
    class="google-map"
    ref="gMap"
    :center="position"
    :zoom="zoom"
    map-type-id="terrain"
    style="width: 700px; height: 500px"
  >
    <GmapMarker
      :position="position"
      :clickable="true"
      :draggable="true"
      @click="centerMap(position)"
    />
    <GmapInfoWindow></GmapInfoWindow>
  </GmapMap>
  </section>
</template>

<script>
export default {
  name: "yacht-map",
  props: {
    location: Object,
  },
  data() {
    return {
      zoom: 10,
      // markers:[ 
      //   {      
        position: { 
          lat: this.location.lat,
          lng: this.location.lng
          }  
        // }          
      // ]
    }
  },
  methods: {
    centerMap(pos) {
      // eslint-disable-next-line no-unused-labels
      zoom: 4,
      this.$refs.gMap.panTo(pos);
    },
  },
  created(){
    this.position.lng=this.location.lng
    this.position.lat=this.location.lat
  }
}
</script>