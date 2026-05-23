"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      name: "客厅空调",
      location: "客厅",
      status: "运行正常",
      isOn: true,
      temp: 26,
      mode: "制冷",
      wind: "中风",
      modes: ["制冷", "制热", "送风", "除湿"],
      winds: ["低风", "中风", "高风", "自动"]
    };
  },
  onLoad(option) {
    this.name = option.name || "客厅空调";
    this.location = option.location || "客厅";
  },
  methods: {
    togglePower(e) {
      this.isOn = e.detail.value;
      this.status = this.isOn ? "运行正常" : "已关闭";
    },
    minusTemp() {
      if (this.temp > 16) {
        this.temp--;
      }
    },
    plusTemp() {
      if (this.temp < 30) {
        this.temp++;
      }
    },
    goRepair() {
      common_vendor.index.navigateTo({
        url: "/pages/repair/repair?name=" + this.name
      });
    },
    updateDevice() {
      common_vendor.index.showToast({
        title: "状态已更新",
        icon: "success"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.name),
    b: common_vendor.t($data.location),
    c: common_vendor.t($data.status),
    d: $data.isOn,
    e: common_vendor.o((...args) => $options.togglePower && $options.togglePower(...args), "ff"),
    f: common_vendor.t($data.temp),
    g: common_vendor.t($data.mode),
    h: common_vendor.o((...args) => $options.minusTemp && $options.minusTemp(...args), "71"),
    i: common_vendor.o((...args) => $options.plusTemp && $options.plusTemp(...args), "ac"),
    j: common_vendor.f($data.modes, (item, k0, i0) => {
      return {
        a: common_vendor.t(item),
        b: item,
        c: $data.mode === item ? 1 : "",
        d: common_vendor.o(($event) => $data.mode = item, item)
      };
    }),
    k: common_vendor.f($data.winds, (item, k0, i0) => {
      return {
        a: common_vendor.t(item),
        b: item,
        c: $data.wind === item ? 1 : "",
        d: common_vendor.o(($event) => $data.wind = item, item)
      };
    }),
    l: common_vendor.o((...args) => $options.goRepair && $options.goRepair(...args), "3a"),
    m: common_vendor.o((...args) => $options.updateDevice && $options.updateDevice(...args), "e5")
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/control/control.js.map
