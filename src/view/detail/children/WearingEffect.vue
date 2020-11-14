<template>
  <div class="wearing-effect">
    <h3>穿着效果</h3>
    <br>
      <img :src="item" alt="" class="wearing-item" v-for="item in wearingEffect" :key="item">

  </div>
</template>

<script>
  export default {
    name: "WearingEffect",
    props:{
      wearingEffect:Array
    }
  }
</script>

<style scoped>
img{
  width: 100%;
}
</style>