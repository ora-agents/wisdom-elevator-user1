<template>

	<view class="page">

		<!-- 科技背景 -->

		<view class="top-bg"></view>

		<view class="content">

			<!-- 用户信息卡片 -->

			<view class="user-card">

				<!-- 左侧 -->

				<view
					v-if="userInfo"
					class="user-info"
				>

					<view class="avatar">

						{{ userInfo.name.substring(0,1) }}

					</view>

					<view class="user-text">

						<view class="username">

							{{ userInfo.name }}

						</view>

						<view class="phone">

							{{ userInfo.phone }}

						</view>

						<view class="role-row">

							<view class="role-tag">

								{{ userInfo.role }}

							</view>

							<view class="online-dot"></view>

							<view class="online-text">
								在线
							</view>

						</view>

					</view>

				</view>

				<!-- 未登录 -->

				<view
					v-else
					class="login-box"
					@click="goLogin"
				>

					<view class="avatar">
						👤
					</view>

					<view class="login-text">

						<view class="username">
							立即登录
						</view>

						<view class="phone">
							登录后体验完整智能家居功能
						</view>

					</view>

				</view>

				<!-- 编辑 -->

				<view
					class="edit-btn"
					@click="userInfo ? editProfile() : goLogin()"
				>

					{{ userInfo ? '编辑资料' : '登录' }}

				</view>

			</view>

			<!-- 智能统计 -->

			<view class="stats-grid">

				<view class="stats-card blue-card">

					<view class="stats-icon">
						🏠
					</view>

					<view class="stats-value">
						18
					</view>

					<view class="stats-label">
						智能设备
					</view>

				</view>

				<view class="stats-card green-card">

					<view class="stats-icon">
						👥
					</view>

					<view class="stats-value">
						4
					</view>

					<view class="stats-label">
						家庭成员
					</view>

				</view>

				<view class="stats-card orange-card">

					<view class="stats-icon">
						📋
					</view>

					<view class="stats-value">
						3
					</view>

					<view class="stats-label">
						工单记录
					</view>

				</view>

				<view class="stats-card purple-card">

					<view class="stats-icon">
						⚡
					</view>

					<view class="stats-value">
						95%
					</view>

					<view class="stats-label">
						设备在线
					</view>

				</view>

			</view>

			<!-- AI助手 -->

			<view
				class="ai-card"
				@click="goVoice"
			>

				<view class="ai-left">

					<view class="ai-icon">

						🤖

					</view>

					<view>

						<view class="ai-title">
							AI智能管家
						</view>

						<view class="ai-desc">
							支持语音控制与智能联动
						</view>

					</view>

				</view>

				<view class="ai-arrow">
					›
				</view>

			</view>

			<!-- 功能区域 -->

			<view class="menu-section">

				<view class="section-title">
					家庭管理
				</view>

				<view class="menu-list">

					<!-- 家庭空间 -->

					<view class="menu-item">

						<view class="menu-left">

							<view class="menu-icon blue">
								🏠
							</view>

							<view>

								<view class="menu-name">
									家庭空间
								</view>

								<view class="menu-desc">
									管理家庭与空间布局
								</view>

							</view>

						</view>

						<view class="arrow">
							›
						</view>

					</view>

					<!-- 家庭成员 -->

					<view
						class="menu-item"
						@click="goFamily"
					>

						<view class="menu-left">

							<view class="menu-icon purple">
								👥
							</view>

							<view>

								<view class="menu-name">
									家庭成员
								</view>

								<view class="menu-desc">
									邀请家人共享智能设备
								</view>

							</view>

						</view>

						<view class="arrow">
							›
						</view>

					</view>

					<!-- 设备报修 -->

					<view
						class="menu-item"
						@click="goRepair"
					>

						<view class="menu-left">

							<view class="menu-icon orange">
								🛠️
							</view>

							<view>

								<view class="menu-name">
									设备报修
								</view>

								<view class="menu-desc">
									提交设备维修工单
								</view>

							</view>

						</view>

						<view class="arrow">
							›
						</view>

					</view>

					<!-- 我的工单 -->

					<view
						class="menu-item"
						@click="goOrder"
					>

						<view class="menu-left">

							<view class="menu-icon cyan">
								📋
							</view>

							<view>

								<view class="menu-name">
									我的工单
								</view>

								<view class="menu-desc">
									查看维修与处理进度
								</view>

							</view>

						</view>

						<view class="arrow">
							›
						</view>

					</view>

				</view>

			</view>

			<!-- 智能服务 -->

			<view class="menu-section">

				<view class="section-title">
					智能服务
				</view>

				<view class="menu-list">

					<!-- 消息通知 -->

					<view class="menu-item">

						<view class="menu-left">

							<view class="menu-icon green">
								🔔
							</view>

							<view>

								<view class="menu-name">
									消息通知
								</view>

								<view class="menu-desc">
									设备动态与告警提醒
								</view>

							</view>

						</view>

						<view class="menu-right">

							<view class="badge">
								3
							</view>

							<view class="arrow">
								›
							</view>

						</view>

					</view>


					<!-- 电梯报警 -->

					<view
						class="menu-item alarm-item"
						@click="goAlarm"
					>

						<view class="menu-left">

							<view class="menu-icon red">
								🚨
							</view>

							<view>

								<view class="menu-name alarm-name">
									电梯紧急报警
								</view>

								<view class="menu-desc">
									困人、停梯、异常时一键求助
								</view>

							</view>

						</view>

						<view class="arrow">
							›
						</view>

					</view>

					<!-- 智能场景 -->

					<view class="menu-item">

						<view class="menu-left">

							<view class="menu-icon blue">
								⚡
							</view>

							<view>

								<view class="menu-name">
									智能场景
								</view>

								<view class="menu-desc">
									自动化场景联动控制
								</view>

							</view>

						</view>

						<view class="arrow">
							›
						</view>

					</view>

					<!-- 数据中心 -->

					<view class="menu-item">

						<view class="menu-left">

							<view class="menu-icon orange">
								📊
							</view>

							<view>

								<view class="menu-name">
									数据中心
								</view>

								<view class="menu-desc">
									查看设备运行统计
								</view>

							</view>

						</view>

						<view class="arrow">
							›
						</view>

					</view>

				</view>

			</view>
						<!-- 系统 -->

			<view class="menu-section">

				<view class="section-title">
					系统设置
				</view>

				<view class="menu-list">

					<!-- 系统设置 -->

					<view class="menu-item">

						<view class="menu-left">

							<view class="menu-icon cyan">
								⚙️
							</view>

							<view>

								<view class="menu-name">
									系统设置
								</view>

								<view class="menu-desc">
									通知、权限与偏好配置
								</view>

							</view>

						</view>

						<view class="arrow">
							›
						</view>

					</view>

					<!-- 关于我们 -->

					<view class="menu-item">

						<view class="menu-left">

							<view class="menu-icon purple">
								ℹ️
							</view>

							<view>

								<view class="menu-name">
									关于我们
								</view>

								<view class="menu-desc">
									SmartLife 智能家居平台
								</view>

							</view>

						</view>

						<view class="arrow">
							›
						</view>

					</view>

					<!-- 退出登录 -->

					<view
						v-if="userInfo"
						class="menu-item logout"
						@click="logout"
					>

						<view class="menu-left">

							<view class="menu-icon red">
								🚪
							</view>

							<view>

								<view class="menu-name">
									退出登录
								</view>

								<view class="menu-desc">
									退出当前账号
								</view>

							</view>

						</view>

						<view class="arrow">
							›
						</view>

					</view>

				</view>

			</view>

			<!-- 底部 -->

			<view class="footer">

				<view class="footer-logo">
					SmartLife
				</view>

				<view class="footer-text">
					智慧生活 · AI未来家
				</view>

			</view>

		</view>

	</view>

