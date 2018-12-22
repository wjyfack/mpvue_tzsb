<template>
  <div class="container">
    <div class="header">
      <div class="s-tab">
        <a href="../search/main" class="search">
            <img src="../../asset/imgs/search.png" alt="" class="s-icon">
            <div>请输入设备编号搜索</div> 
         </a>
          <img src="../../asset/imgs/bell.png" alt="" class="bell">
      </div>
     </div>  
     <div class="shuliang">
       <div class="shu-item">
         <div class="title">特种设备数量</div>
         <div class="cont">
           <div class="num">10</div>
           <div class="tai">台</div>
         </div>
       </div>
       <div class="shu-item">
         <div class="title">不合格数量</div>
         <div class="cont">
           <div class="num">10</div>
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
          </ul>
          <ul class="sort-list" :class="{'sort-active ': issort2}">
            <li @click="onSortSelect(1)">锅炉2</li>
          </ul>
        </div>
     </div>
     
     <!--  -->
    <she-bei></she-bei>
    <van-tabbar :active="active" >
      <van-tabbar-item > 
        <img slot="icon" src="../../asset/imgs/home.png" class="icon" mode="aspectFit" />
        <img slot="icon-active" src="../../asset/imgs/home_c.png" mode="aspectFit" />
      </van-tabbar-item>
      <van-tabbar-item > 
        <img slot="icon" src="../../asset/imgs/fail.png" class="icon" mode="aspectFit" />
        <img slot="icon-active" src="../../asset/imgs/fail_c.png" mode="aspectFit" />
      </van-tabbar-item>
      <van-tabbar-item > 
        <img slot="icon" src="../../asset/imgs/yewu.png" class="icon" mode="aspectFit" />
        <img slot="icon-active" src="../../asset/imgs/yewu_c.png" mode="aspectFit" />
      </van-tabbar-item>
      <van-tabbar-item > 
        <img slot="icon" src="../../asset/imgs/login_people.png" class="icon" mode="aspectFit" />
        <img slot="icon-active" src="../../asset/imgs/my.png" mode="aspectFit" />
      </van-tabbar-item>
    </van-tabbar>
    <div class="mask"></div>
  </div>
</template>

<script>
import sheBei from '@/components/shebei'

export default {
  components: {
    sheBei
  },
  data () {
    return {
      active: 0,
      isset: false,
      issort: false,
      issort2: false,
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
  },

  created () {

  }
  ,onReachBottom () {
    console.log(123)
      // 上拉加载
  }
  ,onPageScroll(event) {
    console.log(event)
      if(event.scrollTop > 74) {
         this.isset = true
      } else {
         this.isset ? this.isset = false: ''
      }
  }
}
</script>

<style scoped  lang="less">
.container {
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
  //   width:100%;
  //   height: 100%;
  //   background: #1C2627;
  // }
}
</style>
