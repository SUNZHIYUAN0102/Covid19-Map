<template>
  <div>
    <p class="title"><i></i>疫情地图</p>
    <div id="chinaMap"></div>
  </div>
</template>

<script>
import axios from "axios";
export default {
    methods: {
    setColor(value) {
      let currentColor = "";
      switch (true) {
        case value == 0:
          currentColor = "#fff";
          break;
        case value > 0 && value < 10:
          currentColor = "#FDFDCF";
          break;
        case value >= 10 && value < 100:
          currentColor = "#FE9E83";
          break;
        case value > 100 && value < 500:
          currentColor = "##E55A4E";
          break;
        case value >= 500:
          currentColor = "#4f070d";
          break;
      }
      return currentColor;
    },
  },
  async mounted() {
    const { data: res } = await axios.get(
      "https://lab.isaaclin.cn/nCoV/api/area",
      {
        params: {
          country: "中国",
        },
      }
    );
    console.log(res);
    var allProvinces = [];
    for (var i = 0; i < res.results.length; i++) {
      var temp = {
        name: res.results[i].provinceShortName,
        value: res.results[i].currentConfirmedCount,
        itemStyle: {
          normal: {
            areaColor: this.setColor(
              res.results[i].currentConfirmedCount
            ),
          },
        },
      };
      allProvinces.push(temp);
    }
    this.$charts.chinaMap("chinaMap", allProvinces);
  },
};
</script>


<style scoped>
#chinaMap {
  width: 100%;
  height: 400px;
}
.title {
  font-size: 16px;
  display: flex;
  padding: 20px;
  background: #fff;
  border-bottom: 2px solid #f1f1f1;
}
.title i {
  display: inline-block;
  width: 4px;
  height: 20px;
  background: #4168e2;
  vertical-align: middle;
  margin-right: 5px;
}
</style>