<template>
<div class="zhiwei-detail van-hairline--top">
  <div class="header van-hairline--bottom">
    <div class="top">
      <div class="name">{{info.jobName}}</div>
      <div class="price" v-if="info.salaryMin != info.salaryMax">{{info.salaryMin}}-{{info.salaryMax}}元/月</div>
      <div class="price" v-else>{{info.salaryMin}}</div>
    </div>
    <div class="brand">
      <div class="brand-item">{{xueliStatus[info.educationalBg-1]}}</div>
    </div>
  </div>
  <div class="cont van-hairline--bottom">
    <div class="title">职位要求</div>
    <div class="con">{{info.jobRequire}}</div>
  </div>
  <div class="cont van-hairline--bottom">
    <div class="title">技能要求</div>
    <div class="brand">
      <div class="brand-item" v-for="(item,index) in info.brands" :key="index">{{item}}</div>
    </div>
  </div>
  <div class="cont van-hairline--bottom">
    <div class="title">工作地点</div>
    <div class="con"> {{info.workSiteProvince||''}}  {{info.workSiteCity||''}} {{info.workSiteArea||''}} {{info.workSiteAddress||''}}</div>
  </div>
  <a :href="'../zhaoping_company_detail/main?id='+info.companyId" class="info">
    <img v-if="info.company.logoImg" :src="base+info.company.logoImg" alt="" class="avatar">
    <img v-else src="../../asset/imgs/default_com.png" alt="" class="avatar">
    <div class="detail">
      <div class="name">{{info.company.companyName}}</div>
      <div class="addr">{{info.company.fullAddress||''}}</div>
      <div class="brand">
        <div class="brand-item act">{{info.company.holiday}}</div>
        <div class="brand-item act" v-for="(item,index) in info.company.fulis" :key="index">{{item}}</div>
      </div>
    </div>
  </a>
    <van-toast id="van-toast" />
  <div class="btn-su" @click="touJianli">投递简历</div>
</div>
</template>
<script>

import Toast from '@/../static/dist/toast/toast'

import Util from '@/utils/index'
import {xueliStatus,baseUrl} from '@/utils/config'
export default {

  data () {
    return {
      id:0,
      xueliStatus: xueliStatus,
      base: baseUrl+'/file/show/img/base/',
      info: {
        company: {}
      },
      userInfo: {}
    }
  },
  // computed: {
  //   userInfo: ()=> {
  //     return Util.getStorage('userInfo')
  //   }
  // },
  methods: {
    getJianli() {
    
       const params = JSON.stringify({
         id: `${this.id}`
       })
      this.$http.post(`/recruitment/dt/${this.userInfo.id}`,params,{
        headers:{
          'Access-Token':this.userInfo.token,
        }, //http请求头，
      }).then((res) => {
        let data = res.data

        if(data.resultCode == '0000000') {
          let info = data.returnData
           info.brands = Util.getCertifSort(info.skillRequires)
           info.company.fulis = info.company.treatments.split(',')
           this.info = info
           Util.setTitle(this.info.jobName)
        } else {
          Toast(data.resultDesc)
        }
      })
    
    }
    ,touJianli() {
     
       const params = JSON.stringify({
         recruitmentId:`${ this.id}`
       })
      this.$http.post(`/recruitment/apply/${this.userInfo.id}`,params,{
        headers:{
          'Access-Token':this.userInfo.token,
        }, //http请求头，
      }).then((res) => {
        let data = res.data
        if(data.resultCode == '0000000') {
            Toast('投递成功，正在返回')
            setTimeout(()=> {
              wx.navigateBack({
                delta: 1
              })
            },1000)
        } else {
          Toast(data.resultDesc)
        }
      }).catch(()=> {
        Toast('投递失败')
      })
    
    }
  }
  ,mounted() {
    this.userInfo = Util.getStorage('userInfo')
    this.id = this.$mp.query.id
    this.getJianli()
  }
}
</script>

<style  lang="less">
.zhiwei-detail {
  padding: 25px 30px 60px 30px;
  .header {
    padding-bottom: 25px;
    .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .name {color:#1C2627;font-size: 18px;border-bottom: 2px solid #FDC915;padding-bottom: 5px;}
      .price {color:#FDC915;font-size: 12px;}
    }
  }
  .cont {
    padding: 20px 0;
    .title {color:#1C2627;font-size: 14px;}
    .con {
      color:#757980;
      font-size: 12px;
    }
  }
  .info {
    display: flex;
    padding-top:10px;
    .avatar {
      width: 36px;
      height: 36px;
      border-radius: 50%;
    }
    .detail {
      flex:1;
      display:flex;
      flex-direction: column;
      padding-left: 20px;
      .name {color:#1C2627;font-size:14px;}
      .addr {font-size: 13px;color:#757980;}
      .act {background: #EEEFF4;color:#757980}
    }
  }
  .brand {
    display: flex;
    flex-wrap: wrap;
    .brand-item {
     min-width:53px;
      height: 17px;
      display: flex;
      padding: 0 5px;
      justify-content: center;
      align-items: center;
      border: 1px solid #E5E7EC;
      font-size: 11px;
      color:#757980;
      margin-right: 10px;
      margin-top:10px;
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
}
</style>
