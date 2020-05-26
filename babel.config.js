module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins:[
    [
      "component",
      {
        "libraryName":'element-ui',
        "stylelibraryName":"theme-chalk",
      },
    ]
  ]
};
