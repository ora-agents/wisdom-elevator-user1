<template>

	<view class="page">

		<!-- 顶部 -->
		<view class="top-bg"></view>

		<view class="content">

			<!-- 标题 -->
			<view class="header">

				<view class="title">
					工单详情
				</view>

				<view class="subtitle">
					查看维修进度与处理状态
				</view>

			</view>

			<!-- 工单卡片 -->
			<view class="card">

				<view class="row">

					<view class="label">
						工单编号
					</view>

					<view class="value">
						{{ order.id }}
					</view>

				</view>

				<view class="row">

					<view class="label">
						报修设备
					</view>

					<view class="value">
						{{ order.device }}
					</view>

				</view>

				<view class="row">

					<view class="label">
						故障问题
					</view>

					<view class="value">
						{{ order.problem }}
					</view>

				</view>

				<view class="row">

					<view class="label">
						安装位置
					</view>

					<view class="value">
						{{ order.location }}
					</view>

				</view>

				<view class="row">

					<view class="label">
						当前状态
					</view>

					<view class="status">
						{{ order.status }}
					</view>

				</view>

			</view>

			<!-- 时间轴 -->
			<view class="timeline-card">

				<view class="timeline-title">
					处理进度
				</view>

				<view class="timeline">

					<view
						class="timeline-item"
						v-for="(item,index) in timeline"
						:key="index"
					>

						<view class="dot"></view>

						<view class="line" v-if="index !== timeline.length - 1"></view>

						<view class="timeline-content">

							<view class="timeline-text">
								{{ item.text }}
							</view>

							<view class="timeline-time">
								{{ item.time }}
							</view>

						</view>

					</view>

				</view>

			</view>

			<!-- 联系 -->
			<view class="bottom-actions">

				<view
					class="action-btn blue"
					@click="callPhone"
				>
					联系维修员
				</view>

				<view
					class="action-btn orange"
					@click="finishOrder"
				>
					确认完成
				</view>

			</view>

		</view>

	</view>

</template>

<script>

export default {

	data() {

		return {

			order: {

				id: 'WO20260522001',

				device: '客厅电梯',

				problem: '运行时出现异响',

				location: '客厅',

				status: '维修中'

			},

			timeline: [

				{
					text: '用户提交报修',
					time: '2026-05-22 10:20'
				},

				{
					text: '物业已接单',
					time: '2026-05-22 10:35'
				},

				{
					text: '维修人员已上门',
					time: '2026-05-22 11:10'
				}

			]

		}

	},

	methods: {

		callPhone() {

			uni.makePhoneCall({

				phoneNumber: '13800138000'

			})

		},

		finishOrder() {

			uni.showToast({

				title: '已确认完成',

				icon: 'success'

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

	height: 360rpx;

	background:
	linear-gradient(145deg,#0f3fae,#2563eb);
}

.content {

	position: relative;
	z-index: 2;

	padding:
	80rpx 28rpx 140rpx;

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

	color:
	rgba(255,255,255,0.82);
}

.card {

	margin-top: 40rpx;

	background: #ffffff;

	border-radius: 34rpx;

	padding: 30rpx;

	box-shadow:
	0 12rpx 40rpx rgba(15,23,42,0.08);
}

.row {

	display: flex;
	justify-content: space-between;

	margin-bottom: 24rpx;
}

.row:last-child {

	margin-bottom: 0;
}

.label {

	font-size: 26rpx;

	color: #64748b;
}

.value {

	font-size: 28rpx;
	font-weight: 700;

	color: #0f172a;
}

.status {

	padding:
	8rpx 20rpx;

	border-radius: 999rpx;

	background: #eff6ff;

	color: #2563eb;

	font-size: 24rpx;
}

.timeline-card {

	margin-top: 28rpx;

	background: #ffffff;

	border-radius: 34rpx;

	padding: 30rpx;

	box-shadow:
	0 12rpx 40rpx rgba(15,23,42,0.08);
}

.timeline-title {

	font-size: 32rpx;
	font-weight: 900;

	color: #0f172a;

	margin-bottom: 30rpx;
}

.timeline-item {

	position: relative;

	padding-left: 40rpx;

	padding-bottom: 40rpx;
}

.dot {

	position: absolute;
	left: 0;
	top: 8rpx;

	width: 20rpx;
	height: 20rpx;

	border-radius: 50%;

	background: #2563eb;
}

.line {

	position: absolute;
	left: 9rpx;
	top: 28rpx;

	width: 2rpx;
	height: 100%;

	background: #cbd5e1;
}

.timeline-text {

	font-size: 28rpx;
	font-weight: 700;

	color: #0f172a;
}

.timeline-time {

	font-size: 24rpx;

	color: #94a3b8;

	margin-top: 8rpx;
}

.bottom-actions {

	display: flex;

	gap: 20rpx;

	margin-top: 30rpx;
}

.action-btn {

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

.blue {

	background:
	linear-gradient(135deg,#3b82f6,#2563eb);
}

.orange {

	background:
	linear-gradient(135deg,#fb923c,#f97316);
}

</style>