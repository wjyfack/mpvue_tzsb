<template>
<div>

<div class="jiaoyi_edit" v-if="id==1">
  <div class="sort van-hairline--bottom van-hairline--top">
      <div class="sort-item" @click="onSort(1)"><div>筛选</div> <div class="triangle_border_down"></div></div>
      <div class="sort-item bor-l" @click="onSort(2)">
        <div>排序方式</div> <div class="triangle_border_down"></div>
      </div>
      <div class="down-group" :class="{'down-act': isDown}">
        <div class="down-item "  @click="onSelectSort(1,index)" v-for="(item,index) in sort" :key="index">{{item.name}}</div>
      </div>
      <div class="down-group" :class="{'down-act': isDown1}">
        <div class="down-item "  @click="onSelectSort(2,index)" v-for="(item,index) in orderTypeStatus" :key="index">{{item}}</div>
      </div>
  </div>
  <div class="cont">
    <a :href="'../jiaoyi_detail/main?opt=fab&isEdit=edit&id='+item.id" class="yi-item" v-for="(item,index) in fabArr" :key="index">
      <img :src="baseUrl+item.imgs[0]" alt="" class="l-img">
      <div class="yi-con van-hairline--bottom">
          <div class="title">{{item.title}}</div>
        <div class="price">¥ {{item.paymentMin}}- {{item.paymentMax}}</div>
        <div class="fen">{{item.deviceFullAddress}}</div>
      </div>
    </a>
  </div>

</div>
  <div class="jiaoyi_edit" v-if="id== 2">
    <div class="sort van-hairline--bottom van-hairline--top">
        <div class="sort-item" @click="onSort(3)"><div>筛选</div> <div class="triangle_border_down"></div></div>
        <div class="sort-item bor-l" @click="onSaleSort">
          <span :class="{'act': tradeType == 0}">出售</span>
          <span>  /  </span>
          <span :class="{'act': tradeType == 1}">收购</span>
        </div>
        <div class="down-group" :class="{'down-act': isDown2}">
          <div class="down-item "  @click="onSelectSort(3,index)" v-for="(item,index) in sort" :key="index">{{item.name}}</div>
        </div>
    </div> 
      <div class="cont">
        <a :href="'../jiaoyi_detail/main?opt=rep&isEdit=edit&id='+item.id" class="yi-item" v-for="(item,index) in repArr" :key="index">
          <img :src="baseUrl+item.imgs[0]" alt="" class="l-img">
          <div class="yi-con van-hairline--bottom">
            <div class="c-title"><div class="title">{{item.title}}</div> <div class="time">{{item.applyTime}}</div></div>
            <div class="price">¥{{item.tradePrice}}         <!--数量 {{item.tradeCount}}--></div>
            <div class="fen">{{sort[item.deviceType1-1].name}}</div>
            <div class="title">{{item.tradeFullAddress}}</div>
          </div>
        </a>
      </div>
  </div>
  <van-toast id="van-toast" />
</div>
</template>
<script>
import Toast from '@/../static/dist/toast/toast'

