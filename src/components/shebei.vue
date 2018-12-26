<template>
     <div class="shebei">
      <a :href="'../shebei_detail/main?id='+item.id" class="shebei-item" v-for="(item,index) in list " :key="item.id">
        <div class="top van-hairline--bottom">
          <div class="cont">
            <img src="../asset/imgs/goulu.png" alt="" class="img" v-if="item.deviceType1 == 1">
            <img src="../asset/imgs/rongqi.png" alt="" class="img" v-else-if="item.deviceType1 == 2">
            <img src="../asset/imgs/dianti.png" alt="" class="img" v-else-if="item.deviceType1 == 3">
            <img src="../asset/imgs/qizhong.png" alt="" class="img" v-else-if="item.deviceType1 == 4">
            <img src="../asset/imgs/seshi.png" alt="" class="img" v-else-if="item.deviceType1 == 5">
            <img src="../asset/imgs/guangdao.png" alt="" class="img" v-else-if="item.deviceType1 == 6">
            <div class="con">
              <div class="title">{{item.deviceName}}</div>
              <div class="zhi">资料完善度100%</div>
            </div>
          </div>
          <div class="togo">
            <div>去完善</div>
            <img src="../asset/imgs/arrow.png" alt="" class="arrow">
          </div>
        </div>
        <div class="bot">
          <div class="part">
            <div class="par">下次年检日期</div>
            <div>{{item.deviceNextYearTestDate || ''}}</div>
          </div>
          <div class="part pa-c ">
            <div class="par">单位内编号</div>
            <div>{{item.deviceNo}}</div>
          </div>
          <div class="tag">
              <div class="tag-item" v-if="item.deviceType1 == 1">锅炉</div>
              <div class="tag-item" v-else-if="item.deviceType1 == 2">压力容器</div>
              <div class="tag-item" v-else-if="item.deviceType1 == 3">电梯</div>
              <div class="tag-item" v-else-if="item.deviceType1 == 4">起重机械</div>
              <div class="tag-item" v-else-if="item.deviceType1 == 5">专用机动车辆</div>
              <div class="tag-item" v-else-if="item.deviceType1 == 6">压力管道</div>
          </div>
        </div>
      </a>
      <div class="kong" v-if="isEmpty">
          <img src="../asset/imgs/kong.png" alt="" class="kong-img">
          <div class="tips">设备列表为空，请先 <a href="" class="link">通过认证</a></div>
      </div>
    </div>
</template>
<script>
export default {
    props: ['list','isEmpty']
}
</script>
<style lang="less" scoped>
  .shebei {
    background:#ffffff;
    &-item {
      padding: 15px;
      border-top: 3px solid #EEEFF4;
      .top {
        display: flex;
        justify-content: space-between;
        padding-bottom: 11px;
        .cont {
          display: flex;
          .img {width:45px;height: 45px;}
          .con {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            padding-left: 15px;
            .title {
              font-size: 16px;
              color:#1C2627;
            }
            .zhi {
              font-size: 11px;
              color:#A1A2A4
            }
          }
        }
        .togo {
          color:#A1A2A4;
          display: flex;
          align-self: center;
          align-items: center;
          font-size: 12px;
          .arrow {
            margin-left: 8px;
            width:8px;
            height: 14px;
          }
        }
      }
      .bot {
        padding-left: 56px;
        padding-top: 10px;
        .part {
          display: flex;
          color:#757980;
          padding-left: 5px;
          border-left: 2px solid #FDC915;
          font-size: 12px;
          line-height: 1;
          margin-bottom: 5px;
          .par{width: 100px;line-height: 1;}
        }
        .pa-c {border-color:#FB7D37;}
        .tag {
          display: flex;
          .tag-item {
            border: 1px  solid #FF4444;
            min-width:  45px;
            text-align: center;
            font-size: 9px;
            color:#FF4444;
            margin: 0 5px;
            display: inline-block;
          }
        }
      }
    }
    .kong {
        text-align: center;
        .kong-img {
            width: 100px;
            height: 120px;
            margin: 75px  auto 22px auto;
        }
        .tips {
            display: flex;
            justify-content: center;
            font-size:  12px;
            color:#A1A2A4;
            .link {color:#FDC915;}
        }
    }
  }
</style>


