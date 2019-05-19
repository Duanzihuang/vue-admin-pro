<template>
  <a-dropdown class="header">
    <a-icon type="global"></a-icon>
    <a-menu slot="overlay" :selectedKeys="[$route.query.locale || 'zhCN']" @click="toggleLanguage">
      <a-menu-item key="zhCN">
        <a href="javascript:;">中文</a>
      </a-menu-item>
      <a-menu-item key="enUS">
        <a href="javascript:;">English</a>
      </a-menu-item>
    </a-menu>
  </a-dropdown>
</template>

<script>
export default {
    methods:{
        toggleLanguage({key}){
            // 通过路由更改locale
            this.$router.push({query:{...this.$route.query,locale:key}})
            // 更改i18n国际化信息
            this.$i18n.locale = key
        }
    }
}
</script>

<style scoped>
.header {
  float: right;
  padding-top: 30px;
  padding-right: 20px;
}
</style>

