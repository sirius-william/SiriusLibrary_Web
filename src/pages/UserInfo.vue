<template>
  <el-descriptions class="margin-top" title="用户信息" :column="4" size="medium" border style="margin: 200px 100px 100px 100px">
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        读书证号（ID）
      </template>
      {{$store.state.id}}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        姓名
      </template>
      {{name}}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        性别
      </template>
      {{sex}}
    </el-descriptions-item>

    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        手机号
      </template>
      {{tel}}
    </el-descriptions-item>

    <el-descriptions-item>
      <template #label>
        <i class="el-icon-tickets"></i>
        备注
      </template>
      无
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-office-building"></i>
        联系地址
      </template>
      {{address}}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-office-building"></i>
        用户身份
      </template>
      {{type}}
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-office-building"></i>
        VIP
      </template>
      {{vip}}
    </el-descriptions-item>
  </el-descriptions>
</template>

<script>
import * as api from "../api/http"
import store from "../store/index"
import {ElMessage} from "element-plus";
export default {
  name: "UserInfo",
  data(){
    return {
      name: "",
      sex: "",
      address: "",
      tel: "",
      vip: "",
      type: ""
    }
  },
  mounted() {
    api.getUserInfo(store.state.id).then(data => {
      let type = "读者";
      switch (data["type"]){
        case 0: type = "管理员"; break;
        case 1: type = "读者"; break;
        case 2: type = "超级管理员";break;
      }
      this.name = data["name"];
      this.sex = data["sex"] == "man" ? "男": "女";
      this.address = data["address"];
      this.tel = data["tel"];
      this.vip = data["vip"] == "normal"? "普通会员": "VIP用户"
      this.type = type;
    }).catch(error => {
      ElMessage.error(error);
    })
  }
}
</script>

<style scoped>

</style>