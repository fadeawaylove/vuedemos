<template>
    <div id="home">
        <h2>我是home</h2>
        <button @click="emitNews()">给news传值</button>
    </div>
</template>


<script>
// 引入VueEvent事件实例
import VueEvent from '../model/VueEvent.js';

export default {
    data(){
        return{
            msg:"我是home中的msg"
        }
    },
    methods :{
        emitNews(){
            // 发送一个事件广播
            VueEvent.$emit('to-news', this.msg);
        }
    }
}
</script>
