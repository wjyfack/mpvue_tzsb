<template>
<div>
  <div class="jiaoyi_publish" v-if="id ==1">
        <div class="info">
          <div class="info-item van-hairline--bottom"  @click="selectInput(6)">
            <div class="left">商品标题</div>
            <div class="right">
              <div v-if="sale.title">{{sale.title}}</div>
              <div v-else>未填写</div>
              <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
              </div>
          </div>
          <div class="info-item van-hairline--bottom"  @click="selectInput(7)">
            <div class="left">商品描述</div>
            <div class="right">
              <div v-if="sale.desc">{{sale.desc}}</div>
              <div v-else>未填写</div>
              <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
              </div>
          </div>
           <div class="info-item  van-hairline--bottom" @click="selectPicker(1)">
            <div class="left">设备分类</div>
            <div class="right">
              <div >{{deviceTypes[repair.sort].name}}</div>

              <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
              </div>
          </div>
          <div class="add-img">
             <div class="sel-img" v-for="(item,index) in imgs" :key="index">
              <img src="../../asset/imgs/img_colse.png" alt="" class="colse-img" @click="delchooseImg(2,index)"> 
              <img :src="baseUrl+item" alt="" class="item-img">
              </div>
            <div class="add" @click="chooseImg(2)"><img src="../../asset/imgs/add.png" alt="" class="add-img"></div>
          </div>
          <div class="info-item van-hairline--bottom">
            <div class="left">价格</div>
            <div class="right">
              <div class="price"> <div class="yang">￥</div> 
              <div class="input-gp">
                <input type="text" v-model="sale.price" class="input van-hairline--bottom">
              </div></div>
              </div>
          </div>
          <div class="info-item  van-hairline--bottom" @click="selectPicker(5)">
            <div class="left">交易类型</div>
            <div class="right">
              <div >{{saleStatus[sale.status]}}</div>
              <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
              </div>
          </div>
          <div class="info-item van-hairline--bottom">
            <div class="left">交易数量</div>
            <div class="right">
              <div class="price"> <div class="yang"></div> 
              <div class="input-gp">
                <input type="text" v-model="sale.num" class="input van-hairline--bottom">
              </div></div>
              </div>
          </div>
          <div class="info-item van-hairline--bottom"  @click="selectInput(8)">
            <div class="left">联系人</div>
            <div class="right">
              <div v-if="sale.conact">{{sale.conact}}</div>
              <div v-else>未填写</div>
              <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
              </div>
          </div>

          <div class="info-item van-hairline--bottom"  @click="selectInput(9)">
            <div class="left">联系方式</div>
            <div class="right">
              <div v-if="sale.link">{{sale.link}}</div>
              <div v-else>未填写</div>
              <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
              </div>
          </div>
          <div class="info-item van-hairline--bottom"  @click="selectPicker(2)">
            <div class="left">所在市区</div>
            <div class="right">
              <div v-if="workAddr">{{workAddr}}</div>
              <div v-else>未填写</div>
              <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
              </div>
          </div>
          <div class="info-item van-hairline--bottom"  @click="selectInput(10)">
            <div class="left">地址</div>
            <div class="right">
              <div v-if="sale.addr">{{sale.addr}}</div>
              <div v-else>未填写</div>
              <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
              </div>
          </div>
        </div>
        <div class="btn-su" @click="onSale">发布</div>
  </div>
  <div class="jiaoyi_publish" v-else-if="id ==2">
        <div class="info">
          <div class="info-item van-hairline--bottom" @click="selectInput(1)">
            <div class="left">需求标题</div>
            <div class="right">
              <div v-if="repair.title">{{repair.title}}</div>
              <div v-else>未填写</div>
              <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
              </div>
          </div>
          <div class="info-item van-hairline--bottom" @click="selectInput(2)">
            <div class="left">问题描述</div>
            <div class="right">
              <div v-if="repair.desc">{{repair.desc}}</div>
              <div v-else>未填写</div>
              <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
              </div>
          </div>
          <div class="info-item  van-hairline--bottom" @click="selectPicker(1)">
            <div class="left">设备分类</div>
            <div class="right">
              <div >{{deviceTypes[repair.sort].name}}</div>

              <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
              </div>
          </div>
          <div class="add-img">
             <div class="sel-img" v-for="(item,index) in imgs" :key="index">
              <img src="../../asset/imgs/img_colse.png" alt="" class="colse-img" @click="delchooseImg(2,index)"> 
              <img :src="baseUrl+item" alt="" class="item-img">
              </div>
            <div class="add" @click="chooseImg(2)"><img src="../../asset/imgs/add.png" alt="" class="add-img"></div>
          </div>
          <div class="info-item van-hairline--bottom">
            <div class="left">薪酬</div>
            <div class="right">
              <div class="price"> <div class="yang">￥</div> 
              <div class="input-gp">
                <input type="text" v-model="repair.minPrice" class="input van-hairline--bottom">
                <div class="line">-</div>
                <input type="text"  v-model="repair.maxPrice" class="input van-hairline--bottom">
              </div></div>
              </div>
          </div>
          <div class="info-item van-hairline--bottom"  @click="selectInput(3)">
            <div class="left">联系人</div>
            <div class="right">
              <div v-if="repair.conact">{{repair.conact}}</div>
              <div v-else>未填写</div>
              <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
              </div>
          </div>

          <div class="info-item van-hairline--bottom" @click="selectInput(4)">
            <div class="left">联系方式</div>
            <div class="right">
              <div v-if="repair.link">{{repair.link}}</div>
              <div v-else>未填写</div>
              <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
              </div>
          </div>
          <div class="info-item van-hairline--bottom"  @click="selectPicker(2)">
            <div class="left">设备所在市区</div>
            <div class="right">
              <div v-if="workAddr">{{workAddr}}</div>
              <div v-else>未填写</div>
              <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
              </div>
          </div>
          <div class="info-item van-hairline--bottom"  @click="selectInput(5)">
            <div class="left">设备地址</div>
            <div class="right">
              <div v-if="repair.addr">{{repair.addr}}</div>
              <div v-else>未填写</div>
              <img src="../../asset/imgs/arrow.png" alt="" class="ri-img">
              </div>
          </div>
        </div>
        <div class="btn-su" @click="onSub">发布</div>
  </div>
  <van-toast id="van-toast" />
  <van-popup :show="show" @close="onClose" position="bottom">
    <div class="h-s100">
        <!-- 单选 -->
        <van-picker
           :columns="columns"
          show-toolbar="true"
          @cancel="onClose"
          @confirm="getPicker"
        />
    </div>
  </van-popup>
