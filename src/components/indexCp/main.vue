<template>
  <div class="main">
    <el-tabs
      v-model="editableTabsValue"
      type="card"
      closable
      @tab-remove="removeTab"
    >
      <el-tab-pane
        v-for="(item, index) in editableTabs"
        :key="index"
        :label="item.title"
        :name="item.name"
      >
        <AsyncComponent :componentPath="item.component"></AsyncComponent>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
// import listForm from "@/components/indexCp/mainCp/listForm.vue";
// import perMissions from "@/components/indexCp/mainCp/perMissions.vue";
// import user from "@/components/indexCp/mainCp/user.vue";
// import roles from "@/components/indexCp/mainCp/roles.vue";
// import menuList from "@/components/indexCp/mainCp/menuList.vue";
// import dept from "@/components/indexCp/mainCp/dept.vue";
// import job from "@/components/indexCp/mainCp/job.vue";
// import dict from "@/components/indexCp/mainCp/dict.vue";
// import logs from "@/components/indexCp/mainCp/logs.vue";
// import errorLogs from "@/components/indexCp/mainCp/errorLogs.vue";
// import timing from "@/components/indexCp/mainCp/timing.vue";
// import generator from "@/components/indexCp/mainCp/generator.vue";
// import Email from "@/components/indexCp/mainCp/Email.vue";
import AsyncComponent from "@/components/indexCp/AsyncComponent.vue";
export default {
  name: "IndexMain",
  props: ["navTitle", "navComponent"],
  components: {
    AsyncComponent
  },
  data() {
    return {
      nowComponent: String,
      editableTabsValue: "1",
      editableTabs: [
        {
          title: "首页",
          name: "1",
          component: "components/indexCp/mainCp/Email.vue"
        }
      ],
      tabIndex: 1
    };
  },
  watch: {
    navTitle() {
      this.addTab();
    }
  },
  methods: {
    addTab() {
      let existTab = this.editableTabs.find(f => f.title == this.navTitle);
      if (existTab) {
        this.editableTabsValue = existTab.name;
        return;
      }
      let newTabName = ++this.tabIndex + "";
      this.editableTabs.push({
        title: this.navTitle,
        name: newTabName,
        component: this.navComponent
      });
      this.editableTabsValue = newTabName;
    },
    removeTab(targetName) {
      let tabs = this.editableTabs;
      let activeName = this.editableTabsValue;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }

      this.editableTabsValue = activeName;
      this.editableTabs = tabs.filter(tab => tab.name !== targetName);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main {
  background-color: #fff;
}
@media screen and (min-width: 1367px) {
  .main {
      height: 100%;
  }
}
</style>
