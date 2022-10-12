<template>
	<div>
			<user-avatar></user-avatar>
			<div >
				<van-cell title="我的订单" is-link  value="全部订单" />
				<van-grid column-num="4" >
				    <van-grid-item icon="daifukuan" text="待付款" :badge="2" />
					<van-grid-item icon="daifahuo" text="待发货" />
					<van-grid-item icon="wuliu" text="待收货" />
					<van-grid-item icon="shouhouguanli" text="已完成" />
				</van-grid>
				
				<van-cell title="我的优惠券" is-link  value="全部优惠券" />
				<van-grid column-num="3" >
				    <van-grid-item icon="coupon" text="待使用" />
					<van-grid-item icon="coupon-used" text="已使用" />
					<van-grid-item icon="coupon-due" text="已过期" />
				</van-grid>
				
				<van-cell icon="shoucang" title="我的收藏" is-link  />
				<van-cell icon="shoucang" title="我的收藏" is-link   />
				<van-cell icon="shoucang" title="我的收藏" is-link   />
			</div>
		
		
	</div>
</template>

<script>
	import UserAvatar from '../components/UserAvatar.vue'
	
	export default{
		name:'User',
		data(){
			return{}
		},
		components:{
			UserAvatar
		}
	}
</script>

<style>

</style>
