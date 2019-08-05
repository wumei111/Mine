<template>
  <div id="app">
		<button @click="clickDelete">删除</button>
		<button @click="clickExit">退出</button>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
    
  },
	data(){
		return{

		}
	},
	methods:{
		clickDelete(){
			this.$MessageBox({
				title:'提示',
				content:'此操作将删除数据，是否继续？'
			}).then(()=>{
				console.log('删除')
			}).catch(()=>{
				console.log('取消删除')
			})
		},
		clickExit(){
			this.$MessageBox({
				title:'提示',
				content:'此操作将退出登陆，是否继续？'
			}).then(()=>{
				console.log('退出登陆')
			}).catch(()=>{
				console.log('取消退出登陆')
			})
		}
	}
}
</script>

<style scoped>
button{
	height: 30px;
	border:none;
	outline:none;
	color: #FFF;
	background-color: #409EFF;
	border-color: #409EFF;
	margin-left:10px;
	border-radius:3px;
	cursor:pointer;
}
</style>
