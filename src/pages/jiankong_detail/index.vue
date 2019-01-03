<template>
<div class="jiankong-detail">
  <div class="header">
      <div class="title">
      <div class="name">锅炉1号机</div>
      <div class="deng">
        <div>使用登记证</div> 
        <div class="pd">锅粤ES5385</div>
        </div>
      <img src="http://placehold.it/100x100" alt="" class="img">
    <img src="../../asset/imgs/edit.png" alt="" class="img-edit">
  </div>
  </div>
  <div class="gouhu">
    <div class="status">
      <div class="status-item">
        <div>通信状态</div>
        <div class="tai act">正常</div>
      </div>
       <div class="status-item">
        <div>运行信号</div>
        <div class="tai">正常</div>
      </div>
       <div class="status-item">
        <div>环境温度</div>
        <div class="tai">26°C</div>
      </div>
       <div class="status-item">
        <div>热效率</div>
        <div class="tai">95.22%</div>
      </div>
       <div class="status-item">
        <div>运行时间</div>
        <div class="tai">132天</div>
      </div>
    </div>
    <div class="kuang-item van-hairline--top">
      <div class="title">
        <img src="../../asset/imgs/h_shui.png" alt="" class="s-img">
        <div class="name">锅炉给水</div>
      </div>
      <div class="bot">
        <div class="bot-item">
          <div>给水温度</div>
          <div class="dat">104°C</div>
        </div>
        <div class="bot-item">
          <div>给水硬度</div>
          <div class="dat">0.02mmol/L</div>
        </div>
      </div>
      <div class="bot">
        <div class="bot-item">
          <div>给水量(瞬时)</div>
          <div class="dat">1.2t</div>
        </div>
        <div class="bot-item">
          <div>给水量(累计)</div>
          <div class="dat">7836t</div>
        </div>
      </div>
    </div>
    <div class="kuang-item van-hairline--top">
      <div class="title">
        <img src="../../asset/imgs/h_shuiwei.png" alt="" class="s-img">
        <div class="name">锅炉水位</div>
      </div>
      <div class="bot">
        <div class="bot-item">
          <div>锅炉高水位</div>
          <div class="dat">正常</div>
        </div>
        <div class="bot-item">
          <div>锅炉低水位</div>
          <div class="dat">正常</div>
        </div>
      </div>
    </div>
    <div class="kuang-item van-hairline--top">
      <div class="title">
        <img src="../../asset/imgs/h_rang.png" alt="" class="s-img">
        <div class="name">锅炉燃气</div>
      </div>
      <div class="bot">
        <div class="bot-item">
          <div>燃气压力</div>
          <div class="dat">0.3MPa <span class="yi">异常</span></div>
        </div>
        <div class="bot-item">
          <div>燃气流量(累计)</div>
          <div class="dat">13234</div>
        </div>
      </div>
    </div>
    <div class="kuang-item van-hairline--top">
      <div class="title">
        <img src="../../asset/imgs/h_qing.png" alt="" class="s-img">
        <div class="name">锅炉蒸汽</div>
      </div>
      <div class="bot">
        <div class="bot-item">
          <div>蒸汽压力</div>
          <div class="dat">1.2MPa</div>
        </div>
        <div class="bot-item">
          <div>蒸汽温度</div>
          <div class="dat">142°C</div>
        </div>
      </div>
      <div class="bot">
        <div class="bot-item">
          <div>蒸汽流量(瞬时)</div>
          <div class="dat">1.2t</div>
        </div>
        <div class="bot-item">
          <div>蒸汽流量(累计)</div>
          <div class="dat">7836t</div>
        </div>
      </div>
    </div>
    <div class="kuang-item van-hairline--top">
      <div class="title">
        <img src="../../asset/imgs/h_pai.png" alt="" class="s-img">
        <div class="name">锅炉排烟</div>
      </div>
      <div class="bot">
        <div class="bot-item">
          <div>排烟温度</div>
          <div class="dat">122°C</div>
        </div>
        <div class="bot-item">
          <div>烟气氧量</div>
          <div class="dat">4.2%</div>
        </div>
      </div>

    </div>
  </div>
  <div class="dianti">
    <div class="status">
      <div class="status-item">
        <div>设备状态</div>
        <div class="tai act">正常</div>
      </div>
       <div class="status-item">
        <div>电梯工号</div>
        <div class="tai">55417</div>
      </div>
       <div class="status-item">
        <div>楼层</div>
        <div class="tai">1</div>
      </div>
       <div class="status-item">
        <div>运行方向</div>
        <div class="tai">停止</div>
      </div>
       <div class="status-item">
        <div>是否超速</div>
        <div class="tai">否</div>
      </div>
    </div>
    <div class="kuang-item van-hairline--top">
      <div class="title">
        <img src="../../asset/imgs/d_info.png" alt="" class="s-img">
        <div class="name">电梯信息</div>
      </div>
      <div class="bot">
        <div class="bot-item">
          <div class="info"> <div class="before"></div><div>检修信号</div> </div>
          <div class="dat">正常<span class="yi">异常</span></div>
        </div>
        <div class="bot-item">
          <div class="info"><div class="before"></div><div>故障信号</div></div>
          <div class="dat">正常</div>
        </div>
      </div>
      <div class="bot">
        <div class="bot-item">
          <div class="info"> <div class="before"></div><div>消防信号</div> </div>
          <div class="dat">正常</div>
        </div>
        <div class="bot-item">
          <div class="info"><div class="before"></div><div>驻停信号</div></div>
          <div class="dat">正常</div>
        </div>
      </div>
      <div class="bot">
        <div class="bot-item">
          <div class="info"> <div class="before"></div><div>平层信号</div> </div>
          <div class="dat">正常</div>
        </div>
        <div class="bot-item">
          <div class="info"><div class="before"></div><div>供电信号</div></div>
          <div class="dat">正常</div>
        </div>
      </div>
    </div>
    <div class="kuang-item van-hairline--top">
      <div class="title">
        <img src="../../asset/imgs/d_person.png" alt="" class="s-img">
        <div class="name">乘客信息</div>
      </div>
      <div class="bot">
        <div class="bot-item">
          <div class="info"> <div class="before"></div><div>是否超载</div> </div>
          <div class="dat">否</div>
        </div>
        <div class="bot-item">
          <div class="info"><div class="before"></div><div>困人信号</div></div>
          <div class="dat">正常</div>
        </div>
      </div>
   
    </div>
  </div>
  <div class="h-46"></div>
