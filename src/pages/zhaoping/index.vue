<template>
<div>
  <div class="zhaopings" v-if="id ==1">
      <van-search
        :value="value"
        placeholder="搜索相关职位"
        show-action
      @search="onSearch"
      @change="onChange"
        use-action-slot
      custom-class="va-search"
      >
      <div class="cancel-class" slot="action" @click="onSearch">搜索</div>
      </van-search>
      <div class="zhao">
        <a href="../zhaoping_search/main" class="zhao-item">
          <img src="../../asset/imgs/zhao_sou.png" alt="" class="zhao-img">
          <div>公司搜索</div>
        </a>
        <div class="zhao-item">
          <img src="../../asset/imgs/zhao_xiaoxi.png" alt="" class="zhao-img">
          <div>消息</div>
        </div>
        <a href="../zhaoping_company_msg/main?opt=shenqing" class="zhao-item">
          <img src="../../asset/imgs/zhao_shengqi.png" alt="" class="zhao-img">
          <div>申请记录</div>
        </a>
        <a href="../zhaoping_jianli/main?opt=person" class="zhao-item">
          <img src="../../asset/imgs/zhao_jianli.png" alt="" class="zhao-img">
          <div>个人简历</div>
        </a>
      </div>
      <div class="tui">
        <div class="title">
          <div class="br"></div>
          <div>推荐职位</div>
        </div>
        <div class="tui">
          <a :href="'../zhaoping_zhiwei/main?id='+item.id" class="tui-item van-hairline--top" v-for="(item,index) in zhiweiList" :key="index">
            <img v-if="item.logoImg" :src="base+item.logoImg" alt="" class="tui-img">
            <img v-else src="../../asset/imgs/default_com.png" alt="" class="tui-img">
            <div class="cont">
              <div class="titles">
                <div>{{item.jobName}}</div>
                <div class="act" v-if="item.salaryMin != item.salaryMax">{{item.salaryMin}}-{{item.salaryMax}}元/月</div>
                <div class="art" v-else> {{item.salaryMin}}</div>
              </div>
              <div class="name">{{item.companyName}}</div>
              <div class="addr">{{item.workSiteProvince||''}}{{item.workSiteCity||''}}{{item.workSiteArea||''}}{{item.workSiteAddress||''}}</div>
              <div class="brand">
                <div class="brand-item" v-for="(items,indexs) in item.brands" :key="indexs" >{{items}}</div>
            </div>
            </div>
          </a>
          <div class="more  van-hairline--top" @click="more(1)">查看更多职位</div>
        </div>
      </div>
        <div class="tui">
        <div class="title">
          <div class="br"></div>
          <div>推荐公司</div>
        </div>
        <div class="tui">
          <a :href="'../zhaoping_company_detail/main?id='+item.id" class="tui-item van-hairline--top" v-for="(item,index) in gsList" :key="item.id">
            <img v-if="item.logoImg" :src="base+item.logoImg" alt="" class="tui-img">
            <img v-else src="../../asset/imgs/default_com.png" alt="" class="tui-img">
            <div class="cont">
              <div class="titles">
                <div>{{item.companyName}}</div>
                <div class="act"></div>
              </div>
              <div class="name"></div>
              <div class="addr">{{item.fullAddress}}</div>
              <div class="brand">
                <div class="brand-item">{{item.holiday}}</div>
                <div class="brand-item" v-for="(items,indexs) in item.brands" :key="indexs" >{{items}}</div>
            </div>
            </div>
          </a>
        
          <div class="more  van-hairline--top" @click="more(2)">查看更多企业</div>
        </div>
      </div>
        <div class="h-50"></div> 
        <van-toast id="van-toast" />
  </div>
  <div class="zhaopings" v-else>
      <van-search
        placeholder="搜索相关职位"
        show-action="true"
      @search="onSearch"
        use-action-slot
        @change="onChange"
      custom-class="va-search"
      >
      <div class="cancel-class" slot="action" @click="onSearch">搜索</div>
      </van-search>
      <div class="zhao">
       <a href="../zhaoping_company_msg/main?opt=zhiwei" class="zhao-item">
          <img src="../../asset/imgs/zhao_jianli.png" alt="" class="zhao-img">
          <div>职位管理</div>
        </a>
        <div class="zhao-item">
          <img src="../../asset/imgs/zhao_xiaoxi.png" alt="" class="zhao-img">
          <div>消息</div>
        </div>
        <a href="../zhaoping_company_msg/main?opt=record"  class="zhao-item" >
          <img src="../../asset/imgs/zhao_shengqi.png" alt="" class="zhao-img">
          <div>投递记录</div>
        </a>
        
         <a href="../zhaoping_jianli/main?opt=company" class="zhao-item">
          <img src="../../asset/imgs/zhao_sou.png" alt="" class="zhao-img">
          <div>企业介绍</div>
        </a>
      </div>
      <div class="tui">
        <div class="title">
          <div class="br"></div>
          <div>优选简历</div>
        </div>
        <div class="tui">
          <!-- 企业的 -->
          <a :href="'../zhaoping_jianli_detail/main?id='+item.customerUserId" class="tui-item van-hairline--top" v-for="(item,index) in comJianli" :key="index">
            <img v-if="item.headPhoto == ''" :src="base+item.headPhoto" alt="" class="tui-img">
            <img v-else src="../../asset/imgs/default_avatar.png" alt="" class="tui-img">
            <div class="cont">
              <div class="titles">
                <div>{{item.name}}</div>
                <div class="act" v-if="item.salaryMin != item.salaryMax">{{item.salaryMin}}-{{item.salaryMax}}元/月</div>
                <div class="act" v-else>{{item.salaryMin}}</div>
              </div>
              <div class="name">{{item.expectJobName}}   工龄{{item.workDay }}年 </div>
              <div class="addr">{{item.addr}}</div>
              <div class="brand">
                <div class="brand-item" v-for="(items,indexs) in item.brands" :key="indexs">{{items}}</div>
            </div>
            </div>
          </a>
          <div class="more  van-hairline--top" @click="moreZhiWei">查看更多职位</div>
        </div>
      </div>
        <div class="h-50"></div> 
  </div>
  <van-toast id="van-toast" />
    <van-dialog id="van-dialog" />
