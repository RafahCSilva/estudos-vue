<template>
  <div id="app">
    <h1>Problema Monty Hall</h1>
    <Door number="1" :has-gift="false" />
  </div>
</template>

<script>
  import Door from './components/Door'

  export default {
    name: 'App',
    components: {
      Door
    }
  }
</script>

<style lang="scss">
  * {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  body {
    color: #fff;
    background: linear-gradient(to right, rgb(21, 152, 87), rgb(21, 87, 153));
  }

  #app {
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      border: 1px solid #000;
      background-color: #0004;
      padding: 20px;
      margin-bottom: 60px;
    }
  }
</style>
