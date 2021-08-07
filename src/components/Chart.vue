<template>
<div id="chart"> </div>
</template>

<script>
import * as echarts from "echarts"
const chart = document.getElementById("chart");
let myChart = echarts.init(chart);
let option = {

}

export default {
  name: "Chart"
}

</script>

<style scoped>

</style>