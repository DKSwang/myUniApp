在该目录新建你常用的模板或将你常用的模板复制到该目录，新建文件时，模板列表会多出以该文件的文件名命名的模板。模板内容为该文件的内容。若不再需要该模板，请删除该文件。<template>
	<view class="">
		{{title}}
	</view>
</template>

<script lang='ts' setup>
const title = ref('我是不在tabbar的页面')
onLoad((e) => {
		//左上角的小房子会消失
		uni.hideHomeButton()
	})

</script>

<style lang="scss" scoped>
	
</style>
