"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  methods: {
    runScene(name) {
      common_vendor.index.showToast({
        title: `${name}已启动`,
        icon: "success"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $options.runScene("回家模式"), "e0"),
    b: common_vendor.o(($event) => $options.runScene("睡眠模式"), "69"),
    c: common_vendor.o(($event) => $options.runScene("影院模式"), "45"),
    d: common_vendor.o(($event) => $options.runScene("厨房模式"), "99")
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/scene/scene.js.map
