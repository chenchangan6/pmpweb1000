<template>
  <el-container>
    <el-aside width="180px">
      <exercisestag></exercisestag>
    </el-aside>
    <el-main>
      <div class="m20">题目管理</div>
      <div class="bgfff m20">
        <div class="m20">
          <el-tabs v-model="activeName">
            <el-tab-pane label="题目列表"
                         name="Vtimu">
              <el-row :gutter="20">
                <el-col :span="4">
                  <nuxt-link to="exercises/addexercises" >
                    <el-button type="primary">+添加题目</el-button>
                  </nuxt-link>
                  
                </el-col>
                <el-col :span="4">
                <el-button>删除</el-button>
                </el-col>
                <el-col :span="16">
                  <el-input placeholder="请输入题目名称，或机构名称"
                            class="input-with-select">
                    <el-button slot="append"
                               icon="el-icon-search">搜索</el-button>
                  </el-input>
                </el-col>
              </el-row>
              <el-row>
                <el-table :data="tableData">
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
                  <el-table-column label="所属机构">
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
                  <el-table-column label="更新时间">
                    <template slot-scope="scope">
                      <i class="el-icon-time"></i>
                      <span style="margin-left: 10px;font-size:9px;">{{ scope.row.update }}</span>
                    </template>
                  </el-table-column>

                  <el-table-column label="操作"
                                   width="200">
                    <template slot-scope="scope">
                      <el-button size="mini">编辑</el-button>
                      <el-button size="mini
                                 "
                                 type="danger
                                 "
                                 title="暂时还不能用，请通过“编辑”功能删除。
                                 "
                                 disabled>删除</el-button>
                    </template>
                  </el-table-column>
                </el-table>
                <el-pagination background
                               layout="prev, pager, next"
                               :total="1000">
                </el-pagination>
              </el-row>

            </el-tab-pane>
            <el-tab-pane label="纠错管理"
                         name="Vjiucuo"></el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </el-main>
  </el-container>
</template>
<script>
import exercisestag from '~/components/backstage/exercisestag'
export default {
  layout: 'backstage/default',
  components: {
    exercisestag
  },
  data() {
    return {
      activeName: 'Vtimu',
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
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
<style scoped>
.el-row {
  margin-bottom: 20px;
}
.tagtitle {
  margin: 20px;
}
</style>
