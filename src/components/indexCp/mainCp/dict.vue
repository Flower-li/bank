<template>
  <div class="dict">
<el-row>
    <el-col :span="8">
    <div class="left">
      <el-row>
        <el-col >
          <p>字典列表</p>
          <el-input v-model="input" placeholder="请输入内容"></el-input>
          <el-select v-model="value" filterable placeholder="类型">
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
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <div class="form">
            <el-table
              :data="
                tableData.filter(
                  data =>
                    !search ||
                    data.name.toLowerCase().includes(search.toLowerCase())
                )
              "
              style="width: 99%"
            >
              <el-table-column label="Date" prop="date"> </el-table-column>
              <el-table-column label="Name" prop="name"> </el-table-column>
              <el-table-column min-width="60" align="right" label="操作">
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
                    <dictCp />
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
        </el-col>
      </el-row>
    </div>
    </el-col>


    <el-col :span="16">
    <div class="right">
      <el-row>
        <el-col>
          <p>字典详情</p>
          <el-input v-model="input" placeholder="请输入字典标签查询"></el-input>
          <el-button type="success" icon="el-icon-search">搜索</el-button>
          <el-button type="primary" icon="el-icon-search">新增</el-button>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <div class="form">
            <el-table
              :data="
                tableData.filter(
                  data =>
                    !search ||
                    data.name.toLowerCase().includes(search.toLowerCase())
                )
              "
              style="width: 99%"
            >
              <el-table-column label="Date" prop="date"> </el-table-column>
              <el-table-column label="Name" prop="name"> </el-table-column>
              <el-table-column min-width="60" align="right" label="操作">
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
                    <dictCp2 />
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
        </el-col>
      </el-row>
    </div>
    </el-col>
</el-row>
  </div>
</template>

<script>
import dictCp from "@/components/indexCp/mainCp/alertForm/dictCp.vue";
import dictCp2 from "@/components/indexCp/mainCp/alertForm/dictCp2.vue";
export default {
  name: "dict",
  components: {
    dictCp,
    dictCp2
  },
  input: "",
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
      ]
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
<style lang="scss">
.dict {
  .el-table th.is-right {
    padding-right: 40px !important ;
  }
  .el-table td.is-right {
    text-align: left !important ;
  }
}
</style>
<style scoped lang="scss">
.left {
  p {
    margin-left: 30px;
  }
  .el-select {
    width: 100px;
  }
  .el-input {
    width: 230px;
    margin-left: 30px;
  }
  .form {
    margin-left: 1%;
    margin-top: 30px;
    p {
      font-weight: bold;
      color: #909399;
      font-size: 16px;
      float: left;
      margin-left: 10px;
    }
    .el-button {
      float: right;
      margin-top: 15px;
    }
  }
  .page {
    padding: 30px 0 30px 0;
  }
}
.right {
  p {
    margin-left: 30px;
  }
  .el-select {
    width: 100px;
  }
  .el-input {
    width: 230px;
    margin-left: 30px;
  }
  .form {
    margin-left: 1%;
    margin-top: 30px;
    p {
      font-weight: bold;
      color: #909399;
      font-size: 16px;
      float: left;
      margin-left: 10px;
    }
    .el-button {
      float: right;
      margin-top: 15px;
    }
  }
  .page {
    float:right;
    padding: 30px 0 30px 0;
  }
}
</style>
