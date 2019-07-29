<template>
  <div class="perMissionCp">
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
          <el-form-item label="别名" prop="alias">
            <el-input
              v-model="ruleForm.alias"
              placeholder="请输入内容"
              style="width:300px"
            ></el-input> </el-form-item
        ></el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-form-item label="地址" prop="alias">
            <el-input
              v-model="ruleForm.alias"
              placeholder="请输入内容"
              style="width:300px"
            ></el-input> </el-form-item
        ></el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-form-item label="路劲" prop="alias">
            <el-input
              v-model="ruleForm.alias"
              placeholder="请输入内容"
              style="width:300px"
            ></el-input> </el-form-item
        ></el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-form-item label="上级目录">
            <treeselect
              v-model="ruleForm.pid"
              :multiple="false"
              :options="options"
              @select="adf"
            /> </el-form-item
        ></el-col>
      </el-row>
      <el-form-item>
        <el-button type="primary">保存</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Treeselect from "@riophae/vue-treeselect";
import "@riophae/vue-treeselect/dist/vue-treeselect.css";
export default {
  components: { Treeselect },
  name: "perMissionCp",
  props: ["tableData", "nowClick"],
  data() {
    return {
      ruleForm: {
        name: "",
        alias: "",
        pid: "",
        id: ""
      },
      rules: {
        name: [{ required: true, message: "这是一个必填框" }],
        alias: [{ required: true, message: "这是一个必填框" }],
        pid: [{ required: true, message: "这是一个必填框" }]
      },
      options: []
    };
  },
  mounted() {
    this.ruleForm = this.nowClick;
    let deleteChildren = arr => {
      for (const item of arr) {
        let label = { label: item.alias };
        Object.assign(item, label);
        if (item.children == null) delete item.children;
        else deleteChildren(item.children);
      }
    };
    deleteChildren(this.tableData);
    this.options = this.tableData;
    console.log(this.options);
  },
  watch: {
    nowClick(newData, old) {
      this.ruleForm = newData;
    }
  },
  methods: {
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
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
.perMissionCp {
  .vue-treeselect__control {
    width: 300px !important ;
  }
}
</style>

<style scoped lang="scss"></style>
