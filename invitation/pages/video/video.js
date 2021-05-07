// pages/video/video.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    movieList: [
      {
        create_time: '1532519754589',
        'title': '海边随拍', src: 'http://localhost:3000/1.mp4'
      },
      {
        create_time: '1532519777696',
        'title': '勿忘心安', src: 'http://localhost:3000/1.mp4'
      },
      {
        create_time: '1532519794991',
        'title': '点滴记忆', src: 'http://localhost:3000/1.mp4'
      }
    ],

    src: 'http://localhost:3000/1.mp4',
    danmuList: [
      { text: '第1s出现的弹幕', color: '#ff0000', time: 1 },
      { text: '第1s出现的弹幕', color: '#ff0000', time: 3 },
    ]
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  videoContext: null,
  inputValue: '',

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.videoContext = wx.createVideoContext('myVideo')
  },
  bindInputBlur: function () {
    this.inputValue = e.detail.value
  },
  bindSendDanmu: function () {
    this.videoContext.bindSendDanmu({
      text: this.inputValue,
      color: '#f90'
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