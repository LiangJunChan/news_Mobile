import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
const Zhihu = ()=> import("../views/zhihu/Zhihu")
const Weibo = ()=> import("../views/weibo/Weibo")
const Weixin = ()=> import("../views/weixin/Weixin")
const Toutiao = ()=> import("../views/toutiao/Toutiao")
  const routes = [
  {
    path: '/',
    redirect: 'zhihu'
  },
  {
    path: '/zhihu',
    name: 'Zhihu',
    component:Zhihu
  },
  {
    path: '/weibo',
    name: 'Weibo',
    component:Weibo
  },
  {
    path: '/weixin',
    name: 'Weixin',
    component:Weixin
  },
  {
    path: '/toutiao',
    name: 'Toutiao',
    component:Toutiao
  }
]

const router = new VueRouter({
  routes
})

export default router
