<template>
  <div class="backTop" v-show="isShow" @click="backTop">
    <img src="@/assets/css/img/common/top.png" alt="">
  </div>
</template>

<script>
  export default {
    name: "BackTop",
    props:{
      isShow:{
        type:Boolean,
        default:false
      }
    },
    methods:{
      backTop(){
        this.$emit("backTop")
      }
    }
  }
</script>

<style scoped>
  .backTop{
    width: 40px;
    height: 40px;
    position: fixed;
    bottom: 80px;
    right: 30px;
    opacity: 0.5;
  }
  .backTop img{
    width: 100%;
  }
</style>