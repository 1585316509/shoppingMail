<template>
  <div class="goods-item" @click="urlToDetail">
    <img :src="item.show.img" alt="">
    <p>{{item.title}}</p>
    <p>
      <span>￥{{item.price}}</span>
      <span>
        <img src="../../../assets/css/img/common/collect.svg" alt="">
        {{item.cfav}}
      </span>
    </p>
  </div>
</template>

<script>
  export default {
    name: "GoodsItem",
    props:{
      item:Object
    },
    methods:{
      urlToDetail(){
        this.$router.push({
          path:'/detail',
          query:{
            id:this.item.iid
          }
        })
      }
    }
  }
</script>

<style scoped>
  .goods-item{
    display: inline-block;
    width: 40%;
    margin: 0px 16px 10px 16px ;
  }
  .goods-item > img{
    width: 100%;
    height: 30vh;
  }
  .goods-item > p{
    font-size: 12px;
    display: inline-block;
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
  }
  .goods-item > p:nth-of-type(2) > span:first-of-type{
    color: red;
  }
  .goods-item > p:nth-of-type(2) > span:last-of-type{
    margin-left: 15px;
  }
  .goods-item span:nth-of-type(2) > img{
    width:15px;
  }
</style>