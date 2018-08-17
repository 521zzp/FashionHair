<template>
	<view class="user-info">
    <view class="face">
      <!-- #ifdef MP-WEIXIN -->
        <open-data class="face-img" type="userAvatarUrl"></open-data>
      <!-- #endif -->
      <!-- #ifdef APP-PLUS -->
        <image class="face-img" src="../../static/tabbar/user.png" mode="widthFix"></image>
      <!-- #endif -->
      <view class="right-line"></view>
    </view>
    <view class="info">
      <!-- #ifdef MP-WEIXIN -->
        <open-data class="nick-name" type="userNickName"></open-data>
      <!-- #endif -->
      <!-- #ifdef APP-PLUS -->
        <text v-if="logined" class="nick-name">山无陵</text>
      <!-- #endif -->
      <view v-if="logined" class="logined-info">
        <text>我的会员等级：1级</text>
        <text>我的资产： 10000元</text>
      </view>
      <text v-else>点击登录</text>
    </view>
	</view>
</template>

<script>
	export default {
		computed: {
      logined () {
        return false
      },
      userFaceImg () {
        
        return undefined
      }
    },
    methods:{
      login () {
        uni.getProvider({
        	service: 'oauth',
          success: function (res, err) {
          	if (~res.provider.indexOf('weixin')) {
          		uni.login({
          			provider: 'weixin',
                success:function(login_res ,xxerr){
                	console.log('>>>>>>>>>>>')
                  console.log(login_res);
                  console.log(',xxerr', xxerr)
                  // 微信登录
                  uni.getUserInfo({
                  	provider: 'weixin',
                    success:function(info_res){
                      console.log('info_res', info_res)
                    	console.log('nicaName', info_res.userInfo.nickName)
                      console.log('openid', info_res.userInfo.openid)
                      console.log('avatarUrl', info_res.userInfo.avatarUrl)
                    },
                    fail:function(err_msg){
                      console.log('err_msg', err_msg)
                    }
                  })
                }
          		})
          	}
            
          },
        })
      }
    },
	}
</script>

<style>
  .nick-name{
  }
  .logined-info{
    flex-direction: column;
    font-size: 26px;
    margin-top: 20px;
    line-height: 1.5;
  }
  .info{
    padding: 30px 20px 0px 20px;
    flex-direction: column;
    font-size: 32px;
   }
  .user-info{
    width: 100%;
    height: 200px;
    background-color: #FFEC8B;
  }
  .face{
    width: 200px;
    display: inline-block;
    text-align: center;
    position: relative;
  }
  .right-line{
    position: absolute;
    height: 140px;
    right: 0;
    top: 30px;
    border-right: 1px solid #CDCDCD;
  }
  .face-img{
    width: 140px;
    height: 140px;
    display: inline-block;
    overflow: hidden;
    border-radius: 50%;
    margin-top: 30px;
  }
  .info{
    width: 550px;
  }
</style>
