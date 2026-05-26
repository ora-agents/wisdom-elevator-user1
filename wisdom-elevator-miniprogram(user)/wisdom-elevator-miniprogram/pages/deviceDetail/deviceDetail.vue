<template>

	<view class="page">

		<!-- 科技背景 -->
		<view class="bg"></view>

		<view class="content">

			<!-- 顶部信息 -->
			<view class="header-card">

				<view class="header-left">

					<view class="device-name">
						{{ device.name }}
					</view>

					<view class="device-info">
						{{ device.room }} · {{ online ? '运行正常' : '设备离线' }}
					</view>

					<view class="device-tag">
						{{ typeName }}
					</view>

				</view>

				<switch
					color="#2563eb"
					:checked="online"
					@change="changePower"
				/>

			</view>

			<!-- 空调 -->
			<view
				v-if="device.type === 'ac'"
				class="card"
			>

				<view class="temp-circle">

					<view class="temp-num">
						{{ temperature }}°
					</view>

					<view class="temp-mode">
						{{ acMode }}
					</view>

				</view>

				<view class="temp-btns">

					<view
						class="circle-btn"
						@click="temperature--"
					>
						－
					</view>

					<view
						class="circle-btn"
						@click="temperature++"
					>
						＋
					</view>

				</view>

				<view class="panel">

					<view class="panel-title">
						运行模式
					</view>

					<view class="mode-list">

						<view
							v-for="item in acModes"
							:key="item"
							class="mode-item"
							:class="{ active: acMode === item }"
							@click="acMode = item"
						>
							{{ item }}
						</view>

					</view>

				</view>

			</view>

			<!-- 灯光 -->
			<view
				v-if="device.type === 'light'"
				class="card"
			>

				<view class="big-icon">
					💡
				</view>

				<view class="panel-big-title">
					灯光亮度
				</view>

				<view class="light-value">
					{{ brightness }}%
				</view>

				<slider
					:value="brightness"
					min="0"
					max="100"
					activeColor="#facc15"
					backgroundColor="#dbeafe"
					@change="changeLight"
				/>

				<view class="panel">

					<view class="panel-title">
						灯光模式
					</view>

					<view class="mode-list">

						<view
							v-for="item in lightModes"
							:key="item"
							class="mode-item"
							:class="{ active: lightMode === item }"
							@click="lightMode = item"
						>
							{{ item }}
						</view>

					</view>

				</view>

			</view>

			<!-- 门锁 -->
			<view
				v-if="device.type === 'door'"
				class="card"
			>

				<view class="big-icon">
					🚪
				</view>

				<view class="panel-big-title">
					智能门锁
				</view>

				<view class="status-text">
					{{ locked ? '已上锁' : '已解锁' }}
				</view>

				<view
					class="main-btn"
					@click="toggleLock"
				>
					{{ locked ? '远程开锁' : '立即上锁' }}
				</view>

			</view>

			<!-- 电梯 -->
			<view
				v-if="device.type === 'elevator'"
				class="card"
			>

				<view class="big-icon">
					🛗
				</view>

				<view class="floor-num">
					{{ floor }}
				</view>

				<view class="panel-big-title">
					当前楼层
				</view>

				<view class="temp-btns">

					<view
						class="circle-btn"
						@click="floorDown"
					>
						↓
					</view>

					<view
						class="circle-btn"
						@click="floorUp"
					>
						↑
					</view>

				</view>

			</view>

			<!-- 机器人 -->
			<view
				v-if="device.type === 'robot'"
				class="card"
			>

				<view class="big-icon">
					🤖
				</view>

				<view class="panel-big-title">
					扫地机器人
				</view>

				<view class="status-text">
					{{ robotWorking ? '清扫中' : '待机中' }}
				</view>

				<view class="battery">
					电量 {{ battery }}%
				</view>

				<view
					class="main-btn"
					@click="toggleRobot"
				>
					{{ robotWorking ? '停止清扫' : '开始清扫' }}
				</view>

			</view>

			<!-- 信息 -->
			<view class="info-card">

				<view class="info-title">
					设备信息
				</view>

				<view class="info-row">

					<text>设备名称</text>

					<text>{{ device.name }}</text>

				</view>

				<view class="info-row">

					<text>安装位置</text>

					<text>{{ device.room }}</text>

				</view>

				<view class="info-row">

					<text>设备状态</text>

					<text class="green">
						{{ online ? '在线' : '离线' }}
					</text>

				</view>

			</view>

			<!-- 底部按钮 -->
			<view class="bottom-btns">

				<view
					class="repair-btn"
					@click="goRepair"
				>
					设备报修
				</view>

				<view
					class="update-btn"
					@click="updateStatus"
				>
					更新状态
				</view>

			</view>

		</view>

	</view>

