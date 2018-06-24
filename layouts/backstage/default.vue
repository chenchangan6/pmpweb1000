  <!-- 这是后台模板 -->
<template>
  <el-container>
    <el-aside width="220px">
      <sidebar></sidebar>
    </el-aside>
    <el-container>
      <el-header>
        <topbar></topbar>
      </el-header>
      <el-main>
        <nuxt/>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import sidebar from '~/components/backstage/sidebar'
import topbar from '~/components/backstage/topbar'
export default {
  components: {
    sidebar,
    topbar
  }
}
</script>

<style>
html {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
html,
body,
#__nuxt,
#__layout,
.el-container {
  height: 100%;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
.el-aside {
  text-align: center;
}
.el-main {
  background-color: #ebeef5;
  padding: 0;
}
#sidebar {
  background-color: #202838;
}
.shangfu {
  font-size: 12px;
}
.titlelable
{
  font-size: 1.02em;height: 40px;
  border-bottom: solid 1px #E4E7ED;
  
}
.m20{
  margin: 20px;
}
.bgfff{
  background-color: #fff;
}
</style>

