<template>
  <div class="zhengai_detail">
    <div class="zhengai_bar">
        <div class="bar">
           <div class="bar-item" :class="{'act':show}" @click="changTab">任务详情</div>
           <div class="bar-item" :class="{'act':!show}" @click="changTab">提交整改</div>
        </div>
    </div>
      <van-transition :show="show" name="slide-left">
        <div class="info" >
          <div class="header van-hairline--bottom">
            <div class="title">指令书</div>
          </div>
          <div class="mes">
            <div class="mes-item">
              <div class="title">指令书编号 </div>
              <div class="input">{{command.commandNo}}</div>
            </div>
            <div class="mes-item">
              <div class="title">指令书流水号</div>
              <div class="input">{{command.commandNoNum}}</div>
            </div>
            <div class="mes-item">
              <div class="title">隐患描述</div>
              <div class="input">{{command.commandDeviceProblem}}</div>
            </div>
            <div class="mes-item">
              <div class="title">违反条例</div>
              <div class="input">{{command.commandAgainstRulesInfo}}</div>
            </div>
            <div class="mes-item">
              <div class="title">处罚依据条例</div>
              <div class="input">{{command.commandCcordingRulesInfo}} </div>
            </div>
            <div class="mes-item">
              <div class="title">整改措施</div>
              <div class="input">{{command.commandChangedInfo}}</div>
            </div>
            <div class="mes-item">
              <div class="title">整改截止日期</div>
              <div class="input">{{command.commandChangedEndDate}}</div>
            </div>
            <div class="mes-item">
              <div class="title">指令书日期</div>
              <div class="input">{{command.commandDate}}</div>
            </div>
            <div class="mes-item">
              <div class="title">指令书图片</div>
              <div class="input">
                <img :src="command.commandImgUrl" alt="" class="img">
              </div>
            </div>
          </div>
        </div>
        <div class="info info-top" >
          <div class="header van-hairline--bottom">
            <div class="title">使用单位</div>
          </div>
          <div class="mes">
            <div class="mes-item">
              <div class="title">使用单位名称 </div>
              <div class="input">{{command.companyUseNewName}}</div>
            </div>
            <div class="mes-item">
              <div class="title">使用单位地址 </div>
              <div class="input">{{command.companyUseFullAddress}}</div>
            </div>
          </div>
        </div>
        <div class="info info-top" >
          <div class="header van-hairline--bottom">
            <div class="title">使用单位</div>
          </div>
          <div class="mes">
            <div class="mes-item" v-for="(item,index) in command.shebeis" :key="index">
              <div class="title">设备{{index+1}} </div>
              <div class="input">{{item}}</div>
            </div>
          </div>
        </div>
        <div class="info info-top" >
          <div class="header van-hairline--bottom">
            <div class="title">审核结果</div>
          </div>
          <div class="mes">
            <div class="mes-item">
              <div class="title">任务状态 </div>
              <div class="input">{{command.rectifyAuditInfo}}</div>
            </div>
            <div class="mes-item">
              <div class="title">审核说明 </div>
              <div class="input">{{command.rectifyAuditInfo}}</div>
            </div>
          </div>
          <div class="h-50"></div>
        </div>
      </van-transition>
      <van-transition :show="!show" name="slide-right">
        <div class="info info-top" v-for="(item,index) in tasks" :key="item.sourceCheckId" >
          <div class="header van-hairline--bottom">
            <div class="title">任务{{index+1}}</div>
          </div>
          <div class="mes">
            <div class="mes-item">
              <div class="title">任务编号 </div>
              <div class="input">{{item.checkNo}} </div>
            </div>
            <div class="mes-item">
              <div class="title">任务要求 </div>
              <div class="input">{{item.trackIntro}}</div>
            </div>
            <div class="mes-item">
              <div class="title">设备编号 </div>
              <div class="input">{{item.deviceCertNo}}</div>
            </div>
            <div class="mes-item">
              <div class="title">单位内编号 </div>
              <div class="input">{{item.remask}}</div>
            </div>
            <div class="pic-item">
              <div class="title">整改图片 </div>
              <div class="input_img">
                <div class="add">
                    <img src="../../asset/imgs/add.png" alt="" class="add_img">
                </div>
              </div>
            </div>
             <div class="mes-item">
              <div class="title"> <div>整改备注</div><img src="../../asset/imgs/xiugaih.png" alt="" class="t_img">  </div>
              <input class="input" value="" placeholder="已经根据要求整改">
            </div>
          </div>
        </div>
        <div class="h-t-50"></div>
        <div class="set-fixed">
            <div class="btn" @click="onBack">上一步</div>
            <div class="btn btn-c">提交整改反馈</div>
          </div>
        </van-transition>

  </div>
