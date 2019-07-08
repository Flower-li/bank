<template>
  <div class="roles">
    <div class="search">
      <el-input v-model="input" placeholder="请输入内容"></el-input>

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
        row-key="id"
        default-expand-all
        :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
      >
        <el-table-column label="Date" prop="date"> </el-table-column>
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
              width="25%"
              :before-close="handleClose"
            >
              <rolesCp />
            </el-dialog>

            <el-button size="mini" type="danger" @click="handleDelete"
              >Delete</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import rolesCp from "@/components/indexCp/mainCp/alertForm/rolesCp.vue";
export default {
  name: "roles",
  components: {
    rolesCp
  },
  data() {
    return {
      dialogVisible: false,
      hasChildren: true,
      tableData: [
        {
          id: 1,
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          children: [
            {
              id: 11,
              date: "2016-05-02",
              name: "王小虎",
              address: "上海市普陀区金沙江路 1518 弄"
            }
          ]
        },
        {
          id: 2,
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          id: 3,
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          id: 4,
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
.roles {
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
