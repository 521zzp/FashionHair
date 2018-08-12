<template>
  <scroll-view class="product-group" scroll-y="true" :style="{ height: leftScreenHeight + 'px' }">
    <view v-for="(item, index) in product_group" :key="index" class="product-group-item" :class="{ active: index === 3}">
      <text class="item-name">{{ item }}</text>
    </view>
    
  </scroll-view>
</template>

<script>
	export default {
		data () {
      return {
        product_group: [ 'RGB颜色值与十六进制颜色码转换工具', '染发', '烫发', '染发', 
        '烫发', '染发', '烫发', '造型', '护肤', '美容', '美甲', '源于开发者，', '服务开发者。' ],
        active: 3
      }
    },
    methods: {
      adas () {
        console.log(1)
        console.log(uni.getStorageInfoSync())
      },
    },
    computed: {
      leftScreenHeight () {
        console.log('xxxxxxxxxxxxx')
        if (uni.canIUse('getSystemInfoSync.return.windowHeight')) {
          try {
            const res = uni.getSystemInfoSync();
            console.log('xppppppppppppppp')
            console.log(res.model);
            console.log(res.pixelRatio);
            console.log(res.windowWidth);
            console.log(res.windowHeight);
            console.log(res.language);
            console.log(res.version);
            console.log(res.platform);
            const height = (res.windowHeight - 362 - 12) * (750 / res.windowWidth)
            console.log('height')
            console.log(height)
            return height
          } catch (e) {
            console.log('e', e)
            return 1000
          }
        } else {
          console.log('error')
          return 1000
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
  }
  .product-group-item.active{
    background-color: #FCFCFC;
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
