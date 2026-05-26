<template>
	
	<view class="custom-navbar">
	  <view class="navbar-left"></view>
	
	  <view class="navbar-title">
	    工单详情
	  </view>
	
	  <view class="navbar-right">
	    <view class="dot-btn">···</view>
	    <view class="circle-btn"></view>
	  </view>
	</view>

	<view class="page">

		<!-- 顶部 -->



		<!-- 表单 -->

		<view class="form-card">

			<!-- 工单类型 -->

			<view class="form-row">

				<view class="label required">
					工单类型
				</view>

				<view class="type-group">

					<view
						class="type-btn"
						:class="form.fault_type === '报警' ? 'type-active' : ''"
						@click="selectType('报警')"
					>
						报警
					</view>

					<view
						class="type-btn"
						:class="form.fault_type === '维修' ? 'type-active' : ''"
						@click="selectType('维修')"
					>
						维修
					</view>

					<view
						class="type-btn"
						:class="form.fault_type === '保养' ? 'type-active' : ''"
						@click="selectType('保养')"
					>
						保养
					</view>

				</view>

			</view>

			<view
				v-if="errors.fault_type"
				class="error-text"
			>
				{{ errors.fault_type }}
			</view>

			<!-- 联系人 -->

			<view class="form-row">

				<view class="label required">
					联系人
				</view>

				<input
					v-model="form.user_name"
					class="input"
					maxlength="10"
					placeholder="请输入联系人"
				/>

			</view>

			<view
				v-if="errors.user_name"
				class="error-text"
			>
				{{ errors.user_name }}
			</view>

			<!-- 电话 -->

			<view class="form-row">

				<view class="label required">
					联系电话
				</view>

				<input
					v-model="form.user_phone"
					class="input"
					type="number"
					maxlength="11"
					placeholder="请输入联系电话"
				/>

			</view>

			<view
				v-if="errors.user_phone"
				class="error-text"
			>
				{{ errors.user_phone }}
			</view>

			<!-- 地址 -->

			<view class="form-block">

				<view class="label required">
					地址
				</view>

				<textarea
					v-model="form.address"
					class="textarea"
					maxlength="50"
					auto-height
					placeholder="请输入地址"
				/>

			</view>

			<view
				v-if="errors.address"
				class="error-text"
			>
				{{ errors.address }}
			</view>

			<!-- 设备类型 -->

			<view class="form-row">

				<view class="label">
					设备类型
				</view>

				<picker
					mode="selector"
					:range="deviceTypeList"
					@change="deviceTypeChange"
				>

					<view class="picker-value">

						{{ form.device_type || '请选择设备类型' }}

						<text class="arrow">
							›
						</text>

					</view>

				</picker>

			</view>

			<!-- 设备ID -->

			<view class="form-row">

				<view class="label">
					设备ID
				</view>

				<input
					v-model="form.device_id"
					class="input"
					placeholder="请输入设备ID"
				/>

			</view>

			<!-- 设备品牌 -->

			<view class="form-row">

				<view class="label">
					设备品牌
				</view>

				<input
					v-model="form.device_brand"
					class="input"
					placeholder="请输入设备品牌"
				/>

			</view>

			<!-- 设备型号 -->

			<view class="form-row">

				<view class="label">
					设备型号
				</view>

				<input
					v-model="form.device_model"
					class="input"
					placeholder="请输入设备型号"
				/>

			</view>
						<!-- 预约日期 -->
			
						<view
							v-if="needAppointment"
							class="form-row"
						>
			
							<view class="label required">
								预约日期
							</view>
			
							<picker
								mode="date"
								:start="today"
								:value="form.appointment_date"
								@change="dateChange"
							>
			
								<view class="picker-value">
			
									{{ form.appointment_date || '请选择预约日期' }}
			
									<text class="arrow">
										›
									</text>
			
								</view>
			
							</picker>
			
						</view>
			
						<view
							v-if="errors.appointment_date"
							class="error-text"
						>
							{{ errors.appointment_date }}
						</view>
			
						<!-- 预约时间 -->
			
						<view
							v-if="needAppointment"
							class="form-row"
						>
			
							<view class="label required">
								预约时间
							</view>
			
							<picker
								mode="time"
								:value="form.appointment_time"
								@change="timeChange"
							>
			
								<view class="picker-value">
			
									{{ form.appointment_time || '请选择预约时间' }}
			
									<text class="arrow">
										›
									</text>
			
								</view>
			
							</picker>
			
						</view>
			
						<view
							v-if="errors.appointment_time"
							class="error-text"
						>
							{{ errors.appointment_time }}
						</view>
			
						<!-- 描述 -->
			
						<view class="desc-title">
							工单描述
						</view>
			
						<view class="desc-box">
			
							<textarea
								v-model="form.desc"
								class="desc-textarea"
								maxlength="100"
								placeholder="请输入工单描述"
							/>
			
							<view class="count">
								{{ form.desc.length }}/100
							</view>
			
						</view>
			
						<!-- 提交 -->
			
						<view
							class="submit-btn"
							@click="submitOrder"
						>
							{{ submitText }}
						</view>
			
					</view>
			
				</view>
			
			</template>
			
			<script>
			
			export default {
			
				data() {
			
					return {
			
						isEdit: false,
			
						deviceTypeList: [
			
							'电梯',
			
							'机器人'
			
						],
			
						form: {
			
							order_id: '',
			
							user_name: '',
			
							user_phone: '',
			
							address: '',
			
							device_type: '电梯',
			
							device_id: 'ELV-001',
			
							device_brand: 'OTIS',
			
							device_model: 'OTIS-GX200',
			
							fault_type: '维修',
			
							order_status: '待接单',
			
							repair_name: '',
			
							repair_phone: '',
			
							finish_time: '',
			
							appointment_date: '',
			
							appointment_time: '',
			
							desc: ''
			
						},
			
						errors: {
			
							fault_type: '',
			
							user_name: '',
			
							user_phone: '',
			
							address: '',
			
							appointment_date: '',
			
							appointment_time: ''
			
						}
			
					}
			
				},
			
				computed: {
			
					today() {
			
						const date = new Date()
			
						const y = date.getFullYear()
			
						const m = String(
							date.getMonth() + 1
						).padStart(2, '0')
			
						const d = String(
							date.getDate()
						).padStart(2, '0')
			
						return `${y}-${m}-${d}`
			
					},
			
					needAppointment() {
			
						return (
			
							this.form.fault_type === '维修' ||
			
							this.form.fault_type === '保养'
			
						)
			
					},
			
					submitText() {
			
						if(this.isEdit){
			
							return '保存修改'
			
						}
			
						if(this.form.fault_type === '报警'){
			
							return '提交报警'
			
						}
			
						if(this.form.fault_type === '维修'){
			
							return '提交维修'
			
						}
			
						if(this.form.fault_type === '保养'){
			
							return '提交保养'
			
						}
			
						return '提交工单'
			
					}
			
				},
					onLoad(options) {
				
						/* 首页跳转类型 */
				
						if(options.type){
				
							if(
				
								options.type === 'alarm' ||
				
								options.type === 'rescue'
				
							){
				
								this.form.fault_type = '报警'
				
							}
				
							if(options.type === 'repair'){
				
								this.form.fault_type = '维修'
				
							}
				
							if(options.type === 'maintain'){
				
								this.form.fault_type = '保养'
				
							}
				
						}
				
						/* 修改工单 */
				
						if(options.edit === '1'){
				
							this.isEdit = true
				
						}
				
						/* 设备信息 */
				
						if(options.device_type){
				
							this.form.device_type =
								options.device_type
				
						}
				
						if(options.device_id){
				
							this.form.device_id =
								options.device_id
				
						}
				
						if(options.device_brand){
				
							this.form.device_brand =
								options.device_brand
				
						}
				
						if(options.device_model){
				
							this.form.device_model =
								options.device_model
				
						}
				
					},
				
					methods: {
				
						/* 返回 */
				
						goBack() {
				
							uni.navigateBack()
				
						},
				
						/* 设备类型切换 */
				
						deviceTypeChange(e) {
				
							this.form.device_type =
								this.deviceTypeList[e.detail.value]
				
						},
				
						/* 工单类型切换 */
				
						selectType(type) {
				
							if(this.isEdit){
				
								uni.showToast({
				
									title: '修改工单不能修改工单类型',
				
									icon: 'none'
				
								})
				
								return
				
							}
				
							this.form.fault_type = type
				
							/* 报警不需要预约 */
				
							if(type === '报警'){
				
								this.form.appointment_date = ''
				
								this.form.appointment_time = ''
				
								this.errors.appointment_date = ''
				
								this.errors.appointment_time = ''
				
							}
				
						},
				
						/* 日期 */
				
						dateChange(e) {
				
							this.form.appointment_date =
								e.detail.value
				
							this.errors.appointment_date = ''
				
						},
				
						/* 时间 */
				
						timeChange(e) {
				
							this.form.appointment_time =
								e.detail.value
				
							this.errors.appointment_time = ''
				
						},
				
						/* 校验 */
				
						validate() {
				
							this.clearErrors()
				
							let valid = true
				
							/* 工单类型 */
				
							if(!this.form.fault_type){
				
								this.errors.fault_type =
									'工单类型不得为空'
				
								valid = false
				
							}
				
							/* 联系人 */
				
							if(!this.form.user_name){
				
								this.errors.user_name =
									'联系人不得为空'
				
								valid = false
				
							}
				
							/* 电话 */
				
							if(!this.form.user_phone){
				
								this.errors.user_phone =
									'联系电话不得为空'
				
								valid = false
				
							}else if(
				
								!/^1\d{10}$/.test(
									this.form.user_phone
								)
				
							){
				
								this.errors.user_phone =
									'联系电话格式不正确'
				
								valid = false
				
							}
				
							/* 地址 */
				
							if(!this.form.address){
				
								this.errors.address =
									'地址不得为空'
				
								valid = false
				
							}
				
							/* 维修保养需要预约 */
				
							if(this.needAppointment){
				
								if(!this.form.appointment_date){
				
									this.errors.appointment_date =
										'预约日期不得为空'
				
									valid = false
				
								}
				
								if(!this.form.appointment_time){
				
									this.errors.appointment_time =
										'预约时间不得为空'
				
									valid = false
				
								}
				
								if(
				
									this.form.appointment_date &&
				
									this.form.appointment_time &&
				
									this.isPastAppointment()
				
								){
				
									this.errors.appointment_time =
										'预约时间不得早于当前时间'
				
									valid = false
				
								}
				
							}
				
							return valid
				
						},
				
						/* 清空错误 */
				
						clearErrors() {
				
							this.errors = {
				
								fault_type: '',
				
								user_name: '',
				
								user_phone: '',
				
								address: '',
				
								appointment_date: '',
				
								appointment_time: ''
				
							}
				
						},
								/* 是否过去时间 */
						
								isPastAppointment() {
						
									const appointment = new Date(
						
										this.form.appointment_date +
						
										' ' +
						
										this.form.appointment_time +
						
										':00'
						
									)
						
									const now = new Date()
						
									return (
										appointment.getTime() <
										now.getTime()
									)
						
								},
						
								/* 创建工单ID */
						
								createOrderId() {
						
									const now = new Date()
						
									const y = now.getFullYear()
						
									const m = String(
										now.getMonth() + 1
									).padStart(2, '0')
						
									const d = String(
										now.getDate()
									).padStart(2, '0')
						
									const h = String(
										now.getHours()
									).padStart(2, '0')
						
									const min = String(
										now.getMinutes()
									).padStart(2, '0')
						
									const s = String(
										now.getSeconds()
									).padStart(2, '0')
						
									return 'WO' + y + m + d + h + min + s
						
								},
						
								/* 创建时间 */
						
								getCurrentTime() {
						
									const now = new Date()
						
									const y = now.getFullYear()
						
									const m = String(
										now.getMonth() + 1
									).padStart(2, '0')
						
									const d = String(
										now.getDate()
									).padStart(2, '0')
						
									const h = String(
										now.getHours()
									).padStart(2, '0')
						
									const min = String(
										now.getMinutes()
									).padStart(2, '0')
						
									return `${y}-${m}-${d} ${h}:${min}`
						
								},
						
								/* 家庭报警通知 */
						
								sendFamilyAlarm() {
						
									const familyList = [
						
										{
											name: '爸爸',
											phone: '138****1111'
										},
						
										{
											name: '妈妈',
											phone: '138****2222'
										},
						
										{
											name: '儿子',
											phone: '138****3333'
										}
						
									]
						
									familyList.forEach(item => {
						
										console.log(
						
											'发送报警通知给：',
						
											item.name,
						
											item.phone
						
										)
						
									})
						
									uni.showModal({
						
										title: '家庭报警通知',
						
										content: '报警信息已同步发送给家庭成员',
						
										showCancel: false
						
									})
						
								},
						
								/* 提交工单 */
						
								submitOrder() {
						
									/* 校验 */
						
									if(!this.validate()){
						
										return
						
									}
						
									/* 工单ID */
						
									if(!this.form.order_id){
						
										this.form.order_id =
											this.createOrderId()
						
									}
						
									/* 状态 */
						
									this.form.order_status = '待接单'
						
									/* 完成时间 */
						
									this.form.finish_time = ''
						
									/* 工单数据 */
						
									const orderData = {
						
										/* 工单 */
						
										order_id:
											this.form.order_id,
						
										order_type:
											this.form.fault_type,
						
										order_status:
											this.form.order_status,
						
										description:
											this.form.desc,
						
										create_time:
											this.getCurrentTime(),
						
										finish_time:
											this.form.finish_time,
						
										/* 用户 */
						
										user_name:
											this.form.user_name,
						
										user_phone:
											this.form.user_phone,
						
										address:
											this.form.address,
						
										/* 设备 */
						
										device_type:
											this.form.device_type,
						
										device_id:
											this.form.device_id,
						
										device_brand:
											this.form.device_brand,
						
										device_model:
											this.form.device_model,
						
										/* 维修员 */
						
										repair_name:
											this.form.repair_name,
						
										repair_phone:
											this.form.repair_phone,
						
										/* 预约 */
						
										appoint_date:
											this.form.appointment_date,
						
										appoint_time:
											this.form.appointment_time
						
									}
												/* 打印 */
									
												console.log(
									
													'提交工单数据：',
									
													orderData
									
												)
									
												/* 报警通知家庭成员 */
									
												if(this.form.fault_type === '报警'){
									
													this.sendFamilyAlarm()
									
												}
									
												/* 本地工单存储 */
									
												let orderList =
									
													uni.getStorageSync('orderList') || []
									
												orderList.unshift(orderData)
									
												uni.setStorageSync(
									
													'orderList',
									
													orderList
									
												)
									
												/* 提示 */
									
												uni.showToast({
									
													title:
									
														this.submitText + '成功',
									
													icon: 'success'
									
												})
									
												/* 跳转详情 */
									
												setTimeout(() => {
									
													uni.navigateTo({
									
														url:
									
														'/pages/orderDetail/orderDetail?' +
									
														'order_id=' +
									
														encodeURIComponent(
															orderData.order_id
														) +
									
														'&user_name=' +
									
														encodeURIComponent(
															orderData.user_name
														) +
									
														'&user_phone=' +
									
														encodeURIComponent(
															orderData.user_phone
														) +
									
														'&address=' +
									
														encodeURIComponent(
															orderData.address
														) +
									
														'&device_type=' +
									
														encodeURIComponent(
															orderData.device_type
														) +
									
														'&device_id=' +
									
														encodeURIComponent(
															orderData.device_id
														) +
									
														'&device_brand=' +
									
														encodeURIComponent(
															orderData.device_brand
														) +
									
														'&device_model=' +
									
														encodeURIComponent(
															orderData.device_model
														) +
									
														'&order_type=' +
									
														encodeURIComponent(
															orderData.order_type
														) +
									
														'&order_status=' +
									
														encodeURIComponent(
															orderData.order_status
														) +
									
														'&description=' +
									
														encodeURIComponent(
															orderData.description
														) +
									
														'&repair_name=' +
									
														encodeURIComponent(
															orderData.repair_name
														) +
									
														'&repair_phone=' +
									
														encodeURIComponent(
															orderData.repair_phone
														) +
									
														'&appoint_date=' +
									
														encodeURIComponent(
															orderData.appoint_date
														) +
									
														'&appoint_time=' +
									
														encodeURIComponent(
															orderData.appoint_time
														) +
									
														'&create_time=' +
									
														encodeURIComponent(
															orderData.create_time
														) +
									
														'&finish_time=' +
									
														encodeURIComponent(
															orderData.finish_time
														)
									
													})
									
												}, 800)
									
											}
									
										}
									
									}
									
									</script>
									<style>
									
									page {
									
										background: #f6f7fb;
									}
									
									.page {
									
										min-height: 100vh;
									
										background: #f6f7fb;
									}
									
									/* 顶部 */
									.custom-navbar {
									  height: 88rpx;
									  padding-top: var(--status-bar-height);
									
									  display: flex;
									  align-items: center;
									  justify-content: space-between;
									
									  background: #ffffff;
									
									  border-bottom: 1rpx solid #f3f4f6;
									}
									
									.navbar-left {
									  width: 160rpx;
									}
									
									.navbar-title {
									  flex: 1;
									
									  text-align: center;
									
									  font-size: 38rpx;
									  font-weight: 600;
									
									  color: #111827;
									}
									
									.navbar-right {
									  width: 160rpx;
									
									  display: flex;
									  justify-content: flex-end;
									  align-items: center;
									
									  padding-right: 24rpx;
									}
									
									.dot-btn {
									  width: 56rpx;
									  height: 56rpx;
									
									  border-radius: 28rpx;
									
									  background: #f5f5f5;
									
									  display: flex;
									  align-items: center;
									  justify-content: center;
									
									  margin-right: 12rpx;
									
									  font-size: 28rpx;
									}
									
									.circle-btn {
									  width: 56rpx;
									  height: 56rpx;
									
									  border-radius: 50%;
									
									  border: 2rpx solid #333;
									}
									
									.nav-bar {
									
										height: 96rpx;
									
										padding:
										24rpx 28rpx 0;
									
										box-sizing: border-box;
									
										background: #ffffff;
									
										display: flex;
										align-items: center;
										justify-content: space-between;
									
										border-bottom:
										1rpx solid #e5e7eb;
									}
									
									.back-btn {
									
										width: 64rpx;
										height: 64rpx;
									
										display: flex;
										align-items: center;
										justify-content: center;
									
										font-size: 54rpx;
									
										color: #111827;
									}
									
									.nav-title {
									
										font-size: 32rpx;
										font-weight: 600;
									
										color: #111827;
									}
									
									.nav-placeholder {
									
										width: 64rpx;
										height: 64rpx;
									}
									
									/* 表单 */
									
									.form-card {
									
										padding:
										46rpx 52rpx 80rpx;
									
										box-sizing: border-box;
									
										background: #ffffff;
									
										min-height:
										calc(100vh - 96rpx);
									}
									
									/* 行 */
									
									.form-row {
									
										min-height: 96rpx;
									
										border-bottom:
										1rpx solid #d1d5db;
									
										display: flex;
										align-items: center;
										justify-content: space-between;
									}
									
									.form-block {
									
										padding-top: 26rpx;
									
										border-bottom:
										1rpx solid #d1d5db;
									}
									
									/* label */
									
									.label {
									
										width: 180rpx;
									
										font-size: 30rpx;
									
										color: #111827;
									
										flex-shrink: 0;
									}
									
									.required::before {
									
										content: '*';
									
										color: #ef4444;
									
										margin-right: 4rpx;
									}
									
									/* 输入框 */
									
									.input {
									
										flex: 1;
									
										height: 86rpx;
									
										font-size: 30rpx;
									
										color: #111827;
									
										text-align: right;
									}
									
									/* 类型 */
									
									.type-group {
									
										flex: 1;
									
										display: flex;
										align-items: center;
										justify-content: flex-end;
									
										flex-wrap: wrap;
									}
									
									.type-btn {
									
										min-width: 96rpx;
										height: 52rpx;
									
										border-radius: 8rpx;
									
										border:
										2rpx solid #d1d5db;
									
										display: flex;
										align-items: center;
										justify-content: center;
									
										font-size: 28rpx;
									
										color: #111827;
									
										margin-left: 16rpx;
									
										background: #ffffff;
									}
									
									.type-active {
									
										border-color: #409eff;
									
										color: #409eff;
									
										background:
										rgba(64,158,255,0.08);
									}
									
									/* textarea */
									
									.textarea {
									
										width: 100%;
									
										min-height: 86rpx;
									
										font-size: 30rpx;
									
										color: #111827;
									
										line-height: 44rpx;
									
										padding:
										20rpx 0;
									
										box-sizing: border-box;
									
										text-align: right;
									}
									
									/* picker */
									
									.picker-value {
									
										min-width: 360rpx;
									
										height: 86rpx;
									
										display: flex;
										align-items: center;
										justify-content: flex-end;
									
										font-size: 30rpx;
									
										color: #111827;
									}
									
									.arrow {
									
										margin-left: 10rpx;
									
										color: #111827;
									}
									
									/* 错误 */
									
									.error-text {
									
										padding-top: 8rpx;
									
										font-size: 24rpx;
									
										color: #ef4444;
									
										text-align: right;
									}
									
									/* 描述 */
									
									.desc-title {
									
										font-size: 30rpx;
									
										color: #111827;
									
										margin-top: 32rpx;
									
										margin-bottom: 18rpx;
									}
									
									.desc-box {
									
										height: 260rpx;
									
										border:
										1rpx solid #c9c9c9;
									
										position: relative;
									
										box-sizing: border-box;
									
										border-radius: 12rpx;
									
										background: #fafafa;
									}
									
									.desc-textarea {
									
										width: 100%;
										height: 210rpx;
									
										padding: 18rpx;
									
										box-sizing: border-box;
									
										font-size: 28rpx;
										line-height: 42rpx;
									
										color: #111827;
									}
									
									/* 字数 */
									
									.count {
									
										position: absolute;
									
										right: 18rpx;
										bottom: 14rpx;
									
										font-size: 24rpx;
									
										color: #9ca3af;
									}
									
									/* 提交按钮 */
									
									.submit-btn {
									
										height: 78rpx;
									
										border-radius: 14rpx;
									
										background:
										linear-gradient(
											135deg,
											#3b82f6,
											#2563eb
										);
									
										color: #ffffff;
									
										font-size: 30rpx;
										font-weight: 700;
									
										display: flex;
										align-items: center;
										justify-content: center;
									
										margin-top: 120rpx;
									
										box-shadow:
										0 12rpx 28rpx rgba(37,99,235,0.22);
									}
									
									.submit-btn:active {
									
										transform: scale(0.98);
									}
									
									/* 响应式 */
									
									@media screen and (max-width: 750rpx){
									
										.form-card {
									
											padding:
											36rpx 32rpx 80rpx;
										}
									
										.label {
									
											width: 160rpx;
									
											font-size: 28rpx;
										}
									
										.input,
										.textarea,
										.picker-value {
									
											font-size: 28rpx;
										}
									
									}
									
									</style>