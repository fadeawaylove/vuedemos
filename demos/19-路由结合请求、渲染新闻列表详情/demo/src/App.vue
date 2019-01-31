<template>
  <div id="app" >

      <router-link to='/home'>到主页</router-link>
      <router-link to='/news'>到新闻</router-link>

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
