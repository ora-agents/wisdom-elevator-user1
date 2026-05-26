"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      activeRoom: "客厅",
      rooms: [
        {
          name: "客厅"
        },
        {
          name: "卧室"
        },
        {
          name: "厨房"
        },
        {
          name: "阳台"
        }
      ],
      /* 电梯设备 */
      liftList: [
        {
          id: 1,
          name: "电梯",
          model: "OTIS-GX200"
        },
        {
          id: 2,
          name: "机器人",
          model: "Hitachi-X8"
        }
      ],
      deviceList: [
        {
          name: "客厅空调",
          icon: "❄️",
          room: "客厅",
          type: "ac",
          desc: "26℃ ｜ 制冷模式",
          online: true,
          alarm: false
        },
        {
          name: "客厅电梯",
          icon: "🛗",
          room: "客厅",
          type: "elevator",
          desc: "运行正常",
          online: true,
          alarm: false
        },
        {
          name: "卧室灯光",
          icon: "💡",
          room: "卧室",
          type: "light",
          desc: "亮度 80%",
          online: true,
          alarm: false
        },
        {
          name: "厨房门锁",
          icon: "🚪",
          room: "厨房",
          type: "door",
          desc: "已上锁",
          online: true,
          alarm: false
        },
        {
          name: "阳台机器人",
          icon: "🤖",
          room: "阳台",
          type: "robot",
          desc: "清扫中",
          online: false,
          alarm: true
        }
      ]
    };
  },
  computed: {
    filterDeviceList() {
      if (this.activeRoom === "全部") {
        return this.deviceList;
      }
      return this.deviceList.filter((item) => {
        return item.room === this.activeRoom;
      });
    },
    onlineCount() {
      return this.deviceList.filter((item) => item.online).length;
    },
    offlineCount() {
      return this.deviceList.filter((item) => !item.online).length;
    },
    alarmCount() {
      return this.deviceList.filter((item) => item.alarm).length;
    }
  },
  methods: {
    /* 获取房间设备 */
    getRoomDevices(roomName) {
      return this.deviceList.filter((item) => {
        return item.room === roomName;
      });
    },
    selectRoom(item) {
      this.activeRoom = item.name;
    },
    addRoom() {
      common_vendor.index.showModal({
        title: "新增空间",
        editable: true,
        placeholderText: "请输入空间名称",
        success: (res) => {
          if (res.confirm && res.content) {
            this.rooms.push({
              name: res.content
            });
          }
        }
      });
    },
    /* 困人报警 */
    goAlarm() {
      common_vendor.index.navigateTo({
        url: "/pages/repair/repair?type=alarm"
      });
    },
    /* 电梯报修 */
    goRepairLift() {
      common_vendor.index.navigateTo({
        url: "/pages/repair/repair?type=repair"
      });
    },
    /* 电梯保养 */
    goMaintain() {
      common_vendor.index.navigateTo({
        url: "/pages/repair/repair?type=maintain"
      });
    },
    /* 我的工单 */
    goRescue() {
      common_vendor.index.navigateTo({
        url: "/pages/order/order?type=rescue"
      });
    },
    goRepairList() {
      common_vendor.index.navigateTo({
        url: "/pages/order/order?type=repair"
      });
    },
    goMaintainList() {
      common_vendor.index.navigateTo({
        url: "/pages/order/order?type=maintain"
      });
    },
    /* 打开绑定 */
    openBindDialog() {
      this.showBindDialog = true;
    },
    /* 扫码 */
    scanLift() {
      common_vendor.index.scanCode({
        onlyFromCamera: false,
        success: (res) => {
          this.liftCode = res.result;
          common_vendor.index.showToast({
            title: "识别成功",
            icon: "success"
          });
        }
      });
    },
    /* 绑定电梯 */
    bindLift() {
      if (!this.liftCode) {
        common_vendor.index.showToast({
          title: "请输入电梯编号",
          icon: "none"
        });
        return;
      }
      if (this.liftCode === "TEST1001") {
        common_vendor.index.showToast({
          title: "电梯设备已被绑定",
          icon: "none"
        });
        return;
      }
      if (this.liftCode === "ERROR") {
        common_vendor.index.showToast({
          title: "电梯设备添加失败",
          icon: "none"
        });
        return;
      }
      this.liftList.push({
        id: Date.now(),
        name: "新绑定电梯",
        model: this.liftCode
      });
      common_vendor.index.showToast({
        title: "绑定成功",
        icon: "success"
      });
      this.showBindDialog = false;
      this.liftCode = "";
    },
    /* 电梯详情 */
    goLiftDetail(item) {
      common_vendor.index.navigateTo({
        url: "/pages/deviceDetail/deviceDetail?id=" + item.id + "&name=" + item.name
      });
    },
    /* 设备详情 */
    goControl(item) {
      common_vendor.index.navigateTo({
        url: "/pages/deviceDetail/deviceDetail?name=" + item.name + "&location=" + item.room + "&type=" + item.type
      });
    },
    /* AI语音 */
    goVoice() {
      common_vendor.index.navigateTo({
        url: "/pages/voice/voice"
      });
    },
    /* 开关设备 */
    toggleDevice(item) {
      item.online = !item.online;
      common_vendor.index.vibrateShort();
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o((...args) => $options.goAlarm && $options.goAlarm(...args), "5f"),
    b: common_vendor.o((...args) => $options.goRepairLift && $options.goRepairLift(...args), "bd"),
    c: common_vendor.o((...args) => $options.goMaintain && $options.goMaintain(...args), "b2"),
    d: common_vendor.o((...args) => $options.openBindDialog && $options.openBindDialog(...args), "85"),
    e: $data.liftList.length === 0
  }, $data.liftList.length === 0 ? {} : {
    f: common_vendor.f($data.liftList, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: common_vendor.t(item.model),
        c: item.id,
        d: common_vendor.o(($event) => $options.goLiftDetail(item), item.id)
      };
    })
  }, {
    g: common_vendor.o((...args) => $options.goRescue && $options.goRescue(...args), "97"),
    h: common_vendor.o((...args) => $options.goRepairList && $options.goRepairList(...args), "92"),
    i: common_vendor.o((...args) => $options.goMaintainList && $options.goMaintainList(...args), "b2"),
    j: common_vendor.t($data.deviceList.length),
    k: common_vendor.t($options.onlineCount),
    l: common_vendor.t($options.offlineCount),
    m: common_vendor.t($options.alarmCount),
    n: common_vendor.f($data.rooms, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: common_vendor.n($data.activeRoom === item.name ? "device-room-active" : ""),
        c: item.name,
        d: common_vendor.o(($event) => $options.selectRoom(item), item.name)
      };
    }),
    o: common_vendor.f($options.filterDeviceList, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.icon),
        b: common_vendor.t(item.online ? "在线" : "离线"),
        c: common_vendor.n(item.online ? "online" : "offline"),
        d: common_vendor.t(item.name),
        e: common_vendor.t(item.desc),
        f: common_vendor.t(item.room),
        g: common_vendor.n(item.online ? "power-on" : "power-off"),
        h: common_vendor.o(($event) => $options.toggleDevice(item), item.name),
        i: item.name,
        j: common_vendor.o(($event) => $options.goControl(item), item.name)
      };
    }),
    p: common_vendor.o((...args) => $options.goVoice && $options.goVoice(...args), "ad"),
    q: _ctx.showBindDialog
  }, _ctx.showBindDialog ? {
    r: _ctx.liftCode,
    s: common_vendor.o(($event) => _ctx.liftCode = $event.detail.value, "74"),
    t: common_vendor.o((...args) => $options.scanLift && $options.scanLift(...args), "54"),
    v: common_vendor.o((...args) => $options.bindLift && $options.bindLift(...args), "19"),
    w: common_vendor.o(($event) => _ctx.showBindDialog = false, "78")
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/home/home.js.map
