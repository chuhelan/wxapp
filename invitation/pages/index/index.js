// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isPlayingMusic: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  bgm: null,
  music_url: 'http://..../xx.mp3',
  music_coverImgUrl: 'http://..../xx.jpg',
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.bgm = wx.getBackgroundAudioManager()
    this.bgm.title = "marry me"
    this.bgm.epname = "wedding"
    this.bgm.singer = "singer"
    this.bgm.coverImgUrl = this.music_coverImgUrl
    this.bgm.onCanplay(() => {
      this.bgm.pause()
    })
    this.bgm.src = this.music_url
  },
  play: function (e) {
    if (this.data.isPlayingMusic) {
      this.bgm.pause()
    }
    else {
      this.bgm.play()
    }
    this.setData({
      isPlayingMusic: !this.data.isPlayingMusic
    })
  },
  callGroom:function(){
    wx.makePhoneCall({
      phoneNumber:'13888888888',
    })
  },
  callBridge:function(){
    wx.makePhoneCall({
      phoneNumber: '13988888888',
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