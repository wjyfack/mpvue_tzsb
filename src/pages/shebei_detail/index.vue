<template>
<div class="detail">
<div class="info" :class="{'info-active': isEdit}">
  <div class="header van-hairline--bottom " >
    <div class="title">基本信息 <img v-if="isEdit" src="../../asset/imgs/xiugai.png" alt="" class="img"></div>
  </div>
  <div class="mes">
    <div class="mes-item">
      <div class="title">使用登记证</div>
      <input type="text" class="input" v-model="baseInfo.deviceCertNo" :disabled="!isEdit">
    </div>
    <div class="mes-item">
      <div class="title">下次年检时间</div>
      <input type="text" class="input" v-model="baseInfo.deviceNextYearTestDate" :disabled="!isEdit">
    </div>
     <div class="mes-item">
      <div class="title">设备名称或型号</div>
      <input type="text" class="input" v-model="baseInfo.deviceName" :disabled="!isEdit">
    </div>
     <div class="mes-item">
      <div class="title">设备类别</div>
      <input type="text" class="input" v-model="baseInfo.deviceTypeName2" :disabled="!isEdit">
    </div>
     <div class="mes-item">
      <div class="title">单位内编号</div>
      <input type="text" class="input" value="1＃" :disabled="!isEdit">
    </div>
     <div class="mes-item">
      <div class="title">产品编号</div>
      <input type="text" class="input" v-model="baseInfo.deviceNo" :disabled="!isEdit">
    </div>
     <div class="mes-item">
      <div class="title">设备代码</div>
      <input type="text" class="input" v-model="baseInfo.deviceRegNo" :disabled="!isEdit">
    </div>
     <div class="mes-item">
      <div class="title">设备位置</div>
      <textarea  class="textarea" v-model="baseInfo.deviceFullAddress"  :disabled="!isEdit"> </textarea>
    </div>
     <div class="mes-item">
      <div class="title">设备状态</div>
      <input type="text" class="input" v-model="baseInfo.status" >
    </div>
     <div class="mes-item">
      <div class="title">制造时间</div>
      <input type="text" class="input" v-model="baseInfo.deviceProduceDate" :disabled="!isEdit">
    </div>
       <div class="mes-item">
      <div class="title">制造单位</div>
      <input type="text" class="input" v-model="baseInfo.deviceProduceName" :disabled="!isEdit">
    </div>
       <div class="mes-item">
      <div class="title">安装单位</div>
      <input type="text" class="input" v-model="baseInfo.deviceInstallName" :disabled="!isEdit">
    </div>

  </div>
</div>
<div class="info info-top"  :class="{'info-active': isEdit}">
  <div class="header van-hairline--bottom">
    <div class="title">设备参数信息 <img v-if="isEdit" src="../../asset/imgs/xiugai.png" alt="" class="img"></div>
  </div>
  <div class="mes">
    <div class="mes-item" v-for="(item,index) in baseInfo.deviceParams" :key="index">
      <div class="title">{{item.name}} </div>
      <input type="text" class="input" v-model="item.value" :disabled="!isEdit">
    </div>
    <!-- <div class="mes-item">
      <div class="title">额定速度</div>
      <input type="text" class="input" value="" :disabled="!isEdit">
    </div>
     <div class="mes-item">
      <div class="title">层站层</div>
      <input type="text" class="input" value="" :disabled="!isEdit">
    </div>
     <div class="mes-item">
      <div class="title">设备类别</div>
      <input type="text" class="input" :value="baseInfo.deviceTypeName3" :disabled="!isEdit">
    </div> -->
  </div>
</div>
<div class="info info-top"  :class="{'info-active': isEdit}" >
  <div class="header van-hairline--bottom">
    <div class="title">定期检验信息</div>
  </div>
  <div class="mes">
    <div class="mes-item">
      <div class="title">上次检验结论 </div>
      <input type="text" class="input" v-model="baseInfo.deviceLastYearTestResult" disabled>
    </div>
    <div class="mes-item">
      <div class="title">上次检验日期</div>
      <input type="text" class="input" v-model="baseInfo.deviceLastYearTestDate" disabled>
    </div>
     <div class="mes-item">
      <div class="title">下次检验日期</div>
      <input type="text" class="input" v-model="baseInfo.deviceNextYearTestDate" disabled>
    </div>
  </div>
</div>
<div class="check" @click="onCheck"> <span v-if="!isEdit" >是否信息有误？</span></div>
<van-transition :show="isEdit" name="slide-up">
  <div class="set-fixed">
    <div class="btn" @click="onBack">上一步</div>
    <div class="btn btn-c" @click="onSubmit">提交设备信息</div>
  </div>
</van-transition>
 <van-toast id="van-toast" />
</div>
</template>

