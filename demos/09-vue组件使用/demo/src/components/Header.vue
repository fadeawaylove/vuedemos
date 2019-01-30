<template lang="html">
  <div class="">
    <h2>{{msg}}</h2>

  </div>
</template>

<script>
export default {
  data() {
    return {
      msg:"这是头部组件！"
    }
  }
}
</script>

<style lang="css" scoped>
 h2{
   color: green;
 }
</style>
