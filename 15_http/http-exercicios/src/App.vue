<template>
  <div id="app" class="container">
    <h1>HTTP com Axios</h1>
    <b-card>
      <b-form-group label="Nome:">
        <b-form-input
          type="text"
          size="lg"
          v-model="usuario.nome"
          placeholder="Informe o Nome"
        ></b-form-input>
      </b-form-group>
      <b-form-group label="E-mail:">
        <b-form-input
          type="email"
          size="lg"
          v-model="usuario.email"
          placeholder="Informe o E-mail"
        ></b-form-input>
      </b-form-group>
      <hr>
      <b-button
        @click="salvar"
        variant="primary"
      >Salvar
      </b-button>
    </b-card>

    <b-card>
      <b-button @click="obterUsuarios">Obter Usuários</b-button>
      <hr>
      <b-list-group>
        <b-list-group-item
          v-for="(usuario, idx) in usuarios"
          :key="id">
          <strong>ID: </strong>{{ usuario.id }} <br>
          <strong>Nome: </strong>{{ usuario.nome }} <br>
          <strong>E-mail: </strong>{{ usuario.email }}

          <b-button variant="warning" @click="editarUsuario( idx )">Editar</b-button>
          <b-button variant="danger" @click="deletarUsuario( usuario.id )">Deletar</b-button>
        </b-list-group-item>
      </b-list-group>
    </b-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        usuario: {
          nome: '',
          email: '',
          id: ''
        },
        usuarios: [],
        id: null
      }
    },
    methods: {
      limpar() {
        this.usuario.nome = ''
        this.usuario.email = ''
        this.id = null
      },
      salvar() {
        console.log( this.usuario )

        const metodo = this.id ? 'patch' : 'post'
        const finalUrl = this.id ? `/${ this.id }.json` : '.json'
        this
          .$http[ metodo ]( 'usuarios' + finalUrl, this.usuario )
          .then( () => this.limpar() )
      },
      obterUsuarios() {
        this.$http.get( 'usuarios.json' )
            .then( ( res ) => {
              this.usuarios = res.data
              console.log( 'Usuarios:', this.usuarios )
            } )
      },
      editarUsuario( idx ) {
        this.id = this.usuarios[ idx ].id
        console.log( this.usuarios[ idx ] )
        this.usuario = { ...this.usuarios[ idx ] }
      },
      deletarUsuario( id ) {
        this.$http
            .delete( `usuarios/${ id }.json` )
            .then( () => this.obterUsuarios() )
      }
    },
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    font-size: 1.5rem;
  }

  #app h1 {
    text-align: center;
    margin: 50px;
  }
</style>
