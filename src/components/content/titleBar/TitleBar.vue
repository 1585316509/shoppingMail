<template>
  <div class="TitleBar">
    <div class="TitleBar-item"
         v-for="(item,index) in titles"
         :key="item"
         @click="changeStyle(index)">
      <span :class="{active:currentIndex == index ? true:false }">
        {{item}}
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TitleBar",
    props:{
      titles:{
        type:Array,
       /* default(){
          return ['流行','新款','精选']
        }*/
      }
    },
    data(){
      return{
        currentIndex:0
      }
    },
    methods:{
      changeStyle(index){
        this.currentIndex = index
        this.$emit('itemClick',index)
      }
    }
  }
</script>

<style scoped>
  .TitleBar{
    display: flex;
    height: 48px;
    line-height: 48px;
    font-size: 18px;
  }
  .TitleBar-item{
    flex: 1;
    text-align: center;
  }
  span{
    padding: 0px 10px ;
  }
  .active{
    color: palevioletred;
    border-bottom: 3px solid palevioletred;
  }
</style>