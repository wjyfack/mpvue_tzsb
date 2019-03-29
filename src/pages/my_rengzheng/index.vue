<template>
  <div class="isrenzheng">
    <!-- 1不通过 0待审核 2审核通过 ""未认证 -->
    <div class="my_rengzheng" v-if="status == '2'">
      <div class="bg"></div>
      <div class="text">审核通过</div>
    </div>
    <div class="my_rengzheng" v-else-if="status === '0'">
      <div class="bg"></div>
      <div class="text">待审核</div>
    </div>
    <div class="rengzheng" :style="{'height': height}" v-else>
      <div class="radio-group">
        <div class="radio-item" @click="onRadio(1)"> <img v-if="!checked" src="./../../asset/imgs/radiod.png" class="radio"
            alt=""><img v-if="checked" src="./../../asset/imgs/radio_checked.png" class="radio" alt=""> <label for="qiye"
            class="label">企业用户</label></div>
        <div class="radio-item" @click="onRadio(2)"> <img v-if="checked" src="./../../asset/imgs/radiod.png" class="radio"
            alt=""><img v-if="!checked" src="./../../asset/imgs/radio_checked.png" class="radio" alt=""><label for="geren"
            class="label">个人用户</label></div>
      </div>

      <div class="ren-list van-hairline--bottom" v-if="SList.length != 0">
        <div class="ren-list-item van-hairline--top" v-for="(item,index) in SList" :key="index" @click="selectSlit(item)">{{item}}</div>

      </div>
      <van-transition :show="checked" name="fade-left">
        <div class="part" v-if="checked">
          <div class="form-input van-hairline--top">
            <div class="label">单位名称</div>
            <input type="text" class="input" v-model="qi.name" placeholder="请输入单位名称" @input="changeMohu(e,1)">
          </div>
          <div class="form-input van-hairline--top">
            <div class="label">单位地址</div>
            <input type="text" class="input" v-model="qi.addr" placeholder="请输入单位地址">
          </div>
          <div class="form-input van-hairline--top">
            <div class="label">单位联系人</div>
            <input type="text" class="input" v-model="qi.conact" placeholder="请输入联系人">
          </div>
          <div class="form-input van-hairline--top">
            <div class="label">单位电话</div>
            <input type="text" class="input" v-model="qi.phone" placeholder="请输入电话">
          </div>

          <div class="form-input van-hairline--top">
            <div class="label">使用登记证</div>
            <div class="pic-list" v-for="(item , index) in qiImgsG" :key="index">
              <span class="colse" @click="deleteImgs(1,index)"><img src="../../asset/imgs/z_cuo.png" class="img-c" alt=""></span>
              <img :src="baseUrls+item" class="img-sel" alt="">
            </div>
            <div class="add" v-if="isQI" @click="addImgs(1)">
              <img src="../../asset/imgs/add.png" class="add-btn" alt="">
            </div>
          </div>
          <div class="form-input van-hairline--top">
            <div class="label">营业执照</div>
            <div class="pic-list" v-for="(item , index) in yyImgsG" :key="index">
              <span class="colse" @click="deleteImgs(4,index)"><img src="../../asset/imgs/z_cuo.png" class="img-c" alt=""></span>
              <img :src="baseUrls+item" class="img-sel" alt="">
            </div>
            <div class="add" v-if="isYy" @click="addImgs(4)">
              <img src="../../asset/imgs/add.png" class="add-btn" alt="">
            </div>
          </div>
          <div class="btn van-hairline--top">
            <van-button round type="primary" custom-class="pro" @click="onSub">提交</van-button>
          </div>
        </div>
      </van-transition>
      <van-transition :show="!checked" name="fade-right">
        <div class="part" v-if="!checked">
          <div class="form-input van-hairline--top">
            <div class="label">用户姓名</div>
            <input type="text" class="input" v-model="person.name" placeholder="请输入用户姓名" @input="changeMohu(event,0)">
          </div>
          <div class="form-input van-hairline--top">
            <div class="label">用户电话</div>
            <input type="text" class="input" v-model="person.phone" placeholder="请输入用户电话">
          </div>
          <div class="form-input van-hairline--top">
            <div class="label">设备地址</div>
            <input type="text" class="input" v-model="person.addr" placeholder="请输入设备地址">
          </div>
          <!-- <div class="form-input van-hairline--top">
        <div class="label">使用证编号</div>
        <input type="text" class="input" v-model="person.bianhao" placeholder="请输入编号 如:锅粤EM0000">
      </div> -->
          <div class="form-input van-hairline--top">
            <div class="label">使用登记证</div>
            <div class="pic-list" v-for="(item , index) in qiImgsG" :key="index">
              <span class="colse" @click="deleteImgs(1,index)"><img src="../../asset/imgs/z_cuo.png" class="img-c" alt=""></span>
              <img :src="baseUrls+item" class="img-sel" alt="">
            </div>
            <div class="add" v-if="isQI" @click="addImgs(1)">
              <img src="../../asset/imgs/add.png" class="add-btn" alt="">
            </div>
          </div>
          <div class="form-input van-hairline--top">
            <div class="label">身份证正面</div>
            <div class="pic-list" v-for="(item , index) in psImgsG" :key="index">
              <span class="colse" @click="deleteImgs(2,index)"><img src="../../asset/imgs/z_cuo.png" class="img-c" alt=""></span>

              <img :src="baseUrls+item" class="img-sel" alt="">
            </div>
            <div class="add" v-if="isPs" @click="addImgs(2)">
              <img src="../../asset/imgs/add.png" class="add-btn" alt="">
            </div>
          </div>
          <div class="form-input van-hairline--top">
            <div class="label">身份证反面</div>
            <div class="pic-list" v-for="(item , index) in fmImgsG" :key="index">
              <span class="colse" @click="deleteImgs(3,index)"><img src="../../asset/imgs/z_cuo.png" class="img-c" alt=""></span>

              <img :src="baseUrls+item" class="img-sel" alt="">
            </div>
            <div class="add" v-if="isFm" @click="addImgs(3)">
              <img src="../../asset/imgs/add.png" class="add-btn" alt="">
            </div>
          </div>
          <div class="btn van-hairline--top">
            <van-button round type="primary" custom-class="pro" @click="onSub">提交</van-button>
          </div>
        </div>
      </van-transition>
      <!-- <van-popup :show="show">
        <div class="vPopup">
          <div class="title van-hairline--bottom">该公司有以下关联账号，是否查看详细信息？</div>
          <div class="vPopup-list van-hairline--bottom">
            <div class="vPopup-item van-hairline--bottom" v-for="(item,index) in companylist" :key="index">{{item.customerLoginName}}</div>
          </div>
          <div class="vPopup-group van-hairline--top">
            <div class="vPopup-btn" @click="show =!show">取消</div>
            <div class="vPopup-btn btn1" @click="toCompanyList">确认</div>
          </div>
        </div>
      </van-popup> -->
      <van-dialog id="van-dialog" />
      <van-toast id="van-toast" />
    </div>
  </div>
