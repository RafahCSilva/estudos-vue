<template>
  <div id="app">
    <h1>Formulário Desafio</h1>
    <div class="conteudo">
      <form class="painel" v-show="!enviado">
        <div class="cabecalho">Formulário</div>
        <!-- Exercicio 01 -->
        <!-- Criar uma formulário de registro -->
        <!-- Nome completo (Nome e Sobrenome) -->
        <!-- Email -->
        <!-- Senha -->
        <!-- Armazenar Dados? (Sim/Não) -->

        <NomeCompleto v-model="nomeCompleto"></NomeCompleto>

        <Rotulo nome="Nome">
          <input type="text" v-model="nomeCompleto.u_nome">
        </Rotulo>
        <Rotulo nome="Sobrenome">
          <input type="text" v-model="nomeCompleto.u_sobrenome">
        </Rotulo>
        <Rotulo nome="E-mail">
          <input type="text" v-model="u_email">
        </Rotulo>
        <Rotulo nome="Senha">
          <input type="password" v-model="u_senha">
        </Rotulo>
        <Rotulo nome="Armazenar Dados?">
          <input type="checkbox" v-model="v_armazenar">
        </Rotulo>

        <button @click.prevent="enviar">Enviar</button>

        <!-- Exercicio 02 -->
        <!-- Só mostrar o fomulário de não tiver sido submetido -->
        <!-- Mostrar a área de Resultado apenas quando o formulário for submetido -->

        <!-- Exercicio 03 -->
        <!-- Crie um componente personalizado NomeCompleto -->
        <!-- Esse componente deve receber Nome e Sobrenome -->
      </form>

      <div class="painel" v-show="enviado">
        <div class="cabecalho">Resultado</div>
        <Rotulo nome="Nome">
          <span>{{ nomeCompleto.u_nome }}</span>
        </Rotulo>
        <Rotulo nome="Sobrenome">
          <span>{{ nomeCompleto.u_sobrenome }}</span>
        </Rotulo>
        <Rotulo nome="E-mail">
          <span>{{ u_email }}</span>
        </Rotulo>
        <Rotulo nome="Senha">
          <span>{{ u_senha }}</span>
        </Rotulo>
        <Rotulo nome="Armazenar Dados?">
          <span>{{ v_armazenar }}</span>
        </Rotulo>

        <button @click="enviado = false">&lt; Voltar</button>
      </div>
    </div>
  </div>
</template>

<script>
  import Rotulo from './components/Rotulo.vue'
  import NomeCompleto from './components/NomeCompleto'

  export default {
    name: 'app',
    components: { NomeCompleto, Rotulo },
    data() {
      return {
        nomeCompleto: {
          u_nome: '',
          u_sobrenome: '',
        },
        u_email: '',
        u_senha: '',
        v_armazenar: false,

        enviado: false,
      }
    },
    methods: {
      enviar() {
        this.enviado = true
      },
    },
  }
</script>

<style>
  body {
    background-color: #ececec;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

    display: flex;
    flex-direction: column;
  }

  .conteudo {
    display: flex;
  }

  .painel {
    flex: 1;
    background: #fff;
    margin: 0px 10px;
    padding: 20px;
    border: 1px solid #aaa;
    border-radius: 5px;
  }

  .painel .cabecalho {
    width: 100%;
    background-color: #ddd;
    padding: 10px 0px;
    border-radius: 5px;
    font-size: 1.4rem;
  }

  #app form button {
    float: right;
    margin: 10px 0px;
    padding: 10px 20px;
    font-size: 1.4rem;
    border-radius: 5px;
    color: #fff;
    background-color: #2196f3;
  }

  #app h1 {
    font-weight: 200;
    margin: 20px;
    padding: 0;
  }

  .mr-4 {
    margin-right: 40px;
  }
</style>
