<template>
  <div class="usuario">
    <h2>Usuário</h2>
    <hr>
    <router-view />

    <button sucesso @click="irParaInicio">&lt;Voltar</button>
  </div>
</template>

<script>
  export default {
    name: 'Usuario',

    // Watch o Params ID
    // data() {
    //   return {
    //     id: this.$route.params.id
    //   }
    // },
    // watch: {
    //   $route( to, from ) {
    //     this.id = to.params.id
    //   }
    // },

    // Param ID via props
    props: [ 'id' ],

    methods: {
      irParaInicio() {
        // this.$router.push( '/' )
        // this.$router.push( { path: '/' } )
        this.$router.push( { name: 'inicio' } )
      }
    }
  }
</script>

<style scoped>

</style>
