<template>
  <div class="rolesCp">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="菜单名称" prop="name">
        <el-input
          v-model="ruleForm.name"
          placeholder="请输入内容"
          style="width:300px"
        ></el-input>
      </el-form-item>

      <el-row>
        <el-col>
          <el-form-item label="菜单排序" prop="name">
            <el-input
              v-model="ruleForm.name"
              placeholder="请输入内容"
              style="width:300px"
            ></el-input> </el-form-item
        ></el-col>
      </el-row>
      <el-form-item label="内部菜单" prop="resource">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="激活"></el-radio>
          <el-radio label="锁定"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-row>
        <el-col>
          <el-form-item label="内部地址" prop="name">
            <el-input
              v-model="ruleForm.name"
              placeholder="请输入内容"
              style="width:300px"
            ></el-input> </el-form-item
        ></el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-form-item label="组件目录" prop="name">
            <el-input
              v-model="ruleForm.name"
              placeholder="请输入内容"
              style="width:300px"
            ></el-input> </el-form-item
        ></el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-form-item label="上级类目" prop="name">
            <el-select
              v-model="data"
              filterable
              placeholder="请选择"
              style="width:300px"
            >
              <el-tree
                :data="data.label"
                :props="defaultProps"
                accordion
                :label="data.label"
              >
              </el-tree> </el-select></el-form-item
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
      data: [
        {
          label: "一级 1",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 2",
          children: [
            {
              label: "二级 2-1",
              children: [
                {
                  label: "三级 2-1-1"
                }
              ]
            },
            {
              label: "二级 2-2",
              children: [
                {
                  label: "三级 2-2-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1"
                }
              ]
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1"
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      },
      value: "",
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
