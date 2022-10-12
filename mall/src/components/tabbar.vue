<template>
	    <div>
	        <van-tabbar route active-color="#ee0a24">
	            <van-tabbar-item v-for="item in tabbar" :key="item.path" :icon="item.icon" :to="item.path">{{item.name}}</van-tabbar-item>
	        </van-tabbar>
	    </div>
</template>

<script>
	export default {
	    name: 'Tabbar',
	
	    data() {
	        return {
	            tabbar: [
	                {
	                name: '精选',
	                path: '/home',
	                pathName: 'home',
	                icon: 'compass-full',
	                dot: false
	                },
	                {
	                name: '分类',
	                path: '/category',
	                pathName: 'class',
	                icon: 'class-full',
	                dot: false
	                },
	                {
	                name: '购物车',
	                path: '/cart',
	                pathName: 'cart',
	                icon: 'cart-full',
	                dot: false
	                },
	                {
	                name: '我的',
	                path: '/user',
	                pathName: 'user',
	                icon: 'wode',
	                dot: false
	                }
	            ]
	        };
	    },
	
	    mounted() {
	        
	    },
	
	    methods: {
	        
	    },
	};
</script>

<style>
</style>
