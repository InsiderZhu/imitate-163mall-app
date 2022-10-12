<template>
	<div>
		<div class="header">
			<van-icon :name="isEditor?'success':'editor' "></van-icon>
			<span @click="isEditor=!isEditor">{{isEditor?'完成':'编辑'}}</span>
		</div>

		<van-checkbox-group  v-model="checkedGoods" @change='groupChange'>
		<van-swipe-cell  v-for="(item,index) in cartInfo.cartList" :key='index'>
			<div class="goods-item">
				
					<van-checkbox style="padding-right: 10px;margin-left:10px ;" :name="item.id" >	
						
					</van-checkbox>
					<van-card style="width: 100%; background-color: white;"
					  :num="item.number"
					  :price="item.price | priceFormat"
					  :title="item.goodsName"
					  :thumb="item.picUrl"
					>
					  <template #tags>
					    <van-tag plain v-for="(s,index) in item.specifications" :key='index'>{{s}}</van-tag>
					  </template>
					  <template #footer>
							<div v-if="!isEditor">添加日期：{{item.addTime}}</div>
							<div v-else><van-stepper v-model="item.number" @change='numberChange(item)'/></div>
					    </template>
					</van-card>
			</div>

		  <template #right>
		    <van-button square text="删除" type="danger" class="delete-button" style="height: 100%;" @click="delItem(index)"/>
		  </template>
		</van-swipe-cell>
		</van-checkbox-group>
		<template v-if="!cartInfo.cartList.length">购物车为空</template>

		
		<van-submit-bar style="margin-bottom: 50px;" :price="totalParice" :button-text="isEditor?'删除':'结算'" @submit="onSubmit" :loading="loading">
		  <van-checkbox v-model="checkedAll" @click='checkedAllChange'>全选</van-checkbox>

		</van-submit-bar>
	</div>
</template>

<script>
	import {getCart} from "@/api/api.js"
	export default{
		data(){
			return{
				checkedAll:0,
				cartInfo:{
					cartList:[],
					cartTotal:{
					}
				},
				checkedGoods:[],//复选框存放checked==true的id 
				isEditor:false,
				loading:false,
				delGoods:[]
			}
		},
		methods:{
			onSubmit(){
				if(this.isEditor){
					this.$dialog.confirm({
					      message: '确定删除选中商品',
						  cancelButtonText:'再想想'
					    })
					.then(()=>{
						this.cartInfo.cartList.forEach(p=>{
						if(this.checkedGoods.indexOf(p.id)===-1)
							this.delGoods.push(p)
					})
						this.cartInfo.cartList = this.delGoods
						this.isEditor = false								
						
					})
					.catch(()=>{
						console.log('再想想')
					})
				}else{
					console.log('正在结算')
					this.loading=true
				}
			},
			getCheckedList(){
				this.cartInfo.cartList.forEach(p =>{
					if(p.checked){
						this.checkedGoods.push(p.id)
					}
				})
			},
			groupChange(checkedData){
				this.checkedAll = (this.checkedGoods.length == this.cartInfo.cartList.length)
			},
			checkedAllChange(){
				if(this.checkedGoods.length == this.cartInfo.cartList.length)
					this.checkedGoods = []
				else
					this.cartInfo.cartList.forEach(p=>{
						if(this.checkedGoods.indexOf(p.id)===-1)
							this.checkedGoods.push(p.id)
					})
			},
			numberChange(item){
				console.log(item)
			},
			delItem(index){
				this.cartInfo.cartList.splice(index,1)
			}
		},
		computed:{
			totalParice(){
 				let total = 0;
				return this.cartInfo.cartList.reduce((total,item)=>{
					return total += this.checkedGoods.indexOf(item.id)!==-1?(item.price * item.number*100):0
				},0) 
			}
		},
		created(){
			  getCart().then(res=>{
				  this.cartInfo = res.data.data
				  console.log(this.cartInfo)
				  this.getCheckedList();
			  })
		  },
		

	}
</script>

<style>
	.goods-item{
		display: flex;
		align-items: center;
	}
	.header{
		text-align: right;
		font-size: 15px;
		margin: 10px;
	}
</style>
