<template>
    <div style="margin:200px auto;text-align:center;">
        <icon-font type="icon-icon-404" style="font-size:100px"></icon-font>
        <!-- <img :src="logo" alt=""> -->
        <!-- 组件的形式使用svg，要更改webpack的配置，借助vue-svg-loader -->
        <Logo />
    </div>
</template>

<script>
// import logo from '@/assets/logo.svg'

// 组件的形式显示svg 要更改webpack的配置，借助vue-svg-loader
import Logo from '@/assets/logo.svg'

export default {
    components:{
        Logo
    },
    data(){
        // return {
        //     logo
        // }
    }
}
</script>