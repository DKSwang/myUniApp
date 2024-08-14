"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "my-head",
  props: {
    title: {
      type: [String, Number],
      required: true,
      default: "我是默认值"
    }
  },
  emits: ["sendTitle"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const myName = common_vendor.computed(() => props.title + "&");
    const emit = __emit;
    console.log(props.title);
    emit("sendTitle", "子组件传来的数据");
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(__props.title),
        b: common_vendor.t(myName.value)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4a5f5aef"]]);
wx.createComponent(Component);
