<template>
  <div class="generator">
    <div class="search">
      <el-input
        v-model="input"
        placeholder="输入表名查询"
        style="width:300px;margin-left:10px;"
      ></el-input>

      <el-button type="success" icon="el-icon-search">搜索</el-button>

      <el-button
        type="warning"
        icon="el-icon-search"
        @click="dialogVisible = true"
        >生成器配置</el-button
      >
      <el-dialog title="执行日志" :visible.sync="dialogVisible" width="500px">
        <generaCp />
      </el-dialog>
    </div>
    <div class="form">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
        <el-table-column fixed="right" label="操作" width="150">
          <template>
            <el-button type="button" class="el-button el-button--primary el-button--mini">生成代码</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="page">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import generaCp from "@/components/indexCp/mainCp/alertForm/generaCp.vue";
export default {
  name: "generator",
  components: {
    generaCp
  },
  data() {
    return {
      dialogVisible: false,
      input: "",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style socped lang="scss">

</style>
