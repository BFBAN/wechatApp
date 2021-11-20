/**
 * @name 路由名称
 *    一般用户页面需要跳转的时候输入
 * @path 实际小程序页面跳转的路径
 *  
 * }
 */


export default [
  {
    name: 'index',
    path: '/pages/index/index',
    mate: { title: '搜索用户页面' }
  },
  {
    name: 'checkRecord',
    path: '/pages/checkRecord/index',
    mate: { title: '玩家数据页面' }
  },
  {
    name: 'otherData',
    path: '/pages/otherData/index',
    mate: { title: '其他数据页面' }
  },
  {
    name: 'historyId',
    path: '/pages/historyId/index',
    mate: { title: '历史id' }
  },
  {
    name: 'team',
    path: '/pages/team/index',
    mate: { title: '战排' }
  }
]