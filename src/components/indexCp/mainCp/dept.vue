<template>
  <div class="dept">
    <div class="search">
      <el-input placeholder="请输入内容"></el-input>

      <el-button type="success" icon="el-icon-search">搜索</el-button>

      <el-button type="primary" icon="el-icon-search" @click="handleNew()"
        >新增</el-button
      >

      <el-button type="warning" icon="el-icon-search">导出</el-button>
    </div>

    <div class="form">
      <el-table
        :data="tableData"
        style="width: 99%"
        row-key="id"
        default-expand-all
        :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
      >
        <el-table-column label="名称" prop="name"> </el-table-column>
        <el-table-column label="区县" prop="qxdm"> </el-table-column>
        <el-table-column label="证件号码" prop="zjhm"> </el-table-column>
        <el-table-column label="创建日期" prop="createTime"> </el-table-column>
        <el-table-column min-width="200" align="right" label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >Edit</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >Delete</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <el-dialog
        title="编辑"
        :visible.sync="dialogVisible"
        width="500px"
        :before-close="handleClose"
      >
        <deptCp :nowClick="nowClick" :tableData="tableData" />
      </el-dialog>
    </div>
  </div>
</template>

<script>
import deptCp from "@/components/indexCp/mainCp/alertForm/deptCp.vue";
import { getDepts } from "@/api/getDepts";
export default {
  name: "dept",
  components: {
    deptCp
  },
  data() {
    return {
      dialogVisible: false,
      hasChildren: true,
      tableData: [],
      nowClick: ""
    };
  },
  created() {
    getDepts()
      .then(rsf => {
        this.tableData = rsf.data.content;
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(() => {
          done();
        })
        .catch(() => {});
    },
    handleEdit(index, row) {
      this.dialogVisible = true;
      this.nowClick = row;
    },
    handleNew() {
      this.dialogVisible = true;
      this.nowClick = {
        name: "",
        zjhm: "",
        pid: "",
        bz: "",
        id: ""
      };
    },
    handleDelete(index, row) {
      console.log(row);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.dept {
  .el-table th.is-right {
    padding-right: 40px !important ;
  }
  .el-table td.is-right {
    text-align: left !important ;
  }
}
</style>
<style scoped lang="scss">
.search {
  margin-bottom: 30px;
}
.el-input {
  width: 200px;
  margin-left: 30px;
}
.form {
  margin-left: 1%;
  p {
    font-weight: bold;
    color: #909399;
    font-size: 16px;
    float: left;
    margin-left: 10px;
  }
  .el-button {
    float: right;
    margin-right: 40px;
    margin-top: 15px;
  }
}
.page {
  padding: 30px 0 30px 0;
}
</style>
