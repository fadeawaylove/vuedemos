<template>
  <div id="app">
    <button @click="getData()">请求弹幕</button>

    <ul>
      <li v-for="item in danmu">
          {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
import Axios from 'axios'

export default {
  name: 'app',
  data () {
    return {
      danmu:[]
    }
  },
  methods:{
    getData(){
        var url = "https://mfm.video.qq.com/danmu?otype=json&callback=jQuery1910831064665370226_1548862733611&timestamp=45&target_id=3693386406%26vid%3De0029plbv0o&count=10000&second_count=100&session_key=19526%2C41%2C1548862733&_=1548862733624";
        Axios.get(url).then(function(response){
          this.danmu = response.data
        }).catch(function(err){
          console.log(err);
          
        })
    }
  },
  mounted(){
    this.getData();
  }
}
</script>
