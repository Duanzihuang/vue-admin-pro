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
                label="收款账号"
                :label-col="{ span: 4 }"
                :wrapper-col="{ span: 14 }">
                <ReceiverAccount v-decorator="['receiverAccount',{
                    initialValue: step.receiverAccount,
                    rules: [{ 
                        required: true, message: '请输入收款账号',
                        validator:(rule,value,callback) => {
                            if (value && value.number){
                                callback()
                            } else {
                                callback(false)
                            }
                        }
                    }]
                }]" placeholder="请输入收款账号"></ReceiverAccount>
            </a-form-item>
            <a-form-item>
                <a-button type="primary" @click="handleSubmit">下一步</a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<script>
import ReceiverAccount from '@/components/ReceiverAccount'
export default {
    components:{
        ReceiverAccount
    },
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
        handleSubmit(){
            const {$router,$store,form} = this
            // 验证表单项
            form.validateFields((errors, values) => {
                if (!errors){
                    $store.commit({
                        type:'form/saveStepFormData',
                        payload:values
                    })

                    // 跳转到确认页面去
                    $router.push('/form/step-form/confirm')
                }
            })
        }
    }
}
</script>
