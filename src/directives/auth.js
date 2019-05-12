import {check} from '../utils/auth'

function install(Vue,options = {}){
    Vue.directive(options.name || "auth",{
        inserted(el,bindig){
            if (!check(bindig.value)){ // 校验不通过
                el.parentNode && el.parentNode.removeChild(el)
            }
        }
    })
}

export default {install}