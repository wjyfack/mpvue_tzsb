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
    url: url
  })
}
function redTo(url) {
  wx.redirectTo({
    url: url
  })
}
function setStorage(key,value) {
    wx.setStorageSync(key, value)
}
function getStorage(key) {
 return wx.getStorageSync(key)
}
function getData(obj) {
  let str = '{'
  for(let i in obj) {
    str += `"${i}": "${obj[i]}",`
  }
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
  setTitle
}
