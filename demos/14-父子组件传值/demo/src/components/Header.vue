<template lang="html">
  <div id="home">
    <h2>我是头部组件---{{title}}</h2>
    <button type="button" @click="run()" name="button">运行父组件方法</button>

  </div>

</template>

<script>
export default {
  name:'home',
  data(){
    return {

    }
  },
  methods:{

  },
  props:["title","run"]
}
</script>

<style lang="css" scoped>
</style>
