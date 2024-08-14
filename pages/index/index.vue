<template>
	<view class="layout">
		<!-- 
		电脑和手机在同一个局域网(热点也可以)可以在手机浏览器输入Network的网址进行查看效果
		16:26:14.027   - Local:   http://localhost:5173/
		16:26:14.027   * Network: http://172.20.10.4:5173/
		16:26:14.027   - Network: http://172.0.1.108:5173/
		设计图尺寸:750宽,这样量的尺寸直接写100rpx
		 -->
		<view class="line">view+text</view>
		<view class="partA" hover-class="hover_partA">
			AAA
			<view class="a-child" hover-class="hover_partaa" :hover-stop-propagation="true">
				AAA-aaa
			</view>
		</view>
		<view class="partB">
			BB
			<text selectable space="emsp">我是可以被 拷贝的text</text>
		</view>

		<view class="line">scroll-view</view>

		<scroll-view scroll-y="true" class="scroll_part">
			<view v-for="(item,index) in 100">
				{{item}}
			</view>
		</scroll-view>

		<scroll-view scroll-x="true" class="scroll_part">
			<view class="scroll_inner" v-for="(item,index) in 100">
				{{item}}
			</view>
		</scroll-view>
		<view class="line">swiper</view>
		<swiper indicator-active-color="#4cd964" class="swiper" circular :indicator-dots="true" :autoplay="true"
			interval="2000" duration="500">
			<swiper-item>
				<image src="../../static/images/1000.webp" mode="aspectFill"></image>
			</swiper-item>
			<swiper-item>
				<image src="../../static/images/133054691.jpg" mode="aspectFill"></image>
			</swiper-item>
			<swiper-item>
				<image src="../../static/images/IMG_202403273094_jpeg.jpeg" mode="aspectFill"></image>
			</swiper-item>
			<swiper-item>
				<image src="../../static/images/4e5be21030a24594be1ab44d4f64e546.jpeg" mode="aspectFill"></image>
			</swiper-item>
			<swiper-item>
				<image
					src="http://gips0.baidu.com/it/u=1690853528,2506870245&fm=3028&app=3028&f=JPEG&fmt=auto?w=1024&h=1024"
					mode="aspectFill"></image>
			</swiper-item>
		</swiper>
		<view class="line">image</view>
		<view class="image_part">
			<image src="../../static/images/1000.webp" mode="scaleToFill"></image>
			<!-- <image src="../../static/images/133054691.jpg" mode="aspectFit"></image>
			<image src="../../static/images/IMG_202403273094_jpeg.jpeg" mode="aspectFill"></image>
			<image src="../../static/images/4e5be21030a24594be1ab44d4f64e546.jpeg" mode="widthFix"></image>
			<image src="http://gips0.baidu.com/it/u=1690853528,2506870245&fm=3028&app=3028&f=JPEG&fmt=auto?w=1024&h=1024" mode="widthFix"></image> -->
		</view>

		<view class="line">navigator</view>
		<view class="navigator_part">
			<navigator url="/pages/demo1/demo1" open-type="reLaunch">跳转到demo1-关闭其他页面没有返回按钮</navigator>
			<navigator url="/pages/demo1/demo1">
				<image
					src="http://gips0.baidu.com/it/u=1690853528,2506870245&fm=3028&app=3028&f=JPEG&fmt=auto?w=1024&h=1024"
					mode="aspectFill"></image>
			</navigator>
		</view>
		<view class="line">button</view>
		<view class="button_part">
			<button size="default" type="warn" disabled hover-class="is-hover">按钮</button>
		</view>
		<view class="line">input</view>
		<view class="button_part">
			<input type="digit">显示不同的键盘</input>
			<input type="text" confirm-type="search">键盘显示搜索</input>
			<input type="text" confirm-type="go">键盘显示前往</input>
		</view>
		<view class="line">轮播Demo</view>
		<view class="">
			<image :src="picUrl" mode=""></image>
		</view>
		<view class="line">vue3监听复习-监听</view>
		<!-- <input type="text"  v-model="name"></input> -->
		<input type="text" v-model="nameObj.name"></input>
		<!-- 监听多个 -->
		<input type="text" v-model="nameOne"></input>
		<input type="text" v-model="nameTwo"></input>
		<view class="line">组件的使用-参数的传递</view>
		<view class="">
			<my-head title="组件1" @sendTitle="sendTitle">
				组件1的查抄
			</my-head>
			<my-head title="组件2"></my-head>
			<my-head :title="title"></my-head>
		</view>
		<view class="line">组件的使用-插槽</view>
		<my-bar>
			<view style="color:green">
				我的底部BAR
			</view>
		</my-bar>
		<view class="line">生命周期-vue3</view>
		<!-- 
		setup-onBeforeMount-onMounted-onBeforeUpdate-onUpdate-onBeforeUnmount-setup-onBeforeMount-onMounted-onBeforeUpdate-onUpdate-onUnmounted
		 -->
		<view class="line">获取节点</view>
		<view class="getNode" ref="viewNode">
			获取节点
		</view>
		<view class="line">子组件暴漏方法-父组件可以访问</view>
		<my-bar ref="myBarRef">
			<view style="color:green">
				子组件暴漏方法-父组件可以访问
			</view>
			<button size="default" type="success" @click="doChildF">执行子组件方法</button>
		</my-bar>
		<view class="line">页面生命周期-onLoad,onReady,onShow,onHide</view>
		<view ref="pageLifeRef">
			<navigator url="/pages/demo1/demo1?name=张三&age=90">跳转到demo1</navigator>
			<view class="">{{count}}</view>
			<view class="backTop" v-if="showBack">回到顶部</view>
		</view>
		<view class="line">使用rpx-设计图750</view>
		<view class="line">样式导入-APP页面</view>
		<view style="color:green">
			1.uni.scss文件的样式变量全局直接使用
			2.自己定义了全局样式需要重新启动
			3.全局样式在app.vue和uni.scss导入都生效
		</view>
		<view class="line">全局文件-pages.json-globalStyle</view>
		<view style="color:green">
			"navigationBarTextStyle": "black", //顶部文字颜色-white/black
			"navigationBarTitleText": "uni-app99",//顶部页面路由名称
			"navigationBarBackgroundColor": "#663399",//顶部区域背景颜色
			"backgroundColor": "#F8F8F8",
			"enablePullDownRefresh":true //全局下拉刷新
		</view>
		<view class="line">全局文件-pages.pages</view>
		<view style="color:green">
			1.globalStyle有的属性pages.pages里的style都有会覆盖globalStyle的样式
			2.path-路径
			3.style-样式
		</view>
		<view class="line">全局文件-pages.tabBar</view>
		<view style="color:green">
			"color": "#7A7E83", //未选中默认色
			"selectedColor": "#3cc51f",//选中默认色
			"borderStyle": "black",
			"backgroundColor": "#ffffff",//bar\的默认颜色
			// "position": "top",//bar的位置,默认bottom,top只有小程序支持
			"list": [{
			"pagePath": "pages/index/index",
			// "iconPath": "static/images/IMG_202403273094_jpeg.jpeg",
			// "selectedIconPath": "static/images/4e5be21030a24594be1ab44d4f64e546.jpeg",
			"text": "首页"
			}, {
			"pagePath": "pages/demo1/demo1",
			// "iconPath": "static/images/1000.webp",
			// "selectedIconPath": "static/images/4e5be21030a24594be1ab44d4f64e546.jpeg",
			"text": "DEMO1"
			},
			{
			"pagePath": "pages/user/user",
			// "iconPath": "static/images/5080-9ba3447c5793ef40d8d0006dc571a601.jpg",
			// "selectedIconPath": "static/images/4e5be21030a24594be1ab44d4f64e546.jpeg",
			"text": "用户"
			}]
		</view>
		<view class="line">manifest.json 应用配置</view>
		<view style="color:green">
			1.可以是界面操作,也可以切换成JSON文件
		</view>
		<view class="line">自动引入的配置</view>
		<view style="color:green">
			1.npm install unplugin-auto-import
			2.根目录下创建vite.config.js，并拷贝下面的代码
			3.代码如下
			import { defineConfig } from 'vite'
			import uni from '@dcloudio/vite-plugin-uni'
			import AutoImport from 'unplugin-auto-import/vite'

			export default defineConfig({
			plugins: [
			uni(),
			// 自动导入配置
			AutoImport({
			imports:[
			// 预设
			'vue',
			'uni-app'
			]
			})
			]
			})
			4.去除vue和uniapp模块导入，项目可以正常运行
		</view>
		<view class="line">进行文档API-界面 文档的讲解</view>
		<view style="color:green">
			<button @click="showToast"> 1.uni.showToast</button>
		</view>
		<view style="color:green">
			<button @click="hideToast"> 1.uni.hideToast</button>
		</view>
		<view style="color:green">
			<button @click="showLoading"> 2.uni.showLoading</button>
		</view>
		<view style="color:green">
			<button @click="hideLoading"> 2.uni.hideLoading-Loading</button>
		</view>
		<view style="color:green">
			<button @click="showModal"> 3.uni.showModal-弹窗</button>
		</view>
		<view style="color:green">
			<button @click="showActionSheet"> 4.uni.showActionSheet-选择</button>
		</view>
		<view style="color:green">
			<button @click="setNavigationBarTitle"> 5.uni.setNavigationBarTitle-设置导航标题</button>
		</view>
		<view style="color:green">
			<button @click="setNavigationBarColor"> 6.uni.setNavigationBarColor-动态修改导航</button>
		</view>
		<view style="color:green">
			<button @click="showNavigationBarLoading"> 7.uni.showNavigationBarLoading-在当前页面显示导航条加载动画</button>
		</view>
		<view style="color:green">
			<button > 7.uni.hideHomeButton--隐藏返回首页按钮 -小程序的编译</button>
		</view>
	</view>
