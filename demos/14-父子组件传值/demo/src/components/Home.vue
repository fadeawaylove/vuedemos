<template lang="html">
  <div id="home">
    <v-header :title="title" :run="run"></v-header>

    <h2>我是首页组件</h2>


  </div>

</template>

<script>
// 父组件给子组件传值
// 1.父组件绑定子标签< :title="title">
// 2.子组件props:["title"]接收传值

import Header from './Header.vue'
export default {
  name:'home',
  data(){
    return {
        title: "这是首页传进来的title"
    }
  },
  methods:{
      run(){
        alert("我是Home组件run方法！");
      }
  },
  components:{
    'v-header': Header
  }
}
</script>

<style lang="css" scoped>
</style>
