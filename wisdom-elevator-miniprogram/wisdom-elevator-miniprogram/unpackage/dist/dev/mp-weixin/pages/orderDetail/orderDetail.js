"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      order: {
        id: "WO20260522001",
        device: "客厅电梯",
        problem: "运行时出现异响",
        location: "客厅",
        status: "维修中"
      },
      timeline: [
        {
          text: "用户提交报修",
          time: "2026-05-22 10:20"
        },
        {
          text: "物业已接单",
          time: "2026-05-22 10:35"
        },
        {
          text: "维修人员已上门",
          time: "2026-05-22 11:10"
        }
      ]
    };
  },
  methods: {
    callPhone() {
      common_vendor.index.makePhoneCall({
        phoneNumber: "13800138000"
      });
    },
    finishOrder() {
      common_vendor.index.showToast({
        title: "已确认完成",
        icon: "success"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.order.id),
    b: common_vendor.t($data.order.device),
    c: common_vendor.t($data.order.problem),
    d: common_vendor.t($data.order.location),
    e: common_vendor.t($data.order.status),
    f: common_vendor.f($data.timeline, (item, index, i0) => {
      return common_vendor.e({
        a: index !== $data.timeline.length - 1
      }, index !== $data.timeline.length - 1 ? {} : {}, {
        b: common_vendor.t(item.text),
        c: common_vendor.t(item.time),
        d: index
      });
    }),
    g: common_vendor.o((...args) => $options.callPhone && $options.callPhone(...args), "dd"),
    h: common_vendor.o((...args) => $options.finishOrder && $options.finishOrder(...args), "96")
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/orderDetail/orderDetail.js.map
