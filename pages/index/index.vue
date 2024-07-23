<template>
	<view class="layout">
		<view class="partA" hover-class="hover_partA">
			AAA
			<view class="a-child" hover-class="hover_partaa" :hover-stop-propagation="true">
				AAA-aaa
			</view>
		</view>
		<view class="partB">
			BB
			<text selectable space="emsp">我是可以被        拷贝的text</text>
		</view>
	</view>
</template>

<script setup>
	const title = "你好呀"
	
</script>

<style lang="scss"> 
.layout{
	border:1px solid red;
	.partA{
		width:100px;
		height:100px;
		background:#ccc;
		.a-child{
			width: 50px;
			height:50px;
			background:red;
		}
		.hover_partaa{
			background:orange;
		}
	}
	.hover_partA{
		background:Green;
	}
	
	.partB{
		color: green;
	}
}
	
</style>
