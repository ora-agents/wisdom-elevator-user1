"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      device: {
        name: "客厅空调",
        room: "客厅",
        type: "ac"
      },
      online: true,
      temperature: 26,
      acMode: "制冷",
      acModes: [
        "制冷",
        "制热",
        "送风",
        "除湿"
      ],
      brightness: 80,
      lightMode: "自然光",
      lightModes: [
        "暖光",
        "自然光",
        "冷光",
        "夜灯"
      ],
      locked: true,
      floor: 3,
      robotWorking: false,
      battery: 82
    };
  },
  computed: {
    typeName() {
      const map = {
        ac: "智能空调",
        light: "智能灯光",
        door: "智能门锁",
        elevator: "智能电梯",
        robot: "扫地机器人"
      };
      return map[this.device.type];
    }
  },
  onLoad(option) {
    common_vendor.index.__f__("log", "at pages/deviceDetail/deviceDetail.vue:384", "设备参数", option);
    if (option.name) {
      this.device.name = decodeURIComponent(option.name);
    }
    if (option.location) {
      this.device.room = decodeURIComponent(option.location);
    }
    if (option.type) {
      this.device.type = decodeURIComponent(option.type);
    }
    if (!option.type) {
      const name = this.device.name;
      if (name.includes("空调")) {
        this.device.type = "ac";
      } else if (name.includes("灯")) {
        this.device.type = "light";
      } else if (name.includes("门")) {
        this.device.type = "door";
      } else if (name.includes("电梯")) {
        this.device.type = "elevator";
      } else if (name.includes("机器人")) {
        this.device.type = "robot";
      }
    }
  },
  methods: {
    changePower(e) {
      this.online = e.detail.value;
      common_vendor.index.showToast({
        title: this.online ? "设备已开启" : "设备已关闭",
        icon: "none"
      });
    },
    changeLight(e) {
      this.brightness = e.detail.value;
    },
    toggleLock() {
      this.locked = !this.locked;
      common_vendor.index.showToast({
        title: this.locked ? "已上锁" : "已解锁",
        icon: "success"
      });
    },
    floorUp() {
      this.floor++;
    },
    floorDown() {
      if (this.floor > 1) {
        this.floor--;
      }
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
      }, 1e3);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.t($data.device.name),
    b: common_vendor.t($data.device.room),
    c: common_vendor.t($data.online ? "运行正常" : "设备离线"),
    d: common_vendor.t($options.typeName),
    e: $data.online,
    f: common_vendor.o((...args) => $options.changePower && $options.changePower(...args), "3d"),
    g: $data.device.type === "ac"
  }, $data.device.type === "ac" ? {
    h: common_vendor.t($data.temperature),
    i: common_vendor.t($data.acMode),
    j: common_vendor.o(($event) => $data.temperature--, "b7"),
    k: common_vendor.o(($event) => $data.temperature++, "13"),
    l: common_vendor.f($data.acModes, (item, k0, i0) => {
      return {
        a: common_vendor.t(item),
        b: item,
        c: $data.acMode === item ? 1 : "",
        d: common_vendor.o(($event) => $data.acMode = item, item)
      };
    })
  } : {}, {
    m: $data.device.type === "light"
  }, $data.device.type === "light" ? {
    n: common_vendor.t($data.brightness),
    o: $data.brightness,
    p: common_vendor.o((...args) => $options.changeLight && $options.changeLight(...args), "1c"),
    q: common_vendor.f($data.lightModes, (item, k0, i0) => {
      return {
        a: common_vendor.t(item),
        b: item,
        c: $data.lightMode === item ? 1 : "",
        d: common_vendor.o(($event) => $data.lightMode = item, item)
      };
    })
  } : {}, {
    r: $data.device.type === "door"
  }, $data.device.type === "door" ? {
    s: common_vendor.t($data.locked ? "已上锁" : "已解锁"),
    t: common_vendor.t($data.locked ? "远程开锁" : "立即上锁"),
    v: common_vendor.o((...args) => $options.toggleLock && $options.toggleLock(...args), "5c")
  } : {}, {
    w: $data.device.type === "elevator"
  }, $data.device.type === "elevator" ? {
    x: common_vendor.t($data.floor),
    y: common_vendor.o((...args) => $options.floorDown && $options.floorDown(...args), "60"),
    z: common_vendor.o((...args) => $options.floorUp && $options.floorUp(...args), "16")
  } : {}, {
    A: $data.device.type === "robot"
  }, $data.device.type === "robot" ? {
    B: common_vendor.t($data.robotWorking ? "清扫中" : "待机中"),
    C: common_vendor.t($data.battery),
    D: common_vendor.t($data.robotWorking ? "停止清扫" : "开始清扫"),
    E: common_vendor.o((...args) => $options.toggleRobot && $options.toggleRobot(...args), "98")
  } : {}, {
    F: common_vendor.t($data.device.name),
    G: common_vendor.t($data.device.room),
    H: common_vendor.t($data.online ? "在线" : "离线"),
    I: common_vendor.o((...args) => $options.goRepair && $options.goRepair(...args), "a7"),
    J: common_vendor.o((...args) => $options.updateStatus && $options.updateStatus(...args), "35")
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/deviceDetail/deviceDetail.js.map
