<template>
  <div id="app" class="container-fluid">
    <h1>Animações</h1>
    <hr>
    <b-button
      variant="primary"
      class="mb-4"
      @click="exibir = !exibir"
    >
      Mostrar Mensagem
    </b-button>
    <transition name="fade">
      <b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
    </transition>
    <transition name="slide" type="animation">
      <b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
    </transition>
    <transition name="slide" type="animation" appear>
      <b-alert variant="info" show v-if="true">{{ msg }}</b-alert>
    </transition>

    <hr>

    <transition
      enter-active-class="animated bounce"
      leave-active-class="animated shake"
    >
      <b-alert variant="info" show v-show="exibir">{{ msg }}</b-alert>
    </transition>


    <hr>
    <b-select v-model="tipoAnimacao" class="mb-4">
      <option value="fade">Fade</option>
      <option value="slide">Slide</option>
    </b-select>
    <transition :name="tipoAnimacao" mode="out-in">
      <b-alert variant="info" show v-if="exibir" key="info">{{ msg }}</b-alert>
      <b-alert variant="warning" show v-else key="warn">{{ msg }}</b-alert>
    </transition>


    <hr>
    <button @click="exibir2 = !exibir2">Alternar</button>
    <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"

      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @leave-cancelled="leaveCancelled"
    >
      <div v-if="exibir2" class="caixa"></div>
    </transition>


    <hr>
    <div class="mb-4">
      <b-button
        variant="info" class="mr-2"
        @click="componenteSelecionado = 'AlertaInfo'">
        Info
      </b-button>
      <b-button
        variant="warning"
        @click="componenteSelecionado = 'AlertaAdvertencia'">
        Warn
      </b-button>
    </div>
    <transition name="fade" mode="out-in">
      <component :is="componenteSelecionado"></component>
    </transition>


  </div>
</template>

<script>
  import AlertaAdvertencia from './AlertaAdvertencia'
  import AlertaInfo from './AlertaInfo'

  export default {
    components: { AlertaAdvertencia, AlertaInfo },
    data() {
      return {
        msg: 'Uma mensagem de informação para o usuario!',
        exibir: false,
        tipoAnimacao: 'fade',

        exibir2: true,
        larguraBase: 0,

        componenteSelecionado: ''
      }
    },
    methods: {
      beforeEnter( el ) {
        console.log( 'beforeEnter' )
        this.larguraBase = 0
        el.style.width = `${ this.larguraBase }px`
      },
      enter( el, done ) {
        console.log( 'enter' )
        let rodada = 1
        let temporizador = setInterval( () => {
          const novaLargura = this.larguraBase + rodada * 10
          el.style.width = `${ novaLargura }px`
          rodada++
          if ( rodada > 30 ) {
            clearInterval( temporizador )
            done()
          }
        }, 20 )
      },
      afterEnter( el ) {
        console.log( 'afterEnter' )
      },
      enterCancelled( el ) {
        console.log( 'enterCancelled' )
      },
      beforeLeave( el ) {
        console.log( 'beforeLeave' )
        this.larguraBase = 300
        el.style.width = `${ this.larguraBase }px`
      },
      leave( el, done ) {
        console.log( 'leave' )
        let rodada = 1
        let temporizador = setInterval( () => {
          const novaLargura = this.larguraBase - rodada * 10
          el.style.width = `${ novaLargura }px`
          rodada++
          if ( rodada > 30 ) {
            clearInterval( temporizador )
            done()
          }
        }, 20 )
      },
      afterLeave( el ) {
        console.log( 'afterLeave' )
      },
      leaveCancelled( el ) {
        console.log( 'leaveCancelled' )
      },

    },
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    font-size: 1.5rem;
  }

  /* FADE */
  .fade {
    &-enter,
    &-leave-to {
      opacity: 0;
    }

    &-enter-active,
    &-leave-active {
      transition: opacity 1s;
    }
  }


  /* SLIDE */
  @keyframes slide-in {
    from {
      transform: translateY(40px);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(40px);
    }
  }

  .slide {
    &-enter-active {
      animation: slide-in 1s ease;
    }

    &-leave-active {
      animation: slide-out 1s linear;
    }

    &-enter,
    &-leave-to {
      opacity: 0;
    }

    &-enter-active,
    &-leave-active {
      transition: opacity 1s;
    }
  }


  /* CAIXA */
  .caixa {
    height: 100px;
    width: 300px;
    margin: 30px auto;
    background-color: lightgreen;
  }
</style>
