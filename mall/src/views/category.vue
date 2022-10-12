<template>
	<div>
		<search-bar></search-bar>
		<van-sidebar v-model="activeKey" class="fl" @change="sidebarChange">
		  <van-sidebar-item :title="item.name" v-for="(item,index) in categoryInfo.categoryList":key="index"/>
		</van-sidebar>
		
		<div class="class_tree_content">
		    <div class="class_tree_all">
		        <img style="width:250px" :src="categoryInfo.currentCategory.picUrl">
		        <p style="padding-top:10px;font-size:14px;text-align:center;">{{categoryInfo.currentCategory.desc}}</p>
		    </div>
		    <van-grid column-num="3">
		        <van-grid-item v-for="subItem in categoryInfo.currentSubCategory" :key="subItem.id">
		            <img :src="subItem.picUrl" style="width:70px;height:70px;"/>
		            <p style="font-size:13px;">{{subItem.name}}</p>
		        </van-grid-item>
		    </van-grid>
		</div>
	</div>
</template>

<script>
	import{getCategory,getCurrentCategory}from'@/api/api.js'
	import SearchBar from'../components/SearchBar.vue'
	export default{
		name:"MallCategory",
		data(){
			return{
				 activeKey: 0,
				 categoryInfo:{
					 categoryList:[],
					 currentCategory:[],
					 currentSubCategory:[]
				 }
			}
		},
		components:{
			SearchBar
		},
		created() {
			getCategory().then(res=>{
					  
					  this.categoryInfo = res.data.data

			})
		},
		methods:{
			sidebarChange(index){
				console.log(this.categoryInfo.categoryList[index].id)
				getCurrentCategory(this.categoryInfo.categoryList[index].id).then(res=>{
					console.log(res.data.data.currentCategory)
					this.categoryInfo.currentCategory = res.data.data.currentCategory
					this.categoryInfo.currentSubCategory = res.data.data.currentSubCategory
				})
				
			}
		}
	}
</script>

<style>
	
</style>
