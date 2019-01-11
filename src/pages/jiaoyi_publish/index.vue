<template>
<div>
  <div class="jiaoyi_publish">
        <div class="info">
          <div class="info-item van-hairline--bottom">
            <div class="left">商品标题</div>
            <div class="right">
              <div>未填写</div>
              <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
              </div>
          </div>
          <div class="info-item van-hairline--bottom">
            <div class="left">商品描述</div>
            <div class="right">
              <div>未填写</div>
              <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
              </div>
          </div>
          <div class="info-item  van-hairline--bottom" @click="selectDate(3)">
            <div class="left">分类</div>
            <div class="right">
              <div>请选择</div>
              <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
              </div>
          </div>
          <div class="add-img">
             <div class="sel-img">
              <img src="../../asset/imgs/img_colse.png" alt="" class="colse-img">
              <img src="http://placekitten.com/100/100" alt="" class="item-img">
              </div>
            <div class="add"><img src="../../asset/imgs/add.png" alt="" class="add-img"></div>
          </div>
          <div class="info-item van-hairline--bottom">
            <div class="left">联系人</div>
            <div class="right">
              <div class="price"> <div class="yang">￥</div> 未填写</div>
              </div>
          </div>
          <div class="info-item van-hairline--bottom">
            <div class="left">联系人</div>
            <div class="right">
              <div>未填写</div>
              <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
              </div>
          </div>

          <div class="info-item van-hairline--bottom">
            <div class="left">联系方式</div>
            <div class="right">
              <div>未填写</div>
              <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
              </div>
          </div>
        </div>
        <div class="btn-su">发布</div>
       
  </div>
  <van-toast id="van-toast" />
  <van-popup :show="show" @close="onClose" position="bottom">
    <div class="h-s100">
      <!-- 日期选择 -->
      <van-datetime-picker
          v-if="selectStatus == 1"
          type="date"
          :value="currentDate"
         @confirm="getDate"
         @cancel="onClose"
        />
        <!-- 单选 -->
        <van-picker
           v-if="selectStatus == 2" 
           :columns="columns"
          @change="onPickerChange"
          show-toolbar="true"
          @cancel="onClose"
          @confirm="getPicker"
        />
    </div>
  </van-popup>
</div>
</template>
<script>
import Toast from '@/../static/dist/toast/toast'
import Util from '@/utils/index'
export default {

  data () {
    return {
      opt : '', // person,company 个人、公司
      show: false,
      currentDate: new Date().getTime(),
      selectOpt: 0, //1: 出生年月 2: 参加工作年月 3: 求职状态
      selectStatus: 1, // 1:时间选择 2:单选
      columns: [],
    }
  },
  computed: {
    userInfo: ()=> {
      return Util.getStorage('userInfo')
    }
  },
  methods: {
    onClose() {
      this.show = false
    }
    ,selectDate(opt) {
      // opt 1: 出生年月 2: 参加工作年月 3: 求职状态
      this.show = true
      console.log(11222)
      switch(opt) {
        case 1:
        this.selectStatus = 1
        break
        case 2:
        this.selectStatus = 1
        break
        case 3:
        this.selectStatus = 2
        this.columns = this.qiuzhi
        break
      }
    }
    ,getDate(event) { // 选择日期
      this.show = false
      console.log(event)
    }
    ,getPicker(event) {// 单选
      this.show = false
      console.log(event)
    }
  },
  mounted () {
    this.opt = this.$mp.query.opt
    let title = '我的简历'
    this.opt == 'person' ? '': title='企业介绍'
    Util.setTitle(title)
  }
 
}
</script>

<style  lang="less">
.jiaoyi_publish {
  padding-bottom: 60px;
  .info {
    padding: 20px 30px;
    
    .add-img {
      padding: 20px 0;
      display: flex;
      .sel-img {
        position: relative;
        .colse-img {width:15px;height: 15px;position:absolute;top:-5px;left:-5px;}
        .item-img {width:57px;height: 57px;margin-right: 24px;}
      }
      .add {
        width:57px;
        height: 57px;
        color:#A1A2A4;
        background: #EEEFF4;
        font-size: 9px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .add-img {
          width:28px;
          height: 28px;
        }
      }
    }
    .info-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 9px 0;
      color: #757980;
      .left {font-size: 13px;color:#1C2627;}
      .right {
        font-size: 11px;
        display: flex;
        .ri-img {
          width:8px;
          height: 14px;
          margin-left: 15px;
        }
        .price {
          display: flex;
          margin-right: 23px;
          .yang {color:#FDC915;font-size: 11px;margin-right: 5px;}
        }
      }
    }
    .worker{
      color:#1C2627;
      font-size: 13px;
    }
    .worker-item {
      
      .cont {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        padding: 9px 0;
        color: #757980;
        .left {
          font-size: 13px;
          display: flex;
          flex-direction: column;
          .c-name {
            color: #A1A2A4;
            font-size: 10px;
          }
          }
        .right {
          font-size: 11px;
          display: flex;
          .ri-img {
            width:8px;
            height: 14px;
            margin-left: 15px;
          }
        }
      }
     .con {
          color: #757980;
          font-size: 13px;
          padding: 9px 0;
     }
    }
    .add-work {
      color:#757980;
      font-size: 11px;
      height: 32px;
      line-height: 32px;
      text-align: center;
      margin-top:5px; 
    }
    .info-act {
      padding: 30px 0;
      .left {color:#1C2627;}
    }
    .info-com {
      .left {color:#1C2627;}
    }
    .info-pd {
      padding-bottom: 20px;
    }
  }
  .btn-su {
    height: 50px;
    position:fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #FDC915;
    color:#FFFFFF;
    font-size: 16px;
    line-height: 50px;
    text-align: center;
  }
  .h-s100 {
    min-height: 100px;
    background: #FFFFFF;
  }
}
</style>
