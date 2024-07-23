<template>
	<view class="box" hover-class="hover_box">
		我是about页面
	</view>
	<view class="box" hover-class="hover_box">
		<swiper circular :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item>
				<image src="../../static/logo.png" mode="aspectFill"></image>
			</swiper-item>
			<swiper-item>
			  <image src="../../static/p1.webp" mode="aspectFill"></image>
			</swiper-item>
			<swiper-item>
			  <image src="../../static/p2.png" mode="aspectFill"></image>
			</swiper-item>
			<swiper-item>
			  <image src="../../static/p3.jpeg" mode="aspectFill"></image>
			</swiper-item>
		</swiper>
	</view>
	<view class="">
		______
	</view>
	<view class="">
		
	<image src="../../static/logo.png" mode="aspectFill"></image>
	<image src="../../static/p1.webp" mode="aspectFill"></image>
	<image src="../../static/p3.jpeg" mode="aspectFill"></image>
	<image src="../../static/p2.png" mode="aspectFill"></image>
	</view>
	
	<view class="">
		<navigator open-type="reLaunch" url="/pages/index/index">跳转到首页</navigator>
		
	</view>
	<view class="">
		<button type="primary" @click="showMessage">页面主操作 Normal</button>
	</view>
	
	<view class="">
		<input type="text" placeholder="请输入"/>
	</view>
	<Button @click="showT">显示Toast</Button>
	<Button @click="hideT">隐藏Toast</Button>
</template>

<script setup>
import { compile } from 'vue';
const showT = () =>{
	
	// uni.showToast({
	// 	title:"操作成功操作成功操作成功操作成功",
	// 	// image:"../../static/p2.png"
	// 	// mask:true,
	// 	// complete:res => {
	// 	// 	console.log("909")
	// 	// }
	// 	icon:'loading',
	// 	duration:5000
	// })
	// uni.showModal({
	// 	title:"确认删除吗?",
	// 	// showCancel:false,
	// 	success:() =>{
	// 			console.log("确定")
	// 	},
	// 	fail:() =>{
	// 			console.log("取消")
	// 	}
	// })
	
	//弹出层
	const list = ['A', 'B', 'C']
	uni.showActionSheet({
		itemList:list ,
		title:'请选择',
		success: function (res) {
			console.log('选中了第' + (res.tapIndex + 1) + '个按钮',res,list[res.tapIndex]);
		},
		fail: function (res) {
			console.log(res.errMsg);
		}
	});
}

	
	
</script>

<style lang="scss" scoped>
	swiper{
		width:100vw;
		height: 200px;
		border:1px solid green;
		swiper-item{
			width: 100%;
			height: 100%;
			image{
				width:100%;
				height: 100%;
			}
		}
	}
	image{
		width: 150px;
		height: 150px;
	}
	
</style>
