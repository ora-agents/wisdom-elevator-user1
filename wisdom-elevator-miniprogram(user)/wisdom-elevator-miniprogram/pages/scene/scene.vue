<template>

	<view class="page">

		<!-- 顶部 -->
		<view class="top">

			<view class="title">
				智能场景
			</view>

			<view class="subtitle">
				一键联动全屋设备
			</view>

		</view>

		<!-- 推荐 -->
		<view class="banner">

			<view class="banner-title">
				🏠 智慧家庭自动化
			</view>

			<view class="banner-text">
				根据时间、位置、语音自动执行设备联动
			</view>

		</view>

		<!-- 场景 -->
		<view class="scene-grid">

			<view
				class="scene-card blue"
				@click="runScene('回家模式')">

				<view class="scene-icon">
					🏡
				</view>

				<view class="scene-name">
					回家模式
				</view>

				<view class="scene-desc">
					开灯 · 开空调 · 解锁门禁
				</view>

			</view>

			<view
				class="scene-card purple"
				@click="runScene('睡眠模式')">

				<view class="scene-icon">
					🌙
				</view>

				<view class="scene-name">
					睡眠模式
				</view>

				<view class="scene-desc">
					关闭灯光 · 空调调节
				</view>

			</view>

			<view
				class="scene-card orange"
				@click="runScene('影院模式')">

				<view class="scene-icon">
					🎬
				</view>

				<view class="scene-name">
					影院模式
				</view>

				<view class="scene-desc">
					调暗灯光 · 启动影音
				</view>

			</view>

			<view
				class="scene-card green"
				@click="runScene('厨房模式')">

				<view class="scene-icon">
					🍳
				</view>

				<view class="scene-name">
					厨房模式
				</view>

				<view class="scene-desc">
					打开厨房灯 · 启动排风
				</view>

			</view>

		</view>

		<!-- 自动化 -->
		<view class="card">

			<view class="card-title">
				智能自动化
			</view>

			<view class="auto-item">

				<view>

					<view class="auto-name">
						晚上 10:00 自动睡眠
					</view>

					<view class="auto-desc">
						自动关闭客厅灯光
					</view>

				</view>

				<switch checked color="#2563EB" />

			</view>

			<view class="auto-item">

				<view>

					<view class="auto-name">
						离家自动关闭设备
					</view>

					<view class="auto-desc">
						定位离开后关闭设备
					</view>

				</view>

				<switch checked color="#2563EB" />

			</view>

			<view class="auto-item">

				<view>

					<view class="auto-name">
						语音唤醒智能助手
					</view>

					<view class="auto-desc">
						支持语音设备控制
					</view>

				</view>

				<switch color="#2563EB" />

			</view>

		</view>

		<!-- AI -->
		<view class="ai-card">

			<view class="ai-title">
				🤖 AI 智能推荐
			</view>

			<view class="ai-desc">
				检测到您每天22:30进入睡眠模式，
				是否创建自动化？
			</view>

			<button class="ai-btn">
				立即创建
			</button>

		</view>

	</view>

</template>

<script>

export default {

	methods: {

		runScene(name) {

			uni.showToast({

				title: `${name}已启动`,

				icon: 'success'

			})

		}

	}

}

</script>

<style>

page{

	background:
	linear-gradient(
	180deg,
	#EEF4FF 0%,
	#F8FAFC 100%
	);

}

.page{

	padding:
	90rpx
	28rpx
	40rpx;

}

/* 顶部 */

.title{

	font-size:44rpx;
	font-weight:800;

	color:#0F172A;

}

.subtitle{

	font-size:26rpx;

	color:#64748B;

	margin-top:10rpx;
	margin-bottom:30rpx;

}

/* banner */

.banner{

	background:
	linear-gradient(
	135deg,
	#2563EB,
	#1E3A8A
	);

	border-radius:34rpx;

	padding:34rpx;

	color:white;

	margin-bottom:30rpx;

	box-shadow:
	0 12rpx 40rpx
	rgba(37,99,235,0.25);

}

.banner-title{

	font-size:34rpx;
	font-weight:800;

}

.banner-text{

	font-size:24rpx;

	margin-top:14rpx;

	opacity:0.9;

	line-height:40rpx;

}

/* 场景 */

.scene-grid{

	display:grid;

	grid-template-columns:
	repeat(2,1fr);

	gap:22rpx;

	margin-bottom:30rpx;

}

.scene-card{

	height:220rpx;

	border-radius:32rpx;

	padding:28rpx;

	box-sizing:border-box;

	color:white;

	position:relative;

	overflow:hidden;

}

.scene-icon{

	font-size:54rpx;

}

.scene-name{

	font-size:30rpx;
	font-weight:800;

	margin-top:24rpx;

}

.scene-desc{

	font-size:22rpx;

	margin-top:10rpx;

	line-height:34rpx;

	opacity:0.9;

}

.blue{

	background:
	linear-gradient(
	135deg,
	#2563EB,
	#3B82F6
	);

}

.purple{

	background:
	linear-gradient(
	135deg,
	#7C3AED,
	#9333EA
	);

}

.orange{

	background:
	linear-gradient(
	135deg,
	#F97316,
	#FB923C
	);

}

.green{

	background:
	linear-gradient(
	135deg,
	#10B981,
	#34D399
	);

}

/* 卡片 */

.card{

	background:white;

	border-radius:32rpx;

	padding:30rpx;

	box-shadow:
	0 10rpx 40rpx
	rgba(15,23,42,0.05);

	margin-bottom:30rpx;

}

.card-title{

	font-size:32rpx;
	font-weight:800;

	color:#0F172A;

	margin-bottom:26rpx;

}

/* 自动化 */

.auto-item{

	display:flex;

	justify-content:space-between;

	align-items:center;

	padding:24rpx 0;

	border-bottom:
	2rpx solid #F1F5F9;

}

.auto-item:last-child{

	border-bottom:none;

}

.auto-name{

	font-size:28rpx;
	font-weight:700;

	color:#0F172A;

}

.auto-desc{

	font-size:23rpx;

	color:#64748B;

	margin-top:8rpx;

}

/* AI */

.ai-card{

	background:
	linear-gradient(
	135deg,
	#111827,
	#1F2937
	);

	border-radius:34rpx;

	padding:34rpx;

	color:white;

}

.ai-title{

	font-size:34rpx;
	font-weight:800;

}

.ai-desc{

	font-size:24rpx;

	line-height:40rpx;

	margin-top:18rpx;

	color:rgba(255,255,255,0.85);

}

.ai-btn{

	margin-top:26rpx;

	height:82rpx;

	line-height:82rpx;

	border-radius:22rpx;

	background:
	linear-gradient(
	135deg,
	#2563EB,
	#3B82F6
	);

	color:white;

	font-size:28rpx;
	font-weight:700;

}

</style>