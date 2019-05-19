import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App.vue'
import queryString from 'query-string'

// 按需导入ant-design-vue组件
import { 
  Button,
  Layout,
  Menu,
  Icon,
  Drawer,
  Radio,
  Form,
  Input,
  Select,
  LocaleProvider,
  Dropdown,
  Calendar,
  DatePicker 
} from 'ant-design-vue'
import Authorized from './components/Authorized'
import Auth from './directives/auth'

Vue.use(Button)
Vue.use(Layout)
Vue.use(Menu)
Vue.use(Icon)
Vue.use(Drawer)
Vue.use(Radio)
Vue.use(Form)
Vue.use(Input)
Vue.use(Select)
Vue.use(LocaleProvider)
Vue.use(Dropdown)
Vue.use(Calendar)
Vue.use(DatePicker)

// 全局注册
Vue.component('Authorized',Authorized)
Vue.use(Auth)

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1000669_liv6mszxnr.js', // 在 iconfont.cn 上生成
})

Vue.component('IconFont',IconFont)

// 国际化
Vue.use(VueI18n)
import zhCNLanguage from './locale/zhCN'
import enUSLanguage from './locale/enUS'

// 准备翻译的语言环境信息
const messages = {
  zhCN:{
    message:zhCNLanguage
  },
  enUS:{
    message:enUSLanguage
  }
}

// 通过选项创建 VueI18n 实例
const i18n = new VueI18n({
  //locale: 'zhCN', // 设置地
  locale: queryString.parse(location.search).locale || 'zhCN',
  messages // 设置地区信息
})

// 导入路由
import router from './router'
// 导入store
import store from './store'

new Vue({
  i18n,
  render: h => h(App),
  router,
  store
}).$mount('#app')
