<template>
<div class="liaotian-list van-hairline--top">
  <!-- <van-swipe-cell right-width="65"> -->
      <a href="../zhaoping_liaotian_neir/main?id=1" class="group van-hairline--bottom" >
        <div class="g-img">
          <img src="http://placehold.it/100x100" alt="" class="img"></div>
        <div class="con">
          <div class="name">姓名</div>
          <div class="content">消息</div>
        </div>
        <div class="time">11.11</div>
      </a>
      <!-- <div slot="right" @click="smsdel">删除</div>
    </van-swipe-cell> -->
    <van-toast id="van-toast" />
</div>
</template>
<script>

import Toast from '@/../static/dist/toast/toast'

import Util from '@/utils/index'
import { baseUrl } from '@/utils/config'
export default {

  data () {
    return {
      id:0,
      base: baseUrl+'/file/show/img/base/',
      userInfo: {}
    }
  },
  // computed: {
  //   userInfo: ()=> {
  //     return Util.getStorage('userInfo')
  //   }
  // },
  methods: {
    getMessages() {
    
       const params = JSON.stringify({
         id: `${this.id}`
       })
      this.$http.post(`/recruitment/dt/${this.userInfo.id}`,params,{
        headers:{
          'Access-Token':this.userInfo.token,
        }, //http请求头，
      }).then((res) => {
        let data = res.data

        if(data.resultCode == '0000000') {
          let info = data.returnData
           info.brands = Util.getCertifSort(info.skillRequires)
           info.company.fulis = info.company.treatments.split(',')
           this.info = info
           Util.setTitle(this.info.jobName)
        } else {
          Toast(data.resultDesc)
        }
      })
    
    }

  }
  ,mounted() {
    console.log(1)
    this.userInfo = Util.getStorage('userInfo')
    this.id = this.$mp.query.id
    Util.setTitle('消息')
    // this.getMessages()
  }
}
</script>

<style  lang="less">
.liaotian-list {
  .group {
    display: flex;
    .g-img {
      width: auto;
      display: flex;
      margin: 15px 17px;
      position: relative;
      .img {
        width: 44px;
        height: 44px;
        border-radius: 50%;
      }
    }
    .con {
    display:flex;
    flex-direction:column;
    width:50%;
    margin: 15px 0;
    .name {
      color:#666666;
      font-size:16px;
      margin-bottom:7px;
      }
      .content {
        min-height:10px;
        width:100%;
        color:#666666;
        font-size:13px;
        text-overflow:ellipsis;
        white-space:nowrap;
        overflow:hidden;
      }
    }
    .time {
      position:absolute;
      right:17px;
      top:17px;
      display:flex;
      flex-direction:column;
      align-items:flex-end;
      color:#999999;
      font-size:10px;
      margin-bottom:10px;
      text-align:right;

    }
  }
}
</style>
