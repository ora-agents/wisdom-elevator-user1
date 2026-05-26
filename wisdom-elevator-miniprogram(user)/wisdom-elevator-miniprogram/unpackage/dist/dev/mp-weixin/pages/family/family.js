"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      members: [
        {
          name: "王先生",
          phone: "13800138000",
          avatar: "W",
          admin: true
        },
        {
          name: "李女士",
          phone: "13900139000",
          avatar: "L",
          admin: false
        },
        {
          name: "张先生",
          phone: "13700137000",
          avatar: "Z",
          admin: false
        }
      ]
    };
  },
  methods: {
    addMember() {
      common_vendor.index.showModal({
        title: "添加成员",
        content: "模拟邀请家庭成员",
        showCancel: false
      });
    },
    removeMember(item) {
      common_vendor.index.showModal({
        title: "提示",
        content: "确认删除 " + item.name + " ?",
        success: (res) => {
          if (res.confirm) {
            this.members = this.members.filter(
              (i) => i.name !== item.name
            );
          }
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.addMember && $options.addMember(...args), "a6"),
    b: common_vendor.f($data.members, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.avatar),
        b: common_vendor.t(item.name),
        c: common_vendor.t(item.phone),
        d: common_vendor.t(item.admin ? "管理员" : "成员"),
        e: common_vendor.n(item.admin ? "admin" : "normal"),
        f: common_vendor.o(($event) => $options.removeMember(item), item.name),
        g: item.name
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/family/family.js.map
