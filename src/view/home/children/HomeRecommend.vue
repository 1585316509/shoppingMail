<template>
  <div class="home-recommend">
    <div class="recommend-item" v-for="item in recommend" :key="item.sort">
      <a :href="item.link">
        <img :src="item.image" :alt="item.title">
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommend",
    props:{
      recommend:Array
    }
  }
</script>

<style scoped>
  .home-recommend{
    display: flex;
  }
  .recommend-item{
    text-align: center;
    flex: 1;
    margin-top: 15px;
    padding-bottom: 10px;
    border-bottom: 8px #ccc solid;
  }
  .recommend-item img{
    width: 70px;
  }
  a{
    color: #333;
    font-size: 13px;
  }
</style>