</template>
<script>
import Util from '@/utils/index'

export default {
  data() {
    return {
      active: 0,
      show: true,
      id: 0,
      sign: '',
      command: {
        shebeis: []
      },
      tasks:[]
    }
  },
  computed: {
    userInfo: () => {
      return Util.getStorage('userInfo')
    }
  },
  methods: {
   
    changTab() {
      this.show = !this.show
    }
    ,getTask() {
        const params = Util.getData({
          "sourceSySign":this.sign,
          "sourceCommandId":this.id})
         this.$http.post(`/task/check/get/{${this.userInfo.id}}`,params,{
            headers:{
              'Access-Token':this.userInfo.token,
            }, //http请求头，
          }).then((res) => {
            let data = res.data
            if(data.resultCode == '0000000') {
                this.tasks =  data.returnData
            }
          })
    }
    ,getDetail() {
        const params = Util.getData({
          "id":this.id})
         this.$http.post(`/task/command/dt/{${this.userInfo.id}}`,params,{
            headers:{
              'Access-Token':this.userInfo.token,
            }, //http请求头，
          }).then((res) => {
            let data = res.data
            if(data.resultCode == '0000000') {
              data.returnData.shebeis = this.getSheBeis(data.returnData.deviceCertNoList)
              this.command = data.returnData
            }
            
          })
    }
    ,getSheBeis(data) {
      return data.split(',')
    }
  },

  mounted () {
    this.id = this.$mp.query.id
    this.sign = this.$mp.query.sign
    this.getDetail()
    this.getTask()
  }


}
</script>

<style  lang="less">
.zhengai_detail {
  .zhengai_bar {
    padding: 7px 0;
    display: flex;
    justify-content: center;
    background: #ffffff;
    .bar {
      width: 152px;
      height: 26px;
      border: 1px solid #FDC915;
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      .bar-item {
        background: #ffffff;
        font-size: 14px;
        color:#A1A2A4;
        width:50%;
        text-align: center;
        height: 26px;
        line-height: 26px;
      }
      .act {
        background: #FDC915;
        color:#1C2627;
      }
    }
  }
  .zhengai_detail_tab {
    font-size: 16px;
    background: #ffffff;
  }
  background: #EEEFF4;
   .info {
     .header {
       padding:  10px 20px;
       background: #ffffff;
        .title {
          font-size: 16px;
          color:#1C2627;
          padding-left: 5px;
          position: relative;
          line-height: 1;
          border-left:  2px solid #FDC915;
          display: flex;
          align-items: center;
          .img {width:18px;height: 18px;margin-left: 15px;vertical-align: middle;}
        }
     
     }
     .mes {
         padding: 10px 25px  ;
         background: #ffffff;
        .mes-item  {
          display: flex;
          align-items: top;
          .title {font-size: 14px;color:#1C2627; min-width: 120px; display: flex; .t_img {margin-left: 5px;width:18px;height: 18px;}}
          .input {
            flex: 1;
            height: auto;
            min-height: 18px;
            font-size: 14px;
            color:#757980;
            .img {
              width: 64px;
              height: 85px;
            }
          }
        }
        .pic-item {
          .title {font-size: 14px;color:#1C2627; min-width: 120px;}
          .input_img {
            padding: 8px 0;
            .add {
              width:80px;
              height: 80px;
              font-size: 14px;
              background: #EEEFF4;
              position: relative;
              display: flex;
              justify-content: center;
              align-items: center;
              .add_img{
                width: 24px;
                height: 24px;
              }
            }
            
          }
        }
     }

   }
   .info-top{
     margin-top: 14px;
   }
   .h-50 {
     height: 50px;
    background: #EEEFF4;
   }
   .h-t-50 {height: 50px;background: #ffffff;}
   .set-fixed {
     position: fixed;
     bottom: 0;
     left: 0;
     right: 0;
      background: #ffffff;
      height: 55px;
      z-index: 99;
      .btn {
        width: 50%;
        float: left;
        text-align: center;
       color: #1C2627;
       font-size: 16px;
       line-height: 55px;
      }
      .btn-c {background: #FDC915;}
   }
}
</style>