</template>

<script>

export default {

	data() {

		return {

			userInfo: null

		}

	},

	onShow() {

		const user = uni.getStorageSync('userInfo')

		if(user){

			this.userInfo = user

		}else{

			this.userInfo = null

		}

	},

	methods: {

		/* 去登录 */

		goLogin() {

			uni.navigateTo({

				url: '/pages/login/login'

			})

		},

		/* 编辑资料 */

		editProfile() {

			uni.showToast({

				title: '资料编辑开发中',

				icon: 'none'

			})

		},

		/* AI助手 */

		goVoice() {

			uni.switchTab({

				url: '/pages/voice/voice'

			})

		},

		/* 家庭成员 */

		goFamily() {

			uni.navigateTo({

				url: '/pages/family/family'

			})

		},

		/* 报修 */

		goRepair() {

			uni.navigateTo({

				url: '/pages/repair/repair'

			})

		},

		/* 工单 */

		goOrder() {

			uni.navigateTo({

				url: '/pages/order/order'

			})

		},

		/* 电梯报警 */

		goAlarm() {

			uni.showModal({

				title: '电梯紧急报警',

				content: '确认发生电梯困人、异常停梯等紧急情况并立即报警？',

				confirmText: '立即报警',

				confirmColor: '#ef4444',

				success: (res) => {

					if(res.confirm){

						uni.showLoading({

							title: '报警中'

						})

						setTimeout(() => {

							uni.hideLoading()

							uni.showToast({

								title: '报警已发送',

								icon: 'success'

							})

						},1000)

					}

				}

			})

		},

		/* 退出登录 */

		logout() {

			uni.showModal({

				title: '提示',

				content: '确认退出登录？',

				success: (res) => {

					if(res.confirm){

						uni.removeStorageSync('userInfo')

						this.userInfo = null

						uni.showToast({

							title: '已退出',

							icon: 'success'

						})

					}

				}

			})

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

/* 背景 */

.top-bg {

	position: absolute;

	left: 0;
	right: 0;
	top: 0;

	height: 1200rpx;

	background:

	radial-gradient(
		circle at 50% 10%,
		rgba(0,213,255,0.72),
		transparent 34%
	),

	radial-gradient(
		circle at 90% 20%,
		rgba(59,130,246,0.6),
		transparent 32%
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
	80rpx 28rpx 180rpx;

	box-sizing: border-box;
}

/* 用户卡片 */

.user-card {

	background:
	rgba(255,255,255,0.12);

	border:
	1rpx solid rgba(255,255,255,0.14);

	backdrop-filter: blur(20rpx);

	border-radius: 40rpx;

	padding: 34rpx;

	display: flex;
	align-items: center;
	justify-content: space-between;

	box-shadow:
	0 20rpx 60rpx rgba(0,0,0,0.18);
}

.login-box,
.user-info {

	display: flex;
	align-items: center;
}

.avatar {

	width: 120rpx;
	height: 120rpx;

	border-radius: 50%;

	background:
	linear-gradient(
		135deg,
		#3b82f6,
		#2563eb
	);

	display: flex;
	align-items: center;
	justify-content: center;

	font-size: 46rpx;
	font-weight: 900;

	color: #ffffff;

	box-shadow:
	0 12rpx 36rpx rgba(37,99,235,0.5);
}

.user-text,
.login-text {

	margin-left: 24rpx;
}

.username {

	font-size: 40rpx;
	font-weight: 900;

	color: #ffffff;
}

.phone {

	font-size: 24rpx;

	color:
	rgba(255,255,255,0.72);

	margin-top: 10rpx;
}

.role-row {

	display: flex;
	align-items: center;

	margin-top: 16rpx;
}

.role-tag {

	padding:
	6rpx 18rpx;

	border-radius: 999rpx;

	background:
	rgba(59,130,246,0.2);

	color: #bfdbfe;

	font-size: 22rpx;
	font-weight: 700;
}

.online-dot {

	width: 12rpx;
	height: 12rpx;

	border-radius: 50%;

	background: #22c55e;

	margin-left: 18rpx;
}

.online-text {

	font-size: 22rpx;

	color: #4ade80;

	margin-left: 10rpx;
}

.edit-btn {

	height: 72rpx;

	padding:
	0 28rpx;

	border-radius: 999rpx;

	background:
	rgba(255,255,255,0.16);

	display: flex;
	align-items: center;
	justify-content: center;

	color: #ffffff;

	font-size: 24rpx;
	font-weight: 700;
}

/* 数据统计 */

.stats-grid {

	display: grid;

	grid-template-columns:
	repeat(4,1fr);

	gap: 18rpx;

	margin-top: 38rpx;
}

.stats-card {

	height: 180rpx;

	border-radius: 34rpx;

	padding-top: 20rpx;

	box-sizing: border-box;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	color: #ffffff;

	backdrop-filter: blur(20rpx);

	transition: all 0.3s;
}

.stats-card:active {

	transform: scale(0.96);
}

.stats-icon {

	font-size: 42rpx;
}

.stats-value {

	font-size: 42rpx;
	font-weight: 900;

	margin-top: 14rpx;
}

.stats-label {

	font-size: 22rpx;

	margin-top: 10rpx;

	opacity: 0.86;
}

.blue-card {

	background:
	linear-gradient(
		135deg,
		#3b82f6,
		#2563eb
	);
}

.green-card {

	background:
	linear-gradient(
		135deg,
		#22c55e,
		#16a34a
	);
}

.orange-card {

	background:
	linear-gradient(
		135deg,
		#fb923c,
		#f97316
	);
}

.purple-card {

	background:
	linear-gradient(
		135deg,
		#a855f7,
		#7c3aed
	);
}

/* AI卡片 */

.ai-card {

	margin-top: 40rpx;

	height: 160rpx;

	border-radius: 36rpx;

	background:
	linear-gradient(
		135deg,
		rgba(59,130,246,0.9),
		rgba(14,165,233,0.9)
	);

	padding: 30rpx;

	box-sizing: border-box;

	display: flex;
	align-items: center;
	justify-content: space-between;

	box-shadow:
	0 20rpx 60rpx rgba(37,99,235,0.4);

	transition: all 0.3s;
}

.ai-card:active {

	transform: scale(0.98);
}

.ai-left {

	display: flex;
	align-items: center;
}

.ai-icon {

	width: 88rpx;
	height: 88rpx;

	border-radius: 28rpx;

	background:
	rgba(255,255,255,0.18);

	display: flex;
	align-items: center;
	justify-content: center;

	font-size: 42rpx;

	margin-right: 22rpx;
}

.ai-title {

	font-size: 34rpx;
	font-weight: 900;

	color: #ffffff;
}

.ai-desc {

	font-size: 24rpx;

	color:
	rgba(255,255,255,0.82);

	margin-top: 12rpx;
}

.ai-arrow {

	font-size: 44rpx;

	color: #ffffff;
}

/* 功能区 */

.menu-section {

	margin-top: 42rpx;
}

.section-title {

	font-size: 38rpx;
	font-weight: 900;

	color: #ffffff;

	margin-bottom: 24rpx;
}

.menu-list {

	background:
	rgba(255,255,255,0.1);

	border:
	1rpx solid rgba(255,255,255,0.12);

	backdrop-filter: blur(20rpx);

	border-radius: 36rpx;

	overflow: hidden;
}
.menu-item {

	min-height: 118rpx;

	padding:
	24rpx 28rpx;

	box-sizing: border-box;

	display: flex;
	align-items: center;
	justify-content: space-between;

	border-bottom:
	1rpx solid rgba(255,255,255,0.08);

	transition: all 0.3s;
}

.menu-item:last-child {

	border-bottom: none;
}

.menu-item:active {

	background:
	rgba(255,255,255,0.06);
}

.menu-left {

	display: flex;
	align-items: center;
}

.menu-icon {

	width: 72rpx;
	height: 72rpx;

	border-radius: 22rpx;

	display: flex;
	align-items: center;
	justify-content: center;

	font-size: 34rpx;

	margin-right: 22rpx;

	color: #ffffff;
}

.menu-name {

	font-size: 30rpx;
	font-weight: 700;

	color: #ffffff;
}

.menu-desc {

	font-size: 22rpx;

	color:
	rgba(255,255,255,0.68);

	margin-top: 10rpx;
}

.menu-right {

	display: flex;
	align-items: center;
}

.arrow {

	font-size: 40rpx;

	color:
	rgba(255,255,255,0.4);
}

.badge {

	min-width: 34rpx;
	height: 34rpx;

	padding: 0 10rpx;

	border-radius: 999rpx;

	background: #ef4444;

	display: flex;
	align-items: center;
	justify-content: center;

	color: #ffffff;

	font-size: 20rpx;

	margin-right: 18rpx;
}

/* icon颜色 */

.blue {

	background:
	linear-gradient(
		135deg,
		#3b82f6,
		#2563eb
	);
}

.purple {

	background:
	linear-gradient(
		135deg,
		#a855f7,
		#7c3aed
	);
}

.orange {

	background:
	linear-gradient(
		135deg,
		#fb923c,
		#f97316
	);
}

.green {

	background:
	linear-gradient(
		135deg,
		#22c55e,
		#16a34a
	);
}

.cyan {

	background:
	linear-gradient(
		135deg,
		#06b6d4,
		#0891b2
	);
}

.red {

	background:
	linear-gradient(
		135deg,
		#ef4444,
		#dc2626
	);
}

/* 退出 */

.logout .menu-name {

	color: #fecaca;
}

.logout .menu-desc {

	color: rgba(254,202,202,0.76);
}

/* 底部 */

.footer {

	margin-top: 60rpx;

	display: flex;
	flex-direction: column;
	align-items: center;
}

.footer-logo {

	font-size: 34rpx;
	font-weight: 900;

	color: #ffffff;
}

.footer-text {

	font-size: 22rpx;

	color:
	rgba(255,255,255,0.58);

	margin-top: 12rpx;
}


/* 电梯报警 */

.alarm-item {

	background:
	linear-gradient(
		135deg,
		rgba(239,68,68,0.18),
		rgba(185,28,28,0.08)
	);
}

.alarm-name {

	color: #fecaca;
}

</style>