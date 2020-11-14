<template>
  <div>
    <topBar bgCol="#ff69b4">
      <div slot="center">
        <h3>蘑菇街</h3>
      </div>
    </topBar>
  </div>
</template>

<script>
  import topBar from '@/components/common/topBar/TopBar'

  export default {
    name: "HomeTopBar",
    components:{
      topBar
    }
  }
</script>

<style scoped>
  h3{
    text-align: center;
    line-height: 44px;
    color: white;
  }
</style>