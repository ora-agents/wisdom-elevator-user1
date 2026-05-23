<template>

	<view class="page">

		<!-- 背景 -->
		<view class="bg"></view>

		<view class="content">

			<!-- 顶部 -->
			<view class="header">

				<view class="title">
					AI语音助手
				</view>

				<view class="subtitle">
					您的智能家居小管家
				</view>

			</view>

			<!-- AI状态 -->
			<view class="ai-card">

				<view class="ai-circle">

					<view class="ai-dot"></view>

				</view>

				<view class="ai-info">

					<view class="ai-name">
						您好，我是AI助手
					</view>

					<view class="ai-desc">
						您可以这样对我说...
					</view>

				</view>

			</view>

			<!-- 快捷指令 -->
			<view class="quick">

				<view
					class="quick-btn"
					v-for="item in quickList"
					:key="item"
					@click="sendQuick(item)"
				>

					{{ item }}

				</view>

			</view>

			<!-- 对话区域 -->
			<view class="chat-title">
				对话记录
			</view>

			<scroll-view
				scroll-y
				class="chat"
			>

				<view
					v-for="(msg,index) in messages"
					:key="index"
					class="msg"
					:class="msg.role"
				>

					<view class="bubble">

						{{ msg.text }}

					</view>

				</view>

			</scroll-view>

			<!-- 操作指南 -->
			<view class="guide-card">

				<view class="guide-title">
					操作指南
				</view>

				<view class="guide-list">

					<view class="guide-item">
						🎤 点击底部语音按钮
					</view>

					<view class="guide-item">
						💬 说出控制指令
					</view>

					<view class="guide-item">
						🤖 AI自动识别设备
					</view>

					<view class="guide-item">
						⚡ 自动执行设备控制
					</view>

				</view>

			</view>

		</view>

		<!-- 底部中央语音按钮 -->
		<view class="voice-fixed">

			<view
				class="voice-circle"
				@click="mockVoice"
			>

				🎤

			</view>

			<view class="voice-text">
				点击开始说话
			</view>

		</view>

	</view>

</template>

<script>

export default {

	data() {

		return {

			messages: [

				{
					role: 'ai',
					text:
					'您好，我是 SmartLife AI，可帮您控制家庭设备'
				}

			],

			quickList: [

				'打开客厅空调',

				'关闭全部灯光',

				'查看电梯状态',

				'启动清扫机器人',

				'开启回家模式',

				'关闭卧室灯光'

			]

		}

	},

	methods: {

		/* 快捷发送 */

		sendQuick(text) {

			this.messages.push({

				role: 'user',

				text

			})

			setTimeout(() => {

				this.reply(text)

			}, 500)

		},

		/* 模拟语音 */

		mockVoice() {

			uni.showToast({

				title: 'AI正在识别语音...',

				icon: 'none'

			})

			setTimeout(() => {

				this.sendQuick('打开客厅空调')

			}, 1000)

		},

		/* AI回复 */

		reply(text) {

			let res = '已为您处理'

			let target = null

			/* 空调 */

			if(text.includes('空调')) {

				res =
				'已为您打开客厅空调，当前温度26℃，正在进入控制面板'

				target = {

					name: '客厅空调',

					location: '客厅'

				}

			}

			/* 灯光 */

			if(text.includes('灯')) {

				res =
				'已关闭对应区域灯光'

			}

			/* 电梯 */

			if(text.includes('电梯')) {

				res =
				'客厅电梯运行正常，正在进入设备控制页'

				target = {

					name: '客厅电梯',

					location: '客厅'

				}

			}

			/* 机器人 */

			if(text.includes('机器人')) {

				res =
				'清洁机器人已启动，正在进入控制面板'

				target = {

					name: '客厅机器人',

					location: '客厅'

				}

			}

			/* 回家模式 */

			if(text.includes('回家')) {

				res =
				'回家模式已开启，灯光与空调已自动打开'

			}

			/* AI回复 */

			this.messages.push({

				role: 'ai',

				text: res

			})

			/* 自动跳转 */

			if(target) {

				setTimeout(() => {

					uni.navigateTo({

						url:

						'/pages/control/control?' +

						'name=' + target.name +

						'&location=' + target.location

					})

				}, 1200)

			}

		}

	}

}

</script>

<style>

page {
	background: #020617;
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
		circle at 20% 20%,
		rgba(59,130,246,0.45),
		transparent 30%
	),

	radial-gradient(
		circle at 80% 40%,
		rgba(0,213,255,0.35),
		transparent 30%
	),

	linear-gradient(
		145deg,
		#020617,
		#0b3aa0
	);
}

