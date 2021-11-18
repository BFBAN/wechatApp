// components/partial/navBar/index.js
Component({
  properties: {
    showIcon:  {
      type: Boolean,
      value: true
    }
  },
  data: {
    $systemInfo: App.$systemInfo
  },
  methods: {
    back() {
      App.$router.navigateBack(1)
      // if(getCurrentPages().length > 1) {
      // }else {
      //   this.home()
      // }
    }
  }
})
