<template>
  <div class="container">
    <div class="title">
      <div class="title-text">
        <h2>创建您的账户</h2>
        <p>请填写注册信息</p>
      </div>
    </div>
    <div class="form-container">
      <el-form label-position="top" :model="formData" :rules="rules" ref="submitFormRef">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="formData.username" placeholder="请输入用户名" size="large"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="formData.email" placeholder="请输入邮箱" size="large"></el-input>
        </el-form-item>
        <el-form-item label="昵称" prop="nickname">
          <el-input v-model="formData.nickname" placeholder="请输入昵称（可选）"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="formData.phone" placeholder="请输入手机号（可选）"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="formData.password" placeholder="请输入密码" type="password" size="large" show-password></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="confirmPassword">
          <el-input v-model="formData.confirmPassword" placeholder="请再次输入密码" type="password" size="large" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="btn" @click="submitForm(submitFormRef)" size="large">创建用户</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import {ref,reactive} from 'vue'
import {register} from '../api/frontend'
import {ElMessage} from 'element-plus'
import {useRouter} from 'vue-router'
const router = useRouter()
const formData = reactive({
    "username": "",
    "email": "",
    "nickname": "",
    "phone": "",
    "password": "",
    "confirmPassword": "",
    "gender": 0,  //性别字段 1男2女
    "userType": 1 //用户类型字段 默认传1 1为普通用户 
})

//表单校验规则
const rules =reactive({
  "username": [
    { required: true, message: '请输入用户名', trigger: ['blur', 'change'] }
  ],
  "email": [
    { required: true, message: '请输入邮箱', trigger: ['blur', 'change'] },
    { type: 'email', message: '请输入正确的邮箱', trigger: ['blur', 'change'] }
  ],
  "password": [
    { required: true, message: '请输入密码', trigger: ['blur', 'change'] },
    { min: 6, message: '密码长度不能小于6位', trigger: ['blur', 'change'] }
  ],
  "confirmPassword": [
    { required: true, message: '请确认密码', trigger: ['blur', 'change'] }, ]
})

// 表单提交
const submitFormRef = ref(null)

const submitForm = async (formEl) => {
  if(!formEl){
    return
  }
  formEl.validate( async (valid) => {
    // 表单有效
    register(formData).then(({data})=>{
      if(!data) {
        // 注册成功
        ElMessage.success('注册成功')
        // 跳转登录页面
        router.push('/auth/login') 
      }
      if(data.code==='BUSINESS_ERROR'){
       ElMessage.error(data.message)
      }
    })
  });
}

</script>

<style lang="scss" scoped>
.container {
    width: 384px;
    .flex-box {
        display: flex;
        align-items: center;
    }
    .title {
        .title-text {
            text-align: center;
            h2 {
                font-size: 36px;
                margin-bottom: 10px;
            }
            p {
                font-size: 18px;
                color: #6b7280;
            }
        }
    }
    .form-container {
        margin-top: 30px;
        .btn {
            margin-top: 40px;
            width: 100%;
        }
        .footer {
            padding: 30px;
            text-align: center;
        }
    }
}
</style>