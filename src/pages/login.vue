<template>
  <el-row :gutter="20">
    <el-col :span="6" :offset="9">
      <div class="name-label">用户登录</div>
      <el-form :model="form" class="form">
        <el-form-item prop="username">
          <el-input v-model="form.username" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="form.password" type="password" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item prop="type">
          <el-radio-group v-model="form.type">
            <el-radio :label="0">读者</el-radio>
            <el-radio :label="1">管理员</el-radio>
            <el-radio :label="2">超级管理员</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-button style="margin-right: 30px;">清空</el-button>
          <el-button type="primary" style="margin-left: 15px" @click="submit">登录</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
import {ElMessage} from "element-plus";
import * as api from "../api/http"
export default {
  name: "loginPage",
  data(){
    return {
      form: {
        username: "jlsszcxt",
        password: "jlsszcxt1996",
        type: 0
      }
    }
  },
  methods: {
    submit(){
      api.login(this.form.username, this.form.password, this.form.type).then(data => {
        this.$router.push("/main")
      }).catch(error => {
        let err = error.message === "Network Error" ? "网络错误，无法连接到服务器": "其他未知错误 :" + error.message
        ElMessage.error({
          message: err
        })
      });
    }
  },
}
</script>

<style scoped>
.el-row {
  top: 200px;
  height: 200px;
  text-align: center;
}
.el-col {
  background-color: aliceblue;
}

.el-form{
  padding: 24px;
}

.name-label{
  padding: 24px 0 0 0;
  font-family: "PingFang SC";
  font-size: 20px;
}
</style>