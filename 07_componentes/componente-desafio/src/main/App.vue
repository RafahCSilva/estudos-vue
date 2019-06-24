<template>
  <v-app>

    <app-menu></app-menu>

    <app-toolbar></app-toolbar>

    <v-content>
      <app-carousel></app-carousel>
    </v-content>

    <Footer/>

  </v-app>
</template>

<script>
  import Menu from '../componentes/template/Menu'
  import Toolbar from '../componentes/template/Toolbar'
  import Carousel from '../componentes/widgets/Carousel'
  import Footer from '../componentes/template/Footer'

  export default {
    components: {
      appMenu: Menu,
      appToolbar: Toolbar,
      appCarousel: Carousel,
      Footer,
    },
  }
</script>
