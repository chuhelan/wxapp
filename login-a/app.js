App({
  onLaunch: function () {
    this.login();
    this.checkLogin(res => {
      console.log('is_login:', res.is_login)
      if (!res.is_login) {
        this.login()
      }
    })
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: res => {
              console.log("onLaunch")
              console.log(res)
              console.log("onLaunch")
              console.log(res.userInfo)
              this.globalData.userInfo = res.userInfo
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },

  login: function () {
    wx.login({
      success: res => {
        console.log('login code: ' + res.code)
        wx.request({
          url: 'http://127.0.0.1:3000/login',
          method: 'post',
          data: { code: res.code },
          success: res => {
            console.log('token:')
            console.log('token:' + res.data.token)
            this.globalData.token = res.data.token
            wx.setStorage({
              key: 'token', data: res.data.token
            })
          }
        })
      }
    })
  },

  checkLogin: function (callback) {
    var token = this.globalData.token
    if (!token) {
      token = wx.getStorageSync('token')
      if (token) {
        this.globalData.token = token
      } else {
        callback({ is_login: false })
        return
      }
    }
    wx.request({
      url: 'http://127.0.0.1:3000/checklogin',
      data: { token: token },
      success: res => {
        callback({ is_login: res.data.is_login })
      }
    })
  },
  globalData: {
    userInfo: null,
    token: null,
  }
})