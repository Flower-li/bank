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
        <perMissions />
        <listForm />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import listForm from "@/components/indexCp/mainCp/listForm.vue";
import perMissions from "@/components/indexCp/mainCp/perMissions.vue";
export default {
  name: "IndexMain",
  components: {
    listForm,
    perMissions
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
</style>
