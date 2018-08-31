<template>
	<scroll-view scroll-y="true" class="container">
    <image class="img" src="../../static/home-swiper/2.jpg" mode="widthFix"></image>
    <view class="about-us">
    	<text class="section">
        关于我们关于我们关于我们关于我们关于我们关于
        我们关于我们关于我们关于我们关于我们
      </text>
      <text class="section">
      	关于我们关于我们关于我们关于我们关于我们关于
      	我们关于我们关于我们关于我们关于我们
      </text>
      <text class="section">
      	关于我们关于我们关于我们关于我们关于我们关于
      	我们关于我们关于我们关于我们关于我们
      </text>
    </view>
    
	</scroll-view>
</template>

<script>
	export default {
		
	}
</script>

<style>
  .container{
    flex-direction: column;
    width: 750px;
  }
  .img{
    width: 100%;
  }
  .about-us{
    display: block;
    width: 710px;
    background-color: #FFFFFF;
    margin: 20px auto;
    padding: 20px 10px;
    border-radius: 10px;
    min-height: 600px;
  }
  .section{
    width: 100%;
    margin-bottom: 20px;
    text-indent: 2em;
    color: #595959;
    font-size: 32px;
    display: block;
    line-height: 1.2;
  }
</style>
