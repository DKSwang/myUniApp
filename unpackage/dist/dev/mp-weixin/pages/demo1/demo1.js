"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "demo1",
  setup(__props) {
    common_vendor.onLoad((e) => {
      console.log(e, "接受参数");
    });
    const title = common_vendor.ref("我是Demo1页面");
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(common_vendor.unref(title))
      };
    };
  }
});
wx.createPage(_sfc_main);
