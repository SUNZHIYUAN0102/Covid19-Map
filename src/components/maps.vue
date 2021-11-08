<template>
  <div>
    <p class="title"><i></i>疫情地图</p>
    <van-tabs v-model="active" animated>
      <van-tab title="国内疫情"><div id="chinaMap"></div></van-tab>
      <van-tab title="国外疫情"><div id="worldMap"></div></van-tab>
    </van-tabs>
  </div>
</template>

<script>
import axios from "axios";
export default {
  //   methods: {
  //   setColor(value) {
  //     let currentColor = "";
  //     switch (true) {
  //       case value == 0:
  //         currentColor = "#fff";
  //         break;
  //       case value > 0 && value < 10:
  //         currentColor = "#FDFDCF";
  //         break;
  //       case value >= 10 && value < 100:
  //         currentColor = "#FE9E83";
  //         break;
  //       case value > 100 && value < 500:
  //         currentColor = "##E55A4E";
  //         break;
  //       case value >= 500:
  //         currentColor = "#4f070d";
  //         break;
  //     }
  //     return currentColor;
  //   },
  // },
  data() {
    return {
      active: 0,
    };
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
    var allProvinces = [];
    for (var i = 0; i < res.results.length; i++) {
      var temp = {
        name: res.results[i].provinceShortName,
        value: res.results[i].currentConfirmedCount,
      };
      allProvinces.push(temp);
    }
    this.$charts.chinaMap("chinaMap", allProvinces);

    const { data: meow } = await axios.get(
      "https://lab.isaaclin.cn/nCoV/api/area?latest=true"
    );
    console.log(meow);

    var allCountries = [];
    for (var i = 0; i < meow.results.length; i++) {
      var temp = {
        name: meow.results[i].countryEnglishName,
        value: meow.results[i].currentConfirmedCount,
      };
      allCountries.push(temp);
    }

    this.$charts.worldMap("worldMap", allCountries);
  },
};
</script>


<style scoped>
#chinaMap {
  width: 100%;
  height: 400px;
}
#worldMap {
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