import axios from 'axios'
import { ElMessage } from 'element-plus'
import router from '../router'
//创建axios实例 axios是基于promise的http客户端 可以发送http请求 是vue最流行的http库
const service = axios.create({
  baseURL: '/api',  //请求前缀
  timeout: 5000 //超时时间
})

//请求拦截器
service.interceptors.request.use(
  config => { //请求成功  对请求做些什么
    //在发送请求之前做些什么
    const token = localStorage.getItem('token') //获取token
    if (token) {
      // 设置请求头
      config.headers['token'] = token //设置token
    }
    return config
  },
  error => { //请求失败  对请求错误做些什么
    //对请求错误做些什么
    return Promise.reject(error)
  }
)

//响应拦截器
service.interceptors.response.use(
  response => { //响应成功  对响应数据做些什么
    //对响应数据做些什么
    const { data, config } = response
    //处理业务状态码
    if (data.code === '200') {
      return data.data
    } else {
      if (data.code === '-1') {  //-1代表超时，得重新登录
        if (!config.url.includes('/login')) {
          ElMessage.error(data.msg || '登录超时，请重新登录')
          //清除登录信息
          localStorage.removeItem('token')
          localStorage.removeItem('userInfo')
          //跳转登录页
          window.location.href = '/auth/login'
        } else {
          //接口异常
          ElMessage.error(data.msg || '登录失败，请稍后再试')
          return Promise.reject('网络请求失败')
        }
      }
    }
    return response
  },
  error => { //响应失败  对响应错误做些什么
    //对响应错误做些什么
    return Promise.reject(error)
  }
)
export default service
