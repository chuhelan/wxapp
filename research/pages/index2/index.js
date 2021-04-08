// pages/index2/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '张三',
    gender: [
      { name: '男', value: '0', checked: true },
      { name: '女', value: '1', checked: false }
    ],
    skills: [
      { name: 'HTML5', value: 'html', checked: true },
      { name: 'CSS', value: 'css', checked: true },
      { name: 'JavaScript', value: 'js', checked: false },
      { name: 'Photoshop', value: 'ps', checked: false },
    ],
    opinion: '测试'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://127.0.0.1:3000/',
      success: function (res) {
        that.setData(res.data)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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

  submit: function (e) {
    wx.request({
      method: 'post',
      url: 'http://127.0.0.1:3000',
      data: e.detail.value,
      surccess: function (res) {
        console.log(res)
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})