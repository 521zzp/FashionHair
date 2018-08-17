<template>
	<view class="title-container">
    <text class="back-cion iconfont icon-arrowLeft" @click="back"></text>
    <text class="title-text">{{ title }}</text>
  </view>
</template>

<script>
	export default {
		props: [ 'title' ],
    methods: {
      back () {
        uni.navigateBack({
        	delta: 1
        });
        console.log('back')
      }
    },
	}
</script>

<style>
  .title-container{
    margin-top: 50px;
    display: block;
    width: 100%;
    height: 100px;
    line-height: 100px;
    font-size: 42px;
    text-align: center;
    color: #fff;
    position: relative;
  }
  .back-cion{
    float: left;
    font-size: 54px;
    margin-left: 30px;
    z-index: 100;
  }
  .title-text{
    width: 750px;
    display: block;
    position: absolute;
    background-color: deepskyblue;
    z-index: -1;
  }
</style>
