<template id="">
  <div>
      <h2>{{msg}}</h2>
      <button type="button" @click="run()" name="button">run方法</button>
  </div>
</template>


<script type="text/javascript">
  export default{
    data(){
      return {
        msg:"我是一个首页组件😯"

      }
    },
    methods:{
      run(){
        this.msg="😁O(∩_∩)O哈哈~"
      }
    }
  }


</script>



<style media="screen" scoped>
/* scoped css局部作用域 */
  h2{
    color: red;
  }

</style>
