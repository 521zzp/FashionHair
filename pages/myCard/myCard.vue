<template>
	<view class="container">
    <view class="my-card-list">
      <view class="card diamond-card">
      	<view class="card-content">
      		<text class="title">至尊钻石卡</text>
      		<text class="card-money">
      			<text class="iconfont icon-money money-icon"></text>
      			55635
      		</text>
      		<text class="iconfont icon-king vip-icon"></text>
      		<view class="card-equity">
      			<text>
      				<text class="iconfont icon-flower equity-icon"></text>
      				消费权益：全场6折
      			</text>
      		</view>
      	</view>
      	<view class="bg-circle"></view>
      </view>
    </view>
    <navigator url="/pages/cardShop/cardShop" class="link">
    	<button type="primary">购买会员卡</button>
    </navigator>
	</view>
</template>

<script>
	export default {
		
	}
</script>

<style>
  .link{
    width: 650px;
    margin: 0 auto;
    box-sizing: border-box;
  }
  .container{
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
  .my-card-list{
    width: 100%;
  }
  .vip-icon{
  	display: block;
  	width: 190px;
  	height: 190px;
  	color: goldenrod;
  	line-height: 190px;
  	margin: 0 auto;
  	text-align: center;
  	font-size: 150px;
  	background-color: rgba(255, 255, 255, 0.6);
  	border-radius: 50%;
  }
  .equity-icon{
  	font-size: 32px;
  }
  .card-equity{
  	width: 100%;
  	font-size: 32px;
  	margin-top: 20px;
  	justify-content: space-between;
  	align-items: center;
  	vertical-align: middle;
  }
  .card-shop-container{
  	flex-direction: column;
  	width: 100%;
  }
  .card{
  	display: block;
  	width: 650px;
  	height: 400px;
  	margin: 30px auto;
  	border-radius: 20px;
  	background: linear-gradient(135deg, #ffffff -30%, gold 100%);
  	box-shadow: 0 5px 20px 0px #595959;
  	padding: 30px 50px;
  	overflow: hidden;
  	position: relative;
  }
  .bg-circle{
  	float: right;
  	display: block;
  	width: 1000px;
  	height: 1000px;
  	background: radial-gradient(30% 30%, #ffffff, gold);
  	border-radius: 50%;
  	z-index: 10;
  	margin-top: -400px;
  	margin-right: -580px;
  }
  .card-content{
  	justify-content: space-between;
  	flex-wrap: wrap;
  	width: 100%;
  	height: 100%;
  }
  .title{
  	font-size: 60px;
  }
  .money-icon{
  	font-size: 48px;
  }
  .card-money{
  	vertical-align: baseline;
  	display: inline-block;
  	float: right;
  }
</style>
