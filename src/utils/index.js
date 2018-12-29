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
export default {
  formatNumber,
  formatTime,
  navTo,
  redTo,
  setStorage,
  getStorage,
  getData,
  setTitle,
  preview
}
