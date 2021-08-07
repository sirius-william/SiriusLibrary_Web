<template>
  <div style="height: 100%;" class="fill">
  <el-row style="height: 100%;">
    <el-col :span="4" style="height: 100%; background-color: #545c64">
      <el-menu :uniqueOpened="true" :default-active="defaultPage" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" style="height: 100%;" router>
        <el-menu-item index="main">
          <i class="el-icon-menu"></i>
          <template #title>首页</template>
        </el-menu-item>
        <el-submenu index="2">
          <template #title>
            <i class="el-icon-location"></i>
            <span>书籍</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="show_books">馆藏查询</el-menu-item>
            <el-menu-item index="borrow_and_lend">借还管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="user_list" v-if="$store.state.identification === 0">
          <template #title>
            <i class="el-icon-location"></i>
            <span>用户管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="user_list">用户列表</el-menu-item>
            <el-menu-item index="borrow_and_lend">管理员管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="user_list" v-if="$store.state.identification === 0">
          <template #title>
            <i class="el-icon-location"></i>
            <span>账号管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="user_list">信息维护</el-menu-item>
            <el-menu-item index="borrow_and_lend">权限维护</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
    <el-col :span="20" style="height: 100%;overflow: auto;">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </el-col>
  </el-row>
  </div>
</template>

<script>

export default {
  name: "MainPage",
  computed: {
    defaultPage(){
      return this.$route.path.replace('/', '');
    }
  }
}
</script>

<style scoped>

</style>