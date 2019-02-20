<template>
<div class="company_fabu">
      <div class="fabu-item van-hairline--top" @click="slelectPicker(1)">
        <div class="left">
          <div class="title">职位名称</div>
          <div class="cont" v-if="position.jobTile">{{position.jobTile}}</div>
          <div class="cont" v-else>请填写职位名称</div>
        </div>
        <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
      </div>
      <div class="fabu-item van-hairline--top" @click="slelectPicker(2)">
        <div class="left">
          <div class="title">技能要求</div>
          <div class="cont" v-if="position.skill.length == 0">请添加技能要求</div>
        </div>
        <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
      </div>
      <div class="info-brand">
          <div class="info-brand-item" @click="DelBrand(index)" v-for="(item,index) in brands" :key="index">{{item}}</div>
      </div>
      <div class="fabu-item van-hairline--top" @click="slelectPicker(4)">
        <div class="left">
          <div class="title">学历要求</div>
          <div class="cont">{{xueliStatus[position.education]}}</div>

        </div>
        <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
      </div>
      <div class="fabu-item van-hairline--top" @click="slelectPicker(5)">
        <div class="left">
          <div class="title">薪资待遇</div>
          <div class="cont" >{{salarySort[position.salary]}}</div>
        </div>
        <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
      </div>
      <a href="" class="fabu-item van-hairline--top"  @click="slelectPicker(8)">
        <div class="left">
          <div class="title">工作市区</div>
          <div class="cont" v-if="position.allAddr">{{position.allAddr}}</div>
          <div class="cont" v-else>请填写工作市区</div>
        </div>
        <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
      </a>
      <a href="" class="fabu-item van-hairline--top"  @click="slelectPicker(6)">
        <div class="left">
          <div class="title">详细地点</div>
          <div class="cont" v-if="position.workAddr">{{position.workAddr}}</div>
          <div class="cont" v-else>请填写详细地点</div>
        </div>
        <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
      </a>
      <a href="" class="fabu-item van-hairline--top"  @click="slelectPicker(7)">
        <div class="left">
          <div class="title">职位要求</div>
          <div class="cont" v-if="position.jobReq">{{position.jobReq}}</div>
          <div class="cont" v-else>请填写职位要求</div>
        </div>
        <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
      </a>
      <div class="h-6"></div>
      <a href="../zhaoping_jianli/main?opt=company" class="fabu-item van-hairline--top">
        <div class="left">
          <div class="title">企业介绍</div>
          <div class="con van-ellipsis">{{userInfo.companyName}}</div>
        </div>
        <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
      </a>
        <van-popup :show="show" @close="onClose" position="bottom">
          <div class="h-s100">
                  <!-- 单选 -->
                  <van-picker
                    v-if="selectStatus == 1"
                    :columns="columns"
                    @change="onPickerChange"
                    show-toolbar="true"
                    @cancel="onClose"
                    @confirm="getPicker"
                  />
                  <div class="jianliss-edit" v-else>
                    <!-- <div class="back" @click="onClose">返回</div> -->
                    <div class="edit-item van-hairline--bottom">
                      <div class="title">{{inputName}}</div>
                     
                      <textarea  auto-height="true" class="textarea" v-model.trim="inputValue" :placeholder="inputPlace"></textarea>
                    </div>
                    <div class="btn-su" @click="editInput">保存</div>
                  </div>
          </div>
        </van-popup>
      <div class="btn-su" @click="onSub">提交</div>
      <van-toast id="van-toast" />
</div>
</template>
<script>

