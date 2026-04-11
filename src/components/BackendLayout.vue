//管理后台布局
//模板
<template>
  <div class="backend-layout">
    <el-container class="main-container">
        <Sidebar />
      <el-container>
        <el-header>
          <Navbar />
        </el-header>
        <el-main class="main-container">
          <!-- 根据子路由来渲染子路由对应的组件 -->
          <router-view class="content-container"></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

//脚本
<script setup>
import Sidebar from './Sidebar.vue'
import Navbar from './Navbar.vue'
</script>

//样式
<style lang="scss" scoped>
.backend-layout { 
  height: 100%;
  .el-header{
    height: 74px !important;
  }
  .main-container {
    height:100%;
    .content-container {
      padding: 20px;
      background-color: #fff;
      min-height: calc(100% - 74px);
    }
  }
}
</style>