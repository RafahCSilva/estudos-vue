<template>
  <div id="app" :class="{ 'hide-menu': !isMenuVisible || !user }">
    <Header
      title="RaFaoPress"
      :hide-toggle="!user"
      :hide-user-dropdown="!user" />
    <Menu v-if="user" />
    <Loading v-if="validatingToken"/>
    <Conteudo v-else/>
    <Footer />
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import axios from 'axios'
  import Header from './components/templates/Header'
  import Menu from './components/templates/Menu'
  import Conteudo from './components/templates/Conteudo'
  import Footer from './components/templates/Footer'
  import { baseApiUrl, userKey } from '@/global'
  import Loading from '@/components/templates/Loading'

  export default {
    name: 'App',
    components: {
      Loading,
      Header,
      Menu,
      Conteudo,
      Footer
    },
    computed: {
      ...mapState( [ 'isMenuVisible', 'user' ] ),
    },
    data() {
      return {
        validatingToken: true
      }
    },
    methods: {
      async validateToken() {
        this.validatingToken = true
        const json = localStorage.getItem( userKey )
        const userData = JSON.parse( json )
        this.$store.commit( 'setUser', null )

        if ( !userData ) {
          this.validatingToken = false
          this.$router.push( { name: 'auth' } )
          return
        }

        const res = await axios.post( `${ baseApiUrl }/validateToken`, userData )
        if ( res.data ) {
          this.$store.commit( 'setUser', userData )
        } else {
          localStorage.removeItem( userKey )
          this.$router.push( { name: 'auth' } )
        }
        this.validatingToken = false
      }
    },
    created(){
      this.validateToken()
    }
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