import Toast from '@/../static/dist/toast/toast'
import Util from '@/utils/index'
import { positionSort, xueliStatus, certifSort,salarySort } from '@/utils/config'
export default {

  data () {
    return {
      isSub: true,
      show: false,
      selectStatus: 1,
      selectOpt: 1,
      posi: positionSort,
      xueliStatus: xueliStatus,
       salarySort: salarySort,
      inputName: '',
      inputValue: '',
      inputPlace: '',
      columns: [],
      brands: [],
      areaSheng: [],
      areaQu: [],
      position: {
        id: 0,
        jobTile: '', // 职位名称
        skill: [], // 技能
        education: 0, // 学历
        salary: 0, // 薪资
        allAddr: '' ,
        workAddr: '', // 工作地点
        jobReq: '', // 职位要求
        enterIntr: '', // 企业介绍
        userInfo: {}
      }
    }
  },
  // computed: {
  //   userInfo: ()=> {
  //     return Util.getStorage('userInfo')
  //   }
  // },
  methods: {
    slelectPicker(opt) {
      this.selectOpt = opt
      this.show = true
      switch(opt) {
        case 1: 
          this.selectStatus = 2
          this.inputName = '职位名称'
          this.inputPlace = '请填写职位名称'
          this.inputValue = this.position.jobTile
        break
        case 2: // 技能要求
            this.selectStatus = 1
            
            let arr = []
            const sort = certifSort
            for(let i in sort) {
                arr = [...arr,i]
            }
            this.columns = arr
        break
        case 3:

        break
        case 4:
          this.selectStatus = 1
          this.columns = this.xueliStatus
        break
        case 5:
          this.selectStatus = 1
          this.columns = this.salarySort
        break
        case 6:
          this.selectStatus = 2
          this.inputName = '工作地点'
          this.inputPlace = '请填写工作地点'
          this.inputValue = this.position.workAddr
        break
        case 7:
          this.selectStatus = 2
          this.inputName = '职位要求'
          this.inputPlace = '请填写职位要求'
          this.inputValue = this.position.jobReq
        break
        case 8:
          this.selectStatus = 1
          this.columns = this.changArea(this.areaSheng)
        break
      }

    },
    getPicker(event) {
      
      this.show = false
      const {index,value} = event.mp.detail
      switch(this.selectOpt) {
        case 2:
          this.show = true
           this.selectOpt  = 3
          this.columns = certifSort[value]
        break
        case 3:
          this.show = false
          this.brands = [...this.brands ,value]
          this.position.skill = Util.CerifSort2keys(this.brands)
        break
        case 4:
          this.position.education = index
        break
        case 5:
          this.position.salary = index
        break
        case 8:
          this.show = true
          this.selectOpt = 9
           let area = this.areaSheng 
          let val = event.mp.detail.value
          let id = 0
          this.position.allAddr = `${val}/`
          for(let i in area) {
            area[i].areaName == val ? id = area[i].id : ''
          }
          this.getArea(id)
        break
        case 9:
          this.show = true
          this.selectOpt = 10
            area = this.areaQu 
             val = event.mp.detail.value
             id = 0
             this.position.allAddr += `${val}/`
            for(let i in area) {
              area[i].areaName == val ? id = area[i].id : ''
            }
            this.getArea(id)
        break
        case 10:
           this.position.allAddr += `${event.mp.detail.value}`
        break
      }
    }
    ,editInput() {
      this.show = false
      switch(this.selectOpt) {
        case 1:
          this.position.jobTile = this.inputValue
        break
        case 6:
          this.position.workAddr = this.inputValue
        break
        case 7:
          this.position.jobReq = this.inputValue
        break
      }
    }
    ,onClose() {
      this.show = false
    }
    ,DelBrand(index) {
      this.brands.splice(index,1) 
    }
     ,getArea(id = 0) {
        let url = ''
        let params = ''
        if(id == 0) {
          url = `/area/device/init/${this.userInfo.id}`
        } else {
          url =`/area/clild/get/${this.userInfo.id}`
          params =`{"id":"${id}"}`
        }
         this.$http.post(url,params,{
            headers:{
              'Access-Token':this.userInfo.token,
            }, //http请求头，
          }).then((res) => {
            let data = res.data
            if(data.resultCode == '0000000') {
              if(id == 0) {
                let area = data.returnData.deviceArea1
                this.areaSheng = area
              } else {
                let returnData = data.returnData
                this.areaQu = returnData
                this.columns = this.changArea(returnData)
              }
            }
         })
    }
    ,changArea(data) {
      let arr = []
      for(let i in data) {
        arr = [...arr,data[i].areaName]    
      }
      return arr
    }
    ,onSub() {
   
      const {salaryMin,	salaryMax	} = Util.salaryMinMax(this.position.salary)
      const allAddr = this.position.allAddr.split('/')
      const  {
        id,
        jobTile, // 职位名称
        skill, // 技能
        education , // 学历
        salary , // 薪资
        workAddr, // 工作地点
        jobReq, // 职位要求
        enterIntr, // 企业介绍
      } = this.position
	  
      const params = JSON.stringify({	
          "id": id !=0 ? id : '',
          "jobName": jobTile,	
          "educationalBg": education+1,	
          "workSiteProvince":allAddr[0],	
          "workSiteCity": allAddr[1]||'',	
          "workSiteArea": allAddr[2]||'',	
          "workSiteAddress":workAddr,	
          "salaryMin": salaryMin,	
          "salaryMax": salaryMax,	
          "salaryId":salary+1,	
          "jobRequire":jobReq,	
          "skillRequires":skill.join(','),	
          "companyId": this.userInfo.companyId
        }	)
      this.$http.post( `/recruitment/update/${this.userInfo.id}`,params,{
          headers:{
            'Access-Token':this.userInfo.token,
          }, //http请求头，
        }).then((res) => {
          let data = res.data
          if(data.resultCode == '0000000') {
             Toast('提交成功')
              setTimeout(()=> {
               Util.navTo('../zhaoping_company_msg/main?opt=zhiwei')
              },1000)
          } else {
            Toast(data.resultDesc)
          }
       
      })
    }
    ,getSSQ(str) {
      if(str == '') return []
      const sheng = str.substring(0, str.indexOf('省')+1)
      const shi = str.substring(str.indexOf('省')+1,str.indexOf('市')+1 )
      const qu = str.substring(str.indexOf('市')+1,str.indexOf('区')+1)
//      console.log(sheng,shi,qu)
      return `${sheng}/${shi}/${qu}`
    }
  }, 
  onShow() {
    this.userInfo = Util.getStorage('userInfo')
    this.getArea()
   
    let { obj } = this.$mp.query
    //console.log( obj)
    obj = obj != '' ?JSON.parse(obj) : {}
    if(obj) {
      this.brands = obj.brands
      //console.log(this.getSSQ(obj.workSiteFullAddress))
      this.position  = {
          id: obj.id,
          jobTile: obj.jobName, // 职位名称
          skill: obj.skillRequires.split(','), // 技能
          education: obj.educationalBg -1, // 学历
          salary: obj.salaryId -1 , // 薪资
          allAddr: this.getSSQ(obj.workSiteFullAddress) ,
          workAddr: obj.workSiteFullAddress, // 工作地点
          jobReq: obj.jobRequire, // 职位要求
          enterIntr: '', // 企业介绍
      }
    }  else  {
      this.brands = []
      this.position =  {
        jobTile: '', // 职位名称
        skill: [], // 技能
        education: 0, // 学历
        salary: 0, // 薪资
        allAddr: '' ,
        workAddr: '', // 工作地点
        jobReq: '', // 职位要求
        enterIntr: '', // 企业介绍
      }
    }

   
  }
}
</script>

