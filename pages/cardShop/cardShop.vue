<template>
	<view class="card-shop-container">
    <scroll-view class="card-container" scroll-y="true" :style="{ height: contentHeight + 'px' }">
      <view class="card" v-for="(item,index) in cards" :class="item.card_type" :key="index">
      	<view class="card-content">
      		<text class="title">{{ item.name }}</text>
      		<text class="card-money">
      			<text class="iconfont icon-money money-icon"></text>
      			{{ item.price }}
      		</text>
      		<text class="iconfont icon-king vip-icon"></text>
      		<view class="card-equity">
      			<text>
              <text class="iconfont icon-flower equity-icon"></text>
              消费权益：{{ item.equity }}
            </text>
            <text class="buy-btn" @click="buyVipCard(item.name, item.price, item.id)">购买</text>
      		</view>
      	</view>
      	<view class="bg-circle"></view>
      </view>
      
      <!--<view class="card silver-card">
      	<view class="card-content">
      		<text class="title">魅力白金卡</text>
      		<text class="card-money">
      			<text class="iconfont icon-money money-icon"></text>
      			5000
      		</text>
      		<text class="iconfont icon-king vip-icon"></text>
      		 
          <view class="card-equity">
          	<text>
          		<text class="iconfont icon-flower equity-icon"></text>
          		消费权益：全场8折
          	</text>
          	<text class="buy-btn" @click="buyVipCard('魅力白金卡', 5000, 'a')">购买</text>
          </view>
      	</view>
      	<view class="bg-circle"></view>
      </view>
      
      <view class="card">
        <view class="card-content">
          <text class="title">荣耀黄金卡</text>
          <text class="card-money">
          	<text class="iconfont icon-money money-icon"></text>
          	1000
          </text>
          <text class="iconfont icon-king vip-icon"></text>
          <view class="card-equity">
            <text>
              <text class="iconfont icon-flower equity-icon"></text>
              消费权益：全场9折
            </text>
            <text class="buy-btn" @click="buyVipCard('荣耀黄金卡', 1000, 'b')">购买</text>
          </view>
        </view>
        <view class="bg-circle"></view>
      </view> -->
    </scroll-view>
	</view>
</template>

<script>
	export default {
    computed: {
      contentHeight () {
        const res = uni.getSystemInfoSync();
        const height = ((750 * res.screenHeight) / res.screenWidth - 150) * res.screenWidth / 750
        console.log('height: ')
        console.log(height)
        return height
      },
      cards () {
        return this.$store.state.card.card_shop
      },
    },
    methods: {
      buyVipCard (name, money, id) {
        console.log('buy card')
        console.log(id)
        this.$store.commit('updatePaymentInfo', {
        	order_type: 'card',
        	pay_for: name,
        	cost: money,
        	product_id: '',
        	card_id: id
        })
        uni.navigateTo({
        		url: '/pages/payment/payment'
        });
      },
      cardType (card_type) {
        console.log('card_type')
        console.log(card_type)
        return card_type
        /* if (card_type === 'diamond') {
          return 'diamond-card'
        } else if (card_type === 'silver') {
          return 'silver-card'
        } else {
          return ''
        } */
      	/* return {
      		'diamond-card': true,
      		'silver-card': false
      	} */
      }
    },
	}
</script>

<style>
  .silver-card {
    background: linear-gradient(135deg, #ffffff -30%, #c0c0c0 100%) !important;
  }
  .silver-card .bg-circle {
    background: radial-gradient(30% 30%, #ffffff, #c0c0c0) !important;
  }
  .diamond-card {
    background: linear-gradient(135deg, #ffffff -30%, #1E90FF 100%) !important;
  }
  .diamond-card .bg-circle {
  	background: radial-gradient(30% 30%, #ffffff, #1E90FF) !important;
  }
  .buy-btn{
    border: 1px dashed #FF7F24;
    color: #FF7F24;
    border-radius: 10px;
    padding: 5px 10px;
    display: inline-block;
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
  .card-container{
    flex-direction: column;
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
    /* position: absolute; */
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
