<template>

	<view class="page">

		<!-- 顶部 -->
		<view class="top-bg"></view>

		<view class="content">

			<!-- 标题 -->
			<view class="header">

				<view>

					<view class="title">
						家庭成员
					</view>

					<view class="subtitle">
						共享家庭设备与权限
					</view>

				</view>

				<view
					class="add-btn"
					@click="addMember"
				>
					＋
				</view>

			</view>

			<!-- 成员列表 -->
			<view class="member-list">

				<view
					class="member-card"
					v-for="item in members"
					:key="item.name"
				>

					<!-- 左侧 -->
					<view class="left">

						<view class="avatar">
							{{ item.avatar }}
						</view>

						<view>

							<view class="name">
								{{ item.name }}
							</view>

							<view class="phone">
								{{ item.phone }}
							</view>

						</view>

					</view>

					<!-- 右侧 -->
					<view class="right">

						<view
							class="role"
							:class="item.admin ? 'admin' : 'normal'"
						>

							{{ item.admin ? '管理员' : '成员' }}

						</view>

						<view
							class="delete"
							@click="removeMember(item)"
						>

							删除

						</view>

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

			members: [

				{
					name: '王先生',
					phone: '13800138000',
					avatar: 'W',
					admin: true
				},

				{
					name: '李女士',
					phone: '13900139000',
					avatar: 'L',
					admin: false
				},

				{
					name: '张先生',
					phone: '13700137000',
					avatar: 'Z',
					admin: false
				}

			]

		}

	},

	methods: {

		addMember() {

			uni.showModal({

				title: '添加成员',

				content: '模拟邀请家庭成员',

				showCancel: false

			})

		},

		removeMember(item) {

			uni.showModal({

				title: '提示',

				content: '确认删除 ' + item.name + ' ?',

				success: (res) => {

					if(res.confirm){

						this.members =
						this.members.filter(
							i => i.name !== item.name
						)

					}

				}

			})

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
	80rpx 28rpx 140rpx;

	box-sizing: border-box;
}

.header {

	display: flex;
	align-items: center;
	justify-content: space-between;

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

.add-btn {

	width: 72rpx;
	height: 72rpx;

	border-radius: 22rpx;

	background:
	rgba(255,255,255,0.2);

	display: flex;
	align-items: center;
	justify-content: center;

	font-size: 42rpx;

	backdrop-filter: blur(20rpx);
}

.member-list {

	margin-top: 40rpx;
}

.member-card {

	background: #ffffff;

	border-radius: 34rpx;

	padding: 28rpx;

	margin-bottom: 24rpx;

	display: flex;
	align-items: center;
	justify-content: space-between;

	box-shadow:
	0 12rpx 40rpx rgba(15,23,42,0.08);
}

.left {

	display: flex;
	align-items: center;
}

.avatar {

	width: 88rpx;
	height: 88rpx;

	border-radius: 50%;

	background:
	linear-gradient(135deg,#3b82f6,#2563eb);

	color: #ffffff;

	display: flex;
	align-items: center;
	justify-content: center;

	font-size: 34rpx;
	font-weight: 900;

	margin-right: 22rpx;
}

.name {

	font-size: 30rpx;
	font-weight: 800;

	color: #0f172a;
}

.phone {

	font-size: 24rpx;

	color: #64748b;

	margin-top: 10rpx;
}

.right {

	display: flex;
	flex-direction: column;
	align-items: flex-end;
}

.role {

	padding:
	8rpx 18rpx;

	border-radius: 999rpx;

	font-size: 22rpx;
	font-weight: 700;
}

.admin {

	background: #dbeafe;

	color: #2563eb;
}

.normal {

	background: #ecfdf5;

	color: #10b981;
}

.delete {

	margin-top: 18rpx;

	font-size: 24rpx;

	color: #ef4444;
}

</style>