<template>
  <view class="content">
    <text class="title">{{title}}</text>
    inner
        <button type="default" @tap="toAccount">跳转到用户中心</button>
  </view>
</template>

<script>
  export default {
    data: {
      title: 'Hello developer'
    },
    methods:{
      toAccount () {
      	uni.switchTab({
      		url: '/pages/userCenter/userCenter',
      	})
      }
    },
  }
</script>

<style>     
  .content {
    flex: 1;
    justify-content: center;
    align-items: center;
  }

  .title {
    font-size: 36px;
    color: #8f8f94;
  }
</style>
