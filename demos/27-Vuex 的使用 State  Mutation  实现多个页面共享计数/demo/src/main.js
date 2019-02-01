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

import router from "./router/router.js";


new Vue({
  el: '#app',
  router,  // 挂在路由
  render: h => h(App)
})