</div>
</template>
<script>

import Toast from '@/../static/dist/toast/toast'
import myLoad from '@/components/myLoad'
import Util from '@/utils/index'
import { baseUrl } from '@/utils/config'
import Dialog from '@/../static/dist/dialog/dialog'
export default {
  components: {
    myLoad
  },
  data () {
    return {
      id: 0,
      value: '',
      base: baseUrl+'/file/show/img/base/',
      orderType: 1,
      comJianli: [],
      comPage: 1,
      expectJobName: '', // 期待职位
      zhiweiList: [],
      zhiweiPage: 1,
      zhiweiOrderType: 1,
      zhiweiJobName: '',
      gsList: [],
      gsPage: 1,
      gsOrderType: 1,
      userInfo: {}
    }
  },
  // computed: {
  //   userInfo: ()=> {
  //     return Util.getStorage('userInfo')
  //   }
  // },
  methods: {
    onSearch() {
      if(this.id ==2) {
        this.expectJobName = this.value
        this.comPage = 1
        this.getJianli()
      } else if(this.id == 1) {
        this.zhiweiJobName  = this.value
        this.zhiweiPage = 1
        this.zhiweiOrderType = ''
        this.getZhiWei()
      }
     
    },
    onCancel() {
      this.value = ''
    }
    ,onChange(event) {
        this.value = event.mp.detail
    }
    ,getCompany() {
       Toast('正在加载...')
     const params = JSON.stringify({
        pageNum: `${this.gsPage}`,
        pageSize:"10",
        orderType: `${this.gsOrderType}`
       })
      this.$http.post(`/company/page/${this.userInfo.id}`,params,{
        headers:{
          'Access-Token':this.userInfo.token,
        }, //http请求头，
      }).then((res) => {
        let data = res.data
        this.loading = false
        if(data.resultCode == '0000000') {
            if(data.returnData.list.length != 0) {
              let base =  data.returnData.list
              for(let i in base) {
                  base[i].brands = base[i].treatments.split(',')
              }
              this.gsList = [...this.gsList, ...base]
              setTimeout(()=> {Toast.clear()},1000)
            } else {
              Toast('没有更多了')
            }
            
        } else {
          Toast(data.resultDesc)
        }
      })
    }
    ,getZhiWei () {
      Toast('正在加载...')
     const params = JSON.stringify({
        jobName:this.zhiweiJobName,
        pageNum: `${this.zhiweiPage}`,
        pageSize:"10",
        orderType: `${this.zhiweiOrderType}`
       })
      this.$http.post(`/recruitment/page/${this.userInfo.id}`,params,{
        headers:{
          'Access-Token':this.userInfo.token,
        }, //http请求头，
      }).then((res) => {
        let data = res.data
        this.loading = false
        if(data.resultCode == '0000000') {
            if(data.returnData.list.length != 0) {
              let base =  data.returnData.list
              for(let i in base) {
                  base[i].brands = Util.getCertifSort(base[i].skillRequires)

              }

              if(this.zhiweiJobName != '') {
                if(this.zhiweiPage == 1) {
                  this.zhiweiList = base
                } else {
                   this.zhiweiList = [...this.zhiweiList, ...base]
                }
              } else {
                 this.zhiweiList = [...this.zhiweiList, ...base]
              }
              setTimeout(()=> {Toast.clear()},1000)
            } else {
              Toast('没有更多了')
            }
            
        } else {
          Toast(data.resultDesc)
        }
      })
    }
    ,getJianli () {
      
      Toast('正在加载...')
     const params = JSON.stringify({
       "expectJobName": this.expectJobName,
       "pageNum":`${this.comPage}`,
       "pageSize":"10",
        "orderType": `${this.orderType}`
       })
      this.$http.post(`/resume/page/${this.userInfo.id}`,params,{
        headers:{
          'Access-Token':this.userInfo.token,
        }, //http请求头，
      }).then((res) => {
        let data = res.data
        this.loading = false
        if(data.resultCode == '0000000') {
            if(data.returnData.list.length != 0) {

              let base =  data.returnData.list
              for(let i in base) {
                  base[i].brands = Util.getCertifSort(base[i].certificates)
                  base[i].addr = this.getworkCompany(base[i].resumeWorkExpList)
                  base[i].workDay = this.getworkDays(base[i].outWorkDay)
              }

              if(this.expectJobName != '') {
                if(this.comPage == 1) {
                  this.comJianli = base
                } else {
                   this.comJianli = [...this.comJianli, ...base]
                }
              } else {
                 this.comJianli = [...this.comJianli, ...base]
              }
              setTimeout(()=> {Toast.clear()},1000)
            } else {
              Toast('没有更多了')
            }
            
        } else {
          Toast(data.resultDesc)
        }
      })
    }
    ,getworkCompany(resumeWorkExpList) {
      if(resumeWorkExpList)  return resumeWorkExpListk[0].companyName
      return ''
    }
    ,getworkDays(getworkDay) {
      const day = new Date(getworkDay).getFullYear()
      return ~~(new Date().getFullYear() -day)
    }
    ,moreZhiWei() {
      if(this.id == 2) {
        this.comPage += 1
        this.getJianli()
      } 
    }
    ,more(index) {
      switch(index) {
        case 1: 
        this.zhiweiPage +=1
        this.getZhiWei()
        break
        case 2:
          ++this.gsPage
          this.getCompany()
        break
      }
    }
    ,checkCompany() {
      if(this.userInfo.companyId == null || this.userInfo.companyName == null) {
        Dialog.confirm({
            message: '暂未认证企业，请先认证'
          }).then(() => {
            // on confirm
            Util.redTo('../my_rengzheng/main')
          }).catch(() => {
            // on cancel
            Util.back()
          });
      }
    }
  },

  mounted () {
    this.userInfo = Util.getStorage('userInfo')
    this.id = this.$mp.query.id
    if(this.id ==2) {
      this.comJianli = []
      this.getJianli()
      Util.setTitle('技术人员招聘')
      this.checkCompany()
    } else {
      this.zhiweiList = []
      this.gsList = []
      Util.setTitle('个人求职')
      this.getZhiWei()
      this.getCompany()
    }
  }
 
}
</script>

