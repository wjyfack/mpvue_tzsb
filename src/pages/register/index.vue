<template>
  <div class="register"  :style="{height: height}">
    <div class="form">
      <div class="input-item">
        <img src="../../asset/imgs/login_people.png" class="img" alt="">
        <input type="text" class="input" v-model.trim="phone" placeholder="请输入手机号号码"> 
          <div class="i-code" :class="{'i-code-s': !isCode}" @click="onSms">{{sms_name}}</div>
      </div>
       <div class="input-item">
        <img src="../../asset/imgs/login_mark.png" class="img" alt="">
        <input type="text" class="input" v-model.trim="smsCode" placeholder="请输入验证码"> 
      </div>
       <div class="input-item">
        <img src="../../asset/imgs/login_lock.png" class="img" alt="">
        <input type="password"  class="input" v-model.trim="password" :placeholder="id ==1?'请设置密码': '请设置新密码'"> 
      </div>
     <div class="btn-big" :class="{'btn-big-c': isSub}" @touchstart="onDown" @touchend="onSub">
       <span v-if="id ==1">提交注册</span> <span v-else>确定</span> 
    </div>
    </div>
     <van-toast id="van-toast" />
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
      id: 1,
      phone: '',
      isCode: true,
      isSub: false,
      sms_name: '获取验证码',
      smsId: '',
      smsCode: '',
      password: '',
      regPhone:  /^1[34578]\d{9}$/ ,
      appID: 'c668502ecc2bff27295388c23cbc3a18',
      apiID: '2ea655713d3262c4101c7097a301df0a'
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
    ,onSms() {
      if(!this.regPhone.test(this.phone)) {
        Toast('手机号格式有误')
        return ''
      }
      if(this.isCode) {
        const data = {
          "mobilePhoneNumber": this.phone
        }
        this.$http.post('/1/requestSmsCode',data,{
         headers:{
           "X-Bmob-Application-Id": this.appID,
           "X-Bmob-REST-API-Key": this.apiID,
          "Content-Type": "application/json"
         }, //http请求头，
          baseURL:"https://api2.bmob.cn", //请求基地址
        }).then((res) => {
          console.log(res)
          if(res.status == 200) {
            this.smsId = res.data.smsId
             this.daojishi()
          }
         
        })
        
      }
    }
    ,onCheckSms (){
      const data = {
          "mobilePhoneNumber": this.phone
        }
        this.$http.post(`/1/verifySmsCode/${this.smsCode}`,data,{
         headers:{
           "X-Bmob-Application-Id": this.appID,
           "X-Bmob-REST-API-Key": this.apiID,
          "Content-Type": "application/json"
         }, //http请求头，
          baseURL:"https://api2.bmob.cn", //请求基地址
        }).then((res) => {
          
            if(res.status == 200) {
              if(this.id == 1) {
                // 注册
                this.register()
              } else {
                // 忘记密码
                this.forget()
              }
            
          }
        }).catch(e => {
          // console.log(1,e)
          Toast('验证码错误')
        }) 
    }
    ,forget() {
       const data = `{"customerLoginPwdNew":"${md5(this.password)}","bingTel":"${this.phone}"}`
        this.$http.post('/customer/user/pwd/forget',data)
        .then(res => {
          if(res.status == 200 && res.data.resultCode == '0000000') {
            Toast('操作成功')
            setTimeout((res) => {
              Util.redTo('../login/main')
            },1500)
          } else {
            Toast(res.data.resultDesc)
          }
        })
    }
    ,register() {
        const data = `{"customerLoginPwd":"${md5(this.password)}","customerLinkTel":"${this.phone}"}`
        this.$http.post('/customer/register',data)
        .then(res => {
          if(res.status == 200 && res.data.resultCode == '0000000') {
            Toast('操作成功')
            setTimeout((res) => {
              Util.redTo('../login/main')
            },1500)
          } else {
            Toast(res.data.resultDesc)
          }
        })
    }
    ,onSub() {
     this.isSub = false
      if(!this.regPhone.test(this.phone)) {
        Toast('手机号格式有误')
        return ''
      }
      if(this.smsCode == '') {
        Toast('请输入验证码')
        return ''
      }
       if(this.password == '') {
        Toast('请输入密码')
        return ''
      }
      this.onCheckSms()
    }
    ,onDown() {
       this.isSub = true
    }
     ,daojishi(){
        let miao = 60
        this.isCode = false
          this.sms_name = `${miao}s` 
        let itime = setInterval(()=>{
            if(--miao == 1) {
                this.sms_name = `重新获取` 
                this.isCode = true
                clearInterval(itime)
            } else {
                this.sms_name = `${miao}s` 
            }
        },1000) 
    }
  },

  created () {
    this.getPhoneHeight()
  }
  ,mounted() {
    this.id = this.$mp.query.id
    this.password = this.smsCode = this.password = ''
  }
}
</script>

<style scoped  lang="less">
.register {
  background: #FDC915;
 
  .form {
     padding-top: 100px;
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
        .i-code {
          background: #FDC915;
          border-radius: 14px;
          color: #ffffff;
          width: 70px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 10px;
          height: 28px;
          margin-right: 8px;
        }
        .i-code-s {
          border: 1px solid #FDC915;
          background: #ffffff;
          color:#FDC915;
        }
      }
      .btn-big {
        display: flex;
        justify-content:  center;
        align-items: center;
        margin: 0 auto;
        margin-top: 100px;
        width: 272px;
        height: 40px;
        border: 2px  solid #ffffff;
        border-radius: 25px;
        box-shadow:0px 7px 20px -8px rgba(0,0,0,0.39);
        background: #FDC915;
        font-size: 15px;
        color:#ffffff;
   }
   .btn-big-c {
      color: #FDC915;
      background: #ffffff;
   }
  }

}
</style>
