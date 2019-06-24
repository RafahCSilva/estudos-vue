<template>
  <div class="contador">
    <span>{{ contador }}</span>
    <button @click="contador++">+</button>
    <button @click="contador--">-</button>
  </div>
</template>

<script>
  export default {
    name: 'Contador',
    data () {
      return {
        contador: 0
      }
    },
    methods: {
      adicionar () {
        this.contador++
      },
      subtrair () {
        this.contador--
      }
    }
  }
</script>

<style scoped>
  .contador span {
    border-bottom: 1px solid #CCC;
    height: 30px;
    padding: 5px 25px;
  }

  .contador button {
    height: 30px;
    width: 30px;
    border-radius: 15px;
    background-color: coral;
    color: white;
    outline: none;
  }
</style>
