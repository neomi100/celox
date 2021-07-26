<template>
    <section class="flex column modal">
        <p class="close-modal-btn" @click="closeModal()">X</p>
        <h2 class="flex center">Your Trip</h2>
        <order-edit :yacht="yacht"/>
    </section>
</template>

<script>
import orderEdit from './order-edit.vue';
export default {
  props: {
    yacht: Object,
  },
  methods:{
    closeModal(){
      this.$emit('closeModal')
    }
  },
  components:{
      orderEdit
  }
}
</script>