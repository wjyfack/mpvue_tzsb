////    https://sdsfs.free.idcfengye.com  'http://120.77.34.115:8507' //
export const baseUrl = 'http://192.168.0.116:8507'
export const deviceTypes= [
    // {id:'',name: '全部'},
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
export const certifSort ={
    "特种设备相关管理":['特种设备安全管理负责人(A1)',
        '特种设备质量管理负责人(A2)',
        '锅炉压力容器压力管理安全管理(A3)',
        '电梯全安管理(A4)',
        '起重机械安全管理(A5)',
        '客运索道全安管理(A6)',
        '大型游乐设施安全管理(A7)',
        '场(厂)内专用机动车辆安全管理(A8)'
    ],
    "锅炉作业":[
        "一级锅炉司炉(G1)",
        "二级锅炉司炉(G2)",
        "三级锅炉司炉(G3)",
        "一级锅炉水质处理(G4)",
        "二级锅炉水质处理(G5)",
        "锅炉能效作业(G6)",
    ],
    "压力容器作业":[
        "固定式压力容器操作(R1)",
        "移动式压力容器充装(R2)",
        "氧舱维护保养(R3)",],
    "气瓶作业":["永久气体气瓶充装(P1)",
        "液化气体气瓶充装(P2)",
        "溶解乙炔气瓶充装(P3)",
        "液化石油气瓶充装(P4)",
        "车用气瓶充装(P5)"],
    "压力管道作业":["压务管道巡检维护(D1)","带压封堵(D2)","带压密封(D3)"],
    "电梯作业":["电梯机械安装维修(T1)","电梯电气安装维修(T2)","电梯司机(T3)"],
    "起重机械作业":["起重机械机械安装维修(Q1)",
        "起重机械电器安装维修(Q2)",
        "起重机械指挥(Q3)",
        "桥门式起重机司机(Q4)",
        "塔式起重机司机(Q5)",
        "门座式起重机司机(Q6)",
        "缆索式起重机司机(Q7)",
        "流动式起重机司机(Q8)",
        "升降机司机(Q9)",
        "机械式停车设备司机(Q10)"],
    "客运索道作业": ["客运索道安装(S1)","客运索道维修(S2)","客运索道司机(S3)","客运索道编索(S4)"],
    "大型游乐设施作业":["大型游乐设施安装","大型游乐设施维修","大型游乐设施操作","大型游乐设施操作与维修"],
    "场(厂)内专用机动车辆作业":["车辆维修(N1)",
        "叉车司机(N2)",
        "搬运车牵引车推顶车司机(N3)",
        "内燃观光车司机(N4)",
        "蓄电池观光车司机(N5)"],
    "安全附件维修作业":["安全阀校验(F1)","安全阀维修(F2)"],
    "特种设备焊接作业":["金属焊接操作","非金属焊接操作"],
}
export const certifKey = {	
    '0001':	'特种设备安全管理负责人(A1)',
    '0002':	'特种设备质量管理负责人(A2)',
    '0003':	'锅炉压力容器压力管理安全管理(A3)',
    '0004':	'电梯全安管理(A4)',
    '0005':	'起重机械安全管理(A5)',
    '0006':	'客运索道全安管理(A6)',
    '0007':	'大型游乐设施安全管理(A7)',
    '0008':	'场(厂)内专用机动车辆安全管理(A8)',
    '0009':	'一级锅炉司炉(G1)',
    '0010':	'二级锅炉司炉(G2)',
    '0011':	'三级锅炉司炉(G3)',
    '0012':	'一级锅炉水质处理(G4)',
    '0013':	'二级锅炉水质处理(G5)',
    '0014':	'锅炉能效作业(G6)	',
    '0015':	'固定式压力容器操作(R1)',
    '0016':	'移动式压力容器充装(R2)',
    '0017':	'氧舱维护保养(R3)	',
    '0018':	'永久气体气瓶充装(P1)',
    '0019':	'液化气体气瓶充装(P2)',
    '0020':	'溶解乙炔气瓶充装(P3)',
    '0021':	'液化石油气瓶充装(P4)',
    '0022':	'车用气瓶充装(P5)',
    '0023':	'压务管道巡检维护(D1)',
    '0024':	'带压封堵(D2)',
    '0025':	'带压密封(D3)',
    '0027':	'电梯机械安装维修(T1)',
    '0028':	'电梯电气安装维修(T2)',
    '0029':	'电梯司机(T3)',
    '0030':	'起重机械机械安装维修(Q1)',
    '0031':	'起重机械电器安装维修(Q2)',
    '0032':	'起重机械指挥(Q3)',
    '0033':	'桥门式起重机司机(Q4)',
    '0034':	'塔式起重机司机(Q5)',
    '0035':	'门座式起重机司机(Q6)',
    '0036':	'缆索式起重机司机(Q7)',
    '0037':	'流动式起重机司机(Q8)',
    '0038':	'升降机司机(Q9)',
    '0039':	'机械式停车设备司机(Q10)',
    '0040':	'客运索道安装(S1)',
    '0041':	'客运索道维修(S2)',
    '0042':	'客运索道司机(S3)',
    '0043':	'客运索道编索(S4)',
    '0044':	'大型游乐设施安装',
    '0045':	'大型游乐设施维修',
    '0046':	'大型游乐设施操作',
    '0047':	'大型游乐设施操作与维修	',
    '0048':	'车辆维修(N1)',
    '0050':	'叉车司机(N2)',
    '0051':	'搬运车牵引车推顶车司机(N3)',
    '0052':	'内燃观光车司机(N4)',
    '0053':	'蓄电池观光车司机(N5)',
    '0054':	'安全阀校验(F1)',
    '0055':	'巡全阀维修(F2)	',
    '0056':	'金属焊接操作',
    '0057':	'非金属焊接操作',
    }
export const positionSort = ["锅炉作业人员",
        "压力容器作业人员","起重机械作业人员",
        "电梯作业人员","电工",
        "焊工","叉车操作人员","铲车操作人员",
        "挖掘机操作人员","装载机操作人员",
        "吊车操作人员","塔吊操作人员",
        "起重机操作人员","行车操作人员",
        "制冷空调设备与安装操作人员"]
export const qiuzhiStatus = ['离职-随时到岗','在职-暂不考虑','在职-考虑机会','在职-月内到岗']
export const xueliStatus =  ["小学", "初中", "高中", "中专", "大专", "本科以上"]
export const salarySort = ["面议","3k-4k","4k-5k","5k-6k","6k-8k","8k-10k","10k以上"]
export const zhengSort = [
    {
        "id": "s001",
        "subjectName": "特种设备相关管理",
        "pid": "0"
    },
    {
        "id": "s002",
        "subjectName": "锅炉作业",
        "pid": "0"
    },
    {
        "id": "s003",
        "subjectName": "压力容器作业",
        "pid": "0"
    },
    {
        "id": "s004",
        "subjectName": "气瓶作业",
        "pid": "0"
    },
    {
        "id": "s005",
        "subjectName": "压力管道作业",
        "pid": "0"
    },
    {
        "id": "s006",
        "subjectName": "电梯作业",
        "pid": "0"
    },
    {
        "id": "s007",
        "subjectName": "起重机械作业",
        "pid": "0"
    },
    {
        "id": "s008",
        "subjectName": "客运索道作业",
        "pid": "0"
    },
    {
        "id": "s009",
        "subjectName": "大型游乐设施作业",
        "pid": "0"
    },
    {
        "id": "s010",
        "subjectName": "场(厂)内专用机动车辆作业",
        "pid": "0"
    },
    {
        "id": "s011",
        "subjectName": "安全附件维修作业",
        "pid": "0"
    }
]
export default {
    baseUrl,
    deviceTypes,
    dateSort,
    certifSort,
    positionSort,
    xueliStatus,
    qiuzhiStatus,
    zhengSort,
    salarySort
}