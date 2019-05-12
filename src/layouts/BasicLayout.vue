<template>
  <div :class="[`nav-theme-${navTheme}`,`nav-layout-${navLayout}`]">
    <a-layout style="min-height:100vh">
      <a-layout-sider
        v-if="navLayout === 'left'"
        :theme="navTheme"
        v-model="collapsed"
        width='256px'
      >
        <div class="logo">Vue Admin Pro</div>
        <SideBar :theme="navTheme"/>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background-color:#fff;padding: 0;">
          <a-icon
            v-auth="['admin']"
            class="trigger"
            :type="collapsed ? 'menu-unfold':'menu-fold'"
            @click="collapsed = !collapsed"
          ></a-icon>
          <Header />
        </a-layout-header>
        <a-layout-content style="margin:0px 16px;">
          <router-view></router-view>
        </a-layout-content>
        <a-layout-footer style="text-align:center;">
          <Footer />
        </a-layout-footer>
      </a-layout>
    </a-layout>
    <!-- 右边设置的抽屉效果 -->
    <Authorized :authority="['admin']">
      <SettingDrawer />
    </Authorized>
  </div>
</template>

<script>
// 导入子组件
import Header from './Header'
import Footer from './Footer'
import SideBar from './Sidebar'
import SettingDrawer from '../components/SettingDrawer'

export default {
  components: {
    Header,
    Footer,
    SideBar,
    SettingDrawer
  },
  computed:{
    navTheme(){
      return this.$route.query.navTheme || 'dark'
    },
    navLayout(){
      return this.$route.query.navLayout || 'left'
    }
  },
  data() {
    return {
      collapsed: false //搜索
    }
  }
}
</script>

<style scoped>
.trigger {
  height: 64px;
  padding: 22px 24px;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s, padding 0s;
}
/* .trigger:hover{
  color:#fff;
} */
.logo{
  height: 64px;
  line-height: 64px;
  text-align: center;
}
.nav-theme-dark >>> .logo{
  color:#fff;
}
</style>

