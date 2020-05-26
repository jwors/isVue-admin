const fs=require('fs');
const path = require('path');
const Mock=require('mockjs');
const JSON5=require('json5');
//读取JOSN文件
function getJosnFile(filePath){
    let json=fs.readFileSync(path.resolve(__dirname,filePath),'utf-8');
    return JSON5.parse(json)
}
module.exports=function(app){
    app.get('/user/info',function(rep,res){
        let json=getJosnFile('./data.json5');
        res.json(Mock.mock(json))
    })
}