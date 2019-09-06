<template>
  <div class="article-admin">
    <h1>Artigo Componente</h1>
    <b-form>
      <input id="article-id" type="hidden" v-model="article.id" />
      <b-row>
        <b-col xs="12">
          <b-form-group label="Nome:" label-for="article-name">
            <b-form-input
              id="article-name"
              type="text"
              :readonly="mode === 'remove'"
              v-model="article.name"
              required
              placeholder="Informe o Titulo do Artigo..." />
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col xs="12">
          <b-form-group label="Descrição:" label-for="article-description">
            <b-form-input
              id="article-description"
              type="text"
              :readonly="mode === 'remove'"
              v-model="article.description"
              required
              placeholder="Informe a Descrição do Artigo..." />
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col xs="12">
          <b-form-group label="Imagem (URL):" label-for="article-imageUrl">
            <b-form-input
              id="article-imageUrl"
              type="text"
              :readonly="mode === 'remove'"
              v-model="article.imageUrl"
              required
              placeholder="Informe a URL da Imagem do Artigo..." />
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col xs="12">
          <b-form-group label="Categoria:" label-for="article-categoryId">
            <b-form-select
              v-if="mode === 'save'"
              id="article-categoryId"
              type="text"
              v-model="article.categoryId"
              :options="categories"
              required
              placeholder="Selecione a Categoria do Artigo..." />
            <b-form-input
              v-else
              id="article-parentId"
              readonly
              v-model="article.categoryId" />
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col xs="12">
          <b-form-group label="Usuários:" label-for="article-userId">
            <b-form-select
              v-if="mode === 'save'"
              id="article-userId"
              type="text"
              v-model="article.userId"
              :options="users"
              required
              placeholder="Selecione o Autor do Artigo..." />
            <b-form-input
              v-else
              id="article-userId"
              readonly
              v-model="article.userId" />
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col xs="12">
          <b-form-group label="Conteúdo:" label-for="article-content">
            <VueEditor
              v-model="article.content"
              placeholder="Informe o Conteúdo do Artigo..." />
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col xs="12">
          <b-button variant="primary" v-if="mode === 'save' " @click="save">Salvar</b-button>
          <b-button variant="danger" v-if="mode === 'remove' " @click="remove">Excluir</b-button>
          <b-button variant="primary" class="ml-2" @click="reset">Cancelar</b-button>
        </b-col>
      </b-row>

      <hr>
      <b-table hover striped :items="articles" :fields="fields">
        <template slot="actions" slot-scope="data">
          <b-button variant="warning" size="sm" @click="loadArticle(data.item)" class="mr-2">
            <i class="fa fa-pencil"></i>
          </b-button>
          <b-button variant="danger" size="sm" @click="loadArticle(data.item, 'remove')">
            <i class="fa fa-trash"></i>
          </b-button>
        </template>
      </b-table>
      <b-pagination
        size="md"
        v-model="page"
        :total-rows="count"
        :per-page="limit" />
    </b-form>
  </div>
</template>

<script>
  // eslint-disable-next-line
  let html_bkp = ``

  import { VueEditor } from 'vue2-editor'
  import { baseApiUrl, showError } from '@/global'
  import axios from 'axios'

  export default {
    name: 'ArticleAdmin',
    components: { VueEditor },
    data() {
      return {
        mode: 'save',
        article: {},
        articles: [],
        categories: [],
        users: [],
        page: 1,
        limit: 0,
        count: 0,
        fields: [
          { key: 'id', label: 'Código', sortable: true },
          { key: 'name', label: 'Nome', sortable: true },
          { key: 'description', label: 'Descrição', sortable: true },
          { key: 'actions', label: 'Ações' }
        ]
      }
    },

    mounted() {
      this.loadCategories()
      this.loadUsers()
      this.loadArticles()
    },

    methods: {
      reset() {
        this.mode = 'save'
        this.article = {}
        this.loadArticles()
      },

      loadCategories() {
        axios
          .get( `${ baseApiUrl }/categories` )
          .then( resp => {
            this.categories = resp.data.map( category => {
              return { value: category.id, text: category.path }
            } )
          } )
      },
      loadUsers() {
        axios
          .get( `${ baseApiUrl }/users` )
          .then( resp => {
            this.users = resp.data.map( user => {
              return { value: user.id, text: `${ user.name } - ${ user.email }` }
            } )
          } )
      },
      save() {
        const method = this.article.id ? 'put' : 'post'
        const id = this.article.id ? `/${ this.article.id }` : ''
        axios[ method ]( `${ baseApiUrl }/articles${ id }`, this.article )
          .then( () => {
            this.$toasted.global.defaultSuccess()
            this.reset()
          } )
          .catch( showError )
      },
      remove() {
        const id = this.article.id
        axios
          .delete( `${ baseApiUrl }/articles/${ id }` )
          .then( () => {
            this.$toasted.global.defaultSuccess()
            this.reset()
          } )
          .catch( showError )
      },
      loadArticle( article, mode = 'save' ) {
        this.mode = mode
        axios
          .get( `${ baseApiUrl }/articles/${ article.id }` )
          .then( resp => this.article = resp.data )
      },
      loadArticles() {
        axios
          .get( `${ baseApiUrl }/articles?page=${ this.page }` )
          .then( resp => {
            this.articles = resp.data.data
            this.count = resp.data.count
            this.limit = resp.data.limit
          } )
      }
    },
    watch: {
      page( /*newPage, oldPage*/ ) {
        this.loadArticles()
      }
    },
  }
</script>

<style lang="scss">

</style>
