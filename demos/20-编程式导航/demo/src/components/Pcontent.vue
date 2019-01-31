<template>
<div>
    <h2>这是商品详情页面</h2>
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
        // get传值
        console.log(this.$route.query);
    },
}
</script>