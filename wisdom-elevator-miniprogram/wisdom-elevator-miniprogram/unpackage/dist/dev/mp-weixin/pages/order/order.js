"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      currentTab: "全部",
      tabs: [
        "全部",
        "待接单",
        "维修中",
        "已完成"
      ],
      orders: [
        {
          id: "WO20260522001",
          device: "客厅电梯",
          problem: "运行时出现异响，需要检查",
          status: "待接单",
          location: "客厅",
          time: "2026-05-22 10:30"
        },
        {
          id: "WO20260522002",
          device: "卧室空调",
          problem: "制冷效果异常",
          status: "维修中",
          location: "卧室",
          time: "2026-05-22 09:20"
        },
        {
          id: "WO20260521001",
          device: "阳台机器人",
          problem: "设备无法启动",
          status: "已完成",
          location: "阳台",
          time: "2026-05-21 16:10"
        }
      ]
    };
  },
  computed: {
    filteredOrders() {
      if (this.currentTab === "全部") {
        return this.orders;
      }
      return this.orders.filter(
        (item) => item.status === this.currentTab
      );
    }
  },
  methods: {
    statusClass(status) {
      if (status === "待接单") {
        return "wait";
      }
      if (status === "维修中") {
        return "doing";
      }
      return "done";
    },
    openOrder(item) {
      common_vendor.index.navigateTo({
        url: "/pages/orderDetail/orderDetail?id=" + item.id
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.tabs, (item, k0, i0) => {
      return {
        a: common_vendor.t(item),
        b: item,
        c: $data.currentTab === item ? 1 : "",
        d: common_vendor.o(($event) => $data.currentTab = item, item)
      };
    }),
    b: common_vendor.f($options.filteredOrders, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.id),
        b: common_vendor.t(item.status),
        c: common_vendor.n($options.statusClass(item.status)),
        d: common_vendor.t(item.device),
        e: common_vendor.t(item.problem),
        f: common_vendor.t(item.time),
        g: common_vendor.t(item.location),
        h: item.id,
        i: common_vendor.o(($event) => $options.openOrder(item), item.id)
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/order/order.js.map
