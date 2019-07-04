// pages/life/life.js
const db = wx.cloud.database();
const dcf = db.collection('bank-img');
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
      "https://7875-xuanxuan-3i0wm-1259123286.tcb.qcloud.la/29HayM7CLocY7162f63f405abac7dd68650bb82be5f5.jpg?sign=8a7b5eec8aec7c8806953ef0f4ca868e&t=1562198376",
      "https://7875-xuanxuan-3i0wm-1259123286.tcb.qcloud.la/v7EB5Zh8pvdS02ed1ea4da060065aabeb18a2cb87955.png?sign=9ff7319ebd9e462a92e0a258c820a918&t=1562198600",
      "https://7875-xuanxuan-3i0wm-1259123286.tcb.qcloud.la/A0H2Su2WajTX8caeb949c656889aa2fa3408efb99e38.jpg?sign=c52bf3b5b0194275a58500f5aa4dac69&t=1562198498",
      "https://7875-xuanxuan-3i0wm-1259123286.tcb.qcloud.la/PXlZy60xRc0t7db6263784071e2d4864a2fc6ecd1146.jpeg?sign=30d9eb4ffd3f81fb71c5d7dd3977ea7d&t=1562198521"
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
        imgUrl:"https://7875-xuanxuan-3i0wm-1259123286.tcb.qcloud.la/ejyGorkZS9aga65a707afc9f75fb8908ae2aa258f861.jpg?sign=1d60ddefa0aa0032e42316aad1e869a4&t=1562199650",
        text: "生活缴费"
      },
      {
        imgUrl: "https://7875-xuanxuan-3i0wm-1259123286.tcb.qcloud.la/qr1PNGM5CJXA141b9623caf98accf5c2b115989b08ac.jpg?sign=814adc2e38d98363e7b3bef384fda5d8&t=1562199058",
        text: "商旅出行"
      },
      {
        imgUrl: "https://7875-xuanxuan-3i0wm-1259123286.tcb.qcloud.la/gidvJIGiD63Zc0122ac1e48f1eddda027c70d458281d.jpg?sign=317f18b7c9a8d3d459a75becbad02b72&t=1562199133",
        text: "充值中心"
      },
      {
        imgUrl: "https://7875-xuanxuan-3i0wm-1259123286.tcb.qcloud.la/gvHNa7hOVPGk3966131d0c2fa0a5788b367eec9667e8.jpg?sign=96fd54aae4c687cc15442691881cf98d&t=1562199099",
        text: "电影票"
      },
      {
        imgUrl: "https://7875-xuanxuan-3i0wm-1259123286.tcb.qcloud.la/ReIchceOidnT997f92751b74416144ec8809a9c2bb7a.jpg?sign=5a84c6dbf3a69747c2d11143bd09a42c&t=1562199200",
        text: "房产"
      },
      {
        imgUrl: "https://7875-xuanxuan-3i0wm-1259123286.tcb.qcloud.la/xJwjBAevk0yR9df56197d80868f2ca9637682beca677.jpg?sign=55a5d012528644f771d7291916571683&t=1562199006",
        text: "无感通行"
      }
    ],
      [
          {
          imgUrl:"https://7875-xuanxuan-3i0wm-1259123286.tcb.qcloud.la/cZ9e5kCh6stt874e9fd116421c521c35b65b283be26d.png?sign=d42a2fe9f44a4dfed5ac2e507419423e&t=1562199523",
          text: "优酷会员"
        },
        {
          imgUrl: "https://7875-xuanxuan-3i0wm-1259123286.tcb.qcloud.la/zRYmZRr5IOUH5fbac79742e0b35f967698c8c6a77f89.jpg?sign=155a112d94754da1a9d8293679d0ad40&t=1562199560",
          text: "扶贫专区"
        },
        {
          imgUrl: "https://7875-xuanxuan-3i0wm-1259123286.tcb.qcloud.la/qr1PNGM5CJXA141b9623caf98accf5c2b115989b08ac.jpg?sign=814adc2e38d98363e7b3bef384fda5d8&t=1562199058",
          text: "商旅出行"
        },
        {
          imgUrl: "https://7875-xuanxuan-3i0wm-1259123286.tcb.qcloud.la/AYla3ho3OrD9490218fe2e9837a65b78eaddd1160a89.jpg?sign=f0d8c3b060c497e8e260fdba2d366038&t=1562199434",
          text: "积分商城"
        },
        {
          imgUrl: "https://7875-xuanxuan-3i0wm-1259123286.tcb.qcloud.la/MXbMJUBdbniR632777cbfa09ab39213b18d3826a5cb3.jpg?sign=310e44539709ba217d8ec1419d33aca6&t=1562199370",
          text: "小豆乐园"
        },
        {
          imgUrl: "https://7875-xuanxuan-3i0wm-1259123286.tcb.qcloud.la/a3TEaOcV7U48fac4fef1353ce16e6c7a1ae11a21145c.jpg?sign=e554e199fc010cc26ac8604ed5c7a51d&t=1562199497",
          text: "节气寻味之旅"
        }
      ],
     [
        {
        imgUrl:"https://7875-xuanxuan-3i0wm-1259123286.tcb.qcloud.la/t7d8tYEqtJ5ef35a6e503fb30d512705421c26ae5eda.jpg?sign=449224a4b60eb2621a93e853b4f0d2c5&t=1562199883",
        text: "苹果新品特惠"
      },
      {
        imgUrl: "https://7875-xuanxuan-3i0wm-1259123286.tcb.qcloud.la/bUY7zqPb7owK67e97419c5ded5e21f14a1b380dda850.jpg?sign=f6ec9553e5dcf85c0d335e1ff99fe8e5&t=1562199853",
        text: "华为商城"
      },
      {
        imgUrl: "https://7875-xuanxuan-3i0wm-1259123286.tcb.qcloud.la/JtUGZi5MkR2Xdcff409b4fe532523a582be4868b5be4.jpg?sign=86fc88ab8c7d4f5f1900a98b597fea38&t=1562199809",
        text: "OPPO新品"
      },
      {
        imgUrl: "https://7875-xuanxuan-3i0wm-1259123286.tcb.qcloud.la/DewQ63o7T8XWa10b754da190f3828145fe115f9e499c.jpg?sign=eca78b5153010a27ee46717455d52d02&t=1562199778",
        text: "vivo新品"
      },
      {
        imgUrl: "https://7875-xuanxuan-3i0wm-1259123286.tcb.qcloud.la/AYla3ho3OrD9490218fe2e9837a65b78eaddd1160a89.jpg?sign=f0d8c3b060c497e8e260fdba2d366038&t=1562199434",
        text: "积分商城"
      },
      {
        imgUrl: "https://7875-xuanxuan-3i0wm-1259123286.tcb.qcloud.la/Yoa7Yhsgp89C8c2fde27cc9dfdbf480a0bca40fd7b03.jpg?sign=9afa581698d79246ec21c248510772a7&t=1562199831",
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
    dcf.get({
      success(res) {
        console.log(res);
        // this.setData({
        //   navData:res.data
        // })
      }
    })
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