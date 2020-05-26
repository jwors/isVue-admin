const path = require("path"); //node api
function resolve(dir) {
  //获取文件路劲
  return path.join(__dirname, dir);
}
module.exports = {
  devServer:{
    before:require('./mock.js/index')
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src") //起别名
      }
    },
  },
};
