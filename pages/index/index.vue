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
		
		<view class="line">scroll-view</view>
		
		<scroll-view scroll-y="true" class="scroll_part">
			<view  v-for="(item,index) in 100">
				{{item}}
			</view>
		</scroll-view>
		
		<scroll-view scroll-x="true" class="scroll_part">
			<view class="scroll_inner" v-for="(item,index) in 100">
				{{item}}
			</view>
		</scroll-view>
	</view>
</template>

<script setup>
	const title = "你好呀"
	
</script>

<style lang="scss"> 
.layout{
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
	.line{
		width: 100%;
		height:2px;
		background:green;
		margin:15px 2px;
		text-align:center;
		color:red;
		font-weight:600;
	}
	.scroll_part{
		margin:0 auto;
		width:90%;
		height:300px;
		border:1px solid #ccc;
		white-space: nowrap;
		.scroll_inner{
			width:100px;
			height:20px;
			background:green;
			display:inline-block;
			margin:5px;
		}
	}
}
	
</style>
