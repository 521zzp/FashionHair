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
    <view class="product-content">
    	<ProductGroup />
      <ProductItem />
    </view>
	</view>
</template>

<script>
  import ProductGroup from '../../components/home/ProductGroup.vue'
  import ProductItem from '../../components/home/ProductItem.vue'
	export default {
    data () {
      return {
        indicatorDots: false,
        autoplay: true,
        interval: 2000,
        duration: 1000,
        store_index: 0,
        store_list: [ '嘉定白银路店', '徐汇店', '松江店', '宝山店', '浦东店', '虹口店' ]
      }
    },
    computed:{
      img_list () {
        return this.$store.state.home.banner_img
      }
    },
    methods: {
      selectStore (e) {
        this.store_index = e.detail.value
      }
    },
    components:{
      ProductGroup,
      ProductItem
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
    height: 362px;
  }
  .location-btn{
    position: absolute;
    color: #efefef;
    font-size: 30px;
    top: 20px;
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
