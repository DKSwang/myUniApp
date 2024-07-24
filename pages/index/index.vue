<template>
	<view class="layout">
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
			<image src="../../static/images/133054691.jpg" mode="aspectFit"></image>
			<image src="../../static/images/IMG_202403273094_jpeg.jpeg" mode="aspectFill"></image>
			<image src="../../static/images/4e5be21030a24594be1ab44d4f64e546.jpeg" mode="widthFix"></image>
			<image src="http://gips0.baidu.com/it/u=1690853528,2506870245&fm=3028&app=3028&f=JPEG&fmt=auto?w=1024&h=1024" mode="widthFix"></image>
		</view>
	</view>
</template>

<script setup>
	const title = "你好呀"
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
	}
</style>