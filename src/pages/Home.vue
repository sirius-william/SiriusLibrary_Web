<template>
  <div class="fill">
    <user-bar/>
    <el-row :gutter="20" style="padding: 150px 200px 0 200px">
      <el-col :span="8">
        <div class="grid-content" style="text-align: center;font-size: 10px; background-color: #ffb91b">
          <i style="font-size:30px">总馆藏：{{totalBooks}}</i>本
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content" style="text-align: center;font-size: 10px;background-color: #05e705">
          <i style="font-size:30px">已借出：{{lent}}</i>本
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content" style="text-align: center;font-size: 10px; background-color:#ff4848">
          <i style="font-size:30px">即将到期：{{nearTime}}</i>本
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import UserBar from "../components/UserBar"
export default {
  name: "Home",
  components:{
    UserBar
  },
  data(){
    return {
      totalBooks: 100,
      lent: 200,
      nearTime: 50
    }
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
</style>