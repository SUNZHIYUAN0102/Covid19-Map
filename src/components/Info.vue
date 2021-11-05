<template>
  <div class="info">
      <p class="title">
          <i></i>
          病毒信息
      </p>
      <div class="content">
          <p>{{Info.note1}}</p>
          <p>{{Info.note2}}</p>
          <p>{{Info.note3}}</p>
          <p>{{Info.remark1}}</p>
          <p>{{Info.remark2}}</p>
          <p>{{Info.remark3}}</p>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    Info: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
};
</script>


<style scoped>
.info{
    padding: 20px;
    background: #fff;
    border-bottom: 2px solid #f1f1f1;
}
.title{
    font-size: 16px;
    display: flex;
}
.title i{
    display: inline-block;
    width: 4px;
    height: 20px;
    background: #4168e2;
    vertical-align: middle;
    margin-right: 5px;
}
.content{
    font-size: 14px;
    color: rgb(90, 85, 85);
    margin-left: 15px;
}
.content p{
    margin: 4px 0;
}
</style>