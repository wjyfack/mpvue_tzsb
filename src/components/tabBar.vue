<template>
  <div>
    <van-tabbar :active="active" @change="onChange" v-if="show">
      <van-tabbar-item> 
        <img slot="icon" src="../asset/imgs/home.png" class="icon" mode="aspectFit" />
        <img slot="icon-active" src="../asset/imgs/home_c.png" mode="aspectFit" />
      </van-tabbar-item>
      <van-tabbar-item > 
        <img slot="icon" src="../asset/imgs/fail.png" class="icon" mode="aspectFit" />
        <img slot="icon-active" src="../asset/imgs/fail_c.png" mode="aspectFit" />
      </van-tabbar-item>
       <van-tabbar-item > 
        <img slot="icon" class="tabbar-img-big" src="../asset/imgs/jiankong.png"  mode="aspectFit" />
        <img slot="icon-active" class="tabbar-img-big" src="../asset/imgs/jiankong.png" mode="aspectFit" />
      </van-tabbar-item>
      <van-tabbar-item > 
        <img slot="icon" src="../asset/imgs/yewu.png" class="icon" mode="aspectFit" />
        <img slot="icon-active" src="../asset/imgs/yewu_c.png" mode="aspectFit" />
      </van-tabbar-item>
      <van-tabbar-item > 
        <img slot="icon" src="../asset/imgs/login_people.png" class="icon" mode="aspectFit" />
        <img slot="icon-active" src="../asset/imgs/my.png" mode="aspectFit" />
      </van-tabbar-item>

    </van-tabbar>
    <van-tabbar :active="active" @change="onChange" v-else>
      <!-- <van-tabbar-item> 
        <img slot="icon" src="../asset/imgs/home.png" class="icon" mode="aspectFit" />
        <img slot="icon-active" src="../asset/imgs/home_c.png" mode="aspectFit" />
      </van-tabbar-item> -->
      <!-- <van-tabbar-item > 
        <img slot="icon" src="../asset/imgs/fail.png" class="icon" mode="aspectFit" />
        <img slot="icon-active" src="../asset/imgs/fail_c.png" mode="aspectFit" />
      </van-tabbar-item>
       <van-tabbar-item > 
        <img slot="icon" class="tabbar-img-big" src="../asset/imgs/jiankong.png"  mode="aspectFit" />
        <img slot="icon-active" class="tabbar-img-big" src="../asset/imgs/jiankong.png" mode="aspectFit" />
      </van-tabbar-item> -->
      <van-tabbar-item > 
        <img slot="icon" src="../asset/imgs/yewu.png" class="icon" mode="aspectFit" />
        <img slot="icon-active" src="../asset/imgs/yewu_c.png" mode="aspectFit" />
      </van-tabbar-item>
      <van-tabbar-item > 
        <img slot="icon" src="../asset/imgs/login_people.png" class="icon" mode="aspectFit" />
        <img slot="icon-active" src="../asset/imgs/my.png" mode="aspectFit" />
      </van-tabbar-item>
      
    </van-tabbar>
  </div>
</template>
<script>
import Util from '@/utils/index'
export default {
    props: {
      active: {default: 0},
      show: {default: true},
    },
    methods: {
        onChange(event) {
            const index = ~~event.mp.detail
            let url = '../index/main'
            if(this.show) {
              switch(index) {
                  case 1:
                    url= '../zhenggai/main'
                    break
                  case 2:
                      url= '../jiankong/main'
                      break
                  case 3:
                      url= '../yewu/main'
                      break
                  case 4:
                    url= '../my/main'
                    break
                  case 0: 
                  default:
                    url='../index/main'
              }
            } else {
              switch(index) {
                case 0:
                  url= '../yewu/main'
                  break
                // case 2:
                //     url= '../jiankong/main'
                //     break
                // case 3:
                //     url= '../yewu/main'
                //     break
                case 1:
                  url= '../my/main'
                  break
                // case 0: 
                // default:
                //   url='../index/main'
              }
            }
            
            Util.redTo(url)
        }
    }
}
</script>
<style lang="less">
.tabbar-img-big {
    width: 50px !important;
    height: 50px !important;
}
</style>



