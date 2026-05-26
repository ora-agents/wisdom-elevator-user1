<template>

	<view class="page">

		<!-- 顶部导航 -->
		<view class="nav-bar">

			<view
				class="back-btn"
				@click="goBack"
			>
				‹
			</view>

			<view class="nav-title">
				工单详情
			</view>

			<view class="nav-more">
				•••
			</view>

		</view>

		<view class="content">

			<!-- 工单卡片 -->
			<view class="order-card">

				<!-- 工单头 -->
				<view class="order-head">

					<view class="order-id-wrap">

						<view class="order-label">
							工单 ID
						</view>

						<view class="order-id">
							{{ order.order_id }}
						</view>

					</view>

					<view
						class="status-badge"
						:class="statusClass"
					>
						{{ order.order_status }}
					</view>

				</view>

				<!-- 信息 -->
				<view class="info-list">

					<!-- 用户姓名 -->
					<view class="info-row">

						<view class="info-left">

							<view class="info-icon">
								👤
							</view>

							<view class="info-label">
								用户姓名
							</view>

						</view>

						<view class="info-value">
							{{ order.user_name || '—' }}
						</view>

					</view>

					<!-- 联系电话 -->
					<view class="info-row">

						<view class="info-left">

							<view class="info-icon">
								☎
							</view>

							<view class="info-label">
								联系电话
							</view>

						</view>

						<view class="info-value">
							{{ order.user_phone || '—' }}
						</view>

					</view>

					<!-- 地址 -->
					<view class="info-row">

						<view class="info-left">

							<view class="info-icon">
								📍
							</view>

							<view class="info-label">
								地址
							</view>

						</view>

						<view class="info-value">
							{{ order.address || '—' }}
						</view>

					</view>

					<!-- 设备类型 -->
					<view class="info-row">

						<view class="info-left">

							<view class="info-icon">
								🏢
							</view>

							<view class="info-label">
								设备类型
							</view>

						</view>

						<view class="info-value">

							{{
								order.device_type ||
								autoDeviceType(order)
							}}

						</view>

					</view>

					<!-- 设备ID -->
					<view class="info-row">

						<view class="info-left">

							<view class="info-icon">
								ID
							</view>

							<view class="info-label">
								设备ID
							</view>

						</view>

						<view class="info-value">
							{{ order.device_id || '—' }}
						</view>

					</view>

					<!-- 设备品牌 -->
					<view class="info-row">

						<view class="info-left">

							<view class="info-icon">
								🏷
							</view>

							<view class="info-label">
								设备品牌
							</view>

						</view>

						<view class="info-value">

							{{
								order.device_brand ||
								order.deviceBrand ||
								'—'
							}}

						</view>

					</view>

					<!-- 设备型号 -->
					<view class="info-row">

						<view class="info-left">

							<view class="info-icon">
								▣
							</view>

							<view class="info-label">
								设备型号
							</view>

						</view>

						<view class="info-value">

							{{
								order.device_model ||
								order.deviceModel ||
								'—'
							}}

						</view>

					</view>

					<!-- 工单类型 -->
					<view class="info-row">

						<view class="info-left">

							<view class="info-icon">
								📄
							</view>

							<view class="info-label">
								工单类型
							</view>

						</view>

						<view class="info-value">

							{{
								order.order_type ||
								order.type ||
								'—'
							}}

						</view>

					</view>

					<!-- 工单描述 -->
					<view class="info-row">

						<view class="info-left">

							<view class="info-icon">
								📝
							</view>

							<view class="info-label">
								工单描述
							</view>

						</view>

						<view class="info-value">

							{{
								order.description ||
								order.problem ||
								order.remark ||
								'—'
							}}

						</view>

					</view>
										<!-- 工单状态 -->
										<view class="info-row progress-row">
					
											<view class="info-left">
					
												<view class="info-icon">
													☑
												</view>
					
												<view class="info-label">
													工单状态
												</view>
					
											</view>
					
											<view class="progress-box">
					
												<view class="progress-line">
					
													<view class="progress-bg"></view>
					
													<view
														class="progress-active"
														:style="{ width: progressWidth }"
													></view>
					
													<view
														class="progress-dot"
														:class="currentStep >= 0 ? 'done' : ''"
													></view>
					
													<view
														class="progress-dot middle"
														:class="currentStep >= 1 ? 'done' : ''"
													></view>
					
													<view
														class="progress-dot end"
														:class="currentStep >= 2 ? 'done' : ''"
													></view>
					
												</view>
					
												<view class="progress-text">
					
													<view class="progress-name">
														待接单
													</view>
					
													<view class="progress-name">
														已接单
													</view>
					
													<view class="progress-name">
														已完成
													</view>
					
												</view>
					
											</view>
					
										</view>
					
										<!-- 维修人员姓名 -->
										<view class="info-row">
					
											<view class="info-left">
					
												<view class="info-icon">
													👨‍🔧
												</view>
					
												<view class="info-label">
													维修人员姓名
												</view>
					
											</view>
					
											<view class="repairman">
					
												<view class="repair-avatar">
													👨‍🔧
												</view>
					
												<view class="info-value">
					
													{{
														order.repair_name ||
														'暂未分配'
													}}
					
												</view>
					
											</view>
					
										</view>
					
										<!-- 维修人员电话 -->
										<view class="info-row">
					
											<view class="info-left">
					
												<view class="info-icon">
													📞
												</view>
					
												<view class="info-label">
													维修人员电话
												</view>
					
											</view>
					
											<view class="info-value">
					
												{{
													order.repair_phone ||
													'—'
												}}
					
											</view>
					
										</view>
					
										<!-- 创建时间 -->
										<view class="info-row">
					
											<view class="info-left">
					
												<view class="info-icon">
													🕘
												</view>
					
												<view class="info-label">
													创建时间
												</view>
					
											</view>
					
											<view class="info-value">
					
												{{
													order.create_time ||
													order.time ||
													'—'
												}}
					
											</view>
					
										</view>
					
										<!-- 完成时间 -->
										<view class="info-row no-border">
					
											<view class="info-left">
					
												<view class="info-icon">
													✅
												</view>
					
												<view class="info-label">
													完成时间
												</view>
					
											</view>
					
											<view class="info-value">
					
												{{
													order.finish_time ||
													'—'
												}}
					
											</view>
					
										</view>
					
									</view>
					
								</view>
					
								<!-- 客服 -->
								<view class="help-row">
					
									<view class="phone-icon">
										☎
									</view>
					
									<view class="help-text">
										如需帮助，请联系客服 400-888-8888
									</view>
					
								</view>
					
								<!-- 底部按钮 -->
								<view class="bottom-actions">
					
									<!-- 待接单 -->
									<template
										v-if="
											(order.order_status || order.status) === '待接单'
										"
									>
					
										<view
											class="action-btn blue-btn"
											@click="callService"
										>
											联系客服
										</view>
					
									</template>
					
									<!-- 已接单 / 维修中 -->
									<template
										v-if="
											(order.order_status || order.status) === '已接单' ||
											(order.order_status || order.status) === '维修中'
										"
									>
					
										<view
											class="action-btn blue-btn"
											@click="callPhone"
										>
											联系维修员
										</view>
					
										<view
											class="action-btn orange-btn"
											@click="finishOrder"
										>
											确认完成
										</view>
					
									</template>
					
									<!-- 已完成 -->
									<template
										v-if="
											(order.order_status || order.status) === '已完成'
										"
									>
					
										<view class="action-btn gray-btn">
											工单已完成
										</view>
					
										<view
											v-if="!order.rate_done"
											class="action-btn orange-btn"
											@click="showRate = true"
										>
											评价维修员
										</view>
					
										<view
											v-else
											class="action-btn gray-btn"
										>
											已评价
										</view>
					
									</template>
					
								</view>
					
							</view>
									<!-- 评价弹窗 -->
									<view
										v-if="showRate"
										class="rate-mask"
									>
							
										<view class="rate-box">
							
											<view class="rate-title">
												评价维修服务
											</view>
							
											<!-- 星级 -->
											<view class="stars">
							
												<view
													v-for="i in 5"
													:key="i"
													class="star"
													:class="i <= rate ? 'star-active' : ''"
													@click="setRate(i)"
												>
													★
												</view>
							
											</view>
							
											<!-- 输入 -->
											<textarea
												v-model="rateText"
												class="rate-input"
												placeholder="请输入评价内容（选填）"
												maxlength="100"
											/>
							
											<!-- 按钮 -->
											<view class="rate-actions">
							
												<view
													class="cancel-btn"
													@click="showRate = false"
												>
													取消
												</view>
							
												<view
													class="submit-rate-btn"
													@click="submitRate"
												>
													提交评价
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
							
										order: {
							
											/* 新结构 */
							
											order_id: '',
							
											user_name: '',
							
											user_phone: '',
							
											address: '',
							
											device_type: '',
							
											device_id: '',
							
											device_brand: '',
							
											device_model: '',
							
											order_type: '',
							
											order_status: '待接单',
							
											repair_name: '',
							
											repair_phone: '',
							
											description: '',
							
											create_time: '',
							
											finish_time: '',
							
											/* 旧结构兼容 */
							
											orderId: '',
							
											type: '',
							
											status: '',
							
											phone: '',
							
											deviceBrand: '',
							
											deviceModel: '',
							
											remark: '',
							
											time: '',
							
											problem: '',
							
											/* 评价 */
							
											rate_done: false,
							
											rate_score: 0,
							
											rate_content: ''
							
										},
							
										showRate: false,
							
										rate: 5,
							
										rateText: ''
							
									}
							
								},
							
								onLoad(options) {
							
									this.order = {
							
										/* 新字段 */
							
										order_id:
											this.decode(options.order_id || options.id),
							
										user_name:
											this.decode(options.user_name),
							
										user_phone:
											this.decode(
												options.user_phone ||
												options.phone
											),
							
										address:
											this.decode(options.address),
							
										device_type:
											this.decode(options.device_type) ||
											this.autoDeviceType(options),
							
										device_id:
											this.decode(options.device_id),
							
										device_brand:
											this.decode(
												options.device_brand ||
												options.deviceBrand
											),
							
										device_model:
											this.decode(
												options.device_model ||
												options.deviceModel
											),
							
										order_type:
											this.decode(
												options.order_type ||
												options.type
											),
							
										order_status:
											this.decode(
												options.order_status ||
												options.status ||
												'待接单'
											),
							
										repair_name:
											this.decode(options.repair_name),
							
										repair_phone:
											this.decode(options.repair_phone),
							
										description:
											this.decode(
												options.description ||
												options.problem ||
												options.remark
											),
							
										create_time:
											this.decode(
												options.create_time ||
												options.time
											),
							
										finish_time:
											this.decode(options.finish_time),
							
										/* 旧结构 */
							
										orderId:
											this.decode(options.id),
							
										type:
											this.decode(options.type),
							
										status:
											this.decode(options.status),
							
										phone:
											this.decode(options.phone),
							
										deviceBrand:
											this.decode(options.deviceBrand),
							
										deviceModel:
											this.decode(options.deviceModel),
							
										remark:
											this.decode(options.remark),
							
										time:
											this.decode(options.time),
							
										problem:
											this.decode(options.problem),
							
										/* 默认评价 */
							
										rate_done: false,
							
										rate_score: 0,
							
										rate_content: ''
							
									}
							
								},
									computed: {
								
										/* 当前步骤 */
								
										currentStep() {
								
											const status =
												this.order.order_status ||
												this.order.status
								
											if(status === '待接单') {
								
												return 0
								
											}
								
											if(
												status === '已接单' ||
												status === '维修中'
											){
								
												return 1
								
											}
								
											if(status === '已完成') {
								
												return 2
								
											}
								
											return 0
								
										},
								
										/* 进度 */
								
										progressWidth() {
								
											if(this.currentStep === 0) {
								
												return '0%'
								
											}
								
											if(this.currentStep === 1) {
								
												return '50%'
								
											}
								
											return '100%'
								
										},
								
										/* 状态颜色 */
								
										statusClass() {
								
											const status =
												this.order.order_status ||
												this.order.status
								
											if(status === '待接单') {
								
												return 'status-wait'
								
											}
								
											if(
												status === '已接单' ||
												status === '维修中'
											){
								
												return 'status-doing'
								
											}
								
											if(status === '已完成') {
								
												return 'status-done'
								
											}
								
											return ''
								
										}
								
									},
								
									methods: {
								
										/* 防乱码 */
								
										decode(value) {
								
											if(!value) {
								
												return ''
								
											}
								
											try {
								
												return decodeURIComponent(value)
								
											}catch(e){
								
												return value
								
											}
								
										},
								
										/* 自动设备类型 */
								
										autoDeviceType(options) {
								
											const text =
								
												this.decode(options.device_model) +
								
												this.decode(options.deviceModel) +
								
												this.decode(options.device_brand) +
								
												this.decode(options.deviceBrand) +
								
												this.decode(options.device_name) +
								
												this.decode(options.device)
								
											if(text.includes('机器人')) {
								
												return '机器人'
								
											}
								
											return '电梯'
								
										},
								
										/* 返回 */
								
										goBack() {
								
											uni.navigateBack()
								
										},
								
										/* 联系客服 */
								
										callService() {
								
											uni.makePhoneCall({
								
												phoneNumber: '4008888888'
								
											})
								
										},
								
										/* 联系维修员 */
								
										callPhone() {
								
											uni.makePhoneCall({
								
												phoneNumber:
								
													this.order.repair_phone ||
								
													'13900000000'
								
											})
								
										},
								
										/* 确认完成 */
								
										finishOrder() {
								
											this.showRate = true
								
										},
								
										/* 星级评分 */
								
										setRate(val) {
								
											this.rate = val
								
										},
								
										/* 提交评价 */
								
										submitRate() {
								
											this.order.order_status = '已完成'
								
											this.order.status = '已完成'
								
											this.order.finish_time =
												new Date().toLocaleString()
								
											this.order.rate_done = true
								
											this.order.rate_score = this.rate
								
											this.order.rate_content = this.rateText
								
											uni.showToast({
								
												title: '评价成功',
								
												icon: 'success'
								
											})
								
											this.showRate = false
								
										}
								
									}
								
								}
								
								</script>
								<style>
								
								page {
								
									background: #edf4ff;
								}
								
								.page {
								
									min-height: 100vh;
								
									background:
									linear-gradient(
										180deg,
										#eaf3ff 0%,
										#f8fbff 60%,
										#ffffff 100%
									);
								}
								
								/* 顶部导航 */
								
								.nav-bar {
								
									height: 112rpx;
								
									padding:
									24rpx 30rpx 0;
								
									box-sizing: border-box;
								
									display: flex;
									align-items: center;
									justify-content: space-between;
								
									background:
									linear-gradient(
										135deg,
										#2f80ff,
										#4b9cff
									);
								
									color: #ffffff;
								}
								
								.back-btn {
								
									width: 64rpx;
									height: 64rpx;
								
									display: flex;
									align-items: center;
									justify-content: center;
								
									font-size: 52rpx;
									font-weight: 300;
								}
								
								.nav-title {
								
									font-size: 32rpx;
									font-weight: 800;
								}
								
								.nav-more {
								
									min-width: 74rpx;
									height: 48rpx;
								
									border-radius: 999rpx;
								
									background: rgba(255,255,255,0.18);
								
									display: flex;
									align-items: center;
									justify-content: center;
								
									font-size: 26rpx;
									font-weight: 900;
								}
								
								/* 内容 */
								
								.content {
								
									padding:
									18rpx 28rpx 150rpx;
								
									box-sizing: border-box;
								}
								
								/* 工单卡片 */
								
								.order-card {
								
									background: rgba(255,255,255,0.96);
								
									border-radius: 22rpx;
								
									padding:
									28rpx 28rpx 22rpx;
								
									box-shadow:
									0 14rpx 44rpx rgba(45,108,214,0.16);
								
									border:
									1rpx solid rgba(70,132,255,0.16);
								}
								
								/* 工单头 */
								
								.order-head {
								
									display: flex;
								
									align-items: center;
								
									justify-content: space-between;
								
									flex-wrap: wrap;
								
									padding-bottom: 22rpx;
								
									border-bottom:
									1rpx solid #e5edf8;
								}
								
								.order-id-wrap {
								
									display: flex;
								
									align-items: center;
								
									flex-wrap: wrap;
								
									flex: 1;
								
									padding-right: 20rpx;
								}
								
								.order-label {
								
									font-size: 27rpx;
								
									font-weight: 800;
								
									color: #334155;
								
									margin-right: 24rpx;
								
									white-space: nowrap;
								}
								
								.order-id {
								
									flex: 1;
								
									font-size: 27rpx;
								
									font-weight: 900;
								
									color: #111827;
								
									word-break: break-all;
								}
								
								/* 状态 */
								
								.status-badge {
								
									padding:
									10rpx 22rpx;
								
									border-radius: 999rpx;
								
									font-size: 24rpx;
									font-weight: 800;
								}
								
								.status-wait {
								
									background: #fef3c7;
								
									color: #d97706;
								}
								
								.status-doing {
								
									background: #dbeafe;
								
									color: #2563eb;
								}
								
								.status-done {
								
									background: #dcfce7;
								
									color: #16a34a;
								}
								
								/* 信息列表 */
								
								.info-list {
								
									margin-top: 8rpx;
								}
								
								.info-row {
								
									min-height: 72rpx;
								
									display: flex;
								
									align-items: center;
								
									justify-content: space-between;
								
									border-bottom:
									1rpx solid #e9eef6;
								
									padding:
									8rpx 0;
								
									box-sizing: border-box;
								}
								
								.info-row.no-border {
								
									border-bottom: none;
								}
								
								.info-left {
								
									width: 260rpx;
								
									display: flex;
								
									align-items: center;
								
									flex-shrink: 0;
								}
								
								.info-icon {
								
									width: 40rpx;
								
									font-size: 24rpx;
								
									color: #2f80ff;
								
									display: flex;
									align-items: center;
									justify-content: center;
								
									margin-right: 18rpx;
								}
								
								.info-label {
								
									font-size: 25rpx;
									font-weight: 700;
								
									color: #475569;
								
									white-space: nowrap;
								}
								
								.info-value {
								
									flex: 1;
								
									font-size: 25rpx;
									font-weight: 600;
								
									color: #475569;
								
									text-align: right;
								
									line-height: 42rpx;
								
									word-break: break-all;
								}
								
								/* 进度条 */
								
								.progress-row {
								
									align-items: flex-start;
								
									padding:
									18rpx 0 20rpx;
								}
								
								.progress-box {
								
									flex: 1;
								
									padding-top: 6rpx;
								}
								
								.progress-line {
								
									position: relative;
								
									height: 36rpx;
								}
								
								.progress-bg,
								.progress-active {
								
									position: absolute;
								
									left: 0;
									right: 0;
									top: 16rpx;
								
									height: 4rpx;
								
									border-radius: 999rpx;
								
									background: #cfd9e8;
								}
								
								.progress-active {
								
									right: auto;
								
									background: #3478ff;
								}
								
								.progress-dot {
								
									position: absolute;
								
									left: 0;
									top: 7rpx;
								
									width: 22rpx;
									height: 22rpx;
								
									border-radius: 50%;
								
									background: #ffffff;
								
									border:
									3rpx solid #cbd5e1;
								
									box-sizing: border-box;
								}
								
								.progress-dot.middle {
								
									left: 50%;
								
									transform: translateX(-50%);
								}
								
								.progress-dot.end {
								
									left: auto;
									right: 0;
								}
								
								.progress-dot.done {
								
									background: #3478ff;
								
									border-color: #3478ff;
								}
								
								.progress-dot.done::after {
								
									content: '✓';
								
									position: absolute;
								
									left: 50%;
									top: 50%;
								
									transform: translate(-50%,-55%);
								
									font-size: 16rpx;
									font-weight: 900;
								
									color: #ffffff;
								}
								
								.progress-text {
								
									display: flex;
									justify-content: space-between;
								}
								
								.progress-name {
								
									font-size: 22rpx;
								
									color: #64748b;
								}
								
								/* 维修员 */
								
								.repairman {
								
									flex: 1;
								
									display: flex;
									align-items: center;
									justify-content: flex-end;
								}
								
								.repair-avatar {
								
									width: 38rpx;
									height: 38rpx;
								
									border-radius: 50%;
								
									background: #e5edf8;
								
									display: flex;
									align-items: center;
									justify-content: center;
								
									font-size: 20rpx;
								
									margin-right: 12rpx;
								}
								
								/* 客服 */
								
								.help-row {
								
									margin-top: 32rpx;
								
									display: flex;
									align-items: center;
									justify-content: center;
								}
								
								.phone-icon {
								
									font-size: 24rpx;
								
									color: #2f80ff;
								
									margin-right: 10rpx;
								}
								
								.help-text {
								
									font-size: 23rpx;
								
									color: #64748b;
								}
								
								/* 底部按钮 */
								
								.bottom-actions {
								
									display: flex;
								
									gap: 22rpx;
								
									margin-top: 34rpx;
								}
								
								.action-btn {
								
									flex: 1;
								
									height: 84rpx;
								
									border-radius: 18rpx;
								
									display: flex;
									align-items: center;
									justify-content: center;
								
									font-size: 28rpx;
									font-weight: 800;
								
									color: #ffffff;
								
									box-shadow:
									0 12rpx 28rpx rgba(15,23,42,0.12);
								}
								
								.blue-btn {
								
									background:
									linear-gradient(
										135deg,
										#3b82f6,
										#2563eb
									);
								}
								
								.orange-btn {
								
									background:
									linear-gradient(
										135deg,
										#fb923c,
										#f97316
									);
								}
								
								.gray-btn {
								
									background:
									linear-gradient(
										135deg,
										#94a3b8,
										#64748b
									);
								}
								
								/* 评价弹窗 */
								
								.rate-mask {
								
									position: fixed;
								
									left: 0;
									top: 0;
									right: 0;
									bottom: 0;
								
									background: rgba(0,0,0,0.5);
								
									display: flex;
									align-items: center;
									justify-content: center;
								
									z-index: 999;
								}
								
								.rate-box {
								
									width: 620rpx;
								
									background: #ffffff;
								
									border-radius: 24rpx;
								
									padding: 32rpx;
								
									box-sizing: border-box;
								}
								
								.rate-title {
								
									font-size: 34rpx;
								
									font-weight: 800;
								
									text-align: center;
								
									color: #111827;
								}
								
								.stars {
								
									display: flex;
								
									justify-content: center;
								
									margin:
									36rpx 0;
								}
								
								.star {
								
									font-size: 58rpx;
								
									color: #d1d5db;
								
									margin: 0 12rpx;
								}
								
								.star-active {
								
									color: #f59e0b;
								}
								
								/* 输入框 */
								
								.rate-input {
								
									width: 100%;
									height: 180rpx;
								
									border:
									1rpx solid #d1d5db;
								
									border-radius: 14rpx;
								
									padding: 20rpx;
								
									box-sizing: border-box;
								
									font-size: 28rpx;
								
									color: #111827;
								
									line-height: 42rpx;
								}
								
								/* 评价按钮 */
								
								.rate-actions {
								
									display: flex;
								
									margin-top: 26rpx;
								}
								
								.cancel-btn {
								
									flex: 1;
								
									height: 76rpx;
								
									display: flex;
									align-items: center;
									justify-content: center;
								
									font-size: 28rpx;
								
									color: #64748b;
								}
								
								.submit-rate-btn {
								
									flex: 1;
								
									height: 76rpx;
								
									border-radius: 12rpx;
								
									background:
									linear-gradient(
										135deg,
										#3b82f6,
										#2563eb
									);
								
									display: flex;
									align-items: center;
									justify-content: center;
								
									font-size: 28rpx;
									font-weight: 700;
								
									color: #ffffff;
								}
								
								</style>