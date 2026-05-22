"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  methods: {
    openType(type) {
      common_vendor.index.navigateTo({
        url: "/pages/deviceDetail/deviceDetail?type=" + type
      });
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
    a: common_vendor.o((...args) => $options.goAddDevice && $options.goAddDevice(...args), "29"),
    b: common_vendor.o(($event) => $options.openType("空调"), "9e"),
    c: common_vendor.o(($event) => $options.openType("灯光"), "30"),
    d: common_vendor.o(($event) => $options.openType("机器人"), "a6"),
    e: common_vendor.o(($event) => $options.openType("门禁"), "de"),
    f: common_vendor.o(($event) => $options.openType("电梯"), "da"),
    g: common_vendor.o(($event) => $options.openType("安防"), "69")
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/device/device.js.map
