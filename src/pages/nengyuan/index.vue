<template>
<div class="nengyuan">
  <div class="heaher">
    <div class="title">艾欣能</div>
    <div class="min-title">天然气能源管理</div>
  </div>
  <div class="swiper">
    <swiper
        indicator-dots="false"
        autoplay="true"
        interval="3000"
        duration="1000"
        indicator-color="#FFF"
        indicator-active-color="#FDC915"
        :style="{'height':height}"
      >
          <swiper-item v-for="(item,index) in inimgUrls" :key="index">
            <img :src="item" class="slide-image"   />
          </swiper-item>
      </swiper>
  </div>
  <div class="good-for">
    <div class="hed van-hairline--bottom">
      <div class="border"></div>
      <div class="name">我们的优势</div>
    </div>
    <div class="good">
      <div class="good-item">
        <img src="../../asset/imgs/ai_anquan@2x.png" alt="" class="g-img">
        <div>安全存储</div>
      </div>
      <div class="good-item">
        <img src="../../asset/imgs/ai_nengyuan@2x.png" alt="" class="g-img">
        <div>能源可视化</div>
      </div>
      <div class="good-item">
        <img src="../../asset/imgs/ai_zhineng@2x.png" alt="" class="g-img">
        <div>智能管控</div>
      </div>
      <div class="good-item">
        <img src="../../asset/imgs/ai_fenxi@2x.png" alt="" class="g-img">
        <div>大数据分析</div>
      </div>
    </div>
  </div>
  <div class="footer">
    <img :src="qCode" alt="" class="l-img" @click="toPreview">
    <div class="cont">
      <div class="title">广州艾欣能能源有限责任公司</div>
      <div class="info">地址:佛山市禅城区张槎塱宝西路60号</div>
      <div class="info">电话:0757-82597747</div>
      <div class="info">邮箱:2829824219@qq.com</div>
    </div>
  </div>
</div>
</template>
<script>
import Toast from '@/../static/dist/toast/toast'
import Util from '@/utils/index'
const lunbo_1  = require('@/asset/imgs/lunbo_1.jpg')
const lunbo_2  = require('@/asset/imgs/lunbo_2.jpg')
const lunbo_3  = require('@/asset/imgs/lunbo_3.jpg')
const qCode  = require('@/asset/imgs/qCode.png')
export default {
  data () {
    return {  
      inimgUrls: [
     lunbo_1,
     lunbo_2,
     lunbo_3,
    ],
    qCode: qCode,
    height: '100px'
    }
  },
  methods: {
     getPhoneHeight () {
      let _this = this
      wx.getSystemInfo({
        success: function(res) {
//         _this.height = (~~res.windowHeight-425) +'px'
         _this.height = Math.floor(res.windowHeight*0.36) +'px'
//         console.log(_this.height)
        //  console.log(res.windowHeight)
        }
      })
    }
    ,toPreview(event) {
      // console.log(event)
      // Util.preview([ require('@/asset/imgs/qCode.png')])
    }
  },
  mounted() {
    this.getPhoneHeight()
  }
}
</script>

<style  lang="less">
.nengyuan {
  .heaher {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    color:#FFF;
    background: #FDC915;
    .title {font-size: 18px;line-height: 29px;}
    .min-title {
      font-size: 14px;
      line-height: 20px;
    }
  }
   .swiper {
     .slide-image {
       width: 100%;
       max-height: 100%;
     }
   }
  .good-for {
    .hed {
      display: flex;
      align-items: center;
      padding: 10px 20px;
      .border {width:2px;height: 13px;background: #FDC915;}
      .name {color:#1C2627;font-size: 16px;padding-left: 5px;}
    }
    .good {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding-bottom: 20px;
      .good-item {
        width:145px;
        height: 32px;
        margin-top:10px;
        border-radius: 15px;
        border:1px solid #FDC915;
        color:#1C2627;
        font-size: 14px;
        display: flex;
        align-items: center;
        padding-left: 25px;
        .g-img {width: 22px;height: 22px;margin-right:15px;}
      }
    }
  }
  .footer {
    background: #FDC915;
    padding: 10px 35px;
    display: flex;
    .l-img {
      width: 80px;
      height: 80px;
    }
    .cont {
      flex:1;
      display: flex;
      flex-direction: column;
      color:#1C2627;
      padding-left: 15px;
      .title {
        font-size: 14px;
        line-height: 24px;
      }
      .info{font-size: 11px;line-height: 19px;}
    }
  }
}
</style>
