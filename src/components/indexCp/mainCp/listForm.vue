<template>
  <div class="list_index">
    <div class="search">
      <el-input placeholder="请输入内容" v-model="input">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>

      <el-input v-model="input" placeholder="请输入内容"></el-input>

      <el-select v-model="value" filterable placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>

      <el-select v-model="value" filterable placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>

      <el-button type="success" icon="el-icon-search">搜索</el-button>

      <el-button type="primary" icon="el-icon-search">新增</el-button>

      <el-button type="warning" icon="el-icon-search">导出</el-button>
    </div>

    <div class="form">
      <el-table
        :data="
          tableData.filter(
            data =>
              !search || data.name.toLowerCase().includes(search.toLowerCase())
          )
        "
        style="width: 99%"
      >
        <el-table-column label="Date" prop="date"> </el-table-column>
        <el-table-column label="Name" prop="name"> </el-table-column>
        <el-table-column label="Name" prop="name"> </el-table-column>
        <el-table-column label="Name" prop="name"> </el-table-column>
        <el-table-column label="Name" prop="name"> </el-table-column>
        <el-table-column label="Name" prop="name"> </el-table-column>
        <el-table-column label="Name" prop="name"> </el-table-column>
        <el-table-column label="地址" prop="address"> </el-table-column>
        <el-table-column min-width="200" align="right" label="操作">
          <template>
            <el-button size="mini" @click="dialogVisible = true"
              >Edit</el-button
            >

            <el-dialog
              title="编辑"
              :visible.sync="dialogVisible"
              width="35%"
              :before-close="handleClose"
            >
              <alertForm />
            </el-dialog>

            <el-button size="mini" type="danger" @click="handleDelete"
              >Delete</el-button
            >
          </template>
        </el-table-column>
      </el-table>

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
  </div>
</template>

<script>
import userCp from "@/components/indexCp/mainCp/alertForm/userCp.vue";
export default {
  name: "listForm",
  components: {
    userCp
  },
  data() {
    return {
      dialogVisible: false,
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
      ],
      search: "",
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
      value: ""
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    handleDelete() {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.list_index {
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
