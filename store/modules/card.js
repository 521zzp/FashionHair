import * as types from '../mutation-types'
import { GET_USER_INFO, GET_STORE_LIST } from '@/config/url'
import { getModel, analy } from '@/utils/net'

const state = {
  card_shop: [
    {
      name: '至尊钻石卡',      // 会员卡名称
      card_type: 'diamond-card',          // 会员卡类型    silver魅力白金    diamond尊贵钻石
      discount: 0.6,          // 折扣
      equity: '全场6折',      // 折扣标题
      price: 10000,           // 价格
      id: 'safasf'
    },
    {
    	name: '魅力白金卡',      // 会员卡名称
    	card_type: 'silver-card',          // 会员卡类型    silver魅力白金    diamond尊贵钻石
    	discount: 0.8,          // 折扣
    	equity: '全场8折',      // 折扣标题
    	price: 5000,           // 价格
      id: 'asf'
    },
    {
    	name: '荣耀黄金卡',      // 会员卡名称
    	card_type: '',          // 会员卡类型    silver魅力白金    diamond尊贵钻石
    	discount: 0.9,          // 折扣
    	equity: '全场9折',      // 折扣标题
    	price: 1000,           // 价格
      id: 'asgsagas'
    },
  ],
  user_cards: [
    {
      name: '尊贵钻石卡',   //会员卡名称
      card_id: '',      // 个人会员卡id
      discount: 0.6,    // 折扣
      equity: '全场6折', // 折扣标题
      balance: 300,     // 余额
    },
    {
    	name: '荣耀黄金卡',   
    	card_id: '',     
    	discount: 0.9,    
    	equity: '全场9折',
    	balance: 0,     
    },
  ],
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
