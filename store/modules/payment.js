
const state = {
  pay: {
    order_type: '',       //消费类型    card: 购买卡, product: 普通消费
    pay_for: '荣耀黄金卡',          //消费产品名称
    cost: 0,              //消费金额
    product_id: '',       //产品id
    card_id: '',          //会员卡id
  }
}


const actions = {
  
}

const mutations = {
  updatePaymentInfo (state, obj) {
    state.pay = obj
  },
  paymentInfoInit (state, obj) {
  	state.pay = {
      order_type: '', 
      pay_for: '',
      cost: 0,
      product_id: '',
      card_id: '',
    }
  }
}


export default{
	state,
	actions,
	mutations
}
