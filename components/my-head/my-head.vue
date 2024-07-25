<template>
	<view class="head-title">
		{{title}}-{{myName}}
	</view>
</template>

<script setup>
	import {computed } from "vue"
	//写法一 接收参数
// defineProps(['title'])
//写法二-类型校验-接收参数
const props = defineProps({
	title:{
		type:[String,Number],
		required:true,
		default:'我是默认值'
	}
})
const myName = computed(() =>props.title+'&')
//提交参数
const emit = defineEmits(['sendTitle']);
console.log(props.title)
emit('sendTitle','子组件传来的数据')
</script>

<style lang="scss" scoped>
.head-title{
	color:red
}
</style>