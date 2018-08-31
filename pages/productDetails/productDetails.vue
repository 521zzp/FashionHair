<template>
	<view class="container">
    <view class="block-item">
      <text class="title">{{ product.name }}</text>
    </view>
    <view class="block-item">
    	<image :src="product.img" mode="widthFix" class="product-img"></image>
    </view>
    <view class="block-item price">
      <text class="now-price">￥ 6.00</text>
      <text class="original-price"> ￥ 10.0</text>
    </view>
    <view class="block-item">
    	<text class="discription">{{ product.description }}</text>
    </view>
     <text class="buy" @click="toPay">即刻下单</text>
	</view>
</template>

<script>
	export default {
		computed: {
      product () {
        return this.$store.state.home.product_details
      },
    },
    methods: {
      toPay () {
      	this.$store.commit('updatePaymentInfo', {
      		order_type: 'product',
      		pay_for: this.product.name,
      		cost: this.product.now_price,
      		product_id: this.product._id,
      		card_id: ''
      	})
      	uni.navigateTo({
      			url: '/pages/payment/payment'
      	});
      }
    },
	}
</script>

<style>
  .discription{
    display: block;
    padding: 0 30px;
    font-size: 32px;
    line-height: 1.5;
    margin-top: 20px;
    color: #595959;
    text-indent: 2em;
  }
  .price{
    line-height: 60px;
    height: 60px;
    padding: 0 30px;
  }
  .now-price{
    color: red;
    font-size: 58px;
  }
  .original-price{
  	color: #ADADAD;
  	vertical-align: baseline;
  	margin-left: 20px;
  	text-decoration: line-through;
  }
  .product-img{
    display: block;
    width: 300px;
    height: 300px;
    margin: 20px auto;
  }
  .title{
    display: block;
    margin-top: 20px;
    padding: 0 30px;
    font-size: 64px;
    color: #595959;
  }
  .container{
    flex-direction: column;
    width: 750px;
    min-height: 100%;
    background-color: white;
  }
  .block-item{
    width: 100%;
  }
  .buy{
    position: fixed;
    bottom: 0;
    width: 750px;
    height: 100px;
    text-align: center;
    font-size: 48px;
    line-height: 100px;
    background-color: #FFC125;
    color: #FFFFFF;
  }
</style>
