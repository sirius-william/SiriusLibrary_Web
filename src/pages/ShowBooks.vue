<template>
  <div class="fill">
    <el-row :gutter="20" style="margin: 100px" justify="center">
      <el-col :span="20">
        <div class="grid-content">
          <el-input v-model="bookName" placeholder="请输入书名"></el-input>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content">
          <el-button type="primary" icon="el-icon-search" @click="search">搜索</el-button>
        </div>
      </el-col>
    </el-row>
    <el-table
        ref="multipleTable"
        :data="books"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
        v-show="shown">
      <el-table-column
          type="selection"
          width="70"
          align="center">
      </el-table-column>
      <el-table-column
          label="isbn"
          width="150"
          prop="isbn"
          align="center">
      </el-table-column>
      <el-table-column
          prop="name"
          label="书名"
          width="600"
          align="center">
      </el-table-column>
      <el-table-column
          prop="total"
          label="总量"
          width="120"
          align="center">
      </el-table-column>
      <el-table-column
          prop="remain"
          label="余量"
          show-overflow-tooltip
          align="center">
      </el-table-column>
    </el-table>
  </div>

</template>

<script>
import * as network from "../api/http"

export default {
  name: "ShowBooks",
  data() {
    return {
      bookName: "",
      shown: true,
      books: []
    }
  },
  created() {
    let data = []
    network.getAllBooks().then(_data => {
      for (let item of _data) {
        let _d = {
          name: item["name"],
          isbn: item["isbn"],
          author: item["author"],
          total: item["total"],
          remain: item["remain"]
        }
        data.push(_d);
      }
      this.books = data;
    }).catch(error => {
      this.$router.push("/login")
    })

  },
  methods: {
    search() {
      console.log(this.bookName);
      this.books = [];
      network.searchBook(this.bookName).then(data => {
        this.books = data;
      }).catch(error => {
        this.$router.push("/login")
      }
      )
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