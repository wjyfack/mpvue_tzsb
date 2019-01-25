import {certifKey,salarySort} from './config'
function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}
function setTitle(title){
  wx.setNavigationBarTitle({
    title: title 
  })
}
function navTo(url) {
  wx.navigateTo({
    url: `./${url}`
  })
}
function redTo(url) {
  wx.redirectTo({
    url: `./${url}`
  })
}
function setStorage(key,value) {
    wx.setStorageSync(key, value)
}
function getStorage(key) {
 return wx.getStorageSync(key)
}
function preview(urls,index = 0) {

  wx.previewImage({
    current: urls[index], // 当前显示图片的http链接
    urls: urls // 需要预览的图片http链接列表
  })
}
function getData(obj) { // 字符串拼接
  let str = '{'
  for(let i in obj) {
    str += `"${i}": "${obj[i]}",`
  }
  str = str.substring(0,str.length-1)
  str += '}'
  return str
}
function getDate(date = '') {
  const dateFormat = require('dateformat');
  const now = date == ''? new Date() : new Date(date)
  return dateFormat(now, 'yyyy-mm-dd');
}
function setBackGroup(){
  // wx.setBackgroundColor({
  //   backgroundColor: '#EEEFF4', // 窗口的背景色
  // })
}
function chooseImage(cb) {
  wx.chooseImage({
    count: 1,
    sizeType: ['original', 'compressed'],
    sourceType: ['album', 'camera'],
    success(res) {
      // tempFilePath可以作为img标签的src属性显示图片
      cb != undefined ? cb(res) : ''
    }
  })
}
function getCertifSort(str) {
  let arr = str.split(',')
  let atArr = []
  for(let i in arr) {
     if(arr[i])
     atArr = [...atArr,certifKey[arr[i]]]
  }
   
  return atArr
}
function CerifSort2keys(arr) { 
  let atArr = []
  for(let i in certifKey) {
    for(let j in arr) {
       if(certifKey[i] == arr[j])
        atArr = [...atArr, i]
    }
  }
  return atArr
}
function salaryMinMax(index) {
  // ["面议","3k-4k","4k-5k","5k-6k","6k-8k","8k-10k","10k以上"]
  let obj = {"salaryMin":"",	"salaryMax":"",	}
  switch(index) {
    case 6:
    case 0: 
      obj.salaryMin = obj.salaryMax = salarySort[index]
    break
    case 1:
      obj.salaryMin = '3k'
      obj.salaryMax = '4k'
    break
    case 2:
      obj.salaryMin = '4k'
      obj.salaryMax = '5k'
    break
    case 3:
    obj.salaryMin = '5k'
    obj.salaryMax = '6k'
    break
    case 4:
    obj.salaryMin = '6k'
    obj.salaryMax = '8k'
    break
    case 5:
    obj.salaryMin = '8k'
    obj.salaryMax = '10k'
    break
  }
  return obj
}
function back() {
  wx.navigateBack({
    delta: 1
  })
}
export default {
  formatNumber,
  formatTime,
  navTo,
  redTo,
  setStorage,
  getStorage,
  getData,
  setTitle,
  preview,
  setBackGroup,
  getDate,
  chooseImage,
  getCertifSort,
  CerifSort2keys,
  salaryMinMax,
  back
}
