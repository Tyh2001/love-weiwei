// pages/record/record.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time: '99天99小时99分钟99秒'
  },

  weTogether(time) {
    const nowStamp = new Date().getTime()
    const targetStamp = new Date(time.replace(/-/g, '/')).getTime()
    const difference = nowStamp - targetStamp
    const allSeconds = Math.floor(difference / 1000)
    const allMinutes = Math.floor(allSeconds / 60)
    const allHours = Math.floor(allMinutes / 60)
    const day = Math.floor(allHours / 24)
    const hours = allHours % 24
    const minutes = allMinutes % 60
    const seconds = allSeconds % 60
    this.setData({
      "time": `${day}天${hours}小时${minutes}分钟${seconds}秒`
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    setInterval(() => {
      this.weTogether('2021-08-15 21:00')
    }, 1000)
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