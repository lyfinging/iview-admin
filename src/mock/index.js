//引入mockjs
const Mock = require('mockjs')
// 获取 mock.Random 对象

//使用mockjs模拟数据
Mock.mock('/api/user/login', (req, res) => {
  //当post或get请求到/api/data路由时Mock会拦截请求并返回上面的数据
    let data = {
      code:20000,
      data:{
        token:"I_AM_TOKEN",
      }
    };
    
    return  data
})

//根据token获取用户名和权限
Mock.mock('/api/user/info', (req, res) => {

  let data = {
    code:20000,
    data:{
      name:"admin",
      roles:["1","1-1","1-2","1-3","2","2-1","3","3-1","3-2","3-3","4","4-1","5","5-1","5-2"],
    }
  };
  return  data
})
