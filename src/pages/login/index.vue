<template>
  <div class="login">
     <img  class="bg" src="../../asset/imgs/login_bg.png" alt="" :style="{height: height}">
    <div class="form">
      <div class="input-item">
        <img src="../../asset/imgs/login_people.png" class="img" alt="">
        <input type="text" class="input" v-model.trim="phone" placeholder="请输入手机号号码"> 
      </div>
       <div class="input-item">
        <img src="../../asset/imgs/login_lock.png" class="img" alt="">
        <input type="password" class="input" v-model.trim="password" placeholder="请输入密码"> 
      </div>
     <div class="btn-group">
        <van-button round size="large" type="primary" custom-class ="s_btn" @click="toRegister">注册</van-button>
        <van-button round size="large" custom-class ="s_btn2" @click="onLogin">登陆</van-button>
    </div>
    </div>
    <van-toast id="van-toast" />
    <a href="../register/main?id=2" class="forget"> 忘记密码？</a>
  </div>
</template>

<script>
import Toast from '@/../static/dist/toast/toast'
import Util from '@/utils/index'
import md5 from 'js-md5'
export default {
  data () {
    return {
      height: '',
      phone: '',
      password: '',
      regPhone:  /^1[34578]\d{9}$/ 
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
    ,onLogin() {
        if(!this.regPhone.test(this.phone)) {
          Toast('手机号格式有误')
          return ''
        } else if(this.password == '') {
          Toast('请输入密码')
          return ''
        } else {
         const params = Util.getData({
            customerLinkTel: this.phone,
            customerLoginPwd: md5(this.password)
          })
          this.$http.post('/customer/logon',params).then((res)=> {
              let data = res.data
              if(data.resultCode == '0000000') {
                Util.setStorage('userInfo', data.returnData)
                Util.redTo('../index/main')
              } else {
                Toast(data.resultDesc)
              }
          })
        }
        
    }
    ,toRegister() {
      Util.navTo('../register/main?id=1')
    }
    ,autoLogin() {
       let userInfo =  Util.getStorage('userInfo')
       if(userInfo) {
         Toast('自动登录中...')
         setTimeout(()=> {
          Util.redTo('../index/main')
         },2500)
          
       }
    }
  },

  created () {
    this.getPhoneHeight()
    
  }
  ,mounted() {
    // 自动登录
    
    this.autoLogin()
  }
}
</script>

<style scoped  lang="less">
.login {
  position: relative;
   .bg {
     width: 100%;
   }
  .form {
      position: absolute;
       top: 240px;
      left: 0;
      right: 0;
      .input-item {
        background:  #ffffff;
        border-radius:  25px;
        display: flex;
        align-items: center;
        width: 282px;
        height: 50px;
        box-shadow:0px 7px 20px -8px rgba(0,0,0,0.53);
        margin:  0 auto;
        margin-bottom:  25px;
        .img {width: 15px; height: 15px; margin: 0 20px;vertical-align: middle;}
        .input {
          flex: 1;
          font-size: 12px;
          color: #1C2627;
        }
      }
      .btn-group {
        padding-top: 50px;
        display: flex;
        justify-content:  space-around;
        align-items: center;

   }
  }

  .forget {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 10px;
    font-size: 13px;
    color:#F5A623;
  }
}
</style>
