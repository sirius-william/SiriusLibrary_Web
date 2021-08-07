<template>
  <user-bar/>
  <el-table
      :data="userList"
      border
      style="width: 100%"
      justify="center">
    <el-table-column
        fixed
        prop="id"
        label="id"
        width="140"
    align="center">
    </el-table-column>
    <el-table-column
        prop="name"
        label="姓名"
        width="120"
    align="center">
    </el-table-column>
    <el-table-column
        prop="identification"
        label="用户类型"
        width="120"
    align="center">
    </el-table-column>
    <el-table-column
        prop="type"
        label="VIP信息"
        width="120"
    align="center">
    </el-table-column>
    <el-table-column
        prop="address"
        label="住址"
    align="center">
    </el-table-column>
    <el-table-column
        fixed="right"
        label="操作"
        width="200"
    align="center">
      <template #default="scope">
        <el-button @click="" type="text" size="small">编辑</el-button>
        <el-button type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import UserBar from "../components/UserBar";

export default {
  name: "User",
  components: {UserBar},
  data() {
    return {
      userList: [{
        id: "1000",
        name: "姓名",
        address: "地址",
        identification: 0,
        type: "normal"
      }]
    }
  }
}
</script>

<style scoped>

</style>