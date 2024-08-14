"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_my_head2 = common_vendor.resolveComponent("my-head");
  const _easycom_my_bar2 = common_vendor.resolveComponent("my-bar");
  (_easycom_my_head2 + _easycom_my_bar2)();
}
const _easycom_my_head = () => "../../components/my-head/my-head.js";
const _easycom_my_bar = () => "../../components/my-bar/my-bar.js";
if (!Math) {
  (_easycom_my_head + _easycom_my_bar)();
}
const title = "你好呀";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    let picUrl = common_vendor.ref("../../static/images/133054691.jpg");
    let arr = common_vendor.ref([
      "../../static/images/133054691.jpg",
      "../../static/images/IMG_202403273094_jpeg.jpeg",
      "../../static/images/4e5be21030a24594be1ab44d4f64e546.jpeg",
      "http://gips0.baidu.com/it/u=1690853528,2506870245&fm=3028&app=3028&f=JPEG&fmt=auto?w=1024&h=1024"
    ]);
    const changePic = () => {
      let i = 0;
      setInterval(() => {
        i++;
        picUrl.value = arr.value[i % 4];
      }, 1e3);
    };
    changePic();
    const nameObj = common_vendor.ref({
      name: "张三",
      age: 18
    });
    const nameOne = common_vendor.ref("李四");
    const nameTwo = common_vendor.ref("王五");
    common_vendor.watch([nameOne, nameTwo], (newValue, oldValue) => {
      console.log(newValue, oldValue);
    }, {
      deep: true,
      immediate: true
    });
    const sendTitle = (data) => {
      console.log(data, "88");
    };
    const viewNode = common_vendor.ref(null);
    common_vendor.onMounted(() => {
      console.log(viewNode.value, "viewNode");
    });
    const myBarRef = common_vendor.ref(null);
    const childData = common_vendor.ref("");
    const doChildF = () => {
      childData.value = myBarRef.value.outFunction();
      console.log(childData.value, "childData");
    };
    const count = common_vendor.ref(0);
    let timer = setInterval(() => {
      count.value++;
    }, 60);
    common_vendor.onLoad((e) => {
      console.log(e, "onLoad");
    });
    common_vendor.onShow(() => {
      console.log("onShow-跳转到另一个页面返回只会再次支持onShow,不在执行onLoad");
      timer = setInterval(() => {
        count.value++;
      }, 60);
    });
    const pageLifeRef = common_vendor.ref(null);
    common_vendor.onReady(() => {
      console.log(pageLifeRef.value, "onReady");
    });
    common_vendor.onHide(() => {
      console.log("onHide函数-离开页面执行");
      clearInterval(timer);
    });
    common_vendor.onUnload(() => {
      console.log("onUnload函数-卸载页面执行");
    });
    const showBack = common_vendor.ref(false);
    common_vendor.onPageScroll((e) => {
      showBack.value = e.scrollTop > 200;
      console.log(e, "onPageScroll");
    });
    const showToast = () => {
      common_vendor.index.showToast({
        title: "1展示toast-显示文字太多使用none",
        // icon:'none', //可用loading/success/error/exception/none
        image: "../../static/images/4e5be21030a24594be1ab44d4f64e546.jpeg",
        //不使用icon换成图片
        // icon:"loading",
        // title:'加载中...',
        mask: false,
        //显示遮蔽层
        duration: 5e3,
        success: (res) => {
          console.log(res, "成功的回调");
        },
        fail: (error) => {
          console.log(error, "失败的回调");
        },
        complete: (ret) => {
          console.log(ret, "无论成功失败都会回调");
        }
      });
    };
    const hideToast = () => {
      console.log("隐藏Toast");
      common_vendor.index.hideToast();
    };
    const showLoading = () => {
      common_vendor.index.showLoading({
        title: "加载中...",
        // icon:'none', //可用loading/success/error/exception/none
        icon: "loading",
        mask: false,
        //显示遮蔽层
        duration: 5e3,
        success: (res) => {
          console.log(res, "成功的回调");
        },
        fail: (error) => {
          console.log(error, "失败的回调");
        },
        complete: (ret) => {
          console.log(ret, "无论成功失败都会回调");
        }
      });
    };
    const hideLoading = () => {
      console.log("隐藏Toast");
      common_vendor.index.hideLoading();
    };
    const showModal = () => {
      common_vendor.index.showModal({
        title: "提示",
        // content: '这是一个模态弹窗',
        editable: true,
        placeholderText: "请输入内容",
        success: function(res) {
          if (res.confirm) {
            console.log("用户点击确定");
            common_vendor.index.showToast({
              title: "处理成功",
              duration: 2e3
            });
          } else if (res.cancel) {
            console.log("用户点击取消");
            common_vendor.index.showToast({
              title: "处理失败",
              icon: "error",
              duration: 2e3
            });
          }
        }
      });
    };
    const showActionSheet = () => {
      common_vendor.index.showActionSheet({
        title: "请选择",
        itemList: ["A", "B", "C"],
        success: function(res) {
          console.log("选中了第" + (res.tapIndex + 1) + "个按钮");
        },
        fail: function(res) {
          console.log(res.errMsg, "点击了取消");
        }
      });
    };
    const setNavigationBarTitle = () => {
      common_vendor.index.setNavigationBarTitle({
        title: "新的标题",
        success: (res) => {
          console.log(res, "成功的回调");
        },
        fail: (error) => {
          console.log(error, "失败的回调");
        },
        complete: (ret) => {
          console.log(ret, "无论成功失败都会回调");
        }
      });
    };
    const setNavigationBarColor = () => {
      common_vendor.index.setNavigationBarColor({
        title: "新的标题",
        frontColor: "#ffffff",
        //字体颜色
        backgroundColor: "#ff0000",
        //背景色
        animation: {
          duration: 400,
          timingFunc: "easeIn"
        },
        //动画
        success: (res) => {
          console.log(res, "成功的回调");
        },
        fail: (error) => {
          console.log(error, "失败的回调");
        },
        complete: (ret) => {
          console.log(ret, "无论成功失败都会回调");
        }
      });
    };
    const showNavigationBarLoading = () => {
      common_vendor.index.showNavigationBarLoading({
        success: (res) => {
          console.log(res, "成功的回调"), setTimeout(() => {
            common_vendor.index.hideNavigationBarLoading();
          }, 2e3);
        },
        fail: (error) => {
          console.log(error, "失败的回调");
        },
        complete: (ret) => {
          console.log(ret, "无论成功失败都会回调");
        }
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(100, (item, index, i0) => {
          return {
            a: common_vendor.t(item)
          };
        }),
        b: common_vendor.f(100, (item, index, i0) => {
          return {
            a: common_vendor.t(item)
          };
        }),
        c: common_assets._imports_0,
        d: common_assets._imports_1,
        e: common_assets._imports_2,
        f: common_assets._imports_3,
        g: common_assets._imports_0,
        h: common_vendor.unref(picUrl),
        i: common_vendor.unref(nameObj).name,
        j: common_vendor.o(($event) => common_vendor.unref(nameObj).name = $event.detail.value),
        k: common_vendor.unref(nameOne),
        l: common_vendor.o(($event) => common_vendor.isRef(nameOne) ? nameOne.value = $event.detail.value : null),
        m: common_vendor.unref(nameTwo),
        n: common_vendor.o(($event) => common_vendor.isRef(nameTwo) ? nameTwo.value = $event.detail.value : null),
        o: common_vendor.o(sendTitle),
        p: common_vendor.p({
          title: "组件1"
        }),
        q: common_vendor.p({
          title: "组件2"
        }),
        r: common_vendor.p({
          title
        }),
        s: common_vendor.o(doChildF),
        t: common_vendor.sr(myBarRef, "a4df27d0-4", {
          "k": "myBarRef"
        }),
        v: common_vendor.t(common_vendor.unref(count)),
        w: common_vendor.unref(showBack)
      }, common_vendor.unref(showBack) ? {} : {}, {
        x: common_vendor.o(showToast),
        y: common_vendor.o(hideToast),
        z: common_vendor.o(showLoading),
        A: common_vendor.o(hideLoading),
        B: common_vendor.o(showModal),
        C: common_vendor.o(showActionSheet),
        D: common_vendor.o(setNavigationBarTitle),
        E: common_vendor.o(setNavigationBarColor),
        F: common_vendor.o(showNavigationBarLoading)
      });
    };
  }
};
_sfc_main.__runtimeHooks = 1;
wx.createPage(_sfc_main);
