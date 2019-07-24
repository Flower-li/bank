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
      <el-form-item label="区县" prop="pid">
        <el-input
          placeholder="请输入内容"
          style="width:300px"
          v-model="ruleForm.pid"
        ></el-input>
      </el-form-item>
      <el-form-item label="备注" prop="bz">
        <el-input placeholder="请输入内容" style="width:300px"></el-input>
      </el-form-item>
      <el-form-item label="上级目录">
        <!-- <el-cascader
           v-model="value"
          :options="options"
          :props="{ expandTrigger: 'hover' }"
          @change="handleChange"
        ></el-cascader> -->
        <treeselect v-model="value" :multiple="false" :options="options" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary">保存</el-button>
        <el-button>重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Treeselect from '@riophae/vue-treeselect'

import '@riophae/vue-treeselect/dist/vue-treeselect.css'
export default {
  components: { Treeselect },
  name: "deptCp",
  props: ["nowClick", "tableData"],
  data() {
    return {
      value: null,
      options: [],
      ruleForm: {
        name: "",
        zjhm: "",
        pid: "",
        bz: ""
      },
      rules: {
        name: [{ required: true, message: "年龄不能为空" }],
        pid: [{ required: true, message: "年龄不能为空" }]
      }
    };
  },
  mounted() {
    this.ruleForm = this.nowClick;
    this.options = this.tableData;
    console.log(this.options);
  },
  watch: {
    nowClick(newData, old) {
      this.ruleForm = newData;
    }
  },
  methods: {
    handleChange(value) {
      console.log(value);
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"></style>

<style scoped lang="scss"></style>
