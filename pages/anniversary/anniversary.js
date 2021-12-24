import {
  changeSurplusDay
} from '../../utils/changeDay'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 每日随机的一句话的数组
    day_say: [
      '就像牵着你的手不放开。',
      '幸福很简单，就是每天过得平淡美好。',
      '我要向全世界宣告，你是我的。',
      '咕噜咕噜爱心也在冒泡。',
      '每天黑你千百遍，我待你如初恋。',
      '若想念是凋谢的云，我乘着风也飘向你。',
      '我见众生皆草木，唯有见你是青山。',
      '世界很暗，后来你来了，带着星星和月亮。',
      '光是遇见已经很美好了。',
      '当下心动便是最珍贵。',
      '你与星光同样浪漫。',
      '喜欢有很多种吧，无论是哪一种我都想给你。',
      '抓住一缕晨光，轻轻抚摸脸庞',
      '霞光万道，只为今朝绚烂',
      '不管多崎岖，总会到幸福终点。',
      '想要和你一起的心一直都很虔诚。',
      '想和你拥有一辈子的小幸福。',
      '我的未来蓝图里都是你。',
      '回到最初，你依然让我心动。',
      '未来的路上要和你一起进步。',
      '你的生日，就是我的幸福日。',
      '去星巴克，重要的不是喝咖啡，而是和你。',
      '我能为你送花，也能陪你一起浪迹天涯。'
    ],
    day_say_text: '', // 展示的文字
    dateTime: '', // 时间
    week: '', // 周几
    isDay: false, // 是否为纪念日
    togetherYear: '', // 在一起多少年
    surplusTime: '' // 距离纪念日剩余的天数
  },
  // 随机数
  randomNum(max, min) {
    return Math.floor(Math.random() * (max - min)) + min
  },
  // 不同时间展示不同的内容
  sayDay() {
    const date = new Date()
    const y = date.getFullYear()
    const m = (date.getMonth() + 1)
    const d = date.getDate()
    const w = date.getDay()

    switch (w) {
      case 0:
        this.setData({
          'week': '星期日'
        })
        break
      case 1:
        this.setData({
          'week': '星期一'
        })
        break
      case 2:
        this.setData({
          'week': '星期二'
        })
        break
      case 3:
        this.setData({
          'week': '星期三'
        })
        break
      case 4:
        this.setData({
          'week': '星期四'
        })
        break
      case 5:
        this.setData({
          'week': '星期五'
        })
        break
      case 6:
        this.setData({
          'week': '星期六'
        })
        break
    }

    this.setData({
      'dateTime': `${y}.${m < 10 ? '0' + m : m}.${d < 10 ? '0' + d : d}`
    })

    if (m == '11' && d == '15') {
      this.setData({
        'day_say_text': '纪念日就在今天哦～',
        'isDay': true
      })
    } else {
      this.setData({
        'day_say_text': this.data.day_say[this.randomNum(this.data.day_say.length, 0)],
        'isDay': false
      })
    }
  },
  // 在一起多少年
  weTogether(time) {
    const nowStamp = new Date().getTime()
    const targetStamp = new Date(time.replace(/-/g, '/')).getTime()
    const difference = nowStamp - targetStamp
    const allSeconds = Math.floor(difference / 1000)
    const allMinutes = Math.floor(allSeconds / 60)
    const allHours = Math.floor(allMinutes / 60)
    const day = Math.floor(allHours / 24)
    this.setData({
      'togetherYear': (day / 365).toFixed(2)
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.sayDay() // 处理时间
    this.weTogether('2021-08-15') // 在一起多少年
    this.setData({
      'surplusTime': changeSurplusDay()
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})