<template>
<div class="forget" :style="{'height': height}">
  <div class="form-input van-hairline--top">
    <div class="label">账号</div>
    <input type="text" class="input" :value="'admin'" disabled>
  </div>
  <div class="form-input van-hairline--top">
    <div class="label">旧密码</div>
    <input type="password" class="input" placeholder="请填写旧密码">
  </div>
  <div class="form-input van-hairline--top">
    <div class="label">新密码</div>
    <input type="password" class="input" placeholder="请输入新密码">
  </div>
  <div class="form-input van-hairline--top">
    <div class="label">确认密码</div>
    <input type="password" class="input" placeholder="请再次输入新密码">
  </div>
  <div class="btn van-hairline--top">
    <van-button round size="small" type="primary" custom-class="pro">确定</van-button>
  </div>
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
