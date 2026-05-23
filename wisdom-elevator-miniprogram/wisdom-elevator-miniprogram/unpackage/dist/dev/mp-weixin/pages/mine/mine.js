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
    goLogin() {
      common_vendor.index.navigateTo({
        url: "/pages/login/login"
      });
    },
    goRepair() {
      common_vendor.index.navigateTo({
        url: "/pages/repair/repair"
      });
    },
    goOrder() {
      common_vendor.index.navigateTo({
        url: "/pages/order/order"
      });
    },
    goFamily() {
      common_vendor.index.navigateTo({
        url: "/pages/family/family"
      });
    },
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
    d: common_vendor.t($data.userInfo.phone)
  } : {
    e: common_vendor.o((...args) => $options.goLogin && $options.goLogin(...args), "e3")
  }, {
    f: common_vendor.t($data.userInfo ? "编辑" : "登录"),
    g: common_vendor.o((...args) => $options.goLogin && $options.goLogin(...args), "a8"),
    h: common_vendor.o((...args) => $options.goFamily && $options.goFamily(...args), "fe"),
    i: common_vendor.o((...args) => $options.goRepair && $options.goRepair(...args), "47"),
    j: common_vendor.o((...args) => $options.goOrder && $options.goOrder(...args), "f1"),
    k: $data.userInfo
  }, $data.userInfo ? {
    l: common_vendor.o((...args) => $options.logout && $options.logout(...args), "75")
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/mine/mine.js.map
