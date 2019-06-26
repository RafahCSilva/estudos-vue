<template>
  <div class="usuario-detalhe">
    <h3>Usuario Detalhe</h3>
    <p><strong>Código:</strong> {{ id }}</p>
    <router-link tag="button" primario :to="`/usuario/${id}/edit`">Editar Url</router-link>
    <router-link tag="button" primario :to="{
      name: 'usuariosEdit',
      params: { id },
      hash: '#rodape',
      query: { completo: true, lingua: 'en' }
     }">Editar Named
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'UsuarioShow',
    beforeRouteEnter( to, from, next ) {
      console.log( 'dentro do component -> usuario.show' )
      next()

      // pegar atrr a VM
      // next( ( vm ) => { console.log( vm.id ) } )

      // exemplo de de validacao
      // const autenticado = false
      // autenticado ? next() : next( false )
    },
    props: [ 'id' ]
  }
</script>

<style scoped>

</style>
