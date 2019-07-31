<template>
  <div class="perMissions">
    <el-row>
      <el-col :span="4">
        <div class="left">
          <el-input placeholder="请输入查询">
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
            :data="data"
            show-checkbox
            node-key="id"
            :default-expanded-keys="[2, 3]"
            :default-checked-keys="active"
            :props="defaultProps"
            v-show="isRadio"
            v-if="reload"
            @check="checkd"
          >
          </el-tree>
          <el-tree
            :data="data2"
            show-checkbox
            node-key="id"
            :default-expanded-keys="[1, 3]"
            :default-checked-keys="[1]"
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

            <el-input placeholder="搜索"></el-input>
          </div>
          <el-table :data="tableData" @row-click="rowClick" style="width: 99%">
            <el-table-column label="名称" prop="name"> </el-table-column>
            <el-table-column label="描述" prop="remark"> </el-table-column>
            <el-table-column label="创建日期" prop="createTime">
            </el-table-column>
            <el-table-column min-width="200" align="right" label="操作">
              <template>
                <el-button size="mini" @click="dialogVisible = true"
                  >Edit</el-button
                >

                <el-button size="mini" type="danger" @click="handleDelete"
                  >Delete</el-button
                >
              </template>
            </el-table-column>
          </el-table>
          <el-dialog
            title="编辑角色"
            :visible.sync="dialogVisible"
            width="25%"
            :before-close="handleClose"
          >
            <rolesCp />
          </el-dialog>
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
import { getRoles } from "@/api/getRoles";
import moment from "moment";
import rolesCp from "@/components/indexCp/mainCp/alertForm/rolesCp.vue";
export default {
  components: {
    rolesCp
  },
  name: "perMissions",
  data() {
    return {
      radio: "菜单分配",
      isRadio: true,
      dialogVisible: false,
      tableData: [],
      active: [],
      reload: true,
      data: [],
      data2: [
        {
          id: 1,
          label: "一级 123123121",
          name: "123123123",
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
        label: "name"
      }
    };
  },
  mounted() {
    getRoles().then(rsf => {
      let transTime = arr => {
        for (const item of arr) {
          item.createTime = moment(item.createTime).format(
            "YYYY-MM-DD- HH:mm:ss"
          );
        }
      };
      transTime(rsf.data.content);
      this.tableData = rsf.data.content;
      this.data = rsf.data.content[0].menus;
      console.log(this.data);
    });
  },
  methods: {
    checkd(a, b) {
      // console.log(b)
      this.active = b.checkedKeys;
    },
    rowClick(menus) {
      this.reload = false;
      this.$nextTick(() => {
        this.reload = true;
        this.active = menus.menus.map(m => m.id);
        console.log(this.active);
      });
    },
    change(isRadio) {
      this.isRadio = !this.isRadio;
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(() => {
          done();
        })
        .catch(() => {});
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
