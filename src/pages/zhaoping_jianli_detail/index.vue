<template>
<div class="jianli_detail van-hairline--top">
  <div class="header van-hairline--bottom">
    <div class="left">
      <div class="name">{{info.name}}</div>
      <div class="info">·{{info.age}}岁·{{xueli[info.educationalBg-1]}}</div>
    </div>
    <img v-if="info.headPhoto" :src="base+info.headPhoto" alt="" class="ri-img">
    <img v-else src="../../asset/imgs/default_avatar.png" alt="" class="ri-img">
  </div>
  <div class="cent van-hairline--bottom">
    <div class="title title-min">{{qiuzhiStatus[info.educationalBg]}}</div>
    <div class="cent-item"><div class="c1">手机号</div><div class="c1">{{info.mobileNum}}</div></div>
    <div class="cent-item"><div class="c1">工龄</div><div class="c1">1年</div></div>
  </div>
  <div class="cent van-hairline--bottom">
    <div class="title">求职期望</div>
    <div class="cent-item">
      <div class="">{{info.expectJobName}}</div>
      <div class="c2" v-if="info.salaryMin != info.salaryMax">{{info.salaryMin}}-{{info.salaryMax}}元/月</div>
      <div class="c2" v-else>{{info.salaryMin}}</div>
    </div>
    <div class="cent-item"><div> {{info.workSiteProvince}}/{{info.workSiteCity}}/{{info.workSiteArea}}</div><div></div></div>
   
  </div>
  <div class="cent van-hairline--bottom">
    <div class="cent-item"><div class="min ">技能证书</div><div class="c1">{{info.brands}}</div></div>
  </div>
  <div class="cent">
    <div class="title">工作经历</div>
    <div class=" van-hairline--bottom" v-for="(item,index) in info.resumeWorkExpList" :key="item.id">
      <div class="cent-item"><div >{{item.companyName}}</div><div class="c1">{{item.workDateStart}}-2018.01</div></div>
      <div class="cent-item title-min"><div >{{item.jobName}}</div><div class="c1"></div></div>
      <div class="cent-item"><div class="c1 ti">{{item.workContext}}</div><div></div></div>
    </div>
  </div> 
</div>
</template>
<script>
import Toast from '@/../static/dist/toast/toast'
import Util from '@/utils/index'
import { baseUrl,qiuzhiStatus,xueliStatus } from '@/utils/config'
export default {

  data () {
    return {
      base: baseUrl+ '/file/show/img/base/',
      xueli: xueliStatus,
      qiuzhiStatus:qiuzhiStatus,
      info:{
         salaryMax: '',
         "resumeWorkExpList": [ ],
      },
      userInfo:{}
    }
  },
  // computed: {
  //   userInfo: ()=> {
  //     return Util.getStorage('userInfo')
  //   }
  // },
  methods: {
    date2year(date) {
      if(!date) {
        return ''
      }
        const newDate = new Date().getFullYear()
        const brithDate = new Date(date).getFullYear()
        return  ~~(newDate - brithDate)
    },
    getJianli() {
      const params = JSON.stringify({
        customerUserId: this.id
      })
       this.$http.post(`/resume/dt/${this.userInfo.id}`,params,{
        headers:{
          'Access-Token':this.userInfo.token,
        }, //http请求头，
      }).then((res) => {
        let data = res.data
        if(data.resultCode == '0000000') {
           let info = data.returnData
           info.age = this.date2year(info.birthDay)
           info.brands = Util.getCertifSort(info.certificates).join(',')
           this.info = info
        } else {
          console.log(data.resultDesc)
        }
      })
    }
  },
  mounted() {
    this.userInfo = Util.getStorage('userInfo')
    this.id = this.$mp.query.id || 0
    this.getJianli()
  }
 
}
</script>

<style  lang="less">
.jianli_detail {
  padding: 20px 30px;
  .header {
    display: flex;
    justify-content: space-between;
    padding-bottom: 15px;
    .left {
      display: flex;
      flex-direction: column;
      .name {color:#1C2627;font-size: 18px;line-height: 25px;}
      .info {color:#757980;font-size: 11px;}
    }
    .ri-img {
      width: 45px;
      height: 45px;;
      border-radius: 50%;
    }
  }
  .cent {
    padding: 10px 0;
    .title {color:#1C2627;font-size: 13px;line-height: 26px;}
    .title-min {font-size: 11px;line-height: 16px;}
    .cent-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      line-height: 26px;
      font-size: 13px;
      color:#1C2627;
      .min {
        align-self: flex-start;
        min-width: 70px;
      }
    }
    .c1 {color:#757980;}
    .c2 {color:#FDC915;}
    .ti {line-height: 18px;}
  }
}
</style>
