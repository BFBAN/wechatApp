// app.js

import router from './router/index'
import api from './utils/api'
import './expand/index.js'

// 路由
App.$router = router

// api 接口
App.$api = api

// 获取设备信息 储存在本地，不需要重复获取，防止有时候获取失败
let systemInfo = wx.getStorageSync('systemInfo')
if(!systemInfo) {
  const { windowWidth, windowHeight, statusBarHeight } = wx.getSystemInfoSync()
  const { top, height } = wx.getMenuButtonBoundingClientRect()
  const navTop = top
  const navHeight = statusBarHeight + height + (top - statusBarHeight) * 2
  systemInfo = { windowWidth, windowHeight, navTop, navHeight }
  wx.setStorage({
    key: "systemInfo",
    data: systemInfo
  })
}
// 设备信息
App.$systemInfo = systemInfo


App({
  onLaunch() {
    
  },
  globalData: {

  }
})
