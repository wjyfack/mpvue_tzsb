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
    <div class="loading" v-if="loading"><van-loading type="spinner" size="15px"/><div class="name">加载中...</div> </div>
    <div class="bottom" v-if="isBottom"> <div class="name">到底了-_-</div></div>
      <van-toast id="van-toast" />
</div>
</template>
<script>
import sheBei from '@/components/shebei'
import Toast from '@/../static/dist/toast/toast';
import Util from '@/utils/index'
export default {
  components: {
    sheBei
  },
  data () {
    return {
      value: ''
      ,list: []
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
      // this.$http.post(`/device/getDt/{${this.userInfo.id}}`,params,{
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
