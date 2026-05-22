"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      nearbyDevices: [
        {
          icon: "❄️",
          name: "客厅空调",
          id: "AC-2025"
        },
        {
          icon: "🤖",
          name: "阳台机器人",
          id: "RB-01"
        },
        {
          icon: "🚪",
          name: "智能门锁",
          id: "LOCK-03"
        }
      ]
    };
  },
  methods: {
    scanCode() {
      common_vendor.index.showToast({
        title: "打开扫码",
        icon: "none"
      });
    },
    bluetooth() {
      common_vendor.index.showToast({
        title: "蓝牙搜索中",
        icon: "none"
      });
    },
    localSearch() {
      common_vendor.index.showToast({
        title: "搜索局域网设备",
        icon: "none"
      });
    },
    manualAdd() {
      common_vendor.index.showToast({
        title: "手动输入设备ID",
        icon: "none"
      });
    },
    bindDevice(name) {
      common_vendor.index.showToast({
        title: `${name}已添加`,
        icon: "success"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.scanCode && $options.scanCode(...args), "1c"),
    b: common_vendor.o((...args) => $options.bluetooth && $options.bluetooth(...args), "29"),
    c: common_vendor.o((...args) => $options.localSearch && $options.localSearch(...args), "0e"),
    d: common_vendor.o((...args) => $options.manualAdd && $options.manualAdd(...args), "58"),
    e: common_vendor.f($data.nearbyDevices, (item, index, i0) => {
      return {
        a: common_vendor.t(item.icon),
        b: common_vendor.t(item.name),
        c: common_vendor.t(item.id),
        d: common_vendor.o(($event) => $options.bindDevice(item.name), index),
        e: index
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/addDevice/addDevice.js.map
