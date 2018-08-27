<template>
	<view class="order-container">
    <view v-if="list.length > 0" class="order-item" v-for="(item, index) in list" :key="index">
      <view class="order-title">
        <text class="order-type">{{ item.title }}</text>
      </view>
      <view class="order-product detail-item">
        <text class="title">相关产品：</text>
        <text class="value">{{ item.product }}</text>
      </view>
      
      <view class="order-product detail-item">
      	<text class="title">时间：</text>
      	<text class="value">{{ item.time }}</text>
      </view>
      
      <view class="order-product detail-item">
      	<text class="title">支付方式：</text>
      	<text class="value">{{ item.pay_way }}</text>
      </view>
      
      <view class="order-product detail-item">
      	<text class="title">原价：</text>
      	<text class="value">￥{{ item.price }}</text>
      </view>
      
      <view class="order-product detail-item">
      	<text class="title">折扣：</text>
      	<text class="value">{{ item.discount }}</text>
      </view>
      
      <view class="order-product detail-item">
      	<text class="title">费用明细：</text>
      	<text class="value">￥{{ item.cost }}</text>
      </view>
    </view>
    <view v-if="list.length == 0" class="no-order">
      当前无任何记录
    </view>
	</view>
</template>

<script>
	export default {
		data () {
      return {
      }
    },
    computed: {
      list () {
        return this.$store.state.order.order_list
      }
    },
	}
</script>

<style>
  .order-container{
    flex-direction: column;
    width: 100%;
    padding: 20px 0;
  }
  .order-item{
    background-color: #FFFFFF;
    border-radius: 6px;
    width: 700px;
    margin: 0 auto;
    flex-direction: column;
    padding: 20px 0;
    font-size: 32px;
    color: #595959;
    margin: 10px auto;
  }
  .order-title{
    width: 100%;
    border-bottom: 1px solid #8F8F94;
    padding-bottom: 20px;
  }
  .order-type{
    width: 100%;
    font-size: 48px;
  }
  .order-type{
    width: 100%;
    padding: 0 20px;
  }
  .detail-item{
    width: 100%;
    padding: 0 20px;
    margin-top: 10px;
    line-height: 40px;
    vertical-align: middle;
    color: #595959;
  }
  .title{
    display: inline-block;
    width: 25%;
  }
  .value{
    display: inline-block;
    width: 75%;
  }
  .no-order{
    width: 100%;
    text-align: center;
    display: block;
    margin-top: 30%;
  }
</style>
