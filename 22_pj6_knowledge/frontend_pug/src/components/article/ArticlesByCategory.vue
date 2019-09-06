<template>
  <div class="articles-by-category">
    <PageTitle
      icon="fa fa-folder-o"
      :main="category.name"
      sub="Categoria" />

    <ul>
      <li v-for="article in articles" :key="article.id">
        <ArticleItem :article="article" />
      </li>
    </ul>

    <div class="load-more">
      <button
        v-if="loadMore"
        class="btn btn-lg btn-outline-primary"
        @click="getArticles">
        Carregar mais Artigos
      </button>
    </div>
  </div>
</template>

<script>
  // eslint-disable-next-line
  let html_bkp = ``

  import PageTitle from '@/components/templates/PageTitle'
  import { baseApiUrl, showError } from '@/global'
  import axios from 'axios'
  import ArticleItem from '@/components/article/ArticleItem'

  export default {
    name: 'ArticlesByCategory',
    components: { ArticleItem, PageTitle },
    data() {
      return {
        category: {},
        categories: {},
        articles: [],
        PageTitle: 1,
        loadMore: true
      }
    },
    methods: {
      getCategory() {
        axios
          .get( `${ baseApiUrl }/categories/${ this.category.id }` )
          .then( res => this.categories = res.data )
          .catch( showError )
      },
      getArticles() {
        axios
          .get( `${ baseApiUrl }/categories/${ this.category.id }/articles?page=${ this.page }` )
          .then( res => {
            this.articles = this.articles.concat( res.data )
            this.page++
            if ( res.data.length === 0 ) {
              this.loadMore = false
            }
          } )
          .catch( showError )
      }
    },

    mounted() {
      this.category.id = this.$route.params.id
      this.getCategory()
      this.getArticles()
    },
    watch: {
      $route( to ) {
        this.category.id = to.params.id
        this.articles = []
        this.page = 1
        this.loadMore = true
        this.getCategory()
        this.getArticles()
      }
    },
  }
</script>

<style lang="scss">
  .articles-by-category {
    ul {
      list-style-type: none;
      padding: 0px;
    }

    .load-more {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 25px;
    }
  }
</style>
