<template>
  <div class="case-num">
    <div class="container">
      <div class="title">
        <span>截至 {{ caseNumberData.modifyTime | getTime }} 全国数据统计</span>
      </div>

      <div class="num">
        <ul class="count">
          <li>
            <div class="create-item">
              <div class="create-count">
                <b>
                  较昨日<em style="color: rgb(247, 76, 49)">{{
                    caseNumberData.currentConfirmedIncr | compare
                  }}</em>
                </b>
              </div>
              <strong style="color: rgb(247, 76, 49)">{{
                caseNumberData.currentConfirmedCount
              }}</strong>
              <span>现存确诊</span>
            </div>
          </li>
          <li>
            <div class="create-item">
              <div class="create-count">
                <b>
                  较昨日<em style="color: rgb(174, 33, 44)">{{
                    caseNumberData.confirmedIncr | compare
                  }}</em>
                </b>
              </div>
              <strong style="color: rgb(174, 33, 44)">{{
                caseNumberData.confirmedCount
              }}</strong>
              <span>累计确诊</span>
            </div>
          </li>
          <li>
            <div class="create-item">
              <div class="create-count">
                <b>
                  较昨日<em style="color: rgb(162, 90, 78)">{{
                    caseNumberData.suspectedIncr | compare
                  }}</em>
                </b>
              </div>
              <strong style="color: rgb(162, 90, 78)">{{
                caseNumberData.suspectedCount
              }}</strong>
              <span>累计境外输入</span>
            </div>
          </li>
          <li>
            <div class="create-item">
              <div class="create-count">
                <b>
                  较昨日<em style="color: rgb(40, 183, 163)">{{
                    caseNumberData.curedIncr | compare
                  }}</em>
                </b>
              </div>
              <strong style="color: rgb(40, 183, 163)">{{
                caseNumberData.curedCount
              }}</strong>
              <span>累计治愈</span>
            </div>
          </li>
          <li>
            <div class="create-item">
              <div class="create-count">
                <b>
                  较昨日<em style="color: rgb(93, 112, 146)">{{
                    caseNumberData.deadIncr | compare
                  }}</em>
                </b>
              </div>
              <strong style="color: rgb(93, 112, 146)">{{
                caseNumberData.deadCount
              }}</strong>
              <span>累计死亡</span>
            </div>
          </li>
          <li>
            <div class="create-item">
              <div class="create-count">
                <b>
                  较昨日<em style="color: rgb(247, 130, 7)">{{
                    caseNumberData.seriousIncr | compare
                  }}</em>
                </b>
              </div>
              <strong style="color: rgb(247, 130, 7)">{{
                caseNumberData.seriousCount
              }}</strong>
              <span>无症状人数</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import vue from "vue";
vue.filter("compare", (data) => {
  return data >= 0 ? "+" + data : data;
});
vue.filter("getTime", (data) => {
  var date = new Date(data);
  var Y = date.getFullYear() + "-";
  var M =
    (date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1) + "-";
  var D = date.getDate() + " ";
  var h = date.getHours() + ":";
  var m = date.getMinutes() + ":";
  var s = date.getSeconds();
  return Y + M + D + h + m + s;
});

export default {
  props: {
    caseNumberData: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.case-num {
  background-color: #fff;
  border-bottom: 2px solid #f1f1f1;
  padding: 20px;
}

.title {
  font-size: 14px;
  margin-bottom: 5px;
  color: gray;
}

.num {
  border: 1px solid #f1f1f1;
  border-radius: 5px;
  box-shadow: 5px 6px 10px #f1f1f1;
  padding: 20px;
}

.count {
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  flex-wrap: wrap;
}

.count li {
  width: 33.3%;
  margin: 7.5px 0;
}

.create-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.create-count {
  font-size: 14px;
}
.create-count b {
  font-weight: normal;
}
.create-count b em {
  font-style: normal;
}
.create-item strong {
  margin: 3px 0;
}
.create-item span {
  font-size: 14px;
  font-weight: bold;
}
</style>