</template>

<script setup>
	const title = "你好呀"

	/* Demo */

	let picUrl = ref('../../static/images/133054691.jpg')
	let arr = ref([
		"../../static/images/133054691.jpg",
		"../../static/images/IMG_202403273094_jpeg.jpeg",
		"../../static/images/4e5be21030a24594be1ab44d4f64e546.jpeg",
		"http://gips0.baidu.com/it/u=1690853528,2506870245&fm=3028&app=3028&f=JPEG&fmt=auto?w=1024&h=1024"
	])
	const changePic = () => {
		let i = 0
		setInterval(() => {
			i++;
			picUrl.value = arr.value[i % 4]
		}, 1000)
	}
	changePic()

	/* 监听 */

	// const name = ref('张飒')
	// watch(name,(newValue,oldValue) =>{
	// 	console.log(newValue,oldValue)
	// })
	const nameObj = ref({
		name: "张三",
		age: 18
	})
	//写法一:
	/* 
	watch(() =>nameObj.value.name,(newValue,oldValue) =>{
		console.log(newValue,oldValue)
	})
	
   //深度监听
   /* 
   watch(() =>nameObj,(newValue,oldValue) =>{
   	console.log(newValue,oldValue)
   },{
	   deep:true,
	   immediate:true
   })
   */
	//监听多个变量
	const nameOne = ref("李四")
	const nameTwo = ref("王五")
	watch([nameOne, nameTwo], (newValue, oldValue) => {
		console.log(newValue, oldValue)
	}, {
		deep: true,
		immediate: true
	})

	/* 参数传递 */

	const sendTitle = (data) => {
		console.log(data, "88")
	}

	/* 获取节点 */

	const viewNode = ref(null)
	onMounted(() => {
		console.log(viewNode.value, "viewNode")
	})

	/* 执行子组件方法 */

	const myBarRef = ref(null)
	const childData = ref('')
	const doChildF = () => {
		childData.value = myBarRef.value.outFunction();
		console.log(childData.value, "childData")
	}

	/* 页面周期函数 */

	import {
		onLoad,
		onReady,
		onShow,
		onHide,
		onUnload,
		onPageScroll
	} from "@dcloudio/uni-app"
	const count = ref(0)
	let timer = setInterval(() => {
		count.value++
	}, 60)
	onLoad((e) => {
		//这里的e是页面跳转地址栏的参数
		console.log(e, "onLoad")
	})
	onShow(() => {
		console.log("onShow-跳转到另一个页面返回只会再次支持onShow,不在执行onLoad");
		//回到页面继续
		timer = setInterval(() => {
			count.value++
		}, 60)
	})
	const pageLifeRef = ref(null)
	onReady(() => {
		console.log(pageLifeRef.value, "onReady")
	})
	onHide(() => {
		console.log("onHide函数-离开页面执行")
		//离开页面停止
		clearInterval(timer)
	})
	onUnload(() => {
		//<navigator url="/pages/demo1/demo1" open-type="reLaunch">跳转到demo1-关闭其他页面没有返回按钮</navigator> 会触发
		//<navigator url="/pages/demo1/demo1" >跳转到demo1-关闭其他页面没有返回按钮</navigator> 不会触发
		console.log("onUnload函数-卸载页面执行")
	})
	const showBack = ref(false)
	onPageScroll((e) => {
		showBack.value = e.scrollTop > 200
		console.log(e, "onPageScroll"); //{scrollTop: 1386}
	})
	//全局API文档-界面讲解-Toast
	const showToast = () => {
		uni.showToast({
			title: '1展示toast-显示文字太多使用none',
			// icon:'none', //可用loading/success/error/exception/none
			image: '../../static/images/4e5be21030a24594be1ab44d4f64e546.jpeg', //不使用icon换成图片
			// icon:"loading",
			// title:'加载中...',
			mask: false, //显示遮蔽层
			duration: 5000,
			success: res => {
				console.log(res, '成功的回调')
			},
			fail: error => {
				console.log(error, "失败的回调")
			},
			complete: ret => {
				console.log(ret, "无论成功失败都会回调")
			}
		});
	}
	const hideToast = () => {
		console.log("隐藏Toast")
		uni.hideToast();
	}
	//全局API文档-界面讲解-Loading
	const showLoading = () => {
		uni.showLoading({
			title: '加载中...',
			// icon:'none', //可用loading/success/error/exception/none
			icon: "loading",
			mask: false, //显示遮蔽层
			duration: 5000,
			success: res => {
				console.log(res, '成功的回调')
			},
			fail: error => {
				console.log(error, "失败的回调")
			},
			complete: ret => {
				console.log(ret, "无论成功失败都会回调")
			}
		});
	}
	const hideLoading = () => {
		console.log("隐藏Toast")
		uni.hideLoading();
	}
	//全局API文档-界面讲解-Modal
	const showModal = () => {
		uni.showModal({
			title: '提示',
			// content: '这是一个模态弹窗',
			editable: true,
			placeholderText: '请输入内容',
			success: function(res) {
				if (res.confirm) {
					console.log('用户点击确定');
					uni.showToast({
						title: '处理成功',
						duration: 2000,
					})
				} else if (res.cancel) {
					console.log('用户点击取消');
					uni.showToast({
						title: '处理失败',
						icon:"error",
						duration: 2000,
					})
				}
			}
		});
	}
	//全局API文档-界面讲解showActionSheet
	const showActionSheet = () => {
		uni.showActionSheet({
			title: '请选择',
			itemList: ['A', 'B', 'C'],
			success: function(res) {
				console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
			},
			fail: function(res) {
				console.log(res.errMsg, "点击了取消");
			}
		});
	}
	//全局API文档-界面讲解动态修改顶部标题 -setNavigationBarTitle
	const setNavigationBarTitle = () =>{
		uni.setNavigationBarTitle({
			title: '新的标题',
			success: res => {
				console.log(res, '成功的回调')
			},
			fail: error => {
				console.log(error, "失败的回调")
			},
			complete: ret => {
				console.log(ret, "无论成功失败都会回调")
			}
		});

	}
	//全局API文档-界面讲解动态设置页面导航条颜色 setNavigationBarColor
	const setNavigationBarColor = () =>{
		uni.setNavigationBarColor({
			title: '新的标题',
			frontColor: '#ffffff',//字体颜色
			backgroundColor: '#ff0000', //背景色
			animation: {
			        duration: 400,
			        timingFunc: 'easeIn'
			    },//动画
			success: res => {
				console.log(res, '成功的回调')
			},
			fail: error => {
				console.log(error, "失败的回调")
			},
			complete: ret => {
				console.log(ret, "无论成功失败都会回调")
			}
		});
	
	}
	//全局API文档-界面-在当前页面显示导航条加载动画- showNavigationBarLoading
	const showNavigationBarLoading = () =>{
		uni.showNavigationBarLoading({
			success: res => {
				console.log(res, '成功的回调'),
				setTimeout(() =>{
					uni.hideNavigationBarLoading() //关闭
				},2000)
			},
			fail: error => {
				console.log(error, "失败的回调")
			},
			complete: ret => {
				console.log(ret, "无论成功失败都会回调")
			}
		});
	
	}
	
	
