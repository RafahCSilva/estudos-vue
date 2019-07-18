<template>
  <footer class="footer">
    <span>by <strong>RaFao</strong></span>
  </footer>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style lang="scss">
  .footer {
    grid-area: footer;
    background-color: #DDD;
    color: #333;

    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 10px;
  }
</style>
