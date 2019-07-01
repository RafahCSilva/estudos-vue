<template>
  <Painel titulo="Loja Virtual" verde>
    <div class="loja">
      <span>Adicionar</span>
      <input type="number" v-model.number="quantidade">
      <span>itens de <strong>R$</strong></span>
      <input type="number" v-model.number="preco">
      <button @click="adicionar">Agora!</button>
    </div>
  </Painel>
</template>

<script>
  // import { mapMutations } from 'vuex'
  import { mapActions } from 'vuex'

  export default {
    data() {
      return {
        sequencia: 1,
      }
    },
    computed: {
      quantidade() {
        return this.$store.state.quantidade
      },
      preco() {
        return this.$store.state.preco
      }
    },
    methods: {
      adicionar() {
        const produto = {
          id: this.sequencia,
          nome: `Produto ${ this.sequencia }`,
          quantidade: this.quantidade,
          preco: this.preco
        }
        this.sequencia++

        // acesso direto ao store
        // this.$store.state.produtos.push( produto )

        // acesso via Mutation
        // this.$store.commit( 'adicionarProduto', produto )
        // acesso ao Mutation mapeada como this.methods
        // this.adicionarProduto( produto )

        // acesso ao Actions
        // this.$store.dispatch( 'adicionarProduto', produto )
        // acesso ao Actions mapeada como this.methods
        this.adicionarProduto( produto )
      },

      // acesso ao Mutation mapeada como this.methods
      // ...mapMutations( [ 'adicionarProduto' ] )

      // acesso ao Actions mapeada como this.methods
      ...mapActions( [ 'adicionarProduto' ] ),
      // q é a mesma coisa disso:
      // adicionarProduto( produto ) {
      //   this.$store.dispatch( 'adicionarProduto', produto )
      // }

    }
  }
</script>

<style>
  .loja {
    display: flex;
    justify-content: center;
  }

  .loja > * {
    margin: 0px 10px;
  }

  input {
    font-size: 2rem;
    width: 90px;
  }
</style>
