var Fly=require("flyio/dist/npm/wx") 
var fly=new Fly

//定义公共headers
// fly.config.headers={xx:5,bb:6,dd:7}
//设置超时
fly.config.timeout=10000;
//设置请求基地址
fly.config.baseURL="https://wendux.github.io/"

//添加请求拦截器
// fly.interceptors.request.use((request)=>{
//     //给所有请求添加自定义header
//     request.headers["X-Tag"]="flyio";
//       //打印出请求体
//       console.log(request.body)
//       //终止请求
//       //var err=new Error("xxx")
//       //err.request=request
//       //return Promise.reject(new Error(""))

//     //可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
//     return request;
// })

export default fly