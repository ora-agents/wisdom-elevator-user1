<template>
  <view class="app">

    <!-- 顶部 -->
    <view class="app-header">

      <view class="header-title">
        智享家人工智能管家
      </view>

      <view class="header-subtitle">
        工单服务 · 我的设备
      </view>

    </view>

    <!-- 工单页面 -->
    <view
      class="page"
      v-if="activeTab === 'orders'">

      <!-- 筛选 -->
      <scroll-view
        scroll-x
        class="filter-bar">

        <view class="filter-inner">

          <view
            v-for="item in filters"
            :key="item"
            class="chip"
            :class="{ active: currentFilter === item }"
            @click="currentFilter = item">

            {{ item }}

          </view>

        </view>

      </scroll-view>

      <!-- 工单管理 -->
      <view class="card">

        <view class="card-title">
          工单管理
        </view>

        <!-- 快捷按钮 -->
        <view class="quick-actions">

          <view
            class="quick-btn blue"
            @click="showCreate = true">

            <view class="quick-icon">
              🔧
            </view>

            <view>

              <view class="quick-title">
                新建报修
              </view>

              <view class="quick-desc">
                故障 / 报警
              </view>

            </view>

          </view>

          <view
            class="quick-btn light"
            @click="showBook = true">

            <view class="quick-icon">
              📅
            </view>

            <view>

              <view class="quick-title">
                预约维修
              </view>

              <view class="quick-desc">
                选择时间
              </view>

            </view>

          </view>

        </view>

        <!-- AI派单 -->
        <view
          class="ai-card"
          @click="showAi = true">

          <view class="ai-icon">
            🤖
          </view>

          <view>

            <view class="ai-title">
              AI 派单
            </view>

            <view class="ai-desc">
              智能生成维修工单
            </view>

          </view>

        </view>

      </view>

      <!-- 工单列表 -->
      <view
        v-for="item in filteredOrders"
        :key="item.id"
        class="order-card"
        @click="openOrderDetail(item)">

        <view class="order-head">

          <view class="order-id">
            {{ item.id }}
          </view>

          <view
            class="status-tag"
            :class="statusClass(item.status)">

            {{ item.status }}

          </view>

        </view>

        <view class="order-meta">
          故障类型：{{ item.faultType }}
        </view>

        <view class="order-meta">
          维修工：{{ item.engineer || '暂未分配' }}
        </view>

      </view>

    </view>

    <!-- 我的页面 -->
    <view
      class="page"
      v-if="activeTab === 'mine'">

      <!-- 个人中心 -->
      <view class="card">

        <view class="card-title">
          个人中心
        </view>

        <view
          class="mine-user"
          @click="goToProfile">

          <view class="avatar">
            👤
          </view>

          <view>

            <view class="mine-name">
              王先生
            </view>

            <view class="mine-phone">
              13800138000
            </view>

          </view>

        </view>

      </view>

      <!-- 状态 -->
      <view class="card">

        <view class="card-title">
          工单状态概览
        </view>

        <view class="stats-grid">

          <view
            class="stat-item wait"
            @click="goToMyOrders('待接单')">

            <view class="num">
              1
            </view>

            <view class="lbl">
              待接单
            </view>

          </view>

          <view
            class="stat-item doing"
            @click="goToMyOrders('已接单')">

            <view class="num">
              1
            </view>

            <view class="lbl">
              已接单
            </view>

          </view>

          <view
            class="stat-item done"
            @click="goToMyOrders('已完成')">

            <view class="num">
              0
            </view>

            <view class="lbl">
              已完成
            </view>

          </view>

        </view>

      </view>

      <!-- 设备 -->
      <view class="card">

        <view class="card-title">
          绑定设备
        </view>

        <view
          class="device-card"
          @click="goToDeviceDetail">

          <view class="device-head">

            <view class="device-icon">
              🔧
            </view>

            <view class="device-main">

              <view class="device-name">
                1号楼客梯
              </view>

              <view class="device-id">
                设备ID：DEV2025001
              </view>

            </view>

            <view class="device-status">
              正常
            </view>

          </view>

          <view class="menu-item">
            <text>品牌</text>
            <text>奥的斯</text>
          </view>

          <view class="menu-item">
            <text>型号</text>
            <text>GEN2</text>
          </view>

          <view class="menu-item">
            <text>类型</text>
            <text>电梯</text>
          </view>

        </view>

      </view>

      <!-- 菜单 -->
      <view class="card">

        <view
          class="menu-item"
          @click="goToMyOrders()">

          <text>我的工单</text>
          <text>›</text>

        </view>

        <view
          class="menu-item"
          @click="goToDeviceList">

          <text>我的设备</text>
          <text>›</text>

        </view>

        <view
          class="menu-item"
          @click="contactSupport">

          <text>联系客服</text>
          <text>›</text>

        </view>

        <view
          class="menu-item"
          @click="goToSettings">

          <text>设置</text>
          <text>›</text>

        </view>

      </view>

    </view>

    <!-- 底部导航 -->
    <view class="bottom-nav">

      <view
        class="nav-item"
        :class="{ active: activeTab === 'orders' }"
        @click="activeTab = 'orders'">

        <view class="icon">
          📋
        </view>

        <view>
          工单
        </view>

      </view>

      <view
        class="nav-item"
        :class="{ active: activeTab === 'mine' }"
        @click="activeTab = 'mine'">

        <view class="icon">
          👤
        </view>

        <view>
          我的
        </view>

      </view>

    </view>

    <!-- 工单详情 -->
    <view
      v-if="showDetail"
      class="modal-mask"
      @click="showDetail = false">

      <view
        class="modal-sheet"
        @click.stop>

        <view
          class="modal-close"
          @click="showDetail = false">

          ×

        </view>

        <view class="modal-title">
          工单详情
        </view>

        <view class="detail-card">

          <view class="detail-title">
            {{ detail.id }}
          </view>

          <view
            class="status-tag detail-status"
            :class="statusClass(detail.status)">

            {{ detail.status }}

          </view>

        </view>

        <view class="detail-row">
          <text>工单状态</text>
          <text>{{ detail.status }}</text>
        </view>

        <view class="detail-row">
          <text>故障类型</text>
          <text>{{ detail.faultType }}</text>
        </view>

        <view class="detail-row">
          <text>维修工</text>
          <text>{{ detail.engineer || '暂未分配' }}</text>
        </view>

        <view class="detail-row">
          <text>维修工电话</text>
          <text>{{ detail.engineerPhone || '暂无' }}</text>
        </view>

        <view class="detail-row">
          <text>预计到达</text>
          <text>{{ detail.eta || '暂无' }}</text>
        </view>

        <view class="detail-row">
          <text>系统通知</text>
          <text>{{ detail.notice || '暂无' }}</text>
        </view>

      </view>

    </view>

  </view>