<style  lang="less">
.zhaopings {
  background: #EEEFF4;
  .va-search {
    background: #FDC915 !important;
  }
  .cancel-class {
    color: #ffffff;
  }
  .zhao {
    display: flex;
    padding: 20px 27px;
    background: #ffffff;
    .zhao-item {
      width: 25%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color:#757980;
      font-size: 14px;
      .zhao-img {
        width: 29px;
        height: 29px;
        margin-bottom: 12px;
      }
    }
  }
  .tui {
    margin-top:6px;
    background: #ffffff;
    .title {
      display: flex;
      align-items: center;
      padding:  11px 20px;
      color:#1C2627;
      font-size: 16px; 
      .br {background: #FDC915;width: 2px;height: 13px;margin-right:10px; }
    }
    .tui-item {
      padding: 8px 25px 15px 25px;
      display: flex;
      .tui-img {
        width:36px;
        height: 36px;
        border-radius: 50%;
      }
      .cont {
        display: flex;
        flex: 1;
        flex-direction: column;
        padding-left: 10px;
        .titles {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color:#1C2627;
          font-size: 15px;
          .act {
            font-size: 13px;
            color:#FDC915;
          }
        }
        .name {color: #757980;font-size: 14px;}
        .addr {color: #A1A2A4;font-size: 13px;}
        .brand {
          display: flex;
          flex-wrap: wrap;
          padding-top:5px;
          .brand-item {
            min-width: 53px;
            padding: 0 5px;
            height: 17px;
            font-size: 11px;
            text-align: center;
            background: #EEEFF4;
            margin-right: 10px;
            margin-bottom: 10px;
          }
        }
      }
    }
    .more {
      display: flex;
      padding: 5px 0;
      justify-content: center;
      color:#FF4444;
      font-size: 14px;
    }
  }
  .h-50 {height: 50px;background: #ffffff;}
}

</style>
