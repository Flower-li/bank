<template>
  <div class="nav">
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
    </el-radio-group>
    <el-menu
      default-active="2-2"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
    >
      <el-menu-item index="0">
        <i class="el-icon-menu"></i>
        <span slot="title">不动产系统</span>
      </el-menu-item>
      <el-submenu
        v-for="(item, index) in navList"
        :key="index"
        :index="item.index"
      >
        <template slot="title">
          <i :class="item.meta.icon"></i>
          <span slot="title">{{ item.meta.title }}</span>
        </template>
        <el-menu-item
          v-for="(childItem, childIndex) in item.children"
          :key="childIndex"
          :index="childItem.index"
          @click="addTab(item.meta.title, childItem.name, childItem.component)"
          >{{ childItem.name }}</el-menu-item
        >
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import { getNav } from "@/api/nav";
// import {mapState} from "vuex"
export default {
  name: "IndexNav",
  props: ["isCollapse"],
  data() {
    return {
      navList: [],
      menuTitle: "",
      navTitle: "",
      navComponent: ""
    };
  },
  // computed:{
  //   ...mapState(["navList"])
  // },
  created() {
    getNav().then(rsf => {
      this.navList = rsf.data;
    });
  },
  // mounted(){
  //      console.log(this.navList)
  // },
  methods: {
    addTab(menuTitle, navTitle, navComponent) {
      this.menuTitle = menuTitle;
      this.navTitle = navTitle;
      this.navComponent = navComponent;
      this.$emit("addTab", this.menuTitle, this.navTitle, this.navComponent);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.nav {
  .el-submenu__title:hover {
    background-color: #0093ff !important;
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
  background-color: #045dbf;
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
