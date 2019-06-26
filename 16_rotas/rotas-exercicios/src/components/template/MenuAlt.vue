<template>
  <nav class="menu">
    <ul>
      <router-link tag="li" active-class="active" exact to="/"><a>Home</a></router-link>
      <router-link tag="li" active-class="active" exact to="/usuario"><a>User</a></router-link>
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
