<template>
    <div id="news">
        <h2>我是news</h2>

    </div>
</template>

<script>
import VueEvent from '../model/VueEvent.js';
export default {
    data(){
        return {
            
        }
    },
    mounted(){
        VueEvent.$on('to-news', function(data) {
            console.log(data);
            
        })
    }
}
</script>
