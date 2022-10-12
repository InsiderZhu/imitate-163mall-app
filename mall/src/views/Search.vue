<template>
	<div class="animate__animated animate__fadeInRight">
		  <van-search 
		    v-model="value"
		    show-action
		    placeholder="请输入搜索关键词"
		    @search="onSearch"
		    @cancel="onCancel"
		  >
		  <template #left>
			  <van-icon name="arrow-left" @click="$router.go(-1)" style="margin-right: 10px;"></van-icon>
		  </template>
		  </van-search>
		  
          <van-cell title="搜索历史">
              <template>
                  <span>清除</span>
              </template>
          </van-cell>
				  
		  <van-tag v-for="(item,index) in searchHistory" :key="index" plain size="large" style="margin-right: 5px;">{{item}}</van-tag>
	</div>
</template>

<script>
	import { Toast } from 'vant';
	export default {
	  data() {
	    return {
	      value: '',
		  searchHistory:["手机","电视机","四件套","华为笔记本","苹果笔记本","华为笔记本","苹果"]
	    };
	  },
	  methods: {
	    onSearch(val) {
	      Toast(val);
	    },
	    onCancel() {
	      Toast('取消');
	    },
	  },
	};
</script>

<style>
</style>
