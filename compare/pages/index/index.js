// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  num1: 0,
  num2: 0,

  num1change: function (e) {
    this.num1 = Number(e.detail.value)
    console.log('第一个数字为' + this.num1)
  },

  num2change: function (e) {
    this.num2 = Number(e.detail.value)
    console.log('第二个数字为' + this.num2)
  },

  compare: function () {
    var str = "两数相等"
    if (this.num1 > this.num2) { str = "第一个数大" }
    else if (this.num1 < this.num2) { str = "第二个数大" }
    this.setData({ result: str })
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