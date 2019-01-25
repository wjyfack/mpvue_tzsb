<template>
<div class="rengzheng" :style="{'height': height}">

    <div class="part" v-if="id == 1">
      <div class="form-input van-hairline--top">
        <div class="label">单位名称</div>
        <input type="text" class="input" :value="userInfo.companyName" disabled  placeholder="请输入单位名称" >
      </div>
      <div class="form-input van-hairline--top">
        <div class="label">联系人</div>
        <input type="text" class="input"  v-model="xingz.linkMan" placeholder="请输入联系人">
      </div>
      <div class="form-input van-hairline--top">
        <div class="label">联系方式</div>
        <input type="text" class="input" v-model="xingz.linkTel"  placeholder="请输入联系方式">
      </div>
      <div class="form-input van-hairline--top">
        <div class="label">设备注册码</div>
        <input type="text" class="input" v-model="xingz.deviceRegNo"  placeholder="请输入设备注册码">
      </div>
      <div class="form-input van-hairline--top" @click="selelctPicker(3)">
        <div class="label">办理类型</div>
         <div class="picker" v-if="bangliSelect != -1">{{bangli[bangliSelect]}}</div>
         <div class="select" v-else>请选择办理类型</div>
      </div>
      <div class="form-input van-hairline--top" @click="selelctPicker(2)">
        <div class="label">设备种类</div>
           <div class="picker" v-if="zhongleiSelect != -1">{{zhonglei[zhongleiSelect]}}</div>
         <div class="select" v-else>请选择设备种类</div>
      </div>
      <!-- <div class="form-input van-hairline--top">
        <div class="label">使用登记证</div>
        <div class="pic-list" v-for="(item , index) in qiImgs" :key="index">
          <span class="colse" @click="deleteImgs(index)"><img src="../../asset/imgs/z_cuo.png" class="img-c" alt=""></span>
            <img :src="item" class="img-sel" alt="" >
        </div>
        <div class="add" @click="uploadImg()">
            <img src="../../asset/imgs/add.png" class="add-btn" alt="">
        </div>
      </div> -->
      <div class="form-input van-hairline--top">
        <div class="label">预约时间</div>
         <div class="time" @click="selelctPicker(1)">
                <div class="date">{{selectDate}}</div>
           <div class="num">当天已有0人预约办理</div>
         </div>
      </div>
    </div>
    <div class="part" v-else-if="id ==2">
      <div class="form-input van-hairline--top">
        <div class="label">单位名称</div>
        <input type="text" class="input"  :value="userInfo.companyName" disabled  placeholder="请输入单位名称" >
      </div>
      <div class="form-input van-hairline--top">
        <div class="label">联系人</div>
        <input type="text" class="input" v-model="jianshi.ren"  placeholder="请输入联系人">
      </div>
      <div class="form-input van-hairline--top">
        <div class="label">联系电话</div>
        <input type="text" class="input" v-model="jianshi.dianhua"  placeholder="联系电话">
      </div>
 
      <div class="form-input van-hairline--top"  @click="selelctPicker(2)">
        <div class="label">设备种类</div>
           <div class="picker" v-if="zhongleiSelect != -1">{{zhonglei[zhongleiSelect]}}</div>
         <div class="select" v-else>请选择设备种类</div>
      </div>
           <div class="form-input van-hairline--top"  @click="selelctPicker(9)">
        <div class="label">监视套餐</div>
              <div class="picker" v-if="jtaocanSelect != -1">{{jtaocans[jtaocanSelect]}}</div>
              <div class="select" v-else>请选择监视套餐</div>
      </div>
      <div class="form-input van-hairline--top">
        <div class="label">设备地址</div>
        <input type="text" class="input"  v-model="jianshi.dizhi"   placeholder="请输入设备地址">
      </div>
      <!-- <div class="form-input van-hairline--top">
        <div class="label">案例演示</div>
        <div class="pic-list" v-for="(item , index) in 2" :key="index">
            <img src="http://placehold.it/100x100" class="img-sel" alt="" >
        </div>
      </div> -->
     
    </div>
     <div class="part" v-else-if="id == 3">
      <div class="form-input van-hairline--top">
        <div class="label">单位名称</div>
        <input type="text" class="input"  :value="userInfo.companyName" disabled  placeholder="请输入单位名称" >
      </div>
      <div class="form-input van-hairline--top">
        <div class="label">联系人</div>
        <input type="text" class="input" v-model="xingz.linkMan"  placeholder="请输入联系人">
      </div>
      <div class="form-input van-hairline--top">
        <div class="label">联系方式</div>
        <input type="text" class="input"  v-model="xingz.linkTel"  placeholder="联系方式">
      </div>
      <div class="form-input van-hairline--top">
        <div class="label">设备注册码</div>
        <input type="text" class="input" v-model="xingz.deviceRegNo"  placeholder="请输入设备注册码">
      </div>
      <div class="form-input van-hairline--top"  @click="selelctPicker(2)">
        <div class="label">设备种类</div>
        <div class="picker" v-if="zhongleiSelect != -1">{{zhonglei[zhongleiSelect]}}</div>
         <div class="select" v-else>请选择设备种类</div>
      </div>

      <div class="form-input van-hairline--top">
        <div class="label">预约时间</div>
         <div class="time">
             <div class="time" @click="selelctPicker(1)">
                <div class="date">{{selectDate}}</div>
              <div class="num">当天已有0人预约办理</div>
         </div>
         </div>
      </div>
    </div>
    <div class="part" v-else-if="id == 4">
      <div class="form-input van-hairline--top">
        <div class="label">单位名称</div>
        <input type="text" class="input"  placeholder="请输入单位名称" >
      </div>
       <div class="form-input van-hairline--top">
        <div class="label">单位地址</div>
        <input type="text" class="input"  placeholder="请输入单位地址" >
      </div>
      <div class="form-input van-hairline--top">
        <div class="label">联系人</div>
        <input type="text" class="input"  placeholder="请输入联系人">
      </div>
      <div class="form-input van-hairline--top">
        <div class="label">联系方式</div>
        <input type="text" class="input"  placeholder="联系方式">
      </div>
      <div class="form-input van-hairline--top">
        <div class="label">岗位名称</div>
          <picker @change="pickerChange(2,$event)" value="0" :range="zhonglei">
              <div class="picker" v-if="zhongleiSelect != -1">{{zhonglei[zhongleiSelect]}}</div>
              <div class="select" v-else>3000-3999</div>
            </picker>
      </div>
        <div class="form-input van-hairline--top">
          <div class="label">岗位要求</div>
          <input type="text" class="input"  placeholder="请输入岗位要求">
        </div>
    </div>
    <div class="part" v-else-if="id == 5">
      <div class="form-input van-hairline--top">
        <div class="label">单位名称</div>
        <input type="text" class="input"  placeholder="请输入单位名称" >
      </div>
       <div class="form-input van-hairline--top">
        <div class="label">单位地址</div>
        <input type="text" class="input"  placeholder="请输入单位地址" >
      </div>
      <div class="form-input van-hairline--top">
        <div class="label">联系人</div>
        <input type="text" class="input"  placeholder="请输入联系人">
      </div>
      <div class="form-input van-hairline--top">
        <div class="label">联系方式</div>
        <input type="text" class="input"  placeholder="请输入联系方式">
      </div>
      <div class="form-input van-hairline--top"  @click="selelctPicker(2)">
        <div class="label">设备种类</div>
        <div class="picker" v-if="zhongleiSelect != -1">{{zhonglei[zhongleiSelect]}}</div>
         <div class="select" v-else>请选择设备种类</div>
      </div>

    </div>
    <div class="part" v-else-if="id == 6">
      <div class="form-input van-hairline--top">
        <div class="label">联系人</div>
        <input type="text" class="input" v-model="kaoZ.linkMan"  placeholder="请输入联系人">
      </div>
          
      <div class="form-input van-hairline--top">
        <div class="label">联系方式</div>
        <input type="text" class="input" v-model="kaoZ.linkTel"  placeholder="请输入联系方式">
      </div>
      <div class="form-input van-hairline--top" @click="selelctPicker(4)">
        <div class="label">学历</div>
              <div class="picker">{{xueliStatus[kaoZ.educationalBg]}}</div>
      </div>
      <div class="form-input van-hairline--top" >
        <div class="label">身份证号码</div>
        <input type="text" class="input"  v-model="kaoZ.identityCard"  placeholder="请输入身份证号码">
      </div>
      <div class="form-input van-hairline--top"  @click="selelctPicker(5)">
        <div class="label">科目</div>
              <div class="picker" v-if="kaoZ.subject" >{{kaoZ.subject}}</div>
              <div class="select" v-else>请选择科目</div>
      </div>

      <div class="form-input van-hairline--top"  @click="selelctPicker(7)">
        <div class="label">证书</div>
              <div class="picker" v-if="kaoZ.certificate">{{kaoZ.certificate}}</div>
              <div class="select" v-else>请选择证书</div>
      </div>
      <div class="form-input van-hairline--top">
        <div class="label">使用登记证</div>
        <div class="pic-list" v-for="(item , index) in psImgsG" :key="index">
          <span class="colse" @click="deleteImgs(index)"><img src="../../asset/imgs/z_cuo.png" class="img-c" alt=""></span>
            <img :src="item" class="img-sel" alt="" >
        </div>
        <div class="add" v-if="isImgSize" @click="uploadImg()">
            <img src="../../asset/imgs/add.png" class="add-btn" alt="">
        </div>
      </div>
      <div class="form-input van-hairline--top">
        <div class="label">预约时间</div>
         <div class="time"  @click="selelctPicker(1)">
                <div class="date">{{selectDate}}</div>
           <div class="num">当天已有0人预约办理</div>
         </div>
      </div>
    </div>
    <div class="part" v-else-if="id == 7">

      <div class="form-input van-hairline--top">
        <div class="label">联系人</div>
        <input type="text" class="input"  placeholder="请输入联系人">
      </div>
      <div class="form-input van-hairline--top">
        <div class="label">联系方式</div>
        <input type="text" class="input"  placeholder="请输入联系方式">
      </div>
      <div class="form-input van-hairline--top">
        <div class="label">求职地点</div>
        <input type="text" class="input"  placeholder="请输入求职地点" >
      </div>
      <div class="form-input van-hairline--top">
        <div class="label">期望岗位</div>
        <input type="text" class="input"  placeholder="请输入岗位名称" >
      </div>
      <div class="form-input van-hairline--top">
        <div class="label">期望薪资</div>
          <picker @change="pickerChange(2,$event)" value="0" :range="zhonglei">
              <div class="picker" v-if="zhongleiSelect != -1">{{zhonglei[zhongleiSelect]}}</div>
              <div class="select" v-else>请选择期望薪资</div>
            </picker>
      </div>
      <div class="form-input van-hairline--top">
        <div class="label">技能特长</div>
        <input type="text" class="input"  placeholder="请填写技能特长 (包括相关证书、技能、工作经验)" >
      </div>
    </div>
    <div class="part" v-else>

      <div class="form-input van-hairline--top">
        <div class="label">联系人</div>
        <input type="text" class="input"  placeholder="请输入联系人">
      </div>
      <div class="form-input van-hairline--top">
        <div class="label">联系方式</div>
        <input type="text" class="input"  placeholder="请输入联系方式">
      </div>
      <div class="form-input van-hairline--top">
        <div class="label">设备种类</div>
          <picker @change="pickerChange(2,$event)" value="0" :range="zhonglei">
             <div class="picker" v-if="zhongleiSelect != -1">{{zhonglei[zhongleiSelect]}}</div>
             <div class="select" v-else>请选择设备种类</div>
            </picker>
      </div>
       <div class="form-input van-hairline--top"  @click="selelctPicker(5)">
        <div class="label">科目</div>
              <div class="picker" v-if="kaoZ.subject" >{{kaoZ.subject}}</div>
              <div class="select" v-else>请选择科目</div>
      </div>

      <div class="form-input van-hairline--top"  @click="selelctPicker(7)">
        <div class="label">证书</div>
              <div class="picker" v-if="kaoZ.certificate">{{kaoZ.certificate}}</div>
              <div class="select" v-else>请选择证书</div>
      </div>
    </div>

 <div class="btn van-hairline--top">
    <van-button round  type="primary" custom-class="pro" @click="onSub">提交</van-button>
  </div>
    <van-popup :show="show" @close="onClose" position="bottom">
    <div class="h-s100">
      <!-- 日期选择 -->
      <van-datetime-picker
          v-if="selectStatus == 1"
          type="date"
          :value="currentDate"
         @confirm="getPicker"
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
  <van-toast id="van-toast" />
  <van-dialog id="van-dialog" />
