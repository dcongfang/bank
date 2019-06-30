// miniprogram/pages/index/index.js
const util = require('../../util');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://img.zjolcdn.com/pic/0/05/95/25/5952598_793757.jpg',
      'http://mat1.gtimg.com/hb/wy/jinrongjie3/3.jpg',
      'http://5b0988e595225.cdn.sohucs.com/images/20171206/5bc85aca2e0c4e7bb557da3827ba678a.jpeg'
    ],
    actListData: [
      {
        pic: "../../images/wde.png",
        words: "我的账户"
      },
      {
        pic: "../../images/zhuanzhang.png",
        words: "转账"
      },
      {
        pic: "../../images/ck.png",
        words: "存款"
      },
      {
        pic: "../../images/daikuan.png",
        words: "贷款"
      },
      {
        pic: "../../images/ny.png",
        words: "农银快e宝"
      },
      {
        pic: "../../images/nyk.png",
        words: "农银快e付"
      },
      {
        pic: "../../images/lc.png",
        words: "理财"
      },
      {
        pic: "../../images/jj.png",
        words: "基金"
      },
      {
        pic: "../../images/js.png",
        words: "账户贵金属"
      },
      {
        pic: "../../images/bx.png",
        words: "保险"
      },
      {
        pic: "../../images/shjf.png",
        words: "生活缴费"
      },
      {
        pic: "../../images/jh.png",
        words: "全部"
      }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 300,
    circular: true,
    showText: '',
    time: '',
    qRCodeMsg:''
  },
  handletap: function() {
    wx.navigateTo({
      url:"../search/search"
    })
  },
  getTime() {
      // var time = util.formatTime(new Date())
      var day = new Date();
      const time = day.getHours();
      // console.log(time);
      //为页面中time赋值
      this.setData({
        time:time
      })
  },
  getQRCode() {
    let that = this;
    wx.scanCode({
      success (res) {
        console.log(res)
        that.setData({
          qRCodeMsg: res.result
        })
        wx.showToast({
          title: '成功',
          duration: 2000
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.getTime()
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