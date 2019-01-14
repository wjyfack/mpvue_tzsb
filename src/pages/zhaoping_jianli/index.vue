<template>
<div>
  <div class="jianli" v-if="opt == 'person'">
        <div class="info">
          <div class="header">
            <a href="" class="left" @click="selectEdit(1)">
              <div class="name">{{person.name}}</div>
              <img src="../../asset/imgs/xiugaih.png" alt="" class="left-img">
            </a>
            <img :src="person.avatar" alt="" class="avatar" @click="chooseImg">
          </div>
          <div class="info-item van-hairline--bottom"  @click="selectDate(4)">
            <div class="left">性别</div>
            <div class="right">
              <div>{{selectSex[person.sex]}}</div>
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
              <div>{{person.phone}}</div>
              <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
              </div>
          </a>
          <div class="info-item van-hairline--bottom" @click="selectDate(5)">
            <div class="left">学历</div>
            <div class="right">
              <div>{{xuelis[person.xueli]}}</div>
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
              <div>{{position[person.expectPosi]}}</div>
              <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
              </div>
          </div>
          <div class="info-item van-hairline--bottom" @click="selectDate(10)">
            <div class="left">工作地点</div>
            <div class="right">
              <div>{{person.workAddr}}</div>
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
              <div>{{person.certif}}</div>
              <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
              </div>
          </div>
          <div class="worker">工作经历</div>
          <div class="worker-item  van-hairline--bottom" v-for="(item,index) in person.workExp" :key="index">
            <div class="cont  van-hairline--bottom">
              <div class="left">
                <div>{{item.corName}}</div>
                <div class="c-name">{{item.posiName}}</div>
              </div>
              <div class="right">
                <div>{{item.startDate}}-{{item.endDate}}</div>
                <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
              </div>
            </div>
            <div class="con">{{item.jobCont}}</div>
          </div>
          <a  class="add-work van-hairline--surround" @click="addExper">添加工作经历</a>
        </div>
        <div class="btn-su">保存</div>
  </div>
  <div class="jianli" v-else-if="opt == 'company'">
        <div class="info">
          <div class="header">
            <a href="../zhaoping_jianli_edit/main?opt=com_name" class="left">
              <div class="name">企业名称</div>
              <img src="../../asset/imgs/xiugaih.png" alt="" class="left-img">
            </a>
            <img src="http://placehold.it/100x100" alt="" class="avatar">
          </div>
          <a href="../zhaoping_jianli_edit/main?opt=com_brief" class="info-item info-act van-hairline--bottom">
            <div class="left">企业简介</div>
            <div class="right">
              <div>未填写</div>
              <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
              </div>
          </a>
          <a href="../zhaoping_jianli_edit/main?opt=com_addr" class="info-item info-com van-hairline--bottom">
            <div class="left">企业地址</div>
            <div class="right">
              <div>未填写</div>
              <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
              </div>
          </a>
          <a href="../zhaoping_jianli_edit/main?opt=brand" class="info-item info-com info-pd van-hairline--bottom">
            <div class="left left-min">企业标签</div>
            <div class="right">
              <div></div>
              <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
              </div>
          </a>
        </div>
        <div class="btn-su">保存</div>
       
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
            <input type="text" class="input" v-model.trim="inputValue" :placeholder="inputPlace">
          </div>
           <div class="btn-su" @click="editInput">保存</div>
      </div>
  </van-popup>
  <van-popup :show="isWork" @close="onClose" position="bottom">
     <div class="jianlis-edit">
      <div class="edit-item van-hairline--bottom">
        <div class="title">公司名称</div>
        <input type="text" class="input" placeholder="请输入公司名称">
      </div>
      <div class="edit-item van-hairline--bottom">
        <div class="title">职位名称</div>
        <input type="text" class="input" placeholder="请输入职位名称">
      </div>
      <div class="edit-item van-hairline--bottom">
        <div class="title">开始时间</div>
        <input type="text" class="input" placeholder="请输入开始时间">
        <img src="../../asset/imgs/arrow.png" alt="" class="arrow">
      </div>
      <div class="edit-item van-hairline--bottom">
        <div class="title">结束时间</div>
        <input type="text" class="input" placeholder="请输入结束时间">
        <img src="../../asset/imgs/arrow.png" alt="" class="arrow">
      </div>
      <div class="edit-item van-hairline--bottom edit-item-textarea">
        <div class="title">工作内容</div>
        <textarea  auto-height="true" class="textarea"   placeholder="请输入工作内容"></textarea>
      </div>
       <div class="btn-su" >保存</div>
    </div>
  </van-popup>
