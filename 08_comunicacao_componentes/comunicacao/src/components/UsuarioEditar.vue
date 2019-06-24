<template>
  <div class="componente">
    <h2>Alterar os Dados de Usuário</h2>
    <p>Edite as informações</p>
    <p>Idade do Usuário: <strong>{{ idade }}</strong></p>
    <button @click="alterarIdade">Alterar Idade</button>
  </div>
</template>

<script>
  import barramento from '@/barramento.js'

  export default {
    props: {
      idade: {
        type: Number,
        default: 0
      },
    },
    methods: {
      alterarIdade() {
        // this.$emit( 'idadeMudou', 33 )

        // com barramento
        this.idade = 33
        barramento.$emit( 'idadeMudou', 33 )

        // Barramento como metodo
        //barramento.alterarIdade( 33 )
      }
    },
  }
</script>

<style scoped>
  .componente {
    flex: 1;
    background-color: #98b99a;
    color: #fff;
  }
</style>
