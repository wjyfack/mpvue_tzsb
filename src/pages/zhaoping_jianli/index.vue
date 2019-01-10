<template>
<div>
  <div class="jianli" v-if="opt == 'person'">
        <div class="info">
          <div class="header">
            <a href="../zhaoping_jianli_edit/main?opt=name" class="left">
              <div class="name">姓名</div>
              <img src="../../asset/imgs/xiugaih.png" alt="" class="left-img">
            </a>
            <img src="http://placehold.it/100x100" alt="" class="avatar">
          </div>
          <div class="info-item van-hairline--bottom">
            <div class="left">性别</div>
            <div class="right">
              <div>男</div>
              <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
              </div>
          </div>
          <div class="info-item van-hairline--bottom">
            <div class="left">出生年月</div>
            <div class="right">
              <div>2000-01</div>
              <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
              </div>
          </div>
          <a href="../zhaoping_jianli_edit/main?opt=phone" class="info-item van-hairline--bottom">
            <div class="left">手机号</div>
            <div class="right">
              <div>未填写</div>
              <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
              </div>
          </a>
          <div class="info-item van-hairline--bottom">
            <div class="left">学历</div>
            <div class="right">
              <div>未填写</div>
              <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
              </div>
          </div>
          <div class="info-item van-hairline--bottom">
            <div class="left">参加工作年月</div>
            <div class="right">
              <div>2000-01</div>
              <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
              </div>
          </div>
          <div class="info-item info-act">
            <div class="left">求职状态</div>
            <div class="right">
              <div>在职-考虑机会</div>
              <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
              </div>
          </div>
          <div class="info-item van-hairline--bottom">
            <div class="left">期待职位</div>
            <div class="right">
              <div>未填写</div>
              <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
              </div>
          </div>
          <div class="info-item van-hairline--bottom">
            <div class="left">工作地点</div>
            <div class="right">
              <div>南海区</div>
              <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
              </div>
          </div>
          <div class="info-item van-hairline--bottom">
            <div class="left">薪资要求</div>
            <div class="right">
              <div>未填写</div>
              <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
              </div>
          </div>
          <div class="info-item info-act ">
            <div class="left">技能证书</div>
            <div class="right">
              <div>未填写</div>
              <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
              </div>
          </div>
          <div class="worker">工作经历</div>
          <div class="worker-item  van-hairline--bottom">
            <div class="cont  van-hairline--bottom">
              <div class="left">
                <div>公司名称</div>
                <div class="c-name">职位名称</div>
              </div>
              <div class="right">
                <div>2010.02-2018.01</div>
                <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
              </div>
            </div>
            <div class="con">工作内容</div>
          </div>
          <a href="../zhaoping_jianli_edit/main?opt=work"  class="add-work van-hairline--surround">添加工作经历</a>
        </div>
        <div class="btn-su">保存</div>
        <van-toast id="van-toast" />
  </div>
  <div class="jianli" v-else-if="opt == 'company'">
        <div class="info">
          <div class="header">
            <a href="../zhaoping_jianli_edit/main?opt=name" class="left">
              <div class="name">企业名称</div>
              <img src="../../asset/imgs/xiugaih.png" alt="" class="left-img">
            </a>
            <img src="http://placehold.it/100x100" alt="" class="avatar">
          </div>
          <a href="../zhaoping_jianli_edit/main?opt=com_brief" class="info-item info-act van-hairline--bottom">
            <div class="left">企业简介</div>
            <div class="right">
              <div>未填写</div>
              <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
              </div>
          </a>
          <a href="../zhaoping_jianli_edit/main?opt=com_addr" class="info-item info-com van-hairline--bottom">
            <div class="left">企业地址</div>
            <div class="right">
              <div>未填写</div>
              <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
              </div>
          </a>
          <a href="../zhaoping_jianli_edit/main?opt=brand" class="info-item info-com info-pd van-hairline--bottom">
            <div class="left left-min">企业标签</div>
            <div class="right">
              <div></div>
              <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
              </div>
          </a>
        </div>
        <div class="btn-su">保存</div>
        <van-toast id="van-toast" />
  </div>
</div>
</template>
<script>

import Toast from '@/../static/dist/toast/toast'

import Util from '@/utils/index'
export default {

  data () {
    return {
      opt : '', // person,company 个人、公司
    }
  },
  computed: {
    userInfo: ()=> {
      return Util.getStorage('userInfo')
    }
  },
  methods: {

  },
  mounted () {
    this.opt = this.$mp.query.opt
    let title = '我的简历'
    this.opt == 'person' ? '': title='企业介绍'
    Util.setTitle(title)
  }
 
}
</script>

<style  lang="less">
.jianli {
  padding-bottom: 60px;
  .info {
    padding: 20px 30px;
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 10px;
      .left{
        display: flex;
       align-items: flex-end;
        .name {
          font-size: 18px;
          border-bottom: 2px solid #FDC915;
          color:#1C2627;
          margin-right: 5px;
        }
        .left-img  {
          width: 18px;
          height: 18px;
        }
      }
      .avatar {
        width:45px;
        height: 45px;;
        border-radius: 50%;
      }
    }
    .info-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 9px 0;
      color: #757980;
      .left {font-size: 13px;}
      .right {
        font-size: 11px;
        display: flex;
        .ri-img {
          width:8px;
          height: 14px;
          margin-left: 15px;
        }
      }
    }
    .worker{
      color:#1C2627;
      font-size: 13px;
    }
    .worker-item {
      
      .cont {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        padding: 9px 0;
        color: #757980;
        .left {
          font-size: 13px;
          display: flex;
          flex-direction: column;
          .c-name {
            color: #A1A2A4;
            font-size: 10px;
          }
          }
        .right {
          font-size: 11px;
          display: flex;
          .ri-img {
            width:8px;
            height: 14px;
            margin-left: 15px;
          }
        }
      }
     .con {
          color: #757980;
          font-size: 13px;
          padding: 9px 0;
     }
    }
    .add-work {
      color:#E5E7EC;
      font-size: 11px;
      height: 32px;
      line-height: 32px;
      text-align: center;
      margin-top:5px; 
    }
    .info-act {
      padding: 30px 0;
      .left {color:#1C2627;}
    }
    .info-com {
      .left {color:#1C2627;}
    }
    .info-pd {
      padding-bottom: 20px;
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
