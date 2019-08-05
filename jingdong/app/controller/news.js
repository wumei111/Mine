const Controller = require('egg').Controller

class NewsController extends Controller{
    async index() {
        const dataList = await this.other()
        this.ctx.body = {
            code:0,
            masg:'news list success',
            data:dataList
        }
    }
    async other() {
        return {
            list:[
                {
                    "id":"0",
                    "shopname":"皇子 酸辣粉130g 桶装方便食品 泡面粉丝 麻辣烫 网速食红",
                    "shopimg":"https://img11.360buyimg.com/jdcms/s300x300_jfs/t1/50338/40/3628/226577/5d16fa62Eb6dcb02e/6755fcd9e5770bb5.jpg.webp",
                    "flag":false,
                    "shoppirce":32.60,
                    "num":0
                },
                {
                    "id":"1",
                    "shopname":"康师傅 方便面（KSF）大食袋 红烧牛肉袋面 泡面五连包",
                    "shopimg":"https://img14.360buyimg.com/jdcms/s300x300_jfs/t1/49457/25/721/423229/5ce6a7c5Eb1e0f48c/a34498d1e4e4cda9.jpg.webp",
                    "flag":false,
                    "shoppirce":12.90,
                    "num":0
                },
                {
                    "id":"2",
                    "shopname":"百草味 红油面皮115gx2碗 方便面速食凉皮拌泡面米粉凉皮四川小吃 麻辣味",
                    "shopimg":"https://img30.360buyimg.com/jdcms/s300x300_jfs/t1/76295/23/4694/365817/5d2d2be0E1325f96c/8f66e72533c44b48.jpg.webp",
                    "flag":false,
                    "shoppirce":14.90,
                    "num":0
                },
                {
                    "id":"3",
                    "shopname":" 蜀姑娘 方便冒菜 四川麻辣烫方便粉丝速食 开水冲泡懒人即食冒菜 290g",
                    "shopimg":"https://img10.360buyimg.com/jdcms/s300x300_jfs/t10186/301/231966021/623805/dc94ad6d/59c9ca0bNbfa38753.jpg.webp",
                    "flag":false,
                    "shoppirce":36.90,
                    "num":0
                },
                {
                    "id":"4",
                    "shopname":"印尼进口 Tango威化饼干 休闲零食 咔咔脆威化饼干 巧克力味160g/盒",
                    "shopimg":"https://img20.360buyimg.com/jdcms/s300x300_jfs/t21871/219/2471606850/476457/63e63438/5b5804b3Nb7638cf7.jpg.webp",
                    "flag":false,
                    "shoppirce":16.90,
                    "num":0
                }
            ]
        }
    }
}

module.exports = NewsController