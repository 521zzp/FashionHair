import * as types from '../mutation-types'
import { GET_USER_INFO, GET_STORE_LIST } from '@/config/url'
import { getModel, analy } from '@/utils/net'

const state = {
  banner_img: [
    '../../static/home-swiper/1.jpg',
    '../../static/home-swiper/2.jpg',
    '../../static/home-swiper/3.jpg'
  ],
  store_list: [
    {
      _id: 'afsafa',
      name: '',
      location: { }
    },
  ],       //店铺列表
  selected_store: {
    index: 0,
    _id: ''
  },
  product_list: [],
  active: 0,
  product_details: {},  //商品详情
}


const actions = {
  async getStoreList ({ commit }, obj) {
    const product_list = await getModel(GET_STORE_LIST).then(analy)
    console.log('product_list:')
    console.log(product_list)
    product_list && commit(types.GET_STORE_LIST, product_list)
  }
}

const mutations = {
  [types.GET_STORE_LIST] (state, product_list) {
    state.product_list = product_list
  },
  updateProductDetails (state, details) {
    state.product_details = details
  }
}


export default{
	state,
	actions,
	mutations
}
