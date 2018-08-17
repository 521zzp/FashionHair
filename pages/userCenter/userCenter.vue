<template>
	<view class="user-center">
    <UserBaseInfo/>
    <!-- 用户资产及记录 -->
    <view class="user-assets link-group">
    	<navigator url="/pages/myCard/myCard" class="link-item link-item-border">
        <text class="iconfont icon-coupon link-icon"></text>
        <text class="icon-text">卡券</text>
      </navigator>
      <navigator url="/pages/order/order" class="link-item">
        <text class="iconfont icon-history link-icon"></text>
        <text class="icon-text">订单</text>
      </navigator>
    </view>
    <!-- 公司信息介绍 -->
    <view class="company-info link-group">
      <navigator url="/pages/companyInfo/companyInfo" class="link-item link-item-border">
      	<text class="iconfont icon-explore link-icon"></text>
      	<text class="icon-text">关于XX</text>
      </navigator>
      <navigator url="/pages/aboutUs/aboutUs" class="link-item">
      	<text class="iconfont icon-emoji link-icon"></text>
      	<text class="icon-text">团队介绍</text>
      </navigator>
    </view>
    <!-- 员工二维码 -->
    <view class="company-info link-group">
    	<navigator url="/pages/home/home" class="link-item">
    		<text class="iconfont icon-codeQR link-icon"></text>
    		<text class="icon-text">接单</text>
    	</navigator>
    </view>
	</view>
</template>

<script>
  import UserBaseInfo from '@/components/userCenter/UserBaseInfo'
	export default {
    data () {
      return {
        list : [
          {
            value: 'xxx'
          }
        ]
      }
    },
		components: {
      UserBaseInfo,
    },
	}
</script>

<style>
  .user-center{
    flex-direction: column;
    width: 100%;
  }
  .link-item{
    display: block;
    width: 100%;
    height: 100px;
    line-height: 100px;
    font-size: 36px;
  }
  .link-item-border:after{
    content: '';
    display: block;
    width: 100%;
    border-bottom: 0.5px solid #CDCDCD;
    background-color: #000;
  }
  .link-group{
    flex-direction: column;
    background-color: #FFFFFF;
    margin-top: 20px;
    padding: 0 30px;
  }
  .link-icon{
    font-size: 48px;
    font-weight: bold;
    color: #EE9A00;
    vertical-align: middle;
    margin-left: 30px;
  }
  .icon-text{
    margin-left: 20px;
    vertical-align: middle;
  }
  .link-item:hover{
    background: none;
  }
</style>
