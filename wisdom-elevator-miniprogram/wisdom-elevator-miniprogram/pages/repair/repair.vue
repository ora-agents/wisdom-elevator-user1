<template>

	<view class="page">

		<!-- 顶部背景 -->
		<view class="top-bg"></view>

		<view class="content">

			<!-- 标题 -->
			<view class="header">

				<view class="title">
					设备报修
				</view>

				<view class="subtitle">
					提交设备故障信息
				</view>

			</view>

			<!-- 表单 -->
			<view class="form-card">

				<!-- 设备名称 -->
				<view class="form-item">

					<view class="label">
						设备名称
					</view>

					<picker
						:value="deviceIndex"
						:range="deviceList"
						@change="changeDevice"
					>

						<view class="picker">

							{{ deviceList[deviceIndex] }}

						</view>

					</picker>

				</view>

				<!-- 故障类型 -->
				<view class="form-item">

					<view class="label">
						故障类型
					</view>

					<picker
						:value="faultIndex"
						:range="faultTypes"
						@change="changeFault"
					>

						<view class="picker">

							{{ faultTypes[faultIndex] }}

						</view>

					</picker>

				</view>

				<!-- 联系人 -->
				<view class="form-item">

					<view class="label">
						联系人
					</view>

					<picker
						:value="userIndex"
						:range="userList"
						@change="changeUser"
					>

						<view class="picker">

							{{ userList[userIndex] }}

						</view>

					</picker>

				</view>

				<!-- 联系电话 -->
				<view class="form-item">

					<view class="label">
						联系电话
					</view>

					<picker
						:value="phoneIndex"
						:range="phoneList"
						@change="changePhone"
					>

						<view class="picker">

							{{ phoneList[phoneIndex] }}

						</view>

					</picker>

				</view>

				<!-- 安装位置 -->
				<view class="form-item">

					<view class="label">
						安装位置
					</view>

					<picker
						:value="addressIndex"
						:range="addressList"
						@change="changeAddress"
					>

						<view class="picker">

							{{ addressList[addressIndex] }}

						</view>

					</picker>

				</view>

				<!-- 故障描述 -->
				<view class="form-item">

					<view class="label">
						故障描述
					</view>

					<textarea
						v-model="form.desc"
						class="textarea"
						placeholder="请详细描述设备问题"
					/>

				</view>

				<!-- 图片上传 -->
				<view class="form-item">

					<view class="label">
						故障图片
					</view>

					<view
						class="upload-box"
						@click="uploadImage"
					>

						＋ 上传图片

					</view>

				</view>

				<!-- 提交 -->
				<view
					class="submit-btn"
					@click="submit"
				>

					提交报修

				</view>

			</view>

		</view>

	</view>

</template>

<script>

export default {

	data() {

		return {

			/* 设备 */

			deviceIndex: 0,

			deviceList: [

				'客厅空调',
				'卧室空调',
				'客厅电梯',
				'三楼机器人',
				'阳台机器人'

			],

			/* 故障 */

			faultIndex: 0,

			faultTypes: [

				'无法启动',
				'运行异常',
				'设备离线',
				'硬件故障',
				'其他问题'

			],

			/* 联系人 */

			userIndex: 0,

			userList: [

				'王先生',
				'李女士',
				'张先生',
				'管理员'

			],

			/* 电话 */

			phoneIndex: 0,

			phoneList: [

				'13800138000',
				'13900139000',
				'13700137000'

			],

			/* 地址 */

			addressIndex: 0,

			addressList: [

				'客厅',
				'卧室',
				'厨房',
				'阳台',
				'三楼',
				'公共区域'

			],

			form: {

				name: '',
				user: '',
				phone: '',
				address: '',
				desc: ''

			}

		}

	},

	onLoad(option) {

		if(option.name){

			this.form.name = option.name

		}else{

			this.form.name = this.deviceList[0]

		}

	},

	methods: {

		/* 设备 */

		changeDevice(e) {

			this.deviceIndex = e.detail.value

			this.form.name =
			this.deviceList[this.deviceIndex]

		},

		/* 故障 */

		changeFault(e) {

			this.faultIndex = e.detail.value

		},

		/* 联系人 */

		changeUser(e) {

			this.userIndex = e.detail.value

			this.form.user =
			this.userList[this.userIndex]

		},

		/* 电话 */

		changePhone(e) {

			this.phoneIndex = e.detail.value

			this.form.phone =
			this.phoneList[this.phoneIndex]

		},

		/* 地址 */

		changeAddress(e) {

			this.addressIndex = e.detail.value

			this.form.address =
			this.addressList[this.addressIndex]

		},

		/* 上传 */

		uploadImage() {

			uni.chooseImage({

				count: 1,

				success: () => {

					uni.showToast({

						title: '上传成功',

						icon: 'success'

					})

				}

			})

		},

		/* 提交 */

		submit() {
		
			const orderId = 'WO' + Date.now()
		
			uni.showToast({
				title: '报修已提交',
				icon: 'success'
			})
		
			setTimeout(() => {
		
				uni.redirectTo({
					url: '/pages/orderDetail/orderDetail?id=' + orderId
				})
		
			}, 800)
		
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

	color:
	rgba(255,255,255,0.82);
}

.form-card {

	margin-top: 40rpx;

	background: #ffffff;

	border-radius: 36rpx;

	padding: 30rpx;

	box-shadow:
	0 12rpx 40rpx rgba(15,23,42,0.08);
}

.form-item {

	margin-bottom: 30rpx;
}

.label {

	font-size: 28rpx;
	font-weight: 700;

	color: #0f172a;

	margin-bottom: 16rpx;
}

.picker {

	height: 92rpx;

	background: #f8fafc;

	border-radius: 20rpx;

	padding: 0 24rpx;

	display: flex;
	align-items: center;

	font-size: 28rpx;

	color: #0f172a;
}

.textarea {

	width: 100%;

	height: 220rpx;

	background: #f8fafc;

	border-radius: 20rpx;

	padding: 24rpx;

	box-sizing: border-box;

	font-size: 28rpx;
}

.upload-box {

	height: 180rpx;

	border-radius: 24rpx;

	border:
	2rpx dashed #cbd5e1;

	display: flex;
	align-items: center;
	justify-content: center;

	font-size: 30rpx;

	color: #64748b;
}

.submit-btn {

	height: 96rpx;

	border-radius: 24rpx;

	background:
	linear-gradient(135deg,#3b82f6,#2563eb);

	display: flex;
	align-items: center;
	justify-content: center;

	font-size: 30rpx;
	font-weight: 800;

	color: #ffffff;

	margin-top: 30rpx;
}

</style>