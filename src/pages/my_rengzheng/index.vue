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
        <input type="text" class="input" placeholder="请输入单位名称" >
      </div>
      <div class="form-input van-hairline--top">
        <div class="label">单位地址</div>
        <input type="text" class="input" placeholder="请输入单位地址">
      </div>
      <div class="form-input van-hairline--top">
        <div class="label">单位联系人</div>
        <input type="text" class="input" placeholder="请输入联系人">
      </div>
       <div class="form-input van-hairline--top">
        <div class="label">使用登记证</div>
        <div class="add">
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
        <input type="text" class="input" placeholder="请输入用户姓名" >
      </div>
      <div class="form-input van-hairline--top">
        <div class="label">设备地址</div>
        <input type="text" class="input" placeholder="请输入设备地址">
      </div>
      <div class="form-input van-hairline--top">
        <div class="label">使用证编号</div>
        <input type="text" class="input" placeholder="请输入编号 如:锅粤EM0000">
      </div>
      <div class="form-input van-hairline--top">
        <div class="label">使用登记证</div>
        <div class="add">
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
export default {
  components: {
  },
  data () {
    return {
       height: '',
      checked: true, // true 为企业　false 为个人
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
