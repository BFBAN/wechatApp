// 请求头
let header = {
  // "content-type": "application/x-www-form-urlencoded"
}
let loading = false

import { api } from './config'

const request = ({ url, gameType = "bfv", method = 'get', data}) => new Promise((resolve, reject) => {
  if(method == 'post') {
    wx.showLoading({ mask: true, title: '请稍候' })
    loading = true
  }
  wx.request({
    url: `${api.bash}${gameType}/${url}`, method, data: { ...data, lang: 'zh-cn'}, header, success: res => {
      const { statusCode, data } = res
      resolve(res.data)
    },
    header: { accept: 'application/json' },
    fail: err => {
      failToast()
      // promise 反馈失败
      reject(err)
    },
    complete() {
      loading = false
      setTimeout(() => {
        if(!loading) {
          wx.hideLoading()
        }
      }, 100)
    }
  })
})

// 默认反馈文字为 请求失败
function failToast({loading, errText = '加载出现一点问题，请重试'} = {}) {
  setTimeout(() => {
    wx.showToast({
      title: errText,
      icon: 'none',
      duration: (errText ? 3 : 1.5) * 1000
    })
  }, 120)
}

export default request
