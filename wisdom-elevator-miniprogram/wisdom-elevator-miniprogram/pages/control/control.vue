<template>
	<view class="page">
		<view class="top-bg"></view>

		<view class="content">
			<view class="header">
				<view>
					<view class="title">{{ name }}</view>
					<view class="subtitle">{{ location }} · {{ status }}</view>
				</view>

				<switch :checked="isOn" color="#2563eb" @change="togglePower" />
			</view>

			<view class="control-card">
				<view class="circle">
					<view class="temp">{{ temp }}°</view>
					<view class="mode">{{ mode }}</view>
				</view>

				<view class="temp-actions">
					<view class="round-btn" @click="minusTemp">－</view>
					<view class="round-btn" @click="plusTemp">＋</view>
				</view>
			</view>

			<view class="panel">
				<view class="panel-title">运行模式</view>

				<view class="mode-grid">
					<view
						v-for="item in modes"
						:key="item"
						class="mode-item"
						:class="{ active: mode === item }"
						@click="mode = item"
					>
						{{ item }}
					</view>
				</view>
			</view>

			<view class="panel">
				<view class="panel-title">风速</view>

				<view class="mode-grid">
					<view
						v-for="item in winds"
						:key="item"
						class="mode-item"
						:class="{ active: wind === item }"
						@click="wind = item"
					>
						{{ item }}
					</view>
				</view>
			</view>

			<view class="bottom-actions">
				<view class="action repair" @click="goRepair">设备报修</view>
				<view class="action update" @click="updateDevice">更新状态</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			name: '客厅空调',
			location: '客厅',
			status: '运行正常',

			isOn: true,
			temp: 26,
			mode: '制冷',
			wind: '中风',

			modes: ['制冷', '制热', '送风', '除湿'],
			winds: ['低风', '中风', '高风', '自动']
		}
	},

	onLoad(option) {
		this.name = option.name || '客厅空调'
		this.location = option.location || '客厅'
	},

	methods: {
		togglePower(e) {
			this.isOn = e.detail.value
			this.status = this.isOn ? '运行正常' : '已关闭'
		},

		minusTemp() {
			if (this.temp > 16) {
				this.temp--
			}
		},

		plusTemp() {
			if (this.temp < 30) {
				this.temp++
			}
		},

		goRepair() {
			uni.navigateTo({
				url: '/pages/repair/repair?name=' + this.name
			})
		},

		updateDevice() {
			uni.showToast({
				title: '状态已更新',
				icon: 'success'
			})
		}
	}
}
</script>

<style>
page {
	background: #071b61;
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
	height: 100vh;
	background:
		radial-gradient(circle at 50% 18%, rgba(0, 213, 255, 0.55), transparent 32%),
		radial-gradient(circle at 90% 30%, rgba(59, 130, 246, 0.45), transparent 35%),
		linear-gradient(145deg, #06134f 0%, #0b3aa0 48%, #03174d 100%);
}

.content {
	position: relative;
	z-index: 2;
	padding: 90rpx 28rpx 140rpx;
	box-sizing: border-box;
}

.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: #ffffff;
}

.title {
	font-size: 52rpx;
	font-weight: 900;
}

.subtitle {
	font-size: 26rpx;
	margin-top: 12rpx;
	color: rgba(255,255,255,0.78);
}

.control-card {
	margin-top: 50rpx;
	background: rgba(255,255,255,0.16);
	border: 1rpx solid rgba(255,255,255,0.22);
	border-radius: 40rpx;
	padding: 50rpx 30rpx;
	backdrop-filter: blur(20rpx);
	box-shadow: 0 20rpx 60rpx rgba(0,0,0,0.18);
}

.circle {
	width: 360rpx;
	height: 360rpx;
	margin: 0 auto;
	border-radius: 50%;
	background:
		radial-gradient(circle, rgba(255,255,255,0.96), rgba(239,246,255,0.88));
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	box-shadow:
		0 20rpx 60rpx rgba(37,99,235,0.28),
		inset 0 8rpx 24rpx rgba(255,255,255,0.8);
}

.temp {
	font-size: 92rpx;
	font-weight: 900;
	color: #2563eb;
}

.mode {
	font-size: 28rpx;
	color: #64748b;
	margin-top: 12rpx;
}

.temp-actions {
	display: flex;
	justify-content: center;
	gap: 60rpx;
	margin-top: 42rpx;
}

.round-btn {
	width: 92rpx;
	height: 92rpx;
	border-radius: 50%;
	background: rgba(255,255,255,0.92);
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 44rpx;
	font-weight: 800;
	color: #2563eb;
	box-shadow: 0 10rpx 30rpx rgba(15,23,42,0.14);
}

.panel {
	margin-top: 30rpx;
	background: #ffffff;
	border-radius: 34rpx;
	padding: 30rpx;
	box-shadow: 0 16rpx 40rpx rgba(0,21,80,0.16);
}

.panel-title {
	font-size: 32rpx;
	font-weight: 900;
	color: #0f172a;
	margin-bottom: 24rpx;
}

.mode-grid {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 16rpx;
}

.mode-item {
	height: 72rpx;
	border-radius: 18rpx;
	background: #f1f5f9;
	color: #64748b;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 25rpx;
}

.mode-item.active {
	background: linear-gradient(135deg, #3b82f6, #2563eb);
	color: #ffffff;
	font-weight: 800;
}

.bottom-actions {
	display: flex;
	gap: 20rpx;
	margin-top: 34rpx;
}

.action {
	flex: 1;
	height: 92rpx;
	border-radius: 24rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 30rpx;
	font-weight: 800;
	color: #ffffff;
}

.repair {
	background: linear-gradient(135deg, #fb923c, #f97316);
}

.update {
	background: linear-gradient(135deg, #3b82f6, #2563eb);
}
</style>