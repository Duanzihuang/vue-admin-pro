<template>
  <div>
    <a-drawer
      placement="right"
      :closable="false"
      @close="onClose"
      :visible="visible"
      width="300px"
    >
      <template v-slot:handle>
        <div
          class="handle"
          @click="visible = !visible"
        >
          <a-icon type="setting"></a-icon>
        </div>
      </template>
      <div>
        <h2>整体风格定制</h2>
        <!-- <a-radio-group
          v-model="navTheme"
        > -->
        <a-radio-group
          :value="$route.query.navTheme || 'dark'"
          @change="e=>settingHandleChange('navTheme',e.target.value)"
        >
          <a-radio value="dark">黑色</a-radio>
          <a-radio value="light">白色</a-radio>
        </a-radio-group>
        <h2>导航模式</h2>
        <!-- <a-radio-group
          v-model="navLayout"
        > -->
        <a-radio-group
          :value="$route.query.navLayout || 'left'"
          @change="e=>settingHandleChange('navLayout',e.target.value)"
        >
          <a-radio value="left">左侧</a-radio>
          <a-radio value="top">顶部</a-radio>
        </a-radio-group>
      </div>
    </a-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      // navTheme:'dark', // 默认为黑色
      // navLayout:'left' // 默认在左边
    }
  },
  methods: {
    onClose() {
      this.visible = false
    },
    settingHandleChange(type,value){
      // console.log(type,value)
      this.$router.push({query:{...this.$route.query,[type]:value}})
    }
  }
}
</script>

<style lang="less" scoped>
.handle {
  position: absolute;
  top: 240px;
  right: 300px;
  width: 48px;
  height: 48px;
  background: #1890ff;
  color: #fff;
  font-size: 20px;
  text-align: center;
  line-height: 48px;
  border-radius: 3px 0 0 3px;
}
</style>

