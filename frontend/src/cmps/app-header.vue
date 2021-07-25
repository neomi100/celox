<template>
  <header :class="`full  header-container ${layoutClass} ${positionClass} `">
    <div :class="`nav-container `">
      <el-menu
        class="el-menu-demo menu-flex"
        style="border: none; background-color: unset"
        mode="horizontal"
      >
        <el-menu-item>
          <router-link class="router" :to="`/`">
            <svg
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              class="css-ze2te4 css-qd6ojx"
              viewBox="0 9 100 95.2493065661926"
              width="59"
              height="80"
            >
              <defs v-if="color">
                <linearGradient
                  id="SvgjsLinearGradient1011"
                  gradientTransform="rotate(90)"
                >
                  <stop
                    id="SvgjsStop1013"
                    stop-color="rgb(8 82 120)"
                    offset="0"
                  ></stop>
                  <stop
                    id="SvgjsStop1014"
                    stop-color="rgb(8 82 120)"
                    offset="1"
                  ></stop>
                </linearGradient>
                <linearGradient
                  id="SvgjsLinearGradient1011"
                  gradientTransform="rotate(90)"
                >
                  <stop
                    id="SvgjsStop1013"
                    stop-color="rgb(8 82 120)"
                    offset="0"
                  ></stop>
                  <stop
                    id="SvgjsStop1014"
                    stop-color="rgb(8 82 120)"
                    offset="1"
                  ></stop>
                </linearGradient>
              </defs>
              <defs v-else>
                <linearGradient
                  id="SvgjsLinearGradient1011"
                  gradientTransform="rotate(90)"
                >
                  <stop
                    id="SvgjsStop1013"
                    stop-color="#c2d4f3"
                    offset="0"
                  ></stop>
                  <stop
                    id="SvgjsStop1014"
                    stop-color="#1a4185"
                    offset="1"
                  ></stop>
                </linearGradient>
                <linearGradient
                  id="SvgjsLinearGradient1011"
                  gradientTransform="rotate(90)"
                >
                  <stop
                    id="SvgjsStop1013"
                    stop-color="#c2d4f3"
                    offset="0"
                  ></stop>
                  <stop
                    id="SvgjsStop1014"
                    stop-color="#1a4185"
                    offset="1"
                  ></stop>
                </linearGradient>
              </defs>
              <g
                transform="translate(-6.179133430834537, -8.554396567930196) scale(1.123586933329973)"
                class="css-1mgjlsp"
                fill='url("#SvgjsLinearGradient1011")'
              >
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M8.181,71.195c7.569-3.2,13.035,1.015,14.917,2.105c3.412,1.978,5.737,3.581,12.319,3.611  c8.951,0.042,20.458-6.292,36.75-4.25c5.149,0.645,10.82,4.907,20.117,2.232c1.062-0.305,1.675-1.413,1.369-2.475  c-0.305-1.062-1.415-1.675-2.475-1.369c-3.677,1.057-6.509,1.103-8.923,0.607C82,58.662,92.75,56.995,94.345,28.733  c0.057-1.004-0.616-1.903-1.602-2.101c-6.167-1.237-14.086,0.21-16.777,0.781L62.12,17.133c-0.294-0.218-0.643-0.352-1.008-0.386  c-0.323-0.03-7.662-0.678-17.589,1.114l-1.469-8.585c-0.099-0.581-0.45-1.089-0.959-1.388c-0.509-0.299-1.124-0.356-1.679-0.16  l-6.417,2.271c-0.682,0.241-1.18,0.831-1.303,1.542l-1.765,10.148c-0.917,0.367-2.212,0.893-2.945,1.222  c-4.569,2.055-6.584,17.734-7.33,25.887l-6.24,1.089c-0.63,0.11-1.169,0.515-1.451,1.088c-0.282,0.574-0.272,1.248,0.025,1.813  c0.038,0.072,3.385,6.504,3.951,13.407c-2.568-0.324-5.541-0.061-9.123,1.238C5.78,67.81,5.243,68.957,5.62,69.996  S7.163,71.625,8.181,71.195z M38.512,12.29l1.414,8.261c0.012,0.068,0.036,0.131,0.055,0.197c-1.838,0.473-3.997,1.077-6.127,1.738  l1.584-9.108L38.512,12.29z M28.5,27.328c7.374-2.814,22.375-7.333,31.705-6.635l4.45,3.304c-8.156,0.706-19.302,3.905-28.419,8.262  c-0.499,0.238-0.709,0.835-0.471,1.333c0.172,0.359,0.53,0.569,0.903,0.569c0.145,0,0.292-0.031,0.431-0.098  c9.856-4.71,22.081-8.028,30.072-8.199l5.734,4.258c-7.371,1.781-15.227,5.051-23.402,9.756c-9.314,5.36-18.871,8.418-25.935,10.125  C24.581,38.338,26.755,28.446,28.5,27.328z M51,41.912c12.593-7.695,31.083-12.667,39.188-11.623  C89.063,54.87,78.25,54.995,78.336,70.314c-22.211-7.694-40.003,8.598-53.233-0.475c-1.507-1.033-3.235-1.875-5.095-2.596  c-0.185-5.554-2.073-10.877-3.339-13.863C16.668,53.38,34.418,52.045,51,41.912z M93.116,89.526  c-10.017,3.241-14.86-1.018-20.096-2.362c-15.27-3.919-31.103,5.222-37.763,5.222c-5.359,0-9.039-2.133-12.451-4.11  c-4.195-2.431-7.819-4.533-14.485-2.257c-1.045,0.354-2.183-0.202-2.539-1.247c-0.356-1.045,0.201-2.183,1.247-2.539  c7.804-2.655,14.513-0.751,17.887,1.928c13.646,10.833,23.917-7.25,50.047-0.493c4.875,1.261,8.557,4.759,16.92,2.052  c1.051-0.341,2.179,0.236,2.519,1.287C94.743,88.058,94.167,89.186,93.116,89.526z"
                  fill='url("#SvgjsLinearGradient1011")'
                ></path>
              </g>
            </svg>
            <svg
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              class="css-ze2te4 css-qd6ojx"
              viewBox="-18 -18 100 48"
              width="100"
              height="50"
            >
              <g
                transform="translate(-6.179133430834537, -8.554396567930196) scale(1.123586933329973)"
                class="css-1mgjlsp"
                fill='url("#SvgjsLinearGradient1011")'
              >
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M 9 7.86 q -0.26 -0.04 -0.43 -0.24 t -0.17 -0.46 l 0 -1.46 q 0 -0.34 0.24 -0.54 t 0.56 -0.16 q 1.72 0.28 3.06 1.22 q 1.74 1.26 2.46 3.34 q 0.12 0.34 -0.08 0.64 t -0.58 0.3 l -1.6 0 q -0.22 0 -0.4 -0.11 t -0.26 -0.31 q -0.44 -1.04 -1.34 -1.66 q -0.7 -0.44 -1.46 -0.56 Z M 14.06 14.5 q 0.38 0 0.58 0.3 t 0.08 0.64 q -0.72 2.08 -2.46 3.34 q -1.34 0.94 -3.06 1.22 l -0.1 0 q -0.28 0 -0.46 -0.18 q -0.24 -0.18 -0.24 -0.52 l 0 -1.46 q 0 -0.26 0.16 -0.46 t 0.42 -0.24 q 0.84 -0.12 1.48 -0.56 q 0.9 -0.62 1.34 -1.66 q 0.08 -0.2 0.26 -0.31 t 0.4 -0.11 l 1.6 0 Z M 6.9 5.24 q 0.26 0.2 0.26 0.54 l 0 1.56 q 0 0.22 -0.15 0.41 t -0.37 0.27 q -0.28 0.06 -0.44 0.14 q -0.8 0.36 -1.36 0.98 q -1.14 1.28 -1.14 3.35 t 1.14 3.37 q 0.7 0.8 1.8 1.12 q 0.22 0.06 0.37 0.25 t 0.15 0.41 l 0 1.58 q 0 0.34 -0.26 0.54 q -0.18 0.16 -0.46 0.16 l -0.14 0 q -2.14 -0.46 -3.62 -2.08 q -1.9 -2.14 -1.9 -5.34 t 1.9 -5.34 q 1.48 -1.64 3.62 -2.06 q 0.32 -0.08 0.6 0.14 Z M 29.356 16.96 q 0.3 0 0.5 0.21 t 0.2 0.51 l 0 1.46 q 0 0.28 -0.2 0.49 t -0.5 0.21 l -9.88 0 q -0.28 0 -0.49 -0.21 t -0.21 -0.49 l 0 -1.46 q 0 -0.3 0.21 -0.51 t 0.49 -0.21 l 9.88 0 Z M 19.476 13.86 q -0.28 0 -0.49 -0.21 t -0.21 -0.49 l 0 -1.5 q 0 -0.28 0.21 -0.49 t 0.49 -0.21 l 8.98 0 q 0.3 0 0.51 0.21 t 0.21 0.49 l 0 1.5 q 0 0.28 -0.21 0.49 t -0.51 0.21 l -8.98 0 Z M 29.356 5 q 0.3 0 0.5 0.21 t 0.2 0.49 l 0 1.46 q 0 0.3 -0.2 0.51 t -0.5 0.21 l -9.88 0 q -0.28 0 -0.49 -0.21 t -0.21 -0.51 l 0 -1.46 q 0 -0.28 0.21 -0.49 t 0.49 -0.21 l 9.88 0 Z M 36.452 5 q 0.28 0 0.49 0.21 t 0.21 0.49 l 0 13.4 q 0 0.28 -0.21 0.49 t -0.49 0.21 l -1.52 0 q -0.28 0 -0.49 -0.21 t -0.21 -0.49 l 0 -13.4 q 0 -0.28 0.21 -0.49 t 0.49 -0.21 l 1.52 0 Z M 43.752 16.94 q 0.3 0 0.5 0.21 t 0.2 0.49 l 0 1.46 q 0 0.28 -0.2 0.49 t -0.5 0.21 l -4.66 0 q -0.3 0 -0.5 -0.21 t -0.2 -0.49 l 0 -1.46 q 0 -0.28 0.2 -0.49 t 0.5 -0.21 l 4.66 0 Z M 53.948 5.16 q 0.24 0.2 0.24 0.54 l 0 1.5 q 0 0.26 -0.15 0.45 t -0.41 0.25 q -1.28 0.26 -2.18 1.22 q -1.22 1.28 -1.22 3.33 t 1.22 3.35 q 0.9 0.94 2.18 1.2 q 0.26 0.06 0.41 0.25 t 0.15 0.45 l 0 1.5 q 0 0.32 -0.24 0.54 q -0.22 0.16 -0.46 0.16 l -0.12 0 q -2.32 -0.38 -3.98 -2.1 q -2.08 -2.14 -2.08 -5.33 t 2.08 -5.37 q 1.62 -1.68 3.98 -2.08 q 0.32 -0.06 0.58 0.14 Z M 60.228 7.1 q 2.08 2.18 2.08 5.37 t -2.08 5.33 q -1.66 1.72 -3.98 2.1 l -0.12 0 q -0.24 0 -0.46 -0.16 q -0.24 -0.22 -0.24 -0.54 l 0 -1.5 q 0 -0.26 0.15 -0.45 t 0.41 -0.25 q 1.28 -0.26 2.18 -1.2 q 1.22 -1.3 1.22 -3.35 t -1.22 -3.33 q -0.9 -0.96 -2.18 -1.22 q -0.26 -0.06 -0.41 -0.25 t -0.15 -0.45 l 0 -1.5 q 0 -0.34 0.25 -0.54 t 0.57 -0.14 q 2.36 0.4 3.98 2.08 Z M 78.724 18.82 q 0.12 0.16 0.14 0.36 t -0.06 0.38 t -0.26 0.29 t -0.38 0.11 l -1.94 0 q -0.36 0 -0.58 -0.28 l -3.82 -5.06 l -3.82 5.06 q -0.22 0.28 -0.56 0.28 l -1.96 0 q -0.2 0 -0.37 -0.1 t -0.25 -0.28 q -0.2 -0.42 0.06 -0.76 l 10.36 -13.54 q 0.22 -0.28 0.56 -0.28 l 1.94 0 q 0.2 0 0.37 0.11 t 0.27 0.29 t 0.08 0.38 t -0.16 0.36 l -4.7 6.12 Z M 68.184 9.88 l -2.88 -3.74 q -0.14 -0.16 -0.16 -0.36 t 0.08 -0.38 t 0.27 -0.29 t 0.37 -0.11 l 1.94 0 q 0.16 0 0.32 0.07 t 0.24 0.21 l 2.82 3.74 q 0.28 0.34 0.08 0.76 q -0.08 0.18 -0.25 0.28 t -0.39 0.1 l -1.88 0 q -0.16 0 -0.32 -0.07 t -0.24 -0.21 Z"
                  fill='url("#SvgjsLinearGradient1011")'
                />
              </g>
            </svg>
          </router-link>
        </el-menu-item>
      </el-menu>
      <div class="header-right-corner flex">
        <router-link class="router explore-nav" :to="`/yacht`">
          <span @click="reloadYachts" class="txt"> Explore </span>
        </router-link>
        <!-- <span class="new-owner" @click="becomeOwner()">Become a owner</span> -->
        <user-selections />
      </div>
    </div>
  </header>
