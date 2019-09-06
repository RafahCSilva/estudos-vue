<template>
  <div class="content">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'Conteudo'
  }
</script>

<style lang="scss">
  .content {
    grid-area: content;
    background-color: #efefef;
    padding: 20px;
  }
</style>
