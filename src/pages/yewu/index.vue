<template>
  <div class="yewu" :style="{'height':height}">
    <div class="yewu-item van-hairline--top">
      <div class="title">
        <div class="br"></div>
        <div>企业业务</div>
      </div>
      <div class="option">
        <a href="" @click="qiyeNavTo(1)" class="option-item">
          <img src="../../asset/imgs/ye_yewu.png" alt="" class="img">
          <div>行政许可业务</div>
        </a>
        <a href="" @click="qiyeNavTo(2)" class="option-item">
          <img src="../../asset/imgs/ye_jianshi.png" alt="" class="img">
          <div>新增设备监视</div>
        </a>
        <a href="" @click="qiyeNavTo(3)" class="option-item">
          <img src="../../asset/imgs/ye_yuyue.png" alt="" class="img">
          <div>预约检查</div>
        </a>
        <a href="" @click="qiyeNavTo(4)" class="option-item">
          <img src="../../asset/imgs/ye_zhaopin.png" alt="" class="img">
          <div>技术人员招聘</div>
        </a>
        <a href="" @click="qiyeNavTo(5)" class="option-item">
          <img src="../../asset/imgs/ye_xinzeng.png" alt="" class="img">
          <div>设备新增管理</div>
        </a>
        <a href="" @click="qiyeNavTo(6)" class="option-item">
          <img src="../../asset/imgs/ye_nengyuan.png" alt="" class="img">
          <div>能源管理</div>
        </a>
         <a href="" @click="qiyeNavTo(7)" class="option-item">
          <img src="../../asset/imgs/ye_weixiu.png" alt="" class="img">
          <div>设备维修</div>
        </a>
      </div>
    </div>
    <div class="yewu-item van-hairline--top">
      <div class="title">
        <div class="br"></div>
        <div>个人业务</div>
      </div>
      <div class="option">
        <a href="../yewu_detail/main?id=6" class="option-item">
          <img src="../../asset/imgs/ye_kaozheng.png" alt="" class="img">
          <div>特种设备考证</div>
        </a>
        <a href="../tiku/main" class="option-item">
          <img src="../../asset/imgs/ye_tiku.png" alt="" class="img">
          <div>题库练习</div>
        </a>
        <!-- <a href="../yewu_detail/main?id=7" class="option-item">
          <img src="../../asset/imgs/ye_zhili.png" alt="" class="img">
          <div>个人资历</div>
        </a> -->
         <a href="../zhaoping/main?id=1" class="option-item">
          <img src="../../asset/imgs/ye_zhili.png" alt="" class="img">
          <div>个人求职</div>
        </a>
        <a href="../yewu_detail/main?id=8" class="option-item">
          <img src="../../asset/imgs/ye_peixun.png" alt="" class="img">
          <div>人员培训</div>
        </a>
        <a href="../jiaoyi/main?id=1" class="option-item">
          <img src="../../asset/imgs/ye_jiaoyi.png" alt="" class="img">
          <div>零部件交易</div>
        </a>
      </div>
    </div>
     <van-dialog id="van-dialog" />
    <tab-bar active="3"/>
  </div>
</template>
<script>
import Util from '@/utils/index'
import tabBar from '@/components/tabBar'
import myLoad from '@/components/myLoad'
import Dialog from '@/../static/dist/dialog/dialog'

export default {
  components: {
    tabBar,
    myLoad
  },
  data () {
    return {
     height: 0,
     userInfo:{}
    }
  },
  // computed: {
  //   userInfo: () => {
  //     return Util.getStorage('userInfo')
  //   }
  // },
  methods: {
      getPhoneHeight () {
          let _this = this
          wx.getSystemInfo({
            success: function(res) {
            _this.height = (res.windowHeight) +'px'
            }
          })
      }
        ,qiyeNavTo(opt) {
          if(this.userInfo.companyId == null || this.userInfo.companyName == null) {
            Dialog.alert({
              message: '暂未认证企业，请先认证'
            }).then(() => {
                //Util.redTo('../my_rengzheng/main')
            })
          } else {
            let url = ''
              switch(opt) {
                case 1:
                  url = `../yewu_detail/main?id=1`
                break
                case 2:
                  url = `../yewu_detail/main?id=2`
                break
                case 3:
                  url = `../yewu_detail/main?id=3`
                break
                case 4:
                  url = `../zhaoping/main?id=2`
                break
                case 5:
                  url = `../yewu_detail/main?id=5`
                break
                case 6:
                  url = `../nengyuan/main`
                break
                case 7:
                  url = `../jiaoyi/main?id=2`
                break
              }
              Util.navTo(url)
          }
        }
  },

  created () {
    this.getPhoneHeight()
  }
  ,mounted() {
     this.userInfo = Util.getStorage('userInfo')
  }
  ,onReachBottom () {

  }
}
</script>

<style  lang="less">
.yewu {
  background: #EEEFF4;
  width:100%;
  &-item {
    background: #ffffff;
    .title {
      display: flex;
      align-items: center;
      padding:  11px 20px;
      color:#1C2627;
      font-size: 16px;
      .br {background: #FDC915;width: 2px;height: 13px;margin-right:10px; }
    }
    .option {
      display: flex;
      flex-wrap: wrap;
      padding: 25px;
      padding-top: 0;
      .option-item {
        width: 25%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        font-size: 12px;
        margin-top: 15px;
        .img {width: 22px; height: 22px;margin-bottom: 5px;}
      }
    }
  }
}
</style>
