"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      phone: "",
      password: ""
    };
  },
  methods: {
    /* 普通登录 */
    login() {
      if (!this.phone) {
        common_vendor.index.showToast({
          title: "请输入手机号",
          icon: "none"
        });
        return;
      }
      if (this.phone.length !== 11) {
        common_vendor.index.showToast({
          title: "手机号格式错误",
          icon: "none"
        });
        return;
      }
      if (!this.password) {
        common_vendor.index.showToast({
          title: "请输入密码",
          icon: "none"
        });
        return;
      }
      common_vendor.index.showLoading({
        title: "登录中"
      });
      setTimeout(() => {
        common_vendor.index.hideLoading();
        common_vendor.index.setStorageSync(
          "userInfo",
          {
            name: "王先生",
            phone: this.phone,
            role: "管理员",
            avatar: ""
          }
        );
        common_vendor.index.showToast({
          title: "登录成功",
          icon: "success"
        });
        setTimeout(() => {
          common_vendor.index.switchTab({
            url: "/pages/mine/mine"
          });
        }, 800);
      }, 1200);
    },
    /* 微信登录 */
    wechatLogin() {
      common_vendor.index.showLoading({
        title: "微信授权中"
      });
      setTimeout(() => {
        common_vendor.index.hideLoading();
        common_vendor.index.setStorageSync(
          "userInfo",
          {
            name: "微信用户",
            phone: "18888888888",
            role: "家庭成员",
            avatar: ""
          }
        );
        common_vendor.index.showToast({
          title: "登录成功",
          icon: "success"
        });
        setTimeout(() => {
          common_vendor.index.switchTab({
            url: "/pages/mine/mine"
          });
        }, 800);
      }, 1200);
    },
    /* 游客模式 */
    guestLogin() {
      common_vendor.index.setStorageSync(
        "userInfo",
        {
          name: "游客用户",
          phone: "未绑定",
          role: "访客",
          avatar: ""
        }
      );
      common_vendor.index.showToast({
        title: "已进入体验模式",
        icon: "success"
      });
      setTimeout(() => {
        common_vendor.index.switchTab({
          url: "/pages/home/home"
        });
      }, 800);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.phone,
    b: common_vendor.o(($event) => $data.phone = $event.detail.value, "56"),
    c: $data.password,
    d: common_vendor.o(($event) => $data.password = $event.detail.value, "60"),
    e: common_vendor.o((...args) => $options.login && $options.login(...args), "28"),
    f: common_vendor.o((...args) => $options.wechatLogin && $options.wechatLogin(...args), "41"),
    g: common_vendor.o((...args) => $options.guestLogin && $options.guestLogin(...args), "c4")
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/login/login.js.map
