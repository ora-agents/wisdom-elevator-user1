<template>

	<view class="page">

		<!-- 顶部科技背景 -->
		<view class="top-bg"></view>

		<view class="content">

			<!-- 顶部栏 -->
			<view class="topbar">

				<view class="family-name">
					王先生的家⌄
				</view>

				<view class="right-icons">

					<view class="bell">
						🔔
					</view>

					<view class="avatar">
						W
					</view>

				</view>

			</view>

			<!-- 欢迎区域 -->
			<view class="hero">

				<view class="hero-title">
					欢迎回家
				</view>

				<view class="hero-subtitle">
					智能生活，舒适每一天
				</view>

				<view class="weather">
					🌤️ 26℃ 多云 ｜ 🌿 空气优 28
				</view>

			</view>

			<!-- 状态卡片 -->
			<view class="status-card">

				<view class="status-item">

					<view class="status-icon">
						🛗
					</view>

					<view class="status-num">
						18
					</view>

					<view class="status-label">
						在线设备
					</view>

				</view>

				<view class="status-item">

					<view class="status-icon warn">
						!
					</view>

					<view class="status-num">
						1
					</view>

					<view class="status-label">
						异常设备
					</view>

				</view>

				<view class="status-item">

					<view class="status-icon">
						🌿
					</view>

					<view class="status-num">
						12.6
					</view>

					<view class="status-label">
						今日能耗
					</view>

				</view>

				<view class="status-item">

					<view class="status-icon">
						👥
					</view>

					<view class="status-num">
						4
					</view>

					<view class="status-label">
						家庭成员
					</view>

				</view>

			</view>

			<!-- 快捷功能 -->
			<view class="section-title">
				快捷功能
			</view>

			<view class="quick-grid">

				<view
					class="quick-card blue"
					@click="goVoice">

					<view class="quick-circle">
						🎙️
					</view>

					<view>

						<view class="quick-title">
							语音助手
						</view>

						<view class="quick-desc">
							AI 智能控制
						</view>

					</view>

					<view class="quick-arrow">
						›
					</view>

				</view>

				<view
					class="quick-card orange"
					@click="goAddDevice">

					<view class="quick-circle">
						＋
					</view>

					<view>

						<view class="quick-title">
							添加设备
						</view>

						<view class="quick-desc">
							扫码 / 蓝牙 / 搜索
						</view>

					</view>

					<view class="quick-arrow">
						›
					</view>

				</view>

				<view class="quick-card purple">

					<view class="quick-circle">
						🏠
					</view>

					<view>

						<view class="quick-title">
							回家模式
						</view>

						<view class="quick-desc">
							一键开启舒适生活
						</view>

					</view>

					<view class="quick-arrow">
						›
					</view>

				</view>

				<view class="quick-card green">

					<view class="quick-circle">
						🛡️
					</view>

					<view>

						<view class="quick-title">
							离家布防
						</view>

						<view class="quick-desc">
							智能安防守护
						</view>

					</view>

					<view class="quick-arrow">
						›
					</view>

				</view>

			</view>

			<!-- 家庭空间 -->
			<view class="section-row">

				<view class="section-title no-margin">
					家庭空间
				</view>

				<view class="section-more">
					当前：{{ activeRoom }}
				</view>

			</view>

			<scroll-view
				scroll-x
				class="room-scroll">

				<view class="room-list">

					<view
						v-for="room in rooms"
						:key="room.name"
						class="room"
						:class="{ active: activeRoom === room.name }"
						@click="selectRoom(room.name)"
					>

						<view class="room-icon">
							{{ room.icon }}
						</view>

						<view>
							{{ room.name }}
						</view>

					</view>

				</view>

			</scroll-view>

			<!-- 设备 -->
			<view class="section-row">

				<view class="section-title no-margin">
					{{ activeRoom }}设备
				</view>

				<view class="section-more">
					全部设备 ›
				</view>

			</view>

			<view class="device-grid">

				<view
					v-for="item in roomDevices"
					:key="item.name"
					class="device-card"
					@click="goDeviceDetail(item.type)"
				>

					<view class="device-top">

						<view class="device-img">
							{{ item.icon }}
						</view>

						<view class="device-status">
							{{ item.status }}
						</view>

					</view>

					<view class="device-name">
						{{ item.name }}
					</view>

					<view class="device-desc">
						{{ item.desc }}
					</view>

					<view class="device-bottom">

						<text>
							● 在线
						</text>

						<view class="power">
							⏻
						</view>

					</view>

				</view>

			</view>

		</view>

	</view>

</template>

<script>

