<template>
  <div id="app">
    <div class="">
      {{message}}

    </div>

    <button type="button" @click="setMsg()" name="button"></button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      message:"我是你爸爸！"
    }
  },
  methods:{
    setMsg(){
      this.message = "我才是你爹！"
    }
  },
  beforeCreate(){
    console.log("实例创建之前");
  }

}
</script>















<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
