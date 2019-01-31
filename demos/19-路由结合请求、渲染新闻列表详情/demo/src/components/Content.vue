<template>
<div id="content" class="container">    
    <h2>{{contentList.title}}</h2>
    <div v-html="contentList.content"></div>


</div>
</template>


<script>
export default {
    data(){
        return {
            msg: "详情",
            contentList: []
        }
    },
    mounted() {
        console.log(this.$route.params); // 获取路由动态传值
        this.requestData();
        
    },
    methods:{
        requestData(){
            var aid = this.$route.params.aid;
            var url = "http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid=" + aid;
            this.$http.get(url).then((response)=>{
                console.log(response.body.result);
                this.contentList = response.body.result[0];
                
            },(err)=>{
                console.log(err);
                
            })

        }
    }
}
</script>