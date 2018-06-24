<template>
  <el-menu :default-openeds="['1', '3']"
           default-active="2"
           class="el-menu-vertical-demo"
           @open="handleOpen"
           @close="handleClose">
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>过程组</span>
      </template>
      <el-menu-item v-for="(item) in ProcessGroup"
                    :key="index"
                    :index="item">{{item}}</el-menu-item>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>知识领域</span>
      </template>
      <el-menu-item v-for="(item,index) in KnowledgeAreas"
                    :key="index"
                    :index="item">{{item}}</el-menu-item>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>PMBOK(第六版）</span>
      </template>
      <el-menu-item v-for="(item,index) in chapter"
                    :key="index"
                    :index="item">{{item}}</el-menu-item>
    </el-submenu>
  </el-menu>
</template>
<script>
export default {
  data() {
    return {
      KnowledgeAreas: [
        '整合管理',
        '范围管理',
        '进度管理',
        '成本管理',
        '质量管理',
        '资源管理',
        '沟通管理',
        '风险管理',
        '采购管理',
        '相关方管理'
      ],
      ProcessGroup: [
        '启动过程组',
        '计划过程组',
        '监控过程组',
        '执行过程组',
        '收尾过程组'
      ],
      chapter: [
        '(1)：基本要素',
        '(2)：运行环境',
        '(3)：经理角色',
        '(4)：整合管理',
        '(5)：范围管理',
        '(6)：进度管理',
        '(7)：成本管理',
        '(8)：质量管理',
        '(9)：资源管理',
        '(10)：沟通管理',
        '(11)：风险管理',
        '(12)：采购管理',
        '(13)：相关方管理'
      ]
    }
  }
}
</script>
