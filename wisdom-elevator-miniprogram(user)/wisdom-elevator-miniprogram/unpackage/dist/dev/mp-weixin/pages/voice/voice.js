"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      messages: [
        {
          role: "ai",
          text: "您好，我是 SmartLife AI，可帮您控制家庭设备"
        }
      ],
      quickList: [
        "打开客厅空调",
        "关闭全部灯光",
        "查看电梯状态",
        "启动清扫机器人",
        "开启回家模式",
        "关闭卧室灯光"
      ]
    };
  },
  methods: {
    /* 快捷发送 */
    sendQuick(text) {
      this.messages.push({
        role: "user",
        text
      });
      setTimeout(() => {
        this.reply(text);
      }, 500);
    },
    /* 模拟语音 */
    mockVoice() {
      common_vendor.index.showToast({
        title: "AI正在识别语音...",
        icon: "none"
      });
      setTimeout(() => {
        this.sendQuick("打开客厅空调");
      }, 1e3);
    },
    /* AI回复 */
    reply(text) {
      let res = "已为您处理";
      let target = null;
      if (text.includes("空调")) {
        res = "已为您打开客厅空调，当前温度26℃，正在进入控制面板";
        target = {
          name: "客厅空调",
          location: "客厅"
        };
      }
      if (text.includes("灯")) {
        res = "已关闭对应区域灯光";
      }
      if (text.includes("电梯")) {
        res = "客厅电梯运行正常，正在进入设备控制页";
        target = {
          name: "客厅电梯",
          location: "客厅"
        };
      }
      if (text.includes("机器人")) {
        res = "清洁机器人已启动，正在进入控制面板";
        target = {
          name: "客厅机器人",
          location: "客厅"
        };
      }
      if (text.includes("回家")) {
        res = "回家模式已开启，灯光与空调已自动打开";
      }
      this.messages.push({
        role: "ai",
        text: res
      });
      if (target) {
        setTimeout(() => {
          common_vendor.index.navigateTo({
            url: "/pages/control/control?name=" + target.name + "&location=" + target.location
          });
        }, 1200);
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.quickList, (item, k0, i0) => {
      return {
        a: common_vendor.t(item),
        b: item,
        c: common_vendor.o(($event) => $options.sendQuick(item), item)
      };
    }),
    b: common_vendor.f($data.messages, (msg, index, i0) => {
      return {
        a: common_vendor.t(msg.text),
        b: index,
        c: common_vendor.n(msg.role)
      };
    }),
    c: common_vendor.o((...args) => $options.mockVoice && $options.mockVoice(...args), "b5")
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/voice/voice.js.map
