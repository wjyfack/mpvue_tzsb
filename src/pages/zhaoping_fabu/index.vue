<template>
<div class="company_fabu">
      <div class="fabu-item van-hairline--top">
        <div class="left">
          <div class="title">职位名称</div>
          <div class="cont">请填写职位名称</div>
        </div>
        <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
      </div>
      <div class="fabu-item van-hairline--top">
        <div class="left">
          <div class="title">职位名称</div>
          <div class="cont">请填写职位名称</div>
        </div>
        <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
      </div>
      <div class="fabu-item van-hairline--top">
        <div class="left">
          <div class="title">技能要求</div>
          <div class="cont">请添加技能要求</div>
        </div>
        <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
      </div>
      <div class="fabu-item van-hairline--top">
        <div class="left">
          <div class="title">学历要求</div>
          <div class="cont">请选择学历要求</div>
        </div>
        <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
      </div>
      <div class="fabu-item van-hairline--top">
        <div class="left">
          <div class="title">薪资待遇</div>
          <div class="cont">请选择薪资待遇</div>
        </div>
        <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
      </div>
      <a href="../zhaoping_fabus/main?opt=addr" class="fabu-item van-hairline--top">
        <div class="left">
          <div class="title">工作地点</div>
          <div class="cont">请填写工作地点</div>
        </div>
        <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
      </a>
      <a href="../zhaoping_fabus/main?opt=req" class="fabu-item van-hairline--top">
        <div class="left">
          <div class="title">职位要求</div>
          <div class="cont">请填写职位要求</div>
        </div>
        <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
      </a>
      <div class="h-6"></div>
      <div class="fabu-item van-hairline--top">
        <div class="left">
          <div class="title">企业介绍</div>
          <div class="con">香瓜科技</div>
        </div>
        <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
      </div>
      <div class="btn-su">提交</div>
      <van-toast id="van-toast" />
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
.company_fabu {
  padding-bottom: 60px;
  .fabu-item {
    display: flex;
    padding: 10px 25px;
    justify-content: space-between;
    align-items: center;
    .left {
      flex:1;
      display: flex;
      .title {
        font-size: 14px;
        color:#1C2627;
        width:120px;
      }
      .cont {
        font-size: 12px;
        color:#A1A2A4;
      }
      .con {font-size: 12px;color:#1C2627;}
    }
    .ri-img {width: 8px;height: 14px;}
  }
  .h-6 {background: #EEEFF4;height: 6px;}
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
