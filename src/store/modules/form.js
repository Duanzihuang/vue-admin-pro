import router from '../../router'
import request from '../../utils/request'

const state = {
    step:{
        payAccount:'123456', // 付款账号
        receiverAccount:{ // 收款账号
            type:'bank',
            number:''
        }
    }
}

const mutations = {
    saveStepFormData(state,{payload}){
        state.step = {
            ...state.step,
            ...payload
        }
    }
}

const actions = {
    async submitStepFormData({commit},{payload}){
        await request({
            url:'/api/form',
            method:'POST',
            data:payload
        })

        commit('saveStepFormData',payload)

        // 跳转到结果页面
        router.push('/form/step-form/result')
    }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}