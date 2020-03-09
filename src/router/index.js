import Vue from "vue";

import Container from '@/container';
import Router from 'vue-router'

Vue.use(Router)
// 常用路由
export const constantRoutes = [
  {
    path: '/redirect',
    component: Container,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page'),
    hidden: true
  },
  {
    path: '/',
    component: Container,
    name: "home",
    redirect: '/iview',
    children: [
      {
        path: '/iview',
        component: () => import('@/views/iview'),
        name: 'iview',
        meta: { title: 'IVIEW UI', icon:"iconiview"}
      }
    ]
  }
]

// 需要配置权限的路由
export const asyncRoutes = [
  {
    path: '/table',
    component: Container,
    name: "table",
    meta: { title: '表格', roles: '1',icon:"iconduojiguanli1" },
    children: [
      {
        path: '/table/exporttable',
        component: () => import('@/views/table/exporttable.vue'),
        name: 'exporttable',
        meta: { title: '可导出表格', roles: '1-1' }
      },
      {
        path: '/table/edittable',
        component: () => import('@/views/table/edittable.vue'),
        name: 'edittable',
        meta: { title: '可编辑表格', roles: '1-2' }
      },
      {
        path: '/table/treetable',
        component: () => import('@/views/table/treetable.vue'),
        name: 'treetable',
        meta: { title: '树状表格', roles: '1-3' }
      },

    ]
  },
  // 字体文件
  {
    path: '/icon',
    component: Container,
    meta: { roles: '2' },
    name: "icon",
    children: [
      {
        path: '/icon/index',
        component: () => import('@/views/icon'),
        name: 'icon-index',
        meta: { title: '字体文件', roles: '2-1',icon:"iconicon_font"}
      }
    ]
  },
  // 图表
  {
    path: '/echarts',
    component: Container,
    name: ' echarts',
    meta: { title:'echarts图表', roles: '3',icon:"iconsunburst" },
    children: [
      {
        path: '/echarts/line',
        component: () => import('@/views/echarts/line.vue'),
        name: 'line',
        meta: { title: '折线图', roles: '3-1' }
      },
      {
        path: '/echarts/Bar',
        component: () => import('@/views/echarts/Bar.vue'),
        name: 'Bar',
        meta: { title: '柱状图', roles: '3-2' }
      },
      {
        path: '/echarts/Pie',
        component: () => import('@/views/echarts/Pie.vue'),
        name: 'Pie',
        meta: { title: '饼状图', roles: '3-3' }
      }
    ]
  },
  {
    path: '/marketing',
    component: Container,
    name: 'marketing',
    meta: { roles: '4' },
    name: ' echarts',
    children: [
      {
        path: '/marketing/index',
        component: () => import('@/views/marketing'),
        name: 'market',
        meta: { title: '规格组合', roles: '4-1',icon:"iconyingxiao"}
      }
    ]
  },
  {
    path: '/texteditor',
    component: Container,
    name: 'texteditor',
    meta: { title:'文本编辑器', roles: '5',icon:"iconbianjiqi1" },
    children: [
      {
        path: '/texteditor/wangeditor',
        component: () => import('@/views/texteditor/wangeditor'),
        name: 'wangeditor',
        meta: { title: 'wangEditor', roles: '5-1' }
      },
      {
        path: '/texteditor/VueQuillEditor',
        component: () => import('@/views/texteditor/VueQuillEditor'),
        name: 'VueQuillEditor ',
        meta: { title: 'VueQuillEditor', roles: '5-2' }
      }
    ]
  },
  {
    path: '/Module6',
    component: Container,
    meta: { roles: '6' },
    name: 'Module6',
    children: [
      {
        path: 'index',
        component: () => import('@/views/Module6'),
        name: 'Module6-1',
        meta: { title: '模块六', roles: '6-1' }
      }
    ]
  },
  {
    path: '/Module7',
    component: Container,
    meta: { roles: '7' },
    name: 'Module7',
    children: [
      {
        path: 'index',
        component: () => import('@/views/Module7'),
        name: 'Module7-1',
        meta: { title: '模块七', roles: '7-1' }
      }
    ]
  },
  // 404 页面在这里必须存在，否者将会进入无穷无尽的死循环。
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', 
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})


const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // 重置路由
}

export default router

