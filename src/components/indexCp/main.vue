<template>
  <div class="main">
    <div style="margin-bottom: 20px;">
      <el-button size="small" @click="addTab(editableTabsValue)">
        add tab
      </el-button>
    </div>

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
        <!-- <component :is="'perMissions'" />
        <component :is="'user'" />
        <component :is="'listForm'" /> -->
        <!-- <component :is="'roles'"/> -->
        <!-- <component :is="'menuList'"/> -->
        <!-- <component :is="'dept'" /> -->
        <!-- <component :is="'job'" /> -->
        <!-- <component :is="'dict'" /> -->
        <!-- <component :is="'logs'" /> -->
        <!-- <component :is="'errorLogs'" /> -->
        <!-- <component :is="'timing'" /> -->
        <!-- <component :is="'generator'" /> -->
        <component :is="'Email'" />
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
import Email from "@/components/indexCp/mainCp/Email.vue";
export default {
  name: "IndexMain",
  components: {
    // listForm,
    // perMissions,
    // user,
    // roles,
    // menuList,
    // dept,
    // job,
    // dict,
    // logs,
    // errorLogs,
    // timing,
    // generator,
    Email
  },
  data() {
    return {
      editableTabsValue: "1",
      editableTabs: [
        {
          title: "首页",
          name: "1"
        }
      ],
      tabIndex: 1,
      input: ""
    };
  },
  methods: {
    addTab(targetName) {
      let newTabName = ++this.tabIndex + "";
      this.editableTabs.push({
        title: "New Tab",
        name: newTabName
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
