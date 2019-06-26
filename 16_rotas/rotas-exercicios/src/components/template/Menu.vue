<template>
  <nav class="menu">
    <ul>
      <router-link tag="li" active-class="active" exact to="/"><a>Início</a></router-link>
      <router-link tag="li" active-class="active" exact to="/usuario/10"><a>Usuários 10</a></router-link>
      <router-link tag="li" active-class="active" exact to="/usuario/20"><a>Usuários 20</a></router-link>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'Menu'
  }
</script>

<style scoped>

</style>
