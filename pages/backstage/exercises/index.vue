<template>
  <!-- 外边框 -->
  <div>
    <el-row>
      <el-col style="width:180px">
        <div class="exercisestag">
          <el-menu default-active="2"
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
        </div>
      </el-col>
      <el-col :span="20">

        <div style="margin:20px 0 0 20px;">
          <div>
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/backstage/exercises' }">题目管理</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <div style="background:white;">
            <div style="margin:20px;">
              <div>题目列表</div>
              <hr></hr>
              <!-- 功能按钮 -->
              <div>
                <el-row>
                  <el-col :span="3">
                    <nuxt-link to="/backstage/exercises/addexercises">
                      <el-button type="primary"
                                 size="small">+ 添加题目</el-button>
                    </nuxt-link>
                  </el-col>
                  <el-col :span="6">
                    <el-button type="danger"
                               size="small"
                               disabled="true"
                               title="暂时还不能用，请通过“编辑”功能删除。"
                               plain>全部删除</el-button>
                  </el-col>
                  <el-col :span="15">
                    <el-input placeholder="请输入题目名称，或机构名称"
                              v-model="input5"
                              class="input-with-select">
                      <el-button slot="append"
                                 icon="el-icon-search"></el-button>
                    </el-input>
                  </el-col>
                  <el-col>
                  </el-col>
                </el-row>
              </div>
              <!-- 题目列表 -->
              <div>
                <el-table :data="tableData"
                          style="width: 100%">
                  <el-table-column type="index">
                  </el-table-column>
                  <el-table-column label="题目"
                                   width="450">
                    <template slot-scope="scope">
                      <el-popover trigger="hover"
                                  placement="top">
                        <p>练习题: {{ scope.row.title }}</p>
                        <div slot="reference"
                             class="name-wrapper">
                          <span style="margin-left: 10px,overflow: hidden;text-overflow: ellipsis;white-space: nowrap">
                            {{ scope.row.title }}</span>
                        </div>
                      </el-popover>
                    </template>
                  </el-table-column>
                  <el-table-column label="所属机构"
                                   width="180">
                    <template slot-scope="scope">
                      <el-popover trigger="hover"
                                  placement="top">
                        <p>添加人: {{ scope.row.name }}</p>
                        <p>所属机构: {{ scope.row.address }}</p>
                        <div slot="reference"
                             class="name-wrapper">
                          <el-tag size="medium">{{ scope.row.name }}</el-tag>
                        </div>
                      </el-popover>
                    </template>
                  </el-table-column>
                  <el-table-column label="更新时间"
                                   width="200">
                    <template slot-scope="scope">
                      <i class="el-icon-time"></i>
                      <span style="margin-left: 10px">{{ scope.row.update }}</span>
                    </template>
                  </el-table-column>

                  <el-table-column label="操作">
                    <template slot-scope="scope">
                      <el-button size="mini">编辑</el-button>
                      <el-button size="mini
                                 "
                                 type="danger
                                 "
                                 disabled="true
                                 "
                                 title="暂时还不能用，请通过“编辑”功能删除。
                                 ">删除</el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
              <!-- 分页符 -->
              <div style="text-align:center;margin:40px;">
                <el-pagination background
                               layout="prev, pager, next"
                               :total="1000">
                </el-pagination>
              </div>
            </div>
          </div>

        </div>
      </el-col>
    </el-row>

  </div>
</template>
<script>
export default {
  layout: 'backstage/default',
  data() {
    return {
      KnowledgeAreas: [
        '项目整合管理',
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
      ],
      tableData: [
        {
          title:
            '项目实施期间，一名团队成员告诉你，发生了一项已识别的重要风险。这是测试长度限制这是测试长度限制这是测试长度限制这是测试长度限制',
          update: '2018-05-24 18:00:01',
          name: '相宁宁',
          address: '光环国际',
          zip: 200333,
          tag: '家'
        },
        {
          title:
            '你的公司遇到紧急情况，需要尽快把工作外包，把下面哪一条加入合...',
          update: '2018-05-24 18:00:01',
          name: '相宁宁',
          address: '光环国际',
          zip: 200333,
          tag: '家'
        },
        {
          title:
            '项目实施期间，一名团队成员告诉你，发生了一项已识别的重要风险。这是测试长度限制这是测试长度限制这是测试长度限制这是测试长度限制',
          update: '2018-05-24 18:00:01',
          name: '相宁宁',
          address: '光环国际',
          zip: 200333,
          tag: '家'
        },
        {
          title:
            '你的公司遇到紧急情况，需要尽快把工作外包，把下面哪一条加入合…',
          update: '2018-05-24 18:00:01',
          name: '相宁宁',
          address: '光环国际',
          zip: 200333,
          tag: '家'
        },
        {
          title:
            '项目实施期间，一名团队成员告诉你，发生了一项已识别的重要风险。这是测试长度限制这是测试长度限制这是测试长度限制这是测试长度限制',
          update: '2018-05-24 18:00:01',
          name: '相宁宁',
          address: '光环国际',
          zip: 200333,
          tag: '家'
        },
        {
          title:
            '你的公司遇到紧急情况，需要尽快把工作外包，把下面哪一条加入合…',
          update: '2018-05-24 18:00:01',
          name: '相宁宁',
          address: '光环国际',
          zip: 200333,
          tag: '家'
        },
        {
          title:
            '项目实施期间，一名团队成员告诉你，发生了一项已识别的重要风险。这是测试长度限制这是测试长度限制这是测试长度限制这是测试长度限制',
          update: '2018-05-24 18:00:01',
          name: '相宁宁',
          address: '光环国际',
          zip: 200333,
          tag: '家'
        },
        {
          title:
            '你的公司遇到紧急情况，需要尽快把工作外包，把下面哪一条加入合…',
          update: '2018-05-24 18:00:01',
          name: '相宁宁',
          address: '光环国际',
          zip: 200333,
          tag: '家'
        },
        {
          title:
            '项目实施期间，一名团队成员告诉你，发生了一项已识别的重要风险。这是测试长度限制这是测试长度限制这是测试长度限制这是测试长度限制',
          update: '2018-05-24 18:00:01',
          name: '相宁宁',
          address: '光环国际',
          zip: 200333,
          tag: '家'
        },
        {
          title:
            '你的公司遇到紧急情况，需要尽快把工作外包，把下面哪一条加入合…',
          update: '2018-05-24 18:00:01',
          name: '相宁宁',
          address: '光环国际',
          zip: 200333,
          tag: '家'
        },
        {
          title:
            '项目实施期间，一名团队成员告诉你，发生了一项已识别的重要风险。这是测试长度限制这是测试长度限制这是测试长度限制这是测试长度限制',
          update: '2018-05-24 18:00:01',
          name: '相宁宁',
          address: '光环国际',
          zip: 200333,
          tag: '家'
        },
        {
          title:
            '你的公司遇到紧急情况，需要尽快把工作外包，把下面哪一条加入合…',
          update: '2018-05-24 18:00:01',
          name: '相宁宁',
          address: '光环国际',
          zip: 200333,
          tag: '家'
        },
        {
          title:
            '项目实施期间，一名团队成员告诉你，发生了一项已识别的重要风险。这是测试长度限制这是测试长度限制这是测试长度限制这是测试长度限制',
          update: '2018-05-24 18:00:01',
          name: '相宁宁',
          address: '光环国际',
          zip: 200333,
          tag: '家'
        }
      ]
    }
  }
}
</script>
<style scoped>
.exercisestag {
  width: 180px;
  background: white;
  height: 100px;
}
</style>


