<template lang="pug">
  .page-title
    h1
      i(v-if="icon" :class="icon")
      | {{ main }}
    h2 {{ sub }}
    hr
</template>

<script>
  // eslint-disable-next-line
  let html_bkp = `
  <div class="page-title">
    <h1><i v-if="icon" :class="icon"></i> {{ main }}</h1>
    <h2>{{ sub }}</h2>
    <hr>
  </div>`

  export default {
    name: 'PageTitle',
    props: [ 'main', 'icon', 'sub' ],
  }
</script>

<style lang="scss">
  .page-title h1 {
    margin: 0;
  }

  .page-title h2 {
    color: #777;
    margin-top: 5px;
    font-size: 1.3rem;
  }
</style>
