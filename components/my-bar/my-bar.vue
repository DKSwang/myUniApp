在该目录新建你常用的模板或将你常用的模板复制到该目录，新建文件时，模板列表会多出以该文件的文件名命名的模板。模板内容为该文件的内容。若不再需要该模板，请删除该文件。<template>
	<view class="">
		<slot></slot>
	</view>
</template>

<script lang='ts' setup>
  import {ref} from "vue"
  const outFunction = () =>{
	  console.log("子组件暴漏-父组件访问")
	  return "子组件数据"
  }
  defineExpose({outFunction})
</script>

<style lang="scss" scoped>
	
</style>