<template>
  <div>
    <Rotulo nome="Nome">
      <input type="text" :value="value.u_nome" @input="alterarNome" />
    </Rotulo>
    <Rotulo nome="Sobrenome">
      <input type="text" :value="value.u_sobrenome" @input="alterarSobrenome" />
    </Rotulo>
  </div>
</template>

<script>
  import Rotulo from './Rotulo'

  export default {
    name: 'NomeCompleto',
    components: { Rotulo },
    props: {
      value: {
        type: Object,
      },
    },
    methods: {
      alterarNome( event ) {
        this.$emit( 'input', {
          u_nome: event.target.value,
          u_sobrenome: this.value.u_sobrenome,
        } )
      },
      alterarSobrenome( event ) {
        this.$emit( 'input', {
          u_nome: this.value.u_nome,
          u_sobrenome: event.target.value,
        } )
      },
    },
  }
</script>

<style scoped>

</style>