.content {

	position: relative;

	z-index: 2;

	padding:
	80rpx 24rpx 360rpx;

	box-sizing: border-box;
}

/* 顶部 */

.header {

	color: #ffffff;
}

.title {

	font-size: 54rpx;

	font-weight: 900;
}

.subtitle {

	font-size: 24rpx;

	margin-top: 10rpx;

	color:
	rgba(255,255,255,0.72);
}

/* AI卡片 */

.ai-card {

	margin-top: 36rpx;

	padding: 30rpx;

	border-radius: 34rpx;

	background:
	rgba(255,255,255,0.12);

	backdrop-filter: blur(20rpx);

	border:
	1rpx solid rgba(255,255,255,0.16);

	display: flex;
	align-items: center;
}

.ai-circle {

	width: 100rpx;
	height: 100rpx;

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

	box-shadow:
	0 0 40rpx rgba(59,130,246,0.8);
}

.ai-dot {

	width: 26rpx;
	height: 26rpx;

	border-radius: 50%;

	background: #ffffff;
}

.ai-info {

	margin-left: 24rpx;
}

.ai-name {

	font-size: 34rpx;
	font-weight: 800;

	color: #ffffff;
}

.ai-desc {

	margin-top: 10rpx;

	font-size: 24rpx;

	color:
	rgba(255,255,255,0.72);
}

/* 快捷指令 */

.quick {

	display: flex;

	flex-wrap: wrap;

	gap: 16rpx;

	margin-top: 28rpx;
}

.quick-btn {

	padding:
	14rpx 24rpx;

	border-radius: 999rpx;

	background:
	rgba(255,255,255,0.12);

	border:
	1rpx solid rgba(255,255,255,0.14);

	color: #ffffff;

	font-size: 24rpx;
}

/* 聊天 */

.chat-title {

	margin-top: 40rpx;

	font-size: 32rpx;
	font-weight: 800;

	color: #ffffff;
}

.chat {

	height: 520rpx;

	margin-top: 24rpx;
}

.msg {

	display: flex;

	margin-bottom: 20rpx;
}

.msg.user {

	justify-content: flex-end;
}

.bubble {

	max-width: 72%;

	padding: 22rpx;

	border-radius: 24rpx;

	font-size: 28rpx;

	line-height: 42rpx;
}

.msg.user .bubble {

	background:
	linear-gradient(
		135deg,
		#2563eb,
		#3b82f6
	);

	color: #ffffff;
}

.msg.ai .bubble {

	background:
	rgba(255,255,255,0.14);

	backdrop-filter: blur(20rpx);

	border:
	1rpx solid rgba(255,255,255,0.12);

	color: #ffffff;
}

/* 操作指南 */

.guide-card {

	margin-top: 34rpx;

	background:
	rgba(255,255,255,0.1);

	border:
	1rpx solid rgba(255,255,255,0.12);

	backdrop-filter: blur(20rpx);

	border-radius: 30rpx;

	padding: 28rpx;
}

.guide-title {

	font-size: 30rpx;
	font-weight: 800;

	color: #ffffff;

	margin-bottom: 24rpx;
}

.guide-list {

	display: grid;

	grid-template-columns:
	repeat(2,1fr);

	gap: 18rpx;
}

.guide-item {

	height: 92rpx;

	background:
	rgba(255,255,255,0.08);

	border-radius: 20rpx;

	display: flex;
	align-items: center;
	justify-content: center;

	text-align: center;

	padding: 0 10rpx;

	color: #ffffff;

	font-size: 24rpx;
}

/* 底部语音按钮 */

.voice-fixed {

	position: fixed;

	left: 0;
	right: 0;
	bottom: 90rpx;

	display: flex;
	flex-direction: column;
	align-items: center;

	z-index: 999;
}

.voice-circle {

	width: 190rpx;
	height: 190rpx;

	border-radius: 50%;

	background:
	radial-gradient(
		circle,
		#60a5fa,
		#2563eb
	);

	display: flex;
	align-items: center;
	justify-content: center;

	font-size: 74rpx;

	color: #ffffff;

	box-shadow:
	0 0 70rpx rgba(37,99,235,0.95),
	0 24rpx 60rpx rgba(0,0,0,0.35);

	border:
	8rpx solid rgba(255,255,255,0.18);
}

.voice-text {

	margin-top: 18rpx;

	font-size: 28rpx;
	font-weight: 700;

	color: #ffffff;
}

</style>