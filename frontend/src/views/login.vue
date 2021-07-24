<template>
  <div>
    <div class="login-page" >
      <h2 class="login-page-headlines">Login</h2>
      <form @submit.prevent="doLogin" class="login-form">
        <input autocomplete="off" type="text" v-model="loginCred.username" placeholder="Username"/>
        <br />
        <input autocomplete="off" type="password" v-model="loginCred.password" placeholder="Password"/>
        <br />
        <div class="login-btns flex column center">
          <button class="special-btn btn login-btn">Login</button>
          <button @click="guestLogin" class="guest-login special-btn btn"> Login as a guest</button>
        </div>
      </form>
      <div class="middle-page flex">
        <div class="login-signup-supperline">
          <hr />
        </div>
        <h3>OR</h3>
        <div class="login-signup-supperline">
          <hr />
        </div>
      </div>
      <form  @submit.prevent="doSignup" class="signup-form">
        <h2 class="login-page-headlines">Signup</h2>
        <input autocomplete="off" type="text" v-model="signupCred.fullname" placeholder="Name"/>
        <br />
        <input autocomplete="off" type="text" v-model="signupCred.username" placeholder="Username"/>
        <br />
        <input autocomplete="off" type="password" v-model="signupCred.password" placeholder="Password"/>
        <br />
        <button class="special-btn btn ">Signup</button>

        <p>
          {{ msg }}
        </p>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      loginCred: { username: "", password: "" },
      signupCred: { username: "", password: "", fullname: "" },
      allUsers: null,
      IsSignUp: true,
    };
  },
  computed: {
    users() {
      return this.$store.getters.users;
    },
    loggedInUser() {
      return this.$store.getters.loggedinUser;
    },
    msg() {
      return this.$store.getters.msg;
    },
  },
  methods: {
    async doLogin() {
      if (!this.loginCred.username || !this.loginCred.password) {
        this.$store.commit({
          type: "setMsg",
          msg: "Please enter username and password.",
        });
        return;
      }
      try {
        const user = await this.$store.dispatch({
          type: "login",
          userCred: JSON.parse(JSON.stringify(this.loginCred)),
        });
        if (user._id) this.$router.push("/yacht");
      } catch (err) {
        console.log(err);
        throw err;
      }
    },
    async guestLogin() {
      this.loginCred.username = "mor97";
      this.loginCred.password = "secret";
      this.doLogin();
    },
    async doSignup() {
      if (
        !this.signupCred.fullname ||
        !this.signupCred.password ||
        !this.signupCred.username
      ) {
        this.$store.commit({
          type: "setMsg",
          msg: "Please enter your fullname, username and password.",
        });
        return;
      }
      const user = await this.$store.dispatch({
        type: "signup",
        userCred: this.signupCred,
      });
      if (user._id) this.$router.push("/");
    },
    loadUsers() {
      this.$store.dispatch({ type: "loadUsers" });
      this.allUsers = this.$store.getters.users;
    },
    toggleSignUp() {
      this.IsSignUp = !this.IsSignUp;
    },
  },
  created() {
    this.loadUsers();
  },
};
</script>