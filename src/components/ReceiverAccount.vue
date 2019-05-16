<template>
  <div>
    <a-input-group compact>
      <a-select v-model="type" @change="handleTypeChange">
        <a-select-option value="alipay">支付宝</a-select-option>
        <a-select-option value="bank">银行</a-select-option>
      </a-select>
      <a-input
        style="width: calc(100% - 130px)"
        @change="handleNumberChange"
        v-model="number"
      />
    </a-input-group>
  </div>
</template>

<script>
export default {
    props:{
        value:{
            type:Object
        }
    },
    data(){
        const {type,number} = this.value || {}
        return {
            type:type || 'alipay',
            number:number || ''
        }
    },
    watch:{
        value(val){
            Object.assign(this,val)
        }
    },
    methods:{
        handleTypeChange(val){
            this.$emit('change',{...this.value,type:val})
        },
        handleNumberChange(e){
            this.$emit('change',{...this.value,number:e.target.value})
        }
    }
}
</script>