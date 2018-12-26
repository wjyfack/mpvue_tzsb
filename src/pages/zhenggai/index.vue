<template>
  <div class="zhengai">
    <van-tabs swipeable animated :active="active" color="#FDC915" @change="onChange">
  <van-tab title="待整改"> <div class="zhen">
    <div class="zhen-item">
      <div class="top">
        <div class="title">整改截止日期 2018-06-23</div>
        <div class="status">
          <img src="http://placehold.it/100x100" alt="" class="img">
          <div>待整改</div>
        </div>
      </div>
      <div class="cont">
        <div class="title">指令书 [912100]第(3299)号</div>
        <div class="desc">设备描述内容/n</div>
      </div>
    </div>
  </div> </van-tab>
  <van-tab title="已提交">内容 </van-tab>
  <van-tab title="全部">内容 </van-tab>
</van-tabs>
  </div>
</template>
<script>
import Util from '@/utils/index'
export default {
  components: {
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
  .zhen {
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
  }
}
</style>
