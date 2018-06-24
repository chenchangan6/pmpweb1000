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
import axios from 'axios'
export default {
  data() {
    return {
      phonenumber: '',
      pwd: ''
    }
  },
  computed: {
    userinfo() {
      return { username: this.phonenumber, pwd: this.pwd }
    }
  },

  methods: {
    login() {
      console.log(this.userinfo, this.$store.state.config[0].login)
      axios.post(this.$store.state.config[0].login, this.userinfo).then(res => {
        console.log(res.data)

        if (res.data.code === '200') {
          this.$router.push({ path: '/backstage/' })
        } else {
          console.log(res.data.message)
        }
      })
    }
  }
}
</script>
