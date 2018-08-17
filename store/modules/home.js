import * as types from '../mutation-types'
import { GET_USER_INFO, GET_STORE_LIST } from '@/config/url'
import { getModel, analy } from '@/utils/net'

const state = {
  banner_img: [
    '../../static/home-swiper/1.jpg',
    '../../static/home-swiper/2.jpg',
    '../../static/home-swiper/3.jpg'
  ],
  store_list: []
}


const actions = {
  async getStoreList ({ commit }, obj) {
    const store_list = await getModel(GET_STORE_LIST).then(analy)
    console.log('store_list:')
    console.log(store_list)
    store_list && commit(types.GET_STORE_LIST, store_list)
  }
}

const mutations = {
  [types.GET_STORE_LIST] (state, store_list) {
    state.store_list = store_list
  }
}


export default{
	state,
	actions,
	mutations
}
