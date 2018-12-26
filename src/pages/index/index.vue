<template>
  <div class="container">
    <div class="header">
      <div class="s-tab">
        <a href="../search/main" class="search">
            <img src="../../asset/imgs/search.png" alt="" class="s-icon">
            <div>请输入设备编号搜索</div> 
         </a>
          <img src="../../asset/imgs/bell.png" alt="" class="bell" @click="toMessage">
      </div>
     </div>  
     <div class="shuliang">
       <div class="shu-item">
         <div class="title">特种设备数量</div>
         <div class="cont">
           <div class="num">{{total.totailCount}}</div>
           <div class="tai">台</div>
         </div>
       </div>
       <div class="shu-item">
         <div class="title">不合格数量</div>
         <div class="cont">
           <div class="num">{{total.noPassCount}}</div>
           <div class="tai">台</div>
         </div>
       </div>
     </div>
     <!-- 分类 -->
     <div class="set-fixed">
       <div class="sorted " :class="{'sorted-fixed ': isset}">
          <div class="select">
              <div class="select-item" :class="{'active': issort}" @click="onSort(1)">
                <div class="name">种类</div>
                <div class="triangle_border_down"></div>
              </div>
              <div class="select-item"  :class="{'active': issort2}" @click="onSort(2)">
                <div class="name">排序</div>
                <div class="triangle_border_down"></div>
              </div>
          </div>
          <ul class="sort-list" :class="{'sort-active ': issort}">
            <li @click="onSortSelect(1)">锅炉</li>
            <li @click="onSortSelect(1)">压力容器</li>
            <li @click="onSortSelect(1)">电梯</li>
            <li @click="onSortSelect(1)">起重机</li>
            <li @click="onSortSelect(1)">叉车</li>
            <li @click="onSortSelect(1)">压力管道</li>
          </ul>
          <ul class="sort-list" :class="{'sort-active ': issort2}">
            <li @click="onSortSelect(1)">默认排序</li>
            <li @click="onSortSelect(1)">年检日期由近到远</li>
            <li @click="onSortSelect(1)">年检日期由远到近</li>
            <li @click="onSortSelect(1)">资料完善度由低到高</li>
            <li @click="onSortSelect(1)">资料完善度由高到低</li>
          </ul>
        </div>
     </div>
     
     <!--  -->
    <she-bei :list="list" :isEmpty="isEmpty"></she-bei>
    <my-load :Loading="loading" :Bottom="isBottom"> </my-load>

    <tab-bar active="0"/>
    <van-toast id="van-toast" />
    <div class="mask"></div>
  </div>
</template>

<script>
import sheBei from '@/components/shebei'
import tabBar from '@/components/tabBar'
import myLoad from '@/components/myLoad'
import Util from '@/utils/index'
import Toast from '@/../static/dist/toast/toast';
export default {
  components: {
    sheBei,
    tabBar,
    myLoad
  },
  data () {
    return {
      active: 0,
      isset: false,
      issort: false,
      issort2: false,
      loading: false,
      isBottom: false,
      isEmpty: false,
      pageSize: 10,
      page: 1
      ,list: []
      ,total : {
        totailCount: 0
        ,noPassCount: 0
      }
    }
  },
  computed: {
    userInfo: function() {
      return Util.getStorage('userInfo')
    }
  },
  methods: {
    onSort(opt) {
        if(opt == 1) {
          this.issort = !this.issort
          this.issort2 =  false
        } else {
          this.issort2 = !this.issort2
          this.issort = false
        }
      }
    ,onSortSelect(id) {
      this.issort2 = this.issort = false
    }
    ,toMessage () {
        wx.navigateTo({
          url: '../message/main'
        })
    }
    ,getDrived(){
      if(this.loading || this.isEmpty) return ''
     const params = Util.getData({
        "pageSize": this.pageSize,
        "pageNum": this.page,
        "DeviceUseName": this.userInfo.realName
      })
      this.loading = true
      this.$http.post(`/device/get/{${this.userInfo.id}}`,params,{
        headers:{
          'Access-Token':this.userInfo.token,
        }, //http请求头，
      }).then((res) => {
        let data = res.data
        this.loading = false
        if(data.resultCode == '0000000') {
          if(data.returnData.length == 0) { // 返回数据为空
            if(this.page == 1){
              this.isEmpty = true
              this.isBottom = false
            } else {
               this.isBottom=true 
            }
            } else {
            this.list =  [...this.list, ...data.returnData]
          }
        } else {
          Toast(data.resultDesc)
        }
      })
    }
    ,getTotal() {
       const params = Util.getData({
       "DeviceUseName": this.userInfo.realName
      })
      this.$http.post(`/device/totail/{${this.userInfo.id}}`,params,{
        headers:{
          'Access-Token':this.userInfo.token,
        }, //http请求头，
      }).then((res) => {
        let data = res.data
        if(data.resultCode == '0000000') {
              this.total = data.returnData
        } else {
          Toast(data.resultDesc)
        }
      })
    }
  },

  created () {

  },
  mounted() {
    this.getDrived()
    this.getTotal()
  }
  ,onReachBottom () {
    console.log(123)
      // 上拉加载
      this.page += 1
      this.getDrived()
  }
  ,onPullDownRefresh() {
    console.log('sss')

    wx.stopPullDownRefresh()
  }
  ,onPageScroll(event) {
      if(event.scrollTop > 74) {
         this.isset = true
      } else {
         this.isset ? this.isset = false: ''
      }
  }
}
</script>