<style  lang="less">
.company_fabu {
  padding-bottom: 60px;
  .fabu-item {
    display: flex;
    padding: 10px 25px;
    justify-content: space-between;
    align-items: center;
    .left {
      flex:1;
      display: flex;
      align-items: center;
      .title {
        font-size: 14px;
        color:#1C2627;
        width:120px;
      }
      .cont {
        font-size: 12px;
        color:#A1A2A4;
      }
      .con {font-size: 12px;color:#1C2627;}
    }
    .ri-img {width: 8px;height: 14px;}
  }
  .h-6 {background: #EEEFF4;height: 6px;}
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
  .info-brand {
      display: flex;
      align-items: center;
      flex-wrap:wrap;
      padding: 0 25px;
      .info-brand-item {
        padding: 0 5px;
        background: #EEEFF4;
        color:#757980;
        font-size: 12px;
        margin-right: 10px;
        margin-bottom: 10px;
      }
    }
}
 .jianliss-edit {
    padding: 0px 30px 60px 30px;
     min-height: 75px;
    background: #FFFFFF;
    .back {
      padding: 10px 0px;
      color:#1C2627;
      font-size: 14px;
    }
    .edit-item {
      position: relative;
      .title {color:#1C2627;font-size: 13px;padding-bottom: 5px;padding-top:15px;}
      .input,.textarea {
        font-size: 13px;
        color:#757980;
      }
      .arrow {
        width:8px;
        height: 14px;
        position:absolute;
        bottom: 9px;
        right: 0;
      }
      .textarea {
        line-height: 20px;
        padding: 5px 0;
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
