// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  chooseImage: function () {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        const tempFilePaths = res.tempFilePaths
      }
    })
  },
  chooseAddress: function () {
    wx.chooseAddress({
      success: function (res) {
        console.log(res.userName)
        console.log(res.postalCode)
        console.log(res.provinceName)
        console.log(res.provinceName)
        console.log(res.cityName)
        console.log(res.countyName)
        console.log(res.nationalCode)
        console.log(res.telNumber)
      }
    })
  },

  makePhoneCall:function(){
    wx.makePhoneCall({
      phoneNumber:'400-100-111',
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.navigateTo({
      url: '/pages/index/index',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.redirectTo({
      url: '/pages/person/person',
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})