<template>
  <div class="index">
    <el-container style="border: 1px solid #eee">
      <el-aside style="width:auto; background-color: #0093ff">
        <IndexNav :isCollapse="isCollapse" />
      </el-aside>

      <el-container>
        <el-header style="text-align: left; font-size: 12px">
          <navTop v-on:close="close" />
        </el-header>
        <el-main>
          <IndexMain />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import IndexNav from "@/components/indexCp/nav.vue";
import IndexMain from "@/components/indexCp/main.vue";
import navTop from "@/components/indexCp/nav_top.vue";
export default {
  name: "index",
  components: {
    IndexNav,
    IndexMain,
    navTop
  },
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {
    close(isCollapse) {
      this.isCollapse = isCollapse;
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.el-header {
  height: 100%;
}
.index {
  height: 100%;
}
.el-container {
  height: 100%;
}
.el-main {
  background-color: #ebedf0;
}
</style>
