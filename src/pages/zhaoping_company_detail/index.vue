<template>
<div class="company-detail  van-hairline--top">
    <div class="header">
      <div class="left">
        <div>
          <span class="title">香瓜科技</span>
        </div>
          
        <div class="brand">
          <div class="brand-item">五险一金</div>
          <div class="brand-item">带薪年假</div>
        </div>
      </div>
      <img src="http://placekitten.com/100/100" alt="" class="ri-img">
    </div>
    <div class="company van-hairline--bottom">
      <div class="com-item" :class="{'com-act':show}" @click="onChangeCom(1)">企业信息</div>
      <div class="com-item" :class="{'com-act':!show}" @click="onChangeCom(2)">在招职位</div>
    </div>
    <van-transition :show="show" >
        <div class="detail" v-if="show">
            <div class="detail-item van-hairline--bottom">
              <div class="title">企业简介</div>
              <div class="cont">服务：计算机技术开发、技术服务、技术咨询，计算机网络设计，计算机系统集成，计算机维修；销售：计算机软硬件、计算机设备、自动控制设备。(依法须经批准的项目，经相关部门批准后方可开展经营活动)</div>
            </div>
            <div class="detail-item van-hairline--bottom">
              <div class="title">企业地点</div>
              <div class="cont">佛山市南海区平西工业园</div>
            </div>
          </div>
      </van-transition>
    <van-transition :show="!show"> 
      <zhao-item opt="person" line="false" v-if="!show" ></zhao-item>
    </van-transition>
    
</div>
</template>
<script>
import zhaoItem from '@/components/zhaoItem'
import Toast from '@/../static/dist/toast/toast'
import Util from '@/utils/index'
export default { 
  components: { 
    zhaoItem
  },
  data () {
    return {
      show: true
      
    }
  },
  computed: {
    userInfo: ()=> {
      return Util.getStorage('userInfo')
    }
  },
  methods: {
   onChangeCom(opt) {
     opt == 1 ?this.show = true :this.show=false
   }
  },

  mounted () {

  }
 
}
</script>

<style  lang="less">
.company-detail {
   padding: 20px 30px;
   .header {
     display: flex;
     justify-content: space-between;
     padding-bottom: 23px;
     .left {
       display: flex;
       flex-direction: column;
       .title {
         display: inline-block;
          font-size: 18px;
          color:#1C2627;
          border-bottom: 2px solid #FDC915;
          margin-bottom: 5px;
       }
        .brand {
          display: flex;
          padding-top:5px;
          .brand-item {
            width: 53px;
            height: 17px;
            font-size: 11px;
            text-align: center;
            margin-right: 10px;
            color:#757980;
            border: 1px solid #757980
          }
     }
    }
    .ri-img {
        width:45px;
        height: 45px;
        border-radius: 50%;
      }
   }
   .company {
     display: flex;
     .com-item {
        font-size: 14px;
        color:#757980;
        margin-right: 23px;
        border-bottom: 1px solid #FFF;
        padding-bottom: 10px;
     }
      .com-act {color:#1C2627;border-color:#FDC915}
    }
     .detail {
       .detail-item {
         padding: 20px 0;
         .title {
           font-size: 14px;
           color:#1C2627;
           padding-bottom: 10px;
         }
         .cont {
           font-size: 12px;
           line-height: 17px;
           color:#757980;
         }
       }
     }

}
</style> 
