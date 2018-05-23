<template>

  <div class="loginbox">
    <Login></Login>
  </div>

</template>
<script>
import Login from '~/components/backstage/Login.vue'
export default {
  layout: 'backstage/login',
  components: {
    Login
  }
}
</script>
<style>
.loginbox {
  width: 520px;
  height: 490px;
  background-color: white;
  font-size: 2em;
  font-weight: lighter;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

