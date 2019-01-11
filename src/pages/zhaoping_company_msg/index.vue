<template>
<div>
  <div class="zhiwei-msg" v-if="opt == 'zhiwei'">
        <div class="zhiwei-item  van-hairline--top" v-for="(item,index) in 2" :key="index">
          <div class="title">
            <div class="name">叉车司机</div>
            <div class="price">3000-3999元/月</div>
          </div>
          <div class="req">
            <div class="left">
              <div class="zhi">职位要求</div>
              <div class="addr">工作地点</div>
            </div>
            <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
          </div>
          <div class="brand">
            <div class="brand-item">大专</div>
            <div class="brand-item">N2</div>
          </div>
        </div>
        <a href="../zhaoping_fabu/main" class="btn-su">发布职位</a>
        <van-toast id="van-toast" />
  </div>
  <zhao-item opt="jianli" :show="false" v-else-if="opt == 'record'"></zhao-item>
  <zhao-item opt="person" :show="false" v-else-if="opt == 'shenqing'"></zhao-item>
</div>
</template>
<script>

import Toast from '@/../static/dist/toast/toast'
import zhaoItem from '@/components/zhaoItem'
import Util from '@/utils/index'
export default {
  components: {
    zhaoItem
  },
  data () {
    return {
      opt: '' // zhiwei,record 职位、投递记录
    }
  },
  computed: {
    userInfo: ()=> {
      return Util.getStorage('userInfo')
    }
  },
  methods: {

  },
  created () {
    Util.setBackGroup()
  },
  mounted() {
    this.opt = this.$mp.query.opt
    let title = '职位管理'
    switch(this.opt) {
      case 'record':
       title = '投递记录'
      break
      case 'shenqing':
      title = '申请记录'

      break
    }
    Util.setTitle(title)
  }
}
</script>

<style  lang="less">
.zhiwei-msg {

  .zhiwei-item {
    padding: 11px 16px 11px 30px;
    display: flex;
    flex-direction: column;
    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      line-height: 20px;
      .name {color:#1C2627;font-size: 14px;}
      .price {color:#FDC915;font-size: 12px;}
    }
    .req {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left {
        flex:1;
        display: flex;
        flex-direction: column;
        .zhi {font-size: 13px;color:#757980;}
        .addr {font-size: 12px;color:#A1A2A4;}
      }
      .ri-img {
        width: 8px;
        height: 14px;
      }
    }
    .brand {
          display: flex;
          padding-top:5px;
          .brand-item {
            width: 53px;
            height: 17px;
            font-size: 11px;
            text-align: center;
            background: #EEEFF4;
            margin-right: 10px;
          }
        }
  }
  .btn-su {
    height: 50px;
    position:fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #FDC915;
    color:#FFFFFF;
    font-size: 16px;
    line-height: 50px;
    text-align: center;
  }
}
</style>