</template>

<script>
import userSelections from "./user-selections.vue";
export default {
  name: "app-header",
  components: { userSelections },
  data() {
    return {
      layoutClass: "main-layout-home",
      positionClass: " fixed",
      color: false,
    };
  },

  methods: {
    async reloadYachts() {
      await this.$store.dispatch({ type: "loadYachts" });
    },
    navTo() {
      this.$router.push("/login");
    },
  becomeOwner() {
        if (
          this.loggedinUser &&
          this.$route.path !== `/user/${this.loggedinUser._id}`
        ) {
          this.$router.push(`/user/${this.loggedinUser._id}`);
        } else {
          this.$router.push("/login");
        }
      }
    },

  computed: {
    homeActivnessClass() {
      return this.$route.name === "home" ? "home-active" : "";
    },
    loggedinUser() {
      return this.$store.getters.loggedinUser;
    },
  },
  watch: {
    "$route.path": {
      immediate: true,
      handler() {
        if (this.$route.path === "/yacht") {
          this.layoutClass = "layout-yacht";
        } else {
          this.layoutClass = "main-layout-home";
        }
        if (this.$route.path === "/") {
          this.positionClass = "fixed";
        } else {
          this.positionClass = "stickyPos";
        }
      },
    },
  },
  created() {
    addEventListener("scroll", () => {
      if (window.scrollY !== 0) {
        this.isTop = false;
        this.color = false;
      } else {
        this.isTop = true;
        this.color = true;
      }
    });
  },
};
</script>