// pages/about/about.js
Page({

  weiBir() {
    this.setData({
      "say_text": "维维的生日是：1998-10-18"
    })
  },

  tianBir() {
    this.setData({
      "say_text": "甜甜的生日是：2001-09-17"
    })
  },

  togetherTime() {
    this.setData({
      "say_text": "我们在一起的时间是：2021-08-15"
    })
  },

  lovaOath() {
    this.setData({
      "say_text": "忠于对方，往后余生，彼此珍惜"
    })
  },

  /**
   * 页面的初始数据
   */
  data: {
    say_text: '今天也是爱你的一天哦～'
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