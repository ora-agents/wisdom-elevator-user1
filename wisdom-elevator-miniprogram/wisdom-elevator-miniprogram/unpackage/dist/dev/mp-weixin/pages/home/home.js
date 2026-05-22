"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      activeRoom: "客厅",
      rooms: [
        {
          name: "客厅",
          icon: "🛋️"
        },
        {
          name: "卧室",
          icon: "🛏️"
        },
        {
          name: "厨房",
          icon: "🍳"
        },
        {
          name: "阳台",
          icon: "🪴"
        },
        {
          name: "三楼",
          icon: "🏠"
        }
      ],
      allDevices: {
        客厅: [
          {
            icon: "🛗",
            name: "电梯",
            type: "电梯",
            desc: "客厅区域 · 正常运行",
            status: "运行中"
          },
          {
            icon: "💡",
            name: "客厅灯光",
            type: "灯光",
            desc: "已开启 · 亮度60%",
            status: "开启"
          },
          {
            icon: "🤖",
            name: "清洁机器人",
            type: "机器人",
            desc: "清扫中 · 电量80%",
            status: "工作中"
          },
          {
            icon: "🚪",
            name: "门禁",
            type: "门禁",
            desc: "已上锁 · 状态正常",
            status: "正常"
          }
        ],
        卧室: [
          {
            icon: "❄️",
            name: "卧室空调",
            type: "空调",
            desc: "26℃ · 制冷中",
            status: "开启"
          },
          {
            icon: "💡",
            name: "卧室灯光",
            type: "灯光",
            desc: "已关闭",
            status: "关闭"
          }
        ],
        厨房: [
          {
            icon: "💡",
            name: "厨房灯光",
            type: "灯光",
            desc: "已开启 · 状态正常",
            status: "开启"
          },
          {
            icon: "🛡️",
            name: "烟雾传感器",
            type: "安防",
            desc: "空气检测正常",
            status: "正常"
          }
        ],
        阳台: [
          {
            icon: "🤖",
            name: "阳台机器人",
            type: "机器人",
            desc: "待机中 · 电量95%",
            status: "待机"
          }
        ],
        三楼: [
          {
            icon: "🛗",
            name: "三楼电梯",
            type: "电梯",
            desc: "运行正常",
            status: "正常"
          },
          {
            icon: "🤖",
            name: "三楼机器人",
            type: "机器人",
            desc: "巡检中",
            status: "工作中"
          }
        ]
      }
    };
  },
  computed: {
    roomDevices() {
      return this.allDevices[this.activeRoom] || [];
    }
  },
  methods: {
    selectRoom(room) {
      this.activeRoom = room;
    },
    goVoice() {
      common_vendor.index.navigateTo({
        url: "/pages/voice/voice"
      });
    },
    goAddDevice() {
      common_vendor.index.navigateTo({
        url: "/pages/addDevice/addDevice"
      });
    },
    goDeviceDetail(type) {
      common_vendor.index.navigateTo({
        url: "/pages/deviceDetail/deviceDetail?type=" + type
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.goVoice && $options.goVoice(...args), "87"),
    b: common_vendor.o((...args) => $options.goAddDevice && $options.goAddDevice(...args), "8a"),
    c: common_vendor.t($data.activeRoom),
    d: common_vendor.f($data.rooms, (room, k0, i0) => {
      return {
        a: common_vendor.t(room.icon),
        b: common_vendor.t(room.name),
        c: room.name,
        d: $data.activeRoom === room.name ? 1 : "",
        e: common_vendor.o(($event) => $options.selectRoom(room.name), room.name)
      };
    }),
    e: common_vendor.t($data.activeRoom),
    f: common_vendor.f($options.roomDevices, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.icon),
        b: common_vendor.t(item.status),
        c: common_vendor.t(item.name),
        d: common_vendor.t(item.desc),
        e: item.name,
        f: common_vendor.o(($event) => $options.goDeviceDetail(item.type), item.name)
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/home/home.js.map
