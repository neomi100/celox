<template>
    <section class="flex column modal">
        <p class="close-modal-btn" @click="closeModal()">X</p>
        <h2 class="flex center">Your Trip</h2>
        <trip-settings :stay="stay"/>
    </section>
</template>

<script>
import tripSettings from './trip-settings.vue';
export default {
  props: {
    stay: Object,
  },
  methods:{
    closeModal(){
      this.$emit('closeModal')
    }
  },
  components:{
      tripSettings
  }
}
</script>