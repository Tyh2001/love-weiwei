// pages/we/we.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 头部轮播图
    banner_img: [
      'https://tianyuhao.cn/images/love-weiwei/auto/banner-1.jpg',
      'https://tianyuhao.cn/images/love-weiwei/auto/banner-2.jpg',
      'https://tianyuhao.cn/images/love-weiwei/auto/banner-3.jpg'
    ],
    // 底部轮播
    list_img: [
      'https://tianyuhao.cn/images/love-weiwei/auto/list-1.jpg',
      'https://tianyuhao.cn/images/love-weiwei/auto/list-2.jpg',
      'https://tianyuhao.cn/images/love-weiwei/auto/list-3.jpg'
    ],
    // 底部轮播右侧的两个
    list_top: [{
        pageUrl: '/pages/xing/xing',
        time: '2021-08-21',
        place: '星巴克',
        imgUrl: 'https://tianyuhao.cn/images/love-weiwei/xingbake/6.jpg'
      },
      {
        pageUrl: '/pages/lingyin/lingyin',
        time: '2021-08-22',
        place: '灵隐寺',
        imgUrl: 'https://tianyuhao.cn/images/love-weiwei/lingyinsi/6.jpg'
      }
    ],
    // 底部的列表展示
    list_all: [{
        pageUrl: '/pages/xihu/xihu',
        time: '2021-08-21',
        place: '西湖',
        imgUrl: 'https://tianyuhao.cn/images/love-weiwei/xihu/6.jpg'
      },
      {
        pageUrl: '/pages/yishang/yishang',
        time: '2021-08-28',
        place: '艺尚小镇',
        imgUrl: 'https://tianyuhao.cn/images/love-weiwei/yishangxiaozhen/6.jpg'
      },
      {
        pageUrl: '/pages/linping/linping',
        time: '2021-09-05',
        place: '临平公园',
        imgUrl: 'https://tianyuhao.cn/images/love-weiwei/linpinggongyuan/6.jpg'
      },
      {
        pageUrl: '/pages/faxi/faxi',
        time: '2021-10-17',
        place: '法喜寺',
        imgUrl: 'https://tianyuhao.cn/images/love-weiwei/faxisi/6.jpg'
      },
      {
        pageUrl: '/pages/leifeng/leifeng',
        time: '2021-11-21',
        place: '雷峰塔',
        imgUrl: 'https://tianyuhao.cn/images/love-weiwei/leifengta/6.jpg'
      },
      {
        pageUrl: '/pages/xiamen/xiamen',
        time: '2022-06-22',
        place: '厦门',
        imgUrl: 'https://tianyuhao.cn/images/love-weiwei/xiamen/6.jpg'
      },
      {
        pageUrl: '/pages/nanjing/nanjing',
        time: '2022-07-30',
        place: '南京',
        imgUrl: 'https://tianyuhao.cn/images/love-weiwei/nanjing/6.jpg'
      }
    ]
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