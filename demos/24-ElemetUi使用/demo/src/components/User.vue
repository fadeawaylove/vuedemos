<template>
    <div id="user">
        <div class="userCenter">
            <div class="left">
               <router-link to='/user/add'>添加用户</router-link>
               <br>
               <router-link to='/user/list'>用户列表</router-link>
            </div>

            <div class="right">
                <router-view></router-view>

            </div>

        </div>




    </div>
</template>

<script>
export default {
    data() {
        return {
            msg:"用户中心"
        }
    }
}
</script>

<style lang="scss" scoped>
    .userCenter{
        display: flex;
        .left{
            width: 200px;
            min-height: 400px;
            border-right: 2px solid black;
        }

        .right{
            flex: 1;
        }

    }

</style>


