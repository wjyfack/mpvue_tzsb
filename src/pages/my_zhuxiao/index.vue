<template>
  <div class="zhuxiao van-hairline--top">
    <div class="vPopup">
      <div class="title van-hairline--bottom">该公司有以下关联账号</div>
      <div class="vPopup-list van-hairline--bottom">
        <checkbox-group @change="checkboxChange">
          <div class="vPopup-item van-hairline--bottom" v-for="(item,index) in companylist" :key="item.id">
            <div class="check">
              <checkbox :value="item.id" class="checkbox" />
              {{item.customerLoginName}}
            </div>
            <div class="cont">
              <div>{{item.customerLinkMan}}</div>
              <div>{{item.customerLinkTel}}</div>
            </div>
          </div>
          
        </checkbox-group>
      </div>
      <div class="vPopup-group van-hairline--top">
        <!-- <div class="vPopup-btn" @click="show =!show">取消</div> -->
        <div class="vPopup-btn btn1" @click="delAccount">注销</div>
      </div>
    </div>
    <van-dialog id="van-dialog" />
    <van-toast id="van-toast" />
  </div>

</template>
<script>
  import Toast from '@/../static/dist/toast/toast'
  import Dialog from '@/../static/dist/dialog/dialog'
  import Util from '@/utils/index'

  export default {
    data() {
      return {
        companylist: [],
        selectList: [],
        userInfo: {},
        companyName: ''
      }
    },
    methods: {
      checkboxChange(e) {
        // console.log(e)
        const {value} = e.mp.detail
        this.selectList = this.companylist.filter((item) => {
          return value.indexOf(item.id) > -1
        })
        // console.log(this.selectList)
      },
      delAccount() {
        if(this.selectList.length == 0) {
          Toast('请选择要注销的帐号')
          return ''
        }
        Dialog.confirm({
          message: '申请注销钩选的帐号？'
        }).then(() => {
          // on confirm
         this.pushData()
        }).catch(() => {
          // on cancel
        })
      },
      pushData() {
        let arr = this.selectList
        let customerUserId = []
        let customerLoginName = []
        for(let i=0;i< arr.length;i++) {
          customerUserId = [...customerUserId,arr[i].id]
          customerLoginName = [...customerLoginName, arr[i].customerLoginName]
        }
        const params = JSON.stringify({
          customerUserId : customerUserId.join(','),
          customerLoginName: customerLoginName.join(','),
          companyName: this.companyName
        })
         console.log(params)
        // return ''
        this.$http.post(`/customer/cancel/apply/${this.userInfo.id}`, params, {
          headers: {
            'Access-Token': this.userInfo.token,
          }, //http请求头，
        }).then((res) => {
          let data = res.data
          if (data.resultCode == '0000000') {
            Toast('申请成功，正在返回')
            setTimeout(() => {
              Util.back()
            },1500)
          }
        })
      }
    },
    mounted() {
      this.userInfo = Util.getStorage('userInfo')
      const {
        data,
        companyName
      } = this.$mp.query
      this.companyName = companyName
      this.companylist = JSON.parse(data)
    }
  }

</script>

<style lang="less">
  .zhuxiao {
    .vPopup {

      background: #fff;
      min-width: 320px;

      .title {
        padding: 15px;
        font-size: 14px;
        font-weight: bold;
        color: #1C2627;
        display: flex;
        justify-content: center;
      }

      .vPopup-list {

        z-index: 99;
        overflow-y: scroll;

        .vPopup-item {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding: 8px 0;
          font-size: 16px;
          color: #1C2627;
          flex-direction: column;
          font-size: 16px;
          .check {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            .checkbox {
              transform: scale(0.7,0.7)
            }

          }
          .cont {
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            padding: 0 35px;
          }
        }
      }

      .vPopup-group {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        .vPopup-btn {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 16px;
          color: #1C2627;
          padding: 15px 0;
          font-weight: bold;
        }
        .btn1 {
          background: #FDC915;
        }
      }
    }
  }

</style>
