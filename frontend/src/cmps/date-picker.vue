<template>
  <section>
    <el-date-picker
      style="width: 100%"
      @change="changed"
      v-model="value1"
      type="daterange"
      format="dd/MM/yyyy"
      value-format="dd-MM-yyyy"
      start-placeholder="Check In"
      end-placeholder=" Check Out"
      :picker-options="pickerOptions"
      unlink-panels
      align="right"
      range-separator=" "
      prefix-icon="false"
    >
    </el-date-picker>
  </section>
</template>

<script>
export default {
  name: "date-picker",
  props: { yachtId: String },
  data() {
    return {
      pickerOptions: {
        disabledDate:(time)=> {
          return (       
          time.getTime() < Date.now() 
          ||
          ( 
          this.yachtOrders && this.yachtOrders.some((yachtOrder)=>{
            return (time.getTime() > yachtOrder[0]) && (time.getTime() <yachtOrder[1])
          }))
          )},
      },
      value1: "",
    };
  },
  methods: {
    changed() {
      this.$emit("pick", this.value1);
    },
    print() {
    },
  },
  computed:{
    yachtOrders(){
      return this.$store.getters.getYachtOrdersTimeStamps
    }
  }
};
</script>
