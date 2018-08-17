<script>
	export default {
		onLaunch: function () {
			console.log('App Launch')
      this.$store.dispatch('getStoreList')
		},
		onShow: function () {
			console.log('App Show')
		},
		onHide: function () {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
@import './static/iconfont/iconfont.css';
 
	page, view {
    box-sizing: border-box;
		display: flex;/* uni-app默认使用flex布局。因为flex布局有利于跨更多平台，尤其是采用原生渲染的平台。如不了解flex布局，请参考http://www.w3.org/TR/css3-flexbox/。若不需要flex布局可删除本行*/
	}
  /* 状态栏  --status-bar-height 计算状态栏高度 */ 
  .status-bar {
      height: var(--status-bar-height);
      width: 100%;
  }
	page {
		min-height: 100%;
    background-color: #DDDDDD;
	}
  text,input{
    box-sizing: border-box;
  }
  /* 小程序隐藏滚动条 */ 
  ::-webkit-scrollbar{
    width: 0;
    height: 0;
    color: transparent;
  }
</style>
