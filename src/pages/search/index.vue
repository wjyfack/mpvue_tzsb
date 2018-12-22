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
    <she-bei></she-bei>
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
      value: ''
    }
  },

  methods: {
    onSearch(event) {
      console.log(event)
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
</style>
