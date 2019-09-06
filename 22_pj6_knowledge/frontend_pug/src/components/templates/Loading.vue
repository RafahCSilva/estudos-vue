<template lang="pug">
  .loading
    img(src="@/assets/loading.gif" alt="Loading")
</template>

<script>
  export default {
    name: 'Loading'
  }
</script>

<style lang="scss">
  .loading {
    grid-area: content;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
