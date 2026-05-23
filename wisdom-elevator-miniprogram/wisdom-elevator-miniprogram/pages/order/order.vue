<template>
	<view class="page">
		<view class="top-bg"></view>

		<view class="content">
			<view class="header">
				<view class="title">我的工单</view>
				<view class="subtitle">查看报修进度与处理状态</view>
			</view>

			<view class="tabs">
				<view
					v-for="item in tabs"
					:key="item"
					class="tab"
					:class="{ active: currentTab === item }"
					@click="currentTab = item"
				>
					{{ item }}
				</view>
			</view>

			<view
				v-for="item in filteredOrders"
				:key="item.id"
				class="order-card"
				@click="openOrder(item)"
			>
				<view class="order-top">
					<view class="order-id">{{ item.id }}</view>
					<view class="status" :class="statusClass(item.status)">
						{{ item.status }}
					</view>
				</view>

				<view class="order-title">{{ item.device }}</view>
				<view class="order-desc">{{ item.problem }}</view>

				<view class="order-info">
					<text>{{ item.time }}</text>
					<text>{{ item.location }}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			currentTab: '全部',

			tabs: [
				'全部',
				'待接单',
				'维修中',
				'已完成'
			],

			orders: [
				{
					id: 'WO20260522001',
					device: '客厅电梯',
					problem: '运行时出现异响，需要检查',
					status: '待接单',
					location: '客厅',
					time: '2026-05-22 10:30'
				},
				{
					id: 'WO20260522002',
					device: '卧室空调',
					problem: '制冷效果异常',
					status: '维修中',
					location: '卧室',
					time: '2026-05-22 09:20'
				},
				{
					id: 'WO20260521001',
					device: '阳台机器人',
					problem: '设备无法启动',
					status: '已完成',
					location: '阳台',
					time: '2026-05-21 16:10'
				}
			]
		}
	},

	computed: {
		filteredOrders() {
			if (this.currentTab === '全部') {
				return this.orders
			}

			return this.orders.filter(
				item => item.status === this.currentTab
			)
		}
	},

	methods: {
		statusClass(status) {
			if (status === '待接单') {
				return 'wait'
			}

			if (status === '维修中') {
				return 'doing'
			}

			return 'done'
		},

		openOrder(item) {
			uni.navigateTo({
				url: '/pages/orderDetail/orderDetail?id=' + item.id
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
	height: 380rpx;
	background: linear-gradient(145deg, #0f3fae, #2563eb);
}

.content {
	position: relative;
	z-index: 2;
	padding: 80rpx 28rpx 120rpx;
	box-sizing: border-box;
}

.header {
	color: #ffffff;
}

.title {
	font-size: 52rpx;
	font-weight: 900;
}

.subtitle {
	font-size: 24rpx;
	margin-top: 10rpx;
	color: rgba(255,255,255,0.82);
}

.tabs {
	margin-top: 40rpx;
	display: flex;
	gap: 16rpx;
	overflow-x: auto;
}

.tab {
	padding: 16rpx 30rpx;
	background: rgba(255,255,255,0.2);
	color: #ffffff;
	border-radius: 999rpx;
	font-size: 26rpx;
}

.tab.active {
	background: #ffffff;
	color: #2563eb;
	font-weight: 800;
}

.order-card {
	background: #ffffff;
	border-radius: 34rpx;
	padding: 30rpx;
	margin-top: 24rpx;
	box-shadow: 0 12rpx 40rpx rgba(15,23,42,0.08);
}

.order-top {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.order-id {
	font-size: 26rpx;
	color: #64748b;
}

.status {
	padding: 8rpx 18rpx;
	border-radius: 999rpx;
	font-size: 23rpx;
}

.status.wait {
	background: #fff7ed;
	color: #f97316;
}

.status.doing {
	background: #eff6ff;
	color: #2563eb;
}

.status.done {
	background: #ecfdf5;
	color: #10b981;
}

.order-title {
	font-size: 34rpx;
	font-weight: 900;
	color: #0f172a;
	margin-top: 22rpx;
}

.order-desc {
	font-size: 25rpx;
	color: #64748b;
	margin-top: 12rpx;
	line-height: 38rpx;
}

.order-info {
	margin-top: 24rpx;
	display: flex;
	justify-content: space-between;
	font-size: 23rpx;
	color: #94a3b8;
}
</style>