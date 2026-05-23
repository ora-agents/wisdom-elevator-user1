<template>

	<view class="page">

		<!-- 科技背景 -->

		<view class="top-bg"></view>

		<view class="content">

			<!-- 顶部 -->

			<view class="topbar">

				<view>

					<view class="family-name">
						智享之家
					</view>

					<view class="welcome">
						欢迎回家，生活因智能而美好
					</view>

				</view>

				<view class="top-icons">

					<view class="icon-btn">
						•••
					</view>

					<view class="icon-btn">
						◎
					</view>

				</view>

			</view>

			<!-- 天气 -->

			<view class="weather-card">

				<view class="weather-left">

					<view class="weather-icon">
						☀️
					</view>

					<view>

						<view class="temp">
							26℃
						</view>

						<view class="weather-desc">
							多云 ｜ 空气优
						</view>

					</view>

				</view>

				<view class="weather-right">

					<view class="weather-item">

						<view class="weather-value">
							58%
						</view>

						<view class="weather-label">
							湿度
						</view>

					</view>

					<view class="weather-item">

						<view class="weather-value">
							25℃
						</view>

						<view class="weather-label">
							室内温度
						</view>

					</view>

				</view>

			</view>

			<!-- 家庭空间 -->

			<view class="section-header">

				<view class="section-title">
					家庭空间
				</view>

				<view class="manage-btn">
					管理
				</view>

			</view>

			<scroll-view
				scroll-x
				class="room-scroll"
			>

				<view class="room-row">

					<view
						class="room-item"
						:class="activeRoom === item.name ? 'active-room' : ''"
						v-for="item in rooms"
						:key="item.name"
						@click="selectRoom(item)"
					>

						{{ item.name }}

					</view>

					<view
						class="add-room"
						@click="addRoom"
					>

						＋

					</view>

				</view>

			</scroll-view>

			<!-- 设备总览 -->

			<view class="section-title stats-title">
				设备总览
			</view>

			<view class="stats-grid">

				<view class="stats-card">

					<view class="stats-num">
						18
					</view>

					<view class="stats-label">
						全部设备
					</view>

				</view>

				<view class="stats-card">

					<view class="stats-num green">
						15
					</view>

					<view class="stats-label">
						在线设备
					</view>

				</view>

				<view class="stats-card">

					<view class="stats-num gray">
						3
					</view>

					<view class="stats-label">
						离线设备
					</view>

				</view>

				<view class="stats-card">

					<view class="stats-num red">
						1
					</view>

					<view class="stats-label">
						告警设备
					</view>

				</view>

			</view>

			<!-- 全部设备 -->

			<view class="section-header">

				<view class="section-title">
					{{ activeRoom }}设备
				</view>

				<view class="more-btn">
					查看全部 ›
				</view>

			</view>

			<view class="device-grid">

				<view
					class="device-card"
					v-for="item in filterDeviceList"
					:key="item.name"
					@click="goControl(item)"
				>

					<view class="device-top">

						<view class="device-icon">
							{{ item.icon }}
						</view>

						<view
							class="device-status"
							:class="item.online ? 'online' : 'offline'"
						>

							{{ item.online ? '在线' : '离线' }}

						</view>

					</view>

					<view class="device-name">
						{{ item.name }}
					</view>

					<view class="device-desc">
						{{ item.desc }}
					</view>

					<view class="device-bottom">

						<view class="room-tag">
							{{ item.room }}
						</view>

						<view
							class="power-btn"
							:class="item.online ? 'power-on' : 'power-off'"
							@click.stop="toggleDevice(item)"
						>

							⏻

						</view>

					</view>

				</view>

			</view>

			<!-- 场景 -->

			<view class="section-header">

				<view class="section-title">
					快捷场景
				</view>

				<view class="manage-btn">
					自定义
				</view>

			</view>

			<view class="scene-grid">

				<view
					class="scene-card gold"
					@click="runScene('回家模式')"
				>

					<view class="scene-icon">
						🏠
					</view>

					<view class="scene-name">
						回家模式
					</view>

				</view>

				<view
					class="scene-card green"
					@click="runScene('离家布防')"
				>

					<view class="scene-icon">
						🛡️
					</view>

					<view class="scene-name">
						离家布防
					</view>

				</view>

				<view
					class="scene-card purple"
					@click="runScene('睡眠模式')"
				>

					<view class="scene-icon">
						🌙
					</view>

					<view class="scene-name">
						睡眠模式
					</view>

				</view>

				<view
					class="scene-card blue"
					@click="runScene('会客模式')"
				>

					<view class="scene-icon">
						🎉
					</view>

					<view class="scene-name">
						会客模式
					</view>

				</view>

			</view>

		</view>

		<!-- AI语音助手 -->

		<view
			class="voice-float"
			@click="goVoice"
		>

			<view class="voice-circle">

				🎤

			</view>

		</view>

	</view>

