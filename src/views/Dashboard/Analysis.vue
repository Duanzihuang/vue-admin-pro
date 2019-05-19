<template>
  <div>
    <!-- <a-calendar :fullscreen="false"></a-calendar> -->
    {{$t("message")["app.dashboard.analysis.timeLabel"]}}&nbsp;&nbsp;
    <a-date-picker></a-date-picker>
    <Chart
      :option="chartOption"
      style="height:400px;"
    />
  </div>
</template>

<script>
import Chart from '../../components/Chart'
import random from 'loadsh/random'
import request from '../../utils/request'

export default {
  components: {
    Chart
  },
  data() {
    return {
      chartOption: {}
    }
  },
  created() {
    // this.getChartOptionData()
    this.interval = setInterval(() => {
      // this.getChartOptionData()
      /**
          this.chartOption.series[0].data = this.chartOption.series[0].data.map(()=>random(100))
          
          // 可以用下面的来替代watch的深度watch
          this.chartOption = {...this.chartOption}
        */
    }, 3000)
  },
  methods: {
    getChartOptionData() {
      request({
        url: '/api/dashboard/chart',
        method: 'GET',
        params: { ID: 12345 }
      }).then(res => {
        this.chartOption = {
          title: {
            text: 'ECharts 入门示例'
          },
          tooltip: {},
          xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
          },
          yAxis: {},
          series: [
            {
              name: '销量',
              type: 'bar',
              data: res.data
            }
          ]
        }
      })
    }
  },
  beforeDestroy() {
    clearInterval(this.interval)
  }
}
</script>