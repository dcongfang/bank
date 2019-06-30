//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   swiperImg: [
     "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1308894.jpg",
     "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1305886.jpg",
     "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1309887.jpg"
   ],
    indicatorDots: true,
    autoplay: true,
    interval:3000,
    duration: 500,
    circular: true
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
   
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