</template>

<script>

export default {

	data() {

		return {

			activeRoom: '全部',

			rooms: [

				{
					name: '全部'
				},

				{
					name: '客厅'
				},

				{
					name: '卧室'
				},

				{
					name: '厨房'
				},

				{
					name: '阳台'
				},

				{
					name: '三楼'
				}

			],

			deviceList: [

				{
					name: '客厅空调',
					icon: '❄️',
					room: '客厅',
					type: 'ac',
					desc: '26℃ ｜ 制冷模式',
					online: true
				},

				{
					name: '客厅电梯',
					icon: '🛗',
					room: '客厅',
					type: 'elevator',
					desc: '运行正常',
					online: true
				},

				{
					name: '卧室灯光',
					icon: '💡',
					room: '卧室',
					type: 'light',
					desc: '亮度 80%',
					online: true
				},

				{
					name: '厨房门锁',
					icon: '🚪',
					room: '厨房',
					type: 'door',
					desc: '已上锁',
					online: true
				},

				{
					name: '阳台机器人',
					icon: '🤖',
					room: '阳台',
					type: 'robot',
					desc: '清扫中',
					online: false
				}

			]

		}

	},

	computed: {

		filterDeviceList() {

			if(this.activeRoom === '全部') {

				return this.deviceList

			}

			return this.deviceList.filter(item => {

				return item.room === this.activeRoom

			})

		}

	},

	methods: {

		selectRoom(item) {

			this.activeRoom = item.name

		},

		addRoom() {

			uni.showModal({

				title: '新增空间',

				editable: true,

				placeholderText: '请输入空间名称',

				success: (res) => {

					if(res.confirm && res.content){

						this.rooms.push({

							name: res.content

						})

					}

				}

			})

		},

		goControl(item) {

			uni.navigateTo({

				url:

				'/pages/deviceDetail/deviceDetail?' +

				'name=' + item.name +

				'&location=' + item.room +

				'&type=' + item.type

			})

		},

		goVoice() {

			uni.navigateTo({

				url: '/pages/voice/voice'

			})

		},

		toggleDevice(item) {

			item.online = !item.online

			uni.vibrateShort()

		},

		runScene(name) {

			uni.showLoading({

				title: '场景执行中'

			})

			setTimeout(() => {

				uni.hideLoading()

				uni.showToast({

					title: name + ' 已启动',

					icon: 'success'

				})

			}, 1200)

		}

	}

}

</script>
<style>

page {
	background: #03174d;
}

.page {
	min-height: 100vh;
	position: relative;
	overflow: hidden;
}

