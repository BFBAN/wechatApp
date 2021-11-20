// components/ui/ui-tab/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    active: {
      type: Number,
      value: 0
    },
    list: {
      type: Array,
      value: []
    },
    align: {
      type: String,
      value: 'left'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(e) {
      const { index } = e.currentTarget.dataset
      this.setData({
        active: index
      })
    }
  }
})
