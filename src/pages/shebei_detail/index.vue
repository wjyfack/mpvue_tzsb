<template>
<div class="detail">
<div class="info" :class="{'info-active': isEdit}">
  <div class="header van-hairline--bottom " >
    <div class="title">基本信息 <img v-if="isEdit" src="../../asset/imgs/xiugai.png" alt="" class="img"></div>
  </div>
  <div class="mes">
    <div class="mes-item">
      <div class="title">使用登记证</div>
      <input type="text" class="input" v-model="baseInfo.deviceCertNo" :disabled="!isEdit" :placeholder="isEdit?'请输入使用登记证':''">
    </div>
     <div class="mes-item">
      <div class="title">设备名称或型号</div>
      <input type="text" class="input" v-model="baseInfo.deviceModel " :disabled="!isEdit" :placeholder="isEdit?'请输入设备名称或型号':''">
    </div>
     <div class="mes-item">
      <div class="title">设备类别</div>
      <input type="text" class="input" v-model="baseInfo.deviceTypeName2" :disabled="!isEdit" :placeholder="isEdit?'请输入设备类别':''">
    </div>
     <div class="mes-item">
      <div class="title">单位内编号</div>
      <input type="text" class="input" v-model="baseInfo.deviceNo" :disabled="!isEdit" :placeholder="isEdit?'请输入单位内编号':''">
    </div>
     <div class="mes-item">
      <div class="title">产品编号</div>
      <input type="text" class="input" v-model="baseInfo.deviceProduceNo" :disabled="!isEdit" :placeholder="isEdit?'请输入产品编号':''">
    </div>
     <div class="mes-item">
      <div class="title">设备代码</div>
      <input type="text" class="input" v-model="baseInfo.deviceRegNo" :disabled="!isEdit" :placeholder="isEdit?'请输入设备代码':''">
    </div>
     <div class="mes-item">
      <div class="title">设备位置</div>
      <div class="addr">
          <div class="addr-ssq" @click="addrsSelect"><span>{{addrSelect}}</span><div class="triangle_border_down"></div></div>
          <textarea auto-height  class="textarea" v-model="baseInfo.deviceFullAddress"  :disabled="!isEdit" :placeholder="isEdit?'请输入设备位置':''"> </textarea>
      </div>
    
          
    </div>
     <div class="mes-item">
      <div class="title">设备状态</div>
      <div class="input" v-if="!isEdit">{{baseInfo.status}} </div>
     
      <picker v-else @change="bindPickerChange" value="0" :range="statusArr">
         <div class="input" >{{baseInfo.status}} </div>
      </picker>
    </div>
     <div class="mes-item">
      <div class="title">制造时间</div>
      <input type="text" class="input" v-model="baseInfo.deviceProduceDate" :disabled="!isEdit" :placeholder="isEdit?'请输入制造时间如:1990-01-01':''">
    </div>
       <div class="mes-item">
      <div class="title">制造单位</div>
      <input type="text" class="input" v-model="baseInfo.deviceProduceName" :disabled="!isEdit" :placeholder="isEdit?'请输入制造单位':''">
    </div>
       <div class="mes-item">
      <div class="title">安装单位</div>
      <input type="text" class="input" v-model="baseInfo.deviceInstallName" :disabled="!isEdit" :placeholder="isEdit?'请输入安装单位':''">
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
<div class="check" @click="onCheck"> <span v-if="!isEdit" >{{tips}}</span></div>
<van-transition :show="isEdit" name="slide-up">
  <div class="set-fixed">
    <div class="btn" @click="onBack">上一步</div>
    <div class="btn btn-c" @click="onSubmit">提交设备信息</div>
  </div>
</van-transition>
<van-transition :show="isAddr" name="slide-up">
  <div class="min-h">
    <van-picker show-toolbar :title="addrTitle" :columns="columns" @cancel="isAddr = false"
  @confirm="bindAddrChange" />
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
      ,isAddr: false
      ,isUpdate: 0
      ,tips: '是否信息有误？'
      ,isTips: false
      ,baseInfo: {
        deviceCertNo:'',
        deviceFullAddress:'',
        deviceInstallName:'',
        deviceLastYearTestDate:'',
        deviceLastYearTestResult:'',
        deviceName :'',
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
       
      },
       statusArr: [ "在用", "停用", "检测中", "整改中", "停电中", "停目录停用", "停检验员", "停", "拆除", "注销", '已移装改造' ,'简单容器','待核实','未知']
       ,addrSheng: [],
       addrShengId: 0,
       addrShi:[],
       addrShiId:0,
       addrQu:[],
       addrQuId:0,
       addrZhen:[],
       addrZhenId:0,
      columns: [],
      addrTitle: '请选择省',
      addrSelect: '请选择地址',
      userInfo: {}
    }
  },
