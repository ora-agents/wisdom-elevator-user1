<template>

	<view class="page">

		<!-- 顶部 -->
		<view class="header">

			<view class="title">
				{{ type }}
			</view>

			<view class="subtitle">
				不同空间设备统一管理
			</view>

		</view>

		<!-- 设备列表 -->
		<view class="device-list">

			<view
				class="device-card"
				v-for="(item,index) in deviceList"
				:key="index">

				<!-- 左侧 -->
				<view class="device-left">

					<view class="device-icon">
						{{ item.icon }}
					</view>

					<view>

						<view class="device-name">
							{{ item.name }}
						</view>

						<view class="device-info">
							{{ item.location }}
						</view>

						<view class="device-status">

							<view
								class="dot"
								:class="item.online ? 'online' : 'offline'">
							</view>

							{{ item.online ? '在线' : '离线' }}

						</view>

					</view>

				</view>

				<!-- 右侧 -->
				<view class="device-right">

					<view class="temp">
						{{ item.temp }}
					</view>

					<switch
						:checked="item.on"
						color="#2563EB" />

				</view>

			</view>

		</view>

		<!-- 添加设备 -->
		<view
			class="add-btn"
			@click="goAddDevice">

			＋ 添加设备

		</view>

	</view>

</template>

<script>

export default {

	data() {

		return {

			type:'设备',

			deviceList:[]

		}

	},

	onLoad(option){

		this.type = option.type || '设备'

		this.loadData()

	},

	methods:{

		loadData(){

			if(this.type === '空调'){

				this.deviceList = [

					{
						icon:'❄️',
						name:'客厅空调',
						location:'客厅',
						temp:'26℃',
						online:true,
						on:true
					},

					{
						icon:'❄️',
						name:'主卧空调',
						location:'主卧',
						temp:'25℃',
						online:true,
						on:true
					},

					{
						icon:'❄️',
						name:'次卧空调',
						location:'次卧',
						temp:'关闭',
						online:false,
						on:false
					}

				]

			}

			if(this.type === '机器人'){

				this.deviceList = [

					{
						icon:'🤖',
						name:'客厅机器人',
						location:'客厅',
						temp:'巡逻中',
						online:true,
						on:true
					},

					{
						icon:'🤖',
						name:'阳台机器人',
						location:'阳台',
						temp:'待机中',
						online:true,
						on:true
					}

				]

			}

		},

		goAddDevice(){

			uni.navigateTo({

				url:'/pages/addDevice/addDevice'

			})

		}

	}

}

</script>

<style>

page{

	background:#F4F7FB;

}

.page{

	min-height:100vh;

	padding:
	90rpx
	28rpx
	40rpx;

	box-sizing:border-box;

}

/* 顶部 */

.title{

	font-size:44rpx;
	font-weight:800;

	color:#0F172A;

}

.subtitle{

	font-size:24rpx;

	color:#64748B;

	margin-top:12rpx;
	margin-bottom:34rpx;

}

/* 列表 */

.device-list{

	display:flex;
	flex-direction:column;
	gap:20rpx;

}

.device-card{

	background:white;

	border-radius:34rpx;

	padding:28rpx;

	display:flex;
	justify-content:space-between;
	align-items:center;

	box-shadow:
	0 10rpx 30rpx
	rgba(15,23,42,0.05);

}

.device-left{

	display:flex;
	align-items:center;

}

.device-icon{

	width:90rpx;
	height:90rpx;

	border-radius:26rpx;

	background:#EFF6FF;

	display:flex;
	align-items:center;
	justify-content:center;

	font-size:42rpx;

	margin-right:22rpx;

}

.device-name{

	font-size:30rpx;
	font-weight:800;

	color:#0F172A;

}

.device-info{

	font-size:23rpx;

	color:#64748B;

	margin-top:10rpx;

}

.device-status{

	display:flex;
	align-items:center;

	font-size:22rpx;

	color:#64748B;

	margin-top:12rpx;

}

.dot{

	width:14rpx;
	height:14rpx;

	border-radius:50%;

	margin-right:10rpx;

}

.online{

	background:#10B981;

}

.offline{

	background:#CBD5E1;

}

.device-right{

	display:flex;
	flex-direction:column;
	align-items:flex-end;

}

.temp{

	font-size:30rpx;
	font-weight:800;

	color:#2563EB;

	margin-bottom:16rpx;

}

/* 添加设备 */

.add-btn{

	height:96rpx;

	border-radius:28rpx;

	background:
	linear-gradient(
	135deg,
	#2563EB,
	#3B82F6
	);

	display:flex;
	align-items:center;
	justify-content:center;

	color:white;

	font-size:30rpx;
	font-weight:800;

	margin-top:34rpx;

	box-shadow:
	0 12rpx 30rpx
	rgba(37,99,235,0.25);

}

</style>