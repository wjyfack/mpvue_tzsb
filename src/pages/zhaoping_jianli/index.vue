<template>
<div>
  <div class="jianli" v-if="opt == 'person'">
        <div class="info">
          <div class="header">
            <a href="" class="left" @click="selectEdit(1)">
              <div class="name" v-if="person.name">{{person.name}}</div>
              <div class="name" v-else>姓名</div>
              <img src="../../asset/imgs/xiugaih.png" alt="" class="left-img">
            </a>
            <img v-if="person.avatar" :src="base+person.avatar" alt="" class="avatar" @click="chooseImg">
            <img v-else src="../../asset/imgs/default_avatar.png" alt="" class="avatar" @click="chooseImg">
            
          </div>
          <div class="info-item van-hairline--bottom"  @click="selectDate(4)">
            <div class="left">性别</div>
            <div class="right">
              <div>{{person.sex}}</div>
              <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
              </div>
          </div>
          <div class="info-item van-hairline--bottom" @click="selectDate(1)">
            <div class="left">出生年月</div>
            <div class="right">
              <div>{{person.bornDate}}</div>
              <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
              </div>
          </div>
          <a href="" class="info-item van-hairline--bottom" @click="selectEdit(2)">
            <div class="left">手机号</div>
            <div class="right">
              <div v-if="person.phone">{{person.phone}}</div>
              <div v-else>未填写</div>
              <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
              </div>
          </a>
          <div class="info-item van-hairline--bottom" @click="selectDate(5)">
            <div class="left">学历</div>
            <div class="right">
              <div v-if="person.xueli">{{xuelis[person.xueli]}}</div>
              <div v-else>未填写</div>
              <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
              </div>
          </div>
          <div class="info-item van-hairline--bottom" @click="selectDate(2)">
            <div class="left">参加工作年月</div>
            <div class="right">
              <div>{{person.workDate}}</div>
              <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
              </div>
          </div>
          <div class="info-item info-act" @click="selectDate(3)">
            <div class="left">求职状态</div>
            <div class="right">
              <div>{{qiuzhi[person.qiuzhiStatus]}}</div>
              <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
              </div>
          </div>
          <div class="info-item van-hairline--bottom"  @click="selectDate(6)">
            <div class="left">期待职位</div>
            <div class="right">
              <div v-if="person.expectPosi">{{person.expectPosi}}</div>
              <div v-else>未填写</div>
              <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
              </div>
          </div>
          <div class="info-item van-hairline--bottom" @click="selectDate(10)">
            <div class="left">工作地点</div>
            <div class="right">
              <div v-if="person.workAddr">{{person.workAddr}}</div>
              <div v-else>未填写</div>
              <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
              </div>
          </div>
          <div class="info-item van-hairline--bottom"  @click="selectDate(9)">
            <div class="left">薪资要求</div>
            <div class="right">
              <div>{{salarySort[person.salary]}}</div>
              <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
              </div>
          </div>
          <div class="info-item info-act " @click="selectDate(7)">
            <div class="left">技能证书</div>
            <div class="right">
              <div v-if="!person.certif">未填写</div>
              <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
              </div>
          </div>
          <div class="info-brand">
              <div class="info-brand-item" @click="DelBrand(index)" v-for="(item,index) in brands" :key="index">{{item}}</div>
          </div>
          <div class="worker">工作经历</div>
          <div class="worker-item  van-hairline--bottom" @click="editWork(index)"  @longtap="deleteTap(index)" v-for="(item,index) in person.workExp" :key="index">
            <div class="cont  van-hairline--bottom">
              <div class="left">
                <div>{{item.companyName}}</div>
                <div class="c-name">{{item.jobName}}</div>
              </div>
              <div class="right">
                <div>{{item.workDateStart}} / {{item.workDateEnd}}</div>
                <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
              </div>
            </div>
            <div class="con">{{item.workContext}}</div>
          </div>
          <a  class="add-work van-hairline--surround" @click=" isWork = true">添加工作经历</a>
        </div>
        <div class="btn-su" @click="save">保存</div>
  </div>
  <div class="jianli" v-else-if="opt == 'company'">
        <div class="info">
          <div class="header">
            <a href="" class="left" @click="selectEdit(20)">
              <div class="name van-ellipsis" v-if="companyInfo.companyName">{{companyInfo.companyName}}</div>
              <div class="name" v-else>未填写</div>
              <img src="../../asset/imgs/xiugaih.png" alt="" class="left-img">
            </a>
            <img v-if="companyInfo.logoImg" :src="base+companyInfo.logoImg" alt="" class="avatar" @click="chooseImg">
            <img v-else src="../../asset/imgs/default_com.png" alt="" class="avatar" @click="chooseImg">
          </div>
          
           <a href="" class="info-item info-act van-hairline--bottom" @click="selectEdit(21)">
            <div class="left">企业简介</div>
            <div class="right">
              <div v-if="companyInfo.introduce">{{companyInfo.introduce}}</div>
              <div v-else>未填写</div>
              <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
              </div>
          </a>
          <a href="" class="info-item info-act van-hairline--bottom"  @click="selectDate(10)">
            <div class="left">所在市区</div>
            <div class="right">
              <div v-if="companyInfo.workAddr">{{companyInfo.workAddr}}</div>
              <div v-else>未填写</div>
              <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
              </div>
          </a>
          <a href="" class="info-item info-com van-hairline--bottom"  @click="selectEdit(22)">
            <div class="left">企业地址</div>
            <div class="right">
             <div v-if="companyInfo.address">{{companyInfo.address}}</div>
              <div v-else>未填写</div>
              <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
              </div>
          </a>
          <a href="" class="info-item info-com info-pd " @click="selectEdit(23)">
            <div class="left left-min">企业标签</div>
            <div class="right">
              <div></div>
              <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
              </div>
          </a>
          <div class="info-brand">
            <div class="info-brand-item">{{companyInfo.holiday}}</div>
              <div class="info-brand-item"  v-for="(item,index) in companyInfo.brands" :key="index">{{item}}</div>
          </div>
        </div>
        <div class="btn-su" @click="saveCompany">保存</div>
       
  </div>
   <van-toast id="van-toast" />
  <van-dialog id="van-dialog" />
  <van-popup :show="show" @close="onClose" position="bottom">
    <div class="h-s100">
      <!-- 日期选择 -->
      <van-datetime-picker
          v-if="selectStatus == 1"
          type="date"
          :value="currentDate"
          min-date="-2209017943000"
         @confirm="getDate"
         @cancel="onClose"
        />
        <!-- 单选 -->
        <van-picker
           v-if="selectStatus == 2" 
           :columns="columns"
          @change="onPickerChange"
          show-toolbar="true"
          @cancel="onClose"
          @confirm="getPicker"
        />
    </div>
  </van-popup>
  <van-popup :show="isInput" @close="onClose" position="bottom">
      <div class="jianlis-edit">
          <!-- <div class="back" @click="onClose">返回</div> -->
          <div class="edit-item van-hairline--bottom">
            <div class="title">{{inputName}}</div>
            <textarea auto-heigth class="input" v-model.trim="inputValue" :placeholder="inputPlace" />
          </div>
           <div class="btn-su" @click="editInput">保存</div>
      </div>
  </van-popup>
  <van-popup :show="isWork" @close="onClose"  position="bottom">

     <div class="jianlis-edit">
        <div class="edit-item van-hairline--bottom">
          <div class="title">公司名称</div>
          <input type="text" v-model="company.companyName" class="input" placeholder="请输入公司名称">
        </div>
        <div class="edit-item van-hairline--bottom">
          <div class="title">职位名称</div>
          <input type="text" v-model="company.jobName" class="input" placeholder="请输入职位名称">
        </div>
        <div class="edit-item van-hairline--bottom" @click="selectDate(13)">
          <div class="title">开始时间</div>
          <input type="text" v-model="company.workDateStart" class="input" placeholder="请输入开始时间" disabled>
          <img src="../../asset/imgs/arrow.png" alt="" class="arrow">
        </div>
        <div class="edit-item van-hairline--bottom" @click="selectDate(14)">
          <div class="title">结束时间</div>
          <input type="text" v-model="company.workDateEnd" class="input" placeholder="请输入结束时间" disabled>
          <img src="../../asset/imgs/arrow.png" alt="" class="arrow">
        </div>
        <div class="edit-item van-hairline--bottom edit-item-textarea">
          <div class="title">工作内容</div>
          <textarea  auto-height="true" class="textarea" v-model="company.workContext"  placeholder="请输入工作内容"></textarea>
        </div>
        <div class="btn-su" @click="saveWork">保存</div>
      </div>
  </van-popup>
  <van-popup :show="isBrands" @close="onClose"  position="bottom">
    <div class="jianli-brand" v-if="isBrands">
      <div class="con-brand" >
        <div class="select  van-hairline--bottom">
          <div class="title">企业标签</div>
          <div class="brand">
            <div class="brand-item"><div class="name">{{yifangjia}}</div></div>
            <div class="brand-item" v-for="(item,index) in yixuan" :key="item.id" ><div class="name">{{item.name}}</div></div>
          </div>
        </div>
        <div class="choose-title">放假安排（单选）</div> 
        <div class="brand">
          <div class="brand-item" :class="{'act': item == yifangjia }" v-for="(item,index) in fangjia" :key="index" @click="slectBrand(2,index)"><div class="name">{{item}}</div></div>
        </div>
        <div class="choose-title">待遇（多选）</div>
        <div class="brand">
        <div class="brand-item" :class="{'act': item.check }" v-for="(item,index) in daiyu" :key="item.id" @click="slectBrand(3,index)"><div class="name">{{item.name}}</div></div>
        </div>
      </div>
      <div class="btn-su" @click="saveBrands">保存</div>

    </div>
    
  </van-popup>
