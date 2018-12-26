<template>
  <div class="zhengai">
    <van-tabs swipeable animated :active="active" color="#FDC915" @change="onChange">
      <van-tab title="待整改"> 
        <div class="zhen">
          <a href="../zhenggai_detail/main"  class="zhen-item">
            <div class="top van-hairline--bottom">
              <div class="title">整改截止日期 2018-06-23</div>
              <div class="status">
                <img src="../../asset/imgs/z_deng.png" alt="" class="img">
                <div>待整改</div>
              </div>
            </div>
            <div class="cont">
              <div class="title van-ellipsis">指令书 [912100]第(3299)号</div>
              <div class="desc van-multi-ellipsis--l2">设备描述内容/n</div>
            </div>
          </a>
          <a  class="zhen-item">
            <div class="top van-hairline--bottom">
              <div class="title">整改截止日期 2018-06-23</div>
              <div class="status">
                <img src="../../asset/imgs/z_cuo.png" alt="" class="img">
                <div>不通过,重新提交</div>
              </div>
            </div>
            <div class="cont">
              <div class="title van-ellipsis">指令书 [912100]第(3299)号</div>
              <div class="desc van-multi-ellipsis--l2">设备描述内容/n</div>
            </div>
          </a>
          <a  class="zhen-item">
            <div class="top van-hairline--bottom">
              <div class="title">整改截止日期 2018-06-23</div>
              <div class="status">
                <img src="../../asset/imgs/z_yi.png" alt="" class="img">
                <div>已提交</div>
              </div>
            </div>
            <div class="cont">
              <div class="title van-ellipsis">指令书 [912100]第(3299)号</div>
              <div class="desc van-multi-ellipsis--l2">设备描述内容/n</div>
            </div>
          </a>
          <a  class="zhen-item">
            <div class="top van-hairline--bottom">
              <div class="title">整改截止日期 2018-06-23</div>
              <div class="status">
                <img src="../../asset/imgs/z_dui.png" alt="" class="img">
                <div>已通过</div>
              </div>
            </div>
            <div class="cont">
              <div class="title van-ellipsis">指令书 [912100]第(3299)号</div>
              <div class="desc van-multi-ellipsis--l2">设备描述内容/n</div>
            </div>
          </a>
          <div class="no-driver">暂无需整改设备</div>
          <my-load Loading="true" Bottom="true"> </my-load>
        </div> 
      </van-tab>
      <van-tab title="已提交">内容   </van-tab>
      <van-tab title="全部">内容 </van-tab>
    </van-tabs>
    <tab-bar active="1"/>
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
      active: 0
    }
  },

  methods: {
    onChange(event) {
      console.log(event)
    }
  },

  created () {
  }


}
</script>

<style  lang="less">
.zhengai {
  padding-bottom:65px;
  .zhen {
    min-height: 200px;
    .zhen-item {
      border-top: 3px solid #EEEFF4;
      .top {
        display: flex;
        padding: 10px 20px;
        justify-content: space-between;
        .title {font-size: 14px; color:#A1A2A4;}
        .status {
          font-size: 13px;
          color:#1C2627;
          display: flex;
          align-items: center;
          .img {width:18px;height: 18px;margin-right: 5px;}
        }
      }
      .cont {
        padding:  8px 20px;
        .title {
         
          font-size: 16px;
          color:#1C2627;
        }
        .desc {
           padding: 6px 0;
           font-size: 14px;
           color:#757980;
        }
      }
    }
    .no-driver {
      border-top: 3px solid #EEEFF4;
      font-size: 12px;
      color:#A1A2A4;
      display: flex;
      justify-content: center;
      padding: 15px;
      background: #ffffff;
    }
  }
}
</style>
