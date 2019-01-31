<template>
  <div id="app" class="container">

      <!-- 导航栏的样式 -->
      <router-link to='/home'>主页</router-link>

      <router-link to='/news'>新闻</router-link>

      <br>
      <hr>
      
    <router-view></router-view>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',

    }
  }
}
</script>
