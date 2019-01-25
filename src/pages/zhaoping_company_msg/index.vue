<template>
<div class="van-hairline--top">
  <div class="zhiwei-msg" v-if="opt == 'zhiwei'">
        <div class="zhiwei-item  van-hairline--top" @longpress="delZhiwei(index)" v-for="(item,index) in zhiweiList" :key="index">
          <div class="title">
            <div class="name">{{item.jobName}}</div>
            <div class="price" v-if="item.salaryMin != item.salaryMax">{{item.salaryMin}}-{{item.salaryMax}}元/月</div>
            <div class="price" v-else>{{item.salaryMin}}</div>
          </div>
          <div class="req">
            <div class="left">
              <div class="zhi">{{item.jobRequire}}</div>
              <div class="addr" v-if="item.workSiteArea">{{item.workSiteProvince}}/{{item.workSiteCity}}/{{item.workSiteArea}}/{{item.workSiteFullAddress}}</div>
              <div class="addr" v-else>{{item.workSiteFullAddress}}</div>
            </div>
            <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
          </div>
          <div class="brand">
            <div class="brand-item" v-for="(items,indexs) in item.brands" :key="indexs">{{items}}</div>
            
          </div>
        </div>
        <a href="../zhaoping_fabu/main" class="btn-su">发布职位</a>
        <van-toast id="van-toast" />
  </div>
  <zhao-item opt="jianli" :show="false" :list="recordList" v-else-if="opt == 'record'"></zhao-item>
  <zhao-item opt="person" :show="false" :list="shenqingList" v-else-if="opt == 'shenqing'"></zhao-item>
  <div class="more  van-hairline--top" @click="more" v-if="isEmpty">查看更多职位</div>
  <div class="more  van-hairline--top" @click="more" v-if="isShengqEmpty">暂无记录</div>
  <!-- <div class="more  van-hairline--top">没有了</div> -->
    <van-toast id="van-toast" />
    <van-dialog id="van-dialog" />
</div>
</template>
<script>

import Toast from '@/../static/dist/toast/toast'
import Dialog from '@/../static/dist/dialog/dialog'
import zhaoItem from '@/components/zhaoItem'
import Util from '@/utils/index'
export default {
  components: {
    zhaoItem
  },
  data () {
    return {
      opt: '', // zhiwei,record 职位、投递记录
      recordList: [],
      zhiweiList: [],
      shenqingList: [],
      sqPage: 1,
      rePage: 1,
      isEmpty: false,
      isShengqEmpty: false
    }
  },
  computed: {
    userInfo: ()=> {
      return Util.getStorage('userInfo')
    }
  },
  methods: {
    getRecord() {
      const params = JSON.stringify({
       "companyId": this.userInfo.companyId,
        // "recruitmentId": ''//招聘职位ID
        pageSize: "10",
        pageNum: `${this.rePage}`
       })
      this.$http.post(`/resume/job/apply/${this.userInfo.id}`,params,{
        headers:{
          'Access-Token':this.userInfo.token,
        }, //http请求头，
      }).then((res) => {
        let data = res.data
        if(data.resultCode == '0000000') {
           let base =  data.returnData.list
              for(let i in base) {
                  base[i].brands = Util.getCertifSort(base[i].certificates)
                  base[i].addr = this.getworkCompany(base.resumeWorkExpList)
              }
            this.recordList = [...this.recordList, ...base]
            console.log(base)
        } else {
          Toast(data.resultDesc)
        }
      })
    }
    ,getZhiWei() {
        const params = JSON.stringify({
       "companyId": this.userInfo.companyId,
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
            this.zhiweiList = base
        } else {
          Toast(data.resultDesc)
        }
      })
    }
    ,getShengQing() {
      const params = JSON.stringify({
        pageSize: `${this.sqPage}`,
        pageNum: '10'
      })
      this.$http.post(`/recruitment/cust/apply/${this.userInfo.id}`,params,{
        headers:{
          'Access-Token':this.userInfo.token,
        }, //http请求头，
      }).then((res) => {
        let data = res.data
        if(data.resultCode == '0000000') {
           let base =  data.returnData.list
           if(base.length !=0) {
              for(let i in base) {
                  base[i].brands = Util.getCertifSort(base[i].skillRequires)
              }
              console.log(base)
              this.isEmpty = true
              this.shenqingList = [...this.shenqingList,...base]
           } else {
             this.isEmpty = false
             this.isShengqEmpty = true
           }
             
        } else {
          Toast(data.resultDesc)
        }
      })
    }
    ,more() {
      ++this.sqPage
      this.getShengQing()
    }
    ,getworkCompany(resumeWorkExpList) {
      if(resumeWorkExpList)  return resumeWorkExpListk[0].companyName
      return ''
    }
    ,delZhiwei(index) {
      console.log(this.zhiweiList[index])
      const params = JSON.stringify({
        companyId: this.userInfo.companyId,
        id: this.zhiweiList[index].id
      })
      Dialog.confirm({
        message: '删除该职位？'
      }).then(() => {
        // on confirm
         this.$http.post(`/recruitment/del/${this.userInfo.id}`,params,{
            headers:{
              'Access-Token':this.userInfo.token,
            }, //http请求头，
          }).then((res) => {
              let data = res.data
              if(data.resultCode == '0000000') {
                Toast('操作成功')
                this.getZhiWei()
              }
          })
      })
       
    }
  },
  mounted() {
    this.opt = this.$mp.query.opt
     this.isShengqEmpty = false
    let title = '职位管理'
    switch(this.opt) {
      case 'record':
       title = '投递记录'
       this.getRecord()
      break
      case 'shenqing':
      title = '申请记录'
      this.getShengQing()
      break
      case 'zhiwei':
        this.getZhiWei()
      break
    }
    Util.setTitle(title)
  }
  ,onReachBottom() {
    if(this.opt == 'record') {
      ++ this.rePage
      this.getRecord()
    }
  }
}
</script>

<style  lang="less" scoped>
.zhiwei-msg {

  .zhiwei-item {
    padding: 11px 16px 11px 30px;
    display: flex;
    flex-direction: column;
    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      line-height: 20px;
      .name {color:#1C2627;font-size: 15px;}
      .price {color:#FDC915;font-size: 13px;}
    }
    .req {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left {
        flex:1;
        display: flex;
        flex-direction: column;
        .zhi {font-size: 14px;color:#757980;}
        .addr {font-size: 13px;color:#A1A2A4;}
      }
      .ri-img {
        width: 8px;
        height: 14px;
      }
    }
    .brand {
          display: flex;
          padding-top:5px;
          flex-wrap: wrap;
          .brand-item {
            display: flex;
            justify-content: center;
            align-items: center;
            min-width: 53px;
            height: 17px;
            font-size: 11px;
            text-align: center;
            background: #EEEFF4;
            margin-right: 10px;
          }
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
  .more {
      display: flex;
      padding: 5px 0;
      justify-content: center;
      color:#FF4444;
      font-size: 14px;
    }
</style>
