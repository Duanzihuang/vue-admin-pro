<template>
    <div>
        <a-form layout="horizontal" :form="form">
            <a-form-item 
                label="付款账号"
                :label-col="{ span: 4 }"
                :wrapper-col="{ span: 14 }">
                <a-input v-decorator="['payAccount',{
                    initialValue: step.payAccount,
                    rules: [{ required: true, message: '请输入付款账号' }]
                }]" placeholder="请输入付款账号"></a-input>
            </a-form-item>
            <a-form-item 
                label="密码"
                :label-col="{ span: 4 }"
                :wrapper-col="{ span: 14 }">
                <a-input v-decorator="['password',{
                    initialValue: step.payAccount,
                    rules: [{ required: true, message: '请输入付款密码' }]
                }]" placeholder="请输入付款密码" type="password"></a-input>
            </a-form-item>
            <a-form-item>
                <a-button @click="onPrev">上一步</a-button>
                <a-button style="margin-left:8px;" type="primary" @click="handleSubmit">提交</a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<script>
export default {
    data(){
        this.form = this.$form.createForm(this)
        return {

        }
    },
    computed:{
        step(){
            return this.$store.state.form.step
        }
    },
    methods:{
        onPrev(){
            this.$router.push('/form/step-form/info')
        },
        handleSubmit(){
            const {$store,form,step} = this
            // 验证表单项
            form.validateFields((errors, values) => {
                if (!errors){
                    $store.dispatch({
                        type:'form/submitStepFormData',
                        payload:{...step,...values}
                    })
                }
            })
        }
    }
}
</script>
