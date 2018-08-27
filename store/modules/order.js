
const state = {
  order_list: [
    {
      title: '购买会员卡',
      product: '魅力白金卡',
      time: '2018-04-06 12:32',
      pay_way: '微信支付',
      price: 5000,       //原价
      discount: '无',
      cost: 5000         //实付
    },
    {
    	title: '普通消费',
    	product: '洗剪',
    	time: '2018-04-06 12:46',
    	pay_way: '魅力白金卡',
    	price: 30,       //原价
    	discount: '八折',
    	cost: 24         //实付
    },
  ]
}


const actions = {
  
}

const mutations = {
}


export default{
	state,
	actions,
	mutations
}
