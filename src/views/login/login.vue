<template>
  <div class="container">
    <div class="loginContainer">
      <div class="LoginInput">
          <h1>Login Form</h1>
          <div class="inputContainer">
            <div class="name">
              <input type="text" placeholder="账户名">
            </div>
            <div class="mima">
              <input type="text" placeholder="密码">
            </div>
          </div>
          <div class="login">
            登录
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name:"login",
  data(){
    return{
       input:'' , //输入
    }
  },
  mounted(){
    axios.get('/user/info').then(res=>{
       console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  }
};
</script>
<style lang="scss" scope>
.container {
  min-width: 100%;
  height: 100%;
  background: #2d3a4b;
}
.loginContainer{
  width: 520px;
  margin: auto;
}
.LoginInput{
  padding: 150px 30px 0 30px;
  text-align: center;
}
.name{
  margin:  40px 0;
}
.name,
.mima{
  height: 50px;
  border: 1px solid rgba(255,255,255,0.1);
  background: rgba(0,0,0,0.1);
  border-radius: 5px;

}
input{
  height: 100%;
  width: 80%;
  background: rgba(0,0,0,0.1);
  border: none;
  font-size: 17px;
  padding-left: 23px;
  color: white;
}
.login{
  background: #409EFF;
  color: white;
  padding: 10px 0;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  letter-spacing: 4px;
  border-radius: 3px;
  margin: 20px 0;
  cursor: pointer;
}
.login:hover{

}
</style>
