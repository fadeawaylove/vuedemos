<template>
	<div id="home">
		<h2>我是你爸爸</h2>
		<button @click="getData()">按钮</button>
		<ul>
			<li v-for="dan in danmu.comments">
				{{dan.content}}
			</li>
			
		</ul>
	</div>
	
</template>


<script>
	export default {
	  name: 'home',
	  data () {
	    return {
	      danmu: ''
	    }
	  },
	  methods: {
	  	getData() {
	  		var url="https://mfm.video.qq.com/danmu?otype=json&callback=jQuery19104901349437483098_1548858101108&timestamp=45&target_id=2369303773%26vid%3Dm00253deqqo&count=80&second_count=5&session_key=2012691%2C9459%2C1548858101&_=1548858101139";
			this.$http.jsonp(url).then(function(response){
				// 响应成功
				console.log(response.data);
				this.danmu=response.data;
			},function(response){
				// 响应失败
			});
	  	}
	  },
	  mounted() {
		  this.getData();
	  }
	}
	
	
</script>


