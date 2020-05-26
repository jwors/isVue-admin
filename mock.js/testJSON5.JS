const fs=require('fs');
const path=require('path');
const JSON5=require('json5')
let json=fs.readFileSync(path.join(__dirname,'./data.json5'),'utf-8');
let obj=JSON5.parse(JSON5)
console.log(obj)