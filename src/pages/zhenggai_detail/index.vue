<template>
  <div class="zhengai_detail">
    <van-tabs type="card" :active="active" color="#FDC915" @change="onChange" custom-class="zhengai_detail_tab">
      <van-tab title="任务详情"> 
        <div class="info" >
          <div class="header van-hairline--bottom">
            <div class="title">指令书</div>
          </div>
          <div class="mes">
            <div class="mes-item">
              <div class="title">指令书编号 </div>
              <div class="input">&#912018]第(3312)号</div>
            </div>
            <div class="mes-item">
              <div class="title">指令书流水号</div>
              <div class="input">设备描述</div>
            </div>
            <div class="mes-item">
              <div class="title">隐患描述</div>
              <div class="input">未按照规定办理使用登记； 未配备具有相应资格的特种设备作业人员。</div>
            </div>
            <div class="mes-item">
              <div class="title">违反条例</div>
              <div class="input">《中华人民共和国特种设备安全法》第三十三条；第十四条</div>
            </div>
            <div class="mes-item">
              <div class="title">处罚依据条例</div>
              <div class="input">《中华人民共和国特种设备安全法》第六十二条；第八十三条；第八十六条。 </div>
            </div>
            <div class="mes-item">
              <div class="title">整改措施</div>
              <div class="input">1.限期内办理使用登记相关的手续，并且同类特种设备在投入使用前或者投入使用后三十日内向特种设备安全监督管理的部门办理使用登记； 2.特种设备作业人员应当按照国家有关规定取得相应资格，方可从事相关工作。</div>
            </div>
            <div class="mes-item">
              <div class="title">整改截止日期</div>
              <div class="input">2018-06-23</div>
            </div>
            <div class="mes-item">
              <div class="title">指令书日期</div>
              <div class="input">2018-05-24</div>
            </div>
            <div class="mes-item">
              <div class="title">指令书图片</div>
              <div class="input">
                <img src="http://placehold.it/100x100" alt="" class="img">
              </div>
            </div>
          </div>
        </div>
        <div class="info info-top" >
          <div class="header van-hairline--bottom">
            <div class="title">使用单位</div>
          </div>
          <div class="mes">
            <div class="mes-item">
              <div class="title">使用单位名称 </div>
              <div class="input">南海区太平卓达宝染整厂</div>
            </div>
            <div class="mes-item">
              <div class="title">使用单位地址 </div>
              <div class="input">南海区西樵太平</div>
            </div>
          </div>
        </div>
        <div class="info info-top" >
          <div class="header van-hairline--bottom">
            <div class="title">使用单位</div>
          </div>
          <div class="mes">
            <div class="mes-item">
              <div class="title">设备1 </div>
              <div class="input">容1LE粤EMB359</div>
            </div>
          </div>
        </div>
        <div class="info info-top" >
          <div class="header van-hairline--bottom">
            <div class="title">审核结果</div>
          </div>
          <div class="mes">
            <div class="mes-item">
              <div class="title">任务状态 </div>
              <div class="input">未提交/待审核/未通过/已通过</div>
            </div>
            <div class="mes-item">
              <div class="title">审核说明 </div>
              <div class="input">未通过的原因/否则为空</div>
            </div>
          </div>
          <div class="h-50"></div>
        </div>
      </van-tab>
      <van-tab title="提交整改">
        <div class="info info-top" >
          <div class="header van-hairline--bottom">
            <div class="title">任务1</div>
          </div>
          <div class="mes">
            <div class="mes-item">
              <div class="title">任务编号 </div>
              <div class="input">CK17110800000549 </div>
            </div>
            <div class="mes-item">
              <div class="title">任务要求 </div>
              <div class="input">过期设备请现场核查</div>
            </div>
            <div class="mes-item">
              <div class="title">设备编号 </div>
              <div class="input">容1LE粤EMB359</div>
            </div>
            <div class="mes-item">
              <div class="title">单位内编号 </div>
              <div class="input">单位内编号</div>
            </div>
            <div class="pic-item">
              <div class="title">整改图片 </div>
              <div class="input_img">
                <div class="add">
                    <img src="../../asset/imgs/add.png" alt="" class="add_img">
                </div>
              </div>
            </div>
             <div class="mes-item">
              <div class="title"> <div>单位内编号</div><img src="../../asset/imgs/xiugai.png" alt="" class="t_img">  </div>
              <input class="input" value="单位内编号">
            </div>
          </div>
        </div>
        <div class="h-t-50"></div>
        <div class="set-fixed">
            <div class="btn" @click="onBack">上一步</div>
            <div class="btn btn-c">提交整改反馈</div>
          </div>
      </van-tab>
    </van-tabs>

  </div>
</template>
<script>
import Util from '@/utils/index'

export default {
  data() {
    return {
      active: 0
    }
  },

  methods: {
    onChange(event) {
      console.log(event)
    },
    onBack() {
      this.active = 0
    }
  },

  created () {
  }


}
</script>

<style  lang="less">
.zhengai_detail {
  .zhengai_detail_tab {
    font-size: 16px;
    background: #ffffff;
  }
  background: #EEEFF4;
   .info {
     .header {
       padding:  10px 20px;
       background: #ffffff;
        .title {
          font-size: 16px;
          color:#1C2627;
          padding-left: 5px;
          position: relative;
          line-height: 1;
          border-left:  2px solid #FDC915;
          display: flex;
          align-items: center;
          .img {width:18px;height: 18px;margin-left: 15px;vertical-align: middle;}
        }
     
     }
     .mes {
         padding: 10px 25px  ;
         background: #ffffff;
        .mes-item  {
          display: flex;
          align-items: top;
          .title {font-size: 14px;color:#1C2627; min-width: 120px; display: flex; .t_img {margin-left: 5px;width:18px;height: 18px;}}
          .input {
            flex: 1;
            height: auto;
            min-height: 18px;
            font-size: 14px;
            color:#757980;
            .img {
              width: 64px;
              height: 85px;
            }
          }
        }
        .pic-item {
          .title {font-size: 14px;color:#1C2627; min-width: 120px;}
          .input_img {
            padding: 8px 0;
            .add {
              width:80px;
              height: 80px;
              font-size: 14px;
              background: #EEEFF4;
              position: relative;
              display: flex;
              justify-content: center;
              align-items: center;
              .add_img{
                width: 24px;
                height: 24px;
              }
            }
            
          }
        }
     }

   }
   .info-top{
     margin-top: 14px;
   }
   .h-50 {
     height: 50px;
    background: #EEEFF4;
   }
   .h-t-50 {height: 50px;}
   .set-fixed {
     position: fixed;
     bottom: 0;
     left: 0;
     right: 0;
      background: #ffffff;
      height: 55px;
      z-index: 99;
      .btn {
        width: 50%;
        float: left;
        text-align: center;
       color: #1C2627;
       font-size: 16px;
       line-height: 55px;
      }
      .btn-c {background: #FDC915;}
   }
}
</style>
