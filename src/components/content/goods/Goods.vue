<template>
  <div class="Goods">
    <GoodsItem v-for="item in goods.list" :item="item"></GoodsItem>
  </div>
</template>

<script>
  import GoodsItem from './GoodsItem'

  export default {
    name: "Goods",
    components:{
      GoodsItem
    },
    props:{
      goods:Object
    }
  }
</script>

<style scoped>
  .Goods{
    width: 100vw;
  }
</style>