</script>

<style lang="scss">
	.layout {
		.partA {
			width: 100px;
			height: 100px;
			background: #ccc;

			.a-child {
				width: 50px;
				height: 50px;
				background: red;
			}

			.hover_partaa {
				background: orange;
			}
		}

		.hover_partA {
			background: Green;
		}

		.partB {
			color: green;
		}

		.line {
			width: 100%;
			height: 2px;
			background: green;
			margin: 15px 2px;
			text-align: center;
			color: red;
			font-weight: 600;
		}

		.scroll_part {
			margin: 0 auto;
			width: 90%;
			height: 50px;
			border: 1px solid #ccc;
			white-space: nowrap;

			.scroll_inner {
				width: 100px;
				height: 20px;
				background: green;
				display: inline-block;
				margin: 5px;
			}
		}

		swiper {
			width: 100vw;
			height: 200rpx;
			border: 1px solid red;
			box-sizing: border-box;
		}

		swiper-item {
			display: block;
			height: 300rpx;
			line-height: 200rpx;
			text-align: center;

			image {
				width: 100%;
				height: 100%;
			}
		}

		swiper-item:nth-child(2n) {
			background: black;
		}

		.image_part {
			image {
				width: 100%;
			}
		}

		.is-hover {
			color: rgba(255, 255, 255, 0.6);
			background-color: #179b16;
			border-color: #179b16;
		}

		.backTop {
			width: 100px;
			height: 100px;
			background-color: #179b16;
			position: fixed;
			right: 20px;
			bottom: 30px;
		}
	}
</style>