import Util from '@/utils/index'
import { baseUrl,deviceTypes } from '@/utils/config'
import dateformat from 'dateformat'
export default {
  data () {
    return {
      show:false,
      id: 0,
      isDown1: true,
      isDown2: true,
      isDown: true,
      baseUrl: `${baseUrl}/file/show/img/custOther/`,
      info: {},
      opt: '',
      fabArr: [],
      fabPageNum: 0,
       faborderType: '',
       sort: deviceTypes,
      orderTypeStatus: ['薪酬从大到小','薪酬从小到大','发布时间从近到远','发布时间从远到近'],
      //交易
      repPageNum: 0,
      repArr: [],
      tradeType: 0,
      reporderType: '',
      repdeviceType: ''
    }
  },
  computed: {
    userInfo: ()=> {
      return Util.getStorage('userInfo')
    }
  },
  methods: {
    onShow() {
      this.show = !this.show
    }
    ,onSort(opt) {
     
      switch(opt) {
        case 1:
          this.isDown = false
          this.isDown1 = true
        break
        case 2:
          this.isDown1 = false
          this.isDown = true
        break
        case 3:
          this.isDown2 =  false
        break
      }
    }
    ,onSelectSort(opt,index) {
        this.isDown = true
        this.isDown1 = true
        this.isDown2 = true
      switch(opt) {
        case 1:
          this.fabdeviceType = this.sort[index].id
          this.fabArr = []
          this.fabPageNum =0
          this.fabDatas()
        break
        case 2:
          this.faborderType = index
          this.fabPageNum = 0
          this.fabArr = []
          this.fabDatas()
        break
        case 3:
          this.repdeviceType = this.sort[index].id
          this.repPageNum = 0
          this.repArr = []
          this.repDatas()
        break
      }
    }
    ,fabDatas() {
      ++this.fabPageNum
      const params = JSON.stringify({
        companyName: this.userInfo.companyName,
        companyId: this.userInfo.companyId,
        deviceType1: this.fabdeviceType,
        pageNum:  `${this.fabPageNum}`,
        pageSize: '10',
        orderType:`${this.faborderType}`
      })
        this.$http.post(`/device/maintain/page/${this.userInfo.id}`,params,{
            headers:{
              'Access-Token':this.userInfo.token,
            }, //http请求头，
          }).then((res) => {
            let data = res.data
            if(data.resultCode == '0000000') {
              let list  = data.returnData.list
                for(let i in list) {
                  let arr = list[i].problemImgs.split('&')
                  if(!arr[arr.length-1]) {
                    arr.pop()
                  }
                  list[i].imgs = arr
                }
                this.fabArr = [...this.fabArr,...list]
            }
          })
    }
     ,onSaleSort() {
      this.tradeType = this.tradeType == 0 ? 1 : 0
      this.repPageNum = 0
      this.repArr = []
      this.repDatas()
    }
    ,repDatas() {
        ++this.repPageNum
      const params = JSON.stringify({
        companyId: this.userInfo.companyId,
        companyName: this.userInfo.companyName,
        deviceType1: `${this.repdeviceType}`,
        pageNum:  `${this.repPageNum}`,
        pageSize: '10',
        orderType:`${this.reporderType}`,
        tradeType: `${this.tradeType}`,
        selectType:  '1'
      })
      this.$http.post(`/device/trade/page/${this.userInfo.id}`,params,{
            headers:{
              'Access-Token':this.userInfo.token,
            }, //http请求头，
          }).then((res) => {
            let data = res.data
            if(data.resultCode == '0000000') {
              let list  = data.returnData.list
                for(let i in list) {
                  let arr = list[i].goodsImgs ? list[i].goodsImgs.split('&') : []
                  if(!arr[arr.length-1]) {
                    arr.pop()
                  }
                  list[i].imgs = arr
                  list[i].applyTime = dateformat(list[i].applyTime,'yyyy-mm-dd')
                }
                this.repArr = [...this.repArr,...list]
            }
          })
    }
  }
  ,onShow() {
    console.log(this)
    const {opt,id} = this.$mp.query

    this.id = id
    this.opt = opt // rep , fab
    if(id == 1) {
      this.fabdeviceType = ''
      this.fabArr = []
      this.fabPageNum = 0
      this.fabDatas()
      } else if (id == 2) {
        this.repArr = []
        this.repPageNum = 0
        this.repDatas()
      }
    
  }
 
}
</script>

<style  lang="less">
.jiaoyi_edit {
  .sort {
    display: flex;
    padding: 8px 0;
    width:100%;
    position: relative;
    .sort-item {
      font-size: 12px;
      width:50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #A1A2A4;
    }
    .triangle_border_down{
      width:0;
      height:0;
      border-width:8px 5px 0;
      border-style:solid;
      border-color:#757980 transparent transparent;/*灰 透明 透明 */
      margin:0  5px;
      position:relative;
    }
    .act {color:#FDC915}
    .bor-l {border-left: 1px solid #D8D8D8;}
    .down-group {
      width: 100%;
      display: flex;
      flex-direction: column;
      background: #ffffff;
      position: absolute;
      top: 34px;
      left: 0;
      right: 0;
      padding: 5px 0;
      .down-item {
         background: #ffffff;
        font-size: 14px;
        color: #A1A2A4;
        line-height: 24px;
        padding: 0 30px;
        z-index: 11;
      }
    }
    .down-act {
      display: none;
    }
  }
  .cont {
    .yi-item {
      padding: 10px 30px;
      display: flex;
      .l-img {
        width:64px;
        height: 64px;
      }
      .yi-con {
        flex:1;
        display: flex;
        flex-direction: column;
        margin-left: 15px;
        .c-title {display: flex;justify-content: space-between;align-items: center;}
        .time {font-size: 10px;color:#757980;}
        .title {font-size: 13px;line-height: 16px;color:#1C2627;}
        .price {color:#FDC915;font-size: 11px;line-height: 21px;}
        .fen {color:#A1A2A4;font-size: 10px;line-height: 14px;}
      }
    }
  }
}
</style>
