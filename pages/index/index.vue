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
		<view class="line">组件的使用</view> 
		<view class="">
			<my-head title="组件1" @sendTitle="sendTitle"></my-head>
			<my-head title="组件2"></my-head>
			<my-head :title="title"></my-head>
		</view>
		<view class="line">生命周期</view> 
	</view>
</template>

<script setup>
import { ref,watch } from 'vue';
	const title = "你好呀"
	
	//Demo
	
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
	
	//监听
	
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
   //参数传递
   const sendTitle = (data) =>{
	   console.log(data,"88")
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
	}
</style>