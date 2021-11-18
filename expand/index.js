/**
 *
 * 构造函数扩展, 添加全局属性
 *
 * @param {*} Page 原生Page
 */
import { findRoute } from '../router/index'
const computedBehavior = require('miniprogram-computed')

const extend = (extend, type) => {
  return object => {
    let { data, behaviors = [], options = {}, externalClasses = [], setData, _data } = object
    // 获取那些是否需要挂载的参数配置
    // 扩展data, 用于做一些全局通用的一些配置
    // 全局的 app 对象
    // object.$app = app
    // 默认自带 behaviors computedBehavior 方法
    object.behaviors = [ computedBehavior, ...behaviors ]
    // 添加全局的纯数据字段
    object.options = { pureDataPattern: /^_/ , ...object.options }

    // 组合 data _data
    object.data = { ...data, ..._data }

    // 改下onload 方法，在执行之前把路由封装
    const { onLoad } = object
    switch(type) {
      // 组件单独配置
      case 'Component': {
        // 设置可以使用全局样式
        object.options = { addGlobalClass: true, ...options }
        // 设置 使用父级样式的class名字
        object.externalClasses = [ ...externalClasses, 'styleclass']

        // 改写组件show方法，在这里会绑定一次当前的路由信息
        const { pageLifetimes: { show = () => {} } = {}, pageLifetimes } = object
        object.pageLifetimes = {
          ...pageLifetimes, show: function(options) {
            let pages = getCurrentPages();
            const { $route } = pages[pages.length - 1];
            this.$route = $route
            show()
          }
        }
        // 
        break
      }
      // 单独页面配置
      case 'Page':
        const { onUnload } = object
        object.onLoad = function(options) { 
          // 这里必须使用function, 不可以使用箭头函数， 否则this指向错误
          const queryStr = options.routerQuery ? decodeURIComponent(options.routerQuery) : '{}'
          const query = JSON.parse(queryStr)
          this.$route = { ...findRoute({ path: '/' + this.route }), query: { ...query, ...options }}
          const { setData } = this
          
          console.log(this.$route)
          // 重写page 的setdata 方法 用来 实现页面内部的局部数据共享
          this.setData = function(data, callback = () => {}) {
            // _data 字段用来 储存 需要共享的属性
            const { _data = {} } = this
            let set = {}, _set = {}
            // 获取所有的 需要共享的属性的ket
            const _keys = Object.keys(_data)
            // 循环这次setdata 的数据
            Object.keys(data).forEach(key => {
              let value = data[key]
              // 如果是共享数据 单独储存
              if(_keys.includes(key)) {
                _set[key] = value
              }else {
                // 非共享数据直接更新
                set[key] = value
              }
            })
            if(Object.keys(set).length > 0) {
              // 直接更新非共享数据
              setData.call(this, set, callback)
            }
          }
          if(typeof onLoad === 'function') {
            onLoad.call(this, options);
          }
        }
        
        object.onUnload = function() {
          const { name } = this.$route
          if(typeof onUnload === 'function') {
            onUnload.call(this);
          }
        }
        object.onShareAppMessage = function() {
          return {
            title: '多份健康，多份爱'
          }
        }
        break
    }
    // 路由封装
    return extend(object)
  }
}

// 重写 构造函数
Page = extend(Page, 'Page')
Component = extend(Component, 'Component')


