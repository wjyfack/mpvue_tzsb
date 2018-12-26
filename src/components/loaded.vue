<template>
    <div>
        <div class="loading" v-if="isLoading"><van-loading type="spinner" size="15px"/><div class="name">加载中...</div> </div>
    <div class="bottom" v-if="isBottom"> <div class="name">到底了-_-</div></div>
    </div>
</template>
<script>
export default {
    props: ['isLoading','isBottom']
}
</script>
<style lang="less" scoped>
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


