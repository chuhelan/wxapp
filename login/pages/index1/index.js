// pages/index1/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      id: 1,
      name: '上证指数 1A0001',
      content: "3416.68"
    }, {
      id: 2,
      name: '贵州茅台 600519',
      content: "2047.00"

    }, {
      id: 3,
      name: '中国人寿 601628',
      content: "30.65"

    }, {
      id: 4,
      name: '隆基股份 601012',
      content: "82.13"

    }
      , {
      id: 5,
      name: '丽人丽妆 605136',
      content: "35.90"
    }
      , {
      id: 6,
      name: '三一重工 600031',
      content: "31.53"
    }]
  },

  click: function (e) {
    console.log("按了：", e.currentTarget.id)
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