</template>
<script>
  import Util from '@/utils/index'
  import {
    baseUrl
  } from '@/utils/config'
  import Toast from '@/../static/dist/toast/toast'
  import Dialog from '@/../static/dist/dialog/dialog'
  var searchTimeout
  export default {
    components: {},
    data() {
      return {
        show: false,
        status: '', // 1不通过 0待审核 2审核通过 ""未认证
        height: '',
        checked: true, // true 为企业　false 为个人
        baseUrls: `${baseUrl}/file/show/certificate/`,
        qi: {
          name: '',
          addr: '',
          conact: '',
          phone: '',
          imgs: []
        },
        person: {
          name: '',
          addr: '',
          phone: '',
          bianhao: '',
          imgs: []
        },
        qiImgsG: [],
        psImgsG: [],
        fmImgsG: [],
        yyImgsG: [],
        isQI: true,
        isPs: true,
        isFm: true,
        isYy: true,
        userInfo: {},
        CList: [],
        PList: [],
        SList: [],
        opt: 0,
        companylist:[]
      }
    },
    // computed: {
    //   userInfo: () => {
    //     return Util.getStorage('userInfo')
    //   }
    // },
    methods: {
      /**
       * 使用match方法实现模糊查询
       * @param  {Array}  list     进行查询的数组
       * @param  {String} keyWord  查询的关键词
       * @return {Array}           查询的结果
       */
      fuzzyQuery(list, keyWord) {
        if (keyWord == '') return []
        var arr = [];
        for (var i = 0; i < list.length; i++) {
          if (list[i].match(keyWord) != null) {
            arr.push(list[i]);
            if(arr.length > 100) {
              return arr
            }
          }
        }
        return arr
      },
      selectSlit(item) {
        if (this.checked) {
          this.qi.name = item
        } else {
          this.person.name = item
        }
        this.SList = []
        this.checkCompany(item)
      },
      getMohuSearch() {
        if (this.opt == 1) { // 企业
          const name = this.qi.name
          if (this.CList) {
            this.SList = this.fuzzyQuery(this.CList, name)
          } else {
            this.getCompanyList(1)
          }
        } else { //  个人
          if (this.PList) {
            this.SList = this.fuzzyQuery(this.PList, this.person.name)
          } else {
            this.getCompanyList(0)
          }
        }
      },
      changeMohu(e, opt) {
        this.opt = opt
        !!searchTimeout && clearTimeout(searchTimeout)
        searchTimeout = setTimeout(this.getMohuSearch, 300)
      },
      getCompanyList(customerType = 1) {

        if (customerType == 1) {
          const CList = Util.getStorage('companyList')
          if (CList) {
            this.CList = CList
            return ''
          }
        } else {
          const PList = Util.getStorage('personList')
          if (PList) {
            this.PList = PList
            return ''
          }
        }

        Util.loading('正在加载')
        this.$http.post(`/company/name/list/${customerType}/${this.userInfo.id}`, '', {
          headers: {
            'Access-Token': this.userInfo.token,
          }, //http请求头，
        }).then((res) => {
          let data = res.data
          if (data.resultCode == '0000000') {
            // console.log(data)
            if (customerType == 1) { // 企业
              this.CList = data.returnData
              Util.setStorage('companyList', data.returnData)
            } else {
              this.PList = data.returnData
              Util.setStorage('personList', data.returnData)
            }
            Util.clear()
          } else {
            Toast(data.resultDesc)
          }
        })
      },
      onSub() {
        let obj = {
          businessLicenseImg: this.yyImgsG.join(','),
          deviceCertImgs: this.qiImgsG.join(','),
          companyName: this.qi.name,
          companyAddress: this.qi.addr,
          linkMan: '',
          linkTel: '',
          idCardFrontImg: this.psImgsG.join(','),
          idCardContraryImg: this.fmImgsG.join(','),
          authType: '',
          deviceAddress: this.person.addr,
        }
        if (this.checked) { // 企业

          obj.authType = '1'
          obj.linkMan = this.qi.conact
          obj.linkTel = this.qi.phone
          if (!obj.companyName) {
            Toast('请输入单位名称')
            return ''
          } else if (!obj.companyAddress) {
            Toast('请输入单位地址')
            return ''
          } else if (!obj.linkMan) {
            Toast('请输入单位联系人')
            return ''
          } else if (!obj.linkTel) {
            Toast('请输入单位电话')
            return ''
          } else if (!obj.deviceCertImgs) {
            Toast('请选择使用登记证')
            return ''
          } else if (!obj.businessLicenseImg) {
            Toast('请选择营业执照')
            return ''
          }
          // this.checkCompany(obj.companyName)
          // return ''
        } else { // 用户
          obj.authType = '0'
          obj.linkMan = this.person.name
          obj.linkTel = this.person.phone

          if (!obj.linkMan) {
            Toast('请输入用户姓名')
            return ''
          } else if (!obj.linkTel) {
            Toast('请输入用户电话')
            return ''
          } else if (!obj.deviceAddress) {
            Toast('请输入设备地址')
            return ''
          } else if (!obj.deviceCertImgs) {
            Toast('请选择使用登记证')
            return ''
          } else if (!obj.idCardFrontImg) {
            Toast('请选择身份证正面')
            return ''
          } else if (!obj.idCardContraryImg) {
            Toast('请选择身份证反面')
            return ''
          }

        }
        const params = JSON.stringify(obj)
        // console.log(params)
        // return ''
        this.$http.post(`/customer/auth/submit/${this.userInfo.id}`, params, {
          headers: {
            'Access-Token': this.userInfo.token,
          }, //http请求头，
        }).then((res) => {
          let data = res.data
          if (data.resultCode == '0000000') {
            Toast('提交成功，正在返回')
            setTimeout(() => {
              wx.navigateBack({
                delta: 1
              })
            }, 1000)
          } else {
            Toast(data.resultDesc)
          }
        })
      },
      checkStatus() {
        this.$http.post(`/customer/auth/status/${this.userInfo.id}`, '', {
          headers: {
            'Access-Token': this.userInfo.token,
          }, //http请求头，
        }).then((res) => {
          let data = res.data
          if (data.resultCode == '0000000') {
            const status = data.returnData
            this.status = status
            // 1不通过 0待审核 2审核通过 ""未认证
            switch (status) {
              case '1':
                Toast('不通过，请重新提交')
                break
            }

          }
        })
      },
      checkCompany(realName) {
        const params = JSON.stringify({
          "realName": realName
        })
        this.$http.post(`/customer/user/ids/real/${this.userInfo.id}`, params,{
          headers: {
            'Access-Token': this.userInfo.token,
          }, //http请求头，
        }).then((res) => {
          let data = res.data
          if (data.resultCode == '0000000') {
            let companyList = data.returnData
            // console.log('checkCompany', companyList)
            if(companyList.length != 0) {
              this.companylist = [...companyList]
              // this.show = true
              Dialog.confirm({
                message: '该单位已关联帐号，是否前往注销'
              }).then(() => {
                // on confirm
                let data = JSON.stringify(companyList)
                Util.navTo(`../my_zhuxiao/main?companyName=${realName}&data=${data}`)
              }).catch(() => {
                // on cancel
              })
            }
            // console.log(this.companyList)
          }
        })
      },
      getPhoneHeight() {
        let _this = this
        wx.getSystemInfo({
          success: function (res) {
            _this.height = (res.windowHeight) + 'px'
          }
        })
      },
      onRadio(opt) {
        this.SList = []
        if (opt == 1) {
          this.checked = true
        } else {
          this.checked = false
          this.getCompanyList(0)
        }
      },
      deleteImgs(opts, index) {
        console.log(opts, index)
        switch (~~opts) {
          case 1:
            this.qiImgsG.splice(index, 1)
            this.isQI = true
            break
          case 2:
            this.psImgsG.splice(index, 1)
            this.isPs = true
            break
          case 3:
            this.fmImgsG.splice(index, 1)
            this.isFm = true
            break
          case 4:
            this.yyImgsG.splice(index, 1)
            this.isYy = true
            break
        }
      },
      addImgs(opts) {
        this.uploadImg(opts)
      },
      uploadImg(opt) {
        const _this = this
        let fileType = 'certificate' //	整改
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
              header: {
                'Access-Token': _this.userInfo.token
              },
              success: function (res) {
                wx.hideToast();
                var data = JSON.parse(res.data) // string to obj
                if (data.resultCode == '0000000') {

                  switch (~~opt) {
                    case 1:
                      _this.qiImgsG = [..._this.qiImgsG, data.returnData]
                      _this.isQI = false
                      break
                    case 2:
                      _this.psImgsG = [..._this.psImgsG, data.returnData]
                      _this.isPs = false
                      break
                    case 3:
                      _this.fmImgsG = [..._this.fmImgsG, data.returnData]
                      _this.isFm = false
                      break
                    case 4:
                      _this.yyImgsG = [..._this.yyImgsG, data.returnData]
                      _this.isYy = false
                      break
                  }
                }
              },
              fail: function (err) {
                wx.hideToast();
                wx.showModal({
                  title: '错误提示',
                  content: '上传图片失败',
                  showCancel: false,
                  success: function (res) {}
                })
              }
            })
          }
        })

      },
      toCompanyList() {

      }
    },

    created() {
      this.getPhoneHeight()
      Util.setTitle('设备认证')
    },
    mounted() {
      // console.log(123)
      this.userInfo = Util.getStorage('userInfo')
      this.checkStatus()
      this.getCompanyList()
    }

  }

