<template>
<div class="jiaoyi">
  <div class="swiper">
      <swiper
          indicator-dots="false"
          autoplay="true"
          interval="3000"
          duration="1000"
          indicator-color="#FFF"
          indicator-active-color="#FDC915"
          style="height:120px;"
        >
            <swiper-item v-for="(item,index) in inimgUrls" :key="index">
              <img :src="item" class="slide-image" mode="aspectFill"  height="120" />
            </swiper-item>
        </swiper>
  </div>
  <div v-if="id== 1">
    <div class="sort van-hairline--bottom van-hairline--top">
        <div class="sort-item"><div>筛选</div> <div class="triangle_border_down"></div></div>
        <div class="sort-item bor-l">
          <span class="act">出售</span>
          <span>  /  </span>
          <span>收购</span>
        </div>
      </div>
      <div class="cont">
        <a href="../jiaoyi_detail/main" class="yi-item" v-for="(item,index) in 4" :key="index">
          <img src="http://placekitten.com/100/100" alt="" class="l-img">
          <div class="yi-con van-hairline--bottom">
            <div class="title">标题</div>
            <div class="price">¥价格</div>
            <div class="fen">分类</div>
          </div>
        </a>
      </div>
  </div>
  <div v-if="id == 2">
       <div class="sort van-hairline--bottom van-hairline--top">
        <div class="sort-item"><div>筛选</div> <div class="triangle_border_down"></div></div>
        <div class="sort-item bor-l">
         <div>排序方式</div> <div class="triangle_border_down"></div>
        </div>
      </div>
      <div class="cont">
        <a href="../jiaoyi_detail/main" class="yi-item" v-for="(item,index) in 4" :key="index">
          <img src="http://placekitten.com/100/100" alt="" class="l-img">
          <div class="yi-con van-hairline--bottom">
            <div class="title">标题</div>
            <div class="price">¥价格</div>
            <div class="fen">分类</div>
          </div>
        </a>
      </div>
    </div>
  <div class="opt">
    <img src="../../asset/imgs/yi_shougou.png" alt="" @click="toSort(1)" class="b-img mai" :class="{'chu':show}">
    <img src="../../asset/imgs/yi_chushou.png" alt="" @click="toSort(2)" class="b-img nai" :class="{'chu':show}">
    <img src="../../asset/imgs/yi_liebiao.png" alt="" @click="toSort(3)" class="b-img fenlei" :class="{'chu':show}">
    <img @click="onShow" src="../../asset/imgs/yi_add.png" alt="" class="a-img add"  :class="{'add-act':show}">
  </div>
</div>
</template>
<script>
import Toast from '@/../static/dist/toast/toast'
import Util from '@/utils/index'
export default {
  data () {
    return { 
      id:1, // １:交易　2:维修
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
    ,toSort(opt) {
        // opt : 1: 买　2: 卖　3:不知道
        let url = ''
        switch(opt) {
          case 1:
          
          break
          case 2:
          break
          case 3:
        
          break
        }
        url = `../jiaoyi_publish/main`
        Util.navTo(url)
    }
  }
  ,mounted() {
    this.id = this.$mp.query.id
  }
}
</script>

<style  lang="less">
.jiaoyi {
  position: relative;
  .sort {
    display: flex;
    padding: 8px 0;
    width:100%;
    .sort-item {
      font-size: 12px;
      width:50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #A1A2A4;
    }
    .triangle_border_down{
      width:0;
      height:0;
      border-width:8px 5px 0;
      border-style:solid;
      border-color:#757980 transparent transparent;/*灰 透明 透明 */
      margin:0  5px;
      position:relative;
    }
    .act {color:#FDC915}
    .bor-l {border-left: 1px solid #D8D8D8;}
  }
  .cont {
    .yi-item {
      padding: 10px 30px;
      display: flex;
      .l-img {
        width:64px;
        height: 64px;
      }
      .yi-con {
        flex:1;
        display: flex;
        flex-direction: column;
        margin-left: 15px;
        .title {font-size: 13px;line-height: 24px;color:#1C2627;}
        .price {color:#FDC915;font-size: 11px;line-height: 21px;}
        .fen {color:#A1A2A4;font-size: 10px;line-height: 14px;}
      }
    }
  }
  .opt {
    .a-img {height: 48px;width:48px;}
    .b-img {height: 34px;width:34px;}
    .add {
      position: fixed;
      bottom: 24px;
      right: 30px;
    }
    .add-act {
      transform: rotate(45deg);
      transition: all .3s ease-in;
    }
    .mai {
      display: none;
      opacity: 0;
      position: fixed;
      bottom: 27px;
      right: 110px;
    }
    .nai {
      display: none;
      position: fixed;
      bottom: 81px;
      right: 86px;
    }
    .fenlei {
      display: none;
      position:fixed;
      bottom: 108px;
      right: 33px;
    }
    .chu {
      display: block;
      opacity: 1;
      transition: all .3s ease-in;
    }
  }
}
</style>
