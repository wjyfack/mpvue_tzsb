export const baseUrl = 'http://192.168.0.116:8507'// 'http://120.77.34.115:8507'
export const deviceTypes= [
    {id:1,name: '锅炉'},
    {id:2,name: '压力容器'},
    {id:3,name: '电梯'},
    {id:4,name: '起重机'},
    {id:5,name: '专用机动车辆'},
    {id:6,name: '压力管道'},
]
export const dateSort = [
    {id: '', name: '默认排序'},
    {id: 1, name: '按下年年检时间降序'},
    {id: 2, name: '按下年年检时间升序'},
]
export default {
    baseUrl,
    deviceTypes,
    dateSort
}