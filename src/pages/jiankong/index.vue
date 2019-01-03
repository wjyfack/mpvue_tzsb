<template>
  <div class="jiankong">
      <div class="kong-item" v-for="(itm,inex) in 3" :key="inex">
        <div class="img-sh"><img src="http://placehold.it/100x100" alt="" class="img"></div>
        <div class="cont">
          <div class="brand">正常</div>
          <div class="title">
            <div>锅炉1号机</div>
            <div class="deng">
              <div>使用登记证</div>
              <div class="hao">锅粤ES5385</div>
            </div>
            <div class="msg">
                <div class="name">通信状态</div>
                <div class="val">正常</div>
              </div>
              <div class="msg">
                <div class="name">运行信号</div>
                <div class="val">正常</div>
              </div>
              <div class="msg">
                <div class="name">蒸汽压力</div>
                <div class="val ">正常</div><div class="val act">异常</div>
              </div>
              <div class="msg msg-act">
                <div class="name">环境温度</div>
                <div class="val">正常</div>
              </div>
              <div class="msg msg-no">
                <div class="name">热效率</div>
                <div class="val">正常</div>
              </div>
              <div class="msg">
                <div class="name">燃气压力</div>
                <div class="val">正常</div>
              </div>
              <div class="msg">
                <div class="name">运行时间</div>
                <div class="val">正常</div>
              </div>
          </div>

        </div>
      </div>
    <tab-bar active="2"/>
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
   
    getData() {

      const params = Util.getData({
      })
         this.$http.post(`/task/command/page/${this.userInfo.id}`,params,{
            headers:{
              'Access-Token':this.userInfo.token,
            }, //http请求头，
          }).then((res) => {
            let data = res.data
            console.log(data)
            if(data.resultCode == '0000000') {
              let returnData = data.returnData
              
            }
          })
    }
  },

  created () {
  }
  ,mounted() {

  }
  ,onReachBottom () {
  //  this.getData()
  }
}
</script>

<style  lang="less">
.jiankong {
  background: #EEEFF4;
  padding-top: 10px;
  padding-bottom: 70px;
   .kong-item {
     margin: 10px 20px 0 20px;
     position: relative;
     display: flex;
     background: #ffffff;
     padding: 20px 0;
     border-radius: 5px;
     .img-sh {
       padding: 32px 20px 0 8px;
       .img {
         width: 112px;
         height: 78px;
       }
     }
     .cont {
       flex: 1;
       display: flex;
       flex-direction: column;
       position: relative;
       .brand {
         position: absolute;
         right: 0;
         top: 0;
         text-align: center;
         width: 50px;
         height: 18px;
         line-height: 18px;
         font-size: 12px;
         color: #ffffff;
         background: #7ED321;
         line-height: 17px;
          .yi {
            background: #FDC915
          }
          .ting {
            background: #757980
          }
       }
      .title {
        display: flex;
        flex-direction: column;
        color:#1C2627;
        font-size: 14px;
        .deng {
          display: flex;
          color: #A1A2A4;
          font-size: 9px;
          .hao {color:#757980;font-size: 10px;padding-left: 6px;}
        }
        }
        .msg {
          display: flex;
          position: relative;
          ::before {
             content:  '';
             background: #7ED321;
             width:6px;
             height: 6px;
             border-radius: 50%;
             position: absolute;
             top: 50%;
             left: 0;
             transform: translateY(-50%);
          }
          .name {
            font-size: 10px;
            color:#A1A2A4;
            min-width: 60px;
            margin-left: 10px;
          }
          .val {
            color:#1C2627;
            font-size: 10px;
            margin-right: 5px;
          }
          .act {
            color:#FDC915;
          }

      }
      .msg-act {
        ::before {
          background: #FDC915
        }
      }
      .msg-no {
        ::before {
          background: #757980
        }
      }
     }
   }
}
</style>
