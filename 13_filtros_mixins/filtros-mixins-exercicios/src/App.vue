<template>
  <div id="app">
    <h1>Filtros & Mixins</h1>
    <hr>
    <p>{{ usuarioLogado }}</p>
    <p>{{ u_cpf | f_cpf | f_inverter }}</p>
    <p>{{ u_cpf | f_inverter }}</p>
    <p>{{ 'ASDFG' | f_inverter }}</p>
    <hr>
    <input type="text" :value="u_cpf | f_cpf | f_inverter">
    <hr>
    <hr>
    <Frutas></Frutas>
    <hr>
    <div>
      <ul>
        <li v-for="fruta in frutas" :key="fruta">{{ fruta }}</li>
      </ul>
      <input type="text" v-model="fruta" @keydown.enter="add">
    </div>
  </div>
</template>

<script>
  import Frutas from './Frutas'
  import FrutasMixin from './FrutasMixin'
  import usuarioMixin from './usuarioMixin'

  export default {
    components: { Frutas },
    mixins: [ FrutasMixin, usuarioMixin ],
    data() {
      return {
        u_cpf: '12312312300',
        frutas: [ 'abacate' ],
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
    font-size: 1.5rem;
  }
</style>
