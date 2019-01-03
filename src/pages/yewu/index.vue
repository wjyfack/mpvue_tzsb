<template>
  <div class="yewu">
    <div class="yewu-item van-hairline--top">
      <div class="title">
        <div class="br"></div>
        <div>企业业务</div>
      </div>
      <div class="option">
        <a href="" class="option-item">
          <img src="http://placehold.it/100x100" alt="" class="img">
          <div>行政许可业务</div>
        </a>
        <a href="" class="option-item">
          <img src="http://placehold.it/100x100" alt="" class="img">
          <div>新增设备监视</div>
        </a>
        <a href="" class="option-item">
          <img src="http://placehold.it/100x100" alt="" class="img">
          <div>预约检查</div>
        </a>
        <a href="" class="option-item">
          <img src="http://placehold.it/100x100" alt="" class="img">
          <div>技术人员招聘</div>
        </a>
        <a href="" class="option-item">
          <img src="http://placehold.it/100x100" alt="" class="img">
          <div>设备新增管理</div>
        </a>
      </div>
    </div>
    <div class="yewu-item van-hairline--top">
      <div class="title">
        <div class="br"></div>
        <div>个人业务</div>
      </div>
      <div class="option">
        <a href="" class="option-item">
          <img src="http://placehold.it/100x100" alt="" class="img">
          <div>特种设备考证</div>
        </a>
        <a href="" class="option-item">
          <img src="http://placehold.it/100x100" alt="" class="img">
          <div>题库练习</div>
        </a>
        <a href="" class="option-item">
          <img src="http://placehold.it/100x100" alt="" class="img">
          <div>个人资历</div>
        </a>
        <a href="" class="option-item">
          <img src="http://placehold.it/100x100" alt="" class="img">
          <div>个人资历</div>
        </a>
        
      </div>
    </div>
    <tab-bar active="3"/>
  </div>
</template>
<script>
import Util from '@/utils/index'
import tabBar from '@/components/tabBar'
import myLoad from '@/components/myLoad'
export default {
  components: {
    tabBar,
    myLoad
  },
  data () {
    return {
     
    }
  },
  computed: {
    userInfo: () => {
      return Util.getStorage('userInfo')
    }
  },
  methods: {
   
  },

  created () {
  }
  ,mounted() {

  }
  ,onReachBottom () {

  }
}
</script>

<style  lang="less">
.yewu {
  background: #EEEFF4;
  width:100%;
  &-item {
    background: #ffffff;
    .title {
      display: flex;
      align-items: center;
      padding:  11px 20px;
      color:#1C2627;
      font-size: 14px;
      .br {background: #FDC915;width: 2px;height: 13px;margin-right:10px; }
    }
    .option {
      display: flex;
      flex-wrap: wrap;
      padding: 25px;
      padding-top: 0;
      .option-item {
        width: 25%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        font-size: 10px;
        margin-top: 15px;
        .img {width: 22px; height: 22px;margin-bottom: 5px;}
      }
    }
  }
}
</style>
