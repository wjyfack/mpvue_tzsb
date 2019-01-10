<template>
<div class="jianli_detail van-hairline--top">
  <div class="header van-hairline--bottom">
    <div class="left">
      <div class="name">姓名</div>
      <div class="info">男·22岁·本科</div>
    </div>
    <img src="http://placekitten.com/100/100" alt="" class="ri-img">
  </div>
  <div class="cent van-hairline--bottom">
    <div class="title title-min">在职-考虑机会</div>
    <div class="cent-item"><div class="c1">手机号</div><div class="c1">12345678910</div></div>
    <div class="cent-item"><div class="c1">工龄</div><div class="c1">1年</div></div>
  </div>
  <div class="cent van-hairline--bottom">
    <div class="title">求职期望</div>
    <div class="cent-item"><div class="">期待职位，工作地点</div><div class="c2">5000-6000</div></div>
  </div>
  <div class="cent van-hairline--bottom">
    <div class="cent-item"><div >技能证书</div><div class="c1">R1</div></div>
  </div>
  <div class="cent van-hairline--bottom">
    <div class="title">工作经历</div>
    <div class="cent-item"><div >公司名称</div><div class="c1">2010.02-2018.01</div></div>
    <div class="cent-item title-min"><div >职位名称</div><div class="c1"></div></div>
    <div class="cent-item"><div class="c1 ti">工作内容</div><div></div></div>
  </div>
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

  },
  created () {
    Util.setBackGroup()
  }
 
}
</script>

<style  lang="less">
.jianli_detail {
  padding: 20px 30px;
  .header {
    display: flex;
    justify-content: space-between;
    padding-bottom: 15px;
    .left {
      display: flex;
      flex-direction: column;
      .name {color:#1C2627;font-size: 18px;line-height: 25px;}
      .info {color:#757980;font-size: 11px;}
    }
    .ri-img {
      width: 45px;
      height: 45px;;
      border-radius: 50%;
    }
  }
  .cent {
    padding: 10px 0;
    .title {color:#1C2627;font-size: 13px;line-height: 26px;}
    .title-min {font-size: 11px;line-height: 16px;}
    .cent-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      line-height: 26px;
      font-size: 13px;
      color:#1C2627;
    }
    .c1 {color:#757980;}
    .c2 {color:#FDC915;}
    .ti {line-height: 18px;}
  }
}
</style>
