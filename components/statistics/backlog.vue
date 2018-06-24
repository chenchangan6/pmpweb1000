<template>
  <div class="backlog">
    <nuxt-link :to="linkto">
      <div class="backlognumber">{{blocklognumber}}</div>
      <div class="backlogname">{{blocklogname}}</div>
    </nuxt-link>
  </div>

</template>
<script>
export default {
  props: {
    linkto: String,
    blocklogname: String,
    blocklognumber: Number
  }
}
</script>

<style scoped>
.backlog {
  border: solid 1px #ebeef5;
  width: 270px;
  height: 90px;
  text-align: center;
  margin: 0px 20px 20px 20px;
}
.backlognumber {
  font-size: 24px;
  font-weight: 600;
  color: #f56c6c;
  margin-top: 20px;
}
.backlogname {
  font: normal 12px;
  color: #606266;
}
</style>