//  computed: {
//     userInfo: function() {
//       return Util.getStorage('userInfo')
//     }
//   },

  methods: {
    onCheck() {
     if(this.isTips) {
      this.isTips = false
      this.tips = '查看设备待审核信息'
      this.getData()
      return ''
     }
     if(this.baseInfo.isUpdate == 1) {
       Toast('正在获取待审核信息')
       this.getUpdateData()
     } else {
      this.isEdit = true
       wx.pageScrollTo({
         scrollTop: 0
       })
     }
     
     
    }
   ,getUpdateData(isUpdate = this.baseInfo.isUpdate, applyId = this.baseInfo.updateApplyId) {
     const params = JSON.stringify({
//      id:`${this.id}`,
//      isUpdate: isUpdate,
//      updateApplyId: applyId
        id: applyId
     })
       this.$http.post(`/device/update/apply/param/${this.userInfo.id}`,params,{
        headers:{
          'Access-Token':this.userInfo.token,
        }, //http请求头，
      }).then((res) => {
        let data = res.data
        if(data.resultCode == '0000000') {
//          console.log(data.returnData)
          data.returnData.status = this.checkStatus(data.returnData.deviceStatus)
          data.returnData.deviceFullAddress = this.checkAddr(data.returnData.deviceFullAddress)
          data.returnData.deviceParams = this.checkParam(data.returnData.deviceParam)
          this.addrSelect = this.checkAddrSelect(data.returnData)
//          console.log(this.checkAddrSelect(data.returnData))
         if(!data.returnData.deviceFullAddress) {
          data.returnData.deviceFullAddress = data.returnData.deviceAddress
         }
          this.baseInfo = data.returnData
          this.tips = '返回设备详情'
          this.isTips = true
//          Toast.clear()
        } else {
          Toast(data.resultDesc)
        }
      })
   }
    ,bindPickerChange(event) {
      const val = ~~event.mp.detail.value+1
      this.baseInfo.deviceStatus = val
      this.baseInfo.status = this.checkStatus(val)

    }
    ,bindAddrChange(event) {
      const {index} = event.mp.detail
      switch(this.addrTitle) {
        case '请选择省':
         this.addrShengId = index
         this.addrTitle = '请选择市'
         this.getAddrChild(1,this.addrSheng[index].id)
        break
        case '请选择市':
         this.addrShiId = index
         this.addrTitle = '请选择区'
         this.getAddrChild(2,this.addrShi[index].id)
        break
         case '请选择区':
         this.addrQuId = index
         this.addrTitle = '请选择镇'
         this.getAddrChild(3,this.addrQu[index].id)
        break
        case '请选择镇':
         this.addrZhenId = index
         this.isAddr = false
          this.addrTitle = '请选择省'
          //  console.log(this.addrSheng[this.addrShengId].areaName)
           this.addrSelect = `${this.addrSheng[this.addrShengId].areaName}/${this.addrShi[this.addrShiId].areaName}/${this.addrQu[this.addrQuId].areaName}/${this.addrZhen[this.addrZhenId].areaName}`
        break
      }
    }
    ,addrsSelect() {
      if(!this.isEdit) return ''
      this.isAddr = true
    }
   ,getAddrChild(opt,id) {
     const params = JSON.stringify({id: id})
     this.$http.post(`/area/clild/get/${this.userInfo.id}`,params,{
        headers:{
          'Access-Token':this.userInfo.token,
        }, //http请求头，
      }).then((res) => {
        let data = res.data
          if(data.resultCode == '0000000') {
              let sheng  = data.returnData
              let arr = []
              for(let i in sheng) {
                let {areaName}  = sheng[i]
                arr = [...arr,areaName]
              }
              switch(opt) {
                case 1: // 市
                this.addrShi = sheng
                break;
                case 2: // 区
                this.addrQu = sheng
                break;
                case 3: // 镇
                this.addrZhen = sheng
                break;
              }
              this.columns = arr
          }
      })
   }

    ,onBack() {
      this.isEdit = false
      //Toast('返回未修改信息')
       this.getData()
    }
     ,getAddr() {
       const url = `/area/device/init/${this.userInfo.id}`
       this.$http.post(url,'',{
        headers:{
          'Access-Token':this.userInfo.token,
        }, //http请求头，
      }).then((res) => {
        let data = res.data
          if(data.resultCode == '0000000') {
              let sheng  = data.returnData.deviceArea1
              this.addrSheng = sheng
              let arr = []
              for(let i in sheng) {
                let {areaName}  = sheng[i]
                arr = [...arr,areaName]
              }
              this.columns = arr
          }
      })
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
          this.addrSelect = this.checkAddrSelect(data.returnData)
          console.log(this.checkAddrSelect(data.returnData))
          this.baseInfo = data.returnData
        } else {
          Toast(data.resultDesc)
        }
      })
    }
    ,onSubmit() {
      const baseInfo = this.baseInfo
//      const addrShi = this.addrShi[this.addrShiId] 
//      const addrQu = this.addrQu[this.addrQuId] || {}
//      const addrZhen = this.addrZhen[this.addrZhenId] || {}

      let data = {
        deviceCertNo: baseInfo.deviceCertNo,
        deviceNextYearTestDate: baseInfo.deviceNextYearTestDate,
        deviceModel : baseInfo.deviceModel ,
        deviceType1: baseInfo.deviceType1,
        deviceType2: baseInfo.deviceType2,
        deviceTypeName2: baseInfo.deviceTypeName2,
        deviceNo: baseInfo.deviceNo,
        deviceProduceNo: baseInfo.deviceProduceNo,
        deviceRegNo: baseInfo.deviceRegNo,
        deviceProduceDate: baseInfo.deviceProduceDate,
        deviceProduceName:baseInfo.deviceProduceName,
        deviceInstallName: baseInfo.deviceInstallName,  
        deviceStatus: baseInfo.deviceStatus,
        deviceId: this.id,
        deviceArea1: this.addrSheng[this.addrShengId].id||baseInfo.deviceArea1||'',
        deviceAreaName1: this.addrSheng[this.addrShengId].areaName||baseInfo.deviceAreaName1||'',
        deviceArea2: this.addrShi[this.addrShiId] != undefined? this.addrShi[this.addrShiId].id:baseInfo.deviceArea2,
        deviceAreaName2: this.addrShi[this.addrShiId]!= undefined?this.addrShi[this.addrShiId].areaName : baseInfo.deviceAreaName2,
        deviceArea3: this.addrQu[this.addrQuId] != undefined?this.addrQu[this.addrQuId].id : baseInfo.deviceArea3,
        deviceAreaName3: this.addrQu[this.addrQuId] != undefined?this.addrQu[this.addrQuId].areaName:baseInfo.deviceAreaName3,
        deviceArea4: this.addrZhen[this.addrZhenId] != undefined?this.addrZhen[this.addrZhenId].id:baseInfo.deviceArea4,
        deviceAreaName4: this.addrZhen[this.addrZhenId] != undefined?this.addrZhen[this.addrZhenId].areaName:baseInfo.deviceAreaName4,
        deviceAddress: baseInfo.deviceFullAddress||'',
      }

			
      for(let i  in baseInfo.deviceParams) {
        data[`paramName${i+1}`] = baseInfo.deviceParams[i].name
        data[`paramValue${i+1}`] = baseInfo.deviceParams[i].value
      }
      console.log(baseInfo.deviceId,this.id)
//     console.log(this.addrShi[this.addrShiId]? this.addrShi[this.addrShiId].id:baseInfo.deviceArea2)
//       return ''
       const params = JSON.stringify(data)
       this.$http.post(`/device/update/${this.userInfo.id}`,params,{
        headers:{
          'Access-Token':this.userInfo.token,
        }, //http请求头
      }).then((res) => {
        let data = res.data
        if(data.resultCode == '0000000') {
          console.log(data.returnData)
           Toast('操作成功，待审核')
           this.isEdit = false
            setTimeout(()=> {
              Util.back()
            },2000)
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
          name='停电中'
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
      return addr ? addr.split('/').join(''): ''
    }
    ,checkParam(params) {
        let data = []
        for(let i in params) {
          data.push({name: i, value:params[i]})
        }
        return data
    }
    ,checkAddrSelect(data) {
      let str = ''
      if(data.deviceAreaName1) str = `${data.deviceAreaName1}`
      if(data.deviceAreaName2) str += `/${data.deviceAreaName2}`
      if(data.deviceAreaName3) str += `/${data.deviceAreaName3}`
      if(data.deviceAreaName4) str += `/${data.deviceAreaName4}`
      return str
    }
  },

  onShow () {
    this.userInfo = Util.getStorage('userInfo')
     const { id,isUpdate,applyId } = this.$mp.query
    this.id = id
//    if(isUpdate == 1) {
//     this.isUpdate = isUpdate
//     this.getUpdateData(isUpdate,applyId)
//    } else {
    if(isUpdate == 1) { // 修改提示
     this.tips = '查看设备待审核信息'
    } else {
     this.tips = '是否信息有误？'
    }
     this.getData()
//    }
    this.getAddr()
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
          padding: 5px 0;
          .title {font-size: 14px;color:#1C2627; min-width: 120px;}
          .input {
            flex: 1;
            height: auto;
            min-height: 18px;
            font-size: 14px;
            color:#757980;
          }
          .addr {
            flex: 1;
            display: flex;
            flex-direction: column;
             .addr-ssq {
               flex:1;
               display: flex;
               background: #ffffff;
               font-size: 14px;
               color: #757980;
                align-items: center;
                padding: 5px 0;
             }
             .textarea {
                  flex: 1;
                  height:  30px;
                  width:100%;
                  font-size: 14px;
                  color:#757980;
                }
          }
        }  
     }
      .triangle_border_down{
          width:0;
          height:0;
          border-width:8px 5px 0;
          border-style:solid;
          border-color:#757980 transparent transparent;/*灰 透明 透明 */
          margin:0  5px;
          position:relative;
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
   .min-h {
     min-height: 50px;
     position:fixed;
     left: 0;
     right: 0;
     bottom: 0;
     background: #ffffff;
     z-index: 999;
   }
}
</style>
