// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: '0',
    op: ''
  },

  result: null,
  isClear: false,

  numBtn: function (e) {
    var num = e.target.dataset.val
    if (this.data.num === '0' || this.isClear) {
      this.setData({ num: num })
      this.isClear = false
    } else {
      this.setData({ num: this.data.num + num })
    }
  },

  opBtn: function (e) {
    var op = this.data.op
    var num = Number(this.data.num)
    console.log(num)
    this.setData({ op: e.target.dataset.val })
    console.log(e.target.dataset.val)
    if (this.isClear) {
      return
    }
    this.isClear = true
    if (this.result === null) {
      this.result = num
      return
    }
    if (op === '+') {
      this.result = this.result + num
      console.log('+' + this.result)
    } else if (op === '-') {
      this.result = this.result - num
    } else if (op === '*') {
      this.result = this.result * num
    } else if (op === '/') {
      this.result = this.result / num
    } else if (op === '%') {
      this.result = this.result % num
    }
    this.setData({ num: this.result })
  },

  dotBtn: function () {
    if (this.isClear) {
      this.setData({ num: '0.' })
      this.isClear = false
      return
    }
    if (this.data.num.indexOf('.') > 0) {
      return
    }
    this.setData({ num: this.data.num + '.' })
  },
  delBtn: function () {
    var num = this.data.num.substr(0, this.data.num.length - 1)
    this.setData({ num: num === '' ? '0' : num })
  },
  resetBtn: function () {
    this.result = null
    this.isClear = false
    this.setData({ num: '0', op: '' })
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