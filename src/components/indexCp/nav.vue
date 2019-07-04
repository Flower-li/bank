<template>
  <div class="nav">
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
    </el-radio-group>
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
      <el-menu-item index="0">
        <i class="el-icon-menu"></i>
        <span slot="title">不动产系统</span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">{{ isCollapse }}</span>
        </template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
        <el-menu-item index="1-3">选项3</el-menu-item>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <span slot="title">选项4</span>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item index="3-1">选项1</el-menu-item>
        <el-menu-item index="3-2">选项2</el-menu-item>
        <el-menu-item index="3-3">选项3</el-menu-item>
        <el-submenu index="3-4">
          <span slot="title">选项4</span>
          <el-menu-item index="3-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item index="4-1">选项1</el-menu-item>
        <el-menu-item index="4-2">选项2</el-menu-item>
        <el-menu-item index="4-3">选项3</el-menu-item>
        <el-submenu index="4-4">
          <span slot="title">选项4</span>
          <el-menu-item index="4-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "IndexNav",
  props: ["isCollapse"],
  data() {
    return {};
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.nav {
  .el-submenu__title:hover {
    background-color: #045dbf !important;
  }

  .el-submenu__title i {
    color: #fff !important;
  }
}
</style>

<style scoped lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 100%;
  background-color: #0093ff;
  color: #fff;
}
.nav {
  width: auto;
}
.el-icon-menu {
  color: #fff;
}
.el-submenu ul li {
  background-color: #0070eb;
}
.el-submenu span {
  color: #fff;
}
.el-menu-item {
  color: #fff;
}
.el-menu-item :hover {
  color: #fff;
}
.el-menu-item.is-active {
  color: #fff;
}
.el-menu-item:focus,
.el-menu-item:hover {
  outline: 0;
  background-color: #0093ff;
}
.el-menu {
  list-style: none;
  position: relative;
  margin: 0;
  padding-left: 0;
  background-color: #0093ff;
}
.el-menu {
  background-color: #0093ff;
}
.el-menu--vertical ul li {
  background-color: #0093ff;
}
.el-menu--collapse {
  width: 70px;
}
</style>