</div>
</template>
<script>
import dateformat from 'dateformat'
import Toast from '@/../static/dist/toast/toast'
import Dialog from '@/../static/dist/dialog/dialog';
import Util from '@/utils/index'
import { certifSort,baseUrl,positionSort,salarySort } from '@/utils/config'

export default {

  data () {
    return {
      opt : '', // person,company 个人、公司
      show: false,
      isInput: false,
      isBrands: false,
      isWork: false, // 编辑工作经验
      inputName: '', // 编辑name
      inputPlace: '', // place
      inputValue: '', // 编辑value
      currentDate: new Date().getTime(),
      selectInputOpt: 0,
      selectOpt: 0, //1: 出生年月 2: 参加工作年月 3: 求职状态
      selectStatus: 1, // 1:时间选择 2:单选
      base: baseUrl+'/file/show/img/base/',
      columns: [],
      qiuzhi: ['离职-随时到岗','在职-暂不考虑','在职-考虑机会','在职-月内到岗'],
      xuelis: ["小学", "初中", "高中", "中专", "大专", "本科以上"],// 1小学 2初中 3高中 4中专 5大专 6本科以上
      position:positionSort,
      salarySort: salarySort,
      selectSex: ['男','女'], 
      certifSort: certifSort,
      areaSheng: [], // 省份
      areaQu:[],// 区域
      avatar: '',// 头像
      workEdit: false,
      brands: [],
      company: {
        companyName: '',
        jobName: '',
        workDateStart: '',
        workDateEnd: '',
        workContext: ''
      },
      person: {
        name: '',// 姓名
        avatar: '',
        sex: '男',// 0:男1:女
        bornDate: dateformat(new Date, 'yyyy-mm'),　// 出生年月
        phone: '',　//手机好
        xueli: 0,　//学历
        workDate: dateformat(new Date, 'yyyy-mm'), // 工作时间 
        qiuzhiStatus: 0, // 求职状态
        expectPosi: '',// 期望职业
        workAddr: '',// 工作地点
        salary:0, //资薪
        certif: '' ,// 证书
        workExp: [
          /** 
          {
            companyName: '公司名称',
            jobName: '职位名称',
            workDateStart: '2010.02',
            workDateEnd: '2018.01',
            workContext: '工作内容'
          } 
        */
        ]// 工作经验
      },
      companyInfo: {}, // 企业介绍
       daiyu: [ // 待遇
        {id: 1, name: '五险一金',check: false},
        {id: 2, name: '定期体检',check: false},
        {id:3, name: '加班补助',check: false},
        {id: 4, name: '全勤奖',check: false},
        {id: 5, name: '年终奖',check: false},
        {id: 6, name: '免费班车',check: false},
        {id: 7, name: '餐补',check: false},
        {id: 8, name: '通讯补贴',check: false},
        {id: 9, name: '交通补贴',check: false},
        {id: 10, name: '包吃',check: false},
        {id: 11, name: '住房补贴',check: false},
      ],
      //daiyu: ['五险一金','定期体检','加班补助','全勤奖','年终奖','免费班车','餐补','通讯补贴','交通补贴','包吃','住房补贴'],
      // fangjia: [　// 放假安排
      //   {id: 1, name: '双休',check: false,sort: 'dan'},
      //   {id: 2, name: '单休',sort: 'dan',check: false},
      //   {id: 3, name: '大小周',sort: 'dan',check: false},
      //   {id: 4, name: '排班轮休',sort: 'dan',check: false},
      // ],
      fangjia: ['双休','单休','大小周','排班轮休'],
      yixuan: [], // 已选标签 
      yifangjia: ''
    }
  },
  computed: {
    userInfo: ()=> {
      return Util.getStorage('userInfo')
    }
  },
  methods: {
    onClose() {
      this.show = false
      this.isInput = false
      this.isWork = false
      this.isBrands = false
    }
    ,selectDate(opt) {
      // opt 1: 出生年月 2: 参加工作年月 3: 求职状态 4: 性别 5:学历 6:期待职位 7:技能证书 8: 技能二级 9: 薪资要求 
      // 10 11 12: 地址选择地区选择 13: 开始时间 14: 结束时间
      this.show = true
      this.selectOpt = ~~opt
      switch(opt) {
        case 1:
        this.selectStatus = 1
        break
        case 2:
        this.selectStatus = 1
        break
        case 3:
        this.selectStatus = 2
        this.columns = this.qiuzhi
        break
        case 4:
        this.selectStatus = 2
        this.columns = this.selectSex
        break
        case 5:
        this.selectStatus = 2
        this.columns = this.xuelis
        break
        case 6:
        this.selectStatus = 2
        this.columns = this.position
        break
        case 7:
          this.selectStatus = 2
          let arr = []
          const sort = this.certifSort
          for(let i in sort) {
              arr = [...arr,i]
          }
          this.columns = arr
        break
        case 9:
          this.selectStatus =2
          this.columns = this.salarySort
        break
        case 10:
          this.selectStatus = 2
          this.columns = this.changArea(this.areaSheng)
        break
        case 13:
        case 14:
          this.selectStatus = 1
          this.isWork = false
        break
       
      }
    }
    ,selectEdit(opt){
      this.isInput = true
      this.selectInputOpt = ~~opt
      switch(opt) {
        case 1: // 名称
          this.inputName = '姓名'
          this.inputPlace = '请输入姓名'
          this.inputValue = this.person.name == '姓名'? '': this.person.name
        break
        case 2: // 手机号
          this.inputName = '手机号'
          this.inputPlace = '请输入手机号'
          this.inputValue = this.person.phone == '未填写'? '': this.person.phone
        break
        case 20:
           this.inputName = '企业名称'
          this.inputPlace = '请输入企业名称'
          this.inputValue = this.companyInfo.companyName == '未填写'? '': this.companyInfo.companyName
        break
        case 21:
           this.inputName = '企业简介'
          this.inputPlace = '请输入企业简介'
          this.inputValue = this.companyInfo.introduce == '未填写'? '': this.companyInfo.introduce
        break
         case 22:
           this.inputName = '企业地址'
          this.inputPlace = '请输入企业地址'
          this.inputValue = this.companyInfo.address == '未填写'? '': this.companyInfo.address
        break
        case 23:
          this.isBrands = true
          // 标签固定
          const brands = this.companyInfo.brands
          const daiyu  = this.daiyu
          let arr = []
          for(let i in brands) {
            for(let j in daiyu) {
              if(daiyu[j].name ==  brands[i] ){
                 daiyu[j].check = true
                 arr = [...arr, daiyu[j]]
              }
            }
          }
          this.yifangjia = this.companyInfo.holiday
          this.daiyu = daiyu
          this.yixuan = arr
        break
      }
    }
    ,editInput() {
      switch(this.selectInputOpt) { // 1 名称 2 手机号
        case 1:
        this.person.name = this.inputValue
        break
        case 2:
        this.person.phone = this.inputValue
        break
        case 20:
          this.companyInfo.companyName = this.inputValue
        break
        case 21:
          this.companyInfo.introduce = this.inputValue
        break
        case 22:
          this.companyInfo.address = this.inputValue
        break

      }
      this.isInput = false
    }
    ,getDate(event) { // 选择日期
      this.show = false
      // selectOpt 1: 出生年月 2: 参加工作年月 3: 求职状态 4: 性别
      console.log(this.selectOpt)
      switch(this.selectOpt) {
        case 1:
          this.person.bornDate = dateformat(event.mp.detail,'yyyy.mm')
          break
        case 2:
          this.person.workDate = dateformat(event.mp.detail,'yyyy.mm') 
        break
        case 13:
          this.company.workDateStart = dateformat(event.mp.detail,'yyyy.mm')
          this.isWork = true
        break
        case 14:
          this.company.workDateEnd = dateformat(event.mp.detail,'yyyy.mm')
          this.isWork = true
        break
      }
    }
    ,getPicker(event) {// 单选
      this.show = false
      const index = event.mp.detail.index
      switch(this.selectOpt) {
        case 3:
          this.person.qiuzhiStatus = index
        break
        case 4:
          this.person.sex = event.mp.detail.value
        break
        case 5:
          this.person.xueli =  index
        break
        case 6:
          this.person.expectPosi = event.mp.detail.value
        break
        case 7: // 再选择二级   this.getArea()
          this.show = true
          const value = event.mp.detail.value
          const data = this.certifSort[value]
          this.columns = data
          this.selectOpt = 8
        break
        case 8:
          this.brands = [...this.brands,event.mp.detail.value] 
        break
        case 9:
          this.person.salary = index
        break
        case 10:
          this.show = true
          this.selectOpt = 11
          let area = this.areaSheng 
          let val = event.mp.detail.value
          let id = 0
          this.person.workAddr = `${val}/`
          for(let i in area) {
            area[i].areaName == val ? id = area[i].id : ''
          }
          this.getArea(id)
        break
        case 11:
            this.show = true
          this.selectOpt = 12
           area = this.areaQu 
           val = event.mp.detail.value
           id = 0
           this.person.workAddr += `${val}/`
          for(let i in area) {
            area[i].areaName == val ? id = area[i].id : ''
          }
          this.getArea(id)
        break
        case 12:
         this.person.workAddr += `${event.mp.detail.value}`
         this.companyInfo.workAddr = this.person.workAddr
        break
      }
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
    ,saveWork(){
      const params = this.company 
      if(!params.companyName) {
        Toast('请输入企业名')
        return ''
      } else if(!params.jobName) {
        Toast('请输入职位名称')
        return ''
      } else if(!params.workContext) {
        Toast('请输入工作内容')
        return ''
      } else if (!params.workDateStart|| !params.workDateEnd) {
        Toast('请选择时间')
        return ''
      }
       this.$http.post( `/workExp/update/${this.userInfo.id}`,JSON.stringify(params),{
            headers:{
              'Access-Token':this.userInfo.token,
            }, //http请求头，
          }).then((res) => {
            let data = res.data
            if(data.resultCode == '0000000') {
               // this.person.workExp = [...this.person.workExp,this.company]
               this.isWork = false
               this.workEdit = true
            }
        }).then(()=> {
          // 更新工作经验
          this.getJianliDetail()
        })

    }
    ,editWork(index) {
      this.company = this.person.workExp[index]
      this.isWork  = true
    }
    ,chooseImg () {
      Util.chooseImage((res) => {
        let _this = this
        let tempFilePath = res.tempFilePaths[0]
        let url = `${baseUrl}/file/upload/base/${_this.userInfo.id}`
         wx.showToast({  
            title: '正在上传...',  
            icon: 'loading',  
            mask: true,  
            duration: 10000  
          })  
        wx.uploadFile({
          url: url, 
          filePath: tempFilePath,
          name: 'file',
          header: { 'Access-Token':_this.userInfo.token},
          success: function (res) {
             wx.hideToast()
            var data =JSON.parse(res.data)  // string to obj
             if(data.resultCode == '0000000') {
                _this.person.avatar = data.returnData
                _this.companyInfo.logoImg = data.returnData
                _this.avatar = data.returnData
            }
          },fail:function(err){
            wx.hideToast();  
            wx.showModal({  
              title: '',  
              content: '上传图片失败',  
              showCancel: false,
            }) 
          }
        })

      })
    }
    ,DelBrand(index) {
      this.brands.splice(index,1) 
    }
    ,deleteTap(index) { // 删除工作经验
      Dialog.confirm({
          title: '提示',
          message: '删除工作经验？'
        }).then(() => {
          const {id} =  this.person.workExp[index]
          
          const params = JSON.stringify({workExpId: id})
          this.$http.post( `/workExp/del/${this.userInfo.id}`,params,{
            headers:{
              'Access-Token':this.userInfo.token,
            }, //http请求头，
          }).then((res) => {
            let data = res.data
               if(data.resultCode == '0000000') {
                 Toast('删除成功')
                  this.workEdit = true
                  this.getJianliDetail()
               }
          })
        }).catch(() => {
          // on cancel
        });
    }
    ,save() {
      const person = this.person
      const workSite = person.workAddr.split('/')
      // 待遇上下限
      //["面议","3k-4k","4k-5k","5k-6k","6k-8k","8k-10k","10k以上"],
      const {salaryMin,	salaryMax	} = Util.salaryMinMax(person.salary)
      // 证书　to string
      const certificates = Util.CerifSort2keys(this.brands).join(',')
      let params = {
        name: person.name,
        sex: person.sex,
        birthDay: person.bornDate,
        mobileNum: person.phone,
        educationalBg: person.xueli+1,
        outWorkDay: person.workDate,
        requireJobStatus: person.qiuzhiStatus+1,
        expectJobName: person.expectPosi,
        workSiteProvince: workSite[0],
        workSiteCity: workSite[1]|| '',
        workSiteArea: workSite[2]|| '',
        salaryMin: salaryMin,
        salaryMax:salaryMax,
        salaryId: person.salary +1,
        certificates: certificates,
        headPhoto: this.avatar|| person.avatar,
      }
      console.log(JSON.stringify(params))
      this.$http.post( `/resume/update/${this.userInfo.id}`,JSON.stringify(params),{
          headers:{
            'Access-Token':this.userInfo.token,
          }, //http请求头，
        }).then((res) => {
          let data = res.data
          if(data.resultCode == '0000000') {
              console.log(data.returnData)
              Toast('保存成功, 正在返回')
              setTimeout(()=> {
                wx.navigateBack({
                  delta: 1
                })
              },1000)
          }
      })
    }
    ,getJianliDetail() {
       this.$http.post( `/resume/dt/${this.userInfo.id}`,'',{
          headers:{
            'Access-Token':this.userInfo.token,
          }, //http请求头，
        }).then((res) => {
          let data = res.data
          if(data.resultCode == '0000000') {
              let info = data.returnData
              if(this.workEdit) {
                this.person.workExp = info.resumeWorkExpList
              } else {
                let  person = {
                  name: info.name||'',// 姓名
                  avatar: info.headPhoto || '',
                  sex: info.sex,// 0:男1:女
                  bornDate: info.birthDay||'',　// 出生年月
                  phone: info.mobileNum,　//手机好
                  xueli:~~(info.educationalBg-1),　//学历
                  workDate: info.outWorkDay, // 工作时间 
                  qiuzhiStatus: ~~(info.requireJobStatus-1), // 求职状态
                  expectPosi: info.expectJobName,// 期望职业
                  workAddr: info.workSiteFullAddress,// 工作地点
                  salary:~~(info.salaryId-1), //资薪
                  certif: info.certificates ,// 证书
                  workExp: info.resumeWorkExpList
                }
              this.brands = Util.getCertifSort(info.certificates)
              this.person = person
            }
          }
      })
    }
    ,getCompanyDetail() {
        const params = JSON.stringify({
          companyId: `${this.userInfo.companyId}`
        })
          this.$http.post(`/company/dt/${this.userInfo.id}`,params,{
            headers:{
              'Access-Token':this.userInfo.token,
            }, //http请求头，
          }).then((res) => {
            let data = res.data
            if(data.resultCode == '0000000') {
              let base =  data.returnData
                base.brands = base.treatments ? base.treatments.split(',') : []
                const prov = base.province ? `${base.province}/` : ''
                const area = base.area ? `${base.area}/` : ''
                const addr = base.addr ? `${base.addr}/` : ''
                base.workAddr = `${prov}${area}${addr}`
                  this.companyInfo = base
            } else {
              Toast(data.resultDesc)
            }
          })
    }
    ,slectBrand(opt,index) {
      // opt 1: 删除单选　2: 单选　3: 多选 4: 删除多选
        let i = 0
      switch(opt) {
        case 1: 
         // 不做删除
        break
        case 2:
        const name  = this.fangjia[index]
         this.yifangjia = name
        break
        case 3:
          
            this.daiyu[index].check = !this.daiyu[index].check
            this.yixuan = this.daiyu.filter((val) => {
                return val.check
            })
                    
        break
      }
    }
    ,saveBrands() {
      // console.log(this.yixuan,this.yifangjia)
      this.onClose()
      let arr = []
      arr = this.yixuan.map((val)=>{
        return val.name
      })
      this.companyInfo.brands = arr
      this.companyInfo.holiday = this.yifangjia
      // console.log(arr)
    }
    ,saveCompany() {
      const {id,address,area,city,brands,companyName,holiday,logoImg,province,introduce} = this.companyInfo
      const params = JSON.stringify({
        id: id,
        companyName:companyName,
        province:province,
        city:city,
        area:area,
        address:address,
        holiday:holiday,
        introduce:introduce,
        treatments: brands.length !=0 ? brands.join(','): ''
      })
       this.$http.post( `/company/logo/update/${this.userInfo.id}`,JSON.stringify({
         logoImg: logoImg,
         companyId: id
       }),{
          headers:{
            'Access-Token':this.userInfo.token,
          }, //http请求头，
        }).then(()=> {
       this.$http.post( `/company/update/${this.userInfo.id}`,params,{
          headers:{
            'Access-Token':this.userInfo.token,
          }, //http请求头，
        }).then((res) => {
          let data = res.data
          if(data.resultCode == '0000000') {
              Toast('保存成功, 正在返回')
              setTimeout(()=> {
                wx.navigateBack({
                  delta: 1
                })
              },1000)
          }
      })
    })
    }
 },
  mounted () {
    this.opt = this.$mp.query.opt
    let title = '我的简历'
    if(this.opt == 'person') {
    
      this.getJianliDetail()
    } else {
      title='企业介绍'
      this.getCompanyDetail()
    } 
      this.getArea()
    Util.setTitle(title)
    
  }
 
}
</script>

<style  lang="less">
.jianli {
  padding-bottom: 60px;
  .info {
    padding: 20px 30px;
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 10px;
      .left{
        display: flex;
       align-items: flex-end;
        .name {
          font-size: 16px;
          border-bottom: 2px solid #FDC915;
          color:#1C2627;
          margin-right: 5px;
        }
        .left-img  {
          width: 18px;
          height: 18px;
        }
      }
      .avatar {
        width:45px;
        height: 45px;;
        border-radius: 50%;
      }
    }
    .info-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 9px 0;
      color: #757980;
      .left {font-size: 14px;}
      .right {
        font-size: 12px;
        display: flex;
        .ri-img {
          width:8px;
          height: 14px;
          margin-left: 15px;
        }
      }
    }
    .worker{
      color:#1C2627;
      font-size: 13px;
    }
    .worker-item {
      
      .cont {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        padding: 9px 0;
        color: #757980;
        .left {
          font-size: 13px;
          display: flex;
          flex-direction: column;
          .c-name {
            color: #A1A2A4;
            font-size: 10px;
          }
          }
        .right {
          font-size: 11px;
          display: flex;
          .ri-img {
            width:8px;
            height: 14px;
            margin-left: 15px;
          }
        }
      }
     .con {
          color: #757980;
          font-size: 13px;
          padding: 9px 0;
     }
    }
    .add-work {
      color:#757980;
      font-size: 11px;
      height: 32px;
      line-height: 32px;
      text-align: center;
      margin-top:5px; 
    }
    .info-act {
      padding: 30px 0;
      .left {color:#1C2627;}
    }
    .info-com {
      .left {color:#1C2627;}
    }
    .info-pd {
      padding-bottom: 20px;
    }
    .info-brand {
      display: flex;
      align-items: center;
      flex-wrap:wrap;
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
  .h-s100 {
    min-height: 100px;
    background: #FFFFFF;
  }
 
}
 .jianlis-edit {
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
    }
    .edit-item-textarea {
      .textarea {
        min-height: 100px;
      }
    }
    .con-brand {
       padding: 17px 0;
       .select {
         padding-bottom: 20px;
         .title {
           padding-top: 20px;
           font-size: 13px;
           color:#1C2627;

         }
       }
       .choose-title {
         padding-top: 20px;
         font-size: 12px;
         color:#1C2627;
       }
       .brand {
          display: flex;
          flex-wrap: wrap;
          .brand-item {
            width:25%;
            margin-top: 10px;
            .name {
              width: 58px;
              height: 18px;
              font-size: 11px;
              line-height: 11px;
              text-align: center;
              border: 1px solid #E5E7EC;
              display:flex;
              justify-content:center;
              align-items:center
            }
          }
          .act   {
              color:#FFFFFF;
              border-color: #FDC915;
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
  .jianli-brand {
    padding: 0 30px;
    padding-bottom: 80px;
     .con-brand {
        .select {
          padding-bottom: 20px;
          .title {
            padding-top: 20px;
            font-size: 13px;
            color:#1C2627;

          }
        }
        .choose-title {
          padding-top: 20px;
          font-size: 12px;
          color:#1C2627;
        }
        .brand {
            display: flex;
            flex-wrap: wrap;
            .brand-item {
              width:25%;
              margin-top: 10px;
              .name {
                width: 58px;
                height: 18px;
                font-size: 11px;
                line-height: 11px;
                text-align: center;
                border: 1px solid #E5E7EC;
                display:flex;
                justify-content:center;
                align-items:center
              }
            }
            .act {
              .name {
                background: #FDC915;
                color:#FFFFFF;
                border-color: #FDC915;
              }
              
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

</style>
