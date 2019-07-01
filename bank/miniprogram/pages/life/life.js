// pages/life/life.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    iconItems: [
      {
        imgUrl: "../../images/shjf.png",
        title: "缴费"
      },
      {
        imgUrl: "../../images/cz.png",
        title: '充值'
      },
      {
        imgUrl: "../../images/sc.png",
        title: '商城'
      },
      {
        imgUrl: "../../images/yp.png",
        title: "影票"
      },
      {
        imgUrl: "../../images/ny.png",
        title: "快e宝"
      },
      {
        imgUrl: "../../images/ck.png",
        title: "存款"
      },
      {
        imgUrl: "../../images/js.png",
        title: "贵金属"
      },
      {
        imgUrl: "../../images/bx.png",
        title: "保险"
      },
      {
        imgUrl: "../../images/jt.png",
        title: '出行'
      },
      {
        imgUrl: "../../images/shiz.png",
        title: '时钟'
      }
    ],
    imgUrls: [
      "../../images/11.jpg",
      "../../images/22.jpg",
      "../../images/33.jpg",
      "../../images/44.png"
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 300,
    status: 0,
    currentIndex: 0,
    shopImg: [
      [
        {
        imgUrl:"../../images/3.jpg",
        text: "生活缴费"
      },
      {
        imgUrl: "../../images/chux.jpg",
        text: "商旅出行"
      },
      {
        imgUrl: "../../images/czzx.jpg",
        text: "充值中心"
      },
      {
        imgUrl: "../../images/dyp.jpg",
        text: "电影票"
      },
      {
        imgUrl: "../../images/fc.jpg",
        text: "房产"
      },
      {
        imgUrl: "../../images/wgtx.jpg",
        text: "无感通行"
      }
    ],
      [
          {
          imgUrl:"../../images/ykhy.png",
          text: "优酷会员"
        },
        {
          imgUrl: "../../images/fpzq.jpg",
          text: "扶贫专区"
        },
        {
          imgUrl: "../../images/chux.jpg",
          text: "商旅出行"
        },
        {
          imgUrl: "../../images/jfsc.jpg",
          text: "积分商城"
        },
        {
          imgUrl: "../../images/xdly.jpg",
          text: "小豆乐园"
        },
        {
          imgUrl: "../../images/jqxw.jpg",
          text: "节气寻味之旅"
        }
      ],
     [
        {
        imgUrl:"../../images/pg.jpg",
        text: "苹果新品特惠"
      },
      {
        imgUrl: "../../images/hwei.jpg",
        text: "华为商城"
      },
      {
        imgUrl: "../../images/oppo.jpg",
        text: "OPPO新品"
      },
      {
        imgUrl: "../../images/vivo.jpg",
        text: "vivo新品"
      },
      {
        imgUrl: "../../images/jfsc.jpg",
        text: "积分商城"
      },
      {
        imgUrl: "../../images/gjs.jpg",
        text: "实物贵金属商城"
      }
    ]
    ]
  },
  swiperTab: function(e) {
    // console.log(e);
    this.setData({
      status: e.detail.current,
      currentIndex: e.detail.current
    })
  },
  showStatus: function(e) {
    var status = e.currentTarget.dataset.status;
    if (status === this.data.status) {
      return ;
    }else if(this.data.currentIndex !== status) {
      this.setData({
        currentIndex: status
      })
    }
    this.setData({
      status
    })
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