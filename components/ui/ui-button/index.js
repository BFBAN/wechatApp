// components/ui/fr-button/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    height: {
      type: String,
      value: '72'
    },
    type: {
      type: String,
      value: 'primary'
    },
    plain: {
      type: Boolean,
      value: false
    },
    borderRadius: {
      type: [String, Number],
      value: 8
    },
    disabled: {
      type: Boolean,
      value: false
    },
    icon: String,
    openType: {
      type: String,
      value: ''
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
    bindgetphonenumber(e) {
      this.triggerEvent('getphonenumber', e.detail)
    }
  }
})
