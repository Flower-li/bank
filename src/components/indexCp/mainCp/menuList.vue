<template>
  <div class="menuList">
    <div class="search">
      <el-input  placeholder="请输入内容"></el-input>

      <el-button type="success" icon="el-icon-search">搜索</el-button>

      <el-button type="primary" icon="el-icon-search">新增</el-button>

      <el-button type="warning" icon="el-icon-search">导出</el-button>
    </div>

    <div class="form">
      <el-table
        :data="tableData"
        style="width: 99%"
        row-key="id"
        default-expand-all
        :default-sort = "{prop: 'soft', order: 'ascending'}"
        border
        :tree-props="{ children: 'children', hasChildren: 'hasChildren'}"
      >
        <el-table-column label="名称" prop="name"> </el-table-column>
        <el-table-column label="菜单排序" prop="soft" width="90" align="center">
        </el-table-column>
        <el-table-column label="链接地址" prop="component"> </el-table-column>
        <el-table-column label="组件路径" prop="component"> </el-table-column>
        <el-table-column label="内部菜单" align="center" width="100">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.iframe">是</el-tag>
            <el-tag type="danger" v-else>否</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          label="是否显示"
          prop="ifhidden"
          align="center"
          width="100"
        >
          <template slot-scope="scope">
            <el-tag v-if="scope.row.ifhidden">是</el-tag>
            <el-tag type="danger" v-else>否</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="创建日期" prop="createTime"> </el-table-column>
        <el-table-column min-width="100" align="right" label="操作">
          <template>
            <el-button size="mini" @click="dialogVisible = true"
              >编辑</el-button
            >

            <el-button size="mini" type="danger" @click="handleDelete"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <el-dialog
        title="编辑"
        :visible.sync="dialogVisible"
        width="25%"
        :before-close="handleClose"
      >
        <menuCp />
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { getMenus } from "@/api/getMenus";
import moment from "moment";
import menuCp from "@/components/indexCp/mainCp/alertForm/menuCp.vue";
export default {
  name: "menuList",
  components: {
    menuCp
  },
  data() {
    return {
      dialogVisible: false,
      hasChildren: true,
      tableData: []
    };
  },
  mounted() {
    getMenus().then(rsf => {
              let transTime = arr => {
          for (const item of arr) {
            if (item.children == null) {
              item.createTime = moment(item.createTime).format(
                "YYYY-MM-DD- HH:mm:ss"
              );
            } else transTime(item.children);
            //  transTime(item.children)
          }
        };
        let transTime1 = arr => {
          for (const item of arr) {
            if (item.children != null) {
              item.createTime = moment(item.createTime).format(
                "YYYY-MM-DD HH:mm:ss"
              );
            }
          }
        };
        transTime(rsf.data.content);
        transTime1(rsf.data.content);
      this.tableData = rsf.data.content;
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
.menuList {
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
