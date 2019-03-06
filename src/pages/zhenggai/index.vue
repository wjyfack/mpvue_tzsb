<template>
  <div class="zhengai">
    <van-tabs swipeable  active="0" color="#FDC915" @change="onChange">
      <van-tab title="待整改"> 
        <div class="zhen">
          <a :href="'../zhenggai_detail/main?isEdit=1&id='+item.sourceCommandId+'&ids='+item.id+'&sign='+item.sourceSySign"  class="zhen-item" v-for="(item,index) in list" :key="item.id">
            <div class="top van-hairline--bottom">
              <div class="title">整改截止日期 {{item.commandChangedEndDate}}</div>
              <div class="status" v-if="item.rectifyStatus == 0">
                <img src="../../asset/imgs/z_deng.png" alt="" class="img">
                <div>待整改</div>
              </div>
              <div class="status" v-else-if="item.rectifyStatus == 2">
                <img src="../../asset/imgs/z_cuo.png" alt="" class="img">
                <div>不通过,重新提交</div>
              </div>
              <div class="status" v-else-if="item.rectifyStatus == 1">
                <img src="../../asset/imgs/z_yi.png" alt="" class="img">
                <div>已提交</div>
              </div>
              <div class="status"  v-else>
                <img src="../../asset/imgs/z_dui.png" alt="" class="img">
                <div>已通过</div>
              </div>
            </div>
            <div class="cont">
              <div class="title van-ellipsis">指令书{{item.commandNo}}</div>
              <div class="desc van-multi-ellipsis--l2">{{item.commandDeviceProblem}}</div>
            </div>
          </a>
          <div class="no-driver" v-if="parOneDev">暂无设备</div>
          <my-load :Loading="parOneLoad" :Bottom="parOneBottom"> </my-load>
        </div> 
      </van-tab>
      <van-tab title="已提交">
      <div class="zhen">
          <a :href="'../zhenggai_detail/main?isEdit=0&id='+item.sourceCommandId+'&ids='+item.id+'&sign='+item.sourceSySign"  class="zhen-item" v-for="(item,index) in listTi" :key="item.id">
            <div class="top van-hairline--bottom">
              <div class="title">整改截止日期 {{item.commandChangedEndDate}}</div>
              <div class="status" v-if="item.rectifyStatus == 0">
                <img src="../../asset/imgs/z_deng.png" alt="" class="img">
                <div>待整改</div>
              </div>
              <div class="status" v-else-if="item.rectifyStatus == 2">
                <img src="../../asset/imgs/z_cuo.png" alt="" class="img">
                <div>不通过,重新提交</div>
              </div>
              <div class="status" v-else-if="item.rectifyStatus == 1">
                <img src="../../asset/imgs/z_yi.png" alt="" class="img">
                <div>已提交</div>
              </div>
              <div class="status"  v-else>
                <img src="../../asset/imgs/z_dui.png" alt="" class="img">
                <div>已通过</div>
              </div>
            </div>
            <div class="cont">
              <div class="title van-ellipsis">指令书{{item.commandNo}}</div>
              <div class="desc van-multi-ellipsis--l2">{{item.commandDeviceProblem}}</div>
            </div>
          </a>
          <div class="no-driver" v-if="parTwoDev">暂无设备</div>
          <my-load :Loading="parTwoLoad" :Bottom="parTwoBottom"> </my-load>
        </div>   
      </van-tab>
      <van-tab title="全部">
        <div class="zhen">
          <a :href="'../zhenggai_detail/main?isEdit=0&id='+item.sourceCommandId+'&ids='+item.id+'&sign='+item.sourceSySign"  class="zhen-item" v-for="(item,index) in listQuan" :key="item.id">
            <div class="top van-hairline--bottom">
              <div class="title">整改截止日期 {{item.commandChangedEndDate}}</div>
              <div class="status" v-if="item.rectifyStatus == 0">
                <img src="../../asset/imgs/z_deng.png" alt="" class="img">
                <div>待整改</div>
              </div> 
              <div class="status" v-else-if="item.rectifyStatus == 2">
                <img src="../../asset/imgs/z_cuo.png" alt="" class="img">
                <div>不通过,重新提交</div>
              </div>
              <div class="status" v-else-if="item.rectifyStatus == 1">
                <img src="../../asset/imgs/z_yi.png" alt="" class="img">
                <div>已提交</div>
              </div>
              <div class="status"  v-else>
                <img src="../../asset/imgs/z_dui.png" alt="" class="img">
                <div>已通过</div>
              </div>
            </div>
            <div class="cont">
              <div class="title van-ellipsis">指令书{{item.commandNo}}</div>
              <div class="desc van-multi-ellipsis--l2">{{item.commandDeviceProblem}}</div>
            </div>
          </a>
          <div class="no-driver" v-if="parTreDev">暂无设备</div>
          <my-load :Loading="parTreLoad" :Bottom="parTreBottom"> </my-load>
        </div> 
      </van-tab>
    </van-tabs>
    <tab-bar active="1"/>
  </div>
