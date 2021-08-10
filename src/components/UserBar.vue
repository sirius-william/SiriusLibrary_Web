<template>
  <el-row :gutter="20" style="width:100%">
    <el-col :span="22">
      <div class="grid-content time">
        <div>欢迎光临，{{$store.state.userName}}</div>
        <div style="font-size:12px">当前时间：{{ time }}</div>
      </div>
    </el-col>
    <el-col :span="2">
      <div class="grid-content">
        <el-dropdown>
          <el-avatar :size="50" :src="circleUrl"></el-avatar>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="$router.push('/userinfo')">个人信息</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import {formatTime} from "../utils/time";
export default {
  name: "UserBar",
  data() {
    return {
      time: formatTime(new Date()),
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
    }
  },
  mounted() {
    let _this = this;
    this.timer = setInterval(function () {
      _this.time = formatTime(new Date())
    }, 1000);
  }
}


</script>

<style scoped>
.el-row {
  margin-bottom: 20px;

&
:last-child {
  margin-bottom: 0;
}

}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.time{
  background-color: #e3e5e5;
  text-align: center;
  font-size: 25px;
  padding: 5px 0
}
</style>