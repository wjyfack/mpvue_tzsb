<template>
<div class="jianli-edit  van-hairline--top">
      <div class="edit-item van-hairline--bottom" v-if="opt == 'phone'">
        <div class="title">手机号</div>
        <input type="text" class="input" placeholder="请输入手机号">
      </div>
      <div class="edit-item van-hairline--bottom"  v-else-if="opt == 'name'">
        <div class="title">姓名</div>
        <input type="text" class="input" placeholder="请输入姓名">
      </div>
    <div v-else-if="opt == 'work'">
      <div class="edit-item van-hairline--bottom">
        <div class="title">公司名称</div>
        <input type="text" class="input" placeholder="请输入公司名称">
      </div>
      <div class="edit-item van-hairline--bottom">
        <div class="title">职位名称</div>
        <input type="text" class="input" placeholder="请输入职位名称">
      </div>
      <div class="edit-item van-hairline--bottom">
        <div class="title">开始时间</div>
        <input type="text" class="input" placeholder="请输入开始时间">
        <img src="../../asset/imgs/arrow.png" alt="" class="arrow">
      </div>
      <div class="edit-item van-hairline--bottom">
        <div class="title">结束时间</div>
        <input type="text" class="input" placeholder="请输入结束时间">
        <img src="../../asset/imgs/arrow.png" alt="" class="arrow">
      </div>
      <div class="edit-item van-hairline--bottom edit-item-textarea">
        <div class="title">工作内容</div>
        <textarea  auto-height="true" class="textarea"   placeholder="请输入工作内容"></textarea>
      </div>
    </div>
   
    <div class="edit-item van-hairline--bottom"  v-else-if="opt == 'com_name'">
        <div class="title">企业名称</div>
        <input type="text" class="input" placeholder="请输入企业名称">
      </div>
    <div class="edit-item van-hairline--bottom edit-item-textarea" v-else-if="opt == 'com_brief'">
      <div class="title">企业介绍</div>
      <textarea  auto-height="true" class="textarea"   placeholder="请输入企业介绍"></textarea>
    </div>
    <div class="edit-item van-hairline--bottom"  v-else-if="opt == 'com_addr'">
        <div class="title">企业地址</div>
        <input type="text" class="input" placeholder="请输入企业地址">
    </div>
    <div class="con-brand"   v-else-if="opt == 'brand'">
      <div class="select  van-hairline--bottom">
        <div class="title">企业标签</div>
        <div class="brand">
        
          <div class="brand-item" v-for="(item,index) in yixuan" :key="item.id" @click="slectBrand(1,index)"><div class="name">{{item.name}}</div></div>
        </div>
      </div>
      <div class="choose-title">放假安排（单选）</div> 
      <div class="brand">
        <div class="brand-item" :class="{'act': item.check }" v-for="(item,index) in fangjia" :key="index" @click="slectBrand(2,index)"><div class="name">{{item.name}}</div></div>
      </div>
       <div class="choose-title">待遇（多选）</div>
      <div class="brand">
       <div class="brand-item" :class="{'act': item.check }" v-for="(item,index) in daiyu" :key="item.id" @click="slectBrand(3,index)"><div class="name">{{item.name}}</div></div>
      </div>
    </div>
      <div class="btn-su">保存</div>
      <van-toast id="van-toast" />
</div>
</template>
<script>

import Toast from '@/../static/dist/toast/toast'

