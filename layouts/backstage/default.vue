  <!-- 这是后台模板 -->
<template>
  <div id="app">
    <el-container>
      <el-aside style="width:220px;">
        <sidebar></sidebar>
      </el-aside>
      <el-container>
        <el-header style="width:1260px;border-right:solid 1px #ebeef5">
          <topbar></topbar>
        </el-header>
        <el-main style="width:1260px;">
          <nuxt/>
        </el-main>
      </el-container>
    </el-container>

  </div>
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
html,
body,
#__nuxt,
#__layout,
#app {
  height: 100%;
  margin: 0;
  padding: 0;
}
.el-container {
  height: 100%;
}
.el-aside {
  text-align: center;
}
.el-main {
  background-color: #ebeef5;
  padding: 20px;
}
#sidebar {
  background-color: #202838;
}
.shangfu {
  font-size: 12px;
}
</style>

