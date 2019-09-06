<template lang="pug">
  .content
    router-view
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
