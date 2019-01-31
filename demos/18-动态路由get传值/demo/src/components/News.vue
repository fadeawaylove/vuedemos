<template>
    <div>
        <h2>News</h2>
        <ul>
            <li v-for="(item, key) in list">
                <router-link :to="'/content/' + key">{{key}}---{{item}}</router-link>
            </li>
        </ul>

    </div>
</template>

<script>
export default {
    data(){
        return {
            msg: '我是一个新闻组件',
            list:['11111', '222222', '333333']
        }
    }

}
</script>