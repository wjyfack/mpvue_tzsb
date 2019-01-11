<template>
<div>
  <div class="zhaopings" v-if="id ==1">
      <van-search
        :value="value"
        placeholder="搜索相关职位"
        show-action
      @search="onSearch"
        use-action-slot
      custom-class="va-search"
      >
      <div class="cancel-class" slot="action">搜索</div>
      </van-search>
      <div class="zhao">
        <a href="../zhaoping_search/main" class="zhao-item">
          <img src="../../asset/imgs/zhao_sou.png" alt="" class="zhao-img">
          <div>公司搜索</div>
        </a>
        <div class="zhao-item">
          <img src="../../asset/imgs/zhao_xiaoxi.png" alt="" class="zhao-img">
          <div>消息</div>
        </div>
        <a href="../zhaoping_company_msg/main?opt=shenqing" class="zhao-item">
          <img src="../../asset/imgs/zhao_shengqi.png" alt="" class="zhao-img">
          <div>申请记录</div>
        </a>
        <a href="../zhaoping_jianli/main?opt=person" class="zhao-item">
          <img src="../../asset/imgs/zhao_jianli.png" alt="" class="zhao-img">
          <div>个人简历</div>
        </a>
      </div>
      <div class="tui">
        <div class="title">
          <div class="br"></div>
          <div>推荐职位</div>
        </div>
        <div class="tui">
          <a href="../zhaoping_zhiwei/main" class="tui-item van-hairline--top">
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
          </a>
          <a href="../zhaoping_zhiwei/main" class="tui-item van-hairline--top">
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
          </a>
          <div class="more  van-hairline--top">查看更多职位</div>
        </div>
      </div>
        <div class="tui">
        <div class="title">
          <div class="br"></div>
          <div>推荐公司</div>
        </div>
        <div class="tui">
          <a href="../zhaoping_company_detail/main" class="tui-item van-hairline--top">
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
        <a href="../zhaoping_company_detail/main" class="tui-item van-hairline--top">
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
          <div class="more  van-hairline--top">查看更多企业</div>
        </div>
      </div>
        <div class="h-50"></div> 
        <van-toast id="van-toast" />
  </div>
  <div class="zhaopings" v-else>
      <van-search
        :value="value"
        placeholder="搜索相关职位"
        show-action
      @search="onSearch"
        use-action-slot
      custom-class="va-search"
      >
      <div class="cancel-class" slot="action">搜索</div>
      </van-search>
      <div class="zhao">
       <a href="../zhaoping_company_msg/main?opt=zhiwei" class="zhao-item">
          <img src="../../asset/imgs/zhao_jianli.png" alt="" class="zhao-img">
          <div>职位管理</div>
        </a>
        <div class="zhao-item">
          <img src="../../asset/imgs/zhao_xiaoxi.png" alt="" class="zhao-img">
          <div>消息</div>
        </div>
        <a href="../zhaoping_company_msg/main?opt=record"  class="zhao-item" >
          <img src="../../asset/imgs/zhao_shengqi.png" alt="" class="zhao-img">
          <div>投递记录</div>
        </a>
        
         <a href="../zhaoping_jianli/main?opt=company" class="zhao-item">
          <img src="../../asset/imgs/zhao_sou.png" alt="" class="zhao-img">
          <div>企业介绍</div>
        </a>
      </div>
      <div class="tui">
        <div class="title">
          <div class="br"></div>
          <div>优选简历</div>
        </div>
        <div class="tui">
          <a href="../zhaoping_jianli_detail/main" class="tui-item van-hairline--top">
            <img src="http://placekitten.com/100/100" alt="" class="tui-img">
            <div class="cont">
              <div class="titles">
                <div>林虞浩</div>
                <div class="act">3000-3999元/月</div>
              </div>
              <div class="name">叉车司机   工龄5年 </div>
              <div class="addr">佛山市佛朗斯叉车有限公司(1年2个月)</div>
              <div class="brand">
                <div class="brand-item">大专</div>
                <div class="brand-item">N2</div>
            </div>
            </div>
          </a>
          <a href="../zhaoping_jianli_detail/main" class="tui-item van-hairline--top">
            <img src="http://placekitten.com/100/100" alt="" class="tui-img">
            <div class="cont">
              <div class="titles">
                <div>林虞浩</div>
                <div class="act">3000-3999元/月</div>
              </div>
              <div class="name">叉车司机   工龄5年 </div>
              <div class="addr">佛山市佛朗斯叉车有限公司(1年2个月)</div>
              <div class="brand">
                <div class="brand-item">大专</div>
                <div class="brand-item">N2</div>
            </div>
            </div>
          </a>
          <div class="more  van-hairline--top">查看更多职位</div>
        </div>
      </div>
        <div class="h-50"></div> 
       
  </div>
</div>
</template>
<script>

import Toast from '@/../static/dist/toast/toast'
import myLoad from '@/components/myLoad'
import Util from '@/utils/index'
export default {
  components: {
    myLoad
  },
  data () {
    return {
      id: 0,
      value: ''
      ,isEmpty: false
      ,loading: false
      ,isBottom: false
    }
  },
  computed: {
    userInfo: ()=> {
      return Util.getStorage('userInfo')
    }
  },
  methods: {
    onSearch(event) {
      const val = event.mp.detail // value
      console.log(event, val)
        if(this.loading || this.isEmpty) {
          --this.page
          return ''
        } 
     const params = `{"id":"${val}"}`
       Toast(params)
      // this.loading = true
      // this.$http.post(`/device/getDt/${this.userInfo.id}`,params,{
      //   headers:{
      //     'Access-Token':this.userInfo.token,
      //   }, //http请求头，
      // }).then((res) => {
      //   let data = res.data
      //   this.loading = false
      //   if(data.resultCode == '0000000') {
      //     if(data.returnData.length == 0) { // 返回数据为空
      //       if(this.page == 1){
      //         this.isEmpty = true
      //         this.isBottom = false
      //       } else {
      //          this.isBottom=true 
      //       }
      //       } else {
      //       this.list =  [ data.returnData]
      //     }
      //   } else {
      //     Toast(data.resultDesc)
      //   }
      // })

    },
    onCancel() {
      this.value = ''
    }
  },

  mounted () {
    Util.setBackGroup()
    this.id = this.$mp.query.id

  }
 
}
</script>

<style  lang="less">
.zhaopings {
  background: #EEEFF4;
  .va-search {
    background: #FDC915 !important;
  }
  .cancel-class {
    color: #ffffff;
  }
  .zhao {
    display: flex;
    padding: 20px 27px;
    background: #ffffff;
    .zhao-item {
      width: 25%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color:#757980;
      font-size: 14px;
      .zhao-img {
        width: 29px;
        height: 29px;
        margin-bottom: 12px;
      }
    }
  }
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
  .h-50 {height: 50px;background: #ffffff;}
}

</style>