</div> 
</template>
<script>
import Util from '@/utils/index'
import {baseUrl,xueliStatus,certifSort,certifKey,zhengSort} from '@/utils/config'
import dateformat from 'dateformat'
import Toast from '@/../static/dist/toast/toast'
import Dialog from '@/../static/dist/dialog/dialog'
export default {
  components: {
  },
  data () {
    return {
      id: 0, // 0什么都不显示，1:行政许可业务 2:新增设备监视 3:预约检查 4:技术人员招聘 5设备新增管理 6:特种设备考证 7:个人资历 8:人员培训
       height: '',
      psImgs: [],
      psImgsG: [],
      bangli: ['新增','变更','停用','注销'],
      bangliSelect: 0,
      zhonglei:  ["锅炉", "压力容器", "电梯", "起重机械", "场（厂）内专用机动车辆", "压力管道"],
      zhongleiSelect: 0,
      selectDate: Util.getDate(),
      selectStatus: 1,
      selectOpt: 1,
      currentDate: new Date().getTime(),
      columns: [],
      show: false,
      isImgSize: true,
      xueliStatus:xueliStatus,
      xingz: {
        linkMan: '',
        linkTel: '',
        deviceRegNo: ''
      },
      zhengSort: zhengSort,
      kaoZ: { // 设备考证
          educationalBg: 0, // 学历
          linkTel: '', // 电话
          linkMan: '', // 联系人
          subject: '', //科目
          certificate:'', // 证书
          photo:'', // 图片
          orderDate:Util.getDate(),//预约日期
          identityCard:'',//身份号
      },
      yuYue: {},
      jianshi: {
        ren: '',
        dianhua: '',
        dizhi: '',
        cSelect: 'tc001'
      },
      jtaocan: [
        'tc001',
        'tc002',
        'tc003',
      ],
      jtaocans: [ '套餐一', '套餐二', '套餐三'],
      jtaocanSelect :0
    }
  },
  computed: {
    userInfo: () => {
      return Util.getStorage('userInfo')
    },
    
  },
  methods: {
    getPhoneHeight () {
          let _this = this
          wx.getSystemInfo({
            success: function(res) {
            _this.height = (res.windowHeight) +'px'
            }
        })
      }
 
    ,deleteImgs(index) {
         this.psImgs.splice(index,1)
         this.psImgsG.splice(index,1)
         this.isImgSize = true
    }
    ,uploadImg() {
        const _this = this
        let fileType	= 'rectify' //	整改
        if(this.id == 6) {
          fileType = 'certificate'
        }
        wx.chooseImage({
          count: 1,
          sizeType: ['original', 'compressed'],
          sourceType: ['album', 'camera'],
          success(res) {
            // tempFilePath可以作为img标签的src属性显示图片
            const tempFilePaths = res.tempFilePaths
                  _this.psImgs = [..._this.psImgs, ...tempFilePaths]
            // 文件上传
            wx.showToast({  
                title: '正在上传...',  
                icon: 'loading',  
                mask: true,  
                duration: 10000  
              })  
            wx.uploadFile({
            url: `${baseUrl}/file/upload/${fileType}/${_this.userInfo.id}`, 
            filePath: tempFilePaths[0],
            name: 'file',
            header: { 'Access-Token':_this.userInfo.token},
            success: function (res) {
              wx.hideToast();  
              var data =JSON.parse(res.data)  // string to obj
              if(data.resultCode == '0000000') {
                  _this.psImgsG = [..._this.psImgsG, ...tempFilePaths]
                  if(_this.id ==6) {
                    _this.kaoZ.photo = data.returnData
                    _this.isImgSize = false
                  }
              }
            },fail:function(err){
              wx.hideToast();  
              wx.showModal({  
                title: '错误提示',  
                content: '上传图片失败',  
                showCancel: false,  
                success: function (res) { }  
              }) 
            }
          })
          }
        })
    }
    ,pickerChange(opt,event) {
      const val = event.mp.detail.value
     switch(~~opt) {
       case 1:
       this.bangliSelect = val
       break 
       case 2:
       this.zhongleiSelect = val
       break 
       case 3:
       break 
       case 4:
       break 
     }
      
    }
    ,bindDateChange(event) {
     this.selectDate = event.mp.detail.value
    }
    ,setTitle(id) {
      let titles = ["行政许可业务", "新增设备监视", "预约检查", "技术人员招聘", "设备新增管理", "特种设备考证", "个人资历", "人员培训"]
      Util.setTitle(titles[id-1])
     
      switch(~~id) {
        case 1:
        case 2:
        case 3:
        case 5:
        this.checkCompany()
        break
      }
    }
    ,onClose() {
      this.show = false
    }
    ,getPicker(event) {
      this.show = false
      switch(this.selectStatus) {
        case 1:
        console.log('this date')
       this.selectDate = dateformat(event.mp.detail,'yyyy-mm-dd')
        break
        case 2: // 单选的
          console.log(this.selectOpt)
          const {index,value} = event.mp.detail
            switch(this.selectOpt) {
              case 2: 
               this.zhongleiSelect = event.mp.detail.index
              break
              case 3:
              this.bangliSelect = event.mp.detail.index
              break
              case 4: // xueli
              this.kaoZ.educationalBg = event.mp.detail.index
              break;
              case 5: // 科目
                const pid = this.zhengSort[index].id
                 this.kaoZ.subject = this.zhengSort[index].subjectName
                this.kaoZ.subjectCode =  this.zhengSort[index].id
              break
              case 6: 
              
              break
              case 7:
                this.kaoZ.certificate = value
                this.kaoZ.certificateCode =  Util.CerifSort2keys([value]).join(',')
                console.log( this.kaoZ)
              break
              case 9:
                this.jianshi.cSelect =  this.jtaocan[index]
                this.jtaocanSelect = index
              break
            }
        break
      }
    }
    ,selelctPicker(index) {
      this.show = true
      this.selectOpt = index
      switch(index) {
         case 1:
         this.selectStatus = 1
        break
        case 2:
        this.selectStatus  = 2
        this.columns = this.zhonglei
        break
        case 3:
        this.selectStatus  = 2
        this.columns = this.bangli
        break
        case 4:
         this.selectStatus = 2
         this.columns = this.xueliStatus
        break
        case 5: //科目
        this.selectStatus = 2
        let arr = []
        for(let i in zhengSort) {
          arr = [...arr,zhengSort[i].subjectName]
        }
        this.columns  = arr
        break
        case 7: // 证书
          this.selectStatus = 2
          if(this.kaoZ.subject) {
            this.columns = certifSort[this.kaoZ.subject]
          } else {
            this.show = false
            Toast('请选择科目')
          }
        break
        case 9: 
        this.selectStatus = 2
        this.columns = this.jtaocans
        break
      }
    }
    ,getKemu(pid=0) {
      const params = JSON.stringify({"pid":`${pid}`})
      this.$http.post( `/base/subject/pid/${this.userInfo.id}`,params,{
          headers:{
            'Access-Token':this.userInfo.token,
          }, //http请求头，
        }).then((res) => {
           let data = res.data
          if(data.resultCode == '0000000') {
             let info =  data.returnData
             console.log(info)
              this.zhengSort = info
              let arr = []
              for(let i in info) {
                arr = [...arr,info[i].subjectName]
              }
              this.columns  = arr
          }
        })
    }
    ,onSub() {
      console.log(this.id)
      switch(~~this.id) {
        case 1:
          let {linkTel,linkMan,deviceRegNo} = this.xingz
          let params = JSON.stringify({
            companyId: this.userInfo.companyId,
            linkTel: linkTel,
            linkMan:linkMan ,
            businessType:this.bangliSelect+1,
            deviceType1: this.zhongleiSelect+1,
            appointDate: this.selectDate,
            deviceRegNo:deviceRegNo,
          })
          console.log(params)
          this.$http.post( `/business/handling/apply/${this.userInfo.id}`,params,{
            headers:{
              'Access-Token':this.userInfo.token,
            }, //http请求头，
          }).then((res) => {
            let data = res.data
            if(data.resultCode == '0000000') {
              Toast('提交成功，正在返回')
              setTimeout(()=> {
                  wx.navigateBack({
                    delta: 1
                  })
                },1000)
            }else {
              Toast(data.resultDesc)
            }
          })
        break
        case 2:
         const {cSelect,dianhua,dizhi,ren} = this.jianshi
          params = JSON.stringify({
           companyId: `${this.userInfo.companyId}`,
          linkTel: dianhua,
          linkMan: ren,
          setMeal:cSelect,
          deviceType1:`${this.zhongleiSelect+1}`,
          deviceFullAddress: dizhi
         })
           this.$http.post( `/device/monitor/apply/${this.userInfo.id}`,params,{
              headers:{
                'Access-Token':this.userInfo.token,
              }, //http请求头，
            }).then((res) => {
              let data = res.data
              if(data.resultCode == '0000000') {
                Toast('提交成功，正在返回')
                setTimeout(()=> {
                     this.zhongleiSelect = 0
                      this.jianshi = {
                            ren: '',
                            dianhua: '',
                            dizhi: '',
                            cSelect: 'tc001'
                          }
                    wx.navigateBack({
                      delta: 1
                    })
                  },1000)
              } else {
                Toast(data.resultDesc)
              }
            })
        break
        case 3:
        
          const xingz = this.xingz
          params = JSON.stringify({
            companyId: `${this.userInfo.companyId}`,
            linkTel: xingz.linkTel,
            linkMan: xingz.linkMan,
            deviceType1: `${ this.zhongleiSelect+1}`,
            orderDate: this.selectDate,
            deviceRegNo: xingz.deviceRegNo
          })
          // console.log(params)
            this.$http.post( `/order/check/apply/${this.userInfo.id}`,params,{
              headers:{
                'Access-Token':this.userInfo.token,
              }, //http请求头，
            }).then((res) => {
              let data = res.data
              if(data.resultCode == '0000000') {
                Toast('提交成功，正在返回')
                setTimeout(()=> {
                     this.zhongleiSelect = 0
                      this.xingz = {
                        linkMan: '',
                        linkTel: '',
                        deviceRegNo: ''
                      }
                    wx.navigateBack({
                      delta: 1
                    })
                  },1000)
              } else {
                Toast(data.resultDesc)
              }
            })
        break
        case 4:
         Toast('功能正在开发中...')
        break
        case 5:
         Toast('功能正在开发中...')
        break
        case 6:
          let {educationalBg,subjectCode,certificateCode,photo,identityCard} = this.kaoZ
          params = JSON.stringify({
              educationalBg:educationalBg+1,
              linkTel:this.kaoZ.linkTel,
              linkMan:this.kaoZ.linkMan,
              subject:subjectCode,
              certificate:certificateCode,
              photo:photo,
              orderDate:this.selectDate,
              identityCard:identityCard,
            })
            console.log(params)
            this.$http.post( `/exam/certificate/apply/${this.userInfo.id}`,params,{
              headers:{
                'Access-Token':this.userInfo.token,
              }, //http请求头，
            }).then((res) => {
              let data = res.data
              if(data.resultCode == '0000000') {
                Toast('提交成功，正在返回')
                setTimeout(()=> {
                    wx.navigateBack({
                      delta: 1
                    })
                  },1000)
              } else {
                Toast(data.resultDesc)
              }
            })
        break
        case 7:
         Toast('功能正在开发中...')
        break
        case 8:
         Toast('功能正在开发中...')
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
  }

  ,created () {
    this.getPhoneHeight()
    
  }
  ,mounted() {
    const {id} = this.$mp.query
    this.id = id || 0
    this.setTitle(this.id)

  }

}
</script>

<style  lang="less" >
.rengzheng {
  background: #EEEFF4;
  .radio-group {
    background: #ffffff;
    padding:  15px  25px;
    display: flex;
    align-items: center;
     .radio-item {
       min-width: 100px;
       display: flex;
       align-items: center;
        .radio {width: 13px;height: 13px;}
        .label {
          color:#4A4A4A;
          font-size: 12px;
          margin-left:  5px;
        }
     }
     
    }
  .form-input {
    background: #ffffff;
    padding: 10px 25px;
    display: flex;
    align-items: center;
    .label {color:#1C2627;font-size: 14px;min-width: 100px;}
    .input {flex: 1;color:#1C2627;font-size: 12px;}
    .picker {
      flex: 1;color:#1C2627;font-size: 12px;min-width: 100px;
      }
      .select {  flex: 1;color:#A1A2A4;font-size: 12px;min-width: 100px;}
    .add {
      width: 50px;
      height: 70px;
      background: #EEEFF4;
      position: relative;
     
      .add-btn {
        width: 24px;
        height: 24px;
        position: absolute;
         top:50%;
          left:50%;
          transform:translate(-50%,-50%);
      }
    }
    .pic-list {
      position: relative;
      margin-right: 10px;
      .colse {
        position: absolute;
          right: -5px;
          top: -4px;
          background: #ffffff;
          border-radius: 50%;
          width: 14px;
          height: 14px;
          .img-c {width: 14px;height: 14px;}
      }
      .img-sel {
        width:50px;
        height: 70px;
      }
    }
    .time {
      flex: 1;
      display: flex;
      flex-direction: column;
      font-size: 12px;
      .date {color:#A1A2A4;padding: 5px 0;}
      .num {color:#FDC915;}
    }
  }
  .btn {
    padding:  10px 25px;
    background: #ffffff;
    .pro {
      width: 100%;
      background: #FDC915;
      color: #ffffff;
      border: 1px solid #FDC915;
    }
  }

  .h-s100 {
    min-height: 100px;
  }
}
</style>
