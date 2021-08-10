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
import * as api from "../api/http"
import {ElMessage} from "element-plus";
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
  },
  methods: {
    getAllUsers(){
      api.getAllUsers().then(data => {
        this.userList = [];
        for (let item of data){
          let type = "读者";
          switch (item["type"]){
            case 0: type = "管理员"; break;
            case 1: type = "读者"; break;
            case 2: type = "超级管理员";break;
          }
          this.userList.push({
            id: item["id"],
            name: item["name"],
            address: item["address"],
            identification: type,
            type: "普通会员"
          })
        }
      }).catch(error => {
        console.log(error);
        ElMessage.error(error);
      })
    }
  },
  mounted() {
    this.getAllUsers();
  }
}
</script>

<style scoped>

</style>