</template>

<script>

export default {

	data() {

		return {

			device: {

				name: '客厅空调',

				room: '客厅',

				type: 'ac'

			},

			online: true,

			temperature: 26,

			acMode: '制冷',

			acModes: [
				'制冷',
				'制热',
				'送风',
				'除湿'
			],

			brightness: 80,

			lightMode: '自然光',

			lightModes: [
				'暖光',
				'自然光',
				'冷光',
				'夜灯'
			],

			locked: true,

			floor: 3,

			robotWorking: false,

			battery: 82

		}

	},

	computed: {

		typeName() {

			const map = {

				ac: '智能空调',

				light: '智能灯光',

				door: '智能门锁',

				elevator: '智能电梯',

				robot: '扫地机器人'

			}

			return map[this.device.type]

		}

	},

	onLoad(option) {

		console.log('设备参数', option)

		/* 名称 */

		if(option.name) {

			this.device.name =
				decodeURIComponent(option.name)

		}

		/* 房间 */

		if(option.location) {

			this.device.room =
				decodeURIComponent(option.location)

		}

		/* 类型 */

		if(option.type) {

			this.device.type =
				decodeURIComponent(option.type)

		}

		/* 自动识别 */

		if(!option.type) {

			const name = this.device.name

			if(name.includes('空调')) {

				this.device.type = 'ac'

			}

			else if(name.includes('灯')) {

				this.device.type = 'light'

			}

			else if(name.includes('门')) {

				this.device.type = 'door'

			}

			else if(name.includes('电梯')) {

				this.device.type = 'elevator'

			}

			else if(name.includes('机器人')) {

				this.device.type = 'robot'

			}

		}

	},

	methods: {

		changePower(e) {

			this.online = e.detail.value

			uni.showToast({

				title: this.online ? '设备已开启' : '设备已关闭',

				icon: 'none'

			})

		},

		changeLight(e) {

			this.brightness = e.detail.value

		},

		toggleLock() {

			this.locked = !this.locked

			uni.showToast({

				title: this.locked ? '已上锁' : '已解锁',

				icon: 'success'

			})

		},

		floorUp() {

			this.floor++

		},

		floorDown() {

			if(this.floor > 1) {

				this.floor--

			}

		},

		toggleRobot() {

			this.robotWorking = !this.robotWorking

		},

		goRepair() {

			uni.navigateTo({

				url:
				'/pages/repair/repair?name=' +
				this.device.name

			})

		},

		updateStatus() {

			uni.showLoading({

				title: '同步中'

			})

			setTimeout(() => {

				uni.hideLoading()

				uni.showToast({

					title: '状态已更新',

					icon: 'success'

				})

			},1000)

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
}

.bg {

	position: absolute;

	left: 0;
	right: 0;
	top: 0;

	height: 2200rpx;

	background:

	radial-gradient(
		circle at 50% 10%,
		rgba(0,213,255,0.72),
		transparent 34%
	),

	linear-gradient(
		145deg,
		#06134f 0%,
		#0b3aa0 48%,
		#03174d 100%
	);
}

.content {

	position: relative;

	z-index: 2;

	padding:
	40rpx 28rpx 220rpx;
}

/* 顶部 */

.header-card {

	display: flex;

	align-items: center;

	justify-content: space-between;

	margin-bottom: 40rpx;
}

.header-left {

	flex: 1;
}

.device-name {

	font-size: 54rpx;

	font-weight: 900;

	color: #ffffff;
}

.device-info {

	font-size: 24rpx;

	color:
	rgba(255,255,255,0.7);

	margin-top: 12rpx;
}

.device-tag {

	display: inline-flex;

	margin-top: 16rpx;

	padding:
	8rpx 20rpx;

	border-radius: 999rpx;

	background:
	rgba(59,130,246,0.24);

	color: #bfdbfe;

	font-size: 22rpx;
}

/* 卡片 */

.card {

	background:
	rgba(255,255,255,0.12);

	border:
	1rpx solid rgba(255,255,255,0.12);

	backdrop-filter: blur(20rpx);

	border-radius: 40rpx;

	padding: 40rpx;

	text-align: center;

	margin-bottom: 30rpx;
}

/* 空调 */

.temp-circle {

	width: 320rpx;
	height: 320rpx;

	border-radius: 50%;

	background: #ffffff;

	margin: 0 auto;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.temp-num {

	font-size: 90rpx;

	font-weight: 900;

	color: #2563eb;
}

.temp-mode {

	font-size: 28rpx;

	color: #64748b;

	margin-top: 10rpx;
}

.temp-btns {

	display: flex;

	justify-content: center;

	margin-top: 40rpx;
}

.circle-btn {

	width: 90rpx;
	height: 90rpx;

	border-radius: 50%;

	background: #ffffff;

	display: flex;
	align-items: center;
	justify-content: center;

	font-size: 42rpx;

	font-weight: 900;

	color: #2563eb;

	margin: 0 24rpx;
}

/* 通用 */

.big-icon {

	font-size: 120rpx;
}

.panel-big-title {

	font-size: 38rpx;

	font-weight: 900;

	color: #ffffff;

	margin-top: 24rpx;
}

.light-value,
.status-text,
.floor-num {

	font-size: 68rpx;

	font-weight: 900;

	color: #ffffff;

	margin-top: 30rpx;
}

.battery {

	font-size: 24rpx;

	color:
	rgba(255,255,255,0.7);

	margin-top: 14rpx;
}

/* 面板 */

.panel {

	margin-top: 40rpx;

	background:
	rgba(255,255,255,0.08);

	border-radius: 28rpx;

	padding: 24rpx;
}

.panel-title {

	font-size: 28rpx;

	font-weight: 800;

	color: #ffffff;

	text-align: left;

	margin-bottom: 20rpx;
}

.mode-list {

	display: grid;

	grid-template-columns:
	repeat(4,1fr);

	gap: 16rpx;
}

.mode-item {

	height: 72rpx;

	border-radius: 18rpx;

	background:
	rgba(255,255,255,0.9);

	display: flex;
	align-items: center;
	justify-content: center;

	font-size: 24rpx;

	color: #64748b;
}

.mode-item.active {

	background:
	linear-gradient(
		135deg,
		#3b82f6,
		#2563eb
	);

	color: #ffffff;

	font-weight: 800;
}

/* 按钮 */

.main-btn {

	height: 92rpx;

	border-radius: 24rpx;

	background:
	linear-gradient(
		135deg,
		#3b82f6,
		#2563eb
	);

	display: flex;
	align-items: center;
	justify-content: center;

	color: #ffffff;

	font-size: 30rpx;

	font-weight: 800;

	margin-top: 36rpx;
}

/* 信息 */

.info-card {

	background:
	rgba(255,255,255,0.12);

	border:
	1rpx solid rgba(255,255,255,0.12);

	border-radius: 34rpx;

	padding: 30rpx;

	margin-top: 30rpx;
}

.info-title {

	font-size: 32rpx;

	font-weight: 900;

	color: #ffffff;

	margin-bottom: 28rpx;
}

.info-row {

	display: flex;

	justify-content: space-between;

	margin-bottom: 22rpx;

	color: #ffffff;

	font-size: 24rpx;
}

.info-row:last-child {

	margin-bottom: 0;
}

.green {

	color: #4ade80;
}

/* 底部 */

.bottom-btns {

	display: flex;

	margin-top: 40rpx;
}

.repair-btn,
.update-btn {

	flex: 1;

	height: 92rpx;

	border-radius: 24rpx;

	display: flex;
	align-items: center;
	justify-content: center;

	color: #ffffff;

	font-size: 28rpx;

	font-weight: 800;
}

.repair-btn {

	background:
	linear-gradient(
		135deg,
		#fb923c,
		#f97316
	);
}

.update-btn {

	margin-left: 20rpx;

	background:
	linear-gradient(
		135deg,
		#3b82f6,
		#2563eb
	);
}

</style>