<template>

	<view class="page">

		<!-- 顶部 -->
		<view class="top">

			<view class="title">
				AI 智能助手
			</view>

			<view class="subtitle">
				语音控制全屋智能设备
			</view>

		</view>

		<!-- AI球 -->
		<view class="ai-area">

			<view
				class="ai-ball"
				:class="{ active: listening }"
				@click="toggleVoice">

				🎤

			</view>

			<view class="ai-text">

				{{ listening ? '正在聆听...' : '点击开始语音控制' }}

			</view>

		</view>

		<!-- 识别结果 -->
		<view class="card">

			<view class="card-title">
				语音识别结果
			</view>

			<view class="voice-result">

				{{ result || '暂无语音内容' }}

			</view>

		</view>

		<!-- AI建议 -->
		<view class="card">

			<view class="card-title">
				AI 推荐指令
			</view>

			<view class="command-list">

				<view
					class="command-item"
					@click="mockCommand('打开客厅灯')">

					💡 打开客厅灯

				</view>

				<view
					class="command-item"
					@click="mockCommand('空调调到26度')">

					❄️ 空调调到26度

				</view>

				<view
					class="command-item"
					@click="mockCommand('启动睡眠模式')">

					🌙 启动睡眠模式

				</view>

				<view
					class="command-item"
					@click="mockCommand('关闭全部设备')">

					🏠 关闭全部设备

				</view>

			</view>

		</view>

		<!-- 执行记录 -->
		<view class="card">

			<view class="card-title">
				最近执行
			</view>

			<view
				class="history-item"
				v-for="(item,index) in history"
				:key="index">

				<view>

					<view class="history-name">
						{{ item }}
					</view>

					<view class="history-time">
						刚刚执行
					</view>

				</view>

				<view class="success-tag">
					成功
				</view>

			</view>

		</view>

	</view>

</template>

<script>

export default {

	data() {

		return {

			listening:false,

			result:'',

			history:[

				'打开客厅灯',

				'启动回家模式'

			]

		}

	},

	methods:{

		toggleVoice(){

			this.listening = !this.listening

			if(this.listening){

				setTimeout(()=>{

					this.result =
					'空调调到26度'

					this.history.unshift(
						'空调调到26度'
					)

					this.listening = false

					uni.showToast({

						title:'执行成功',

						icon:'success'

					})

				},2000)

			}

		},

		mockCommand(text){

			this.result = text

			this.history.unshift(text)

			uni.showToast({

				title:'指令执行成功',

				icon:'success'

			})

		}

	}

}

</script>

<style>

page{

	background:
	linear-gradient(
	180deg,
	#EEF4FF 0%,
	#F8FAFC 100%
	);

}

.page{

	padding:
	90rpx
	28rpx
	40rpx;

}

/* 顶部 */

.title{

	font-size:44rpx;
	font-weight:800;

	color:#0F172A;

}

.subtitle{

	font-size:26rpx;

	color:#64748B;

	margin-top:10rpx;
	margin-bottom:30rpx;

}

/* AI区域 */

.ai-area{

	height:420rpx;

	display:flex;
	flex-direction:column;
	align-items:center;
	justify-content:center;

}

.ai-ball{

	width:220rpx;
	height:220rpx;

	border-radius:50%;

	background:
	linear-gradient(
	135deg,
	#2563EB,
	#3B82F6
	);

	display:flex;
	align-items:center;
	justify-content:center;

	font-size:90rpx;

	color:white;

	box-shadow:
	0 20rpx 60rpx
	rgba(37,99,235,0.35);

	transition:all 0.3s;

}

.ai-ball.active{

	transform:scale(1.08);

	box-shadow:
	0 20rpx 80rpx
	rgba(37,99,235,0.55);

}

.ai-text{

	font-size:28rpx;

	color:#334155;

	margin-top:36rpx;

}

/* 卡片 */

.card{

	background:white;

	border-radius:32rpx;

	padding:30rpx;

	margin-bottom:28rpx;

	box-shadow:
	0 10rpx 40rpx
	rgba(15,23,42,0.05);

}

.card-title{

	font-size:32rpx;
	font-weight:800;

	color:#0F172A;

	margin-bottom:24rpx;

}

/* 结果 */

.voice-result{

	min-height:100rpx;

	background:#F8FAFC;

	border-radius:22rpx;

	padding:24rpx;

	font-size:28rpx;

	color:#0F172A;

	line-height:42rpx;

}

/* 指令 */

.command-list{

	display:flex;
	flex-wrap:wrap;
	gap:18rpx;

}

.command-item{

	padding:
	18rpx
	24rpx;

	background:#EFF6FF;

	border-radius:999rpx;

	font-size:26rpx;

	color:#2563EB;

}

/* 历史 */

.history-item{

	display:flex;

	justify-content:space-between;

	align-items:center;

	padding:24rpx 0;

	border-bottom:
	2rpx solid #F1F5F9;

}

.history-item:last-child{

	border-bottom:none;

}

.history-name{

	font-size:28rpx;
	font-weight:700;

	color:#0F172A;

}

.history-time{

	font-size:22rpx;

	color:#64748B;

	margin-top:8rpx;

}

.success-tag{

	padding:
	8rpx 18rpx;

	border-radius:999rpx;

	background:#DCFCE7;

	color:#16A34A;

	font-size:22rpx;

}

</style>