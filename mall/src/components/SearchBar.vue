<template>
	<div><van-search  placeholder="请输入搜索关键词" @click="toSearch" /></div>
</template>

<script>
	export default{
		name:"MallSearchBar",
		methods:{
			toSearch(){
				this.$router.push('/search')
			}
		}
	}
</script>

<style>
</style>
