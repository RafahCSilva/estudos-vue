<template>
  <div class="contadores">
    <app-contador v-for="c in 5" :key="c"></app-contador>
    <button>?</button>
  </div>
</template>

<script>
  import Contador from './Contador'

  export default {
    name: 'Contadores',
    components: {
      'app-contador': Contador
    }
  }
</script>

<style scoped>

</style>
