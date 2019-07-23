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
        <el-input placeholder="请输入内容" style="width:300px"></el-input>
      </el-form-item>
      <el-form-item label="区县" prop="qx" required>
        <el-input
          placeholder="请输入内容"
          style="width:300px"
          v-model="ruleForm.qx"
        ></el-input>
      </el-form-item>
      <el-form-item label="备注" prop="bz">
        <el-input placeholder="请输入内容" style="width:300px"></el-input>
      </el-form-item>
      <el-form-item label="上级目录">
        <el-cascader
          v-model="value"
          :options="options"
          :props="{ expandTrigger: 'hover' }"
        ></el-cascader>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">保存</el-button>
        <el-button>重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "deptCp",
  props: ["nowClick"],
  data() {
    var checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("这是一个必须要填的框"));
      }
    };
    var checkQx = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("这是一个必须要填的框"));
      }
    };
    return {
      nowClickCp: [],
      value: [],
      options: [
        {
          value: "zhinan",
          label: "指南",
          children: [
            {
              value: "shejiyuanze",
              label: "设计原则",
              children: [
                {
                  value: "yizhi",
                  label: "一致"
                },
                {
                  value: "fankui",
                  label: "反馈"
                },
                {
                  value: "xiaolv",
                  label: "效率"
                },
                {
                  value: "kekong",
                  label: "可控"
                }
              ]
            }
          ]
        }
      ],
      ruleForm: {
        name: this.nowClick.name,
        zjhm: "",
        qx: "",
        bz: ""
      },
      rules: {
        name: [{ validator: checkName, trigger: "blur" }],
        qx: [{ validator: checkQx, trigger: "blur" }]
      }
    };
  },
  mounted() {
    this.nowClickCp = this.nowClick;
  },
  watch: {
    nowClick(newData, old) {
      this.nowClickCp = newData;
      console.log(typeof this.nowClick);
      console.log(this.nowClick);
    }
  },
  methods: {}
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"></style>

<style scoped lang="scss"></style>
