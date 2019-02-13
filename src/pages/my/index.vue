<template>
<div class="my">
<div class="top">
  <div class="bg"></div>
  <div class="hi"></div>
  <div class="avatar">
    <img src="../../asset/imgs/my_person.png" alt="" class="img">
    <div class="name">{{userInfo.customerLoginName}}</div>
  </div>
</div>
<div class="list van-hairline--top">
  <a href="../my_rengzheng/main" class="list-item">
    <div class="cont van-hairline--bottom">
      <img src="../../asset/imgs/my_rengzheng.png" alt="" class="b-img">
      <div class="title">设备认证</div>
    </div> 
  </a>
  <a :href="'../my_info/main?id=1&cName='+userInfo.companyName+'&cAddr='+userInfo.companyAddress" class="list-item">
    <div class="cont van-hairline--bottom">
      <img src="../../asset/imgs/my_qiye.png" alt="" class="b-img">
      <div class="title">企业信息</div>
    </div>
  </a>
  <a  :href="'../my_info/main?id=2&name='+userInfo.customerLinkMan+'&phone='+userInfo.customerLinkTel" class="list-item">
    <div class="cont">
      <img src="../../asset/imgs/my_info.png" alt="" class="b-img">
      <div class="title">联系人信息</div>
    </div>
  </a>
  <a href="../my_forget/main"  class="list-item mar-top">
    <div class="cont van-hairline--bottom">
      <img src="../../asset/imgs/my_xiugai.png" alt="" class="b-img">
      <div class="title">修改密码</div>
    </div>
  </a>
  <div class="list-item">
    <!-- <div class="cont">
      <img src="../../asset/imgs/my_about.png" alt="" class="b-img">
      <div class="title">关于软件</div>
    </div> -->
  </div>
  <div class="list-item mar-top" @click="outLogin">
    <div class="cont">
      <img src="../../asset/imgs/my_tuichu.png" alt="" class="b-img">
      <div class="title">退出登陆</div>
    </div>
  </div>
  <tab-bar active="4"/>
</div>

</div>
</template>
<script>
import Util from '@/utils/index'
import tabBar from '@/components/tabBar'
export default {
  components: {
    tabBar
  },
  data () {
    return {
    }
  },
  // computed: {
  //   userInfo () {
  //     console.log(Util.getStorage('userInfo') )
  //     return Util.getStorage('userInfo') 
  //   }
  // },
  methods: {
    outLogin() {
      wx.showToast({
        title: '正在退出',
        icon: 'loading',
        duration: 2000
      })
      wx.clearStorage()
      setTimeout(() => {
        wx.hideToast()
        Util.redTo('../login/main')
      }, 2000)
    }
  },

  created () {

  }
  ,onReachBottom () {
  }

}
</script>

<style scoped  lang="less">
.my {
  .top {
    position: relative;
    .bg {
      background: url('data:image/png;base64,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') center center no-repeat;
      background-size: 100%;
      width: 100%;
      height: 135px;
    }
    .hi {
      height: 70px;
    }
    .avatar {
      position: absolute;
      top: 53px ;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      .img {width: 67px; height: 67px;border-radius: 50%;}
      .name {font-size: 18px; color: #1C2627;}
    }

  }
  .list {
    background: #EEEFF4;
    padding-bottom: 10px;
    .list-item {
      background:  #ffffff;
      padding-left: 30px;
      .cont {
        display: flex;
        align-items: center;
        padding: 8px 0;
        .b-img {width: 20px;height: 20px;}
        .title {font-size: 14px; color:#1C2627;padding-left: 15px;}
      }
    }
    .mar-top {
      margin-top: 10px
    }
    .mar-bottom {
      margin-bottom: 10px
    }
  }
}
</style>
