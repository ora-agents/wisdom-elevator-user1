"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      isEdit: false,
      deviceTypeList: [
        "电梯",
        "机器人"
      ],
      form: {
        order_id: "",
        user_name: "",
        user_phone: "",
        address: "",
        device_type: "电梯",
        device_id: "ELV-001",
        device_brand: "OTIS",
        device_model: "OTIS-GX200",
        fault_type: "维修",
        order_status: "待接单",
        repair_name: "",
        repair_phone: "",
        finish_time: "",
        appointment_date: "",
        appointment_time: "",
        desc: ""
      },
      errors: {
        fault_type: "",
        user_name: "",
        user_phone: "",
        address: "",
        appointment_date: "",
        appointment_time: ""
      }
    };
  },
  computed: {
    today() {
      const date = /* @__PURE__ */ new Date();
      const y = date.getFullYear();
      const m = String(
        date.getMonth() + 1
      ).padStart(2, "0");
      const d = String(
        date.getDate()
      ).padStart(2, "0");
      return `${y}-${m}-${d}`;
    },
    needAppointment() {
      return this.form.fault_type === "维修" || this.form.fault_type === "保养";
    },
    submitText() {
      if (this.isEdit) {
        return "保存修改";
      }
      if (this.form.fault_type === "报警") {
        return "提交报警";
      }
      if (this.form.fault_type === "维修") {
        return "提交维修";
      }
      if (this.form.fault_type === "保养") {
        return "提交保养";
      }
      return "提交工单";
    }
  },
  onLoad(options) {
    if (options.type) {
      if (options.type === "alarm" || options.type === "rescue") {
        this.form.fault_type = "报警";
      }
      if (options.type === "repair") {
        this.form.fault_type = "维修";
      }
      if (options.type === "maintain") {
        this.form.fault_type = "保养";
      }
    }
    if (options.edit === "1") {
      this.isEdit = true;
    }
    if (options.device_type) {
      this.form.device_type = options.device_type;
    }
    if (options.device_id) {
      this.form.device_id = options.device_id;
    }
    if (options.device_brand) {
      this.form.device_brand = options.device_brand;
    }
    if (options.device_model) {
      this.form.device_model = options.device_model;
    }
  },
  methods: {
    /* 返回 */
    goBack() {
      common_vendor.index.navigateBack();
    },
    /* 设备类型切换 */
    deviceTypeChange(e) {
      this.form.device_type = this.deviceTypeList[e.detail.value];
    },
    /* 工单类型切换 */
    selectType(type) {
      if (this.isEdit) {
        common_vendor.index.showToast({
          title: "修改工单不能修改工单类型",
          icon: "none"
        });
        return;
      }
      this.form.fault_type = type;
      if (type === "报警") {
        this.form.appointment_date = "";
        this.form.appointment_time = "";
        this.errors.appointment_date = "";
        this.errors.appointment_time = "";
      }
    },
    /* 日期 */
    dateChange(e) {
      this.form.appointment_date = e.detail.value;
      this.errors.appointment_date = "";
    },
    /* 时间 */
    timeChange(e) {
      this.form.appointment_time = e.detail.value;
      this.errors.appointment_time = "";
    },
    /* 校验 */
    validate() {
      this.clearErrors();
      let valid = true;
      if (!this.form.fault_type) {
        this.errors.fault_type = "工单类型不得为空";
        valid = false;
      }
      if (!this.form.user_name) {
        this.errors.user_name = "联系人不得为空";
        valid = false;
      }
      if (!this.form.user_phone) {
        this.errors.user_phone = "联系电话不得为空";
        valid = false;
      } else if (!/^1\d{10}$/.test(
        this.form.user_phone
      )) {
        this.errors.user_phone = "联系电话格式不正确";
        valid = false;
      }
      if (!this.form.address) {
        this.errors.address = "地址不得为空";
        valid = false;
      }
      if (this.needAppointment) {
        if (!this.form.appointment_date) {
          this.errors.appointment_date = "预约日期不得为空";
          valid = false;
        }
        if (!this.form.appointment_time) {
          this.errors.appointment_time = "预约时间不得为空";
          valid = false;
        }
        if (this.form.appointment_date && this.form.appointment_time && this.isPastAppointment()) {
          this.errors.appointment_time = "预约时间不得早于当前时间";
          valid = false;
        }
      }
      return valid;
    },
    /* 清空错误 */
    clearErrors() {
      this.errors = {
        fault_type: "",
        user_name: "",
        user_phone: "",
        address: "",
        appointment_date: "",
        appointment_time: ""
      };
    },
    /* 是否过去时间 */
    isPastAppointment() {
      const appointment = /* @__PURE__ */ new Date(
        this.form.appointment_date + " " + this.form.appointment_time + ":00"
      );
      const now = /* @__PURE__ */ new Date();
      return appointment.getTime() < now.getTime();
    },
    /* 创建工单ID */
    createOrderId() {
      const now = /* @__PURE__ */ new Date();
      const y = now.getFullYear();
      const m = String(
        now.getMonth() + 1
      ).padStart(2, "0");
      const d = String(
        now.getDate()
      ).padStart(2, "0");
      const h = String(
        now.getHours()
      ).padStart(2, "0");
      const min = String(
        now.getMinutes()
      ).padStart(2, "0");
      const s = String(
        now.getSeconds()
      ).padStart(2, "0");
      return "WO" + y + m + d + h + min + s;
    },
    /* 创建时间 */
    getCurrentTime() {
      const now = /* @__PURE__ */ new Date();
      const y = now.getFullYear();
      const m = String(
        now.getMonth() + 1
      ).padStart(2, "0");
      const d = String(
        now.getDate()
      ).padStart(2, "0");
      const h = String(
        now.getHours()
      ).padStart(2, "0");
      const min = String(
        now.getMinutes()
      ).padStart(2, "0");
      return `${y}-${m}-${d} ${h}:${min}`;
    },
    /* 家庭报警通知 */
    sendFamilyAlarm() {
      const familyList = [
        {
          name: "爸爸",
          phone: "138****1111"
        },
        {
          name: "妈妈",
          phone: "138****2222"
        },
        {
          name: "儿子",
          phone: "138****3333"
        }
      ];
      familyList.forEach((item) => {
        common_vendor.index.__f__(
          "log",
          "at pages/repair/repair.vue:860",
          "发送报警通知给：",
          item.name,
          item.phone
        );
      });
      common_vendor.index.showModal({
        title: "家庭报警通知",
        content: "报警信息已同步发送给家庭成员",
        showCancel: false
      });
    },
    /* 提交工单 */
    submitOrder() {
      if (!this.validate()) {
        return;
      }
      if (!this.form.order_id) {
        this.form.order_id = this.createOrderId();
      }
      this.form.order_status = "待接单";
      this.form.finish_time = "";
      const orderData = {
        /* 工单 */
        order_id: this.form.order_id,
        order_type: this.form.fault_type,
        order_status: this.form.order_status,
        description: this.form.desc,
        create_time: this.getCurrentTime(),
        finish_time: this.form.finish_time,
        /* 用户 */
        user_name: this.form.user_name,
        user_phone: this.form.user_phone,
        address: this.form.address,
        /* 设备 */
        device_type: this.form.device_type,
        device_id: this.form.device_id,
        device_brand: this.form.device_brand,
        device_model: this.form.device_model,
        /* 维修员 */
        repair_name: this.form.repair_name,
        repair_phone: this.form.repair_phone,
        /* 预约 */
        appoint_date: this.form.appointment_date,
        appoint_time: this.form.appointment_time
      };
      common_vendor.index.__f__(
        "log",
        "at pages/repair/repair.vue:981",
        "提交工单数据：",
        orderData
      );
      if (this.form.fault_type === "报警") {
        this.sendFamilyAlarm();
      }
      let orderList = common_vendor.index.getStorageSync("orderList") || [];
      orderList.unshift(orderData);
      common_vendor.index.setStorageSync(
        "orderList",
        orderList
      );
      common_vendor.index.showToast({
        title: this.submitText + "成功",
        icon: "success"
      });
      setTimeout(() => {
        common_vendor.index.navigateTo({
          url: "/pages/orderDetail/orderDetail?order_id=" + encodeURIComponent(
            orderData.order_id
          ) + "&user_name=" + encodeURIComponent(
            orderData.user_name
          ) + "&user_phone=" + encodeURIComponent(
            orderData.user_phone
          ) + "&address=" + encodeURIComponent(
            orderData.address
          ) + "&device_type=" + encodeURIComponent(
            orderData.device_type
          ) + "&device_id=" + encodeURIComponent(
            orderData.device_id
          ) + "&device_brand=" + encodeURIComponent(
            orderData.device_brand
          ) + "&device_model=" + encodeURIComponent(
            orderData.device_model
          ) + "&order_type=" + encodeURIComponent(
            orderData.order_type
          ) + "&order_status=" + encodeURIComponent(
            orderData.order_status
          ) + "&description=" + encodeURIComponent(
            orderData.description
          ) + "&repair_name=" + encodeURIComponent(
            orderData.repair_name
          ) + "&repair_phone=" + encodeURIComponent(
            orderData.repair_phone
          ) + "&appoint_date=" + encodeURIComponent(
            orderData.appoint_date
          ) + "&appoint_time=" + encodeURIComponent(
            orderData.appoint_time
          ) + "&create_time=" + encodeURIComponent(
            orderData.create_time
          ) + "&finish_time=" + encodeURIComponent(
            orderData.finish_time
          )
        });
      }, 800);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.n($data.form.fault_type === "报警" ? "type-active" : ""),
    b: common_vendor.o(($event) => $options.selectType("报警"), "a7"),
    c: common_vendor.n($data.form.fault_type === "维修" ? "type-active" : ""),
    d: common_vendor.o(($event) => $options.selectType("维修"), "69"),
    e: common_vendor.n($data.form.fault_type === "保养" ? "type-active" : ""),
    f: common_vendor.o(($event) => $options.selectType("保养"), "7c"),
    g: $data.errors.fault_type
  }, $data.errors.fault_type ? {
    h: common_vendor.t($data.errors.fault_type)
  } : {}, {
    i: $data.form.user_name,
    j: common_vendor.o(($event) => $data.form.user_name = $event.detail.value, "a4"),
    k: $data.errors.user_name
  }, $data.errors.user_name ? {
    l: common_vendor.t($data.errors.user_name)
  } : {}, {
    m: $data.form.user_phone,
    n: common_vendor.o(($event) => $data.form.user_phone = $event.detail.value, "f0"),
    o: $data.errors.user_phone
  }, $data.errors.user_phone ? {
    p: common_vendor.t($data.errors.user_phone)
  } : {}, {
    q: $data.form.address,
    r: common_vendor.o(($event) => $data.form.address = $event.detail.value, "69"),
    s: $data.errors.address
  }, $data.errors.address ? {
    t: common_vendor.t($data.errors.address)
  } : {}, {
    v: common_vendor.t($data.form.device_type || "请选择设备类型"),
    w: $data.deviceTypeList,
    x: common_vendor.o((...args) => $options.deviceTypeChange && $options.deviceTypeChange(...args), "9c"),
    y: $data.form.device_id,
    z: common_vendor.o(($event) => $data.form.device_id = $event.detail.value, "0c"),
    A: $data.form.device_brand,
    B: common_vendor.o(($event) => $data.form.device_brand = $event.detail.value, "cf"),
    C: $data.form.device_model,
    D: common_vendor.o(($event) => $data.form.device_model = $event.detail.value, "47"),
    E: $options.needAppointment
  }, $options.needAppointment ? {
    F: common_vendor.t($data.form.appointment_date || "请选择预约日期"),
    G: $options.today,
    H: $data.form.appointment_date,
    I: common_vendor.o((...args) => $options.dateChange && $options.dateChange(...args), "20")
  } : {}, {
    J: $data.errors.appointment_date
  }, $data.errors.appointment_date ? {
    K: common_vendor.t($data.errors.appointment_date)
  } : {}, {
    L: $options.needAppointment
  }, $options.needAppointment ? {
    M: common_vendor.t($data.form.appointment_time || "请选择预约时间"),
    N: $data.form.appointment_time,
    O: common_vendor.o((...args) => $options.timeChange && $options.timeChange(...args), "7f")
  } : {}, {
    P: $data.errors.appointment_time
  }, $data.errors.appointment_time ? {
    Q: common_vendor.t($data.errors.appointment_time)
  } : {}, {
    R: $data.form.desc,
    S: common_vendor.o(($event) => $data.form.desc = $event.detail.value, "d2"),
    T: common_vendor.t($data.form.desc.length),
    U: common_vendor.t($options.submitText),
    V: common_vendor.o((...args) => $options.submitOrder && $options.submitOrder(...args), "f2")
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/repair/repair.js.map
