"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      device: {
        name: "",
        location: "",
        type: ""
      },
      power: true,
      temperature: 26,
      lightValue: 80,
      locked: true,
      floor: "3F",
      robotWorking: true,
      battery: 82
    };
  },
  onLoad(option) {
    this.device.name = option.name || "";
    this.device.location = option.location || "";
    this.device.type = option.type || "";
  },
  methods: {
    changePower(e) {
      this.power = e.detail.value;
      common_vendor.index.showToast({
        title: this.power ? "已开启" : "已关闭",
        icon: "none"
      });
    },
    changeLight(e) {
      this.lightValue = e.detail.value;
    },
    toggleLock() {
      this.locked = !this.locked;
      common_vendor.index.showToast({
        title: this.locked ? "已上锁" : "已解锁",
        icon: "success"
      });
    },
    floorUp() {
      let num = parseInt(this.floor);
      if (num < 10) {
        num++;
      }
      this.floor = num + "F";
    },
    floorDown() {
      let num = parseInt(this.floor);
      if (num > 1) {
        num--;
      }
      this.floor = num + "F";
    },
    toggleRobot() {
      this.robotWorking = !this.robotWorking;
    },
    goRepair() {
      common_vendor.index.navigateTo({
        url: "/pages/repair/repair?name=" + this.device.name
      });
    },
    updateStatus() {
      common_vendor.index.showLoading({
        title: "同步中"
      });
      setTimeout(() => {
        common_vendor.index.hideLoading();
        common_vendor.index.showToast({
          title: "状态已更新",
          icon: "success"
        });
      }, 1200);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.t($data.device.name),
    b: common_vendor.t($data.device.location),
    c: $data.power,
    d: common_vendor.o((...args) => $options.changePower && $options.changePower(...args), "b9"),
    e: $data.device.type === "ac"
  }, $data.device.type === "ac" ? {
    f: common_vendor.t($data.temperature),
    g: common_vendor.o(($event) => $data.temperature--, "72"),
    h: common_vendor.o(($event) => $data.temperature++, "51")
  } : {}, {
    i: $data.device.type === "light"
  }, $data.device.type === "light" ? {
    j: common_vendor.t($data.lightValue),
    k: $data.lightValue,
    l: common_vendor.o((...args) => $options.changeLight && $options.changeLight(...args), "ca")
  } : {}, {
    m: $data.device.type === "door"
  }, $data.device.type === "door" ? {
    n: common_vendor.t($data.locked ? "已上锁" : "已解锁"),
    o: common_vendor.t($data.locked ? "远程开锁" : "立即上锁"),
    p: common_vendor.o((...args) => $options.toggleLock && $options.toggleLock(...args), "4d")
  } : {}, {
    q: $data.device.type === "elevator"
  }, $data.device.type === "elevator" ? {
    r: common_vendor.t($data.floor),
    s: common_vendor.o((...args) => $options.floorDown && $options.floorDown(...args), "4f"),
    t: common_vendor.o((...args) => $options.floorUp && $options.floorUp(...args), "cf")
  } : {}, {
    v: $data.device.type === "robot"
  }, $data.device.type === "robot" ? {
    w: common_vendor.t($data.robotWorking ? "清扫中" : "待机中"),
    x: common_vendor.t($data.battery),
    y: common_vendor.t($data.robotWorking ? "停止清扫" : "开始清扫"),
    z: common_vendor.o((...args) => $options.toggleRobot && $options.toggleRobot(...args), "44")
  } : {}, {
    A: common_vendor.o((...args) => $options.goRepair && $options.goRepair(...args), "c0"),
    B: common_vendor.o((...args) => $options.updateStatus && $options.updateStatus(...args), "85")
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/deviceDetail/deviceDetail.js.map
