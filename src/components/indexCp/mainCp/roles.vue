<template>
  <div class="perMissions">
    <el-row>
      <el-col :span="4">
        <div class="left">
          <el-input placeholder="请输入查询" v-model="input">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
          <el-row>
            <el-col>
              <p>{{ radio }}</p>
              <el-button size="mini" type="primary">
                保存
              </el-button>
            </el-col>
          </el-row>

          <el-tree
            :data="data2"
            show-checkbox
            node-key="id"
            :default-expanded-keys="[2, 3]"
            :default-checked-keys="[5]"
            :props="defaultProps"
            v-show="isRadio"
          >
          </el-tree>
          <el-tree
            :data="data"
            show-checkbox
            node-key="id"
            :default-expanded-keys="[1, 3]"
            :default-checked-keys="[5]"
            :props="defaultProps"
            v-show="!isRadio"
          >
          </el-tree>
        </div>
      </el-col>

      <el-col :span="20">
        <div class="right">
          <div class="search">
            <el-radio-group v-model="radio" @change="change()">
              <el-radio-button label="菜单分配"></el-radio-button>
              <el-radio-button label="权限分配"></el-radio-button>
            </el-radio-group>
            <el-button
              type="primary"
              icon="el-icon-search"
              style="margin-right:50px;"
              >新增</el-button
            >
            <el-button type="success" icon="el-icon-search">搜索</el-button>

            <el-input v-model="input" placeholder="搜索"></el-input>
          </div>
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
            <el-table-column label="Name" prop="name"> </el-table-column>
            <el-table-column label="地址" prop="address"> </el-table-column>
            <el-table-column min-width="200" align="right" label="操作">
              <template>
                <el-button size="mini" @click="dialogVisible = true"
                  >Edit</el-button
                >

                <el-dialog
                  title="编辑角色"
                  :visible.sync="dialogVisible"
                  width="25%"
                  :before-close="handleClose"
                >
                  <userCp />
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
import userCp from "@/components/indexCp/mainCp/userCp/userCp.vue";
export default {
  components: {
    userCp
  },
  name: "perMissions",
  data() {
    return {
      radio: "菜单分配",
      isRadio: true,
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
      value: "",
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
      data2: [
        {
          id: 1,
          label: "一级 123123121",
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
    change(isRadio) {
      this.isRadio = !this.isRadio;
    },
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
.perMissions {
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
  .search {
    .el-button {
      float: right;
      margin-right: 10px;
    }
    .el-input {
      width: 35%;
      margin-bottom: 30px;
      float: right;
    }
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
