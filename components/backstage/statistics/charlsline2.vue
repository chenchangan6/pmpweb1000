<template>
  <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
  <div :id=id
       style="width: 540px;height:300px; padding:20px;"></div>
</template>
<script>
import echarts from 'echarts'
export default {
  components: {
    echarts
  },
  props: {
    id: String
  },
  data() {
    return {
      title: {
        text: '本周新增用户趋势',
        subtext: '全网用户',
        name: '新增用户数'
      },
      legend: {
        data: ['新增用户数']
      },
      Xdata: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      Ydata: [112, 113, 151, 83, 22, 123, 130]
    }
  },
  methods: {
    drawPie(id) {
      this.charts = echarts.init(document.getElementById(id))
      this.charts.setOption({
        title: {
          text: this.title.text,
          subtext: this.title.subtext
        },

        legend: {
          data: ['新增用户数']
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: this.Xdata
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLabel: {
              formatter: '{value}'
            }
          }
        ],
        series: [
          {
            name: this.title.name,
            type: 'line',
            data: this.Ydata,
            markPoint: {
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' }
              ]
            },
            markLine: {
              data: [{ type: 'average', name: '平均值' }]
            }
          }
        ]
      })
    }
  },
  // 调用
  mounted() {
    this.$nextTick(function() {
      this.drawPie(this.id)
    })
  }
}
</script>


                    