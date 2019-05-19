<template>
  <div id="app">
    <a-locale-provider :locale="locale">
      <router-view></router-view>
    </a-locale-provider>
  </div>
</template>

<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
import enUS from 'ant-design-vue/lib/locale-provider/en_US'
import moment from 'moment'
export default {
  data() {
    return {
      locale: zhCN
    }
  },
  watch: {
    /** 
    '$route.query': function(val) {
      switch (this.$route.query.locale) {
        case 'zhCN':
          this.locale = zhCN
          break

        case 'enUS':
          this.locale = enUS
          break

        default:
          break
      }
    }
    */
    '$route.query.locale':function(val){
      this.locale = val === 'zhCN' ? zhCN : enUS
      moment.locale(val === 'zhCN' ? 'zh-cn' : 'en')
    }
  }
}
</script>
