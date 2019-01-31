import Vue from 'vue'
import App from './App.vue'

// 引入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)
// 引入boostrap
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);


// 引入vue-router
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 创建组件
import Home from './components/Home.vue'
import News from './components/News.vue'
import Content from './components/Content.vue'
import Pcontent from './components/Pcontent.vue'

// 配置路由
const routes = [
  { path: '/home', component: Home },
  { path: '/news', component: News },
  { path: '/content/:aid', component: Content }, // 动态路由
  { path: '/pcontent', component: Pcontent }, // 动态路由
  { path: '*', redirect: '/home'}, // 重定向到home
]

// 实例化VueRouter
const router = new VueRouter({
  routes
})


new Vue({
  el: '#app',
  router,  // 挂在路由
  render: h => h(App)
})
