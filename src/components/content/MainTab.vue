<template>
  <div>
    <TabBar>
      <TabBarItem path="/home" col="pink">
        <div slot="icon" class="fa fa-home item-icon"></div>
        <div slot="text" >首页</div>
      </TabBarItem>

      <TabBarItem path="/category" col="green">
        <div slot="icon" class="fa fa-th-large item-icon"></div>
        <div slot="text" >分类</div>
      </TabBarItem>

      <TabBarItem path="/shoppingCar" col="blue">
        <div slot="icon" class="fa fa-shopping-cart item-icon"></div>
        <div slot="text" >购物车</div>
      </TabBarItem>

      <TabBarItem path="/profile" col="yellow">
        <div slot="icon" class="fa fa-user item-icon"></div>
        <div slot="text" >我的</div>
      </TabBarItem>


    </TabBar>
  </div>
</template>

<script>

  import TabBar from '../common/tab-bar/Tab-bar'
  import TabBarItem from '../common/tab-bar/TabBarItem'

  export default {
    name: "MainTab",
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>
  .item-icon{
    font-size: 22px;
  }
</style>