<template>
<div class="jiaoyi-detail">
  <div class="title van-hairline--top">{{info.title}}</div>
  <div class="swiper">
      <swiper
          indicator-dots="false"
          autoplay="true"
          interval="3000"
          duration="1000"
          indicator-color="#FFF"
          indicator-active-color="#FDC915"
          style="height:250px;"
        >
            <swiper-item v-for="(item,index) in info.imgs" :key="index">
              <img v-if="item"  :src="baseUrl+item" class="slide-image"  />
            </swiper-item>
        </swiper>
  </div>
  <div class="cont van-hairline--top">
    <div class="price" v-if="info.paymentMax">¥{{info.paymentMin}} - {{info.paymentMax}}</div>
    <div class="con" v-if="info.problemDesc">问题描述:{{info.problemDesc}}</div>
    <div class="price" v-if="info.tradePrice">¥{{info.tradePrice}}</div>
    <div class="con" v-if="info.goodsDesc">商品描述:{{info.goodsDesc}}</div>
  </div>
  <div class="ch-6"></div>
  <div class="info">
    <div>联系人：{{info.linkMan}}</div>
    <div>联系方式：{{info.linkTel}}</div>
    <div v-if="info.deviceFullAddress">设备地址：{{info.deviceFullAddress}}</div>
  </div>
  <div class="option" v-if="isEdit">
    <div class="option-item act" @click="edit">编辑</div>
    <div class="option-item" @click="del">删除</div>
  </div>
    <van-dialog id="van-dialog" />
    <van-toast id="van-toast" />
</div>
</template>
<script>
import Toast from '@/../static/dist/toast/toast'
import Dialog from '@/../static/dist/dialog/dialog'
import Util from '@/utils/index'
import { baseUrl } from '@/utils/config'
import { setTimeout } from 'timers';
export default {
  data () {
    return {
      show:false,
      id: 0,
      baseUrl: `${baseUrl}/file/show/img/custOther/`,
      info: {},
      opt: '',
      isEdit: false,
      userInfo: Util.getStorage('userInfo')
    }
  },
  // computed: {
  //   userInfo: ()=> {
  //     return Util.getStorage('userInfo')
  //   }
  // },
  methods: {
    onShow() {
      this.show = !this.show
    }
    ,del() {
      Dialog.confirm({
        message: '确认删除？'
      }).then(() => {
        // on confirm
        this.delData()
      }).catch(() => {
        // on cancel
      })
    }
    ,delData() {
      let url = ''
      let params = ''
      if(this.opt == 'rep') {
        params = JSON.stringify({tradeId: this.id})
        url =`/device/trade/del/${this.userInfo.id}`
      } else {
        url = `/device/maintain/del/${this.userInfo.id}`
        params =  JSON.stringify({maintainId: this.id})
      }

      
       this.$http.post(url,params,{
            headers:{
              'Access-Token':this.userInfo.token,
            }, //http请求头，
          }).then((res) => {
            let data = res.data
            if(data.resultCode == '0000000') {
            
               Toast('删除成功，正在返回')
               setTimeout(()=>{
                Util.back()
               },1000)
            }
          })
    }
    ,getData() {
       let url = ''
        switch(this.opt) {
          case 'rep':
            url = `/device/trade/dt/${this.id}/${this.userInfo.id}`
          break
          case 'fab':
            url = `/device/maintain/dt/${this.id}/${this.userInfo.id}`
          break
        }
        this.$http.post(url,'',{
            headers:{
              'Access-Token':this.userInfo.token,
            }, //http请求头，
          }).then((res) => {
            let data = res.data
            if(data.resultCode == '0000000') {
               let info  = data.returnData
                let arr = []
               switch(this.opt) {
                  case 'rep':
                     arr  = info.goodsImgs.split('&')
                    if(!arr[arr.length - 1]) {
                      arr.pop()
                    }
                    info.imgs = arr
                  break
                  case 'fab':
                    arr  = info.problemImgs.split('&')
                    if(!arr[arr.length - 1]) {
                      arr.pop()
                    }
                    info.imgs = arr
                  break
                }
              this.info = info
              console.log(info)
            }
          })
    }
    ,edit() {
      let params = JSON.stringify(this.info)
      params = params.replace(/&/g,'')
      if(this.opt == 'rep') {
         Util.navTo(`../jiaoyi_publish/main?id=1&info=${params}`)
      } else {
         Util.navTo(`../jiaoyi_publish/main?id=2&info=${params}`)
      }
     
    }
  }
  ,onShow() {
    const {opt,id,isEdit} = this.$mp.query
    this.id = id
    this.opt = opt // rep , fab
    if(isEdit == 'edit') {
      this.isEdit  = true
    }
    console.log(this.opt)
      this.getData()
  }
}
</script>

<style  lang="less">
.jiaoyi-detail {
  padding-bottom: 60px;
  .title {
    padding: 20px 30px;
    color:#1C2627;
    font-size: 15px;
  }
  .swiper {
    padding-bottom: 11px;
      .slide-image {
        width: 100%;
        max-height: 100%;
      }
  }
  .cont {
    margin: 0 30px;
    .price {font-size: 15px;color:#FDC915;line-height: 21px;padding:9px 0;}
    .con {
      font-size: 12px;
      color:#1C2627;
      line-height: 19px;
      padding-bottom: 10px;
    }
  }
  .ch-6 {background: #EEEFF4;height: 6px;}
  .info {
    padding: 10px 30px;
    color:#1C2627;
    font-size: 12px;
    line-height: 22px;
  }
  .option {
    position:fixed;
    display: flex;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    background: #FF4444;
    color:#FFFFFF;
    .option-item {
      width: 50%;
      text-align: center;
      font-size: 16px;
      line-height: 50px;
    }
    .act {background: #FDC915;}
  }
}
</style>
