<template>
    <div class="Email">
        <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="用户管理" name="first">
        
<div class="mail">
    <setCp />
</div>

    </el-tab-pane>
    <el-tab-pane label="配置管理" name="second"><sendCp/></el-tab-pane>
    <el-tab-pane label="角色管理" name="third">使用说明</el-tab-pane>
  </el-tabs>
    </div>
</template>

<script>
import setCp from "@/components/indexCp/mainCp/EmailCp/setCp.vue"
import sendCp from "@/components/indexCp/mainCp/EmailCp/sendCp.vue"
export default {
name:"Email",
components:{
    setCp,
    sendCp
},
data(){
    return {
        activeName: 'second'
    }
},
methods:{
     handleClick(tab, event) {
        console.log(tab, event);
      }
}

}
</script>

<style scoped lang="scss">
.Email{
    padding-left:20px;
}

</style>
