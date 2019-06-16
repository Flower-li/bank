<template>
  <div class="nav_top">
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-button @click="close">开关</el-button>
    </el-radio-group>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "navTop"
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
  padding-top: 25px;
  margin-left: 30px;
}
</style>
