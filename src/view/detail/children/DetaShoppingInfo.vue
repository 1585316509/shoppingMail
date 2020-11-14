<template>
  <div class="shopping-info">
    <p>{{shoppingInfo.title}}</p>
    <h2>
      <span class="price">{{shoppingInfo.price}}</span>
      <span class="oldPrice">{{shoppingInfo.oldPrice}}</span>
      <span class="desc">{{shoppingInfo.desc}}</span>
    </h2>
  </div>
</template>

<script>
  export default {
    name: "DetaShoppingInfo",
    props:{
      shoppingInfo:Object
    }
  }
</script>

<style scoped>
  .shopping-info{
    padding: 0 10px;
  }
  p{
    margin: 10px 0;
    font-size: 18px;
  }
  .price{
    color:hotpink;
  }
  .oldPrice{
    font-size: 14px;
    color:#c0c0c0;
    text-decoration: line-through;
  }
  .desc{
    font-size: 12px;
    color:#fff;
    border:1px solid #ccc;
    background: hotpink;
    border-radius: 5px;
    padding: 3px 5px;
    position: relative;
    top: -10px;
  }
</style>