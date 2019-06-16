<template>
  <div class="login">
    <router-view />

    <el-row type="flex">
      <el-col :span="24">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6" offset="15">
        <div class="grid-content bg-purple logintext">
          <p>登录系统</p>
          <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="账号" prop="pass">
              <el-input
                type="text"
                v-model="ruleForm.pass"
                autocomplete="on"
                placeholder="请输入账号"
              ></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="checkPass">
              <el-input
                type="password"
                v-model="ruleForm.checkPass"
                autocomplete="off"
                placeholder="请输入密码123123"
                show-password
              ></el-input>
            </el-form-item>
            <el-checkbox v-model="checked">记住密码</el-checkbox>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')"
                >登录</el-button
              >
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </div></el-col
      >
    </el-row>
  </div>
</template>

<script>
export default {
  name: "login",
  img_bk: require("../assets/images/favicon.png"),
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("年龄不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 18) {
            callback(new Error("必须年满18岁"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      checked: false,
      ruleForm: {
        pass: "",
        checkPass: "",
        age: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$router.push("index");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
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
