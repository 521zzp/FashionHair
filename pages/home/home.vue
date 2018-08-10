<template>
	<view class="home-container">
    <view class="swiper-container">
      <swiper class="home-swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
      		<swiper-item class="swiper-item" v-for="(img,indx) in img_list" :key="index">
      				<image class="swiper-img" :src="img" mode="widthFix"></image>
      		</swiper-item>
      </swiper>
      <view class="location-btn">
        <picker :value="store_index" :range="store_list" @change="selectStore">
          <view>{{ store_list[store_index] }}
          <text class="iconfont icon-location location-icon"></text>
          </view>
        </picker>
      </view>
    </view>
    <navigator url="/pages/index/index" hover-class="navigator-hover">
    		<button type="default">去index</button>
    </navigator>
	</view>
</template>

<script>
	export default {
    data () {
      return {
        indicatorDots: false,
        autoplay: true,
        interval: 2000,
        duration: 1000,
        img_list: [
          '../../static/home-swiper/1.jpg',
          '../../static/home-swiper/2.jpg',
          '../../static/home-swiper/3.jpg'
        ],
        store_index: 0,
        store_list: [ '嘉定白银路店', '徐汇店', '松江店', '宝山店', '浦东店', '虹口店' ]
      }
    },
    methods: {
      selectStore (e) {
        this.store_index = e.detail.value
      }
    },
	}
</script>

<style>
  .home-container{
    flex-direction: column;
  }
  .swiper-container{
    display: block;
    position: relative;
  }
  .location-btn{
    position: absolute;
    color: #efefef;
    font-size: 30px;
    top: 50px;
    left: 20px;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 0 30px;
    height: 50px;
    line-height: 50px;
    border-radius: 50px;
  }
  .location-icon{
    font-size: 32px;
    margin-left: 10px;
  }
  .home-swiper{
    width: 750px;
    height: 362px;
    overflow: auto;
  }
  .swiper-item{
    overflow: hidden;
  }
  .swiper-img{
    display: block;
  }
  .swiper-item image{
    width: 100%;
  }
</style>
