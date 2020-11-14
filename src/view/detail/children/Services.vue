<template>
  <div class="services">
    <div class="services-item" v-for="item in services" :key="item.name">
      <img :src="item.icon" alt="" class="services-img">
      {{item.name}}

    </div>
  </div>
</template>

<script>
  export default {
    name: "Services",
    props:{
      services:Array
    }
  }
</script>

<style scoped>
  .services{
    display: flex;
    padding: 0 10px ;
  }
  .services-img{
    height: 10px;
  }
  .services-item{
    flex: auto;
    font-size: 13px;
    margin-top: 10px;
    margin-left: 5px;
    text-align: center;
  }
</style>