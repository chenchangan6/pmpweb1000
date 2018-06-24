<template>

  <div class="sumandnewbox">
    <nuxt-link :to="linkto">
      <el-row type="flex"
              justify="end"
              align="middle">
        <el-col :span="8">
          <div class="circle"
               :style="background">

            <i :class="iconname"></i>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="countname">{{countname}}</div>
          <div class="countvalue">{{countvalue}}</div>
        </el-col>
        <el-col :span="8">
          <div class="margintop10">
            <div class="vline">
              <div class="newname">{{newname}}</div>
              <div class="newvalue">{{newvalue}}
                <i class="el-icon-upload2"></i>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </nuxt-link>
  </div>

</template>
<script>
export default {
  //   value 说明
  //   value 传进来应该是个Json，
  //   包含了7个值.例如：
  //   如下：
  //   1.连接地址
  //   2.统计的名称
  //   3.统计的值
  //   4.新增名称
  //   5.新增的值
  //   6.icon的名称
  //   7.背景必须加上属性名称如："background:red"
  // value:{
  //     linkto:"",
  //     countname:"",
  //     countvalue:"",
  //     newname:"",
  //     newvalue:"",
  //     iconname:"",
  //     background:""
  // }
  props: {
    linkto: String,
    countname: String,
    countvalue: Number,
    newname: String,
    newvalue: Number,
    iconname: String,
    background: String
  }
}
</script>

<style scoped>
.sumandnewbox {
  height: 100px;
  width: 280px;
  background-color: white;
}
.sumandnewbox .circle {
  display: inline-block;
  margin-top: 20px;
  width: 60px;
  height: 60px;
  border-radius: 60px;
  -webkit-border-radius: 60px;
  -moz-border-radius: 60px;
  /* background-color: #1989fa; */
  overflow: hidden;
  text-align: center;
  margin-left: 20px;
}
.circle i {
  font-size: 24px;
  color: white;
  margin: 18px;
}
.countname {
  font-size: 12px;
  color: #909399;
  margin: 10px 0px 5px 0px;
}

.countvalue {
  font-weight: bolder;
  font-size: 20px;
  color: #606266;
}
.newname {
  font-size: 12px;
  color: #909399;
  margin: 0px 0px 5px 20px;
}
.newvalue {
  font-weight: bolder;
  font-size: 16px;
  color: #67c23a;
  margin-left: 20px;
}
.margintop10 {
  margin-top: 10px;
}
.vline {
  border-left: #ebeef5 solid 1px;
}
</style>
