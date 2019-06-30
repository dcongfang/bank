<template>
  <div>
<!--search bar layout-->
    <div class="search-bar">
        <van-row gutter="5">
            <van-col span="3"><img :src="locationIcon" width="80%" class="location-icon" /></van-col>
            <van-col span="16">
              <input type="text" class="search-input"/>
            </van-col>
            <van-col span="5"><van-button size="mini">查找</van-button></van-col>
        </van-row>
    </div>
<!--swipwer area-->
    <div class="swiper-area">
    <van-swipe :autoplay="1000">
        <van-swipe-item v-for="(banner,index) in binners" :key="index">
            <img :src="banner.imageUrl" width="100%"/>
        </van-swipe-item>
    </van-swipe>
</div>
  </div>
</template>

<script>


export default {
    data() {
        return {
            locationIcon: require('../../assets/images/1.png'),
            binners:[
                {imageUrl:'https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E5%95%86%E5%93%81%E5%9B%BE%E7%89%87&step_word=&hs=0&pn=8&spn=0&di=153010&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=1886428847%2C2831588983&os=2974616476%2C967636236&simid=3504777742%2C346764907&adpicid=0&lpn=0&ln=1654&fr=&fmq=1561632259306_R&fm=&ic=undefined&s=undefined&hd=undefined&latest=undefined&copyright=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fimg001.hc360.cn%2Fg2%2FM02%2F6F%2F7E%2FwKhQuFKut7qETqpSAAAAADFEM94507.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fkdk_z%26e3Bivnma_z%26e3Bv54AzdH3FetjoPtvfAzdH3Ff7rrsyfjsu_rtvfAzdH3Fddmdc89al_z%26e3Bip4s&gsm=0&rpstart=0&rpnum=0&islist=&querylist=&force=undefined'},
                {imageUrl:'../../assets/images/5.jpg'},
                {imageUrl:'../../assets/images/5.jpg'},
            ]
        }
    },
}
</script>

<style scoped>
  .search-bar{
      height: 2.2rem;
      background-color: #e5017d;
      line-height:2.2rem;

  }
  .search-input{
      width:100%;
      height: 1.3rem;
      border-top:0px;
      border-left:0px;
      border-right:0px;
      border-bottom: 1px solid 1px !important ;
      background-color: #e5017d;
      color:#fff;
  }
  .location-icon{
      padding-top: .2rem;
      padding-left: .3rem;
  }
  .swiper-area{
      width: 100%;
      clear:both;
  }
</style>