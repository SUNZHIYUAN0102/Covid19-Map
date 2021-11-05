<template>
  <div>
    <topbar></topbar>
    <info :Info="Info"></info>
    <case-number :caseNumberData="caseNumberData"></case-number>
  </div>
</template>

<script>
import topbar from "../components/topbar.vue";
import info from "../components/Info.vue";
import caseNumber from "../components/caseNumber.vue";
import http from "../utils/api";
export default {
  components: {
    topbar,
    info,
    caseNumber,
  },
  data() {
    return {
      Info: {
        note1: "",
        note2: "",
        note3: "",
        remark1: "",
        remark2: "",
        remark3: "",
      },

      caseNumberData: {
        modifyTime: "",
        currentConfirmedCount: "",
        confirmedCount: "",
        suspectedCount: "",
        curedCount: "",
        deadCount: "",
        seriousCount: "",

        suspectedIncr: "",
        currentConfirmedIncr: "",
        confirmedIncr: "",
        curedIncr: "",
        deadIncr: "",
        seriousIncr: "",
      },
    };
  },
  async mounted() {
    const { data: res } = await http.get("ncov/index", {
      params: {
        key: "90a8094c1e2b2252c6cd8e608dbb7159",
      },
    });
    console.log(res);
    if (res.code == 200) {
      this.Info.note1 = res.newslist[0].desc.note1;
      this.Info.note2 = res.newslist[0].desc.note2;
      this.Info.note3 = res.newslist[0].desc.note3;
      this.Info.remark1 = res.newslist[0].desc.remark1;
      this.Info.remark2 = res.newslist[0].desc.remark2;
      this.Info.remark3 = res.newslist[0].desc.remark3;

      this.caseNumberData.modifyTime = res.newslist[0].desc.modifyTime;
      this.caseNumberData.currentConfirmedCount =
        res.newslist[0].desc.currentConfirmedCount;

      this.caseNumberData.confirmedCount = res.newslist[0].desc.confirmedCount;
      this.caseNumberData.suspectedCount = res.newslist[0].desc.suspectedCount;
      this.caseNumberData.curedCount = res.newslist[0].desc.curedCount;
      this.caseNumberData.deadCount = res.newslist[0].desc.deadCount;
      this.caseNumberData.seriousCount = res.newslist[0].desc.seriousCount;

      this.caseNumberData.suspectedIncr = res.newslist[0].desc.suspectedIncr;
      this.caseNumberData.currentConfirmedIncr = res.newslist[0].desc.currentConfirmedIncr;
      this.caseNumberData.confirmedIncr = res.newslist[0].desc.confirmedIncr;
      this.caseNumberData.curedIncr = res.newslist[0].desc.curedIncr;
      this.caseNumberData.deadIncr = res.newslist[0].desc.deadIncr;
      this.caseNumberData.seriousIncr = res.newslist[0].desc.seriousIncr;
    }
  },
};
</script>
