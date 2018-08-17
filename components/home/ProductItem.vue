<template>
	<scroll-view scroll-y="true" class="product-item-container"  :style="{ height: leftScreenHeight + 'px' }">
    <view class="product-item" v-for="(item, index) in temp_list" :key="index">
      <view class="image-content">
        <image src="../../static/item.jpg" mode="widthFix"></image>
      </view>
      <view class="discription">
        <text class="product-name">产品{{ item }}号</text>
        <text class="product-discription">日东月西兮徒相望，不得相随兮空断肠</text>
        <view class="product-price">
          <text class="now-price">￥ 37</text>
          <text class="original-price">原价：￥52</text>
          <text class="order">下单</text>
        </view>
      </view>
    </view>
	</scroll-view>
</template>

<script>
	export default {
		data () {
      return {
        temp_list: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        list: [
          {
            img: '',
            product_id: 'aasdasf',
            product_name: 'sgewaywer',
            original_price: 100,
            now_price: 10
          },
        ]
      }
    },
    computed: {
      leftScreenHeight () {
      	if (uni.canIUse('getSystemInfoSync.return.windowHeight')) {
      		try {
      			const res = uni.getSystemInfoSync();
            // #ifdef MP-WEIXIN
            	var height = ((750 * res.windowHeight) / res.windowWidth - 362) * res.windowWidth / 750
            // #endif
            // #ifdef APP-PLUS
            	var height = ((750 * (res.windowHeight - 58)) / res.windowWidth - 362) * res.windowWidth / 750
            // #endif
      			return height
      		} catch (e) {
      			return 420
      		}
      	} else {
      		return 420
      	}
      }
    },
	}
</script>

<style>
  .order{
    float: right;
    padding: 0 20px;
    background-color: #FFEC8B;
    border-radius: 24px;
    color: #fff;
  }
  .original-price{
    font-size: 20px;
    color: #ADADAD;
    vertical-align: baseline;
    margin-left: 10px;
    text-decoration: line-through;
  }
  .now-price{
    color: red;
  }
  .product-price{
    margin-top: 20px;
    line-height: 40px;
    display: block;
  }
  .product-name{
    font-size: 36px;
    font-weight: bold;
  }
  .product-discription{
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .image-content{
    width: 120px;
  }
  .product-item{
    padding: 30px 20px;
    overflow: hidden;
  }
  .product-item-container{
    width: 550px;
    flex-direction: column;
    font-size: 26px;
  }
  .discription{
    flex-direction: column;
    width: 360px;
    margin-left: 20px;
    display: block;
  }
</style>
