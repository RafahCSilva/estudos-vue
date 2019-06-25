<template xmlns:v-destaque="http://www.w3.org/1999/xhtml">
  <div id="app">
    <h1>Diretivas</h1>
    <hr>
    <p v-text="'Usando diretiva <strong>v-text</strong>'"></p>
    <p v-html="'Usando diretiva <strong>v-html</strong>'"></p>
    <hr>
    <p v-destaque="'lightblue'">Usando Diretiva personalizada</p>
    <p v-destaque="cor">Usando Diretiva personalizada</p>
    <p v-destaque:fundo.atrasar="'purple'">Usando Diretiva personalizada</p>
    <p v-destaque-local:fundo.atrasar.alternar="'grey'">Usando Diretiva personalizada</p>
    <hr>
    <p v-destaque-local2:fundo.atrasar.alternar="{ cor1:'green', cor2:'red', intervalo:200 }">Usando Diretiva personalizada Complexa</p>
    <p v-destaque-local2.atrasar="{ cor1:'red', atraso: 2500 }">Usando Diretiva personalizada Complexa</p>
    <hr>
  </div>
</template>

<script>
  export default {
    directives: {
      'destaque-local': {
        bind( el, binding, vNode ) {

          const aplicarCor = ( cor ) => {
            if ( binding.arg === 'fundo' ) {
              el.style.backgroundColor = cor
            } else {
              el.style.color = cor
            }
          }

          let atraso = binding.modifiers[ 'atrasar' ] ? 2000 : 0

          let cor1 = binding.value
          let cor2 = 'purple'
          let corAtual = cor1

          setTimeout( () => {
            if ( binding.modifiers[ 'alternar' ] ) {
              setInterval( () => {
                corAtual = corAtual === cor1 ? cor2 : cor1
                aplicarCor( corAtual )
              }, 1000 )
            } else {
              aplicarCor( binding.value )
            }
          }, atraso )
        },
      },
      'destaque-local2': {
        bind( el, binding, vNode ) {
          const aplicarCor = ( cor ) => {
            if ( binding.arg === 'fundo' ) {
              el.style.backgroundColor = cor
            } else {
              el.style.color = cor
            }
          }

          let atraso = binding.modifiers[ 'atrasar' ] ? binding.value.atraso : 0
          let cor1 = binding.value.cor1
          let cor2 = binding.value.cor2
          let corAtual = cor1

          setTimeout( () => {
            if ( binding.modifiers[ 'alternar' ] ) {
              setInterval( () => {
                corAtual = corAtual === cor1 ? cor2 : cor1
                aplicarCor( corAtual )
              }, binding.value.intervalo )
            } else {
              aplicarCor( cor1 )
            }
          }, atraso )
        },
      },
    },
    data() {
      return {
        cor: 'red',
      }
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
    font-size: 2.5rem;
  }
</style>
