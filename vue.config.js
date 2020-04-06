const path = require('path'); //node api
function resolve(dir){   //获取文件路劲
    return path.join(__dirname,dir);
}
module.exports={
    configureWebpack:{
        resolve:{
            alias:{
                "@":resolve('src'), //起别名
            }
        }
    }
}