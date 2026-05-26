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
          order_id: "WO20250514002",
          user_name: "李四",
          user_phone: "13900139000",
          address: "江苏南京市江宁区XX小区1栋101",
          device_type: "电梯",
          device_id: "DEV2025002",
          device_brand: "三菱",
          device_model: "LEHY-III",
          order_type: "维修",
          order_status: "已接单",
          repair_name: "赵师傅",
          repair_phone: "13600136000",
          description: "电梯运行异常",
          appoint_date: "2026-05-14",
          appoint_time: "10:00",
          finish_time: ""
        },
        {
          order_id: "WO20250514003",
          user_name: "王五",
          user_phone: "13700137000",
          address: "江苏南京市江宁区XX小区1栋101",
          device_type: "电梯",
          device_id: "DEV2025003",
          device_brand: "日立",
          device_model: "HGP",
          order_type: "保养",
          order_status: "已完成",
          repair_name: "孙师傅",
          repair_phone: "13500135000",
          description: "例行保养",
          appoint_date: "2026-05-13",
          appoint_time: "09:00",
          finish_time: "2026-05-13 12:00"
        }
      ]
    };
  },
  computed: {
    filteredOrders() {
      if (this.currentTab === "全部") {
        return this.orders;
      }
      return this.orders.filter((item) => {
        return item.order_status === this.currentTab;
      });
    }
  },
  methods: {
    /* 状态颜色 */
    statusClass(status) {
      if (status === "待接单") {
        return "wait";
      }
      if (status === "维修中") {
        return "doing";
      }
      return "done";
    },
    /* 打开工单详情 */
    openOrder(item) {
      common_vendor.index.navigateTo({
        url: "/pages/orderDetail/orderDetail?order_id=" + encodeURIComponent(item.order_id) + "&user_name=" + encodeURIComponent(item.user_name) + "&user_phone=" + encodeURIComponent(item.user_phone) + "&address=" + encodeURIComponent(item.address) + "&device_type=" + encodeURIComponent(item.device_type) + "&device_id=" + encodeURIComponent(item.device_id) + "&device_brand=" + encodeURIComponent(item.device_brand) + "&device_model=" + encodeURIComponent(item.device_model) + "&order_type=" + encodeURIComponent(item.order_type) + "&order_status=" + encodeURIComponent(item.order_status) + "&repair_name=" + encodeURIComponent(item.repair_name) + "&repair_phone=" + encodeURIComponent(item.repair_phone) + "&description=" + encodeURIComponent(item.description) + "&appoint_date=" + encodeURIComponent(item.appoint_date) + "&appoint_time=" + encodeURIComponent(item.appoint_time) + "&finish_time=" + encodeURIComponent(item.finish_time)
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
        a: common_vendor.t(item.order_id),
        b: common_vendor.t(item.order_status),
        c: common_vendor.n($options.statusClass(item.order_status)),
        d: common_vendor.t(item.device),
        e: common_vendor.t(item.problem),
        f: common_vendor.t(item.time),
        g: common_vendor.t(item.location),
        h: item.order_id,
        i: common_vendor.o(($event) => $options.openOrder(item), item.order_id)
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/order/order.js.map
