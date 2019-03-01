<template>
  <div class="zhengai_detail">
    <div class="zhengai_bar">
        <div class="bar">
           <div class="bar-item" :class="{'act':show}" @click="changTab">任务详情</div>
           <div class="bar-item" :class="{'act':!show}" @click="changTab">提交整改</div>
        </div>
    </div>
      <van-transition :show="show" name="slide-left">
        <div class="info" >
          <div class="header van-hairline--bottom">
            <div class="title">指令书</div>
          </div>
          <div class="mes">
            <div class="mes-item">
              <div class="title">指令书编号 </div>
              <div class="input">{{command.commandNo}}</div>
            </div>
            <div class="mes-item">
              <div class="title">指令书流水号</div>
              <div class="input">{{command.commandNoNum}}</div>
            </div>
            <div class="mes-item">
              <div class="title">隐患描述</div>
              <div class="input">{{command.commandDeviceProblem}}</div>
            </div>
            <div class="mes-item">
              <div class="title">违反条例</div>
              <div class="input">{{command.commandAgainstRulesInfo}}</div>
            </div>
            <div class="mes-item">
              <div class="title">处罚依据条例</div>
              <div class="input">{{command.commandCcordingRulesInfo}} </div>
            </div>
            <div class="mes-item">
              <div class="title">整改措施</div>
              <div class="input">{{command.commandChangedInfo}}</div>
            </div>
            <div class="mes-item">
              <div class="title">整改截止日期</div>
              <div class="input">{{command.commandChangedEndDate}}</div>
            </div>
            <div class="mes-item">
              <div class="title">指令书日期</div>
              <div class="input">{{command.commandDate}}</div>
            </div>
            <div class="mes-item">
              <div class="title">指令书图片</div>
              <div class="input">
                <img v-if="bases+command.commandImgUrl" :src="bases+command.commandImgUrl" alt="" class="img" @click="previews(bases+command.commandImgUrl)">
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
              <div class="input">{{command.companyUseNewName}}</div>
            </div>
            <div class="mes-item">
              <div class="title">使用单位地址 </div>
              <div class="input">{{command.companyUseFullAddress}}</div>
            </div>
          </div>
        </div>
        <div class="info info-top" >
          <div class="header van-hairline--bottom">
            <div class="title">设备</div>
          </div>
          <div class="mes">
            <div class="mes-item" v-for="(item,index) in command.shebeis" :key="index">
              <div class="title">设备{{index+1}} </div>
              <div class="input">{{item}}</div>
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
              <div class="input">{{command.rectifyStatusName || ''}}</div>
            </div>
            <div class="mes-item">
              <div class="title">审核说明 </div>
              <div class="input">{{command.rectifyAuditInfo || ''}}</div>
            </div>
          </div>
          <div class="h-50"></div>
        </div>
      </van-transition>
      <van-transition :show="!show" name="slide-right">
        <div class="set-height" :style="{'min-height':height}">
         <div class="padd-bottm">
           <div class="info info-top" v-for="(item,index) in tasks" :key="item.checkNo" >
             <div class="header van-hairline--bottom">
               <div class="title">任务{{index+1}}</div>
             </div>
             <div class="mes">
               <div class="mes-item">
                 <div class="title">任务编号 </div>
                 <div class="input">{{item.checkNo}} </div>
               </div>
               <div class="mes-item">
                 <div class="title">任务要求 </div>
                 <div class="input">{{item.trackIntro}}</div>
               </div>
               <div class="mes-item">
                 <div class="title">设备编号 </div>
                 <div class="input">{{item.deviceCertNo}}</div>
               </div>
               <div class="mes-item">
                 <div class="title">单位内编号 </div>
                 <div class="input">{{item.deviceNo}}</div>
               </div>
               <div class="pic-item">
                 <div class="title">整改图片 </div>
                 <div class="input_img">
                   <div class="img-list" v-for="(items,indexs) in item.imgs" :key="indexs">
                     <div class="close" v-if="isEdit" @click="deleteImg(index,indexs)"><img src="../../asset/imgs/z_cuo.png" alt="" class="img-c"></div>
                     <img v-if="baseImg+items" :src="baseImg+items" alt="" class="img-item" @click="previews(item.imgs,indexs)">
                   </div>
                   <div class="add" v-if="isEdit" @click="uploadImg(index)">
                       <img src="../../asset/imgs/add.png" alt="" class="add_img">
                   </div>
                 </div>
               </div>
               <div class="mes-item">
                 <div class="title" @click="pushTask(index)"> <div>整改备注</div><img src="../../asset/imgs/xiugaih.png" alt="" class="t_img">  </div>
                 <input @focus="onInput(index)" class="input" v-model="item.remark" :disabled="!isEdit" placeholder="已经根据要求整改">
               </div>
             </div>
           </div>
         </div>
         <div class="set-fixed van-hairline--top" v-if="isEdit" :style="{'top':scrollHeight+'px'}"> 
             <div class="btn" @click="changTab">上一步</div>
             <div class="btn btn-c" @click="pushTasks">提交整改反馈</div>
          </div>
         </div>
       </van-transition>
      <van-toast id="van-toast" />
     <van-dialog id="van-dialog" />
  </div>
