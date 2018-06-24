<template>
  <div>
    <el-row id="topbar"
            type="flex"
            align="middle"
            justify="space-between">
      <el-col :span="1">
        <i class="el-icon-arrow-left"></i>
      </el-col>
      <el-col :span="19">

      </el-col>
      <el-col :span="2">
        <i class="el-icon-bell"></i>
      </el-col>
      <el-col :span="2">
        <div class="circle">
          <img src="/icon-hires.png">
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<style scoped>
#topbar {
  width: 100%;
  height: 60px;
}
.circle {
  display: inline-block;

  width: 32px;
  height: 32px;
  border-radius: 32px;
  -webkit-border-radius: 32px;
  -moz-border-radius: 32px;
  border: 2px solid #fff;
  box-shadow: 0 0 2px #ccc;
  overflow: hidden;
}
/*图片的样式*/
.circle img {
  width: 100%;
  min-height: 100%;
}
</style>
