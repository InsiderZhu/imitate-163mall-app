<template>
	<div class="header-user">
		<van-icon name="set" class="user-setting"></van-icon>
		<div class="user-avatar">
			<img src="../assets/logo.png" />
			<div class="nikename">user123</div>
		</div>
		
	</div>

</template>

<script>
</script>

<style>
	.header-user{
		background-color: orangered;
		height: 130px;
		
	}
	.user-setting{
		font-size: 24px !important;
		float: right;
		color: white;
		margin: 20px;
	}
	.user-avatar{
		text-align: center;
		padding-top: 30px;
		
	}
	.user-avatar img{
		width: 60px;
		height: 60px;
		border-radius: 30px;
		margin-left: 60px;
	}
	.user-avatar .nikename{
		color: white;
		margin-top: 10px;
	}
</style>
