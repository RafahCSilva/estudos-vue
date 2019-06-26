<template>
  <div class="usuario-editar">
    <h3>Editar Usuário</h3>
    <p><strong>Código:</strong> {{ id }}</p>
    <p><strong>Completo:</strong> {{ $route.query.completo ? 'Sim' : 'Não' }}</p>
    <p><strong>Língua:</strong> {{ $route.query.lingua }}</p>
  </div>
</template>

<script>
  export default {
    name: 'UsuarioEdit',
    props: ['id']
  }
</script>

<style scoped>

</style>
