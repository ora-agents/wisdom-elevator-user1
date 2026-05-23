<template>

	<view class="page">

		<!-- 科技背景 -->

		<view class="bg"></view>

		<view class="content">

			<!-- Logo -->

			<view class="logo-box">

				<view class="logo-circle">
					🏠
				</view>

				<view class="title">
					SmartLife
				</view>

				<view class="subtitle">
					智慧家居控制中心
				</view>

			</view>

			<!-- 登录卡片 -->

			<view class="login-card">

				<view class="card-title">
					欢迎登录
				</view>

				<!-- 手机号 -->

				<view class="input-box">

					<view class="input-label">
						手机号
					</view>

					<input
						v-model="phone"
						class="input"
						placeholder="请输入手机号"
						type="number"
					/>

				</view>

				<!-- 密码 -->

				<view class="input-box">

					<view class="input-label">
						密码
					</view>

					<input
						v-model="password"
						class="input"
						placeholder="请输入密码"
						password
					/>

				</view>

				<!-- 登录按钮 -->

				<view
					class="login-btn"
					@click="login"
				>

					登录

				</view>

				<!-- 微信登录 -->

				<view
					class="wechat-btn"
					@click="wechatLogin"
				>

					微信快捷登录

				</view>

				<!-- 游客体验 -->

				<view
					class="guest-btn"
					@click="guestLogin"
				>

					游客体验

				</view>

				<!-- 底部协议 -->

				<view class="bottom-text">

					登录即代表同意《用户协议》与《隐私政策》

				</view>

			</view>

		</view>

	</view>

</template>

<script>

export default {

	data() {

		return {

			phone: '',

			password: ''

		}

	},

	methods: {

		/* 普通登录 */

		login() {

			if(!this.phone){

				uni.showToast({

					title: '请输入手机号',

					icon: 'none'

				})

				return

			}

			if(this.phone.length !== 11){

				uni.showToast({

					title: '手机号格式错误',

					icon: 'none'

				})

				return

			}

			if(!this.password){

				uni.showToast({

					title: '请输入密码',

					icon: 'none'

				})

				return

			}

			uni.showLoading({

				title: '登录中'

			})

			setTimeout(() => {

				uni.hideLoading()

				/* 保存用户信息 */

				uni.setStorageSync(

					'userInfo',

					{

						name: '王先生',

						phone: this.phone,

						role: '管理员',

						avatar: ''

					}

				)

				uni.showToast({

					title: '登录成功',

					icon: 'success'

				})

				setTimeout(() => {

					uni.switchTab({

						url: '/pages/mine/mine'

					})

				}, 800)

			}, 1200)

		},

		/* 微信登录 */

		wechatLogin() {

			uni.showLoading({

				title: '微信授权中'

			})

			setTimeout(() => {

				uni.hideLoading()

				uni.setStorageSync(

					'userInfo',

					{

						name: '微信用户',

						phone: '18888888888',

						role: '家庭成员',

						avatar: ''

					}

				)

				uni.showToast({

					title: '登录成功',

					icon: 'success'

				})

				setTimeout(() => {

					uni.switchTab({

						url: '/pages/mine/mine'

					})

				}, 800)

			}, 1200)

		},

		/* 游客模式 */

		guestLogin() {

			uni.setStorageSync(

				'userInfo',

				{

					name: '游客用户',

					phone: '未绑定',

					role: '访客',

					avatar: ''

				}

			)

			uni.showToast({

				title: '已进入体验模式',

				icon: 'success'

			})

			setTimeout(() => {

				uni.switchTab({

					url: '/pages/home/home'

				})

			}, 800)

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

.bg {

	position: absolute;

	width: 100%;
	height: 100%;

	background:

	radial-gradient(
		circle at 50% 10%,
		rgba(0,213,255,0.75),
		transparent 34%
	),

	radial-gradient(
		circle at 90% 30%,
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
	160rpx 40rpx;
}

/* logo */

.logo-box {

	display: flex;
	flex-direction: column;
	align-items: center;

	margin-bottom: 80rpx;
}

.logo-circle {

	width: 160rpx;
	height: 160rpx;

	border-radius: 50%;

	background:
	linear-gradient(
		135deg,
		#3b82f6,
		#06b6d4
	);

	display: flex;
	align-items: center;
	justify-content: center;

	font-size: 72rpx;

	box-shadow:
	0 0 60rpx rgba(59,130,246,0.8);
}

.title {

	font-size: 56rpx;
	font-weight: 900;

	color: #ffffff;

	margin-top: 34rpx;
}

.subtitle {

	font-size: 26rpx;

	color:
	rgba(255,255,255,0.76);

	margin-top: 12rpx;
}

/* 登录卡片 */

.login-card {

	background:
	rgba(255,255,255,0.12);

	border:
	1rpx solid rgba(255,255,255,0.14);

	backdrop-filter: blur(20rpx);

	border-radius: 40rpx;

	padding: 40rpx;
}

.card-title {

	font-size: 40rpx;
	font-weight: 900;

	color: #ffffff;

	margin-bottom: 40rpx;
}

.input-box {

	margin-bottom: 30rpx;
}

.input-label {

	font-size: 24rpx;

	color:
	rgba(255,255,255,0.72);

	margin-bottom: 14rpx;
}

.input {

	height: 92rpx;

	border-radius: 24rpx;

	background:
	rgba(255,255,255,0.12);

	padding: 0 24rpx;

	color: #ffffff;

	font-size: 28rpx;
}

/* 登录按钮 */

.login-btn {

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

	margin-top: 20rpx;

	box-shadow:
	0 10rpx 30rpx rgba(37,99,235,0.4);
}

.wechat-btn {

	height: 92rpx;

	border-radius: 24rpx;

	background:
	linear-gradient(
		135deg,
		#22c55e,
		#16a34a
	);

	display: flex;
	align-items: center;
	justify-content: center;

	color: #ffffff;

	font-size: 30rpx;
	font-weight: 700;

	margin-top: 24rpx;
}

.guest-btn {

	height: 92rpx;

	border-radius: 24rpx;

	background:
	rgba(255,255,255,0.12);

	border:
	1rpx solid rgba(255,255,255,0.14);

	display: flex;
	align-items: center;
	justify-content: center;

	color: #ffffff;

	font-size: 28rpx;

	margin-top: 24rpx;
}

/* 底部 */

.bottom-text {

	text-align: center;

	font-size: 22rpx;

	color:
	rgba(255,255,255,0.62);

	margin-top: 34rpx;

	line-height: 36rpx;
}

</style>