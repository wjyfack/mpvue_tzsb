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
              <img :src="item" class="slide-image"   />
            </swiper-item>
        </swiper>
  </div>
  <div v-if="id== 1">
    <div class="sort van-hairline--bottom van-hairline--top">
        <div class="sort-item" @click="onSort"><div>筛选</div> <div class="triangle_border_down"></div></div>
        <div class="sort-item bor-l">
          <span class="act">出售</span>
          <span>  /  </span>
          <span>收购</span>
        </div>
        <div class="down-group" :class="{'down-act': isDown}">
          <div class="down-item "  @click="onSort" v-for="(item,index) in sort" :key="index">{{item.name}}</div>
        </div>
      </div>
      
      <div class="cont">
        <a href="../jiaoyi_detail/main" class="yi-item" v-for="(item,index) in 4" :key="index">
          <img :src="inimgUrls[0]" alt="" class="l-img">
          <div class="yi-con van-hairline--bottom">
            <div class="c-title"><div class="title">电梯供电中断</div> <div class="time">今天10:20</div></div>
            <div class="price">¥1500-2000</div>
            <div class="fen">电梯</div>
            <div class="title">广东省佛山市南海区</div>
          </div>
        </a>
      </div>
  </div>
  <div v-if="id == 2">
       <div class="sort van-hairline--bottom van-hairline--top">
        <div class="sort-item" @click="onSort"><div>筛选</div> <div class="triangle_border_down"></div></div>
        <div class="sort-item bor-l">
         <div>排序方式</div> <div class="triangle_border_down"></div>
        </div>
        <div class="down-group" :class="{'down-act': isDown}">
          <div class="down-item "  @click="onSort" v-for="(item,index) in sort" :key="index">{{item.name}}</div>
        </div>
      </div>
      <div class="cont">
        <a href="../jiaoyi_detail/main" class="yi-item" v-for="(item,index) in 4" :key="index">
          <img :src="inimgUrls[1]" alt="" class="l-img">
          <div class="yi-con van-hairline--bottom">
             <div class="title">叉车电源</div>
            <div class="price">¥1500-2000</div>
            <div class="fen">叉车</div>
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
const lunbo_1  = require('@/asset/imgs/lunbo_1.jpg')
const lunbo_2  = require('@/asset/imgs/lunbo_2.jpg')
const lunbo_3  = require('@/asset/imgs/lunbo_3.jpg')
import {deviceTypes} from '@/utils/config'
export default {
  data () {
    return { 
      id:1, // １:交易　2:维修
      inimgUrls: [
      lunbo_1,
      lunbo_2,
      lunbo_3,
      ],
      show:false,
      isDown: true,
      sort: deviceTypes
    }
  },
  methods: {
    onShow() {
      this.show = !this.show
    }
    ,toSort(opt) {
        // opt : 1: 买　2: 卖　3:不知道
        this.show = false
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
    ,onSort() {
      this.isDown = !this.isDown
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
  .slide-image {
     width: 100%;
       max-height: 100%;
  }
  .sort {
    display: flex;
    padding: 8px 0;
    width:100%;
    position: relative;
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
    .down-group {
      width: 100%;
      display: flex;
      flex-direction: column;
      background: #ffffff;
      position: absolute;
      top: 34px;
      left: 0;
      right: 0;
      padding: 5px 0;
      .down-item {
         background: #ffffff;
        font-size: 14px;
        color: #A1A2A4;
        line-height: 24px;
        padding: 0 30px;
        z-index: 11;
      }
    }
    .down-act {
      display: none;
    }
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
        .c-title {display: flex;justify-content: space-between;align-items: center;}
        .time {font-size: 10px;color:#757980;}
        .title {font-size: 13px;line-height: 16px;color:#1C2627;}
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
