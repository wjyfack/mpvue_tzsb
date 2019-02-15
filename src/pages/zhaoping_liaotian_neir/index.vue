<template>
<div class="liaotian-neir van-hairline--top">
   <div class="mess">
     <div class="mess-item"> 
       <text class="chat-list-time-style">11:11</text>
        <div class="mess-info">
          <img src="http://placehold.it/100x100" alt="" class="avatar">
          <!-- <img src="../asset/imgs/popu_blue.png" alt="" class="chat-list-arrow-style"> -->
          <div class="isOtherWordStyle">你哟是间一起参加社团活动</div>
        </div>
      </div>
      <div class="mess-item"> 
       <text class="chat-list-time-style">11:11</text>
        <div class="mess-info mess-info-ri">
          <img src="http://placehold.it/100x100" alt="" class="avatar">
          <!-- <img src="../asset/imgs/popu_blue.png" alt="" class="chat-list-arrow-style"> -->
          <div class="isOtherWordStyle">你哟是间一起参加社团活动</div>
        </div>
      </div>
     
    </div> 
   <div class="input-flex-column">
     <div class="input-text-voice-super">
       <input type="text" @confirm="send" class="chat-input-style">
      <div class="press-style-opacity">
        <div class="chat-input-send-button-style">发送</div>
      </div>
     </div>
     
   </div>
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
  }
}
</script>

<style  lang="less">
.liaotian-neir {
    .mess {
      
      .mess-item {
        width:100%;
        display:flex;
        flex-direction:column;
        align-items:center;
        .mess-info {
           width:100%;
          display:flex;
          flex-direction:row;
          margin-bottom:10px;
          margin-top:10px;
          
           .avatar {
            width:35px;
            height:35px;
            border-radius:50%;
            margin-left:7px;
            margin-right:7px
          }
         
        }
         .mess-info-ri {
            flex-direction: row-reverse;
          }
      }
      
    }

    .isOtherWordStyle {
      border-radius:5px;
      padding:10px;
      font-size:15px;
      max-width:60%;
      background-color:#8fcbf7;
      color:#333333;
      margin-right:14rpx;
      margin-left:-1rpx;
      word-wrap:break-word;
      }
    .chat-list-arrow-style {
        width: 11rpx;
        height: 20rpx;
        margin-top: 25rpx
    }
    .chat-list-time-style {
      margin-top: 30rpx;
      background-color: rgba(0,0,0,.3);
      color: white;
      padding: 8rpx 10rpx 6rpx 10rpx;
      border-radius: 6rpx;
      width: auto;
      font-size: 22rpx;
      line-height: 22rpx;
      text-align: center;
  }
  .input{
      padding-top: 10rpx;
      padding-bottom:10rpx;
      width: 100%;
  }

  .extra-btn-style{
      width: 50rpx;
      height: 50rpx;
      padding:25rpx 15rpx;
      display: flex;
      flex-shrink:0;
  }
  .input-text-voice-super{
      display: flex;
      flex-direction: row;
      background-color: white;
      width: 100%;
      align-items: center;
      height:100rpx;
      // padding: 0 15px;
  }
  .input-flex-column{
      width:100%;
      display: flex;
      flex-direction:column;
      position: fixed;
      left: 0;
      bottom: 0;
  }

  .list-divide-line {
      width: 100%;
      height: 1rpx;
      background-color: #dddddd;
  }

  .chat-input-style{
      border-radius:10rpx;
      border:1rpx solid gainsboro;
      margin-top:14rpx;
      margin-bottom: 13rpx;
      padding:10rpx;
      min-height: 51rpx;
      background-color: #EFEFEF;
      flex:1;
      margin-left: 15rpx;
  }

  .chat-input-send-button-style{
      width: 100rpx;
      padding: 15rpx 0;
      font-size: 30rpx;
      text-align: center;
      margin: 0 10rpx;
      border-radius: 10rpx;
      background: #FDC915;
      color:#FFFFFF;
  }
}
</style>
