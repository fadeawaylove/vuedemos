<template>
    <div>
        <ul class="list-group">
            <li class="list-group-item" v-for="(item, key) in list">
                <router-link :to="'/content/' + item.aid">
                    {{item.title}}
                </router-link>
            </li>
        </ul>

    </div>
</template>

<script>
export default {
    data(){
        return {
            msg: '我是一个新闻组件',
            list:[]
        }
    },
    methods:{
        requestData(){
            var url="http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1"

            // 获取电影列表
            this.$http.jsonp(url).then((response) => {
                // console.log(response.data);
                this.list = response.data.result;
                
            },(err)=>{
                console.log(err);
            })
        }
    },
    mounted() {
        this.requestData();
    },

}
</script>