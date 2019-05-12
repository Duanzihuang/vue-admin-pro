import Vue from 'vue'
import VueRouter from 'vue-router'
import findLast from 'loadsh/findLast'
Vue.use(VueRouter)

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import NotFound from "../views/404"
import Forbidden from "../views/403"
import { check,isLogin } from '../utils/auth'
import {notification} from 'ant-design-vue'

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes:[
        {
            path:'/user',
            hideInMenu:true, // 不需要把路由转换成左侧菜单
            component: () => import(/* webpackChunkName: "layout" */ '../layouts/UserLayout'),
            children:[
                {
                    path:'/user',
                    redirect:'/user/login'
                },
                {
                    path:'/user/login',
                    name:'login',
                    component: () => import(/* webpackChunkName: "user" */ '../views/User/Login')
                },
                {
                    path:'/user/register',
                    name:'register',
                    component: () => import(/* webpackChunkName: "user" */ '../views/User/Register')
                }
            ]
        },
        {
            path:'/',
            meta:{authority:['user','admin']},
            component:() => import(/* webpackChunkName: "layout" */'../layouts/BasicLayout'),
            children:[
                // dashboard
                {
                    path: "/",
                    redirect: "/dashboard/analysis"
                },
                {
                    path:'/dashboard',
                    name:'dashboard',
                    meta:{icon:'dashboard',title:'仪表盘'},
                    component:{render:h=>h('router-view')},
                    children:[
                        {
                            // path:'/dashboard/analysis',
                            path:'analysis',
                            name:'analysis',
                            meta:{title:'分析页'},
                            component:() => import(/* webpackChunkName: "dashboard" */'../views/Dashboard/Analysis')
                        }
                    ]
                },
                {
                    path:'/form',
                    name:'form',
                    meta:{icon:'form',title:'表单',authority:['admin']},
                    component:{render:h => h("router-view")},
                    children:[
                        {
                            path:'/form/basic-form',
                            name:'basicform',
                            meta:{title:'基本表单'},
                            component:() => import(/* webpackChunkName: "form" */'../views/Forms/BasicForm')
                        },
                        {
                            path:'/form/step-form',
                            name:'stepform',
                            meta:{title:'分步表单'},
                            hideChilrenInMenu:true, // 这个路由不需要渲染到左边的菜单上
                            component:() => import(/* webpackChunkName: "form" */'../views/Forms/StepForm'),
                            children:[
                                {
                                    path:'/form/step-form',
                                    redirect:'/form/step-form/info'
                                },
                                {
                                    path: "/form/step-form/info",
                                    name: "info",
                                    component: () =>
                                      import(/* webpackChunkName: "form" */ "../views/Forms/StepForm/Step1")
                                  },
                                  {
                                    path: "/form/step-form/confirm",
                                    name: "confirm",
                                    component: () =>
                                      import(/* webpackChunkName: "form" */ "../views/Forms/StepForm/Step2")
                                  },
                                  {
                                    path: "/form/step-form/result",
                                    name: "result",
                                    component: () =>
                                      import(/* webpackChunkName: "form" */ "../views/Forms/StepForm/Step3")
                                  }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            path: "/403",
            name: "403",
            hideInMenu: true,
            component: Forbidden
        },
        {
            path: "*",
            name: "404",
            hideInMenu: true,
            component: NotFound
        }
    ]
})

router.beforeEach((to,from,next) => {
    if (to.path !== from.path){
        NProgress.start()
    }

    // 校验权限
    const record = findLast(to.matched,record => record.meta.authority)
    
    if (record && !check(record.meta.authority)){
        if (!isLogin() && to.path !== '/user/login'){
            next({
                path:'/user/login'
            })
        } else if (to.path !== '/403') {
            notification.error({
                message:'403',
                description:'您没有访问权限，请联系管理员!'
            })
            next({
                path:'/403'
            })
        }

        NProgress.done()
    }

    next()
})

router.afterEach((to, from) => {
    NProgress.done()
})

export default router