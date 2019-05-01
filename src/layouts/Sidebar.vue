<template>
  <div style="width: 200px">
    
  </div>
</template>

<script>
/* 
 * recommend SubMenu.vue https://github.com/vueComponent/ant-design-vue/blob/master/components/menu/demo/SubMenu.vue
 * SubMenu1.vue https://github.com/vueComponent/ant-design-vue/blob/master/components/menu/demo/SubMenu1.vue
 * */
import SubMenu from './SubMenu'
export default {
  components: {
    'sub-menu': SubMenu,
  },
  data () {
    return {
      collapsed: false,
      list: [
        {
          key: '1',
          title: 'Option 1',
        }, {
          key: '2',
          title: 'Navigation 2',
          children: [
            {
              key: '2.1',
              title: 'Navigation 3',
              children: [
                { key: '2.1.1',
                  title: 'Option 2.1.1',
                },
              ],
            },
          ],
        }],
    }
  },
  methods: {
    toggleCollapsed () {
      this.collapsed = !this.collapsed
    },
  },
}
</script>
