<template lang="html">
  <div id="Header">
    <button @click="getData()">请求弹幕</button>

    <ul>
      <li v-for="item in danmu">
          {{item.content}}
      </li>
    </ul>
  </div>

</template>

<script>
import Axios from 'axios';

export default {
  data() {
    return {
        danmu:[]
    }
  },
  methods: {
    getData() {
      var url = "https://mfm.video.qq.com/danmu?otype=json&timestamp=45&target_id=3693386406%26vid%3De0029plbv0o&count=10000&second_count=100&session_key=19526%2C41%2C1548862733&_=1548862733624";
      Axios.get(url).then((response)=> {
        this.danmu= response.data.comments;

      }).catch((err) => {
        console.log(err);

      })
    }
  },
  mounted() {
    this.getData();
  }

}
</script>

<style lang="css" scoped>
</style>