.top-bg {
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	height: 1400rpx;
	background:
		radial-gradient(circle at 50% 10%, rgba(0,213,255,0.75), transparent 34%),
		radial-gradient(circle at 90% 30%, rgba(59,130,246,0.6), transparent 32%),
		linear-gradient(145deg, #06134f 0%, #0b3aa0 48%, #03174d 100%);
}

.content {
	position: relative;
	z-index: 2;
	padding: 80rpx 28rpx 240rpx;
	box-sizing: border-box;
}

.topbar {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.family-name {
	font-size: 54rpx;
	font-weight: 900;
	color: #ffffff;
}

.welcome {
	font-size: 24rpx;
	margin-top: 12rpx;
	color: rgba(255,255,255,0.72);
}

.top-icons {
	display: flex;
	align-items: center;
}

.icon-btn {
	width: 72rpx;
	height: 72rpx;
	border-radius: 50%;
	background: rgba(255,255,255,0.14);
	backdrop-filter: blur(20rpx);
	display: flex;
	align-items: center;
	justify-content: center;
	color: #ffffff;
	font-size: 32rpx;
	margin-left: 18rpx;
}

.weather-card {
	margin-top: 38rpx;
	padding: 34rpx;
	border-radius: 36rpx;
	background: rgba(255,255,255,0.12);
	border: 1rpx solid rgba(255,255,255,0.14);
	backdrop-filter: blur(20rpx);
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.weather-left {
	display: flex;
	align-items: center;
}

.weather-icon {
	font-size: 74rpx;
	margin-right: 24rpx;
}

.temp {
	font-size: 68rpx;
	font-weight: 900;
	color: #ffffff;
}

.weather-desc {
	font-size: 24rpx;
	color: rgba(255,255,255,0.74);
	margin-top: 8rpx;
}

.weather-right {
	display: flex;
	align-items: center;
}

.weather-item {
	margin-left: 46rpx;
	text-align: center;
}

.weather-value {
	font-size: 38rpx;
	font-weight: 800;
	color: #ffffff;
}

.weather-label {
	font-size: 22rpx;
	margin-top: 8rpx;
	color: rgba(255,255,255,0.72);
}

.section-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 44rpx;
}

.section-title {
	font-size: 40rpx;
	font-weight: 900;
	color: #ffffff;
}

.manage-btn,
.more-btn {
	font-size: 24rpx;
	color: rgba(255,255,255,0.74);
}

.room-scroll {
	margin-top: 24rpx;
	white-space: nowrap;
}

.room-row {
	display: flex;
	align-items: center;
	padding-bottom: 10rpx;
}

.room-item {
	min-width: 140rpx;
	height: 76rpx;
	padding: 0 24rpx;
	border-radius: 24rpx;
	background: rgba(255,255,255,0.1);
	backdrop-filter: blur(20rpx);
	display: flex;
	align-items: center;
	justify-content: center;
	color: #ffffff;
	font-size: 26rpx;
	margin-right: 18rpx;
	transition: all 0.3s;
}

.room-item:active {
	transform: scale(0.95);
}

.active-room {
	background: linear-gradient(135deg, #3b82f6, #2563eb);
	box-shadow: 0 12rpx 30rpx rgba(37,99,235,0.4);
	font-weight: 700;
}

.add-room {
	min-width: 76rpx;
	height: 76rpx;
	border-radius: 24rpx;
	border: 2rpx dashed rgba(255,255,255,0.4);
	display: flex;
	align-items: center;
	justify-content: center;
	color: #ffffff;
	font-size: 40rpx;
}

.stats-title {
	margin-top: 44rpx;
}

.stats-grid {
	display: grid;
	grid-template-columns: repeat(4,1fr);
	gap: 18rpx;
	margin-top: 24rpx;
}

.stats-card {
	height: 160rpx;
	border-radius: 30rpx;
	background: rgba(255,255,255,0.1);
	backdrop-filter: blur(20rpx);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.stats-num {
	font-size: 46rpx;
	font-weight: 900;
	color: #ffffff;
}

.stats-label {
	font-size: 22rpx;
	margin-top: 10rpx;
	color: rgba(255,255,255,0.72);
}

.green {
	color: #4ade80;
}

.gray {
	color: #cbd5e1;
}

.red {
	color: #fb7185;
}

.device-grid {
	display: grid;
	grid-template-columns: repeat(2,1fr);
	gap: 22rpx;
	margin-top: 24rpx;
}

.device-card {
	background: linear-gradient(180deg, rgba(255,255,255,0.16), rgba(255,255,255,0.08));
	border-radius: 34rpx;
	padding: 28rpx;
	backdrop-filter: blur(20rpx);
	border: 1rpx solid rgba(255,255,255,0.12);
	transition: all 0.3s;
}

.device-card:active {
	transform: scale(0.97);
	opacity: 0.9;
}

.device-top {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.device-icon {
	width: 78rpx;
	height: 78rpx;
	border-radius: 24rpx;
	background: rgba(255,255,255,0.14);
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 42rpx;
}

.device-status {
	padding: 8rpx 18rpx;
	border-radius: 999rpx;
	font-size: 22rpx;
	font-weight: 700;
}

.online {
	background: rgba(74,222,128,0.18);
	color: #4ade80;
}

.offline {
	background: rgba(203,213,225,0.16);
	color: #cbd5e1;
}

.device-name {
	font-size: 32rpx;
	font-weight: 800;
	color: #ffffff;
	margin-top: 24rpx;
}

.device-desc {
	font-size: 24rpx;
	color: rgba(255,255,255,0.72);
	margin-top: 12rpx;
	line-height: 38rpx;
}

.device-bottom {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 28rpx;
}

.room-tag {
	padding: 8rpx 16rpx;
	border-radius: 999rpx;
	background: rgba(59,130,246,0.18);
	color: #93c5fd;
	font-size: 22rpx;
}

.power-btn {
	width: 62rpx;
	height: 62rpx;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #ffffff;
	font-size: 30rpx;
	transition: all 0.3s;
}

.power-on {
	background: linear-gradient(135deg, #3b82f6, #2563eb);
	box-shadow:
		0 0 30rpx rgba(59,130,246,0.8),
		0 10rpx 24rpx rgba(37,99,235,0.4);
}

.power-off {
	background: linear-gradient(135deg, #64748b, #475569);
	opacity: 0.7;
}

.scene-grid {
	display: grid;
	grid-template-columns: repeat(2,1fr);
	gap: 22rpx;
	margin-top: 24rpx;
}

.scene-card {
	height: 180rpx;
	border-radius: 34rpx;
	padding: 28rpx;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	justify-content: center;
	color: #ffffff;
	transition: all 0.3s;
}

.scene-card:active {
	transform: scale(0.96);
}

.scene-icon {
	font-size: 54rpx;
}

.scene-name {
	font-size: 30rpx;
	font-weight: 800;
	margin-top: 22rpx;
}

.gold {
	background: linear-gradient(135deg, #fbbf24, #f59e0b);
}

.scene-card.green {
	background: linear-gradient(135deg, #34d399, #10b981);
}

.purple {
	background: linear-gradient(135deg, #a855f7, #7c3aed);
}

.blue {
	background: linear-gradient(135deg, #3b82f6, #2563eb);
}

.voice-float {
	position: fixed;
	right: 34rpx;
	bottom: 160rpx;
	z-index: 999;
}

.voice-circle {
	width: 120rpx;
	height: 120rpx;
	border-radius: 50%;
	background: radial-gradient(circle, #60a5fa, #2563eb);
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 48rpx;
	color: #ffffff;
	border: 6rpx solid rgba(255,255,255,0.2);
	box-shadow:
		0 0 40rpx rgba(37,99,235,0.8),
		0 20rpx 50rpx rgba(0,0,0,0.3);
	animation: breathing 2s infinite;
}

@keyframes breathing {
	0% {
		transform: scale(1);
		box-shadow: 0 0 40rpx rgba(37,99,235,0.6);
	}

	50% {
		transform: scale(1.08);
		box-shadow: 0 0 80rpx rgba(37,99,235,1);
	}

	100% {
		transform: scale(1);
		box-shadow: 0 0 40rpx rgba(37,99,235,0.6);
	}
}

</style>