</div>
</template>
<script>
import dateformat from 'dateformat'
import Toast from '@/../static/dist/toast/toast'
import Util from '@/utils/index'
import { certifSort } from '@/utils/config'
export default {

  data () {
    return {
      opt : '', // person,company 个人、公司
      show: false,
      isInput: false,
      isWork: false, // 编辑工作经验
      inputName: '', // 编辑name
      inputPlace: '', // place
      inputValue: '', // 编辑value
      currentDate: new Date().getTime(),
      selectInputOpt: 0,
      selectOpt: 0, //1: 出生年月 2: 参加工作年月 3: 求职状态
      selectStatus: 1, // 1:时间选择 2:单选
      columns: [],
      qiuzhi: ['离职-随时到岗','在职-暂不考虑','在职-考虑机会','在职-月内到岗'],
      xuelis: ["小学", "初中", "高中", "中专", "大专", "本科以上"],
      position:["锅炉作业人员", "压力容器作业人员", "起重机械作业人员", "电梯作业人员", "电工", "焊工", "叉车", "铲车", "挖掘机", "装载机", "吊车", "塔吊", "起重机", "行车", "制冷空调设备与安装"],
      salarySort: ['请选择','3k以一下','4k-5k','5k-6k','6-7k','7k-8k','8k-9k','10k以上'],
      selectSex: ['男','女'],
      certifSort: certifSort,
      areaSheng: [], // 省份
      areaQu:[],// 区域
      company: {
        corName: '',
        posiName: '',
        startDate: '',
        endDate: '',
        jobCont: ''
      },
      person: {
        name: '姓名',// 姓名
        avatar: './../../asset/imgs/avatar.png',
        sex: 0,// 0:男1:女
        bornDate: dateformat(new Date, 'yyyy-mm'),　// 出生年月
        phone: '未填写',　//手机好
        xueli: 0,　//学历
        workDate: dateformat(new Date, 'yyyy-mm'), // 工作时间
        qiuzhiStatus: 0, // 求职状态
        expectPosi: 0,// 期望职业
        workAddr: '未填写',// 工作地点
        salary:0, //资薪
        certif: '未填写' ,// 证书
        workExp: [{
          corName: '公司名称',
          posiName: '职位名称',
          startDate: '2010.02',
          endDate: '2018.01',
          jobCont: '工作内容'
        }]// 工作经验
      }
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
    }
    ,selectDate(opt) {
      // opt 1: 出生年月 2: 参加工作年月 3: 求职状态 4: 性别 5:学历 6:期待职位 7:技能证书 8: 技能二级 9: 薪资要求 
      // 10 11 12: 地址选择地区选择
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
      }
      this.isInput = false
    }
    ,getDate(event) { // 选择日期
      this.show = false
      // selectOpt 1: 出生年月 2: 参加工作年月 3: 求职状态 4: 性别
      console.log(this.selectOpt)
      switch(this.selectOpt) {
        case 1:
          this.person.bornDate = dateformat(event.mp.detail,'yyyy-mm')
        break
        case 2:
          this.person.workDate = dateformat(event.mp.detail,'yyyy-mm')
        break
        case 3:
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
          this.person.sex = index
        break
        case 5:
          this.person.xueli = index
        break
        case 6:
          this.person.expectPosi = index
        break
        case 7: // 再选择二级 
          this.show = true
          const value = event.mp.detail.value
          const data = this.certifSort[value]
          this.columns = data
          this.selectOpt = 8
        break
        case 8:
          this.person.certif = event.mp.detail.value
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
          for(let i in area) {
            area[i].areaName == val ? id = area[i].id : ''
          }
          this.getArea(id)
        break
        case 12:
        
         this.person.workAddr = event.mp.detail.value
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
    ,addExper(){
      this.isWork = true

    }
    ,chooseImg () {
      Util.chooseImage((res) => {
        console.log(res)
        let tempFilePath = res.tempFilePaths[0]
        this.person.avatar = tempFilePath
      })
    }
  },
  mounted () {
    this.opt = this.$mp.query.opt
    let title = '我的简历'
    this.opt == 'person' ? '': title='企业介绍'
    Util.setTitle(title)
    this.getArea()
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
          font-size: 18px;
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
