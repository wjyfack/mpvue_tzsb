<template>
<div class="zhiwei-detail van-hairline--top">
  <div class="header van-hairline--bottom">
    <div class="top">
      <div class="name">叉车司机</div>
      <div class="price">3000-3999元/月</div>
    </div>
    <div class="brand">
      <div class="brand-item">大专</div>
    </div>
  </div>
  <div class="cont van-hairline--bottom">
    <div class="title">职位要求</div>
    <div class="con">
      1.持有效叉车证，身体健康，能承受工作压力； 
      2.工作三班倒，购买五险一金；
      </div>
  </div>
  <div class="cont van-hairline--bottom">
    <div class="title">技能要求</div>
    <div class="brand">
      <div class="brand-item">N2</div>
    </div>
  </div>
  <div class="cont van-hairline--bottom">
    <div class="title">工作地点</div>
    <div class="con"> 佛山市南海区平西工业园 </div>
  </div>
  <div class="info">
    <img src="http://placekitten.com/100/100" alt="" class="avatar">
    <div class="detail">
      <div class="name">香瓜科技</div>
      <div class="addr">佛山市南海区平西工业园</div>
      <div class="brand">
        <div class="brand-item act">五险一金</div>
        <div class="brand-item act">带薪年假</div>
      </div>
    </div>
  </div>
  <div class="btn-su">投递简历</div>
</div>
</template>
<script>

import Toast from '@/../static/dist/toast/toast'

import Util from '@/utils/index'
export default {

  data () {
    return {
      
    }
  },
  computed: {
    userInfo: ()=> {
      return Util.getStorage('userInfo')
    }
  },
  methods: {

  }
  ,mounted() {
    Util.setTitle('叉车司机')
  }
}
</script>

<style  lang="less">
.zhiwei-detail {
  padding: 25px 30px 60px 30px;
  .header {
    padding-bottom: 25px;
    .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .name {color:#1C2627;font-size: 18px;border-bottom: 2px solid #FDC915;padding-bottom: 5px;}
      .price {color:#FDC915;font-size: 12px;}
    }
  }
  .cont {
    padding: 20px 0;
    .title {color:#1C2627;font-size: 14px;}
    .con {
      color:#757980;
      font-size: 12px;
    }
  }
  .info {
    display: flex;
    padding-top:10px;
    .avatar {
      width: 36px;
      height: 36px;
    }
    .detail {
      flex:1;
      display:flex;
      flex-direction: column;
      padding-left: 20px;
      .name {color:#1C2627;font-size:14px;}
      .addr {font-size: 13px;color:#757980;}
      .act {background: #EEEFF4;color:#757980}
    }
  }
  .brand {
    display: flex;
    .brand-item {
      width:53px;
      height: 17px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #E5E7EC;
      font-size: 11px;
      color:#757980;
      margin-right: 20px;
      margin-top:10px;
    }
  }
  .btn-su {
    height: 50px;
    position:fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #FDC915;
    color:#FFFFFF;
    font-size: 16px;
    line-height: 50px;
    text-align: center;
  }
}
</style>
