<template>
  <div id="app" :class="{ 'hide-menu': !isMenuVisible }">
    <Header title="RaFao - Base de Conhecimento" :hide-toggle="isMenuVisible" />
    <Menu />
    <Conteudo />
    <Footer />
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Header from './components/templates/Header'
  import Menu from './components/templates/Menu'
  import Conteudo from './components/templates/Conteudo'
  import Footer from './components/templates/Footer'

  export default {
    name: 'App',
    components: {
      Header,
      Menu,
      Conteudo,
      Footer
    },
    computed: {
      ...mapState( [ 'isMenuVisible' ] ),
    },
  }
</script>

<style lang="scss">
  * {
    font-family: "Lato", sans-serif;
  }

  body {
    margin: 0;
  }

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    height: 100vh;
    display: grid;
    grid-template-rows: 60px 1fr 40px;
    grid-template-columns: 300px 1fr;
    grid-template-areas: "header header" "menu content" "menu footer";

    &.hide-menu {
      grid-template-areas: "header header" "content content" "footer footer";
    }
  }
</style>
