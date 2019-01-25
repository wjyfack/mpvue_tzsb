<template>
<div class="company-detail  van-hairline--top">
    <div class="header">
      <div class="left">
        <div>
          <span class="title">{{info.companyName}}</span>
        </div>
          
        <div class="brand">
          <div class="brand-item" v-for="(item,index) in info.brands" :key="index">{{item}}</div>
        </div>
      </div>
      <img v-if="info.logoImg == ''" :src="base+info.logoImg" alt="" class="ri-img">
      <img v-else src="../../asset/imgs/default_avatar.png" alt="" class="ri-img">
    </div>
    <div class="company van-hairline--bottom">
      <div class="com-item" :class="{'com-act':show}" @click="onChangeCom(1)">企业信息</div>
      <div class="com-item" :class="{'com-act':!show}" @click="onChangeCom(2)">在招职位</div>
    </div>
    <van-transition :show="show" >
        <div class="detail" v-if="show">
            <div class="detail-item van-hairline--bottom">
              <div class="title">企业简介</div>
              <div class="cont">
                {{info.introduce}}
              </div>
            </div>
            <div class="detail-item van-hairline--bottom">
              <div class="title">企业地点</div>
              <div class="cont">{{info.fullAddress}}</div>
            </div>
          </div>
      </van-transition>
    <van-transition :show="!show"> 
      <zhao-item opt="person" :line="true" :show="false" :list="zhiweiList" v-if="!show" ></zhao-item>
    </van-transition>
      <van-toast id="van-toast" />
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
      show: true,
      
      id: 0,
      info: {},
      zhiweiList: []
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
   ,getCompanyDetail() {
     const params = JSON.stringify({
       companyId: `${this.id}`
     })
       this.$http.post(`/company/dt/${this.userInfo.id}`,params,{
        headers:{
          'Access-Token':this.userInfo.token,
        }, //http请求头，
      }).then((res) => {
        let data = res.data
        if(data.resultCode == '0000000') {
           let base =  data.returnData
             base.brands = base.treatments.split(',')
              this.info = base
        } else {
          Toast(data.resultDesc)
        }
      })
   }
  ,getZhiWei() {
        const params = JSON.stringify({
       "companyId": `${this.id}`
       })
      this.$http.post(`/recruitment/list/${this.userInfo.id}`,params,{
        headers:{
          'Access-Token':this.userInfo.token,
        }, //http请求头，
      }).then((res) => {
        let data = res.data
        if(data.resultCode == '0000000') {
           let base =  data.returnData
              for(let i in base) {
                  base[i].brands = Util.getCertifSort(base[i].skillRequires)
              }
            console.log(base)
            this.zhiweiList = base
        } else {
          Toast(data.resultDesc)
        }
      })
    }
  },

  mounted () {
    this.id = this.$mp.query.id
    this.getCompanyDetail()
    this.getZhiWei()
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
       width: 90%;
       .title {
         display: inline-block;
          font-size: 16px;
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
