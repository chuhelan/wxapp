// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item: 0,
    tab: 0,
    playlist: [
      { id: 1, title: 'Formula 1 Theme', singer: 'Brian Tyler', src: "http://localhost:3000/1.mp3", coverImgUrl: '/images/cover.jpg' },
      { id: 2, title: '1976-rush', singer: 'Hans Zimmer', src: "http://localhost:3000/2.mp3", coverImgUrl: '/images/cover.jpg' },
      { id: 3, title: '钢琴协奏曲', singer: '肖邦', src: "http://localhost:3000/3.mp3", coverImgUrl: '/images/cover.jpg' },
      { id: 3, title: '钢琴协奏曲', singer: '肖邦', src: "http://localhost:3000/3.mp3", coverImgUrl: '/images/cover.jpg' },
    ],
    state: 'paused',
    playIndex: 0,
    play: {
      currentTime: "00:00",
      duration: '00:00',
      percent: 0,
      title: '',
      singer: '',
      coverImgUrl: '/images/cover.jpg'
    },
  },

  play: function () {
    this.audioCtx.play()
    this.setData({ state: 'running' })
  },
  pause: function () {
    this.audioCtx.pause()
    this.setData({ state: 'paused' })
  },

  next: function () {
    var index = this.data.playIndex >= this.data.playlist.length - 1 ? 0 : this.data.playIndex + 1
    this.setMusic(index)
    if (this.data.state === 'running') {
      this.play()
    }
  },

  // 切换上一曲
  last: function () {
    var index = this.data.playIndex < this.data.playlist.length-3 ? this.data.playlist.length - 1 :this.data.playIndex -1;
    this.setMusic(index)
    if (this.data.state === 'running') {
      this.play()
    }
  },

  changeItem: function (e) {
    this.setData({
      item: e.target.dataset.item
    })
  },
  changeTab: function (e) {
    this.setData({
      tab: e.detail.current
    })
  },

  change: function (e) {
    this.setMusic(e.currentTarget.dataset.index)
    this.play()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */

  audioCtx: null,
  onReady: function () {
    // var audioCtx = wx.createInnerAudioContext()
    // audioCtx.src = "http://localhost:3000/1.mp3"
    // audioCtx.onPlay(function () {
    //   console.log("开始播放")
    // })
    // audioCtx.onError(function (res) {
    //   console.log(res.errMsg)
    //   console.log(res.errCode)
    // })
    // audioCtx.play()

    // this.audioCtx = wx.createInnerAudioContext()
    // this.setMusic(0)

    console.log("onReady")
    this.audioCtx = wx.createInnerAudioContext()
    var that = this
    this.audioCtx.onError(function () {
      console.log("播放失败：" + that.audioCtx.src)
    })
    this.audioCtx.onEnded(function () {
      this.next()
    })
    // 自动更新进度
    this.play.duration = "01:01"
    this.audioCtx.onPlay(function () { })
    this.audioCtx.onTimeUpdate(function () {
      console.log("ontimeupdate")
      that.setData({
        'play.duration': formateTime(that.audioCtx.duration),
        'play.currentTime': formateTime(that.audioCtx.currentTime),
        'play.percent': that.audioCtx.currentTime / that.audioCtx.duration * 100
      })
      console.log("play.duration")
    })
    this.setMusic(0)
    function formateTime(time) {
      var minute = Math.floor(time / 60) % 60;
      var second = Math.floor(time) % 60;
      return (minute < 10 ? '0' + minute : minute) + ":" + (second < 10 ? '0' + second : second)
    }
  },

  setMusic: function (index) {
    var music = this.data.playlist[index]
    console.log(this.data.playlist[0].src)
    console.log(music.src)
    this.audioCtx.src = music.src
    this.setData({
      playIndex: index,
      'play.title': music.title,
      'play.singer': music.singer,
      'play.coverImgUrk': music.coverImgUrl,
      'play.current': '00:00',
      'play.duration': '00:00',
      'play.percent': 0
    })
  },

  sliderChange: function (e) {
    var second = e.detail.value * this.audioCtx.duration / 100
    this.audioCtx.seek(second)
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