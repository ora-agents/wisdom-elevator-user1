"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      userInfo: null
    };
  },
  onShow() {
    const user = common_vendor.index.getStorageSync("userInfo");
    if (user) {
      this.userInfo = user;
    } else {
      this.userInfo = null;
    }
  },
  methods: {
    /* 去登录 */
    goLogin() {
      common_vendor.index.navigateTo({
        url: "/pages/login/login"
      });
    },
    /* 编辑资料 */
    editProfile() {
      common_vendor.index.showToast({
        title: "资料编辑开发中",
        icon: "none"
      });
    },
    /* AI助手 */
    goVoice() {
      common_vendor.index.switchTab({
        url: "/pages/voice/voice"
      });
    },
    /* 家庭成员 */
    goFamily() {
      common_vendor.index.navigateTo({
        url: "/pages/family/family"
      });
    },
    /* 报修 */
    goRepair() {
      common_vendor.index.navigateTo({
        url: "/pages/repair/repair"
      });
    },
    /* 工单 */
    goOrder() {
      common_vendor.index.navigateTo({
        url: "/pages/order/order"
      });
    },
    /* 电梯报警 */
    goAlarm() {
      common_vendor.index.showModal({
        title: "电梯紧急报警",
        content: "确认发生电梯困人、异常停梯等紧急情况并立即报警？",
        confirmText: "立即报警",
        confirmColor: "#ef4444",
        success: (res) => {
          if (res.confirm) {
            common_vendor.index.showLoading({
              title: "报警中"
            });
            setTimeout(() => {
              common_vendor.index.hideLoading();
              common_vendor.index.showToast({
                title: "报警已发送",
                icon: "success"
              });
            }, 1e3);
          }
        }
      });
    },
    /* 退出登录 */
    logout() {
      common_vendor.index.showModal({
        title: "提示",
        content: "确认退出登录？",
        success: (res) => {
          if (res.confirm) {
            common_vendor.index.removeStorageSync("userInfo");
            this.userInfo = null;
            common_vendor.index.showToast({
              title: "已退出",
              icon: "success"
            });
          }
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.userInfo
  }, $data.userInfo ? {
    b: common_vendor.t($data.userInfo.name.substring(0, 1)),
    c: common_vendor.t($data.userInfo.name),
    d: common_vendor.t($data.userInfo.phone),
    e: common_vendor.t($data.userInfo.role)
  } : {
    f: common_vendor.o((...args) => $options.goLogin && $options.goLogin(...args), "54")
  }, {
    g: common_vendor.t($data.userInfo ? "编辑资料" : "登录"),
    h: common_vendor.o(($event) => $data.userInfo ? $options.editProfile() : $options.goLogin(), "5e"),
    i: common_vendor.o((...args) => $options.goVoice && $options.goVoice(...args), "52"),
    j: common_vendor.o((...args) => $options.goFamily && $options.goFamily(...args), "05"),
    k: common_vendor.o((...args) => $options.goRepair && $options.goRepair(...args), "a4"),
    l: common_vendor.o((...args) => $options.goOrder && $options.goOrder(...args), "44"),
    m: common_vendor.o((...args) => $options.goAlarm && $options.goAlarm(...args), "9e"),
    n: $data.userInfo
  }, $data.userInfo ? {
    o: common_vendor.o((...args) => $options.logout && $options.logout(...args), "f4")
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/mine/mine.js.map
