<template>
<div class="main">



<div class="search">
  <el-input
    placeholder="请输入内容"
    v-model="input">
    <i slot="prefix" class="el-input__icon el-icon-search"></i>
  </el-input>

  <el-input  v-model="input" placeholder="请输入内容"></el-input>

  <el-select v-model="value" filterable placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>

    <el-select v-model="value" filterable placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>

  <el-button type="success" icon="el-icon-search">搜索</el-button>

  <el-button type="primary" icon="el-icon-search">新增</el-button>

  <el-button type="warning" icon="el-icon-search">导出</el-button>

</div>
</template>

<script>
import list_Index from '@/components/list_Index.vue'
export default {
  name: 'perMissons',
  components:{
    list_Index
  },
  data() {
      return {
        editableTabsValue: '1',
        editableTabs: [{
          title: '首页',
          name: '1'
        }],
        tabIndex: 1,
        input:'',
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    },
    methods: {
      addTab(targetName) {
        let newTabName = ++this.tabIndex + '';
        this.editableTabs.push({
          title: 'New Tab',
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main{
  background-color:#fff;
  .search{
    margin-bottom:30px;
  }
  .el-input{
    width:200px;
    margin-left:30px;
  }
}
</style>