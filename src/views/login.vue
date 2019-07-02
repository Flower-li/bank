<template>
  <div class="login">
    <router-view />

    <el-row type="flex">
      <el-col :span="24">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6" :offset="15">
        <div class="grid-content bg-purple logintext">
          <p>登录系统</p>
          <el-form status-icon label-width="100px" class="demo-ruleForm">
            <el-form-item label="账号">
              <el-input
                type="text"
                autocomplete="on"
                placeholder="请输入账号"
                v-model="userName"
              ></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input
                type="password"
                autocomplete="off"
                placeholder="请输入密码"
                show-password
                v-model="passWord"
              ></el-input>
            </el-form-item>
            <el-checkbox v-model="checked">记住密码</el-checkbox>
            <el-form-item>
              <el-button type="primary" @click="check">登录</el-button>
              <el-button>重置</el-button>
            </el-form-item>
          </el-form>
        </div></el-col
      >
    </el-row>
  </div>
</template>

<script>
import { login } from "../api/login";

export default {
  name: "login",
  img_bk: require("../assets/images/favicon.png"),
  data() {
    return {
      checked: false,
      userName: "",
      passWord: "",
    }
  },
  methods: {
    check() {
      login(this.userName,this.passWord).then(rsp => {
        var isLogin = rsp.data;
        if(isLogin){
          this.$router.push("index")
        }else{
          alert("登录失败")
        }
      }).catch(console.log)
    }
  }
};
</script>

<style scoped>
.login {
  width: 100%;
  height: 100%;
  background-image: url("../assets/images/bk1.gif");
  background-position: center 0;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  -moz-background-size: cover;
  -ms-background-size: cover;
}
.el-row {
  height: 25%;
}
.logintext {
  background-color: #fff;
  padding: 20px 70px 10px 0;
  border-radius: 10%;
}
.logintext p {
  font-size: 32px;
  margin-left: 60px;
}
.el-checkbox {
  margin-left: 60px;
  margin-bottom: 20px;
}
.el-button {
  width: 45%;
}
</style>
