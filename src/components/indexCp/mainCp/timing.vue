<template>
  <div class="timing">
    <div class="search">
      <el-input
        v-model="input"
        placeholder="输入任务名称搜索"
        style="width:300px;margin-left:10px;"
      ></el-input>

      <el-button type="success" icon="el-icon-search">搜索</el-button>

      <el-button type="primary" icon="el-icon-search">新增</el-button>

      <el-button
        type="warning"
        icon="el-icon-search"
        @click="dialogVisible = true"
        >执行日志</el-button
      >
      <el-dialog title="执行日志" :visible.sync="dialogVisible" width="65%">
        <timingCp />
      </el-dialog>
    </div>
    <div class="form">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
        <el-table-column fixed="right" label="操作" width="200">
          <template>
            <el-button type="text" size="small">编辑</el-button>
            <el-button type="text" size="small">执行</el-button>
            <el-button type="text" size="small">暂停</el-button>
            <el-button type="text" size="small">删除</el-button>
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
import timingCp from "@/components/indexCp/mainCp/alertForm/timingCp.vue";
import timingEditCp from "@/components/indexCp/mainCp/alertForm/timingEditCp.vue";
export default {
  name: "timing",
  components: {
    timingCp,
    timingEditCp
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
.page {
  padding: 30px 0 30px 0;
}
</style>
