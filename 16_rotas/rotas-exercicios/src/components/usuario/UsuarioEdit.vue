<template>
  <div class="usuario-editar">
    <h3>Editar Usuário</h3>
    <p><strong>Código:</strong> {{ id }}</p>
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
