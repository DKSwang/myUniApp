<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area" @click="changeTitle">
			<text class="title" >{{title}}</text>
		</view>
		<view >
			<navigator url="/pages/about/about" >跳转到关于页面</navigator>
		</view>
		<view class="child">
			<demoOneVue ref="childDemo" @click="showChild"/>
		</view>
		<view >
			<navigator url="/pages/demoOne/demoOne?name=张三&age=18" >跳转到DemoOne页面</navigator>
		</view>
	</view>
</template>

<script lang='ts' setup>
	import demoOneVue from "../demoOne/demoOne.vue"
const title = ref('王')
const childDemo = ref(null)
const changeTitle= () =>{
	title.value = '魏'
}
const showChild = () =>{
	childDemo.value.addCount()
	console.log(childDemo.value.count,"childDemochildDemo")
}
uni.setNavigationBarTitle({
	title: '首页'
});
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
