<template>
  <div id="app">
    <h1>Filtros & Mixins (Desafio)</h1>

    <!-- Exercício 1 -->
    <!-- Construir um filtro local que troca espaços por vírgula -->
    <h2>Exercício 1</h2>
    <p>{{ frase | f_space2comma }}</p>

    <!-- Exercício 2 -->
    <!-- Filtro global que conta o tamanho de cada palavra e adiciona o
      valor na string final -->
    <!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->
    <h2>Exercício 2</h2>
    <p>{{ frase2 | fg_contarLetras }}</p>

    <!-- Exercício 3 -->
    <!-- Implementar os exercicios 1 e 2 com propriedade computada -->
    <h2>Exercício 3</h2>
    <p>{{ c_fraseComVirgulas }}</p>
    <p> {{ c_contaLetras }}</p>

    <!-- Exercício 4 -->
    <!-- Compartilhe a propriedade computada via mixin -->
    <h2>Exercício 4</h2>
    <p>{{ m_c_fraseComVirgulas }}</p>
    <p> {{ m_c_contaLetras }}</p>

  </div>
</template>

<script>
  import computadoMixin from './computadoMixin'

  export default {
    mixins: [ computadoMixin ],
    data() {
      return {
        frase: 'asd asd asd',
        frase2: 'Pedro é legal',
      }
    },
    filters: {
      f_space2comma( valor ) {
        return String( valor ).replace( /\s/g, ',' )
      },
    },
    computed: {
      c_fraseComVirgulas() {
        return this.frase.replace( /\s/g, ',' )
      },
      c_contaLetras() {
        return this
          .frase2
          .split( ' ' )
          .map( p => `${ p } (${ p.length })` )
          .join( ' ' )
      }
    }
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
    font-size: 2.5rem;
  }
</style>
