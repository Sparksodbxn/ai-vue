import { createRouter, createWebHistory } from 'vue-router'
import BackendLayout from '../components/BackendLayout.vue'
import AuthLayout from '../components/AuthLayout.vue'
import FrontendLayout from '../components/FrontendLayout.vue'
//后台路由配置
const backendRoutes = [
  {
    path: '/back',
    redirect: '/back/dashboard',  //重定向  后台的首页 已登录情况下输入/back会重定向到/back/dashboard
    component: BackendLayout,
    children: [  //子路由
      {
        path: 'dashboard',
        component: () => import('../views/dashboard.vue'),
        meta: {
          title: '数据分析',
          icon: 'PieChart'
        }
      },
      //知识文章
      {
        path: 'knowledge',
        component: () => import('../views/knowledge.vue'),
        meta: {
          title: '知识文章',
          icon: 'ChatLineSquare'
        }
      },
      //咨询记录
      {
        path: 'consultation',
        component: () => import('../views/consultation.vue'),
        meta: {
          title: '咨询记录',
          icon: 'Message'
        }
      },
      //情绪日志
      {
        path: 'emotional',
        component: () => import('../views/emotional.vue'),
        meta: {
          title: '情绪日志',
          icon: 'User'
        }
      }
    ]
  },
  {
    path: "/auth",
    component: AuthLayout,
    children: [
      {
        path: 'login',
        component: () => import('../views/login.vue'),
        meta: {
          title: '登录',
        }
      },
      {
        path: 'register',
        component: () => import('../views/register.vue'),
        meta: {
          title: '注册',
        }
      }
    ]
  },

]


//前台路由配置
const frontendRoutes = [
  {
    path: '/',
    component: FrontendLayout,
    children: [
      {
        path: '',
        // 用箭头函数能实现懒加载 访问到这个路由的时候才加载这个组件
        component: () => import('../views/home.vue'),
      }, {
        path: 'consultation',
        component: () => import('../views/currentConsultation.vue')
      }, {
        path: 'emotion-diary',
        component: () => import('../views/emotionDiary.vue')
      }, {
        path: 'knowledge',
        component: () => import('../views/frontendKnowledge.vue')
      }, {
        path: 'knowledge/article/:id',  //:id是动态路由参数
        component: () => import('../views/articleDetail.vue'),
        // 传递id参数给子组件 让子组件知道要展示哪一篇具体文章的详情
        props: true,
      }
    ]
  }
]


//创建router实例
const router = createRouter({
  history: createWebHistory(),
  // 前台路由+后台路由
  routes: [...backendRoutes, ...frontendRoutes]
})


// 路由前置守卫
router.beforeEach((to, from, next) => {
  // 参数to是即将要访问的路由  from是即将离开的路由  next是回调函数
  // 判断用户有没有登录
  const token = localStorage.getItem('token')
  // 当前用户是否登录
  if (token) {
    try {
      const userInfo = JSON.parse(localStorage.getItem('userInfo'))
      // 如果是后台用户  userType为2
      if (userInfo && userInfo.userType === 2) {
        if (to.path.startsWith('/back')) {
          next()  // 放行 继续访问即将要访问的路由
        } else {
          // 如果用户想要访问前台页面，那么跳转到后台首页
          next('/back/dashboard')  // 跳转到后台首页
        }

      } else if (userInfo && userInfo.userType === 1) {
        // 如果是前台用户 只能访问前台路由 
        if (to.path.startsWith('/back') || to.path.startsWith('/auth')) {
          // 如果用户想要访问后台页面，那么跳转到前台首页
          next('/')
        } else {
          // 前台用户正常访问前台页面
          next()
        }
      }
    } catch (error) {
      // 解析用户信息失败，跳转到登录页
      next('/auth/login')
    }

  } else {
    // 还没登录的情况
    if (to.path.startsWith('/back')) {
      // 如果是访问后台页面，那么跳转到登录页
      next('/auth/login')
    } else {
      next()
    }
  }

})


//导出
export default router