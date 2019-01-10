<template>
<div class="zhaopings">
    <van-search
      :value="value"
      placeholder="搜索企业信息"
      show-action
     @search="onSearch"
       use-action-slot
     custom-class="va-search"
    >
    <div class="cancel-class" slot="action">搜索</div>
    </van-search>

    <zhao-item opt="company"></zhao-item>

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
    },
    onCancel() {
      this.value = ''
    }
  },

  mounted () {
    Util.setBackGroup()
  
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
