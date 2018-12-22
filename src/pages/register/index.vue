<template>
  <div class="register"  :style="{height: height}">
    <div class="form">
      <div class="input-item">
        <img src="../../asset/imgs/login_people.png" class="img" alt="">
        <input type="text" class="input" placeholder="请输入手机号号码"> 
          <div class="i-code" :class="{'i-code-s': true}">获取验证码</div>
      </div>
       <div class="input-item">
        <img src="../../asset/imgs/login_mark.png" class="img" alt="">
        <input type="text" class="input" placeholder="请输入验证码"> 
      </div>
       <div class="input-item">
        <img src="../../asset/imgs/login_lock.png" class="img" alt="">
        <input type="password" class="input" placeholder="请设置密码"> 
      </div>
     <div class="btn-big" :class="{'btn-big-c': true}">
        提交注册
    </div>
    </div>
    
  </div>
</template>

<script>

export default {
  data () {
    return {
      height: ''
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
  },

  created () {
    this.getPhoneHeight()
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
