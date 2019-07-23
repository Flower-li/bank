<template>
  <div class="nav_top">
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-button @click="close" icon="el-icon-s-fold" size="small"></el-button>
    </el-radio-group>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-show="menuTitle">{{
        menuTitle
      }}</el-breadcrumb-item>
      <el-breadcrumb-item v-show="navTitle">{{ navTitle }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "navTop",
  props: ["menuTitle", "navTitle"],
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {
    close() {
      this.isCollapse = !this.isCollapse;
      this.$emit("close", this.isCollapse);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.el-radio-group {
  float: left;
  margin-top: 10px;
}
.el-breadcrumb {
  float: left;
  padding-top: 20px;
  margin-left: 30px;
}
</style>
