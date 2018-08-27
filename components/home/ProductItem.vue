<template>
	<scroll-view scroll-y="true" class="product-item-container" :scroll-with-animation="true"
      :scroll-top="scrollTop" :style="{ height: leftScreenHeight + 'px' }">
    <view class="product-item" v-for="(item, index) in list" :key="index">
      <view class="image-content">
        <image :src="item.img" mode="widthFix" class="product-img"></image>
      </view>
      <view class="discription">
        <text class="product-name">{{ item.name }}</text>
        <text class="product-discription">{{ item.discription }}</text>
        <view class="product-price">
          <text class="now-price">￥ {{ item.group.order }}</text>
          <text class="original-price">原价：￥{{ item.product_order }}</text>
          <text class="order" @click="toPay(item.name, item.now_price, item.id)">下单</text>
        </view>
      </view>
    </view>
	</scroll-view>
</template>

<script>
	export default {
    props: ['list', 'product_group', 'active'],
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
      },
      scrollTop () {
        console.log('this.props.product_group')
        console.log(this.product_group)
      	var count = 0
      	for (var i = 0; i < this.active; i++ ) {
      		count += this.product_group[i].children
      	}
        const res = uni.getSystemInfoSync();
      	return count * ( res.windowWidth / 750 * 200)
      }
    },
    methods: {
      toPay (name, money, id) {
        this.$store.commit('updatePaymentInfo', {
          order_type: 'product',
          pay_for: name,
          cost: money,
          product_id: id,
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
  .order{
    float: right;
    padding: 0 20px;
    background-color: #FFC125;
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
    margin-top: 10px;
    text-overflow: ellipsis;
  }
  .image-content{
   width: 120px;
   height: 120px;
  }
  .product-img{
    width: 120px;
    height: 120px;
  }
  .product-item{
    padding: 20px 20px;
    overflow: hidden;
    height: 200px;
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
