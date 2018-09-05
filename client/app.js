//app.js
App({
  onLaunch: function () {
    // 获取漫画台主要的全局数据
    wx.request({
      method: 'GET',
      url: 'https://main-globalapi.yyhao.com/app_api/v5/getconfig/',
      data: {
        platformname: 'android',
        productname: 'mht'
      },
      success: (res) => {
        this.globalData.config = res.data
      }
    })
  },
  globalData: {
    config: null
  }
})