export default {

	data() {

		return {

			activeRoom: '客厅',

			rooms: [

				{
					name: '客厅',
					icon: '🛋️'
				},

				{
					name: '卧室',
					icon: '🛏️'
				},

				{
					name: '厨房',
					icon: '🍳'
				},

				{
					name: '阳台',
					icon: '🪴'
				},

				{
					name: '三楼',
					icon: '🏠'
				}

			],

			allDevices: {

				客厅: [

					{
						icon: '🛗',
						name: '电梯',
						type: '电梯',
						desc: '客厅区域 · 正常运行',
						status: '运行中'
					},

					{
						icon: '💡',
						name: '客厅灯光',
						type: '灯光',
						desc: '已开启 · 亮度60%',
						status: '开启'
					},

					{
						icon: '🤖',
						name: '清洁机器人',
						type: '机器人',
						desc: '清扫中 · 电量80%',
						status: '工作中'
					},

					{
						icon: '🚪',
						name: '门禁',
						type: '门禁',
						desc: '已上锁 · 状态正常',
						status: '正常'
					}

				],

				卧室: [

					{
						icon: '❄️',
						name: '卧室空调',
						type: '空调',
						desc: '26℃ · 制冷中',
						status: '开启'
					},

					{
						icon: '💡',
						name: '卧室灯光',
						type: '灯光',
						desc: '已关闭',
						status: '关闭'
					}

				],

				厨房: [

					{
						icon: '💡',
						name: '厨房灯光',
						type: '灯光',
						desc: '已开启 · 状态正常',
						status: '开启'
					},

					{
						icon: '🛡️',
						name: '烟雾传感器',
						type: '安防',
						desc: '空气检测正常',
						status: '正常'
					}

				],

				阳台: [

					{
						icon: '🤖',
						name: '阳台机器人',
						type: '机器人',
						desc: '待机中 · 电量95%',
						status: '待机'
					}

				],

				三楼: [

					{
						icon: '🛗',
						name: '三楼电梯',
						type: '电梯',
						desc: '运行正常',
						status: '正常'
					},

					{
						icon: '🤖',
						name: '三楼机器人',
						type: '机器人',
						desc: '巡检中',
						status: '工作中'
					}

				]

			}

		}

	},

	computed: {

		roomDevices() {

			return this.allDevices[this.activeRoom] || []

		}

	},

	methods: {

		selectRoom(room) {

			this.activeRoom = room

		},

		goVoice() {

			uni.navigateTo({

				url: '/pages/voice/voice'

			})

		},

		goAddDevice() {

			uni.navigateTo({

				url: '/pages/addDevice/addDevice'

			})

		},

		goDeviceDetail(type) {

			uni.navigateTo({

				url: '/pages/deviceDetail/deviceDetail?type=' + type

			})

		}

	}

}

</script>

<style>

