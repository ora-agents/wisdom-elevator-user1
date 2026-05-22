"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      listening: false,
      result: "",
      history: [
        "打开客厅灯",
        "启动回家模式"
      ]
    };
  },
  methods: {
    toggleVoice() {
      this.listening = !this.listening;
      if (this.listening) {
        setTimeout(() => {
          this.result = "空调调到26度";
          this.history.unshift(
            "空调调到26度"
          );
          this.listening = false;
          common_vendor.index.showToast({
            title: "执行成功",
            icon: "success"
          });
        }, 2e3);
      }
    },
    mockCommand(text) {
      this.result = text;
      this.history.unshift(text);
      common_vendor.index.showToast({
        title: "指令执行成功",
        icon: "success"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.listening ? 1 : "",
    b: common_vendor.o((...args) => $options.toggleVoice && $options.toggleVoice(...args), "c4"),
    c: common_vendor.t($data.listening ? "正在聆听..." : "点击开始语音控制"),
    d: common_vendor.t($data.result || "暂无语音内容"),
    e: common_vendor.o(($event) => $options.mockCommand("打开客厅灯"), "5f"),
    f: common_vendor.o(($event) => $options.mockCommand("空调调到26度"), "7d"),
    g: common_vendor.o(($event) => $options.mockCommand("启动睡眠模式"), "95"),
    h: common_vendor.o(($event) => $options.mockCommand("关闭全部设备"), "a4"),
    i: common_vendor.f($data.history, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: index
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/voice/voice.js.map
