"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "otherPage",
  setup(__props) {
    const title = common_vendor.ref("我是不在tabbar的页面");
    common_vendor.onLoad((e) => {
      common_vendor.index.hideHomeButton();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(common_vendor.unref(title))
      };
    };
  }
});
wx.createPage(_sfc_main);
