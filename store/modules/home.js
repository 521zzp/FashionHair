import * as types from '../mutation-types'
import { GET_USER_INFO, GET_STORE_LIST } from '@/config/url'
import { getModel, analy } from '@/utils/net'

const state = {
  banner_img: [
    '../../static/home-swiper/1.jpg',
    '../../static/home-swiper/2.jpg',
    '../../static/home-swiper/3.jpg'
  ],
  product_list: [],
  active: 0,
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
  }
}


export default{
	state,
	actions,
	mutations
}
