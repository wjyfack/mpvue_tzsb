<script>
export default {
  created () {
    // 调用API从本地缓存中获取数据
    // const logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    // console.log('app created and cache logs by setStorageSync')
  }
}
</script>

<style lang="less">
@import "asset/css/index.less";
@ms : #FDC915;  // 主色调
@fs: #FF4444; // 辅助色
@bt: #1C2627; // 标题颜色
@zw: #757980; // 正文
@cy :  #A1A2A4; // 次要文字
@f: #FFFFFF;
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
.s_btn { 
  background:linear-gradient(360deg,rgba(253,233,21,1) 0%,rgba(255,155,0,1) 100%);
 box-shadow:  0 5px 10px  rgba(0,0,0, .5);
 border: 0 !important;
 width:  121px !important;
 height: 40px !important;
line-height: 40px !important;
 color: @f;
}
.s_btn2 { 
  background: @f;
 box-shadow:  0 5px 10px  rgba(0,0,0, .5);
 border: 0 !important;
 width:  121px !important;
 height: 40px !important;
line-height: 40px !important;
 color: #F5A623 !important;
 border-radius: 20px;
	font-size: 16px;
}

</style>