</template>
<script>
import Util from '@/utils/index'
import tabBar from '@/components/tabBar'
import myLoad from '@/components/myLoad'
export default {
  components: {
    tabBar,
    myLoad
  },
  data () {
    return {
      active: 0,
      list: [],
      listTi: [],
      listQuan: [],
      pageNum: 1,
      zhengNum:0,
      tijiaoNum: 0,
      allNum: 0,
      status: 0,
      parOneDev: false,
      parOneLoad: false,
      parOneBottom: false,
      parTwoDev: false,
      parTwoLoad: false,
      parTwoBottom: false,
       parTreDev: false,
      parTreLoad: false,
      parTreBottom: false,
      chaTi: false,
      chaQuan: false,
      userInfo: {}
    }
  },
  // computed: {
  //   userInfo: () => {
  //     return Util.getStorage('userInfo')
  //   }
  // },
  methods: {
    onChange(event) {
     // console.log(event,this.active)
      const index = event.mp.detail.index
      this.active = index
    }
    ,getData(active) {
      switch(active) {
        case 0:
        this.status = 0
        this.pageNum = ++this.zhengNum
        this.parOneLoad = true
        break
        case 1: 
        this.status = 1
        this.pageNum = ++this.tijiaoNum
        break
        case 2:
        this.status = ''
        this.pageNum = ++this.allNum
        break
      }
      console.log(this.pageNum,this.allNum,active)
      const params = JSON.stringify({
        "pageSize":"10",
        "pageNum":`${this.pageNum}`,
        "DeviceUseName": this.userInfo.realName,
        "rectifyStatus":`${this.status}`})
         this.$http.post(`/task/command/page/${this.userInfo.id}`,params,{
            headers:{
              'Access-Token':this.userInfo.token,
            }, //http请求头，
          }).then((res) => {
            let data = res.data
            // console.log(data)
            if(data.resultCode == '0000000') {
              let returnData = data.returnData
              try {
               for(let i in returnData) {
                 returnData[i].commandChangedEndDate = this.selectDate(returnData[i].commandChangedEndDate)
               }
              }catch(e) {
               console.log(e)
              }
              
             
             switch(active) {
                case 0: 
                  if(returnData.length == 0) {
                      if(this.pageNum == 1) {
                        this.parOneDev = true
                      } else {
                        this.parOneBottom = true
                        --this.zhengNum
                      }
                     
                  } else {
                  this.list = [...this.list,...returnData]
                  }
                   this.parOneLoad = false
                  break
                case 1: 
                    if(returnData.length == 0) {
                        if(this.pageNum == 1) {
                          this.parTwoDev = true
                        } else {
                          this.parTwoBottom = true
                          --this.tijiaoNum
                        }
                    } else {
                    this.listTi = [...this.listTi,...returnData]
                    }
                     this.parTwoLoad = false
                  break
                case 2: 
                    if(returnData.length == 0) {
                        if(this.pageNum == 1) {
                          this.parTreDev = true
                        } else {
                          this.parTreBottom = true
                          --this.allNum
                        }
                      
                    } else {
                    this.listQuan = [...this.listQuan,...returnData]
                    }
                      this.parTreLoad = false
                  break
              } 
            }
          }).catch(e => {
           switch(active) {
            case 1:
             this.parOneDev= true
             this.parOneLoad= false
            case 2:
             

             this.parTwoDev= true
             this.parTwoLoad= false
            case 3:
              this.parTreDev= true
             this.parTreLoad= false

           }
         })
    },
    selectDate(str) {
     return str ?str.substring(0,10) : ''
   }
  },

  created () {
  }
  ,onShow() {
    this.userInfo = Util.getStorage('userInfo')
    this.list = []
    this.listTi = []
    this.listQuan = []
    this.zhengNum =0
    this.tijiaoNum =0
    this.allNum =0
    
    this.parOneDev= false
    this.parOneLoad= false
    this.parOneBottom= false
    this.parTwoDev= false
    this.parTwoLoad= false
    this.parTwoBottom= false
    this.parTreDev= false
    this.parTreLoad= false
    this.parTreBottom= false

    //setTimeout(()=> {
      this.getData(0)
      this.getData(1)
      this.getData(2)
    //},300)
    
  }
  ,onReachBottom () {
    this.getData(this.active)
  }
}
</script>

<style  lang="less">
.zhengai {
  padding-bottom:65px;
  .zhen {
    min-height: 200px;
    .zhen-item {
      border-top: 3px solid #EEEFF4;
      .top {
        display: flex;
        padding: 10px 20px;
        justify-content: space-between;
        .title {font-size: 14px; color:#A1A2A4;}
        .status {
          font-size: 13px;
          color:#1C2627;
          display: flex;
          align-items: center;
          .img {width:18px;height: 18px;margin-right: 5px;}
        }
      }
      .cont {
        padding:  8px 20px;
        .title {
         
          font-size: 16px;
          color:#1C2627;
        }
        .desc {
           padding: 6px 0;
           font-size: 14px;
           color:#757980;
        }
      }
    }
   
  }
   .no-driver {
      border-top: 3px solid #EEEFF4;
      font-size: 12px;
      color:#A1A2A4;
      display: flex;
      justify-content: center;
      padding: 15px;
      background: #ffffff;
    }
}
</style>
