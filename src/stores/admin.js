import { defineStore } from 'pinia'
import { ref } from 'vue'
//Pinia是Vue的状态管理库，用于管理应用程序的全局状态 
export const useAdminStore = defineStore('admin', () => {
  // 一个store由defineStore()定义 有三个部分：state、actions、getters
  // 响应式  用来确认侧边栏折叠了没有
  // state 响应式数据  ref()
  const isCollapse = ref(false)

  // getters 计算属性 派生state 此处没有使用计算属性  computed()
  // actions 方法 修改state 普通函数
  const toggleCollapse = () => {
    // 取反值
    isCollapse.value = !isCollapse.value
  }

  return {
    isCollapse,
    toggleCollapse
  }

})