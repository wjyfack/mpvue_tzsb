<template>
    <div>
      <div class="tui" v-if="opt == 'person'">
        <a :href="'../zhaoping_zhiwei/main?id='+item.id" class="tui-item " :class="{'van-hairline--top': line}" v-for="(item,index) in list" :key="item.id">
          <img v-if="item.logoImg == ''" :src="base+item.logoImg" alt="" class="tui-img">
          <img v-else src="../asset/imgs/default_com.png" alt="" class="tui-img">
          <div class="cont">
            <div class="titles">
              <div>{{item.jobName}}</div>
              <div class="act" v-if="item.salaryMin != item.salaryMax">{{item.salaryMin}}-{{item.salaryMax}}元/月</div>
              <div class="act" v-else>{{item.salaryMin}}</div>
            </div>
            <div class="name">{{item.companyName}}</div>
            <div class="addr">{{item.workSiteFullAddress}}</div>
            <div class="brand">
              <div class="brand-item" v-for="(items,indexs) in item.brands" :key="indexs">{{items}}</div>
            
           </div>
          </div>
        </a>
        <div class="more  van-hairline--top" v-if="show">查看更多职位</div>
      </div>
      <div class="tui" v-else-if="opt == 'company'">
        <a :href="'../zhaoping_company_detail/main?id='+item.id" class="tui-item van-hairline--top" v-for="(item,index) in list" :key="item.id">
            <img v-if="item.logoImg" :src="base+item.logoImg" alt="" class="tui-img">
            <img v-else src="../asset/imgs/default_com.png" alt="" class="tui-img">
            <div class="cont">
              <div class="titles">
                <div>{{item.companyName}}</div>
                <div class="act"></div>
              </div>
              <div class="name"></div>
              <div class="addr">{{item.fullAddress}}</div>
              <div class="brand">
                <div class="brand-item">{{item.holiday}}</div>
                <div class="brand-item" v-for="(items,indexs) in item.brands" :key="indexs" >{{items}}</div>
            </div>
            </div>
          </a>
        <div class="more  van-hairline--top" v-if="show">查看更多企业</div>
      </div>
      <div class="tui" v-if="opt == 'jianli'">
         <a :href="'../zhaoping_jianli_detail/main?id='+item.customerUserId" class="tui-item van-hairline--top" v-for="(item,index) in list" :key="index">
            <img v-if="item.headPhoto" :src="base+item.headPhoto" alt="" class="tui-img">
            <img v-else src="../asset/imgs/default_avatar.png" alt="" class="tui-img">
            <div class="cont">
              <div class="titles">
                <div>{{item.name}}</div>
                <div class="act" v-if="item.salaryMin != item.salaryMax">{{item.salaryMin}}-{{item.salaryMax}}元/月</div>
                <div class="act" v-else>{{item.salaryMin}}</div>
              </div>
              <div class="name">{{item.expectJobName}}   工龄{{~~(item.diffMon /12)}}年 </div>
              <div class="addr">{{item.addr}}</div>
              <div class="brand">
                <div class="brand-item" v-for="(items,indexs) in item.brands" :key="indexs">{{items}}</div>
            </div>
            </div>
          </a>
        <div class="more  van-hairline--top" v-if="show">查看更多职位</div>
      </div>
    </div>
     </template>
<script>
import {baseUrl} from '@/utils/config'
export default {
    props: {
      opt: {required: true},
      line: {default: true},
      show: {default: false},
      list: {required: true}
    },
  data() {
    return {
      base: baseUrl+ '/file/show/img/base/',
    }
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
      font-size: 16px;
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
          font-size: 15px;
          .act {
            font-size: 13px;
            color:#FDC915;
          }
        }
        .name {color: #757980;font-size: 14px;}
        .addr {color: #A1A2A4;font-size: 13px;}
        .brand {
          display: flex;
          flex-wrap: wrap;
          padding-top:5px;
          .brand-item {
            min-width: 53px;
            height: 17px;
            font-size: 11px; 
            text-align: center;
            background: #EEEFF4;
            color:#757980;
            margin-right: 10px;
            margin-bottom: 10px;
          }
        }
      }
    }
    .more {
      display: flex;
      padding: 5px 0;
      justify-content: center;
      color:#FF4444;
      font-size: 14px;
    }
  }
</style>