</template>
<script>
import Util from '@/utils/index'
import {baseUrl ,zhilingUrl} from '@/utils/config'
import Toast from '@/../static/dist/toast/toast'
import Dialog from '@/../static/dist/dialog/dialog'
export default {
  data() {
    return {
      height: 0,
      scrollHeight: 0,
      isEdit: false,
      active: 0,
      show: true,
      id: 0,
      ids: 0,
      sign: '',
      command: {
        shebeis: []
      },
      bases: zhilingUrl,
      baseImg: `${baseUrl}/file/show/rectify/`,
      tasks:[],
      regs:/^((ht)tps?):\/\/([\w\-]+(\.[\w\-]+)*\/)*[\w\-]+(\.[\w\-]+)*\/?(\?([\w\-\.,@?^=%&:\/~\+#]*)+)?/,
      userInfo: {}
    }
  },
  computed: {
    // userInfo: () => {
    //   return Util.getStorage('userInfo')
    // }
    // ,baseImg: () => {
    //   return `${baseUrl}/file/show/rectify/`
    // }
  },
  methods: {
   
    changTab() {
      this.show = !this.show
    }
    ,getTask() {
        const params = Util.getData({
          "sourceSySign":this.sign,
          "sourceCommandId":this.id})
         this.$http.post(`/task/check/get/${this.userInfo.id}`,params,{
            headers:{
              'Access-Token':this.userInfo.token,
            }, //http请求头，
          }).then((res) => {
            let data = res.data
            if(data.resultCode == '0000000') {
                
                 let myData = data.returnData
                 
                 let imgNames =  []
                 for(let i in myData) {
                 imgNames = myData[i].rectifyImg ? myData[i].rectifyImg.split('&'): []
                  for(let j in imgNames) {
                    if(imgNames[j] == ''|| imgNames== null) {
                      imgNames.splice(j,1)
                    } else {
                      imgNames[j] = imgNames[j]
                    }
                  }
                    myData[i].imgs = imgNames
                 }
                this.tasks =  myData
              console.log(myData)
            }
          })
    }
    ,getDetail() {
        const params = Util.getData({
          "id":this.ids})
         this.$http.post(`/task/command/dt/${this.userInfo.id}`,params,{
            headers:{
              'Access-Token':this.userInfo.token,
            }, //http请求头，
          }).then((res) => {
            let data = res.data
            if(data.resultCode == '0000000') {
              data.returnData.shebeis = this.getSheBeis(data.returnData.deviceCertNoList)
              data.returnData.commandChangedEndDate = this.selectDate(data.returnData.commandChangedEndDate)
              data.returnData.commandDate = this.selectDate(data.returnData.commandDate)
           
             data.returnData.rectifyStatusName = this.getrectifyStatusName(data.returnData.rectifyStatus)
             data.returnData.remark = data.returnData.remark == 'null' ? '' : data.returnData.remark
              if(data.returnData.rectifyStatus == 3) {
                 this.isEdit = false
              } else {
                 this.isEdit = true
              }
              this.command = data.returnData
            }
            
          })
    },
    selectDate(str) {
      return str ?str.substring(0,10) : ''
    }
    ,getrectifyStatusName(status) {
      let name = ''  
      // 整改状态 0 待整改 1 已提交，待审核 2.审核不通过 3.审核通过
      switch(~~status) {
          case 0:
          name = '待整改'
          break
          case 1:
           name = '已提交，待审核'
          break
          case 2:
           name = '审核不通过'
          break
          case 3:
           name = '审核通过'
          break
      }
      return name
    }
    ,getSheBeis(data) {
      return data == '' ?data.split(',') :  [] 
    }
    ,previews(url,indexs=0) {
        let urls = []
        if(typeof url == 'string') {
          urls = [url]
        } else {
          for(let i in url) {
            this.regs.test(url[i]) ?'':  urls[i] = this.baseImg+url[i]
          }
        } 
        Util.preview(urls,indexs)
    }
     ,uploadImg(index) { // index 为第几个任务
        const _this = this
        let fileType	= 'rectify' //	整改
      wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success(res) {
          // tempFilePath可以作为img标签的src属性显示图片
          const tempFilePaths = res.tempFilePaths

          // 文件上传
           wx.showToast({  
              title: '正在上传...',  
              icon: 'loading',  
              mask: true,  
              duration: 10000  
            })  
          wx.uploadFile({
          url: `${baseUrl}/file/upload/${fileType}/${_this.userInfo.id}`, 
          filePath: tempFilePaths[0],
          name: 'file',
          header: { 'Access-Token':_this.userInfo.token},
          success: function (res) {
             wx.hideToast();  
            var data =JSON.parse(res.data)  // string to obj
             if(data.resultCode == '0000000') {
                console.log(data,index)
                const url = data.returnData
                _this.tasks[index].imgs = [..._this.tasks[index].imgs, url]
            }
          },fail:function(err){
            wx.hideToast();  
            wx.showModal({  
              title: '错误提示',  
              content: '上传图片失败',  
              showCancel: false,  
              success: function (res) { }  
            }) 
          }
        })
        }
      })

    }
    ,deleteImg (index,indexs) {
        this.tasks[index].imgs.splice(indexs,1)
    }
    ,pushTask(index) { // index 为第几个任务
      if(!this.isEdit) {
       return ''
      }
         const params = Util.getData({
          "sourceSySign":this.tasks[index].sourceSySign,
          "sourceCheckId": this.tasks[index].sourceCheckId,
          "rectifyImg": this.tasks[index].imgs.join('&'),
          "remark": this.tasks[index].remark
          })
         this.$http.post(`/task/check/save/${this.userInfo.id}`,params,{
            headers:{
              'Access-Token':this.userInfo.token,
            }, //http请求头，
          }).then((res) => {
            let data = res.data
            if(data.resultCode == '0000000') {
                 Toast('保存成功')
            }
          })
    }
    ,pushTasks() {
      if(this.tasks.length == 0) {
        Toast('暂无整改任务')
        return ''
      }
     Dialog.confirm({
       message: '提交整改反馈？'
     }).then(() => {
       // on confirm
      const tasks = this.tasks
      let list  = []
    
      for(let i in tasks) {
          let obj = {}
        obj.rectifyImg = tasks[i].imgs.join('&')
        obj.sourceSySign = tasks[i].sourceSySign
        obj.remark = tasks[i].remark
        obj.sourceCheckId = tasks[i].sourceCheckId
        list = [...list,obj]
      }
        const params =JSON.stringify( {
          "id":  this.command.id
          ,"list": list
        })
       this.$http.post(`/task/command/rectify/submit/${this.userInfo.id}`,params,{
            headers:{
              'Access-Token':this.userInfo.token,
            }, //http请求头，
          }).then((res) => {
            let data = res.data
            if(data.resultCode == '0000000') {
                 Toast('提交成功')
                setTimeout(() => {
                 wx.navigateBack({
                   delta: 1
                 })
                },1500)
                
            } else {
              Toast(data.resultDesc)
            }
          })
     }).catch(() => {
       // on cancel
     });
      
    }
    ,onInput(index) {
        console.log(index)
    },
    getPhoneHeight () {
      let _this = this
      wx.getSystemInfo({
        success: function(res) {
         _this.height = (res.windowHeight) +'px'
         _this.scrollHeight = ~~res.windowHeight -50
//         console.log(~~res.windowHeight)
        }
      })
    }
  },
  onLoad () {
    console.log('loadgin')
   this.getPhoneHeight()
  },
  onPageScroll(e) {
   console.log(e.scrollTop)
//   this.scrollHeight = (e.scrollTop +this.scrollHeight)
  },
  mounted () {
   console.log(this.$mp.query)
    this.userInfo = Util.getStorage('userInfo')
    this.id = this.$mp.query.id
    this.ids = this.$mp.query.ids
    this.sign = this.$mp.query.sign
    // let isEdit = this.$mp.query.isEdit || 0
    // console.log(isEdit == 1)
    this.tasks = []
    this.show = true
    this.getDetail()
    this.getTask()
  }


}
</script>

<style  lang="less">
.zhengai_detail {
  .zhengai_bar {
    padding: 7px 0;
    display: flex;
    justify-content: center;
    background: #ffffff;
    .bar {
      width: 152px;
      height: 26px;
      border: 1px solid #FDC915;
      border-radius: 2px;
      display: flex;
      justify-content: center;
      align-items: center;
      .bar-item {
        background: #ffffff;
        font-size: 14px;
        color:#A1A2A4;
        width:50%;
        text-align: center;
        height: 26px;
        line-height: 26px;
      }
      .act {
        background: #FDC915;
        color:#1C2627;
      }
    }
  }
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
            display: flex;
            align-items: center;
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
            display: flex;
            flex-wrap: wrap;
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
            .img-list {
               width:80px;
              height: 80px;
              margin-right: 8px;
              margin-bottom: 8px;
              position: relative;
              .close {
                position: absolute;
                  right: -5px;
                  top: -4px;
                  background: #ffffff;
                  border-radius: 50%;
                  width: 14px;
                  height: 14px;
                  display: flex;
                  .img-c {width: 14px;height: 14px;}
              }
              .img-item {
                width: 80px;
                height: 80px;
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
   .h-t-50 {height: 50px;background: #ffffff;}
   .set-fixed {
     position: fixed;
     left: 0;
     right: 0;
      background: #ffffff;
      height: 55px;
      z-index: 99;
     -webkit-overflow-scrolling:touch;
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
   .set-height {
     position: relative;
     width: 100%;
     overflow-y:auto;
    -webkit-overflow-scrolling:touch;
   }
   .padd-bottm {
     margin-bottom: 70px;
   }
}
</style>
