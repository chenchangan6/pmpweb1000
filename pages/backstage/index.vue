<template>
  <div>
    <!-- 新增统计 -->
    <el-row :gutter="32">
      <el-col :span="6"
              v-for="box in statistics"
              :key=box.countname>
        <sumandnewbox :linkto=box.linkto
                      :countname=box.countname
                      :countvalue=box.countvalue
                      :newname=box.newname
                      :newvalue=box.newvalue
                      :iconname=box.iconname
                      :background=box.background></sumandnewbox>
      </el-col>
    </el-row>
    <!-- 待办事项 -->
    <el-row style="background:white;">
      <el-col :span="24">
        <div class="title2">待办事项</div>
      </el-col>
      <el-col :span="6"
              v-for="list in blocklog"
              :key=list.blocklogname>
        <backlog :linkto=list.linkto
                 :blocklogname=list.blocklogname
                 :blocklognumber=list.blocklognumber></backlog>
      </el-col>
    </el-row>

  </div>
</template>
<script>
import sumandnewbox from '~/components/backstage/statistics/sumandnewbox'
import backlog from '~/components/statistics/backlog'
export default {
  data() {
    return {
      statistics: [
        {
          linkto: '/',
          countname: '总学员',
          countvalue: 11234,
          newname: '今日新增',
          newvalue: 180,
          iconname: 'el-icon-service',
          background: 'background:#1989FA;'
        },
        {
          linkto: '/',
          countname: '总机构',
          countvalue: 50,
          newname: '今日新增',
          newvalue: 23,
          iconname: 'el-icon-news',
          background: 'background:#67C23A;'
        },
        {
          linkto: '/backstage/login',
          countname: '总题目',
          countvalue: 12348,
          newname: '今日新增',
          newvalue: 1223,
          iconname: 'el-icon-tickets',
          background: 'background:#E6A23C;'
        },
        {
          linkto: '/backstage/',
          countname: '总试卷',
          countvalue: 150,
          newname: '今日新增',
          newvalue: 13,
          iconname: 'el-icon-document',
          background: 'background:#F56C6C;'
        }
      ],
      blocklog: [
        {
          linkto: '/',
          blocklogname: '待审核机构',
          blocklognumber: 33
        },
        {
          linkto: '/',
          blocklogname: '待联系机构',
          blocklognumber: 3
        },
        {
          linkto: '/',
          blocklogname: '待纠错题目',
          blocklognumber: 74
        },
        {
          linkto: '/',
          blocklogname: '待审核学员',
          blocklognumber: 123
        }
      ]
    }
  },
  components: {
    sumandnewbox,
    backlog
  },
  layout: 'backstage/default'
}
</script>
<style scoped>
.el-row {
  margin-bottom: 20px;
}
.title2 {
  font: medium 14px;
  columns: #606266;
  margin: 20px 0px 10px 20px;
}
</style>


