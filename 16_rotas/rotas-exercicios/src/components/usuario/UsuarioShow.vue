<template>
  <div class="usuario-detalhe">
    <h3>Usuario Detalhe</h3>
    <p><strong>Código:</strong> {{ id }}</p>
    <router-link tag="button" primario :to="`/usuario/${id}/edit`">Editar Url</router-link>
    <router-link tag="button" primario :to="{
     name: 'usuariosEdit',
     params: { id },
     query: { completo: true, lingua: 'en' }
     }">Editar Named</router-link>
  </div>
</template>

<script>
  export default {
    name: 'UsuarioShow',
    props: ['id']
  }
</script>

<style scoped>

</style>
