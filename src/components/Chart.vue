<template>
  <div ref="chartDom"></div>
</template>

<script>
// 导包
import echarts from 'echarts'
import { addListener, removeListener } from 'resize-detector'
import debounce from 'loadsh/debounce' //loadsh的防抖处理

export default {
  props: {
    option: {
      type: Object,
      default: () => {}
    }
  },
  created() {
    this.resize = debounce(this.resize, 300)
  },
  watch: {
    // 普通watch
    option(val) {
      this.myChart.setOption(val)
    },
    // 深度watch
    // option: {
    //   deep: true,
    //   handler(val) {
    //     this.myChart.setOption(val)
    //   }
    // }
  },
  mounted() {
    this.renderChart()
    addListener(this.$refs.chartDom, this.resize)
  },
  beforeDestroy() {
    removeListener(this.$refs.chartDom, this.resize)
  },
  methods: {
    resize() {
      // console.log('resize')
      // 重绘图表
      this.myChart.setOption(this.option)
    },
    renderChart() {
      // 基于准备好的dom，初始化echarts实例
      this.myChart = echarts.init(this.$refs.chartDom)
      // 绘制图表
      this.myChart.setOption(this.option)
    }
  }
}
</script>

<style>
</style>
