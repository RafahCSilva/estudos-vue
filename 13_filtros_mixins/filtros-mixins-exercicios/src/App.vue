<template>
  <div id="app">
    <h1>Filtros & Mixins</h1>
    <hr>
    <p>{{ u_cpf | f_cpf | f_inverter }}</p>
    <p>{{ u_cpf | f_inverter }}</p>
    <p>{{ 'ASDFG' | f_inverter }}</p>
    <hr>
    <input type="text" :value="u_cpf | f_cpf | f_inverter">
  </div>
</template>

<script>
  export default {
    data() {
      return {
        u_cpf: '12312312300',
      }
    },
    filters: {
      f_cpf( valor ) {
        const arr = valor.split( '' )
        arr.splice( 3, 0, '.' )
        arr.splice( 7, 0, '.' )
        arr.splice( 11, 0, '-' )
        return arr.join( '' )
      },
    },
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  input {
    font-size: 2.5rem;
  }
</style>
