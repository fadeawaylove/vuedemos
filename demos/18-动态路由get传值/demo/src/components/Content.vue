<template>
<div>
    <h2>这是详情页面</h2>
</div>
</template>


<script>
export default {
    data(){
        return {
            msg: "详情"
        }
    },
    mounted() {
        console.log(this.$route.params); // 获取路由动态传值
        
    },
}
</script>