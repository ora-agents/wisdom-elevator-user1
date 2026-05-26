<template>

	<view class="page">

		<view class="top-bg"></view>

		<view class="content">

			<!-- 顶部 -->

			<view class="header">

				<view class="title">
					我的工单
				</view>

				<view class="subtitle">
					查看报修进度与处理状态
				</view>

			</view>

			<!-- tabs -->

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

			<!-- 工单列表 -->

			<view
				v-for="item in filteredOrders"
				:key="item.order_id"
				class="order-card"
				@click="openOrder(item)"
			>

				<!-- 顶部 -->

				<view class="order-top">

					<view class="order-id">
						{{ item.order_id }}
					</view>

					<view
						class="status"
						:class="statusClass(item.order_status)"
					>

						{{ item.order_status }}

					</view>

				</view>

				<!-- 设备 -->

				<view class="order-title">
					{{ item.device }}
				</view>

				<!-- 问题 -->

				<view class="order-desc">
					{{ item.problem }}
				</view>

				<!-- 底部 -->

				<view class="order-info">

					<text>
						{{ item.time }}
					</text>

					<text>
						{{ item.location }}
					</text>

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
					order_id: 'WO20250514002',
			
					user_name: '李四',
			
					user_phone: '13900139000',
			
					address: '江苏南京市江宁区XX小区1栋101',
			
					device_type: '电梯',
			
					device_id: 'DEV2025002',
			
					device_brand: '三菱',
			
					device_model: 'LEHY-III',
			
					order_type: '维修',
			
					order_status: '已接单',
			
					repair_name: '赵师傅',
			
					repair_phone: '13600136000',
			
					description: '电梯运行异常',
			
					appoint_date: '2026-05-14',
			
					appoint_time: '10:00',
			
					finish_time: ''
			
				},
			
				{
					order_id: 'WO20250514003',
			
					user_name: '王五',
			
					user_phone: '13700137000',
			
					address: '江苏南京市江宁区XX小区1栋101',
			
					device_type: '电梯',
			
					device_id: 'DEV2025003',
			
					device_brand: '日立',
			
					device_model: 'HGP',
			
					order_type: '保养',
			
					order_status: '已完成',
			
					repair_name: '孙师傅',
			
					repair_phone: '13500135000',
			
					description: '例行保养',
			
					appoint_date: '2026-05-13',
			
					appoint_time: '09:00',
			
					finish_time: '2026-05-13 12:00'
			
				}
			
			]

		}

	},

	computed: {

		filteredOrders() {

			if(this.currentTab === '全部') {

				return this.orders

			}

			return this.orders.filter(item => {

				return item.order_status === this.currentTab

			})

		}

	},

	methods: {

		/* 状态颜色 */

		statusClass(status) {

			if(status === '待接单') {

				return 'wait'

			}

			if(status === '维修中') {

				return 'doing'

			}

			return 'done'

		},

		/* 打开工单详情 */

		openOrder(item) {
		
			uni.navigateTo({
		
				url:
				'/pages/orderDetail/orderDetail?' +
		
				'order_id=' + encodeURIComponent(item.order_id) +
		
				'&user_name=' + encodeURIComponent(item.user_name) +
		
				'&user_phone=' + encodeURIComponent(item.user_phone) +
		
				'&address=' + encodeURIComponent(item.address) +
		
				'&device_type=' + encodeURIComponent(item.device_type) +
		
				'&device_id=' + encodeURIComponent(item.device_id) +
		
				'&device_brand=' + encodeURIComponent(item.device_brand) +
		
				'&device_model=' + encodeURIComponent(item.device_model) +
		
				'&order_type=' + encodeURIComponent(item.order_type) +
		
				'&order_status=' + encodeURIComponent(item.order_status) +
		
				'&repair_name=' + encodeURIComponent(item.repair_name) +
		
				'&repair_phone=' + encodeURIComponent(item.repair_phone) +
		
				'&description=' + encodeURIComponent(item.description) +
		
				'&appoint_date=' + encodeURIComponent(item.appoint_date) +
		
				'&appoint_time=' + encodeURIComponent(item.appoint_time) +
		
				'&finish_time=' + encodeURIComponent(item.finish_time)
		
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

	background:
	linear-gradient(
		145deg,
		#0f3fae,
		#2563eb
	);
}

.content {

	position: relative;

	z-index: 2;

	padding:
	80rpx 28rpx 120rpx;

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

/* tabs */

.tabs {

	margin-top: 40rpx;

	display: flex;

	gap: 16rpx;

	overflow-x: auto;
}

.tab {

	padding:
	16rpx 30rpx;

	background: rgba(255,255,255,0.2);

	color: #ffffff;

	border-radius: 999rpx;

	font-size: 26rpx;

	flex-shrink: 0;
}

.tab.active {

	background: #ffffff;

	color: #2563eb;

	font-weight: 800;
}

/* 工单卡片 */

.order-card {

	background: #ffffff;

	border-radius: 34rpx;

	padding: 30rpx;

	margin-top: 24rpx;

	box-shadow:
	0 12rpx 40rpx rgba(15,23,42,0.08);
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

/* 状态 */

.status {

	padding:
	8rpx 18rpx;

	border-radius: 999rpx;

	font-size: 23rpx;

	font-weight: 700;
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

/* 标题 */

.order-title {

	font-size: 34rpx;

	font-weight: 900;

	color: #0f172a;

	margin-top: 22rpx;
}

/* 描述 */

.order-desc {

	font-size: 25rpx;

	color: #64748b;

	margin-top: 12rpx;

	line-height: 38rpx;
}

/* 底部 */

.order-info {

	margin-top: 24rpx;

	display: flex;

	justify-content: space-between;

	font-size: 23rpx;

	color: #94a3b8;
}

</style>