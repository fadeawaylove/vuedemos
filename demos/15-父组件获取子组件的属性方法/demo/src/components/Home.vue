<template>
    <div>
        <v-header ref="header"></v-header>
        <h2>我是home组件</h2>
        <button @click="getHeader()">获取header组件中的msg</button>
    </div>
</template>



<script>
// 要在父组件里面使用子组件的方法或者属性
// 1.给子组件标签设置一个ref
// 2.this.$refs.header.属性
// 3.this.$refs.header.方法
import Header from './Header.vue'
export default {
    data(){
        return{
            msg:"我是Home的msg"
        }
    },
    components:{
        "v-header": Header
    },
    methods:{
        getHeader(){
            alert(this.$refs.header.msg);
        }
    }
}
</script>