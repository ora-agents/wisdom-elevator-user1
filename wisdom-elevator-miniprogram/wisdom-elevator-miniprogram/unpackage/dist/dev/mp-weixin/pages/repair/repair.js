"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      /* 设备 */
      deviceIndex: 0,
      deviceList: [
        "客厅空调",
        "卧室空调",
        "客厅电梯",
        "三楼机器人",
        "阳台机器人"
      ],
      /* 故障 */
      faultIndex: 0,
      faultTypes: [
        "无法启动",
        "运行异常",
        "设备离线",
        "硬件故障",
        "其他问题"
      ],
      /* 联系人 */
      userIndex: 0,
      userList: [
        "王先生",
        "李女士",
        "张先生",
        "管理员"
      ],
      /* 电话 */
      phoneIndex: 0,
      phoneList: [
        "13800138000",
        "13900139000",
        "13700137000"
      ],
      /* 地址 */
      addressIndex: 0,
      addressList: [
        "客厅",
        "卧室",
        "厨房",
        "阳台",
        "三楼",
        "公共区域"
      ],
      form: {
        name: "",
        user: "",
        phone: "",
        address: "",
        desc: ""
      }
    };
  },
  onLoad(option) {
    if (option.name) {
      this.form.name = option.name;
    } else {
      this.form.name = this.deviceList[0];
    }
  },
  methods: {
    /* 设备 */
    changeDevice(e) {
      this.deviceIndex = e.detail.value;
      this.form.name = this.deviceList[this.deviceIndex];
    },
    /* 故障 */
    changeFault(e) {
      this.faultIndex = e.detail.value;
    },
    /* 联系人 */
    changeUser(e) {
      this.userIndex = e.detail.value;
      this.form.user = this.userList[this.userIndex];
    },
    /* 电话 */
    changePhone(e) {
      this.phoneIndex = e.detail.value;
      this.form.phone = this.phoneList[this.phoneIndex];
    },
    /* 地址 */
    changeAddress(e) {
      this.addressIndex = e.detail.value;
      this.form.address = this.addressList[this.addressIndex];
    },
    /* 上传 */
    uploadImage() {
      common_vendor.index.chooseImage({
        count: 1,
        success: () => {
          common_vendor.index.showToast({
            title: "上传成功",
            icon: "success"
          });
        }
      });
    },
    /* 提交 */
    submit() {
      const orderId = "WO" + Date.now();
      common_vendor.index.showToast({
        title: "报修已提交",
        icon: "success"
      });
      setTimeout(() => {
        common_vendor.index.redirectTo({
          url: "/pages/orderDetail/orderDetail?id=" + orderId
        });
      }, 800);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.deviceList[$data.deviceIndex]),
    b: $data.deviceIndex,
    c: $data.deviceList,
    d: common_vendor.o((...args) => $options.changeDevice && $options.changeDevice(...args), "ca"),
    e: common_vendor.t($data.faultTypes[$data.faultIndex]),
    f: $data.faultIndex,
    g: $data.faultTypes,
    h: common_vendor.o((...args) => $options.changeFault && $options.changeFault(...args), "90"),
    i: common_vendor.t($data.userList[$data.userIndex]),
    j: $data.userIndex,
    k: $data.userList,
    l: common_vendor.o((...args) => $options.changeUser && $options.changeUser(...args), "59"),
    m: common_vendor.t($data.phoneList[$data.phoneIndex]),
    n: $data.phoneIndex,
    o: $data.phoneList,
    p: common_vendor.o((...args) => $options.changePhone && $options.changePhone(...args), "1c"),
    q: common_vendor.t($data.addressList[$data.addressIndex]),
    r: $data.addressIndex,
    s: $data.addressList,
    t: common_vendor.o((...args) => $options.changeAddress && $options.changeAddress(...args), "a4"),
    v: $data.form.desc,
    w: common_vendor.o(($event) => $data.form.desc = $event.detail.value, "15"),
    x: common_vendor.o((...args) => $options.uploadImage && $options.uploadImage(...args), "88"),
    y: common_vendor.o((...args) => $options.submit && $options.submit(...args), "37")
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/repair/repair.js.map
