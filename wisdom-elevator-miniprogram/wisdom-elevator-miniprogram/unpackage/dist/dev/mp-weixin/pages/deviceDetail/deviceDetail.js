"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      type: "设备",
      deviceList: []
    };
  },
  onLoad(option) {
    this.type = option.type || "设备";
    this.loadData();
  },
  methods: {
    loadData() {
      if (this.type === "空调") {
        this.deviceList = [
          {
            icon: "❄️",
            name: "客厅空调",
            location: "客厅",
            temp: "26℃",
            online: true,
            on: true
          },
          {
            icon: "❄️",
            name: "主卧空调",
            location: "主卧",
            temp: "25℃",
            online: true,
            on: true
          },
          {
            icon: "❄️",
            name: "次卧空调",
            location: "次卧",
            temp: "关闭",
            online: false,
            on: false
          }
        ];
      }
      if (this.type === "机器人") {
        this.deviceList = [
          {
            icon: "🤖",
            name: "客厅机器人",
            location: "客厅",
            temp: "巡逻中",
            online: true,
            on: true
          },
          {
            icon: "🤖",
            name: "阳台机器人",
            location: "阳台",
            temp: "待机中",
            online: true,
            on: true
          }
        ];
      }
    },
    goAddDevice() {
      common_vendor.index.navigateTo({
        url: "/pages/addDevice/addDevice"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.type),
    b: common_vendor.f($data.deviceList, (item, index, i0) => {
      return {
        a: common_vendor.t(item.icon),
        b: common_vendor.t(item.name),
        c: common_vendor.t(item.location),
        d: common_vendor.n(item.online ? "online" : "offline"),
        e: common_vendor.t(item.online ? "在线" : "离线"),
        f: common_vendor.t(item.temp),
        g: item.on,
        h: index
      };
    }),
    c: common_vendor.o((...args) => $options.goAddDevice && $options.goAddDevice(...args), "eb")
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/deviceDetail/deviceDetail.js.map
