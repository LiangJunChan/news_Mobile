<template>
  <TabsList>
    <el-tabs class="tabs" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
  </TabsList>
</template>

<script>
import TabsList from 'components/common/tabs/TabsList'
export default {
  name: "MainTabs",
  data() {
    return {};
  },
  components: {
    TabsList,
  },
  methods:{
    handleClick(tab, event) {
      console.log(tab, event);
      this.$router.push('/weibo').catch(err=>{})
    },
  }
};
</script>

<style scoped>
</style>
