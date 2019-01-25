<template>
<div class="search">
    <van-search
      :value="value"
      placeholder="请输入设备编号搜索"
      show-action
     @search="onSearch"
     @cancel="onCancel"
     custom-class="va-search"
     cancel-class="cancel-class"
    />
    <she-bei :list="list" :isEmpty="isEmpty"></she-bei>
    <my-load :Loading="loading" :Bottom="isBottom"> </my-load>
      <van-toast id="van-toast" />
</div>
</template>
<script>
import sheBei from '@/components/shebei'
import Toast from '@/../static/dist/toast/toast'
import myLoad from '@/components/myLoad'
import Util from '@/utils/index'
export default {
  components: {
    sheBei,
    myLoad
  },
  data () {
    return {
      value: ''
      ,isEmpty: false
      ,loading: false,
      isBottom: false,
      isEmpty: false,
      clickSort: false,
      isbell: false,
      pageSize: 10,
      page: 1
      ,list: []
      ,deviceType: ''
      ,orderType: ''
      ,deviceCertNo: ''
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
      this.deviceCertNo = val
      this.list = []
       this.getDrived()
    },
    onCancel() {
      this.value = ''
       wx.navigateBack({
        delta: 1
      })
    }
     ,getDrived(){
      if(!this.clickSort)
      if(this.loading || this.isEmpty) return ''
     const params = Util.getData({
        "pageSize": this.pageSize,
        "pageNum": this.page,
        "deviceUseName": this.userInfo.realName,
         "deviceType1": this.deviceType,
         "deviceCertNo": this.deviceCertNo,
        "orderType": this.orderType
      })
      this.loading = true
      this.$http.post(`/device/get/${this.userInfo.id}`,params,{
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
              this.clickSort ?  this.list =  [ ...data.returnData] : ''
             
            } else {
               this.isBottom=true 
            }
            } else {
              if(this.clickSort) {
                this.list =  [ ...data.returnData]
               
              } else{
                this.list =  [...this.list, ...data.returnData]
              }
          }
           this.clickSort = false
        } else {
          Toast(data.resultDesc)
        }
      })
    }
  },

  created () {

  }
  ,onReachBottom () {
    console.log(123)
  }
  ,onPageScroll(event) {

  }
}
</script>

<style  lang="less">
.search {
  .va-search {
    background: #FDC915 !important;
  }
  .cancel-class {
    color: #ffffff;
  }
}
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
</style>