</script>

<style lang="less">
  .vPopup {
    background: #fff;
    min-width: 320px;
    .title {
      padding: 15px;
      font-size: 14px;
      font-weight: bold;
      color:#1C2627;
      display: flex;
      justify-content: center;
    }
    .vPopup-list {
      max-height: 140px;
      z-index: 99;
      overflow-y: scroll;
      .vPopup-item {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 15px 0;
        font-size: 14px;
        color: #1C2627;
      }
    }
    .vPopup-group {
      display: flex;
      justify-content: center;
      .vPopup-btn {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        color: #1C2627;
        padding: 15px 0;
      }
      .btn1 {
        background: #FDC915;
      }
    }
  }
  .isrenzheng {
    position: relative;

    .ren-list {
      background: #fff;
      position: absolute;
      left: 0;
      right: 0;
      top: 78px;
      width: 100%;
      max-height: 140px;
      z-index: 99;
      overflow-y: scroll;

      .ren-list-item {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 15px 0;
        font-size: 14px;
        color: #1C2627;
      }
    }
  }

  .rengzheng {
    background: #EEEFF4;

    .radio-group {
      background: #ffffff;
      padding: 15px 25px;
      display: flex;
      align-items: center;

      .radio-item {
        min-width: 100px;
        display: flex;
        align-items: center;

        .radio {
          width: 13px;
          height: 13px;
        }

        .label {
          color: #4A4A4A;
          font-size: 12px;
          margin-left: 5px;
        }
      }

    }

    .form-input {
      background: #ffffff;
      padding: 10px 25px;
      display: flex;
      align-items: center;

      .label {
        color: #1C2627;
        font-size: 14px;
        min-width: 100px;
      }

      .input {
        flex: 1;
        color: #1C2627;
        font-size: 12px;
      }

      .add {
        width: 50px;
        height: 70px;
        background: #EEEFF4;
        position: relative;

        .add-btn {
          width: 24px;
          height: 24px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }

      .pic-list {
        position: relative;
        margin-right: 10px;

        .colse {
          position: absolute;
          right: -5px;
          top: -4px;
          background: #ffffff;
          border-radius: 50%;
          width: 14px;
          height: 14px;

          .img-c {
            width: 14px;
            height: 14px;
          }
        }

        .img-sel {
          width: 50px;
          height: 70px;
        }
      }
    }

    .btn {
      padding: 10px 25px;
      background: #ffffff;

      .pro {
        width: 100%;
        background: #FDC915;
        color: #ffffff;
        border: 1px solid #FDC915;
      }
    }


  }

  .my_rengzheng {
    position: relative;

    .bg {
      background: url('data:image/png;base64,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') center center no-repeat;
      background-size: 100%;
      width: 100%;
      height: 135px;
    }

    .text {
      position: absolute;
      top: 53px;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      font-size: 16px;
      color: #ffffff
    }
  }

</style>
