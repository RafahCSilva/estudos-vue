<template>
  <div class="user-admin">
    <h1>Usuários Componente</h1>
    <b-form>
      <input id="user-id" type="hidden" v-model="user.id" />
      <b-row>
        <b-col md="6" sm="12">
          <b-form-group label="Nome:" label-for="user-name">
            <b-form-input
              id="user-name"
              type="text"
              :readonly="mode === 'remove'"
              v-model="user.name"
              required
              placeholder="Informe o Nome do Usuário..." />
          </b-form-group>
        </b-col>
        <b-col md="6" sm="12">
          <b-form-group label="E-mail:" label-for="user-email">
            <b-form-input
              id="user-email"
              type="text"
              :readonly="mode === 'remove'"
              v-model="user.email"
              required
              placeholder="Informe o E-mail do Usuário..." />
          </b-form-group>
        </b-col>
      </b-row>

      <b-row v-show="mode==='save'">
        <b-col md="6" sm="12">
          <b-form-checkbox id="user-admin" v-model="user.admin" class="mt-3 mb-3">
            Administrador?
          </b-form-checkbox>
        </b-col>
      </b-row>

      <b-row v-show="mode==='save'">
        <b-col md="6" sm="12">
          <b-form-group label="Senha:" label-for="user-password">
            <b-form-input
              id="user-password"
              type="password"
              v-model="user.password"
              required
              placeholder="Informe a Senha do Usuário..." />
          </b-form-group>
        </b-col>
        <b-col md="6" sm="12">
          <b-form-group label="Senha:" label-for="user-confirm-password">
            <b-form-input
              id="user-confirm-password"
              type="password"
              v-model="user.confirmPassword"
              required
              placeholder="Confirme a Senha do Usuário..." />
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col md="6" sm="12">
          <b-button variant="primary" v-if="mode === 'save' " @click="save">Salvar</b-button>
          <b-button variant="danger" v-if="mode === 'remove' " @click="remove">Excluir</b-button>
          <b-button variant="primary" class="ml-2" @click="reset">Cancelar</b-button>
        </b-col>
      </b-row>
    </b-form>
    <hr>
    <b-table hover striped :items="users" :fields="fields">
      <template slot="actions" slot-scope="data">
        <b-button variant="warning" size="sm" @click="loadUser(data.item)" class="mr-2">
          <i class="fa fa-pencil"></i>
        </b-button>
        <b-button variant="danger" size="sm" @click="loadUser(data.item, 'remove')">
          <i class="fa fa-trash"></i>
        </b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
  // eslint-disable-next-line
  let html_bkp = ``

  import { baseApiUrl, showError } from '@/global'
  import axios from 'axios'

  export default {
    name: 'UserAdmin',
    data() {
      return {
        mode: 'save',
        user: {},
        users: [],
        fields: [
          { key: 'id', label: 'Código', sortable: true },
          { key: 'name', label: 'Nome', sortable: true },
          { key: 'email', label: 'E-mail', sortable: true },
          { key: 'admin', label: 'Administrador', sortable: true, formatter: v => v ? 'Sim' : 'Não' },
          { key: 'actions', label: 'Ações' }
        ]
      }
    },
    mounted() {
      this.loadUsers()
    },
    methods: {
      loadUsers() {
        const url = `${ baseApiUrl }/users`
        axios.get( url )
             .then( ( resp ) => { this.users = resp.data } )
      },
      reset() {
        this.mode = 'save'
        this.user = {}
        this.loadUsers()
      },
      save() {
        const method = this.user.id ? 'put' : 'post'
        const id = this.user.id ? `/${ this.user.id }` : ''
        axios[ method ]( `${ baseApiUrl }/users${ id }`, this.user )
          .then( () => {
            this.$toasted.global.defaultSuccess()
            this.reset()
          } )
          .catch( showError )
      },
      remove() {
        const id = this.user.id
        axios.delete( `${ baseApiUrl }/users/${ id }` )
             .then( () => {
               this.$toasted.global.defaultSuccess()
               this.reset()
             } )
             .catch( showError )
      },
      loadUser( user, mode = 'save' ) {
        this.mode = mode
        this.user = { ...user }
      }
    },
  }
</script>

<style lang="scss">

</style>
