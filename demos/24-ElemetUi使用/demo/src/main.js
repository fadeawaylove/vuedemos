import Vue from 'vue'
import App from './App.vue'

// 引入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)
// 引入boostrap
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);

// 引入ElementUi
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUi)

// 引入vue-router
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 创建组件
import Home from './components/Home.vue'
import News from './components/News.vue'
import Content from './components/Content.vue'
import Pcontent from './components/Pcontent.vue'
import User from './components/User.vue'
  import UserAdd from './components/user/UserAdd.vue'
  import UserList from './components/user/UserList.vue'

// 配置路由
const routes = [
  { path: '/home', component: Home },
  { path: '/user', component: User,
    children:[
      { path: 'add', component: UserAdd },
      { path: 'list', component: UserList},
    ]
},
  { path: '/news', component: News, name: "news" },
  { path: '/content/:aid', component: Content, name: "content" }, // 动态路由
  { path: '/pcontent', component: Pcontent }, // 动态路由,get跳转
  { path: '*', redirect: '/home'}, // 重定向到home
]

// 实例化VueRouter
const router = new VueRouter({
  mode : "history",
  routes
})


new Vue({
  el: '#app',
  router,  // 挂在路由
  render: h => h(App)
})