page {
	background: #041b5f;
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

	height: 900rpx;

	background:
	radial-gradient(circle at 55% 12%, rgba(0, 213, 255, 0.75), transparent 34%),
	radial-gradient(circle at 85% 30%, rgba(59, 130, 246, 0.6), transparent 32%),
	linear-gradient(145deg, #06134f 0%, #0b3aa0 48%, #03174d 100%);
}

.content {

	position: relative;
	z-index: 2;

	padding:
	80rpx 28rpx 160rpx;

	box-sizing: border-box;
}

.topbar {

	display: flex;
	justify-content: space-between;
	align-items: center;

	color: #ffffff;
}

.family-name {

	font-size: 32rpx;
	font-weight: 700;
}

.right-icons {

	display: flex;
	align-items: center;
	gap: 22rpx;
}

.bell {

	font-size: 42rpx;
}

.avatar {

	width: 72rpx;
	height: 72rpx;

	border-radius: 50%;

	background:
	rgba(255,255,255,0.22);

	display: flex;
	align-items: center;
	justify-content: center;

	font-size: 30rpx;
	font-weight: 800;

	color: #ffffff;
}

.hero {

	margin-top: 70rpx;
	color: #ffffff;
}

.hero-title {

	font-size: 64rpx;
	font-weight: 900;
}

.hero-subtitle {

	font-size: 30rpx;
	margin-top: 20rpx;

	color:
	rgba(255,255,255,0.86);
}

.weather {

	margin-top: 26rpx;
	font-size: 26rpx;

	color:
	rgba(255,255,255,0.9);
}

.status-card {

	margin-top: 46rpx;

	background:
	rgba(255,255,255,0.16);

	border-radius: 32rpx;

	padding:
	30rpx 12rpx;

	display: grid;
	grid-template-columns: repeat(4, 1fr);

	backdrop-filter: blur(20rpx);
}

.status-item {

	text-align: center;

	color: #ffffff;

	border-right:
	1rpx solid rgba(255,255,255,0.16);
}

.status-item:last-child {

	border-right: none;
}

.status-icon {

	font-size: 34rpx;
	height: 42rpx;
}

.status-icon.warn {

	width: 38rpx;
	height: 38rpx;

	margin: 0 auto;

	border-radius: 50%;

	background: #f59e0b;

	display: flex;
	align-items: center;
	justify-content: center;

	font-size: 24rpx;
	font-weight: 900;
}

.status-num {

	font-size: 42rpx;
	font-weight: 900;

	margin-top: 10rpx;
}

.status-label {

	font-size: 22rpx;

	color:
	rgba(255,255,255,0.78);

	margin-top: 8rpx;
}

.section-title {

	font-size: 34rpx;
	font-weight: 900;

	color: #ffffff;

	margin: 46rpx 0 22rpx;
}

.no-margin {

	margin: 0;
}

.quick-grid {

	display: grid;
	grid-template-columns: repeat(2, 1fr);

	gap: 22rpx;
}

.quick-card {

	height: 168rpx;

	border-radius: 30rpx;

	padding: 26rpx;

	box-sizing: border-box;

	display: flex;
	align-items: center;

	position: relative;

	color: #ffffff;

	box-shadow:
	0 12rpx 30rpx rgba(0,0,0,0.18);
}

.blue {
	background: linear-gradient(135deg, #27a8ff, #2563eb);
}

.orange {
	background: linear-gradient(135deg, #ff9b38, #f97316);
}

.purple {
	background: linear-gradient(135deg, #8b5cf6, #7c3aed);
}

.green {
	background: linear-gradient(135deg, #34d399, #10b981);
}

.quick-circle {

	width: 82rpx;
	height: 82rpx;

	border-radius: 50%;

	background:
	rgba(255,255,255,0.22);

	display: flex;
	align-items: center;
	justify-content: center;

	font-size: 42rpx;

	margin-right: 22rpx;
}

.quick-title {

	font-size: 30rpx;
	font-weight: 900;
}

.quick-desc {

	font-size: 22rpx;
	margin-top: 8rpx;

	color:
	rgba(255,255,255,0.84);
}

.quick-arrow {

	position: absolute;
	right: 24rpx;

	font-size: 56rpx;

	opacity: 0.8;
}

.section-row {

	display: flex;
	justify-content: space-between;
	align-items: center;

	margin: 48rpx 0 22rpx;
}

.section-more {

	color:
	rgba(255,255,255,0.78);

	font-size: 26rpx;
}

.room-scroll {

	white-space: nowrap;
}

.room-list {

	display: flex;
	gap: 18rpx;
}

.room {

	min-width: 138rpx;
	height: 92rpx;

	border-radius: 24rpx;

	background:
	rgba(255,255,255,0.14);

	color:
	rgba(255,255,255,0.78);

	font-size: 24rpx;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	border:
	1rpx solid rgba(255,255,255,0.16);
}

.room-icon {

	font-size: 30rpx;
	margin-bottom: 6rpx;
}

.room.active {

	background:
	linear-gradient(135deg, #4db7ff, #2563eb);

	color: #ffffff;

	box-shadow:
	0 10rpx 30rpx rgba(37,99,235,0.35);
}

.device-grid {

	display: grid;
	grid-template-columns: repeat(2, 1fr);

	gap: 20rpx;

	padding-bottom: 40rpx;
}

.device-card {

	background:
	linear-gradient(180deg, #ffffff, #f5f7fb);

	border-radius: 30rpx;

	padding: 26rpx;

	box-sizing: border-box;

	box-shadow:
	0 16rpx 40rpx rgba(0, 21, 80, 0.16);
}

.device-top {

	display: flex;
	align-items: center;
	justify-content: space-between;
}

.device-img {

	width: 76rpx;
	height: 76rpx;

	border-radius: 22rpx;

	background: #eff6ff;

	display: flex;
	align-items: center;
	justify-content: center;

	font-size: 42rpx;
}

.device-status {

	font-size: 22rpx;

	color: #2563eb;

	background: #eff6ff;

	padding: 8rpx 14rpx;

	border-radius: 999rpx;
}

.device-name {

	font-size: 30rpx;
	font-weight: 900;

	color: #0f172a;

	margin-top: 24rpx;
}

.device-desc {

	font-size: 23rpx;

	color: #64748b;

	margin-top: 10rpx;

	line-height: 34rpx;
}

.device-bottom {

	margin-top: 22rpx;

	display: flex;
	align-items: center;
	justify-content: space-between;

	font-size: 24rpx;

	color: #2563eb;
}

.power {

	width: 58rpx;
	height: 58rpx;

	border-radius: 50%;

	background:
	linear-gradient(135deg, #3b82f6, #2563eb);

	color: #ffffff;

	display: flex;
	align-items: center;
	justify-content: center;

	font-size: 32rpx;
}

</style>