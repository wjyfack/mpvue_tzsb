<template>
<div class="forget" :style="{'height': height}">
  <div class="form-input van-hairline--top">
    <div class="label">账号</div>
    <input type="text" class="input" :value="userInfo.customerLoginName" disabled>
  </div>
  <div class="form-input van-hairline--top">
    <div class="label">旧密码</div>
    <input type="password" v-model.trim="account.oldPwd" class="input" placeholder="请填写旧密码">
  </div>
  <div class="form-input van-hairline--top">
    <div class="label">新密码</div>
    <input type="password" v-model.trim="account.newPwd" class="input" placeholder="请输入新密码">
  </div>
  <div class="form-input van-hairline--top">
    <div class="label">确认密码</div>
    <input type="password" v-model.trim="account.agnPwd" class="input" placeholder="请再次输入新密码">
  </div>
  <div class="btn van-hairline--top">
    <van-button round  type="primary" custom-class="pro" @click="onSub">确定</van-button>
  </div>
  <van-toast id="van-toast" />
</div> 
</template>
<script>
import Util from '@/utils/index'
import Toast from '@/../static/dist/toast/toast'
import md5 from 'js-md5'
export default {
  components: {
  },
  data () {
    return {
       height: '',
       account: {
         oldPwd: '',
         newPwd: '',
         agnPwd: ''
       }
    }
  },
  computed: {
    userInfo () {
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
    ,onSub() {
     const {   oldPwd,newPwd,agnPwd} = this.account
     if(oldPwd == '') {
       Toast('请输入旧密码')
       return ''
     } else if(newPwd == '') {
        Toast('请输入新密码')
       return ''
     }else if (agnPwd == '') {
       Toast('请再次输入新密码')
       return ''
     }else if(newPwd != agnPwd) {
       Toast('密码不一致')
       return ''
     }
      const params = JSON.stringify({
        customerLoginName: this.userInfo.customerLoginName,
        customerLoginPwd: md5(oldPwd),
        customerLoginPwdNew: md5(newPwd)
      })
         this.$http.post(`/customer/user/pwd/update/${this.userInfo.id}`,params,{
            headers:{
              'Access-Token':this.userInfo.token,
            }, //http请求头，
          }).then((res) => {
            let data = res.data
            console.log(data)
            if(data.resultCode  == '0000000') {
              Toast('修改成功,正在为你返回.....')
              this.userInfo.customerLoginPwd = md5(newPwd)
              Util.setStorage('userInfo',this.userInfo)
              setTimeout(()=> {
                  wx.navigateBack({
                      delta: 1
                    })
              },1500)
            }else {
              Toast(data.resultDesc)
            }
        })
    }
  },

  created () {
    this.getPhoneHeight()
  }


}
</script>

<style  lang="less" >
.forget {
  background: #EEEFF4;
  .form-input {
    background: #ffffff;
    padding: 10px 25px;
    display: flex;
    align-items: center;
    .label {color:#1C2627;font-size: 14px;min-width: 100px;}
    .input {flex: 1;color:#1C2627;font-size: 12px;}
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