import Util from '@/utils/index'
export default {

  data () {
    return {
      opt: '', // phone,work 编辑手机号和工作经验
      daiyu: [ // 待遇
        {id: 1, name: '五险一金',check: false},
        {id: 2, name: '定期体检',check: false},
        {id:3, name: '加班补助',check: false},
        {id: 4, name: '全勤奖',check: false},
        {id: 5, name: '年终奖',check: false},
        {id: 6, name: '免费班车',check: false},
        {id: 7, name: '餐补',check: false},
        {id: 8, name: '通讯补贴',check: false},
        {id: 9, name: '交通补贴',check: false},
        {id: 10, name: '包吃',check: false},
        {id: 11, name: '住房补贴',check: false},
      ],
      fangjia: [　// 放假安排
        {id: 1, name: '双休',check: false,sort: 'dan'},
        {id: 2, name: '单休',sort: 'dan',check: false},
        {id: 3, name: '大小周',sort: 'dan',check: false},
        {id: 4, name: '排班轮休',sort: 'dan',check: false},
      ],
      yixuan: [] // 已选标签 
    }
  },
  computed: {
    userInfo: ()=> {
      return Util.getStorage('userInfo')
    }
  },
  methods: {
    slectBrand(opt,index) {
      // opt 1: 删除　2: 单选　3: 多选
        let i = 0
      switch(opt) {
        case 1: 
          const obj = this.yixuan[index]
          this.yixuan.splice(index,1)
          if(obj.sort == 'dan') {
            for(i in this.fangjia) {
              if(this.fangjia[i].id == obj.id) {
                this.fangjia[i].check = false
              }
            }
          }else {
         
            for( i in this.daiyu) {
              if(this.daiyu[i].id == obj.id) {
                this.daiyu[i].check = false
              }
            }
          }
        break
        case 2:
        let isFlag = false
        const fangjia = this.fangjia
        for( i in fangjia) {
          fangjia[i].check = false
        }

        fangjia[index].check = true
        this.fangjia = fangjia
        const yixuan = this.yixuan
        for(let j in yixuan) {
          if(this.yixuan[j].sort == 'dan'){
            isFlag = true
            this.yixuan[j] = this.fangjia[index]
            break
          } 
        }
        if(isFlag) {
          
        } else {
            this.yixuan = [...this.yixuan,this.fangjia[index]]
        }
        break
        case 3:
        if(this.daiyu[index].check) return ''
        this.daiyu[index].check = true
         this.yixuan = [...this.yixuan,this.daiyu[index]]
        break
      }
    }
    ,setTitle () {
      let title  = ''
      switch(this.opt) {
        case 'com_name':
        title = '企业名称'
        break
        case 'com_brief':
        title = '企业简介'
        break
        case 'com_addr':
        title = '企业地址'
        break
        case 'brand':
        title = '企业标签'
        break
        case 'work':
        title = '工作经验'
        break
        case 'name':
        title = '姓名'
        break
        case 'phone':
        title = '手机号'
        break
      }
      Util.setTitle(title)
    }
  },
  created () {
    Util.setBackGroup()
  },
  mounted() {
    this.opt = this.$mp.query.opt
    this.setTitle()
  }
}
</script>

<style  lang="less">
.jianli-edit {
  padding: 0px 30px 60px 30px;
    .edit-item {
      position: relative;
      .title {color:#1C2627;font-size: 13px;padding-bottom: 5px;padding-top:15px;}
      .input,.textarea {
        font-size: 13px;
        color:#757980;
      }
      .arrow {
        width:8px;
        height: 14px;
        position:absolute;
        bottom: 9px;
        right: 0;
      }
    }
    .edit-item-textarea {
      .textarea {
        min-height: 100px;
      }
    }
    .con-brand {
       padding: 17px 0;
       .select {
         padding-bottom: 20px;
         .title {
           padding-top: 20px;
           font-size: 13px;
           color:#1C2627;

         }
       }
       .choose-title {
         padding-top: 20px;
         font-size: 12px;
         color:#1C2627;
       }
       .brand {
          display: flex;
          flex-wrap: wrap;
          .brand-item {
            width:25%;
            margin-top: 10px;
            .name {
              width: 58px;
              height: 18px;
              font-size: 11px;
              line-height: 11px;
              text-align: center;
              border: 1px solid #E5E7EC;
              display:flex;
              justify-content:center;
              align-items:center
            }
          }
          .act {
            .name {
              background: #FDC915;
              color:#FFFFFF;
              border-color: #FDC915;
            }
            
          }
        }
    }
  .btn-su {
    height: 50px;
    position:fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #FDC915;
    color:#FFFFFF;
    font-size: 16px;
    line-height: 50px;
    text-align: center;
  }
}
</style>
