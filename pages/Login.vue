<template>
  <div>
    <span>手机号码：</span>
    <el-input v-model="phonenumber"
              placeholder="手机号码"></el-input>
    <span>密码：</span>
    <el-input v-model="pwd"
              type="password"
              placeholder="您的密码"></el-input>
    <el-button type="primary">登录</el-button>
  </div>

</template>
<script>
export default {
  data() {
    return {
      phonenumber: '',
      pwd: ''
    }
  },
  methods: {}
}
</script>
