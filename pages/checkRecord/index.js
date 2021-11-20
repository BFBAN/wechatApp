// pages/checkRecord/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    player: {},
    $systemInfo: App.$systemInfo,
    weaponsActive: 0,
    vehiclesActive: 0,
    typeActive: 0,
    vehiclesTab: ['普通载具', '飞机', '定点武器'],
    weaponsTab: ['全自动', '半自动/喷子', '栓动式', '配备/近战'],
    typeTab: ['武器数据总览', '载具数据总览' ],
  },
  computed: {
    timePlayed(data) {
      const { timePlayed } = data.player
      if(timePlayed) {
        const arr = timePlayed.split(', ')
        const h = parseInt(arr[0]) * 24 + parseInt(arr[1])
        return `${h}h`
      }
    },
    activePlatoon(data) {
      return data.player.activePlatoon || {}
    },
    weaponsList(data) {
      const { weaponsActive, player: { weapons = [] } } = data
      const weaponsType = [
        ['固定式机枪', '轻机枪', '突击步枪', '冲锋枪'], 
        ['自动装填步枪', '手动枪机卡宾枪', '半自动步枪', '霰弹枪'], 
        ['单动式步枪', '反器材步枪'], 
        ['配备', '近战']
      ]
      return weapons.filter(item => weaponsType[weaponsActive].includes(item.type) && item.kills > 0).sort((a, b) => b.kills - a.kills).map(item => {
        return { ...item, star: parseInt(item.kills / 100)}
      })
    },
    vehiclesList(data) {
      const { vehiclesActive, player: { vehicles = [] } } = data
      const vehiclesType = [
        ['运输载具', '坦克'], 
        ['飞机'], 
        ['定点']
      ]
      return vehicles.filter(item => vehiclesType[vehiclesActive].includes(item.type) && item.kills > 0).sort((a, b) => b.kills - a.kills).map(item => {
        return { ...item, star: parseInt(item.kills / 100)}
      })
    }
  },
  onLoad: function (options) {
    App.$api.getPlayerAll({ name: 'lin_RunRun' }).then(res => {
      console.log(res)
      this.setData({ player: res })
    })
  },
})