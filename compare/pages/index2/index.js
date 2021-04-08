// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('页面加载')

  },

  outTap: function (e) {
    console.log("outerTap")
  },
  innerTap: function (e) {
    console.log("innerTap")
  },
  middleTap: function (e) {
    console.log("middleTap")
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('页面初次渲染完毕')
    var app = getApp()
    console.log(app.num)
    app.test()
    // wx.navigateTo({url: '/pages/test/test?name1=value&name2=value'})
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('页面显式')
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
    console.log("此时用户下拉触摸")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("此时用户上拉触底")
  },

  onPageScroll: function (options) {
    console.log("此时用户正在滚动页面")
    console.log('滚动距离' + options.scrollTop)
  },

  compare: function (e) {
    console.log("比较按钮被单击了")
    console.log(e)
  },

  viewtap: function (e) {
    console.log(e.target.id + '-' + e.currentTarget.id)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  change: function () {
    this[e.currentTarget.id] = Number(e.detail.value)
  },

  change2: function () {
    this[e.currentTarget.id] = Number(e.detail.value)
  },

  compare: function () {
    var str = "两数相等"
    if (this.num1 > this.num2) { str = "第一个数大" }
    else if (this.num1 < this.num2) { str = "第二个数大" }
    this.setData({ result: str })
  },

})