<template>
		<view class="page-body">
			<view class="page-section">
				<view class="title">{{ pay.pay_for }}</view>
				<view class="price"><text class="rmbLogo">￥</text>{{ pay.cost }}</view>
				<view class="btn-area">
          <button v-for="(item,index) in card" :key="index" type="primary" class="vip-card">{{ item.name }}支付</button>
					<!-- #ifdef MP-WEIXIN -->
					<button type="primary" disabled="true">微信支付</button>
					<!-- #endif -->
					<!-- #ifdef APP-PLUS -->
					<button v-for="(item,index) in providerList" :key="index" @tap="requestPayment(item,index)" :loading="item.loading">{{item.name}}支付</button>
					<!-- #endif -->
				</view>
			</view>
		</view>
</template>
<script>

	export default {
		data() {
			return {
				title: 'request-payment',
				providerList: [],
			}
		},
    computed: {
      pay () {
        return this.$store.state.payment.pay
      },
      card () {
        const order_type = this.$store.state.payment.pay.order_type
        if (order_type === 'product') {
          return this.$store.state.card.user_cards.filter(el => el.balance > 0)
        } else {
          return []
        }
        
      }
    },
		onLoad: function () {
			// #ifdef MP-WEIXIN
			uni.showModal({
				content: "小程序支付正在申请中...",
				showCancel: false
			})
			return;
			// #endif
			uni.getProvider({
				service: "payment",
				success: (e) => {
					console.log("payment success", e);
					this.providerList = e.provider.map((value) => {
						switch (value) {
							case 'alipay':
								return {
									name: '支付宝',
									id: value,
									loading: false
								}
							case 'wxpay':
								return {
									name: '微信',
									id: value,
									loading: false
								}
						}
					})
				},
				fail: (e) => {
					console.log("获取登录通道失败", e);
				}
			});
		},
		methods: {
			async requestPayment(e, index) {
				this.providerList[index].loading = true;
				let orderInfo = await this.getOrderInfo(e.id);
				console.log("得到订单信息", orderInfo);
				if (orderInfo.statusCode !== 200) {
					console.log("获得订单信息失败", orderInfo);
					uni.showModal({
						content:"获得订单信息失败",
						showCancel:false
					})
					return;
				}
				uni.requestPayment({
					provider: e.id,
					orderInfo: orderInfo.data,
					success: (e) => {
						console.log("success", e);
						uni.showToast({
							title: "感谢您的赞助!"
						})
					},
					fail: (e) => {
						console.log("fail", e);
						uni.showModal({
							content:"支付失败,原因为: " + e.errMsg,
							showCancel:false
						})
					},
					complete: () => {
						this.providerList[index].loading = false;
					}
				})
			},
			getOrderInfo(e) {
				let appid = uni.os.plus ? plus.runtime.appid : "";
				let url = 'https://demo.dcloud.net.cn/payment/?payid=' + e + '&appid=' + appid + '&total=0.01';
				return new Promise((res) => {
					uni.request({
						url: url,
						success: (result) => {
							res(result);
						},
						fail: (e) => {
							res(e);
						}
					})
				})
			}
		},
	}
</script>

<style>
  .page-body{
    flex-direction: column;
    width: 100%;
  }
	.page-section {
		width: auto;
		margin: 30px;
		padding: 64px 30px;
		background-color: #fff;
		text-align: center;
		font-size: 28px;
    flex-direction: column;
	}

	.desc {
		color: #B2B2B2;
	}

	.price {
		margin-top: 30px;
		margin-bottom: 25px;
		position: relative;
		display: inline-block;
		font-size: 78px;
		line-height: 1;
	}

	.rmbLogo {
		position: absolute;
		font-size: 40px;
		top: 16px;
		left: -40px;
	}
  .title{
    text-align: center;
    font-size: 54px;
  }
	button {
		background-color: #007aff;
		color: #ffffff;
    margin-top: 20px;
	}
  .vip-card{
    background-color: #FFC125;
  }
  view{
    display: block;
  }
</style>
