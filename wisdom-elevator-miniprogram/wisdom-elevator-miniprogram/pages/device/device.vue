<template>

	<view class="page">

		<!-- 顶部渐变背景 -->
		<view class="top-bg"></view>

		<view class="content">

			<!-- 顶部 -->
			<view class="header">

				<view>

					<view class="title">
						我的设备
					</view>

					<view class="subtitle">
						家庭智能设备控制中心
					</view>

				</view>

				<view
					class="add-btn"
					@click="goAddDevice"
				>
					＋
				</view>

			</view>

			<!-- 搜索 -->
			<view class="search-box">

				<view class="search-icon">
					🔍
				</view>

				<input
					v-model="keyword"
					class="search-input"
					placeholder="搜索设备名称"
				/>

			</view>

			<!-- 状态统计 -->
			<view class="stats-wrap">

				<view class="stats-card">

					<view class="stats-num">
						{{ deviceList.length }}
					</view>

					<view class="stats-label">
						全部设备
					</view>

				</view>

				<view class="stats-card">

					<view class="stats-num green">
						{{ onlineCount }}
					</view>

					<view class="stats-label">
						在线设备
					</view>

				</view>

				<view class="stats-card">

					<view class="stats-num orange">
						{{ offlineCount }}
					</view>

					<view class="stats-label">
						离线设备
					</view>

				</view>

			</view>

			<!-- 分类 -->
			<view class="section-title">
				设备分类
			</view>

			<view class="device-grid">

				<view
					class="device-card"
					v-for="item in filteredTypes"
					:key="item.name"
					@click="openType(item)"
				>

					<view class="device-top">

						<view
							class="device-icon"
							:style="{
								background:item.bg
							}"
						>
							{{ item.icon }}
						</view>

						<view class="device-count">
							{{ item.count }}
						</view>

					</view>

					<view class="device-name">
						{{ item.name }}
					</view>

					<view class="device-desc">
						{{ item.desc }}
					</view>

				</view>

			</view>

			<!-- 常用设备 -->
			<view class="section-title">
				全部设备
			</view>

			<view class="real-device-list">

				<view
					class="real-device-card"
					v-for="item in filteredDevices"
					:key="item.name"
					@click="goDetail(item)"
				>

					<view class="real-left">

						<view
							class="real-icon"
							:style="{
								background:item.bg
							}"
						>
							{{ item.icon }}
						</view>

						<view>

							<view class="real-name">
								{{ item.name }}
							</view>

							<view class="real-desc">
								{{ item.room }} · {{ item.desc }}
							</view>

						</view>

					</view>

					<view class="real-right">

						<view
							class="status-tag"
							:class="
								item.online
								? 'online'
								: 'offline'
							"
						>
							{{ item.online ? '在线' : '离线' }}
						</view>

						<switch
							:checked="item.online"
							color="#2563eb"
							scale="0.7"
							@click.stop="toggleDevice(item)"
						/>

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

			keyword: '',

			typeList: [

				{
					name: '空调',
					icon: '❄️',
					count: '3台',
					desc: '客厅 / 卧室 / 三楼',
					bg: '#dbeafe'
				},

				{
					name: '灯光',
					icon: '💡',
					count: '12盏',
					desc: '全屋灯光控制',
					bg: '#fef3c7'
				},

				{
					name: '机器人',
					icon: '🤖',
					count: '3台',
					desc: '扫地 / 清洁',
					bg: '#ede9fe'
				},

				{
					name: '门禁',
					icon: '🚪',
					count: '2个',
					desc: '门锁系统',
					bg: '#dcfce7'
				},

				{
					name: '电梯',
					icon: '🛗',
					count: '3台',
					desc: '家庭电梯',
					bg: '#cffafe'
				},

				{
					name: '安防',
					icon: '🛡️',
					count: '5个',
					desc: '摄像 / 报警',
					bg: '#ffedd5'
				}

			],

			deviceList: [

				{
					name: '客厅空调',
					room: '客厅',
					type: 'ac',
					icon: '❄️',
					bg: '#dbeafe',
					desc: '26℃ · 制冷模式',
					online: true
				},

				{
					name: '卧室灯光',
					room: '卧室',
					type: 'light',
					icon: '💡',
					bg: '#fef3c7',
					desc: '亮度 80%',
					online: true
				},

				{
					name: '厨房门锁',
					room: '厨房',
					type: 'door',
					icon: '🚪',
					bg: '#dcfce7',
					desc: '已上锁',
					online: true
				},

				{
					name: '客厅电梯',
					room: '客厅',
					type: 'elevator',
					icon: '🛗',
					bg: '#cffafe',
					desc: '运行正常',
					online: true
				},

				{
					name: '阳台机器人',
					room: '阳台',
					type: 'robot',
					icon: '🤖',
					bg: '#ede9fe',
					desc: '待机中',
					online: false
				}

			]

		}

	},

	computed: {

		filteredTypes() {

			if(!this.keyword) {

				return this.typeList

			}

			return this.typeList.filter(item => {

				return item.name.includes(this.keyword)

			})

		},

		filteredDevices() {

			if(!this.keyword) {

				return this.deviceList

			}

			return this.deviceList.filter(item => {

				return (
					item.name.includes(this.keyword) ||
					item.room.includes(this.keyword)
				)

			})

		},

		onlineCount() {

			return this.deviceList.filter(
				item => item.online
			).length

		},

		offlineCount() {

			return this.deviceList.filter(
				item => !item.online
			).length

		}

	},

	methods: {

		/* 分类进入 */

		openType(item) {

			const map = {

				'空调': {
					name: '客厅空调',
					room: '客厅',
					type: 'ac'
				},

				'灯光': {
					name: '卧室灯光',
					room: '卧室',
					type: 'light'
				},

				'机器人': {
					name: '阳台机器人',
					room: '阳台',
					type: 'robot'
				},

				'门禁': {
					name: '厨房门锁',
					room: '厨房',
					type: 'door'
				},

				'电梯': {
					name: '客厅电梯',
					room: '客厅',
					type: 'elevator'
				},

				'安防': {
					name: '智能安防',
					room: '大门',
					type: 'door'
				}

			}

			const device = map[item.name]

			if(!device) {

				uni.showToast({
					title: '设备未配置',
					icon: 'none'
				})

				return

			}

			this.goDetail(device)

		},

		/* 设备详情 */

		goDetail(item) {

			uni.navigateTo({

				url:

				'/pages/deviceDetail/deviceDetail?' +

				'name=' +
				encodeURIComponent(item.name) +

				'&location=' +
				encodeURIComponent(item.room) +

				'&type=' +
				encodeURIComponent(item.type)

			})

		},

		/* 开关 */

		toggleDevice(item) {

			item.online = !item.online

			uni.showToast({

				title:
				item.online
				? '设备已开启'
				: '设备已关闭',

				icon: 'none'

			})

		},

		/* 添加设备 */

		goAddDevice() {

			uni.showToast({

				title: '添加设备开发中',

				icon: 'none'

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
}

.top-bg {

	height: 420rpx;

	background:
	linear-gradient(
		145deg,
		#0f3fae,
		#2563eb
	);
}

.content {

	position: relative;

	margin-top: -260rpx;

	padding:
	40rpx 28rpx 140rpx;
}

/* 顶部 */

.header {

	display: flex;

	align-items: center;

	justify-content: space-between;
}

.title {

	font-size: 56rpx;

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

	border-radius: 22rpx;

	background:
	rgba(255,255,255,0.2);

	color: #ffffff;

	display: flex;
	align-items: center;
	justify-content: center;

	font-size: 42rpx;
}

/* 搜索 */

.search-box {

	height: 92rpx;

	background: #ffffff;

	border-radius: 26rpx;

	margin-top: 40rpx;

	display: flex;
	align-items: center;

	padding: 0 24rpx;

	box-shadow:
	0 12rpx 40rpx rgba(15,23,42,0.08);
}

.search-icon {

	font-size: 30rpx;

	margin-right: 18rpx;
}

.search-input {

	flex: 1;

	font-size: 28rpx;
}

/* 统计 */

.stats-wrap {

	display: flex;

	margin-top: 30rpx;
}

.stats-card {

	flex: 1;

	background: #ffffff;

	border-radius: 26rpx;

	padding: 28rpx 20rpx;

	margin-right: 18rpx;

	text-align: center;

	box-shadow:
	0 12rpx 40rpx rgba(15,23,42,0.08);
}

.stats-card:last-child {

	margin-right: 0;
}

.stats-num {

	font-size: 44rpx;

	font-weight: 900;

	color: #2563eb;
}

.stats-num.green {

	color: #16a34a;
}

.stats-num.orange {

	color: #f97316;
}

.stats-label {

	font-size: 22rpx;

	color: #64748b;

	margin-top: 12rpx;
}

/* 分类 */

.section-title {

	font-size: 34rpx;

	font-weight: 900;

	color: #0f172a;

	margin:
	42rpx 0 24rpx;
}

.device-grid {

	display: grid;

	grid-template-columns:
	repeat(2,1fr);

	gap: 22rpx;
}

.device-card {

	background: #ffffff;

	border-radius: 34rpx;

	padding: 28rpx;

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

.device-count {

	font-size: 24rpx;

	color: #64748b;
}

.device-name {

	font-size: 34rpx;

	font-weight: 900;

	color: #0f172a;

	margin-top: 28rpx;
}

.device-desc {

	font-size: 24rpx;

	color: #64748b;

	margin-top: 10rpx;

	line-height: 36rpx;
}

/* 设备列表 */

.real-device-list {

	margin-top: 10rpx;
}

.real-device-card {

	background: #ffffff;

	border-radius: 30rpx;

	padding: 24rpx;

	margin-bottom: 22rpx;

	display: flex;

	align-items: center;

	justify-content: space-between;

	box-shadow:
	0 12rpx 40rpx rgba(15,23,42,0.08);
}

.real-left {

	display: flex;

	align-items: center;
}

.real-icon {

	width: 76rpx;
	height: 76rpx;

	border-radius: 22rpx;

	display: flex;
	align-items: center;
	justify-content: center;

	font-size: 40rpx;

	margin-right: 22rpx;
}

.real-name {

	font-size: 30rpx;

	font-weight: 900;

	color: #0f172a;
}

.real-desc {

	font-size: 24rpx;

	color: #64748b;

	margin-top: 10rpx;
}

.real-right {

	display: flex;

	align-items: center;
}

.status-tag {

	padding:
	8rpx 16rpx;

	border-radius: 999rpx;

	font-size: 22rpx;

	margin-right: 12rpx;
}

.online {

	background: #dcfce7;

	color: #16a34a;
}

.offline {

	background: #f1f5f9;

	color: #64748b;
}

</style>