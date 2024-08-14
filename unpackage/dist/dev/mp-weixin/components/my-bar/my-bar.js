"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "my-bar",
  setup(__props, { expose: __expose }) {
    const outFunction = () => {
      console.log("子组件暴漏-父组件访问");
      return "子组件数据";
    };
    __expose({ outFunction });
    return (_ctx, _cache) => {
      return {};
    };
  }
});
wx.createComponent(_sfc_main);
