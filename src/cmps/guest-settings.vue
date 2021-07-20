<template>
  <section>
    <div class="guest-btn-frame flex center">
    <el-popover placement="right" trigger="click" class="guests-picker-btn">
      <span> Adults: </span>
      <el-input-number v-model="guest.adultsNum" @change="handleChange" :min="1" :max="10">Adults</el-input-number>
      <el-button slot="reference">{{ guestCount }}</el-button>
    </el-popover>
  </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
        guest:{
            adultsNum:1,
        }
    };
  },
  methods:{
      handleChange(){
          this.$emit('pickguests',this.guest)
      }
  },
  computed:{
      guestCount(){
        var guestCount=this.guest.adultsNum 
        return (guestCount>1)? guestCount+' Guests': guestCount+' Guest'
     }
  }
}
</script>