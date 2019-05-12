import Vue from 'vue'
import App from './App.vue'

// 按需导入ant-design-vue组件
import { Button,Layout,Menu,Icon,Drawer,Radio } from 'ant-design-vue'
import Authorized from './components/Authorized'
import Auth from './directives/auth'

Vue.use(Button)
Vue.use(Layout)
Vue.use(Menu)
Vue.use(Icon)
Vue.use(Drawer)
Vue.use(Radio)

// 全局注册
Vue.component('Authorized',Authorized)
Vue.use(Auth)

// 导入路由
import router from './router'

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
