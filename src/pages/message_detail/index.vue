<template>
<div class="message-detail" :style="{'height': height}">
  <div class="title van-hairline--top"><div class="mes">您有设备即将年检</div> <div>今天 12:30</div></div>
  <div class="cont van-hairline--top"> 设备登记号为梯粤EMC234将于2018年4月进行年检，请配合检查人员进行设备检查工作。</div>
</div>
</template>
<script>

export default {
  components: {
  },
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
  }
  ,created() {
    this.getPhoneHeight()
  }
}
</script>

<style  lang="less">
.message-detail {
  background: #EEEFF4;
  .title {
    background: #ffffff;
    padding: 15px 25px 15px 30px;
    display: flex;
    justify-content: space-between;
    color: #A1A2A4;
    font-size: 12px;
    align-items: center;
    .mes {font-size: 16px; color:#1C2627;}
  }
  .cont {
    background: #ffffff;
    padding: 11px 25px 25px 25px;
    text-indent: 15px;
    color:#1C2627;
    font-size: 14px;
    line-height: 25px;
    min-height: 190px;
  }
}
</style>
