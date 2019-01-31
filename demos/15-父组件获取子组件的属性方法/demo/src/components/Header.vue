<template>
    <div>
        <h2>我是header组件</h2>
        <button @click="getParentData()">主动获取home组件中的msg</button>
    </div>
</template>

<script>
// 在子组件中主动获取父组件的属性和方法
// this.$parent.属性
// this.$parent.方法
export default {
    data(){
        return {
            msg:"我是header组件的msg",
        }
    },
    methods:{
        getParentData(){
            alert(this.$parent.msg);
        }
    }

}
</script>