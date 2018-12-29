<template>
<div class="message">
  <a :href="'../message_detail/main?id='+item.id+'&title='+item.title+'&endTime='+item.sendTime+'&context='+item.context" class="message-item van-hairline--top" v-for="(item,index) in lists" :key="item.id">
    <div class="top">
      <div class="left">
        <div class="red"></div>
        <div class="title van-ellipsis">{{item.title}}</div>
      </div>
      <div class="right">{{item.sendTime || ''}}</div>
    </div>
    <div class="cont van-ellipsis">{{item.context}}</div>
  </a>
  <my-load :Loading="isload" :Bottom="isbt"></my-load>
</div>
</template>
<script>
import myLoad from '@/components/myLoad'
import Util from '@/utils/index'
export default {
  components: {
    myLoad
  },
  data () {
    return {
      page: 1,
      isbt: false,
      isload: false,
      lists: []
    }
  },
  computed: {
    userInfo: function() {
      return Util.getStorage('userInfo')
    }
  },
  methods: {
    getData() {
      this.isload = true
      const params = Util.getData({
        "pageSize":"10",
        "pageNum":this.page
        })
         this.$http.post(`/msg/un-read/${this.userInfo.id}`,params,{
            headers:{
              'Access-Token':this.userInfo.token,
            }, //http请求头，
          }).then((res) => {
            let data = res.data
            console.log(data)
            if(data.resultCode  == '0000000') {
              this.isload = false
              if(data.returnData.length == 0) {
                 this.isbt = true
                 this.page >1 ? --this.page : ''
              } else{
                this.lists = [...this.lists,...data.returnData]
              }
              
            }
        })
    }
  },

  mounted () {
    this.lists = []
    this.getData()
  }

  ,onReachBottom () {
    ++ this.page
    this.getData()
  }

}
</script>

<style  lang="less">
.message {
  background:  #EEEFF4;
  &-item {
    background: #ffffff;
    padding: 12px 0;
    .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 25px 0 20px;
      .left {
        display: flex;
        align-items: center;
       
        .red  { width: 6px;height: 6px;background: #FF4444;border-radius: 50%;}
        .title {font-size: 14px;color:#1C2627; padding-left: 10px;}
      }
      .right{font-size: 12px;color:#A1A2A4}
    }
    .cont {
      font-size: 12px;
      color:#757980;
      padding: 0 25px;
    }
  }
}
</style>
