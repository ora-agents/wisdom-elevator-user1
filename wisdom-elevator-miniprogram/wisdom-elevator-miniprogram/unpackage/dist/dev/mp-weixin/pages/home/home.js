"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      activeRoom: "全部",
      rooms: [
        {
          name: "全部"
        },
        {
          name: "客厅"
        },
        {
          name: "卧室"
        },
        {
          name: "厨房"
        },
        {
          name: "阳台"
        },
        {
          name: "三楼"
        }
      ],
      deviceList: [
        {
          name: "客厅空调",
          icon: "❄️",
          room: "客厅",
          type: "ac",
          desc: "26℃ ｜ 制冷模式",
          online: true
        },
        {
          name: "客厅电梯",
          icon: "🛗",
          room: "客厅",
          type: "elevator",
          desc: "运行正常",
          online: true
        },
        {
          name: "卧室灯光",
          icon: "💡",
          room: "卧室",
          type: "light",
          desc: "亮度 80%",
          online: true
        },
        {
          name: "厨房门锁",
          icon: "🚪",
          room: "厨房",
          type: "door",
          desc: "已上锁",
          online: true
        },
        {
          name: "阳台机器人",
          icon: "🤖",
          room: "阳台",
          type: "robot",
          desc: "清扫中",
          online: false
        }
      ]
    };
  },
  computed: {
    filterDeviceList() {
      if (this.activeRoom === "全部") {
        return this.deviceList;
      }
      return this.deviceList.filter((item) => {
        return item.room === this.activeRoom;
      });
    }
  },
  methods: {
    selectRoom(item) {
      this.activeRoom = item.name;
    },
    addRoom() {
      common_vendor.index.showModal({
        title: "新增空间",
        editable: true,
        placeholderText: "请输入空间名称",
        success: (res) => {
          if (res.confirm && res.content) {
            this.rooms.push({
              name: res.content
            });
          }
        }
      });
    },
    goControl(item) {
      common_vendor.index.navigateTo({
        url: "/pages/deviceDetail/deviceDetail?name=" + item.name + "&location=" + item.room + "&type=" + item.type
      });
    },
    goVoice() {
      common_vendor.index.navigateTo({
        url: "/pages/voice/voice"
      });
    },
    toggleDevice(item) {
      item.online = !item.online;
      common_vendor.index.vibrateShort();
    },
    runScene(name) {
      common_vendor.index.showLoading({
        title: "场景执行中"
      });
      setTimeout(() => {
        common_vendor.index.hideLoading();
        common_vendor.index.showToast({
          title: name + " 已启动",
          icon: "success"
        });
      }, 1200);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.rooms, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: common_vendor.n($data.activeRoom === item.name ? "active-room" : ""),
        c: item.name,
        d: common_vendor.o(($event) => $options.selectRoom(item), item.name)
      };
    }),
    b: common_vendor.o((...args) => $options.addRoom && $options.addRoom(...args), "d8"),
    c: common_vendor.t($data.activeRoom),
    d: common_vendor.f($options.filterDeviceList, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.icon),
        b: common_vendor.t(item.online ? "在线" : "离线"),
        c: common_vendor.n(item.online ? "online" : "offline"),
        d: common_vendor.t(item.name),
        e: common_vendor.t(item.desc),
        f: common_vendor.t(item.room),
        g: common_vendor.n(item.online ? "power-on" : "power-off"),
        h: common_vendor.o(($event) => $options.toggleDevice(item), item.name),
        i: item.name,
        j: common_vendor.o(($event) => $options.goControl(item), item.name)
      };
    }),
    e: common_vendor.o(($event) => $options.runScene("回家模式"), "16"),
    f: common_vendor.o(($event) => $options.runScene("离家布防"), "b2"),
    g: common_vendor.o(($event) => $options.runScene("睡眠模式"), "e0"),
    h: common_vendor.o(($event) => $options.runScene("会客模式"), "c8"),
    i: common_vendor.o((...args) => $options.goVoice && $options.goVoice(...args), "54")
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/home/home.js.map
