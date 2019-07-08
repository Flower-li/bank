<template>
  <div class="userCp">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="角色管理" prop="name">
        <el-input
          v-model="ruleForm.name"
          placeholder="请输入内容"
          style="width:300px"
        ></el-input>
      </el-form-item>

      <el-row>
        <el-col>
          <el-form-item label="角色级别" prop="name">
            <el-input
              v-model="ruleForm.name"
              placeholder="请输入内容"
              style="width:300px"
            ></el-input> </el-form-item
        ></el-col>
      </el-row>

      <el-row>
        <el-col>
          <el-form-item label="数据范围" prop="name">
            <el-select
              v-model="value"
              filterable
              placeholder="请选择"
              style="width:300px"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option> </el-select></el-form-item
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
  name: "userCp",
  data() {
    return {
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      },
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: "",
      options2: [
        {
          value2: "HTML",
          label2: "HTML"
        },
        {
          value2: "CSS",
          label2: "CSS"
        },
        {
          value2: "JavaScript",
          label2: "JavaScript"
        }
      ],
      value2: []
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
