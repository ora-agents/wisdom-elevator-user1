<template>

	<view class="page">

		<view class="title">
			我的
		</view>

		<view class="card">

			<view class="user">

				<view class="avatar">
					👤
				</view>

				<view>

					<view class="name">
						SmartLife 用户
					</view>

					<view class="phone">
						13800138000
					</view>

				</view>

			</view>

		</view>

	</view>

</template>

<script>

export default {

}

</script>

<style>

page{

	background:#F8FAFC;

}

.page{

	padding:90rpx 28rpx;

}

.title{

	font-size:44rpx;
	font-weight:800;

	color:#0F172A;

	margin-bottom:30rpx;

}

.card{

	background:white;

	border-radius:32rpx;

	padding:30rpx;

}

.user{

	display:flex;
	align-items:center;

}

.avatar{

	width:100rpx;
	height:100rpx;

	border-radius:50%;

	background:#2563EB;

	display:flex;
	align-items:center;
	justify-content:center;

	font-size:48rpx;

	color:white;

	margin-right:24rpx;

}

.name{

	font-size:32rpx;
	font-weight:700;

	color:#0F172A;

}

.phone{

	font-size:24rpx;

	color:#64748B;

	margin-top:10rpx;

}

</style>