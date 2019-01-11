<template>
<div class="jiaoyi-detail">
  <div class="title van-hairline--top">商品标题</div>
  <div class="swiper">
      <swiper
          indicator-dots="false"
          autoplay="true"
          interval="3000"
          duration="1000"
          indicator-color="#FFF"
          indicator-active-color="#FDC915"
          style="height:250px;"
        >
            <swiper-item v-for="(item,index) in inimgUrls" :key="index">
              <img :src="item" class="slide-image" mode="aspectFill"  />
            </swiper-item>
        </swiper>
  </div>
  <div class="cont van-hairline--top">
    <div class="price">¥价格</div>
    <div class="con">商品描述:AntV 是蚂蚁金服全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、无限可能的数据可视化最佳实践。</div>
  </div>
  <div class="ch-6"></div>
  <div class="info">
    <div>联系人：林先生</div>
    <div>联系方式：19082317723</div>
  </div>
  <div class="option">
    <div class="option-item act">编辑</div>
    <div class="option-item">删除</div>
  </div>
</div>
</template>
<script>
import Toast from '@/../static/dist/toast/toast'
import Util from '@/utils/index'
export default {
  data () {
    return {
      inimgUrls: [
      'http://placekitten.com/100/100',
      'http://placekitten.com/100/100',
      'http://placekitten.com/100/100',
      ],
      show:false,
    }
  },
  methods: {
    onShow() {
      this.show = !this.show
    }
  }
}
</script>

<style  lang="less">
.jiaoyi-detail {
  padding-bottom: 60px;
  .title {
    padding: 20px 30px;
    color:#1C2627;
    font-size: 13px;
  }
  .swiper {
    padding-bottom: 11px;
  }
  .cont {
    margin: 0 30px;
    .price {font-size: 15px;color:#FDC915;line-height: 21px;padding:9px 0;}
    .con {
      font-size: 12px;
      color:#1C2627;
      line-height: 19px;
      padding-bottom: 10px;
    }
  }
  .ch-6 {background: #EEEFF4;height: 6px;}
  .info {
    padding: 10px 30px;
    color:#1C2627;
    font-size: 12px;
    line-height: 22px;
  }
  .option {
    position:fixed;
    display: flex;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    background: #FF4444;
    color:#FFFFFF;
    .option-item {
      width: 50%;
      text-align: center;
      font-size: 16px;
      line-height: 50px;
    }
    .act {background: #FDC915;}
  }
}
</style>
