<template>
  <div class="deptCp">
    <el-form
      label-width="100px"
      class="demo-ruleForm"
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
    >
      <el-form-item label="名称" prop="name" required>
        <el-input
          placeholder="请输入内容"
          style="width:300px"
          v-model="ruleForm.name"
        ></el-input>
      </el-form-item>
      <el-form-item label="证件号码" prop="zjhm">
        <el-input
          placeholder="请输入内容"
          style="width:300px"
          v-model="ruleForm.zjhm"
        ></el-input>
      </el-form-item>
      <el-form-item label="区县" prop="qxdm">
        <el-input
          placeholder="请输入内容"
          style="width:300px"
          v-model="ruleForm.qxdm"
        ></el-input>
      </el-form-item>
      <el-form-item label="备注" prop="bz">
        <el-input placeholder="请输入内容" style="width:300px"></el-input>
      </el-form-item>
      <el-form-item label="上级目录">
        <treeselect
          v-model="ruleForm.pid"
          :multiple="false"
          :options="options"
          @select="adf"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary">保存</el-button>
        <el-button>重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Treeselect from "@riophae/vue-treeselect";

import "@riophae/vue-treeselect/dist/vue-treeselect.css";
import { setTimeout } from "timers";
export default {
  components: { Treeselect },
  name: "deptCp",
  props: ["nowClick", "tableData"],
  data() {
    return {
      options: [],
      ruleForm: {
        name: "",
        zjhm: "",
        qxdm: "",
        bz: "",
        pid: "",
        id: ""
      },
      rules: {
        name: [{ required: true, message: "年龄不能为空" }],
        pid: [{ required: true, message: "年龄不能为空" }]
      }
    };
  },
  mounted() {
    this.ruleForm = this.nowClick;
    let deleteChildren = arr => {
      for (const item of arr) {
        if (item.children == null) delete item.children;
        else deleteChildren(item.children);
      }
    };
    deleteChildren(this.tableData);
    this.options = this.tableData;
  },
  watch: {
    nowClick(newData, old) {
      this.ruleForm = newData;
    }
  },
  methods: {
    adf(node, id) {
      setTimeout(() => {
        console.log(this.ruleForm.id);
        console.log(this.ruleForm.pid);
      }, 200);
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.deptCp {
  .vue-treeselect__control {
    width: 300px !important ;
  }
}
</style>

<style scoped lang="scss"></style>
