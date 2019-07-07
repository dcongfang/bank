// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: true,
    nickName: '',
    avatarUrl: ''
  },
  previewImg: function(){
    wx.previewImage({ 
      urls: [this.data.avatarUrl] // 需要预览的图片http链接列表
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  bindGetUserInfo() {
    var that = this
    wx.showModal({
      title: '提示',
      content: '确认是否授权',
      success (res) {
        if (res.confirm) {
          wx.getUserInfo({
            success: function (res) {
              // console.log(res)
              that.setData({
                nickName: res.userInfo.nickName,
                avatarUrl: res.userInfo.avatarUrl,
                show: false
              })
             },
       })  
        } else if(res.cancel) {
          
        }
      }
    })
  
  },
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