</div>
</template>
<script>
import Util from '@/utils/index'

export default {

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
           
          })
    }
  },

  created () {
  }
  ,mounted() {

  }

}
</script>

<style  lang="less">
.jiankong-detail {

  .header {
    background: url('data:image/png;base64,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') no-repeat;
    background-size: 100% 100%;

    .title {
      position: relative;
      padding-top: 15px;
      display: flex;
      flex-direction: column;
      text-align: center;
      color:#fff;
      .name {
        font-size: 16px;
      }
      .deng {
        display: flex;
        justify-content: center;
        font-size: 12px;
        .pd {padding-left: 10px}
      }
      .img {
        width: 112px;
        height: 78px;
        margin: 17px auto;
      }
      .img-edit {
        position: absolute;
        width: 18px;
        height:18px;
        right: 10px;
        top: 20px;
      }
    }
  }
  .gouhu,.dianti {
    .status {
      display: flex;
      padding: 5px 25px;
      justify-content: space-between;
      align-items: center;
      .status-item {
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 10px;
        color:#A1A2A4;
        .tai {
          color:#1C2627;
          font-size: 12px;
        }
        .act {color:#F5A623;}
      }

    }
    .kuang-item {
      padding: 10px 30px 15px 30px;
      .title {
        display: flex;
        align-items: center;
        padding-bottom: 10px;
        .s-img {width:16px;height: 16px;}
        .name {padding-left:10px;font-size: 12px;color:#1C2627;}
      }
      .bot {
        display: flex;

        .bot-item {
          font-size: 10px;
          color:#9B9B9B;
          width:50%;
          display: flex;
          align-items: center;
          .info {
            position: relative;
            
            display: flex;
            align-items: center;
            .before {
                background: #7ED321;
                width:6px;
                height: 6px;
                border-radius: 50%;
                // position: absolute;
                // top: 50%;
                // left: 5px;
                // transform: translateY(-50%);
                margin-right: 5px;
            }
          }
          .dat {padding-left: 10px;font-size: 12px;color:#1C2627; .yi {
            padding-left: 5px;
            color: #F5A623
          }}
        }
      }
    }
  }
  .h-46 {
    height: 46px;
    background: #EEEFF4;
  }
}
</style>
