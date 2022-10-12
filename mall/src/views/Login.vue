<template>
	<div>
		<user-avatar></user-avatar>
		<van-cell-group style="margin-top: 20px;">
		  <van-field
		    v-model="username"
			clearable
		    left-icon="username"
		    placeholder="请输入用户名"
		  />
		  <van-field
		    v-model="password"
		    left-icon="lock"
			type="password"
		    placeholder="请输入密码"
		  />
		</van-cell-group>
		<div style="text-align: center;">
			<div class="fl" style="margin: 10px;">免费注册</div>
			<div class="fr" style="margin: 10px;">忘记密码</div>
			<van-button type="danger" style="width: 90%; line-height:200px;" @click="dologin">登陆</van-button>
		</div>
		
	</div>
</template>

<script>
	import UserAvatar from '../components/UserAvatar.vue'
	import {login} from"../api/api.js"
	import {setToken} from'../utils/token.js'
	
	export default{
		name:'Login',
		data(){
			return{
				username:'',
				password:''
			}
		},
		components:{
			UserAvatar
		},
		methods:{
			dologin(){
				login({username:this.username,password:this.password}).then(res=>{
					console.log(res)
					if(res.data.errno == 0){//后台验证成功
						setToken(res.data.token);
						//重定向回原目标
						this.$router.push(this.$route.query.redirect?this.$route.query.redirect:'/user')
					}
				})
			}
		}
	}

	
</script>

<style>
</style>
