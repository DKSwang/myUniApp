"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const title = common_vendor.ref("王");
    const changeTitle = () => {
      title.value = "魏";
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(title.value),
        b: common_vendor.o(changeTitle)
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/john/Documents/myself/uni-app/uniAppVue3/pages/index/index.vue"]]);
tt.createPage(MiniProgramPage);
