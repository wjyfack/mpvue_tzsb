<template>
<div class="info" :style="{'height': height}" >
  <div class="part" v-if="id == 1">
    <div class="item van-hairline--top">
      <div class="title">单位名称</div>
      <div class="cont">广东中奥物业管理有</div>
    </div>
    <div class="item van-hairline--top">
      <div class="title">单位地址</div>
      <div class="cont">广东中奥物业管理有限公司佛山南海分公司</div>
    </div>
  </div>
  <div class="part" v-if="id == 2">
    <div class="item van-hairline--top">
      <div class="title">联系人</div>
      <div class="cont">香瓜</div>
    </div>
    <div class="item van-hairline--top">
      <div class="title">联系方式</div>
      <div class="cont">13500000000</div>
    </div>
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
      id: 0, // 1 : 企业信息 2: 联系人信息
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
  ,mounted() {
    this.id = ~~this.$mp.query.id || 0
    console.log(this.id)
    let title = ''
    switch(this.id) {
      case 1: 
        title = '企业信息'
      case 2:
        title = '联系人信息'
    }
    Util.setTitle(title)
  }
}
</script>

<style  lang="less" scoped>
.info {
  background: #EEEFF4;
  .item {
    display: flex;
    padding: 7px 25px;
    align-items: center;
    background: #ffffff;
    .title {min-width: 120px;font-size: 14px;color:#1C2627;}
    .cont {font-size: 12px; color:#757980;}
  }
}
</style>