<van-popup :show="edit" @close="onClose">
          <div class="h-s100">
                  <div class="jianliss-edit">
                    <!-- <div class="back" @click="onClose">返回</div> -->
                    <div class="edit-item van-hairline--bottom">
                      <div class="title">{{inputName}}</div>
                      <textarea  auto-height="true" :focus="true" class="textarea" v-model.trim="inputValue" :placeholder="inputPlace"></textarea>
                    </div>
                    <div class="btn-su" @click="editInput">保存</div>
                  </div>
          </div>
</van-popup>
</div>
</template>
<script>
import Toast from '@/../static/dist/toast/toast'
import Util from '@/utils/index'
import {baseUrl,deviceTypes} from '@/utils/config'
export default {
  data () {
    return {
      id : '', // 1:  2:chooseImg
      show: false,
      edit: false,
      columns: [],
      inputName: '',
      inputValue: '',
      inputPlace: '',
      baseUrl: `${baseUrl}/file/show/img/custOther/`,
      imgs: [],
      deviceTypes:deviceTypes,
      selelctOpt: 0,
      selectStatus: 0,
      areaSheng: [], // 省份
      areaQu:[],// 区域
      workAddr: '',
      saleStatus: ['收购','出售'],
      repair: {
        id: 0,
        sort: 0,
        title: '',
        desc: '',
        minPrice: '',
        maxPrice: '',
        conact: '',
        link: '',
        addr: ''
      }
      ,sale: {
        id: 0,
        title: '',
        desc: '',
        price: '',
        conact: '',
        link: '',
        status: 0,
        num: 1,
        addr: ''
      }
      ,userInfo: {}
    }
  },
  computed: {
    // userInfo: ()=> {
    //   return Util.getStorage('userInfo')
    // }
  },
  methods: {
    onClose() {
      this.show = false
      this.edit = false
    }
    ,onSub() {
      console.log(this.repair)
      const companyId = this.userInfo.companyId
      if(!companyId) {
        Toast('请先完成企业认证或个人认证')
        return ''
      }
      const {
        id,
        sort,
        title,
        desc,
        minPrice,
        maxPrice,
        conact,
        link,
        addr
      } = this.repair
       if(isNaN(parseInt(minPrice))  || isNaN(parseInt(maxPrice))){
        Toast('请输入数字')
        return ''
      }
        if(parseInt(minPrice)>parseInt(maxPrice) ){
          Toast('薪酬由低到高')
          return ''
        }
    
      if(!title||!desc||!conact||!link||!addr) {
        Toast('请输入完整')
        return ''
      }
      if(!this.workAddr) {
        Toast('请选择市区')
        return ''
      }
      const diqu = this.workAddr.split('/')
      const params = JSON.stringify({
        id: id == 0? '': id,
        companyId: companyId,
        linkTel: link,
        linkMan: conact,
        deviceType1: `${sort+1}`,
        title: title,
        problemDesc: desc,
        problemImgs: this.imgs.join('&'),
        paymentMin:minPrice,
        paymentMax: maxPrice,
        deviceProvince: diqu[0],
        deviceCity: diqu[1],
        deviceArea: diqu[2],
        deviceAddress: addr
      })
      console.log(params)
      let url = `/device/maintain/apply/${this.userInfo.id}`
      if(id != 0) {
        url = `/device/maintain/update/${this.userInfo.id}`
      }
      this.$http.post(url,params,{
            headers:{
              'Access-Token':this.userInfo.token,
            }, //http请求头，
          }).then((res) => {
             let data = res.data
            if(data.resultCode == '0000000') {
              if(id == 0) {
                Toast('发布成功，正在返回')
              } else {
                Toast('修改成功，正在返回')
              }
              
              setTimeout(()=>{
                Util.back()
              },1000)
            }
          })
    }
    ,onSale() {
      console.log(this.sale)
      console.log(this.repair.sort,this.imgs)
      const companyId = this.userInfo.companyId
      if(!companyId) {
        Toast('请先完成企业认证或个人认证')
        return ''
      }
      const {
        id,
        addr,
        conact,
        desc,
        link,
        price,
        title,
        num,
        status
      } = this.sale
      if(isNaN(parseInt(price))  || isNaN(parseInt(num))){
        Toast('交易数量和价格为数字')
        return ''
      }
      if(!addr||!conact||!desc||!link||!title) {
          Toast('请输入完整')
          return ''
      }

       const diqu = this.workAddr.split('/')
      const  params = JSON.stringify({
        id: id != 0? id: '',
        companyId:companyId,
        linkTel: link,
        linkMan:conact,
        deviceType1: `${this.repair.sort +1}`,
        title:  title,
        goodsDesc: desc,
        goodsImgs: this.imgs.join('&'),
        tradePrice: price,
        tradeType: status,
        tradeCount: num,
        tradeProvince:diqu[0],
        tradeCity:diqu[1],
        tradeArea: diqu[2],
        tradeAddress: addr
      })
      let url = `/device/trade/publish/${this.userInfo.id}`
      if(id != 0) {
        url = `/device/trade/update/${this.userInfo.id}`
      }
      this.$http.post(url,params,{
            headers:{
              'Access-Token':this.userInfo.token,
            }, //http请求头，
          }).then((res) => {
             let data = res.data
            if(data.resultCode == '0000000') {
             if(id == 0) {
                Toast('发布成功，正在返回')
              } else {
                Toast('修改成功，正在返回')
              }
              setTimeout(()=>{
                Util.back()
              },1000)
            }
          })
    }
    ,selectInput(opt) {
      this.edit = true
      this.selelctOpt = opt
      switch(opt) {
        case 1:
          this.inputName = '需求标题'
          this.inputPlace = '请输入需求标题'
          this.inputValue = this.repair.title 
        break
        case 2:
          this.inputName = '问题描述'
          this.inputPlace = '请输入问题描述'
          this.inputValue = this.repair.desc 
        break
        case 3:
          this.inputName = '联系人'
          this.inputPlace = '请输入联系人'
          this.inputValue = this.repair.conact 
        break
        case 4:
          this.inputName = '联系方式'
          this.inputPlace = '请输入联系方式'
          this.inputValue = this.repair.link 
        break
        case 5:
          this.inputName = '设备地址'
          this.inputPlace = '请输入设备地址'
          this.inputValue = this.repair.addr 
        break
        case 6:
          this.inputName = '商品标题'
          this.inputPlace = '请输入商品标题'
          this.inputValue = this.sale.title 
        break
        case 7:
          this.inputName = '商品描述'
          this.inputPlace = '请输入商品描述'
          this.inputValue = this.sale.desc 
        break
        case 8:
          this.inputName = '联系人'
          this.inputPlace = '请输入联系人'
          this.inputValue = this.sale.conact 
        break
        case 9:
          this.inputName = '联系方式'
          this.inputPlace = '请输入联系方式'
          this.inputValue = this.sale.link 
        break
        case 10:
          this.inputName = '地址'
          this.inputPlace = '请输入地址'
          this.inputValue = this.sale.addr 
        break
      }
    }
    ,editInput() {
      this.edit = false
      switch(this.selelctOpt) {
        case 1:
         this.repair.title = this.inputValue
        break
        case 2:
         this.repair.desc = this.inputValue
        break
        case 3:
         this.repair.conact = this.inputValue
        break
        case 4:
         this.repair.link = this.inputValue
        break
        case 5:
         this.repair.addr = this.inputValue
        break
        case 6:
         this.sale.title = this.inputValue
        break
        case 7:
         this.sale.desc = this.inputValue
        break
        case 8:
         this.sale.conact = this.inputValue
        break
        case 9:
         this.sale.link = this.inputValue
        break
        case 10:
         this.sale.addr = this.inputValue
        break
        
      }
    }
    ,selectPicker(opt) {
      this.show = true
      this.selectStatus = opt
      switch(opt) {
        case 1:
          let arr = []
          for(let i in deviceTypes) {
            arr =  [...arr,deviceTypes[i].name]
          }
          this.columns = arr
        break
        case 2:
           this.columns = this.changArea(this.areaSheng)
        break
        case 5:
          this.columns = this.saleStatus
        break
      }
      
    }
    ,getPicker(event) {// 单选
      this.show = false
      const {index,value} = event.mp.detail
      // console.log(event)
      switch(this.selectStatus) {
        case 1:
         this.repair.sort = index
        break
        case 2:
        this.show = true
        this.selectStatus = 3
         let area = this.areaSheng 
          let id = 0
          this.workAddr = `${value}/`
          for(let i in area) {
            area[i].areaName == value ? id = area[i].id : ''
          }
          this.getArea(id)
        break
        case 3:
        this.show = true
        this.selectStatus = 4
          area = this. areaQu
           id = 0
          this.workAddr += `${value}/`
          for(let i in area) {
            area[i].areaName == value ? id = area[i].id : ''
          }
          this.getArea(id)
        break
        case 4:
        // console.log(value)
        this.workAddr += `${value}`
        break
        case 5:
          this.sale.status = index
        break
      }
     
    }
    ,delchooseImg(opt,index) {
      this.imgs.splice(index,1)
    }
     ,chooseImg (opt) {
      Util.chooseImage((res) => {
        let _this = this
        let tempFilePath = res.tempFilePaths[0]
        let url = `${baseUrl}/file/upload/custOther/${_this.userInfo.id}`
         wx.showToast({ 
            title: '正在上传...', 
            icon: 'loading',  
            mask: true,  
            duration: 10000  
          })  
        wx.uploadFile({
          url: url, 
          filePath: tempFilePath,
          name: 'file',
          header: { 'Access-Token':_this.userInfo.token},
          success: function (res) {
             wx.hideToast()
            var data =JSON.parse(res.data)  // string to obj
             if(data.resultCode == '0000000') {
                _this.imgs = [..._this.imgs,data.returnData]
            }
          },fail:function(err){
            wx.hideToast();  
            wx.showModal({  
              content: '上传图片失败',  
              showCancel: false,
            }) 
          }
        })

      })
    }
     ,getArea(id = 0) {
        let url = ''
        let params = ''
        if(id == 0) {
          url = `/area/device/init/${this.userInfo.id}`
        } else {
          url =`/area/clild/get/${this.userInfo.id}`
          params =`{"id":"${id}"}`
        }
         this.$http.post(url,params,{
            headers:{
              'Access-Token':this.userInfo.token,
            }, //http请求头，
          }).then((res) => {
            let data = res.data
            if(data.resultCode == '0000000') {
              if(id == 0) {
                let area = data.returnData.deviceArea1
                this.areaSheng = area
              } else {
                let returnData = data.returnData
                this.areaQu = returnData
                this.columns = this.changArea(returnData)
              }
            }
         })
    }
    ,changArea(data) {
      let arr = []
      for(let i in data) {
        arr = [...arr,data[i].areaName]    
      }
      return arr
    }
  },
  mounted () {
    this.userInfo = Util.getStorage('userInfo')
    this.id = this.$mp.query.id
    let info = this.$mp.query.info
    let title = ''
    this.id == 2 ?  title='发布维修需求': title='发布出售/收购'
    if(info) {
      console.log(info)
       info = JSON.parse(info)
      if(this.id == 1) {
        this.sale.id = info.id 
        this.sale.title = info.title
        this.sale.desc = info.goodsDesc
        this.sale.sort = ~~info.deviceType1-1
        this.sale.price = info.tradePrice
        this.imgs = info.imgs
        this.sale.status =  info.tradeType
        this.sale.num   =  info.tradeCount
        this.sale.conact = info.linkMan
        this.sale.link = info.linkTel
        this.sale.addr = info.tradeAddress
        this.workAddr = `${info.tradeProvince|| ''}/${info.tradeCity|| ''}/${info.tradeArea|| ''}`
      } else { 
        this.repair.id = info.id
        this.repair.sort = ~~info.deviceType1-1
        this.repair.title = info.title
        this.repair.desc = info.problemDesc
        this.repair.minPrice = info.paymentMin
        this.repair.maxPrice = info.paymentMax
        this.repair.conact = info.linkMan
        this.repair.link = info.linkTel
        this.repair.addr = info.deviceAddress
        
        this.imgs = info.imgs
        this.workAddr = `${info.deviceProvince|| ''}/${info.deviceCity|| ''}/${info.deviceArea|| ''}`
      
      }

    }
    Util.setTitle(title)
    this.getArea()
  }
 
}
</script>

