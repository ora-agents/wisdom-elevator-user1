<template>

	<view class="page">

		<view class="top-bg"></view>

		<view class="content">

			<!-- 顶部 -->
			<view class="topbar">
				<view>
					<view class="family-name">智享家AI管家</view>
					<view class="welcome">欢迎回家，生活因智能而美好</view>
				</view>

				<view class="top-icons">
					<view class="icon-btn">•••</view>
					<view class="icon-btn">◎</view>
				</view>
			</view>

			<!-- 天气 -->
			<view class="weather-card">
				<view class="weather-left">
					<view class="weather-icon">☀️</view>
					<view>
						<view class="temp">26℃</view>
						<view class="weather-desc">多云 ｜ 空气优</view>
					</view>
				</view>

				<view class="weather-right">
					<view class="weather-item">
						<view class="weather-value">58%</view>
						<view class="weather-label">湿度</view>
					</view>
					<view class="weather-item">
						<view class="weather-value">25℃</view>
						<view class="weather-label">室内温度</view>
					</view>
				</view>
			</view>

			<!-- 🚨 电梯核心功能区 -->
			<view class="lift-panel">

				<view class="lift-item alarm" @click="goAlarm">
					<view class="lift-icon">🚨</view>
					<view class="lift-text">报警</view>
				</view>

				<view class="lift-item" @click="goRepairLift">
					<view class="lift-icon">🛠</view>
					<view class="lift-text">设备报修</view>
				</view>

				<view class="lift-item" @click="goMaintain">
					<view class="lift-icon">🧰</view>
					<view class="lift-text">设备保养</view>
				</view>

				<view class="lift-item" @click="openBindDialog">
					<view class="lift-icon">📷</view>
					<view class="lift-text">扫码绑定</view>
				</view>

			</view>

			<!-- 常用设备 -->
			<view class="section-title">常用设备</view>

			<view v-if="liftList.length === 0" class="empty-box">
				<view class="empty-icon">📦</view>
				<view class="empty-text">暂无设备</view>
			</view>

			<view v-else class="lift-list">
				<view
					class="lift-card"
					v-for="item in liftList"
					:key="item.id"
					@click="goLiftDetail(item)"
				>
					<view class="lift-card-icon">🛗</view>
					<view class="lift-info">
						<view class="lift-name">{{ item.name }}</view>
						<view class="lift-model">{{ item.model }}</view>
					</view>
				</view>
			</view>

			<!-- 我的工单 -->
			<view class="section-title">我的工单</view>

			<view class="order-panel">

				<view class="order-item" @click="goRescue">
					<view class="order-icon red">🚨</view>
					<view class="order-text">救援记录</view>
				</view>

				<view class="order-item" @click="goRepairList">
					<view class="order-icon orange">⚙️</view>
					<view class="order-text">维修记录</view>
				</view>

				<view class="order-item" @click="goMaintainList">
					<view class="order-icon blue">✔️</view>
					<view class="order-text">保养记录</view>
				</view>

			</view>
						<!-- 设备总览 -->
			
						<view class="section-title stats-title">
							设备总览
						</view>
			
						<view class="stats-grid">
			
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
			
								<view class="stats-num gray">
									{{ offlineCount }}
								</view>
			
								<view class="stats-label">
									离线设备
								</view>
			
							</view>
			
							<view class="stats-card">
			
								<view class="stats-num red">
									{{ alarmCount }}
								</view>
			
								<view class="stats-label">
									告警设备
								</view>
			
							</view>
			
						</view>
			
									<!-- 全部设备 -->
									
									<view class="section-header">
									
										<view class="section-title">
											全部设备
										</view>
									
										<view class="more-btn">
											查看全部 ›
										</view>
									
									</view>
									
									<!-- 房间筛选 -->
									
									<scroll-view
										scroll-x="true"
										class="device-room-scroll"
										show-scrollbar="false"
									>
									
										<view class="device-room-row">
									
											<view
												class="device-room-item"
												:class="activeRoom === item.name ? 'device-room-active' : ''"
												v-for="item in rooms"
												:key="item.name"
												@click="selectRoom(item)"
											>
												{{ item.name }}
											</view>
									
										</view>
									
									</scroll-view>
									
									<view class="device-grid">
						
										<view
											class="device-card"
											v-for="item in filterDeviceList"
											:key="item.name"
											@click="goControl(item)"
										>
						
											<!-- 顶部 -->
						
											<view class="device-top">
						
												<view class="device-icon">
													{{ item.icon }}
												</view>
						
												<view
													class="device-status"
													:class="item.online ? 'online' : 'offline'"
												>
						
													{{ item.online ? '在线' : '离线' }}
						
												</view>
						
											</view>
						
											<!-- 名称 -->
						
											<view class="device-name">
												{{ item.name }}
											</view>
						
											<!-- 描述 -->
						
											<view class="device-desc">
												{{ item.desc }}
											</view>
						
											<!-- 底部 -->
						
											<view class="device-bottom">
						
												<view class="room-tag">
													{{ item.room }}
												</view>
						
												<view
													class="power-btn"
													:class="item.online ? 'power-on' : 'power-off'"
													@click.stop="toggleDevice(item)"
												>
						
													⏻
						
												</view>
						
											</view>
						
										</view>
						
									</view>
						
								</view>
						
								<!-- AI语音助手 -->
			
					<view
						class="voice-float"
						@click="goVoice"
					>
			
						<view class="voice-circle">
			
							🎤
			
						</view>
			
					</view>
			
					<!-- 绑定电梯弹窗 -->
			
					<view
						v-if="showBindDialog"
						class="dialog-mask"
					>
			
						<view class="bind-dialog">
			
							<view class="dialog-title">
								添加电梯设备
							</view>
			
							<input
								v-model="liftCode"
								class="lift-input"
								placeholder="请输入电梯编号"
							/>
			
							<view class="dialog-actions">
			
								<view
									class="scan-btn"
									@click="scanLift"
								>
									扫码识别
								</view>
			
								<view
									class="submit-btn"
									@click="bindLift"
								>
									确认绑定
								</view>
			
							</view>
			
							<view
								class="close-dialog"
								@click="showBindDialog = false"
							>
								取消
							</view>
			
						</view>
			
					</view>
			
				</view>
			
			</template>
			
			<script>
			
			export default {
			
				data() {
			
					return {
			
						activeRoom: '客厅',
						
						rooms: [
						
						
							{
								name: '客厅'
							},
						
							{
								name: '卧室'
							},
						
							{
								name: '厨房'
							},
						
							{
								name: '阳台'
							}
						
						],
			
						/* 电梯设备 */
			
						liftList: [
			
							{
								id: 1,
								name: '电梯',
								model: 'OTIS-GX200'
							},
			
							{
								id: 2,
								name: '机器人',
								model: 'Hitachi-X8'
							}
			
						],
			
						deviceList: [
			
							{
								name: '客厅空调',
								icon: '❄️',
								room: '客厅',
								type: 'ac',
								desc: '26℃ ｜ 制冷模式',
								online: true,
								alarm: false
							},
			
							{
								name: '客厅电梯',
								icon: '🛗',
								room: '客厅',
								type: 'elevator',
								desc: '运行正常',
								online: true,
								alarm: false
							},
			
							{
								name: '卧室灯光',
								icon: '💡',
								room: '卧室',
								type: 'light',
								desc: '亮度 80%',
								online: true,
								alarm: false
							},
			
							{
								name: '厨房门锁',
								icon: '🚪',
								room: '厨房',
								type: 'door',
								desc: '已上锁',
								online: true,
								alarm: false
							},
			
							{
								name: '阳台机器人',
								icon: '🤖',
								room: '阳台',
								type: 'robot',
								desc: '清扫中',
								online: false,
								alarm: true
							}
			
						]
			
					}
			
				},
			
				computed: {
			
					filterDeviceList() {
					
						if(this.activeRoom === '全部') {
					
							return this.deviceList
					
						}
					
						return this.deviceList.filter(item => {
					
							return item.room === this.activeRoom
					
						})
					
					},
			
					onlineCount() {
			
						return this.deviceList.filter(item => item.online).length
			
					},
			
					offlineCount() {
			
						return this.deviceList.filter(item => !item.online).length
			
					},
			
					alarmCount() {
			
						return this.deviceList.filter(item => item.alarm).length
			
					}
			
				},
			
				methods: {
					/* 获取房间设备 */
					
					getRoomDevices(roomName) {
					
						return this.deviceList.filter(item => {
					
							return item.room === roomName
					
						})
					
					},
			
					selectRoom(item) {
			
						this.activeRoom = item.name
			
					},
			
					addRoom() {
			
						uni.showModal({
			
							title: '新增空间',
			
							editable: true,
			
							placeholderText: '请输入空间名称',
			
							success: (res) => {
			
								if(res.confirm && res.content){
			
									this.rooms.push({
			
										name: res.content
			
									})
			
								}
			
							}
			
						})
			
					},
			
					/* 困人报警 */
			
					goAlarm() {
					
						uni.navigateTo({
					
							url: '/pages/repair/repair?type=alarm'
					
						})
					
					},
			
					/* 电梯报修 */
			
					goRepairLift() {
			
						uni.navigateTo({
			
							url: '/pages/repair/repair?type=repair'
			
						})
			
					},
			
					/* 电梯保养 */
			
					goMaintain() {
			
						uni.navigateTo({
			
							url: '/pages/repair/repair?type=maintain'
			
						})
			
					},
			
					/* 我的工单 */
			
					goRescue() {
			
						uni.navigateTo({
			
							url: '/pages/order/order?type=rescue'
			
						})
			
					},
			
					goRepairList() {
			
						uni.navigateTo({
			
							url: '/pages/order/order?type=repair'
			
						})
			
					},
			
					goMaintainList() {
			
						uni.navigateTo({
			
							url: '/pages/order/order?type=maintain'
			
						})
			
					},
			
					/* 打开绑定 */
			
					openBindDialog() {
			
						this.showBindDialog = true
			
					},
			
					/* 扫码 */
			
					scanLift() {
			
						uni.scanCode({
			
							onlyFromCamera: false,
			
							success: (res) => {
			
								this.liftCode = res.result
			
								uni.showToast({
			
									title: '识别成功',
			
									icon: 'success'
			
								})
			
							}
			
						})
			
					},
							/* 绑定电梯 */
					
							bindLift() {
					
								if(!this.liftCode){
					
									uni.showToast({
					
										title: '请输入电梯编号',
					
										icon: 'none'
					
									})
					
									return
					
								}
					
								/* 模拟已绑定 */
					
								if(this.liftCode === 'TEST1001'){
					
									uni.showToast({
					
										title: '电梯设备已被绑定',
					
										icon: 'none'
					
									})
					
									return
					
								}
					
								/* 模拟失败 */
					
								if(this.liftCode === 'ERROR'){
					
									uni.showToast({
					
										title: '电梯设备添加失败',
					
										icon: 'none'
					
									})
					
									return
					
								}
					
								this.liftList.push({
					
									id: Date.now(),
					
									name: '新绑定电梯',
					
									model: this.liftCode
					
								})
					
								uni.showToast({
					
									title: '绑定成功',
					
									icon: 'success'
					
								})
					
								this.showBindDialog = false
					
								this.liftCode = ''
					
							},
					
							/* 电梯详情 */
					
							goLiftDetail(item) {
					
								uni.navigateTo({
					
									url:
									'/pages/deviceDetail/deviceDetail?' +
									'id=' + item.id +
									'&name=' + item.name
					
								})
					
							},
					
							/* 设备详情 */
					
							goControl(item) {
					
								uni.navigateTo({
					
									url:
					
									'/pages/deviceDetail/deviceDetail?' +
					
									'name=' + item.name +
					
									'&location=' + item.room +
					
									'&type=' + item.type
					
								})
					
							},
					
							/* AI语音 */
					
							goVoice() {
					
								uni.navigateTo({
					
									url: '/pages/voice/voice'
					
								})
					
							},
					
							/* 开关设备 */
					
							toggleDevice(item) {
					
								item.online = !item.online
					
								uni.vibrateShort()
					
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
					
					.top-bg {
						position: absolute;
						left: 0;
						right: 0;
						top: 0;
						height: 1600rpx;
						background:
							radial-gradient(circle at 50% 10%, rgba(0,213,255,0.75), transparent 34%),
							radial-gradient(circle at 90% 30%, rgba(59,130,246,0.6), transparent 32%),
							linear-gradient(145deg, #06134f 0%, #0b3aa0 48%, #03174d 100%);
					}
					
					.content {
						position: relative;
						z-index: 2;
						padding: 80rpx 28rpx 240rpx;
						box-sizing: border-box;
					}
					
					/* 顶部 */
					
					.topbar {
						display: flex;
						align-items: center;
						justify-content: space-between;
					}
					
					.family-name {
						font-size: 54rpx;
						font-weight: 900;
						color: #ffffff;
					}
					
					.welcome {
						font-size: 24rpx;
						margin-top: 12rpx;
						color: rgba(255,255,255,0.72);
					}
					
					.top-icons {
						display: flex;
						align-items: center;
					}
					
					.icon-btn {
						width: 72rpx;
						height: 72rpx;
						border-radius: 50%;
						background: rgba(255,255,255,0.14);
						backdrop-filter: blur(20rpx);
						display: flex;
						align-items: center;
						justify-content: center;
						color: #ffffff;
						font-size: 32rpx;
						margin-left: 18rpx;
					}
					
					/* 天气 */
					
					.weather-card {
						margin-top: 38rpx;
						padding: 34rpx;
						border-radius: 36rpx;
						background: rgba(255,255,255,0.12);
						border: 1rpx solid rgba(255,255,255,0.14);
						backdrop-filter: blur(20rpx);
						display: flex;
						align-items: center;
						justify-content: space-between;
					}
					
					.weather-left {
						display: flex;
						align-items: center;
					}
					
					.weather-icon {
						font-size: 74rpx;
						margin-right: 24rpx;
					}
					
					.temp {
						font-size: 68rpx;
						font-weight: 900;
						color: #ffffff;
					}
					
					.weather-desc {
						font-size: 24rpx;
						color: rgba(255,255,255,0.74);
						margin-top: 8rpx;
					}
					
					.weather-right {
						display: flex;
						align-items: center;
					}
					
					.weather-item {
						margin-left: 46rpx;
						text-align: center;
					}
					
					.weather-value {
						font-size: 38rpx;
						font-weight: 800;
						color: #ffffff;
					}
					
					.weather-label {
						font-size: 22rpx;
						margin-top: 8rpx;
						color: rgba(255,255,255,0.72);
					}
					
					/* 电梯核心功能 */
					
					.lift-panel {
						display: grid;
						grid-template-columns: repeat(4,1fr);
						gap: 20rpx;
						margin-top: 44rpx;
					}
					
					.lift-item {
						background: rgba(255,255,255,0.1);
						border-radius: 28rpx;
						padding: 24rpx 10rpx;
						text-align: center;
						backdrop-filter: blur(20rpx);
						border: 1rpx solid rgba(255,255,255,0.08);
					}
					
					.lift-item:active {
						transform: scale(0.96);
					}
					
					.lift-icon {
						width: 88rpx;
						height: 88rpx;
						border-radius: 50%;
						background: rgba(255,255,255,0.14);
						display: flex;
						align-items: center;
						justify-content: center;
						font-size: 42rpx;
						margin: 0 auto 14rpx;
					}
					
					.lift-text {
						font-size: 24rpx;
						color: #ffffff;
						font-weight: 700;
					}
					
					.alarm .lift-icon {
						background: rgba(239,68,68,0.25);
						box-shadow: 0 0 30rpx rgba(239,68,68,0.5);
					}
					
					/* 标题 */
					
					.section-title {
						font-size: 40rpx;
						font-weight: 900;
						color: #ffffff;
						margin-top: 44rpx;
					}
					
					/* 空设备 */
					
					.empty-box {
						margin-top: 40rpx;
						background: rgba(255,255,255,0.08);
						border-radius: 34rpx;
						padding: 80rpx 20rpx;
						text-align: center;
					}
					
					.empty-icon {
						font-size: 100rpx;
					}
					
					.empty-text {
						color: rgba(255,255,255,0.65);
						font-size: 28rpx;
						margin-top: 20rpx;
					}
					
					/* 电梯列表 */
					
					.lift-list {
						margin-top: 24rpx;
					}
					
					.lift-card {
						display: flex;
						align-items: center;
						background: rgba(255,255,255,0.1);
						border-radius: 30rpx;
						padding: 28rpx;
						margin-bottom: 20rpx;
						border: 1rpx solid rgba(255,255,255,0.08);
					}
					
					.lift-card:active {
						transform: scale(0.98);
					}
					
					.lift-card-icon {
						width: 90rpx;
						height: 90rpx;
						border-radius: 24rpx;
						background: rgba(59,130,246,0.2);
						display: flex;
						align-items: center;
						justify-content: center;
						font-size: 48rpx;
						margin-right: 22rpx;
					}
					
					.lift-info {
						flex: 1;
					}
					
					.lift-name {
						font-size: 32rpx;
						font-weight: 800;
						color: #ffffff;
					}
					
					.lift-model {
						font-size: 24rpx;
						color: rgba(255,255,255,0.68);
						margin-top: 10rpx;
					}
					
					/* 工单 */
					
					.order-panel {
						display: grid;
						grid-template-columns: repeat(3,1fr);
						gap: 18rpx;
						margin-top: 24rpx;
					}
					
					.order-item {
						background: rgba(255,255,255,0.1);
						border-radius: 30rpx;
						padding: 30rpx 10rpx;
						text-align: center;
					}
					
					.order-icon {
						width: 90rpx;
						height: 90rpx;
						border-radius: 26rpx;
						display: flex;
						align-items: center;
						justify-content: center;
						margin: 0 auto 16rpx;
						font-size: 42rpx;
					}
					
					.order-icon.red {
						background: linear-gradient(135deg,#ef4444,#dc2626);
					}
					
					.order-icon.orange {
						background: linear-gradient(135deg,#fb923c,#f97316);
					}
					
					.order-icon.blue {
						background: linear-gradient(135deg,#60a5fa,#2563eb);
					}
					
					.order-text {
						color: #ffffff;
						font-size: 26rpx;
						font-weight: 700;
					}
					
					/* 统计 */
					
					.stats-title {
						margin-top: 44rpx;
					}
					
					.stats-grid {
						display: grid;
						grid-template-columns: repeat(4,1fr);
						gap: 18rpx;
						margin-top: 24rpx;
					}
					
					.stats-card {
						height: 160rpx;
						border-radius: 30rpx;
						background: rgba(255,255,255,0.1);
						backdrop-filter: blur(20rpx);
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: center;
					}
					
					.stats-num {
						font-size: 46rpx;
						font-weight: 900;
						color: #ffffff;
					}
					
					.stats-label {
						font-size: 22rpx;
						margin-top: 10rpx;
						color: rgba(255,255,255,0.72);
					}
					.green {
						color: #4ade80;
					}
					
					.gray {
						color: #cbd5e1;
					}
					
					.red {
						color: #fb7185;
					}
					
					/* 设备 */
					
					.section-header {
						display: flex;
						align-items: center;
						justify-content: space-between;
						margin-top: 44rpx;
					}
					
					.more-btn {
						font-size: 24rpx;
						color: rgba(255,255,255,0.74);
					}
					/* 设备房间切换 */
					
					.device-room-scroll {
						width: 100%;
						margin-top: 22rpx;
						white-space: nowrap;
					}
					
					.device-room-row {
						display: inline-flex;
						flex-direction: row;
						align-items: center;
						padding-bottom: 8rpx;
					}
					
					.device-room-item {
						width: 150rpx;
						height: 70rpx;
						border-radius: 22rpx;
						background: rgba(255,255,255,0.11);
						backdrop-filter: blur(20rpx);
						display: flex;
						align-items: center;
						justify-content: center;
						color: rgba(255,255,255,0.82);
						font-size: 27rpx;
						margin-right: 18rpx;
						flex-shrink: 0;
					}
					
					.device-room-active {
						background: linear-gradient(135deg, #3b82f6, #2563eb);
						color: #ffffff;
						font-weight: 800;
						box-shadow: 0 10rpx 28rpx rgba(37,99,235,0.38);
					}
					
					.device-grid {
						display: grid;
						grid-template-columns: repeat(2,1fr);
						gap: 22rpx;
						margin-top: 24rpx;
					}
					
					.device-card {
						background:
						linear-gradient(
							180deg,
							rgba(255,255,255,0.16),
							rgba(255,255,255,0.08)
						);
					
						border-radius: 34rpx;
					
						padding: 28rpx;
					
						backdrop-filter: blur(20rpx);
					
						border: 1rpx solid rgba(255,255,255,0.12);
					
						transition: all 0.3s;
					}
					
					.device-card:active {
						transform: scale(0.97);
						opacity: 0.9;
					}
					
					.device-top {
						display: flex;
						align-items: center;
						justify-content: space-between;
					}
					
					.device-icon {
						width: 78rpx;
						height: 78rpx;
						border-radius: 24rpx;
						background: rgba(255,255,255,0.14);
						display: flex;
						align-items: center;
						justify-content: center;
						font-size: 42rpx;
					}
					
					.device-status {
						padding: 8rpx 18rpx;
						border-radius: 999rpx;
						font-size: 22rpx;
						font-weight: 700;
					}
					
					.online {
						background: rgba(74,222,128,0.18);
						color: #4ade80;
					}
					
					.offline {
						background: rgba(203,213,225,0.16);
						color: #cbd5e1;
					}
					
					.device-name {
						font-size: 32rpx;
						font-weight: 800;
						color: #ffffff;
						margin-top: 24rpx;
					}
					
					.device-desc {
						font-size: 24rpx;
						color: rgba(255,255,255,0.72);
						margin-top: 12rpx;
						line-height: 38rpx;
					}
					
					.device-bottom {
						display: flex;
						align-items: center;
						justify-content: space-between;
						margin-top: 28rpx;
					}
					
					.room-tag {
						padding: 8rpx 16rpx;
						border-radius: 999rpx;
						background: rgba(59,130,246,0.18);
						color: #93c5fd;
						font-size: 22rpx;
					}
					
					.power-btn {
						width: 62rpx;
						height: 62rpx;
						border-radius: 50%;
						display: flex;
						align-items: center;
						justify-content: center;
						color: #ffffff;
						font-size: 30rpx;
						transition: all 0.3s;
					}
					
					.power-on {
						background:
						linear-gradient(
							135deg,
							#3b82f6,
							#2563eb
						);
					
						box-shadow:
							0 0 30rpx rgba(59,130,246,0.8),
							0 10rpx 24rpx rgba(37,99,235,0.4);
					}
					
					.power-off {
						background:
						linear-gradient(
							135deg,
							#64748b,
							#475569
						);
					
						opacity: 0.7;
					}
					
					/* 绑定弹窗 */
					
					.dialog-mask {
						position: fixed;
						left: 0;
						right: 0;
						top: 0;
						bottom: 0;
						background: rgba(0,0,0,0.6);
						display: flex;
						align-items: center;
						justify-content: center;
						z-index: 9999;
					}
					
					.bind-dialog {
						width: 620rpx;
						background: #ffffff;
						border-radius: 36rpx;
						padding: 40rpx 34rpx;
						box-sizing: border-box;
					}
					
					.dialog-title {
						font-size: 36rpx;
						font-weight: 900;
						color: #111827;
						text-align: center;
					}
					
					.lift-input {
						height: 90rpx;
						border-radius: 20rpx;
						background: #f3f4f6;
						padding: 0 24rpx;
						font-size: 28rpx;
						margin-top: 34rpx;
					}
					
					.dialog-actions {
						display: flex;
						gap: 20rpx;
						margin-top: 34rpx;
					}
					
					.scan-btn,
					.submit-btn {
						flex: 1;
						height: 82rpx;
						border-radius: 22rpx;
						display: flex;
						align-items: center;
						justify-content: center;
						font-size: 28rpx;
						font-weight: 700;
						color: #ffffff;
					}
					
					.scan-btn {
						background:
						linear-gradient(
							135deg,
							#0ea5e9,
							#2563eb
						);
					}
					
					.submit-btn {
						background:
						linear-gradient(
							135deg,
							#10b981,
							#059669
						);
					}
					
					.close-dialog {
						margin-top: 30rpx;
						text-align: center;
						font-size: 28rpx;
						color: #6b7280;
					}
					
					/* AI语音 */
					
					.voice-float {
						position: fixed;
						right: 34rpx;
						bottom: 160rpx;
						z-index: 999;
					}
					
					.voice-circle {
						width: 120rpx;
						height: 120rpx;
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
					
						font-size: 48rpx;
						color: #ffffff;
					
						border: 6rpx solid rgba(255,255,255,0.2);
					
						box-shadow:
							0 0 40rpx rgba(37,99,235,0.8),
							0 20rpx 50rpx rgba(0,0,0,0.3);
					
						animation: breathing 2s infinite;
					}
					
					@keyframes breathing {
					
						0% {
							transform: scale(1);
							box-shadow: 0 0 40rpx rgba(37,99,235,0.6);
						}
					
						50% {
							transform: scale(1.08);
							box-shadow: 0 0 80rpx rgba(37,99,235,1);
						}
					
						100% {
							transform: scale(1);
							box-shadow: 0 0 40rpx rgba(37,99,235,0.6);
						}
					
					}
					
					</style>