<template>
  <div style="margin:20px 0 0 20px;background:white;">
    <div style="margin:20px 0 0 20px;">
      <el-row>
        <el-col>
          <div>
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/backstage/exercises'}">题目管理</el-breadcrumb-item>
              <el-breadcrumb-item>添加题目</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <div>
            <span>添加题目</span>
          </div>
          <hr></hr>
        </el-col>
      </el-row>
      <el-row >
        <el-col>
          <div>
            <span>题目名称</span>
            <el-input type="textarea"
                      :rows="2"
                      placeholder="题目名称"></el-input>
          </div>
          <!-- 添加图片 -->
          <div>
            <el-button type="primary"
                       plain>+&nbsp;添加图片</el-button>
          </div>
          <!-- 题目选项 -->
          <div>
            <span>题目选项</span>
            <el-input :rows="2"
                      placeholder="请输入选项内容。">
              <template slot="prepend">A</template>
            </el-input>
            <el-input :rows="2"
                      placeholder="请输入选项内容。">
              <template slot="prepend">B</template>
            </el-input>
            <el-input :rows="2"
                      placeholder="请输入选项内容。">
              <template slot="prepend">C</template>
            </el-input>
            <el-input :rows="2"
                      placeholder="请输入选项内容。">
              <template slot="prepend">D</template>
            </el-input>
          </div>
          <!-- 正确答案 -->
          <div>
            <span>正确答案</span>
            <el-radio-group v-model="exercises.options.right">
              <el-radio-button label="A"></el-radio-button>
              <el-radio-button label="B"></el-radio-button>
              <el-radio-button label="C"></el-radio-button>
              <el-radio-button label="D"></el-radio-button>
            </el-radio-group>
          </div>
          <!-- 题目解析 -->
          <div>
            <span>题目解析</span>
            <el-input type="textarea"
                      :rows="4"
                      placeholder="题目解析">
            </el-input>
          </div>
          <!-- 题目范围 -->
          <div>
            <span>所属过程组</span>
            <el-select v-model="exercises.ProcessGroup"
                       placeholder="请选择过程组">
              <el-option v-for="item in ProcessGroup"
                         :key="item"
                         :label="item"
                         :value="item">
              </el-option>
            </el-select>
          </div>
          <div>
            <span>所属领域&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <el-select v-model="exercises.KnowledgeAreas"
                       placeholder="请选择所属领域">
              <el-option v-for="item in KnowledgeAreas"
                         :key="item"
                         :label="item"
                         :value="item">
              </el-option>
            </el-select>
          </div>
          <div>
            <span>所属章节&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <el-select v-model="exercises.chapter"
                       placeholder="请选择所属章节">
              <el-option v-for="item in chapter"
                         :key="item"
                         :label="item"
                         :value="item">
              </el-option>
            </el-select>
          </div>
          <!-- 发布和发布并继续添加 -->
          <div>
            <hr></hr>
            <el-button type="primary">发布</el-button>
            <el-button type="primary"
                       plain>发布并继续添加</el-button>
          </div>
        </el-col>

      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'backstage/default',
  data() {
    return {
      exercises: {
        title: '',
        options: { A: '', B: '', C: '', D: '', right: 'A' },
        KnowledgeAreas: '',
        ProcessGroup: '',
        chapter: ''
      },
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
        '第一章：项目基本要素',
        '第二章：项目运行环境',
        '第三章：项目经理角色',
        '第四章：项目整合管理',
        '第五章：项目范围管理',
        '第六章：项目进度管理',
        '第七章：项目成本管理',
        '第八章：项目质量管理',
        '第九章：项目资源管理',
        '第十章：项目沟通管理',
        '第十一章：项目风险管理',
        '第十二章：项目采购管理',
        '第十三章：项目相关方管理'
      ]
    }
  }
}
</script>

<style scoped>
div {
  margin: 5px 0px;
}
span {
  font-size: 14px;
  margin-right: 15px;
}
</style>