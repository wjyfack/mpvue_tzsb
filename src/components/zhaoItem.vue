<template>
    <div>
      <div class="tui" v-if="opt == 'person'">
        <div class="tui-item " :class="{'van-hairline--top': line}">
          <img src="http://placekitten.com/100/100" alt="" class="tui-img">
          <div class="cont">
            <div class="titles">
              <div>叉车司机</div>
              <div class="act">3000-3999元/月</div>
            </div>
            <div class="name">佛山市佛朗斯叉车有限公司</div>
            <div class="addr">佛山市南海区狮山镇博爱路</div>
            <div class="brand">
              <div class="brand-item">大专</div>
              <div class="brand-item">N2</div>
           </div>
          </div>
        </div>
        <div class="tui-item" :class="{'van-hairline--top': line}">
          <img src="http://placekitten.com/100/100" alt="" class="tui-img">
          <div class="cont">
            <div class="titles">
              <div>叉车司机</div>
              <div class="act">3000-3999元/月</div>
            </div>
            <div class="name">佛山市佛朗斯叉车有限公司</div>
            <div class="addr">佛山市南海区狮山镇博爱路</div>
            <div class="brand">
              <div class="brand-item">大专</div>
              <div class="brand-item">N2</div>
           </div>
          </div>
        </div>
        <div class="more  van-hairline--top">查看更多职位</div>
      </div>
      <div class="tui" v-else-if="opt == 'company'">
        <a href="../zhaoping_company_detail/main" class="tui-item van-hairline--bottom">
          <img src="http://placekitten.com/100/100" alt="" class="tui-img">
          <div class="cont">
            <div class="titles">
              <div>香瓜科技</div>
              <div class="act"></div>
            </div>
            <div class="name"></div>
            <div class="addr">佛山市南海区平西工业园</div>
            <div class="brand">
              <div class="brand-item">五险一金</div>
              <div class="brand-item">带薪年假</div>
           </div>
          </div>
        </a>
       <a href="../zhaoping_company_detail/main" class="tui-item van-hairline--bottom">
          <img src="http://placekitten.com/100/100" alt="" class="tui-img">
          <div class="cont">
            <div class="titles">
              <div>香瓜科技</div>
              <div class="act"></div>
            </div>
            <div class="name"></div>
            <div class="addr">佛山市南海区平西工业园</div>
            <div class="brand">
              <div class="brand-item">五险一金</div>
              <div class="brand-item">带薪年假</div>
           </div>
          </div>
        </a>
        <div class="more  van-hairline--top" v-if="more">查看更多企业</div>
      </div>
      <div class="tui" v-if="opt == 'jianli'">
        <a href="../zhaoping_jianli_detail/main" class="tui-item " :class="{'van-hairline--top': line}">
          <img src="http://placekitten.com/100/100" alt="" class="tui-img">
          <div class="cont">
            <div class="titles">
              <div>林虞浩</div>
              <div class="act">3000-3999元/月</div>
            </div>
            <div class="name">叉车司机   工龄5年</div>
            <div class="addr">佛山市佛朗斯叉车有限公司(1年2个月)</div>
            <div class="brand">
              <div class="brand-item">大专</div>
              <div class="brand-item">N2</div>
           </div>
          </div>
        </a>
        <a href="../zhaoping_jianli_detail/main" class="tui-item " :class="{'van-hairline--top': line}">
          <img src="http://placekitten.com/100/100" alt="" class="tui-img">
          <div class="cont">
            <div class="titles">
              <div>林虞浩</div>
              <div class="act">3000-3999元/月</div>
            </div>
            <div class="name">叉车司机   工龄5年</div>
            <div class="addr">佛山市佛朗斯叉车有限公司(1年2个月)</div>
            <div class="brand">
              <div class="brand-item">大专</div>
              <div class="brand-item">N2</div>
           </div>
          </div>
        </a>
        <div class="more  van-hairline--top" v-if="show">查看更多职位</div>
      </div>
    </div>
     </template>
<script>
export default {
    props: {
      opt: {required: true},
      line: {default: true},
      show: {default: false}
    }
}
</script>
<style lang="less" scoped>
  .tui {
    margin-top:6px;
    background: #ffffff;
    .title {
      display: flex;
      align-items: center;
      padding:  11px 20px;
      color:#1C2627;
      font-size: 14px;
      .br {background: #FDC915;width: 2px;height: 13px;margin-right:10px; }
    }
    .tui-item {
      padding: 8px 25px 15px 25px;
      display: flex;
      .tui-img {
        width:36px;
        height: 36px;
        border-radius: 50%;
      }
      .cont {
        display: flex;
        flex: 1;
        flex-direction: column;
        padding-left: 10px;
        .titles {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color:#1C2627;
          font-size: 14px;
          .act {
            font-size: 12px;
            color:#FDC915;
          }
        }
        .name {color: #757980;font-size: 13px;}
        .addr {color: #A1A2A4;font-size: 12px;}
        .brand {
          display: flex;
          padding-top:5px;
          .brand-item {
            width: 53px;
            height: 17px;
            font-size: 11px; 
            text-align: center;
            background: #EEEFF4;
            color:#757980;
            margin-right: 10px;
          }
        }
      }
    }
    .more {
      display: flex;
      padding: 5px 0;
      justify-content: center;
      color:#FF4444;
      font-size: 10px;
    }
  }
</style>


