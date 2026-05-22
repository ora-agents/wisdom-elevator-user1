<template>

	<view class="page">

		<!-- 顶部背景 -->
		<view class="top-bg"></view>

		<view class="content">

			<!-- 标题 -->
			<view class="header">

				<view>

					<view class="title">
						我的设备
					</view>

					<view class="subtitle">
						家庭智能设备集中管理
					</view>

				</view>

				<view class="add-btn" @click="goAddDevice">
					＋
				</view>

			</view>

			<!-- 搜索 -->
			<view class="search-box">

				<view class="search-icon">
					🔍
				</view>

				<input
					class="search-input"
					placeholder="搜索设备"
				/>

			</view>

			<!-- 分类 -->
			<view class="section-title">
				设备分类
			</view>

			<view class="device-grid">

				<!-- 空调 -->
				<view
					class="device-card"
					@click="openType('空调')"
				>

					<view class="device-top">

						<view class="device-icon blue">
							❄️
						</view>

						<view class="device-count">
							3台
						</view>

					</view>

					<view class="device-name">
						空调
					</view>

					<view class="device-desc">
						客厅 / 卧室 / 三楼
					</view>

				</view>

				<!-- 灯光 -->
				<view
					class="device-card"
					@click="openType('灯光')"
				>

					<view class="device-top">

						<view class="device-icon yellow">
							💡
						</view>

						<view class="device-count">
							12盏
						</view>

					</view>

					<view class="device-name">
						灯光
					</view>

					<view class="device-desc">
						全屋灯光控制
					</view>

				</view>

				<!-- 机器人 -->
				<view
					class="device-card"
					@click="openType('机器人')"
				>

					<view class="device-top">

						<view class="device-icon purple">
							🤖
						</view>

						<view class="device-count">
							3台
						</view>

					</view>

					<view class="device-name">
						机器人
					</view>

					<view class="device-desc">
						客厅 / 阳台 / 三楼
					</view>

				</view>

				<!-- 门禁 -->
				<view
					class="device-card"
					@click="openType('门禁')"
				>

					<view class="device-top">

						<view class="device-icon green">
							🚪
						</view>

						<view class="device-count">
							2个
						</view>

					</view>

					<view class="device-name">
						门禁
					</view>

					<view class="device-desc">
						大门 / 侧门
					</view>

				</view>

				<!-- 电梯 -->
				<view
					class="device-card"
					@click="openType('电梯')"
				>

					<view class="device-top">

						<view class="device-icon cyan">
							🛗
						</view>

						<view class="device-count">
							3台
						</view>

					</view>

					<view class="device-name">
						电梯
					</view>

					<view class="device-desc">
						客厅 / 卧室 / 三楼
					</view>

				</view>

				<!-- 安防 -->
				<view
					class="device-card"
					@click="openType('安防')"
				>

					<view class="device-top">

						<view class="device-icon orange">
							🛡️
						</view>

						<view class="device-count">
							5个
						</view>

					</view>

					<view class="device-name">
						安防
					</view>

					<view class="device-desc">
						烟感 / 门磁 / 摄像头
					</view>

				</view>

			</view>

		</view>

	</view>

</template>

<script>

export default {

	methods: {

		openType(type) {

			uni.navigateTo({

				url:
				'/pages/deviceDetail/deviceDetail?type=' + type

			})

		},

		goAddDevice() {

			uni.navigateTo({

				url:
				'/pages/addDevice/addDevice'

			})

		}

	}

}

</script>

<style>

page {
	background: #eef3fb;
}

.page {
	min-height: 100vh;
	position: relative;
}

.top-bg {

	position: absolute;
	left: 0;
	right: 0;
	top: 0;

	height: 420rpx;

	background:
	linear-gradient(145deg,#0f3fae,#2563eb);
}

.content {

	position: relative;
	z-index: 2;

	padding:
	80rpx 28rpx 160rpx;

	box-sizing: border-box;
}

.header {

	display: flex;
	align-items: center;
	justify-content: space-between;
}

.title {

	font-size: 52rpx;
	font-weight: 900;

	color: #ffffff;
}

.subtitle {

	font-size: 24rpx;

	color:
	rgba(255,255,255,0.82);

	margin-top: 10rpx;
}

.add-btn {

	width: 72rpx;
	height: 72rpx;

	border-radius: 24rpx;

	background:
	rgba(255,255,255,0.2);

	color: #ffffff;

	display: flex;
	align-items: center;
	justify-content: center;

	font-size: 44rpx;
	font-weight: 300;

	backdrop-filter: blur(20rpx);
}

.search-box {

	height: 92rpx;

	background: #ffffff;

	border-radius: 26rpx;

	margin-top: 42rpx;

	display: flex;
	align-items: center;

	padding: 0 26rpx;

	box-shadow:
	0 10rpx 30rpx rgba(15,23,42,0.08);
}

.search-icon {

	font-size: 32rpx;
	margin-right: 18rpx;
}

.search-input {

	flex: 1;
	font-size: 28rpx;
}

.section-title {

	font-size: 34rpx;
	font-weight: 900;

	color: #0f172a;

	margin:
	42rpx 0 24rpx;
}

.device-grid {

	display: grid;
	grid-template-columns: repeat(2,1fr);

	gap: 22rpx;
}

.device-card {

	background: #ffffff;

	border-radius: 34rpx;

	padding: 28rpx;

	box-sizing: border-box;

	box-shadow:
	0 12rpx 40rpx rgba(15,23,42,0.08);
}

.device-top {

	display: flex;
	align-items: center;
	justify-content: space-between;
}

.device-icon {

	width: 88rpx;
	height: 88rpx;

	border-radius: 26rpx;

	display: flex;
	align-items: center;
	justify-content: center;

	font-size: 46rpx;
}

.blue {
	background: #dbeafe;
}

.yellow {
	background: #fef3c7;
}

.purple {
	background: #ede9fe;
}

.green {
	background: #dcfce7;
}

.cyan {
	background: #cffafe;
}

.orange {
	background: #ffedd5;
}

.device-count {

	font-size: 24rpx;

	color: #64748b;
}

.device-name {

	font-size: 34rpx;
	font-weight: 900;

	color: #0f172a;

	margin-top: 30rpx;
}

.device-desc {

	font-size: 24rpx;

	color: #64748b;

	margin-top: 12rpx;

	line-height: 36rpx;
}

</style>