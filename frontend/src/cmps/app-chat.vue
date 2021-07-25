<template>
  <div>
    <div class="chat-container">
      <!-- <span v-if="isTyping"> User is typing..</span> -->
      <el-input
        ref="input"
        class="txt-input"
        type="textarea"
        :rows="8"
        placeholder="Your messege will be sent to the owner..."
        v-model="msg.txt"
      />
      <el-button
        @click.native="sendMsg"
        type="primary"
        plain
        icon="el-icon-message"
      ></el-button>
    </div>
  </div>
</template> 

<script>
import { socketService } from "../services/socket.service.js";
import { userService } from "../services/user.service.js";
const Swal = require("sweetalert2");
export default {
  name: "chatApp",
  props: {
    yacht: Object,
  },
  data() {
    return {
      notifications: [],
      msg: { from: "", txt: "", status: "read", createdAt: new Date() },
      topic: "",
      // isTyping:false
    };
  },
  methods: {
    sendMsg() {
      this.msg.from = this.$store.getters.loggedinUser.username;
      socketService.emit("chat newMsg", this.msg);
      // this.notifications.push(this.msg);
    },

    focusInput() {
      this.$refs.input.focus();
    },
    async addMsg(msg) {
      msg.title = msg.txt.substring(0, 10) + "...";
      if (!this.notifications[this.topic]) this.notifications[this.topic] = [];
      this.notifications[this.topic].push(msg);
      const user = this.$store.getters.loggedinUser;
      try {
        await this.$store.dispatch({ type: "updateUser", user });
        if (this.yacht.owner._id === this.topic) return;
        const toUser = await userService.getById(this.yacht.owner._id);
        if (!toUser.notifications[this.topic])
          toUser.notifications[this.topic] = [];
        msg.status = "unread";
        toUser.notifications[this.topic].push(msg);
        await this.$store.dispatch({ type: "updateUser", user: toUser });
        Swal.fire(
          "your message has been sent successfully",
          "we will inform you when the owner response",
          "success"
        );
      } catch (err) {
        console.log(err);
        throw err;
      }
    },

    // userTyping(istyping){
    //   this.isTyping = istyping
    // }
  },
  mounted() {
    this.focusInput();
  },
  created() {
    const user = this.$store.getters.loggedinUser;
    this.notifications = user.notifications || [];
    // const _id = this.$route.params.toyId;
    this.topic = user._id;
    // socketService.setup();
    socketService.emit("chat topic", this.topic);
    // socketService.on('user typing', this.userTyping)
    socketService.on("chat addMsg", this.addMsg);
  },
  destroyed() {
    socketService.off("chat addMsg", this.addMsg);
    // socketService.off('user typing', this.userTyping)
    socketService.terminate();
  },
};
</script>
