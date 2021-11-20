import request from './request'

export default {
  // 根据类型查询字典
  getPlayerAll: (data) => request({ url: 'all', data }),

  // 单独获取兵种数据
  classes: (data) => request({ url: 'all', data }),
  
  // 获取 小程序 miniopenid 
  post: (data) => request({ url: '', data, method: 'post' }), 
 
}

