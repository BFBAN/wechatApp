// components/partial/routerLink/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    to: {
      type: Object,
      value: {}
    },
    type: {
      type: String,
      value: 'navigateTo'
    },
    disable: {
      type: Boolean,
      value: false
    }
  },
  methods: {
    jump() {
      const { type, to, disable } = this.properties
      if(to.name && !disable) {
        App.$router[type](to)
      }
    }
  }
})
