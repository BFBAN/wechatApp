import request from './request'

export default {
  // 根据类型查询字典
  getPlayerStats: (data) => request({ url: 'stats', data }),
  
  // 获取 小程序 miniopenid 
  post: (data) => request({ url: '', data, method: 'post' }), 
 
}

