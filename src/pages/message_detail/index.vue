<template>
<div class="message-detail" :style="{'height': height}">
  <div class="title van-hairline--top"><div class="mes">{{title}}</div> <div>{{endTime|| ''}}</div></div>
  <div class="cont van-hairline--top"> {{context}}</div>
</div>
</template>
<script>
import Util from '@/utils/index'
export default {
  components: {
  },
  data () {
    return {
      height: ''
      ,title: ''
      ,context: ''
      ,endTime:''
      ,id: 0
    }

  },
  computed: {
    userInfo: function() {
      return Util.getStorage('userInfo')
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
    
    ,readed() {
      const params = Util.getData({
        "msgId": `${this.id}`
        })
        this.$http.post(`/msg/read/${this.userInfo.id}`,params,{
            headers:{
              'Access-Token':this.userInfo.token,
            }, //http请求头，
          }).then((res) => {
            let data = res.data
            
            if(data.resultCode  == '0000000') {
                console.log('已读')
            }
        })
    }

  }
  ,created() {
    this.getPhoneHeight()
  },
    mounted() {
      const data = this.$mp.query
      this.id = data.id
      this.title = data.title
      this.context = data.context
      this.endTime = data.endTime == 'null' ?'': data.endTime
      // console.log(data.endTime)
      this.readed()
    }
}
</script>

<style  lang="less">
.message-detail {
  background: #EEEFF4;
  .title {
    background: #ffffff;
    padding: 15px 25px 15px 30px;
    display: flex;
    justify-content: space-between;
    color: #A1A2A4;
    font-size: 12px;
    align-items: center;
    .mes {font-size: 16px; color:#1C2627;}
  }
  .cont {
    background: #ffffff;
    padding: 11px 25px 25px 25px;
    text-indent: 15px;
    color:#1C2627;
    font-size: 14px;
    line-height: 25px;
    min-height: 190px;
  }
}
</style>
