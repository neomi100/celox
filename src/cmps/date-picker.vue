<template>
  <section>
    <el-date-picker
      @change="changed"
      v-model="value1"
      type="daterange"
      start-placeholder="Check In"
      end-placeholder=" Check Out"
    >
    </el-date-picker>
  </section>
</template>

<script>
export default {
  data() {
    return {
      pickerOptions: {
        shortcuts: [
          {
            text: "",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
      value1: "",
      value2: "",
    };
  },

  methods: {
    changed() {
      console.log(this.value1);
      this.$emit("pick", this.value1);
    },
  },
};
</script>
