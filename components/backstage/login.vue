<template>
  <div>
    <span>手机号码：</span>
    <el-input v-model="phonenumber"
              placeholder="手机号码"></el-input>
    <span>密码：</span>
    <el-input v-model="pwd"
              type="password"
              placeholder="您的密码"></el-input>
    <el-button @click="login"
               type="primary">登录</el-button>
  </div>

</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      key1: "username",
      key2: "pwd",
      phonenumber: "",
      pwd: ""
    };
  },
  computed: {
    userinfo() {
      return { username: this.phonenumber, phonenumber: this.pwd };
    }
  },

  methods: {
    login() {
      console.log(this.userinfo);
      axios.post(this.$store.state.config[0].login, this.userinfo).then(res => {
        console.log(res.data);
        this.zhucemesages = res.data.code + res.data.messages;
      });
    }
  }
};
</script>
