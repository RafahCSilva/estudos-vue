<template>
  <div>
    <ul>
      <li v-for="fruta in frutas" :key="fruta">{{ fruta }}</li>
    </ul>
    <input type="text" v-model="fruta" @keydown.enter="add">
  </div>
</template>

<script>
  import usuarioMixin from './usuarioMixin'

  export default {
    name: 'Frutas',
    mixins: [ usuarioMixin ],
    data() {
      return {
        fruta: '',
        frutas: [ 'banana', 'maça', 'laranja' ],
      }
    },
    methods: {
      add() {
        this.frutas.push( this.fruta )
        this.fruta = ''
      },
    },
    created() {
      console.log( 'Created - frutas.vue' )
    },
  }
</script>

<style scoped>

</style>
