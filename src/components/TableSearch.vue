<template>
  <el-form ref="ruleFormRef" :model="formData">
    <el-row :gutter="24">
      <template v-for="item in formItemAttrs" :key="item.prop">
        <el-col v-bind="item.col">
          <el-form-item :label="item.label" :prop="item.prop">
            <!-- 动态组件  -->
              <component v-model="formData[item.prop]" :is="isComp(item.comp)" :placeholder="item.placeholder">
              <template v-if="item.comp === 'select'">
                <el-option label="全部" value="all"></el-option>
                <el-option v-for="opt in item.options" :key="opt.value" :label="opt.label" :value="opt.value"></el-option>
              </template>
              </component>
          </el-form-item>
        </el-col>
        </template>
    </el-row>
    
    <el-row>
      <el-button type="primary" @click="handleSearch">查询</el-button>
      <el-button @click="handleReset(ruleFormRef)">重置</el-button>
    </el-row>
    
  </el-form>
</template>

<script setup>
import {ref,reactive,computed} from 'vue'
// formData是输入的表单数据 要传给父组件的
const formData = reactive({})
const props = defineProps({
  // 父组件传过来的表单项
  formItem: {
    type: Array,
    default: () => []
  }
})
// 子组件触发父组件事件 search 并传递参数 formData
const emit = defineEmits(['search'])

const formItemAttrs = computed(() => {
  const {formItem} = props
  formItem.forEach(item => {
    item.col = {xs:24,sm:12,md:8,lg:6,xl:6}  //每个值代表该屏幕尺寸下表单项占的列数
  })
  return formItem
})   //计算属性也是响应式的

//表单数据  响应式
const ruleFormRef = ref()
const isComp = (comp) => {
  return {
    input:'el-input',
    select:'el-select'
  }[comp]  // 通过键去找对应的值
}

const handleSearch = () => {
  // console.log(formData)
  // emit 触发事件 子组件触发父组件事件 search 并传递参数 formData
  emit('search',formData)
}

const handleReset = (formEl) => {
  // 先重置表单再触发查询
  if(!formEl) return  //空的表单会直接return，不做重置
  formEl.resetFields()
  emit('search',formData)
}
</script>

