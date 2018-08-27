<template>
  <scroll-view class="product-group" scroll-y="true" :style="{ height: leftScreenHeight + 'px' }">
    <view v-for="(item, index) in list" @click="changeGroup(index)"
      :key="index" class="product-group-item" :class="{ active: index === active}">
      <text class="item-name">{{ item.name }}</text>
    </view>
  </scroll-view>
</template>

<script>
	export default {
    props: ['list', 'active'],
		data () {
      return {
        product_group: [ 'RGB颜色值与十六进制颜色码转换工具', '染发', '烫发', '染发', 
        '烫发', '染发22', '烫发', '造型', '护肤', '美容', '美甲', '源于开发者，', '服务开发者。' ],
      }
    },
    methods: {
      adas () {
        console.log(1)
        console.log(uni.getStorageInfoSync())
      },
      changeGroup (index) {
        this.$emit('changeGroup', index)
      }
    },
    computed: {
      leftScreenHeight () {
        if (uni.canIUse('getSystemInfoSync.return.windowHeight')) {
          try {
            const res = uni.getSystemInfoSync();
            console.log('windowHeight: ' + res.windowHeight)
            console.log('windowWidth: ' + res.windowWidth)
            console.log('screenHeight: ' + res.screenHeight)
            console.log('screenWidth: ' + res.screenWidth)
            console.log('statusBarHeight: ' + res.statusBarHeight)
            // #ifdef MP-WEIXIN
              var height = ((750 * res.windowHeight) / res.windowWidth - 362) * res.windowWidth / 750
            // #endif
            // #ifdef APP-PLUS
              var height = ((750 * (res.windowHeight - 58)) / res.windowWidth - 362) * res.windowWidth / 750 
            // #endif
            
            console.log('height: ' + height)
            return height
          } catch (e) {
            return 438
          }
        } else {
          return 438
        }
      }
    },
	}
</script>


<style>
  .product-group{
    width: 200px;
    background-color: #F4F4F4;
    font-size: 30px;
    flex-direction: column;
    color: #ADADAD;
  }
  .product-group-item{
    padding: 20px 20px;
    line-height: 1.5;
    vertical-align: middle;
    transition: all .3s;
  }
  .product-group-item.active{
    /* background-color: #FCFCFC; */ 
    color: #FFFFFF;
    background-color: #FFC125;
  }
  .item-name{
    text-align: center;
    vertical-align: middle;
    line-height: 40px;
    display:-webkit-box;
    width: 100%;
    overflow:hidden; 
    text-overflow:ellipsis;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
  }
</style>
