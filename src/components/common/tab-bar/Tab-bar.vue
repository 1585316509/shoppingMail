<template>
  <div>
    <div id="tab-bar">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Tab-bar"
  }
</script>

<style scoped>

  #tab-bar{
    height: 55px;
    text-align: center;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    background: #cccccc;
  }

</style>