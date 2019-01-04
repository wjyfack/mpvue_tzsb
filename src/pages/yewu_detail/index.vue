<template>
<div class="rengzheng" :style="{'height': height}">

    <div class="part" v-if="id == 1">
      <div class="form-input van-hairline--top">
        <div class="label">单位名称</div>
        <input type="text" class="input"  placeholder="请输入单位名称" >
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
        <div class="label">办理类型</div>
          <picker @change="pickerChange(1,$event)" value="0" :range="bangli">
              <div class="picker" v-if="bangliSelect != -1">{{bangli[bangliSelect]}}</div>
              <div class="select" v-else>请选择办理类型</div>
            </picker>
      </div>
      <div class="form-input van-hairline--top">
        <div class="label">设备种类</div>
          <picker @change="pickerChange(2,$event)" value="0" :range="zhonglei">
              <div class="picker" v-if="zhongleiSelect != -1">{{zhonglei[zhongleiSelect]}}</div>
              <div class="select" v-else>请选择设备种类</div>
            </picker>
      </div>
      <div class="form-input van-hairline--top">
        <div class="label">使用登记证</div>
        <div class="pic-list" v-for="(item , index) in qiImgs" :key="index">
          <span class="colse" @click="deleteImgs(index)"><img src="../../asset/imgs/z_cuo.png" class="img-c" alt=""></span>
          
            <img :src="item" class="img-sel" alt="" >
        </div>
        <div class="add" @click="uploadImg()">
            <img src="../../asset/imgs/add.png" class="add-btn" alt="">
        </div>
      </div>
      <div class="form-input van-hairline--top">
        <div class="label">预约时间</div>
         <div class="time">
           
             <picker
                  mode="date"
                  :value="selectDate"
                  @change="bindDateChange"
                >
                <div class="date">{{selectDate}}</div>
             </picker>
           <div class="num">当天已有0人预约办理</div>
         </div>
      </div>
    </div>
    <div class="part" v-else-if="id ==2">
      <div class="form-input van-hairline--top">
        <div class="label">单位名称</div>
        <input type="text" class="input"  placeholder="请输入单位名称" >
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
        <div class="label">设备种类</div>
          <picker @change="pickerChange(2,$event)" value="0" :range="zhonglei">
              <div class="picker" v-if="zhongleiSelect != -1">{{zhonglei[zhongleiSelect]}}</div>
              <div class="select" v-else>请选择设备种类</div>
            </picker>
      </div>
           <div class="form-input van-hairline--top">
        <div class="label">监视套餐</div>
          <picker @change="pickerChange(1,$event)" value="0" :range="bangli">
              <div class="picker" v-if="bangliSelect != -1">{{bangli[bangliSelect]}}</div>
              <div class="select" v-else>请选择监视套餐</div>
            </picker>
      </div>
      <div class="form-input van-hairline--top">
        <div class="label">设备地址</div>
        <input type="text" class="input"  placeholder="请输入设备地址">
      </div>
      <div class="form-input van-hairline--top">
        <div class="label">案例演示</div>
        <div class="pic-list" v-for="(item , index) in 2" :key="index">
            <img src="http://placehold.it/100x100" class="img-sel" alt="" >
        </div>
      </div>
     
    </div>
     <div class="part" v-else-if="id == 3">
      <div class="form-input van-hairline--top">
        <div class="label">单位名称</div>
        <input type="text" class="input"  placeholder="请输入单位名称" >
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
        <div class="label">设备种类</div>
          <picker @change="pickerChange(2,$event)" value="0" :range="zhonglei">
              <div class="picker" v-if="zhongleiSelect != -1">{{zhonglei[zhongleiSelect]}}</div>
              <div class="select" v-else>请选择设备种类</div>
            </picker>
      </div>

      <div class="form-input van-hairline--top">
        <div class="label">预约时间</div>
         <div class="time">
           
             <picker
                  mode="date"
                  :value="selectDate"
                  @change="bindDateChange"
                >
                <div class="date">{{selectDate}}</div>
             </picker>
           <div class="num">当天已有0人预约办理</div>
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
      <div class="form-input van-hairline--top">
        <div class="label">设备种类</div>
          <picker @change="pickerChange(2,$event)" value="0" :range="zhonglei">
              <div class="picker" v-if="zhongleiSelect != -1">{{zhonglei[zhongleiSelect]}}</div>
              <div class="select" v-else>请选择设备种类</div>
            </picker>
      </div>

    </div>
    <div class="part" v-else-if="id == 6">
      <div class="form-input van-hairline--top">
        <div class="label">联系人</div>
        <input type="text" class="input"  placeholder="请输入联系人">
      </div>
      <div class="form-input van-hairline--top">
        <div class="label">联系方式</div>
        <input type="text" class="input"  placeholder="请输入联系方式">
      </div>
      <div class="form-input van-hairline--top">
        <div class="label">学历</div>
          <picker @change="pickerChange(2,$event)" value="0" :range="zhonglei">
              <div class="picker" v-if="zhongleiSelect != -1">{{zhonglei[zhongleiSelect]}}</div>
              <div class="select" v-else>请选择学历</div>
            </picker>
      </div>
      <div class="form-input van-hairline--top">
        <div class="label">身份证号码</div>
        <input type="text" class="input"  placeholder="请输入身份证号码">
      </div>
      <div class="form-input van-hairline--top">
        <div class="label">作业种类</div>
          <picker @change="pickerChange(2,$event)" value="0" :range="zhonglei">
              <div class="picker" v-if="zhongleiSelect != -1">{{zhonglei[zhongleiSelect]}}</div>
              <div class="select" v-else>作业种类</div>
            </picker>
      </div>
      <div class="form-input van-hairline--top">
        <div class="label">项目代码</div>
          <picker @change="pickerChange(2,$event)" value="0" :range="zhonglei">
              <div class="picker" v-if="zhongleiSelect != -1">{{zhonglei[zhongleiSelect]}}</div>
              <div class="select" v-else>请选择项目代码</div>
            </picker>
      </div>
      <div class="form-input van-hairline--top">
        <div class="label">使用登记证</div>
        <div class="pic-list" v-for="(item , index) in qiImgs" :key="index">
          <span class="colse" @click="deleteImgs(index)"><img src="../../asset/imgs/z_cuo.png" class="img-c" alt=""></span>
          
            <img :src="item" class="img-sel" alt="" >
        </div>
        <div class="add" @click="uploadImg()">
            <img src="../../asset/imgs/add.png" class="add-btn" alt="">
        </div>
      </div>
      <div class="form-input van-hairline--top">
        <div class="label">预约时间</div>
         <div class="time">
           
             <picker
                  mode="date"
                  :value="selectDate"
                  @change="bindDateChange"
                >
                <div class="date">{{selectDate}}</div>
             </picker>
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
        <div class="label">作业种类</div>
          <picker @change="pickerChange(2,$event)" value="0" :range="zhonglei">
              <div class="picker" v-if="zhongleiSelect != -1">{{zhonglei[zhongleiSelect]}}</div>
              <div class="select" v-else>请选择作业种类</div>
            </picker>
      </div>
      <div class="form-input van-hairline--top">
        <div class="label">项目代码</div>
          <picker @change="pickerChange(2,$event)" value="0" :range="zhonglei">
              <div class="picker" v-if="zhongleiSelect != -1">{{zhonglei[zhongleiSelect]}}</div>
              <div class="select" v-else>请选择项目代码</div>
            </picker>
      </div>
      <div class="form-input van-hairline--top">
        <div class="label">培训科目</div>
          <picker @change="pickerChange(2,$event)" value="0" :range="zhonglei">
              <div class="picker" v-if="zhongleiSelect != -1">{{zhonglei[zhongleiSelect]}}</div>
              <div class="select" v-else>请选择培训科目</div>
            </picker>
      </div>
    </div>
 <div class="btn van-hairline--top">
    <van-button round size="small" type="primary" custom-class="pro">提交</van-button>
  </div>
</div> 
</template>
<script>
import Util from '@/utils/index'
import {baseUrl} from '@/utils/config'

export default {
  components: {
  },
  data () {
    return {
      id: 0, // 0什么都不显示，1:行政许可业务 2:新增设备监视 3:预约检查 4:技术人员招聘 5设备新增管理 6:特种设备考证 7:个人资历 8:人员培训
       height: '',
      psImgs: [],
      psImgsG: [],
      bangli: ['变更','新增','停用','注销'],
      bangliSelect: -1,
      zhonglei:  ["锅炉", "压力容器", "电梯", "起重机", "叉车", "压力管道"],
      zhongleiSelect: -1,
      selectDate: Util.getDate()
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
    }
    ,uploadImg() {
        const _this = this
        let fileType	= 'rectify' //	整改
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


}
</style>
