<template>
<div class="message">
  <a href="../message_detail/main" class="message-item van-hairline--top" v-for="(a,i) in 5" :key="i">
    <div class="top">
      <div class="left">
        <div class="red"></div>
        <div class="title van-ellipsis">您有设备即将年检</div>
      </div>
      <div class="right">今天 12:30</div>
    </div>
    <div class="cont van-ellipsis">设备登记号为梯粤EMC234将于2018年4月进行年检…</div>
  </a>
</div>
</template>
<script>

export default {
  components: {
  },
  data () {
    return {
    }
  },

  methods: {

  },

  created () {

  }
  ,onReachBottom () {
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
