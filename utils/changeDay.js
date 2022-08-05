  // 计算纪念日还剩多少天
  function getDateRegion(beginDate, endDate) {
    if (beginDate != '' && endDate != '') {
      let aDate, oDate1, oDate2, iDays
      if (beginDate.length == 8) {
        beginDate = beginDate.substr(0, 4) + '-' + beginDate.substr(4, 2) + '-' + beginDate.substr(6, 2)
      }
      if (endDate.length == 8) {
        endDate = endDate.substr(0, 4) + '-' + endDate.substr(4, 2) + '-' + endDate.substr(6, 2)
      }
      aDate = beginDate.split("-")
      oDate1 = new Date(aDate[1] + '/' + aDate[2] + '/' + aDate[0])
      aDate = endDate.split("-");
      oDate2 = new Date(aDate[1] + '/' + aDate[2] + '/' + aDate[0])
      var i = (oDate1 - oDate2) / 1000 / 60 / 60 / 24
      iDays = i
      return iDays
    } else {
      return 0
    }
  }

  // 处理具体的到达纪念日的时间
  function changeSurplusDay() {
    const date = new Date()
    const y = date.getFullYear()
    const m = date.getMonth() + 1
    const d = date.getDate()

    const nowTime = `${y}-${m}-${d}`
    const nextTime = `${y + 1}-8-15`
    const res = getDateRegion(nextTime, nowTime)
    return res
  }

  module.exports = {
    changeSurplusDay
  }