<template>
  <div id="home">
    <h2>Home</h2>
    <ul>
      <li v-for="(item, key) in products">
        <router-link :to="'/pcontent?aid=' + key">{{key}}:{{item}}</router-link>
      </li>
    </ul>

    <el-row>  
    <el-button type="success" @click="toNews()">跳转到新闻列表</el-button>
    <br><br>
    <el-button type="success" @click="toDetails()">跳转到新闻详情496</el-button>

    <br>
    <hr>
    <el-button type="warning" @click="goNews()">跳转新闻里列表（匿名跳转）</el-button>
    <br><br>
    <el-button type="danger" @click="goDetails()">跳转新闻里详情（匿名跳转）</el-button>
    </el-row>
    <br><br><br>
    <button @click="incCount()">增加count</button>
    <el-button type="success" @click="toNews()">去看新闻页的count</el-button>
    <button @click="incMutationCount()">actions改变count</button>
    <br>
    <br>
    count:{{this.$store.state.count}}
    <br>
    2*count:{{this.$store.getters.computedCount}}


  </div>
</template>

<script>

// 引入vuex
import store from '../vuex/store.js'
export default {
  data() {
    return {
      products: ["电视机", "冰箱", "彩电"]
    };
  },
  store: store,
  methods:{
    toNews(){
      this.$router.push({path: "news"})
    },
    toDetails(){
      this.$router.push({path: "content/496"})
    },
    // 匿名跳转
    goNews(){
      this.$router.push({name: "news"})
    },
    goDetails(){
      this.$router.push({name: "content", params:{aid:496}})
    },
    incCount(){
      // 触发store里面的方法
      this.$store.commit('incCount');
    },
    incMutationCount() {
      this.$store.dispatch('incMutationCount');
    }
  }
};
</script>