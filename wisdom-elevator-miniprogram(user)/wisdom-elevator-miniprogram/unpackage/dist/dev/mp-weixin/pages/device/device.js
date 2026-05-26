"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      keyword: "",
      typeList: [
        {
          name: "空调",
          icon: "❄️",
          count: "3台",
          desc: "客厅 / 卧室 / 三楼",
          bg: "#dbeafe"
        },
        {
          name: "灯光",
          icon: "💡",
          count: "12盏",
          desc: "全屋灯光控制",
          bg: "#fef3c7"
        },
        {
          name: "机器人",
          icon: "🤖",
          count: "3台",
          desc: "扫地 / 清洁",
          bg: "#ede9fe"
        },
        {
          name: "门禁",
          icon: "🚪",
          count: "2个",
          desc: "门锁系统",
          bg: "#dcfce7"
        },
        {
          name: "电梯",
          icon: "🛗",
          count: "3台",
          desc: "家庭电梯",
          bg: "#cffafe"
        },
        {
          name: "安防",
          icon: "🛡️",
          count: "5个",
          desc: "摄像 / 报警",
          bg: "#ffedd5"
        }
      ],
      deviceList: [
        {
          name: "客厅空调",
          room: "客厅",
          type: "ac",
          icon: "❄️",
          bg: "#dbeafe",
          desc: "26℃ · 制冷模式",
          online: true
        },
        {
          name: "卧室灯光",
          room: "卧室",
          type: "light",
          icon: "💡",
          bg: "#fef3c7",
          desc: "亮度 80%",
          online: true
        },
        {
          name: "厨房门锁",
          room: "厨房",
          type: "door",
          icon: "🚪",
          bg: "#dcfce7",
          desc: "已上锁",
          online: true
        },
        {
          name: "客厅电梯",
          room: "客厅",
          type: "elevator",
          icon: "🛗",
          bg: "#cffafe",
          desc: "运行正常",
          online: true
        },
        {
          name: "阳台机器人",
          room: "阳台",
          type: "robot",
          icon: "🤖",
          bg: "#ede9fe",
          desc: "待机中",
          online: false
        }
      ]
    };
  },
  computed: {
    filteredTypes() {
      if (!this.keyword) {
        return this.typeList;
      }
      return this.typeList.filter((item) => {
        return item.name.includes(this.keyword);
      });
    },
    filteredDevices() {
      if (!this.keyword) {
        return this.deviceList;
      }
      return this.deviceList.filter((item) => {
        return item.name.includes(this.keyword) || item.room.includes(this.keyword);
      });
    },
    onlineCount() {
      return this.deviceList.filter(
        (item) => item.online
      ).length;
    },
    offlineCount() {
      return this.deviceList.filter(
        (item) => !item.online
      ).length;
    }
  },
  methods: {
    /* 分类进入 */
    openType(item) {
      const map = {
        "空调": {
          name: "客厅空调",
          room: "客厅",
          type: "ac"
        },
        "灯光": {
          name: "卧室灯光",
          room: "卧室",
          type: "light"
        },
        "机器人": {
          name: "阳台机器人",
          room: "阳台",
          type: "robot"
        },
        "门禁": {
          name: "厨房门锁",
          room: "厨房",
          type: "door"
        },
        "电梯": {
          name: "客厅电梯",
          room: "客厅",
          type: "elevator"
        },
        "安防": {
          name: "智能安防",
          room: "大门",
          type: "door"
        }
      };
      const device = map[item.name];
      if (!device) {
        common_vendor.index.showToast({
          title: "设备未配置",
          icon: "none"
        });
        return;
      }
      this.goDetail(device);
    },
    /* 设备详情 */
    goDetail(item) {
      common_vendor.index.navigateTo({
        url: "/pages/deviceDetail/deviceDetail?name=" + encodeURIComponent(item.name) + "&location=" + encodeURIComponent(item.room) + "&type=" + encodeURIComponent(item.type)
      });
    },
    /* 开关 */
    toggleDevice(item) {
      item.online = !item.online;
      common_vendor.index.showToast({
        title: item.online ? "设备已开启" : "设备已关闭",
        icon: "none"
      });
    },
    /* 添加设备 */
    goAddDevice() {
      common_vendor.index.showToast({
        title: "添加设备开发中",
        icon: "none"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.goAddDevice && $options.goAddDevice(...args), "69"),
    b: $data.keyword,
    c: common_vendor.o(($event) => $data.keyword = $event.detail.value, "14"),
    d: common_vendor.t($data.deviceList.length),
    e: common_vendor.t($options.onlineCount),
    f: common_vendor.t($options.offlineCount),
    g: common_vendor.f($options.filteredTypes, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.icon),
        b: item.bg,
        c: common_vendor.t(item.count),
        d: common_vendor.t(item.name),
        e: common_vendor.t(item.desc),
        f: item.name,
        g: common_vendor.o(($event) => $options.openType(item), item.name)
      };
    }),
    h: common_vendor.f($options.filteredDevices, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.icon),
        b: item.bg,
        c: common_vendor.t(item.name),
        d: common_vendor.t(item.room),
        e: common_vendor.t(item.desc),
        f: common_vendor.t(item.online ? "在线" : "离线"),
        g: common_vendor.n(item.online ? "online" : "offline"),
        h: item.online,
        i: common_vendor.o(($event) => $options.toggleDevice(item), item.name),
        j: item.name,
        k: common_vendor.o(($event) => $options.goDetail(item), item.name)
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/device/device.js.map