<style scoped  lang="less">
.loading {
  width: 100%;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-content: center;
  background: #fff;
  font-size: 14px;
  color:#c9c9c9;
  .name {margin-left: 5px;}
}
.bottom {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  font-size: 14px;
  color:#c9c9c9;
  .name {
    position: relative;
    
    }
  
}
.container {
  position: relative;
 // background: #EEEFF4;
  padding-bottom: 70px;
  margin-top: 69px;
  .header {
    width: 100%;
    height: 64px;
    background:linear-gradient(360deg,rgba(253, 201, 21, 1) 0%,rgba(255,155,0,1) 100%);
    position: fixed;
    top: 0;
    left: 0 ;
    right:  0;
   display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    padding-bottom:  5px;
    z-index: 99;
    .s-tab {
        display: flex;
        justify-content: flex-end;
       .search {
        background: #ffffff;
        width: 244px;
        height: 26px;
        display: flex;
        align-items: center;
        font-size: 12px;
        color: #A1A2A4;
        line-height: 17px;
        padding: 3px 0;
        .s-icon {width:11px;height: 11px;margin-right: 8px;margin-left: 11px;}
      }
      .bell {width: 19px;height: 20px;margin-left: 30px;margin-right: 15px;align-self: center;}
    }
   

    :after {
      content: '';
      clear: both;
      height: 0;
    }
  }
  .shuliang {
    display: flex;
    background:linear-gradient(360deg,rgba(253,233,21,1) 0%,rgba(253, 201, 21, 1) 100%);
    justify-content: space-around;
    padding: 12px 0;
    .shu-item {
      display: flex;
      flex-direction: column;
      color: #ffffff;
      .title {font-size: 11px;}
      .cont {
        display: flex;
        .num {
          font-size: 50px;
          line-height: 1;
        }
        .tai {
          align-self: flex-end;
          font-size: 14px;
        }
      }
    }
  }
  .set-fixed {min-height: 27px;}
  .sorted {
    background: #ffffff;
    .select {
      position: relative;
      display: flex;
      justify-content: space-around;
      padding: 6px 0;
      .select-item {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        color: #757980;
        .triangle_border_down{
          width:0;
          height:0;
          border-width:8px 5px 0;
          border-style:solid;
          border-color:#757980 transparent transparent;/*灰 透明 透明 */
          margin:0  5px;
          position:relative;
         }
      }
       .active {
        color:#FDC915;
        .triangle_border_down{
          color: #FDC915;
          border-color:#FDC915 transparent transparent;
          transform: rotate(-180deg);
        }
      }
    }
    .sort-list{
      position: absolute;
      display: none;
       color:#1C2627;
       background: #ffffff;
       padding-bottom: 5px;
       font-size: 14px;
       width:100%;
        background:#fff;
        z-index:99;
       li {padding: 7px 32px;}
    }
    .sort-active {
      display: block;
    }
  }
  .sorted-fixed {
    position: fixed;
    top: 69px;
    left: 0;
    right: 0;
    background: #ffffff;
    z-index: 99;
  }

  // .mask {
  //   position: absolute;
  //   top: 0;
  //   width:100%;
  //   height: 100%;
  //   background:rgba(74,74,74,0.38);
  // }
}
</style>
