<template>
	<view class="layout">
		<!-- 
		电脑和手机在同一个局域网(热点也可以)可以在手机浏览器输入Network的网址进行查看效果
		16:26:14.027   - Local:   http://localhost:5173/
		16:26:14.027   * Network: http://172.20.10.4:5173/
		16:26:14.027   - Network: http://172.0.1.108:5173/
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
					<image src="http://gips0.baidu.com/it/u=1690853528,2506870245&fm=3028&app=3028&f=JPEG&fmt=auto?w=1024&h=1024" mode="aspectFill"></image>
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
				<image src="http://gips0.baidu.com/it/u=1690853528,2506870245&fm=3028&app=3028&f=JPEG&fmt=auto?w=1024&h=1024" mode="aspectFill"></image>
			</navigator>
		</view>
		<view class="line">button</view>
		<view class="button_part">
			<button size="default" type="warn" disabled hover-class="is-hover">按钮</button>
		</view>
		<view class="line">input</view>
		<view class="button_part">
			<input type="digit" >显示不同的键盘</input>
			<input type="text" confirm-type="search">键盘显示搜索</input>
			<input type="text" confirm-type="go">键盘显示前往</input>
		</view>
		<view class="line">轮播Demo</view>
		<view class="">
			<image :src="picUrl" mode=""></image>
		</view>
		<view class="line">vue3监听复习-监听</view> 
		<!-- <input type="text"  v-model="name"></input> -->
		<input type="text"  v-model="nameObj.name"></input>
		<!-- 监听多个 -->
		<input type="text"  v-model="nameOne"></input>
		<input type="text"  v-model="nameTwo"></input>
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
			<button size="default" type="success" @click="doChildF" >执行子组件方法</button>
		 </my-bar>
		  <view class="line">页面生命周期-onLoad,onReady,onShow,onHide</view>
		  <view  ref="pageLifeRef">
			  <navigator url="/pages/demo1/demo1?name=张三&age=90" >跳转到demo1</navigator>
			  <view class="">{{count}}</view>
			   <view class="backTop" v-if="showBack">回到顶部</view>
		  </view>
	</view>
</template>

<script setup>
import { onMounted, ref,watch } from 'vue';
	const title = "你好呀"
	
	/* Demo */ 
	
	let picUrl = ref('../../static/images/133054691.jpg')
	let arr = ref([
		"../../static/images/133054691.jpg",
		"../../static/images/IMG_202403273094_jpeg.jpeg",
		"../../static/images/4e5be21030a24594be1ab44d4f64e546.jpeg",
		"http://gips0.baidu.com/it/u=1690853528,2506870245&fm=3028&app=3028&f=JPEG&fmt=auto?w=1024&h=1024"
	])
	const changePic = () =>{
		let i = 0
		setInterval(() =>{
			i++;
			picUrl.value = arr.value[i%4]
		},1000)
	}
	changePic()
	
	/* 监听 */
	
	// const name = ref('张飒')
	// watch(name,(newValue,oldValue) =>{
	// 	console.log(newValue,oldValue)
	// })
	const nameObj = ref({
		name:"张三",
		age:18
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
   watch([nameOne,nameTwo],(newValue,oldValue) =>{
   	console.log(newValue,oldValue)
   },{
   	   deep:true,
   	   immediate:true
   })
   
   /* 参数传递 */
   
   const sendTitle = (data) =>{
	   console.log(data,"88")
   }
   
     /* 获取节点 */
	 
   const viewNode = ref(null)
   onMounted(() =>{
	   console.log(viewNode.value,"viewNode")
   })
   
    /* 执行子组件方法 */
   
   const myBarRef = ref(null)
   const childData  = ref('')
   const doChildF = () =>{
	  childData.value =   myBarRef.value.outFunction();
	  console.log(childData.value,"childData")
   }
   
    /* 页面周期函数 */
	
   import {onLoad,onReady,onShow,onHide,onUnload,onPageScroll} from "@dcloudio/uni-app"
   const count = ref(0)
   let timer =setInterval(() =>{
	   count.value++
   },60)
   onLoad((e) =>{
	   //这里的e是页面跳转地址栏的参数
	    console.log(e,"onLoad")
   })
   onShow(() =>{
   	   console.log("onShow-跳转到另一个页面返回只会再次支持onShow,不在执行onLoad");
	   //回到页面继续
	   timer =setInterval(() =>{
	   	   count.value++
	   },60)
   })
   const pageLifeRef = ref(null)
   onReady(() =>{
	   console.log(pageLifeRef.value,"onReady")
   })
   onHide(() =>{
   	   console.log("onHide函数-离开页面执行")
	   //离开页面停止
	   clearInterval(timer)
   })
   onUnload(() =>{
	   //<navigator url="/pages/demo1/demo1" open-type="reLaunch">跳转到demo1-关闭其他页面没有返回按钮</navigator> 会触发
	   //<navigator url="/pages/demo1/demo1" >跳转到demo1-关闭其他页面没有返回按钮</navigator> 不会触发
   	   console.log("onUnload函数-卸载页面执行")
   })
   const showBack = ref(false)
   onPageScroll((e) =>{
	 showBack.value =  e.scrollTop>200  
	 console.log(e,"onPageScroll");//{scrollTop: 1386}
   })
   
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
			image{
				width: 100%;
				height: 100%;
			}
		}

		swiper-item:nth-child(2n) {
			background: black;
		}
		.image_part{
			image{
				width: 100%;
			}
		}
		.is-hover {
			color: rgba(255, 255, 255, 0.6);
			background-color: #179b16;
			border-color: #179b16;
		  }
		  .backTop{
			  width: 100px;
			  height: 100px;
			  background-color: #179b16;
			  position: fixed;
			  right:20px;
			  bottom:30px;
		  }
	}
</style>