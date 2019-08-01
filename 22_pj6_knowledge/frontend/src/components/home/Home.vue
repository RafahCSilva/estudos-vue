<template>
  <div class="home">
    <PageTitle
      icon="fa fa-home"
      main="Dashboard"
      sub="RaFaoPress" />
    <div class="stats">
      <Stat title="Categorias" :value="stat.categories" icon="fa fa-folder" color="#d54d50" />
      <Stat title="Artigos" :value="stat.articles" icon="fa fa-file" color="#3bc480" />
      <Stat title="Usuários" :value="stat.users" icon="fa fa-user" color="#3282cd" />
    </div>
  </div>

</template>

<script>
  import PageTitle from '../templates/PageTitle'
  import axios from 'axios'
  import { baseApiUrl } from '@/components/global'
  import Stat from '@/components/home/Stat'

  export default {
    name: 'Home',
    components: {
      Stat,
      PageTitle
    },
    data() {
      return {
        stat: {}
      }
    },
    methods: {
      getStat() {
        axios.get( `${ ( baseApiUrl ) }/stats` )
             .then( res => this.stat = res.data )

      }
    },
    mounted() {
      this.getStat()
    }
  }
</script>

<style lang="scss">
  .stats {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
</style>
