<template>
  <div class="user">
    <el-row>
      <el-col :span="4">
        <div class="left">
          <el-input placeholder="请输入部门查询" v-model="inputDp">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
          <el-row>
            <el-col>
              <p>菜单管理</p>
            </el-col>
          </el-row>

          <el-tree
            :data="data"
            show-checkbox
            node-key="id"
            :default-expanded-keys="[2, 3]"
            :default-checked-keys="[5]"
            :props="defaultProps"
          >
          </el-tree>
        </div>
      </el-col>

      <el-col :span="20">
        <div class="right">
          <el-input v-model="inputSh" placeholder="请输入内容"></el-input>

          <el-select v-model="type" filterable placeholder="类型">
            <el-option
              v-for="item in types"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>

          <el-select v-model="state" filterable placeholder="状态">
            <el-option
              v-for="item in states"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>

          <el-button type="success" icon="el-icon-search">搜索</el-button>

          <el-button type="primary" icon="el-icon-search">新增</el-button>

          <el-button type="warning" icon="el-icon-search">导出</el-button>
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
            <el-table-column label="Name" prop="name"> </el-table-column>
            <el-table-column label="Name" prop="name"> </el-table-column>
            <el-table-column label="Name" prop="name"> </el-table-column>
            <el-table-column label="Name" prop="name"> </el-table-column>
            <el-table-column label="激活状态" prop="isActivate"
              ><el-tag v-show="isActivate">激活</el-tag>
              <el-tag v-show="!isActivate">锁定</el-tag>
            </el-table-column>
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
        </div>
        <div class="page">
          <el-pagination
            @size-change="20"
            @current-change="1"
            :current-page="1"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400"
          >
          </el-pagination>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import alertForm from "@/components/indexCp/mainCp/perMissionsCp/alertForm.vue";
export default {
  components: {
    alertForm
  },
  name: "user",
  data() {
    return {
      dialogVisible: false,
      inputDp: "",
      inputSh: "",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          isActivate: true,
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          isActivate: false,
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          isActivate: false,
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          isActivate: true,
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      search: "",
      type: "",
      types: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        }
      ],
      state: "",
      states: [
        {
          value: "选项1",
          label: "状态1"
        },
        {
          value: "选项2",
          label: "双皮奶"
        }
      ],
      data: [
        {
          id: 1,
          label: "一级 1",
          children: [
            {
              id: 4,
              label: "二级 1-1",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            }
          ]
        },
        {
          id: 2,
          label: "一级 2",
          children: [
            {
              id: 5,
              label: "二级 2-1"
            },
            {
              id: 6,
              label: "二级 2-2"
            }
          ]
        },
        {
          id: 3,
          label: "一级 3",
          children: [
            {
              id: 7,
              label: "二级 3-1"
            },
            {
              id: 8,
              label: "二级 3-2"
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      }
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
.user {
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
  margin-left: 20px;
  .el-input {
    width: 90%;
    margin-bottom: 30px;
  }
  p {
    float: left;
  }
  .el-button {
    float: right;
    margin: 15px 20px 0 0;
  }
}
.right {
  .el-input {
    width: 15%;
    margin-bottom: 30px;
  }
}
.page {
  margin-top: 10px;
}
.el-table {
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
</style>
