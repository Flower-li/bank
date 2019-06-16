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
        border
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
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >Edit</el-button
            >
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
export default {
  name: "listForm",
  data() {
    return {
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
    handleEdit(index, row) {
      console.log(index, row);
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
}
.page {
  padding: 30px 0 30px 0;
}
</style>
