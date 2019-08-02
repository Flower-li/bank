<template>
  <div class="menuCp">
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
          <el-form-item label="菜单排序" prop="soft">
            <el-input
              v-model="ruleForm.soft"
              placeholder="请输入内容"
              style="width:300px"
            ></el-input> </el-form-item
        ></el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-form-item label="链接路径 " prop="component">
            <el-input
              v-model="ruleForm.component"
              placeholder="请输入内容"
              style="width:300px"
            ></el-input> </el-form-item
        ></el-col>
      </el-row>
      <el-row>
        <el-col :span="11">
          <el-form-item label="内部菜单" prop="iframe">
            <el-radio-group v-model="ruleForm.iframe">
              <el-radio :label="true">是</el-radio>
              <el-radio :label="false">否</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="13">
          <el-form-item label="是否显示" prop="ifhidden">
            <el-radio-group v-model="ruleForm.ifhidden">
              <el-radio :label="true">是</el-radio>
              <el-radio :label="false">否</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-form-item label="组件路径" prop="component">
            <el-input
              v-model="ruleForm.component"
              placeholder="请输入内容"
              style="width:300px"
            ></el-input> </el-form-item
        ></el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-form-item label="上级目录" prop="pid">
            <treeselect
              v-model="ruleForm.pid"
              :multiple="false"
              :options="options"
            /> </el-form-item
        ></el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-form-item label="选择角色">
            <el-cascader
              :options="options"
              :props="props"
              collapse-tags
              clearable
            ></el-cascader> </el-form-item
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
import Treeselect from "@riophae/vue-treeselect";
import "@riophae/vue-treeselect/dist/vue-treeselect.css";
import { getMenusTree } from "@/api/getMenusTree";
export default {
  components: { Treeselect },
  name: "rolesCp",
  props: ["nowClick", "tableData"],
  data() {
    return {
      props: { multiple: true },
      options: [],
      ruleForm: {
        name: "",
        soft: "",
        component: "",
        iframe: Boolean,
        ifhidden: Boolean,
        pid: ""
      },
      rules: {
        name: [{ required: true, message: "这是一个必填框" }],
        soft: [{ required: true, message: "这是一个必填框" }],
        iframe: [{ required: true, message: "这是一个必填框" }],
        ifhidden: [{ required: true, message: "这是一个必填框" }]
      },
      data: [],
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },
  mounted() {
    this.ruleForm = this.nowClick;
    getMenusTree().then(rsf => {
      this.options = rsf.data;
    });
  },
  watch: {
    nowClick(newData, old) {
      this.ruleForm = newData;
    }
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
<style lang="scss">
.menuCp {
  .vue-treeselect__control {
    width: 300px !important ;
  }
  .el-input {
    width: 300px !important;
  }
}
</style>

<style scoped lang="scss">
.menuCp {
  .el-radio {
    margin-right: 10px;
  }
}
</style>
