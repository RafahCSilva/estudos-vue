<template>
  <div class="category-admin">
    <h1>Categoria Componente</h1>
    <b-form>
      <input id="category-id" type="hidden" v-model="category.id" />
      <b-row>
        <b-col xs="12">
          <b-form-group label="Nome:" label-for="category-name">
            <b-form-input
              id="category-name"
              type="text"
              :readonly="mode === 'remove'"
              v-model="category.name"
              required
              placeholder="Informe o Nome da Categoria..." />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col xs="12">
          <b-form-group label="Parente do Caminho:" label-for="category-parentId">
            <b-form-select
              v-if="mode === 'save'"
              id="category-parentId"
              :options="categories_others"
              v-model="category.parentId" />
            <b-form-input
              v-else
              id="category-parentId"
              readonly
              v-model="category.path" />
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
    <b-table hover striped :items="categories" :fields="fields">
      <template slot="actions" slot-scope="data">
        <b-button variant="warning" size="sm" @click="loadCategory(data.item)" class="mr-2">
          <i class="fa fa-pencil"></i>
        </b-button>
        <b-button variant="danger" size="sm" @click="loadCategory(data.item, 'remove')">
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
    name: 'CategoryAdmin',
    data() {
      return {
        mode: 'save',
        category: {},
        categories: [],
        fields: [
          { key: 'id', label: 'Código', sortable: true },
          { key: 'name', label: 'Nome', sortable: true },
          { key: 'path', label: 'Caminho', sortable: true },
          { key: 'actions', label: 'Ações' }
        ]
      }
    },
    mounted() {
      this.loadCategories()
    },
    methods: {
      loadCategories() {
        const url = `${ baseApiUrl }/categories`
        axios.get( url )
             .then( ( resp ) => {
               this.categories = resp.data.map( ( category ) => {
                 return { ...category, value: category.id, text: category.path }
               } )
             } )
      },
      reset() {
        this.mode = 'save'
        this.category = {}
        this.loadCategories()
      },
      save() {
        const method = this.category.id ? 'put' : 'post'
        const id = this.category.id ? `/${ this.category.id }` : ''
        if ( this.category.id === this.category.parentId ) {
          showError( 'Não selecione vc mesmo como Parente' )
          return false
        }
        axios[ method ]( `${ baseApiUrl }/categories${ id }`, this.category )
          .then( () => {
            this.$toasted.global.defaultSuccess()
            this.reset()
          } )
          .catch( showError )
      },
      remove() {
        const id = this.category.id
        axios.delete( `${ baseApiUrl }/categories/${ id }` )
             .then( () => {
               this.$toasted.global.defaultSuccess()
               this.reset()
             } )
             .catch( showError )
      },
      loadCategory( category, mode = 'save' ) {
        this.mode = mode
        this.category = { ...category }
      }
    },
    computed: {
      categories_others() {
        return this.categories.filter( v => v.id !== this.category.id )
      }
    }
  }
</script>

<style lang="scss">

</style>
