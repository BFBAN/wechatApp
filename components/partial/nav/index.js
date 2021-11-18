// components/partial/nav/index.js
Component({
  properties: {
    active: {
      type: String,
      value: 'home'
    }
  },
  data: {
    nav: [{
      icon: 'home',
      label: '战绩查询',
      route: 'index'
    }, {
      icon: 'bulletin',
      label: '联ban公告'
    }, {
      icon: 'mine',
      label: '个人中心'
    }]
  },
  methods: {
    onClick(e) {
      const { icon, route } = e.currentTarget.dataset.item
      if(route) {
        if(icon != this.properties.active) {
          App.$router.reLaunch({
            name: route
          })
        }
      }else {
        wx.showToast({ title: '开发中', duration: 2000, icon: 'none' })
        
      }
    }
  }
})