</template>

<script>
export default {

  data() {

    return {

      activeTab: 'orders',

      currentFilter: '全部',

      filters: [
        '全部',
        '待接单',
        '已接单',
        '已完成'
      ],

      showCreate: false,
      showBook: false,
      showAi: false,

      showDetail: false,

      detail: {},

      orders: [

        {
          id: 'WO2025001',
          status: '待接单',
          faultType: '门故障',
          engineer: ''
        },

        {
          id: 'WO2025002',
          status: '已接单',
          faultType: '电梯异响',
          engineer: '张师傅'
        }

      ]

    }

  },

  computed: {

    filteredOrders() {

      if (this.currentFilter === '全部') {

        return this.orders

      }

      return this.orders.filter(
        item => item.status === this.currentFilter
      )

    }

  },

  methods: {

    statusClass(status) {

      if (status === '已完成') {

        return 'done'

      }

      if (status === '已接单') {

        return 'accepted'

      }

      return 'pending'

    },

    openOrderDetail(item) {

      this.detail = item

      this.showDetail = true

    },

    goToProfile() {

      uni.showToast({
        title: '个人信息',
        icon: 'none'
      })

    },

    goToMyOrders(status) {

      uni.showToast({
        title: status ? `查看${status}` : '我的工单',
        icon: 'none'
      })

    },

    goToDeviceDetail() {

      uni.showToast({
        title: '设备详情',
        icon: 'none'
      })

    },

    goToDeviceList() {

      uni.showToast({
        title: '设备列表',
        icon: 'none'
      })

    },

    contactSupport() {

      uni.showToast({
        title: '联系客服',
        icon: 'none'
      })

    },

    goToSettings() {

      uni.showToast({
        title: '设置',
        icon: 'none'
      })

    }

  }

}
</script>
<style>
page {
	background: linear-gradient(180deg, #eef4ff 0%, #f7f9fc 40%, #ffffff 100%);
}

.app {
	min-height: 100vh;
	padding-bottom: 140rpx;
	box-sizing: border-box;
}

.app-header {
	padding: 92rpx 34rpx 92rpx;
	background: linear-gradient(135deg, #2563eb 0%, #1e40af 60%, #172554 100%);
	border-bottom-left-radius: 52rpx;
	border-bottom-right-radius: 52rpx;
	color: #ffffff;
	box-shadow: 0 16rpx 40rpx rgba(37, 99, 235, 0.22);
}

.header-title {
	font-size: 42rpx;
	font-weight: 800;
}

.header-subtitle {
	font-size: 26rpx;
	margin-top: 14rpx;
	opacity: 0.9;
}

.page {
	padding: 28rpx;
	margin-top: -56rpx;
	box-sizing: border-box;
}

.filter-bar {
	margin-bottom: 24rpx;
	white-space: nowrap;
}

.filter-inner {
	display: flex;
	gap: 18rpx;
}

.chip {
	padding: 16rpx 30rpx;
	background: rgba(255, 255, 255, 0.92);
	border-radius: 999rpx;
	font-size: 26rpx;
	color: #64748b;
	box-shadow: 0 8rpx 24rpx rgba(15, 23, 42, 0.06);
}

.chip.active {
	background: #2563eb;
	color: #ffffff;
}

.card,
.order-card {
	background: rgba(255, 255, 255, 0.96);
	border-radius: 34rpx;
	padding: 34rpx;
	margin-bottom: 28rpx;
	box-shadow: 0 14rpx 42rpx rgba(15, 23, 42, 0.08);
}

.card-title {
	font-size: 34rpx;
	font-weight: 800;
	color: #0f172a;
	margin-bottom: 26rpx;
}

.quick-actions {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 18rpx;
	margin-bottom: 18rpx;
}

.quick-btn {
	height: 120rpx;
	border-radius: 26rpx;
	padding: 22rpx;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	gap: 16rpx;
}

.quick-btn.blue {
	background: linear-gradient(135deg, #2563eb, #3b82f6);
	color: #ffffff;
	box-shadow: 0 10rpx 26rpx rgba(37, 99, 235, 0.22);
}

.quick-btn.light {
	background: #eff6ff;
	color: #1d4ed8;
	border: 2rpx solid #bfdbfe;
}

.quick-icon {
	width: 52rpx;
	height: 52rpx;
	border-radius: 16rpx;
	background: rgba(255, 255, 255, 0.22);
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 28rpx;
}

.quick-btn.light .quick-icon {
	background: #ffffff;
}

.quick-title {
	font-size: 28rpx;
	font-weight: 800;
}

.quick-desc {
	font-size: 22rpx;
	margin-top: 6rpx;
	opacity: 0.8;
}

.ai-card {
	height: 110rpx;
	border-radius: 26rpx;
	background: linear-gradient(135deg, #7c3aed, #9333ea);
	color: #ffffff;
	display: flex;
	align-items: center;
	padding: 0 26rpx;
	gap: 18rpx;
	box-shadow: 0 10rpx 26rpx rgba(124, 58, 237, 0.24);
}

.ai-icon {
	width: 54rpx;
	height: 54rpx;
	border-radius: 18rpx;
	background: rgba(255, 255, 255, 0.2);
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 30rpx;
}

.ai-title {
	font-size: 30rpx;
	font-weight: 800;
}

.ai-desc {
	font-size: 23rpx;
	margin-top: 6rpx;
	opacity: 0.85;
}

.order-card {
	position: relative;
}

.order-head {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 18rpx;
}

.order-id {
	font-size: 31rpx;
	font-weight: 800;
	color: #0f172a;
}

.status-tag {
	padding: 9rpx 20rpx;
	border-radius: 999rpx;
	font-size: 24rpx;
}

.pending {
	background: #fff7ed;
	color: #ea580c;
}

.accepted {
	background: #eff6ff;
	color: #2563eb;
}

.done {
	background: #ecfdf5;
	color: #16a34a;
}

.order-meta {
	font-size: 27rpx;
	color: #64748b;
	line-height: 46rpx;
}

.bottom-nav {
	position: fixed;
	left: 24rpx;
	right: 24rpx;
	bottom: 24rpx;
	height: 108rpx;
	background: rgba(255, 255, 255, 0.96);
	display: flex;
	border-radius: 34rpx;
	box-shadow: 0 12rpx 42rpx rgba(15, 23, 42, 0.14);
	z-index: 99;
	overflow: hidden;
}

.nav-item {
	flex: 1;
	text-align: center;
	font-size: 24rpx;
	color: #94a3b8;
	padding-top: 14rpx;
}

.nav-item.active {
	color: #2563eb;
	font-weight: 800;
	background: #eff6ff;
}

.icon {
	font-size: 34rpx;
	margin-bottom: 4rpx;
}

.mine-user {
	display: flex;
	align-items: center;
}

.avatar {
	width: 100rpx;
	height: 100rpx;
	border-radius: 50%;
	background: linear-gradient(135deg, #2563eb, #3b82f6);
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 46rpx;
	color: #ffffff;
	margin-right: 22rpx;
}

.mine-name {
	font-size: 32rpx;
	font-weight: 800;
	color: #0f172a;
}

.mine-phone {
	font-size: 25rpx;
	color: #64748b;
	margin-top: 8rpx;
}

.stats-grid {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 18rpx;
}

.stat-item {
	background: #eff6ff;
	border-radius: 24rpx;
	padding: 26rpx 10rpx;
	text-align: center;
}

.stat-item.wait {
	background: #fff7ed;
}

.stat-item.done {
	background: #ecfdf5;
}

.num {
	font-size: 40rpx;
	font-weight: 800;
	color: #0f172a;
}

.lbl {
	font-size: 24rpx;
	color: #64748b;
	margin-top: 8rpx;
}

.device-card {
	background: #f8fafc;
	border-radius: 26rpx;
	padding: 26rpx;
}

.device-head {
	display: flex;
	align-items: center;
	margin-bottom: 20rpx;
}

.device-icon {
	width: 76rpx;
	height: 76rpx;
	border-radius: 22rpx;
	background: #dbeafe;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 36rpx;
	margin-right: 20rpx;
}

.device-main {
	flex: 1;
}

.device-name {
	font-size: 31rpx;
	font-weight: 800;
	color: #0f172a;
}

.device-id {
	font-size: 24rpx;
	color: #64748b;
	margin-top: 8rpx;
}

.device-status {
	background: #dcfce7;
	color: #16a34a;
	font-size: 24rpx;
	padding: 9rpx 18rpx;
	border-radius: 999rpx;
}

.menu-item {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 28rpx 0;
	border-bottom: 2rpx solid #f1f5f9;
	font-size: 28rpx;
	color: #0f172a;
}

.menu-item:last-child {
	border-bottom: none;
}

.modal-mask {
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	background: rgba(15, 23, 42, 0.5);
	z-index: 200;
	display: flex;
	align-items: flex-end;
}

.modal-sheet {
	width: 100%;
	max-height: 82vh;
	overflow-y: auto;
	background: #ffffff;
	border-top-left-radius: 42rpx;
	border-top-right-radius: 42rpx;
	padding: 42rpx 30rpx 90rpx;
	box-sizing: border-box;
	position: relative;
	box-shadow: 0 -12rpx 40rpx rgba(15, 23, 42, 0.18);
}

.modal-close {
	position: absolute;
	right: 34rpx;
	top: 24rpx;
	font-size: 50rpx;
	color: #94a3b8;
}

.modal-title {
	font-size: 38rpx;
	font-weight: 800;
	color: #0f172a;
	margin-bottom: 28rpx;
}

.detail-card {
	background: #f8fafc;
	border-radius: 24rpx;
	padding: 26rpx;
	margin-bottom: 24rpx;
	position: relative;
}

.detail-title {
	font-size: 34rpx;
	font-weight: 800;
	color: #0f172a;
}

.detail-status {
	position: absolute;
	right: 24rpx;
	top: 24rpx;
}

.detail-row {
	display: flex;
	justify-content: space-between;
	padding: 24rpx 0;
	border-bottom: 2rpx solid #f1f5f9;
	font-size: 28rpx;
	color: #334155;
	gap: 24rpx;
}

.detail-row text:first-child {
	color: #64748b;
	min-width: 160rpx;
}

.detail-row text:last-child {
	text-align: right;
	flex: 1;
}

.form-label {
	display: block;
	font-size: 26rpx;
	color: #334155;
	font-weight: 700;
	margin: 28rpx 0 14rpx;
}

input,
.select,
textarea {
	width: 100%;
	background: #f8fafc;
	border: 2rpx solid #e5eaf2;
	border-radius: 22rpx;
	height: 92rpx;
	padding: 0 28rpx;
	box-sizing: border-box;
	font-size: 28rpx;
	color: #0f172a;
}

textarea {
	height: 190rpx;
	padding-top: 26rpx;
	line-height: 44rpx;
}
</style>