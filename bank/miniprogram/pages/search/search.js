// miniprogram/pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addText: '',
    flag: true,
    valueItem: [],
    Lists: [
      "基金", "理财", "贷款", "快e付", "交电费", "充值", "信用卡", "快e宝"
    ]
    // selectedIndex:-1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let value = wx.getStorageSync('addTel');
    if (!value) {
        value = []
    }else {
      wx.getStorage({
        key: 'addTel',
        success: (res) => {
          this.setData({
            valueItem: res.data,
            flag: false
          })
        }
      })
    }
  },
  remove() {
    let that = this;
    wx.showModal({
      title: '提示',
      content: '确认清空全部历史记录',
      success (res) {
        if (res.confirm) {
          wx.clearStorage()
          that.setData({
            valueItem: [],
            flag: true
          })
        } else if(res.cancel) {
          
        }
      }
    })
 
  },
  back:function() {
    wx.navigateBack({
      delta: 1
    })
  },
  setInput(e) {
    // let debounceAjax = this.debounce(this.ajax, 2000);
    // debounceAjax(e.detail.value)
    this.setData({
      addText: e.detail.value
    })
    if (this.data.valueItem.indexOf(this.data.addText) == -1) {
      wx.setStorage({
        key: 'addTel',
        data: this.data.valueItem.concat(this.data.addText)
      }) 
  }else {
  }   
  },
  click(e) {
    // console.log(e)
    let text = e.target.dataset.text;
    this.setData({
      addText:text
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