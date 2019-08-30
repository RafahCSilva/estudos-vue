<template>
  <div class="article-by-id">
    <PageTitle
      icon="fa fa-file-o"
      :main="article.name"
      :sub="article.description" />
    <div class="article-content" v-html="article.content"></div>
  </div>
</template>

<script>
  import PageTitle from '@/components/templates/PageTitle'
  import { baseApiUrl } from '@/global'
  import axios from 'axios'

  export default {
    name: 'ArticleById',
    components: { PageTitle },
    data() {
      return {
        article: {},
      }
    },
    mounted() {
      axios
        .get( `${ baseApiUrl }/articles/${ this.$route.params.id }` )
        .then( ( res ) => this.article = res.data )
    },
  }
</script>

<style lang="scss">
  .article-content {
    background-color: #FFF;
    border-radius: 8px;
    padding: 25px;

    pre {
      padding: 20px;
      border-radius: 8px;
      font-size: 1.2rem;
      background-color: #1e1e1e;
      color: #FFF;
    }

    img {
      max-width: 100%;
    }

    :last-child {
      margin-bottom: 0px;
    }
  }
</style>
