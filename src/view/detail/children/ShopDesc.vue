<template>
  <div class="desc">
    <div class="desc-left"></div>
    <p>{{desc}}</p>
    <div class="desc-right"></div>
  </div>
</template>

<script>
  export default {
    name: "ShopDesc",
    props:{
      desc:String
    }
  }
</script>

<style scoped>
  .desc{
    padding: 0 10px;
  }
  .desc > div{
    width: 150px;
    height: 0;
    background: #cccccc;
    border: 1.5px solid #cccccc;
  }
  .desc-right{
    float: right;
  }
  p{
    margin: 20px 0;
    font-size: 16px;
    color: grey;
  }
</style>