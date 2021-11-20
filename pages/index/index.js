// index.js
// 获取应用实例
Page({
  data: {
    gameType: ['bf1', 'bfv'],
    gameSelect: '',
    playerName: ''
  },
  gameChange(e) {
    console.log(e)
    const { value } = e.detail
    this.setData({
      gameSelect: value
    })
  },
  searchPlayer() {
    const { gameType, gameSelect, playerName } = this.data
    if(!gameType[gameSelect]) {
      wx.showToast({ title: '请选择游戏类型', icon: 'none', duration: 1500  })
      return
    }
    if(!playerName) {
      wx.showToast({ title: '请输入游戏名称', icon: 'none', duration: 1500  })
      return
    }
    App.$router.navigateTo({ name: 'checkRecord', query: { type: gameType[gameSelect],  playerName }}) 
  }
})