<style  lang="less">
.jiaoyi_publish {
  padding-bottom: 60px;
  .info {
    padding: 20px 30px;
    
    .add-img {
      padding: 20px 0;
      display: flex;
      .sel-img {
        position: relative;
        .colse-img {width:15px;height: 15px;position:absolute;top:-5px;left:-5px;}
        .item-img {width:57px;height: 57px;margin-right: 24px;}
      }
      .add {
        width:57px;
        height: 57px;
        color:#A1A2A4;
        background: #EEEFF4;
        font-size: 9px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .add-img {
          width:28px;
          height: 28px;
        }
      }
    }
    .info-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 9px 0;
      color: #757980;
      .left {font-size: 13px;color:#1C2627;}
      .right {
        font-size: 11px;
        display: flex;
        .ri-img {
          width:8px;
          height: 14px;
          margin-left: 15px;
        }
        .price {
          display: flex;
          // margin-right: 23px;
          .yang {color:#FDC915;font-size: 14px;margin-right: 5px;}
          .input-gp {
            display: flex;
            align-items: center;
              .input {
                width: 40px;
                border-bottom: 1px solid #E5E7EC;
              }
              .line {
                color:#757980;
                font-size: 12px;
                margin: 0 5px;
              }
          }
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
      color:#757980;
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
  .h-s100 {
    min-height: 100px;
    background: #FFFFFF;
  }
  
}
 .jianliss-edit {
    padding: 0px 30px 60px 30px;
     min-height: 75px;
    background: #FFFFFF;
    .back {
      padding: 10px 0px;
      color:#1C2627;
      font-size: 14px;
    }
    .edit-item {
      position: relative;
      .title {color:#1C2627;font-size: 14px;padding-bottom: 5px;padding-top:15px;}
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
      .textarea {
        line-height: 20px;
        padding: 5px 0;
        min-height: 40px;
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
