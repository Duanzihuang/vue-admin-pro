import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes:[
        {
            path:'/',
            component:() => import(/* webpackChunkName: "layouts" */'../layouts/BasicLayout.vue'),
            children:[
                {
                    path:'/dashboard',
                    name:'dashboard',
                    component:{render:h=>h('router-view')},
                    children:[
                        {
                            // path:'/dashboard/analysis',
                            path:'analysis',
                            name:'analysis',
                            component:() => import(/* webpackChunkName: "dashboard" */'../views/Dashboard/Analysis.vue')
                        }
                    ]
                }
            ]
        }
    ]
})

router.beforeEach((to,from,next) => {
    if (to.path !== from.path){
        NProgress.start()
    }
    next()
})

router.afterEach(() => {
    NProgress.done()
})

export default router