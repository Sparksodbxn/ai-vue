<template>
  <div class="page-head"> 
    <p class="page-title">{{ props.title }}</p>
    <div class="action-btn">
      <slot name="buttons"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-head{

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  .page-title{
    font-size: 24px;
    color: #2d3748;
  }
}
</style>

<script setup>
//props接收父组件传递的title属性
const props = defineProps({
  title: {
    type: String,
    default: '页面标题'
  }
})
</script>