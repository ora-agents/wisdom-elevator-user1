<template>

	<view class="page">

		<!-- 顶部 -->
		<view class="header">

			<view class="title">
				添加设备
			</view>

			<view class="subtitle">
				连接新的智能设备
			</view>

		</view>

		<!-- 添加方式 -->
		<view class="section">

			<view class="section-title">
				添加方式
			</view>

			<view class="method-grid">

				<view
					class="method-card blue"
					@click="scanCode">

					<view class="method-icon">
						📷
					</view>

					<view class="method-name">
						扫码添加
					</view>

					<view class="method-desc">
						扫描设备二维码
					</view>

				</view>

				<view
					class="method-card purple"
					@click="bluetooth">

					<view class="method-icon">
						📶
					</view>

					<view class="method-name">
						蓝牙连接
					</view>

					<view class="method-desc">
						发现附近设备
					</view>

				</view>

				<view
					class="method-card orange"
					@click="localSearch">

					<view class="method-icon">
						🌐
					</view>

					<view class="method-name">
						局域网搜索
					</view>

					<view class="method-desc">
						自动搜索设备
					</view>

				</view>

				<view
					class="method-card green"
					@click="manualAdd">

					<view class="method-icon">
						⌨️
					</view>

					<view class="method-name">
						手动输入
					</view>

					<view class="method-desc">
						输入设备ID
					</view>

				</view>

			</view>

		</view>

		<!-- 附近设备 -->
		<view class="section">

			<view class="section-title">
				附近发现设备
			</view>

			<view class="device-list">

				<view
					class="device-card"
					v-for="(item,index) in nearbyDevices"
					:key="index">

					<view class="device-left">

						<view class="device-icon">
							{{ item.icon }}
						</view>

						<view>

							<view class="device-name">
								{{ item.name }}
							</view>

							<view class="device-info">
								{{ item.id }}
							</view>

						</view>

					</view>

					<view
						class="add-btn"
						@click="bindDevice(item.name)">

						添加

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

			nearbyDevices:[

				{
					icon:'❄️',
					name:'客厅空调',
					id:'AC-2025'
				},

				{
					icon:'🤖',
					name:'阳台机器人',
					id:'RB-01'
				},

				{
					icon:'🚪',
					name:'智能门锁',
					id:'LOCK-03'
				}

			]

		}

	},

	methods:{

		scanCode(){

			uni.showToast({

				title:'打开扫码',

				icon:'none'

			})

		},

		bluetooth(){

			uni.showToast({

				title:'蓝牙搜索中',

				icon:'none'

			})

		},

		localSearch(){

			uni.showToast({

				title:'搜索局域网设备',

				icon:'none'

			})

		},

		manualAdd(){

			uni.showToast({

				title:'手动输入设备ID',

				icon:'none'

			})

		},

		bindDevice(name){

			uni.showToast({

				title:`${name}已添加`,

				icon:'success'

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

/* section */

.section{

	margin-bottom:34rpx;

}

.section-title{

	font-size:32rpx;
	font-weight:800;

	color:#0F172A;

	margin-bottom:24rpx;

}

/* 添加方式 */

.method-grid{

	display:grid;

	grid-template-columns:
	repeat(2,1fr);

	gap:20rpx;

}

.method-card{

	height:220rpx;

	border-radius:34rpx;

	padding:28rpx;

	box-sizing:border-box;

	color:white;

	box-shadow:
	0 12rpx 40rpx
	rgba(15,23,42,0.08);

}

.method-icon{

	font-size:56rpx;

}

.method-name{

	font-size:30rpx;
	font-weight:800;

	margin-top:28rpx;

}

.method-desc{

	font-size:22rpx;

	margin-top:10rpx;

	opacity:0.9;

}

.blue{

	background:
	linear-gradient(
	135deg,
	#2563EB,
	#3B82F6
	);

}

.purple{

	background:
	linear-gradient(
	135deg,
	#7C3AED,
	#9333EA
	);

}

.orange{

	background:
	linear-gradient(
	135deg,
	#F97316,
	#FB923C
	);

}

.green{

	background:
	linear-gradient(
	135deg,
	#10B981,
	#34D399
	);

}

/* 设备列表 */

.device-list{

	display:flex;
	flex-direction:column;
	gap:20rpx;

}

.device-card{

	background:white;

	border-radius:30rpx;

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

	width:88rpx;
	height:88rpx;

	border-radius:26rpx;

	background:#EFF6FF;

	display:flex;
	align-items:center;
	justify-content:center;

	font-size:42rpx;

	margin-right:20rpx;

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

.add-btn{

	width:120rpx;
	height:64rpx;

	border-radius:999rpx;

	background:#2563EB;

	display:flex;
	align-items:center;
	justify-content:center;

	color:white;

	font-size:24rpx;
	font-weight:700;

}

</style>