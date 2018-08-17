import store from '../store'
/*
 * 不需要登陆即可请求的接口
 */
export const analy = (response) => Promise.resolve(response).then(resultAny)

/*
 * 解析返回code,纯数组或对象
 */
export const resultAny = (datas) => {
  if (datas.code === 200) {
    if (Object.getOwnPropertyNames(datas.result).length === 1 && datas.result.list && Array.isArray(datas.result.list)) {
      // 返回数据里面仅有一个属性，属性名为list，且对应值类型为Array时返回该list
      return datas.result.list
    } else {
      return Object.assign({}, { msg: datas.msg }, datas.result)
    }
  } else {
    if (datas.msg) {
    }
    return undefined
  }
}

/*
 * 根据接口需要判断是否登陆状态
 */
export const onanaly = (response) => Promise.resolve(response).then(
  (dp) => {
    if (!dp.status) {
      return undefined
    } else {
      return dp
    }
  }
).then(resultAny)

/**
 *
 */
export const postModel = async (url, params) => {
  const result = await new Promise(resolve => {
    uni.request({
      url,
      data: params,
      method: 'POST',
      header: {
        'Accept': 'application/json',
        'content-type': 'application/json' // 默认值
      },
      success: ({ data, statusCode }) => {
        console.log('request success', data)
        resolve(data)
      },
      fail: ({ data, statusCode }) => {
        console.log('request fail')
        console.log(data)
        resolve(undefined)
      }
    })
  })
  return result
}

/**
 * post method  带token
 * Requests  params, returning a common request config.
 *
 * @param  {object} params  the method wangt to post
 *
 */
export const postOnline = async (url, params) => {
  const result = await new Promise(resolve => {
    uni.request({
      url,
      data: { ...params, token: store.state.token },
      method: 'POST',
      header: {
        'Accept': 'application/json',
        'content-type': 'application/json' // 默认值
      },
      success: ({ data, statusCode }) => {
        console.log('request success', data)
        resolve(data)
      },
      fail: ({ data, statusCode }) => {
        console.log('request fail')
        console.log(data)
        resolve(undefined)
      }
    })
  })
  return result
}

/*
 * get method 不带token
 */
export const getModel = async (url) => {
  const result = await new Promise(resolve => {
    uni.request({
      url,
      method: 'GET',
      header: {
        'Accept': 'application/json',
        'content-type': 'application/json' // 默认值
      },
      success: ({ data, statusCode }) => {
        console.log('request success', data)
        resolve(data)
      },
      fail: ({ data, statusCode }) => {
        console.log('request fail')
        console.log(data)
        resolve(undefined)
      }
    })
  })
  return result
}
/*
 * restful url 拼接
 */
export const restful = (url, obj) => {
  Object.keys(obj).forEach(function (key) {
    url = url.replace(new RegExp('{' + key + '}', 'g'), obj[key])
  })
  return url
}
