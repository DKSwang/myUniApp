在该目录新建你常用的模板或将你常用的模板复制到该目录，新建文件时，模板列表会多出以该文件的文件名命名的模板。模板内容为该文件的内容。若不再需要该模板，请删除该文件。<template>
	<view class="out">
		子组件-{{count}}-{{name}}
	</view>
	<scroll-view scroll-y="true" ref="scroll">
		<view class="scroll">
			滚动
		</view>
	</scroll-view>
	<navigator open-type="reLaunch" url="/pages/index/index">去首页</navigator>
	<view class="" v-if="showMe">
		你滚到位置了
	</view>
	<view class="" v-for="item in 50">
		{{item}}
	</view>
	
</template>

<script lang='ts' setup>
  import {ref} from "vue"
  import {onLoad,onReady,onShow,onHide,onUnload,onPageScroll}  from "@dcloudio/uni-app"
  const count = ref(100)
  const name = ref("李四")
  const scroll = ref(null)
  const showMe = ref(false)
  const addCount = () =>{
	  count.value++
  }
  let timer = setInterval(() =>{
	   count.value++
  },100)
  //生命周期函数
  onLoad((e) =>{
	  //可以接受父组件传来的参数
	  console.log("onLoad",)
	  name.value  = e.name
  })
  onShow(() =>{
	   console.log("onShow",)
	   // timer = setInterval(() =>{
	   // 	   count.value++
	   // },100)
  })
  onReady(()=>{
	   console.log("onReady1",)
  })
  onHide(() =>{
	   console.log("onHide",)
	   clearInterval(timer)
  })
  //页面卸载执行
  onUnload(( )=>{
	  console.log("onUnload",) 
  })
  
  //页面滚动
  onPageScroll((e) =>{
	   console.log("onPageScroll",e) 
	   e.scrollTop>60?showMe.value = true:showMe.value = false
  })
  uni.setNavigationBarTitle({
  	title: '我的'
  });

defineExpose({count,addCount})
</script>

<style lang="scss" scoped>
	
</style>
