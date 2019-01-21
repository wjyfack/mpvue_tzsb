<template>
<div class="zhaopings">
    <van-search
      :value="value"
      placeholder="搜索企业信息"
      show-action
     @search="onSearch"
     @change="onChange"
       use-action-slot
     custom-class="va-search"
    >
    <div class="cancel-class" slot="action" @click="onSearch">搜索</div>
    </van-search>

    <zhao-item opt="company" :list="gsList"></zhao-item>

      <van-toast id="van-toast" />
</div> 
</template>
<script>
import zhaoItem from '@/components/zhaoItem'
import Toast from '@/../static/dist/toast/toast'
import myLoad from '@/components/myLoad'
import Util from '@/utils/index'
export default {
  components: {
    zhaoItem,
    myLoad
  },
  data () {
    return {
      value: ''
      ,list: []
      ,isEmpty: false
      ,loading: false
      ,isBottom: false,
      gsList: [],
      gsOrderType: '',
      gsPage: 1,
    }
  },
  computed: {
    userInfo: ()=> {
      return Util.getStorage('userInfo')
    }
  },
  methods: {
    onSearch(event) {
      console.log(this.value)
      this.getCompany()
    },
    onChange(event) {
        this.value = event.mp.detail
    },
    onCancel() {
      this.value = ''
    }
    ,getCompany() {
       Toast('正在加载...')
     const params = JSON.stringify({
        companyName: `${this.value}`,
        pageNum: `${this.gsPage}`,
        pageSize:"10",
        orderType: `${this.gsOrderType}`
       })
      this.$http.post(`/company/page/${this.userInfo.id}`,params,{
        headers:{
          'Access-Token':this.userInfo.token,
        }, //http请求头，
      }).then((res) => {
        let data = res.data
        if(data.resultCode == '0000000') {
            if(data.returnData.length != 0) {
              let base =  data.returnData.list
              for(let i in base) {
                  base[i].brands = base[i].treatments.split(',')
              }
              this.gsList = [...this.gsList, ...base]
             // setTimeout(()=> {Toast.clear()},1000)
            } else {
              Toast('没有更多了')
            }
            
        } else {
          Toast(data.resultDesc)
        }
      })
    }
  }
  ,onReachBottom() {
    this.getCompany()
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


}

</style>
