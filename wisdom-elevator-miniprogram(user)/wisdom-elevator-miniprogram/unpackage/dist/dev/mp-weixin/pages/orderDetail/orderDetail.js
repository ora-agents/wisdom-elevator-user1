"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      order: {
        /* 新结构 */
        order_id: "",
        user_name: "",
        user_phone: "",
        address: "",
        device_type: "",
        device_id: "",
        device_brand: "",
        device_model: "",
        order_type: "",
        order_status: "待接单",
        repair_name: "",
        repair_phone: "",
        description: "",
        create_time: "",
        finish_time: "",
        /* 旧结构兼容 */
        orderId: "",
        type: "",
        status: "",
        phone: "",
        deviceBrand: "",
        deviceModel: "",
        remark: "",
        time: "",
        problem: "",
        /* 评价 */
        rate_done: false,
        rate_score: 0,
        rate_content: ""
      },
      showRate: false,
      rate: 5,
      rateText: ""
    };
  },
  onLoad(options) {
    this.order = {
      /* 新字段 */
      order_id: this.decode(options.order_id || options.id),
      user_name: this.decode(options.user_name),
      user_phone: this.decode(
        options.user_phone || options.phone
      ),
      address: this.decode(options.address),
      device_type: this.decode(options.device_type) || this.autoDeviceType(options),
      device_id: this.decode(options.device_id),
      device_brand: this.decode(
        options.device_brand || options.deviceBrand
      ),
      device_model: this.decode(
        options.device_model || options.deviceModel
      ),
      order_type: this.decode(
        options.order_type || options.type
      ),
      order_status: this.decode(
        options.order_status || options.status || "待接单"
      ),
      repair_name: this.decode(options.repair_name),
      repair_phone: this.decode(options.repair_phone),
      description: this.decode(
        options.description || options.problem || options.remark
      ),
      create_time: this.decode(
        options.create_time || options.time
      ),
      finish_time: this.decode(options.finish_time),
      /* 旧结构 */
      orderId: this.decode(options.id),
      type: this.decode(options.type),
      status: this.decode(options.status),
      phone: this.decode(options.phone),
      deviceBrand: this.decode(options.deviceBrand),
      deviceModel: this.decode(options.deviceModel),
      remark: this.decode(options.remark),
      time: this.decode(options.time),
      problem: this.decode(options.problem),
      /* 默认评价 */
      rate_done: false,
      rate_score: 0,
      rate_content: ""
    };
  },
  computed: {
    /* 当前步骤 */
    currentStep() {
      const status = this.order.order_status || this.order.status;
      if (status === "待接单") {
        return 0;
      }
      if (status === "已接单" || status === "维修中") {
        return 1;
      }
      if (status === "已完成") {
        return 2;
      }
      return 0;
    },
    /* 进度 */
    progressWidth() {
      if (this.currentStep === 0) {
        return "0%";
      }
      if (this.currentStep === 1) {
        return "50%";
      }
      return "100%";
    },
    /* 状态颜色 */
    statusClass() {
      const status = this.order.order_status || this.order.status;
      if (status === "待接单") {
        return "status-wait";
      }
      if (status === "已接单" || status === "维修中") {
        return "status-doing";
      }
      if (status === "已完成") {
        return "status-done";
      }
      return "";
    }
  },
  methods: {
    /* 防乱码 */
    decode(value) {
      if (!value) {
        return "";
      }
      try {
        return decodeURIComponent(value);
      } catch (e) {
        return value;
      }
    },
    /* 自动设备类型 */
    autoDeviceType(options) {
      const text = this.decode(options.device_model) + this.decode(options.deviceModel) + this.decode(options.device_brand) + this.decode(options.deviceBrand) + this.decode(options.device_name) + this.decode(options.device);
      if (text.includes("机器人")) {
        return "机器人";
      }
      return "电梯";
    },
    /* 返回 */
    goBack() {
      common_vendor.index.navigateBack();
    },
    /* 联系客服 */
    callService() {
      common_vendor.index.makePhoneCall({
        phoneNumber: "4008888888"
      });
    },
    /* 联系维修员 */
    callPhone() {
      common_vendor.index.makePhoneCall({
        phoneNumber: this.order.repair_phone || "13900000000"
      });
    },
    /* 确认完成 */
    finishOrder() {
      this.showRate = true;
    },
    /* 星级评分 */
    setRate(val) {
      this.rate = val;
    },
    /* 提交评价 */
    submitRate() {
      this.order.order_status = "已完成";
      this.order.status = "已完成";
      this.order.finish_time = (/* @__PURE__ */ new Date()).toLocaleString();
      this.order.rate_done = true;
      this.order.rate_score = this.rate;
      this.order.rate_content = this.rateText;
      common_vendor.index.showToast({
        title: "评价成功",
        icon: "success"
      });
      this.showRate = false;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o((...args) => $options.goBack && $options.goBack(...args), "a9"),
    b: common_vendor.t($data.order.order_id),
    c: common_vendor.t($data.order.order_status),
    d: common_vendor.n($options.statusClass),
    e: common_vendor.t($data.order.user_name || "—"),
    f: common_vendor.t($data.order.user_phone || "—"),
    g: common_vendor.t($data.order.address || "—"),
    h: common_vendor.t($data.order.device_type || $options.autoDeviceType($data.order)),
    i: common_vendor.t($data.order.device_id || "—"),
    j: common_vendor.t($data.order.device_brand || $data.order.deviceBrand || "—"),
    k: common_vendor.t($data.order.device_model || $data.order.deviceModel || "—"),
    l: common_vendor.t($data.order.order_type || $data.order.type || "—"),
    m: common_vendor.t($data.order.description || $data.order.problem || $data.order.remark || "—"),
    n: $options.progressWidth,
    o: common_vendor.n($options.currentStep >= 0 ? "done" : ""),
    p: common_vendor.n($options.currentStep >= 1 ? "done" : ""),
    q: common_vendor.n($options.currentStep >= 2 ? "done" : ""),
    r: common_vendor.t($data.order.repair_name || "暂未分配"),
    s: common_vendor.t($data.order.repair_phone || "—"),
    t: common_vendor.t($data.order.create_time || $data.order.time || "—"),
    v: common_vendor.t($data.order.finish_time || "—"),
    w: ($data.order.order_status || $data.order.status) === "待接单"
  }, ($data.order.order_status || $data.order.status) === "待接单" ? {
    x: common_vendor.o((...args) => $options.callService && $options.callService(...args), "db")
  } : {}, {
    y: ($data.order.order_status || $data.order.status) === "已接单" || ($data.order.order_status || $data.order.status) === "维修中"
  }, ($data.order.order_status || $data.order.status) === "已接单" || ($data.order.order_status || $data.order.status) === "维修中" ? {
    z: common_vendor.o((...args) => $options.callPhone && $options.callPhone(...args), "af"),
    A: common_vendor.o((...args) => $options.finishOrder && $options.finishOrder(...args), "fc")
  } : {}, {
    B: ($data.order.order_status || $data.order.status) === "已完成"
  }, ($data.order.order_status || $data.order.status) === "已完成" ? common_vendor.e({
    C: !$data.order.rate_done
  }, !$data.order.rate_done ? {
    D: common_vendor.o(($event) => $data.showRate = true, "48")
  } : {}) : {}, {
    E: $data.showRate
  }, $data.showRate ? {
    F: common_vendor.f(5, (i, k0, i0) => {
      return {
        a: i,
        b: common_vendor.n(i <= $data.rate ? "star-active" : ""),
        c: common_vendor.o(($event) => $options.setRate(i), i)
      };
    }),
    G: $data.rateText,
    H: common_vendor.o(($event) => $data.rateText = $event.detail.value, "c6"),
    I: common_vendor.o(($event) => $data.showRate = false, "97"),
    J: common_vendor.o((...args) => $options.submitRate && $options.submitRate(...args), "04")
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/orderDetail/orderDetail.js.map
