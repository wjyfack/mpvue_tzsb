<template>
<div class="rengzheng" :style="{'height': height}">
  <div class="radio-group" >
     <div class="radio-item" @click="onRadio(1)"> <img v-if="!checked" src="./../../asset/imgs/radiod.png" class="radio" alt=""><img v-if="checked"  src="./../../asset/imgs/radio_checked.png" class="radio" alt=""> <label for="qiye" class="label">企业用户</label></div>
     <div class="radio-item" @click="onRadio(2)"> <img  v-if="checked"  src="./../../asset/imgs/radiod.png" class="radio" alt=""><img v-if="!checked"  src="./../../asset/imgs/radio_checked.png" class="radio" alt=""><label for="geren" class="label">个人用户</label></div>
  </div>
  <van-transition :show="checked" name="fade-left">
    <div class="part" v-if="checked">
      <div class="form-input van-hairline--top">
        <div class="label">单位名称</div>
        <input type="text" class="input" v-model="qi.name" placeholder="请输入单位名称" >
      </div>
      <div class="form-input van-hairline--top">
        <div class="label">单位地址</div>
        <input type="text" class="input" v-model="qi.addr" placeholder="请输入单位地址">
      </div>
      <div class="form-input van-hairline--top">
        <div class="label">单位联系人</div>
        <input type="text" class="input" v-model="qi.concat" placeholder="请输入联系人">
      </div>
       <div class="form-input van-hairline--top">
        <div class="label">使用登记证</div>
        <div class="pic-list" v-for="(item , index) in qiImgs" :key="index">
          <span class="colse" @click="deleteImgs(1,index)"><img src="../../asset/imgs/z_cuo.png" class="img-c" alt=""></span>
          
            <img :src="item" class="img-sel" alt="">
        </div>
        <div class="add" @click="addImgs(1)">
            <img src="../../asset/imgs/add.png" class="add-btn" alt="">
        </div>
      </div>
      <div class="btn van-hairline--top">
        <van-button round size="small" type="primary" custom-class="pro">提交</van-button>
      </div>
    </div>
  </van-transition>
  <van-transition :show="!checked" name="fade-right">
    <div class="part" v-if="!checked">
      <div class="form-input van-hairline--top">
        <div class="label">用户姓名</div>
        <input type="text" class="input" v-model="person.name" placeholder="请输入用户姓名" >
      </div>
      <div class="form-input van-hairline--top">
        <div class="label">设备地址</div>
        <input type="text" class="input" v-model="person.addr" placeholder="请输入设备地址">
      </div>
      <div class="form-input van-hairline--top">
        <div class="label">使用证编号</div>
        <input type="text" class="input" v-model="person.bianhao" placeholder="请输入编号 如:锅粤EM0000">
      </div>
      <div class="form-input van-hairline--top">
        <div class="label">使用登记证</div>
        <div class="pic-list" v-for="(item , index) in qiImgs" :key="index">
          <span class="colse" @click="deleteImgs(2,index)"><img src="../../asset/imgs/z_cuo.png" class="img-c" alt=""></span>
          
            <img :src="item" class="img-sel" alt="" >
        </div>
        <div class="add" @click="addImgs(2)">
            <img src="../../asset/imgs/add.png" class="add-btn" alt="">
        </div>
      </div>
      <div class="btn van-hairline--top">
        <van-button round size="small" type="primary" custom-class="pro">提交</van-button>
      </div>
    </div>
  </van-transition>
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
       height: '',
       checked: true, // true 为企业　false 为个人
       qi: {
         name: '',
         addr:'',
         conact: '',
         imgs: []
       },
       person: {
         name: '',
         addr:'',
         bianhao: '',
         imgs: []
       },
      qiImgs: [],
      qiImgsG: [],
      psImgs: [],
      psImgsG: []
    }
  },
  computed: {
    userInfo: () => {
      return Util.getStorage('userInfo')
    }
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
    ,onRadio(opt) {
      if(opt == 1) {
        this.checked = true
      } else { 
        this.checked = false
      }
    }
    ,deleteImgs(opts,index) {
      console.log(opts,index)
      switch(~~opts) {
          case 1: 
         this.qiImgs.splice(index,1)
         this.qiImgsG.splice(index,1)
          break
          case 2:
         this.psImgs.splice(index,1)
         this.psImgsG.splice(index,1)
          break
        }
    }
    ,addImgs(opts) {
       this.uploadImg(opts)
    }
    ,uploadImg(opt) {
        const _this = this
        let fileType	= 'rectify' //	整改
        // switch(~~opt) {
        //   case 2: 
        //     fileType = 'certificate'	//	证件
        //   break
        //   case 3: 
        //     fileType = 'deviceCert' //		设备使用证
        //   break
        // }
      //  let fs = require('fs')
      wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success(res) {
          // tempFilePath可以作为img标签的src属性显示图片
          const tempFilePaths = res.tempFilePaths

           switch(~~opt) {
              case 1: 
                _this.qiImgs = [..._this.qiImgs, ...tempFilePaths]
              break
              case 2: 
                _this.psImgs = [..._this.psImgs, ...tempFilePaths]
              break
            }

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
              switch(~~opt) {
              case 1: 
                _this.qiImgsG = [..._this.qiImgsG, ...tempFilePaths]
              break
              case 2: 
                _this.psImgsG = [..._this.psImgsG, ...tempFilePaths]
              break
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
  },

  created () {
    this.getPhoneHeight()
    Util.setTitle('设备认证')
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