<script>
import Util from '@/utils/index'
import Toast from '@/../static/dist/toast/toast';
export default {
  data () {
    return {
      isEdit: false
      ,id: 0
      ,baseInfo: {
        deviceCertNo:'',
        deviceFullAddress:'',
        deviceInstallName:'',
        deviceLastYearTestDate:'',
        deviceLastYearTestResult:'',
        deviceName:'',
        deviceNextYearTestDate:'',
        deviceNo:'',
        deviceParam:'',
        deviceProduceDate:'',
        deviceProduceName:'',
        deviceProduceNo:'',
        deviceRegNo:'',
        deviceStatus:'',
        deviceSystemCode:'',
        deviceType1:'',
        deviceType2:'',
        deviceType3:'',
        deviceTypeName1:'',
        deviceTypeName2:'',
        deviceTypeName3:'',
        deviceUseName:'',

      }
    }
  },
 computed: {
    userInfo: function() {
      return Util.getStorage('userInfo')
    }
  },
  methods: {
    onCheck() {
      this.isEdit = true
      wx.pageScrollTo({
        scrollTop: 0
      })
    }
    ,onBack() {
      this.isEdit = false
      this.getData()
    }
    ,getData() {
       const params = `{"id":"${this.id}"}`
       this.$http.post(`/device/getDt/${this.userInfo.id}`,params,{
        headers:{
          'Access-Token':this.userInfo.token,
        }, //http请求头，
      }).then((res) => {
        let data = res.data
        if(data.resultCode == '0000000') {
          console.log(data.returnData)
          data.returnData.status = this.checkStatus(data.returnData.deviceStatus)
          data.returnData.deviceFullAddress = this.checkAddr(data.returnData.deviceFullAddress)
          data.returnData.deviceParams = this.checkParam(data.returnData.deviceParam)
          this.baseInfo = data.returnData
        } else {
          Toast(data.resultDesc)
        }
      })
    }
    ,onSubmit() {
      const baseInfo = this.baseInfo
      let data = {
        deviceCertNo: baseInfo.deviceCertNo,
        deviceNextYearTestDate: baseInfo.deviceNextYearTestDate,
        deviceName: baseInfo.deviceName,
        deviceType2: baseInfo.deviceType2,
        deviceTypeName2: baseInfo.deviceTypeName2,
        deviceNo: baseInfo.deviceNo,
        deviceProduceNo: baseInfo.deviceProduceNo,
        deviceRegNo: baseInfo.deviceRegNo,
        deviceProduceDate: baseInfo.deviceProduceDate,
        deviceProduceName:baseInfo.deviceProduceName,
        deviceInstallName: baseInfo.deviceInstallName,  
        deviceId: baseInfo.id,
        deviceArea1: baseInfo.deviceUseArea1,
        deviceAreaName1: baseInfo.deviceUseAreaName1,
        deviceArea2: baseInfo.deviceUseArea2,
        deviceAreaName2: baseInfo.deviceUseAreaName2,
        deviceArea3: baseInfo.deviceUseArea3,
        deviceAreaName3: baseInfo.deviceUseAreaName3,
        deviceArea4: baseInfo.deviceUseArea4,
        deviceAreaName4: baseInfo.deviceUseAreaName4,
        deviceAddress: baseInfo.deviceFullAddress,
      }
      for(let i  in baseInfo.deviceParams) {
        data[`paramName${i+1}`] = baseInfo.deviceParams[i].name
        data[`paramValue${i+1}`] = baseInfo.deviceParams[i].value
      }
      console.log(data)
       const params = Util.getData(data)
       this.$http.post(`/device/update/${this.userInfo.id}`,params,{
        headers:{
          'Access-Token':this.userInfo.token,
        }, //http请求头
      }).then((res) => {
        let data = res.data
        if(data.resultCode == '0000000') {
          console.log(data.returnData)
   
        } else {
          Toast(data.resultDesc)
        }
      })
    }
    ,checkStatus(status) {
       let name = ''
       switch(~~status) {
         case 1:
          name='在用'
          break
         case 2:
          name='停用'
          break
         case 3:
          name='检测中'
          break
         case 4 :
          name='整改中'
          break
         case 5:
          name='停电话'
          break
         case 6:
          name='停目录停用'
          break
         case 7:
          name='停检验员'
          break
           case 8:
          name='停'
          break
         case 9:
          name='拆除'
          break
         case 10:
          name='注销'
          break
         case 11:
          name='已移装改造'
          break
         case 12:
          name='简单容器'
          break
           case 13:
          name='待核实'
          break
          default:
          name = '未知'
          break
       }
       return name
    }
    ,checkAddr(addr) {
      return addr.split('/').join('')
    }
    ,checkParam(params) {
        let data = []
        for(let i in params) {
          data.push({name: i, value:params[i]})
        }
        return data
    }
  },

  mounted () {
    this.id = this.$mp.query.id
    this.getData()
    this.isEdit = false
  }
}
</script>

<style scoped  lang="less">
.detail {
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
          align-items: center;
          .title {font-size: 14px;color:#1C2627; min-width: 120px;}
          .input {
            flex: 1;
            height: auto;
            min-height: 18px;
            font-size: 14px;
            color:#757980;
          }
          .textarea {
            flex: 1;
            height:  30px;
            font-size: 14px;
            color:#757980;
          }
        }  
     }

   }
   .info-top{
     margin-top: 14px;
   }
   .info-active {
     .header .title {
         border-color: #FF4444;
     }
   }
   .check {
     background: #EEEFF4;
     text-align: center;
     color:#FF4444;
     font-size: 14px;
     padding-top: 10px;
     padding-bottom: 100px;
   }
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
