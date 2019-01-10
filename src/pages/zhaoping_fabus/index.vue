<template>
<div class="jianli-edit  van-hairline--top">
      <div class="edit-item van-hairline--bottom"  v-if="opt == 'addr'">
        <div class="title">工作地点</div>
        <input type="text" class="input" placeholder="请输入工作地点">
      </div>
    <div v-else-if="opt == 'req'">
      <div class="edit-item van-hairline--bottom edit-item-textarea">
        <div class="title">职位要求</div>
        <textarea  auto-height="true" class="textarea"   placeholder="请输入职位要求"></textarea>
      </div>
    </div>
      <div class="btn-su">保存</div>
      <van-toast id="van-toast" />
</div>
</template>
<script>

import Toast from '@/../static/dist/toast/toast'

import Util from '@/utils/index'
export default {

  data () {
    return {
      opt: '' // addr,req 编辑手机号和工作经验
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
  }
}
</script>

<style  lang="less">
.jianli-edit {
  padding: 0px 30px 60px 30px;
    .edit-item {
      position: relative;
      .title {color:#1C2627;font-size: 13px;padding-bottom: 5px;padding-top:15px;}
      .input,.textarea {
        font-size: 13px;
        color:#757980;
      }
      .arrow {
        width:8px;
        height: 14px;
        position:absolute;
        bottom: 9px;
        right: 0;
      }
    }
    .edit-item-textarea {
      .textarea {
        min-height: 100px;
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
