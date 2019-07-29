<template>
  <div class="rolesCp">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="名称" prop="name">
        <el-input
          v-model="ruleForm.name"
          placeholder="请输入内容"
          style="width:300px"
        ></el-input>
      </el-form-item>

      <el-row>
        <el-col>
          <el-form-item label="所属权限" prop="name">
            <el-input
              v-model="ruleForm.name"
              placeholder="请输入内容"
              style="width:300px"
            ></el-input> </el-form-item
        ></el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-form-item label="描述信息" prop="name">
            <el-input
              v-model="ruleForm.name"
              placeholder="请输入内容"
              style="width:300px"
              type="textarea"
              :autosize="{ minRows: 4 }"
            ></el-input> </el-form-item
        ></el-col>
      </el-row>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >保存</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "rolesCp",
  data() {
    return {

    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
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
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"></style>

<style scoped lang="scss"></style>
