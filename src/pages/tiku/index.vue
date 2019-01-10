<template>
  <div class="tiku">
    <a href="" class="tiku-item">全部题库</a>
    <a href="" class="tiku-item">模拟考试</a>
    <a href="" class="tiku-item">错题库</a>
    <a href="" class="tiku-item">视频教学</a>
  </div>
</template>
<script>
import Util from '@/utils/index'
import tabBar from '@/components/tabBar'
import myLoad from '@/components/myLoad'
export default {
  components: {
    tabBar,
    myLoad
  },
  data () {
    return {
     height: 0
    }
  },
 
  methods: {
       
  },

  created () {
    
  }


}
</script>

<style  lang="less">
.tiku {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 57px 0;
  .tiku-item {
    width:280px;
    height: 49px;
    border:  2px solid #A1A2A4;
    border-radius: 4px;
    box-shadow:0px 2px 7px 0px rgba(0,0,0,0.14);
    font-size: 14px;
    color:#757980;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }
}
</style>
