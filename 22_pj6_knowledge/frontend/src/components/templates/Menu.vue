<template>
  <aside class="menu" v-show="isMenuVisible">
    <div class="menu-filter">
      <i class="fa fa-search fa-lg"></i>
      <input type="text" placeholder="Digite para filtrar..." v-model="treeFilter" class="filter-field">
    </div>
    <Tree
      :data="treeData"
      :options="treeOptions"
      :filter="treeFilter"
      ref="tree" />
  </aside>
</template>

<script>
  import { mapState } from 'vuex'
  import Tree from 'liquor-tree'
  import axios from 'axios'
  import { baseApiUrl } from '@/global'

  export default {
    name: 'Menu',
    components: { Tree },
    computed: {
      ...mapState( [ 'isMenuVisible' ] )
    },
    data() {
      return {
        treeFilter: '',
        treeData: this.getTreeData(),
        treeOptions: {
          propertyNames: { 'text': 'name' },
          filter: { emptyText: 'Categoria não encontrada' }
        }
      }
    },
    methods: {
      getTreeData() {
        return axios
          .get( `${ baseApiUrl }/categories/tree` )
          .then( res => res.data )
      },
      onNodeSelect( node ) {
        this.$router.push( {
          name: 'articleByCategory',
          params: { id: node.id }
        } )
        if ( this.$mq === 'xs' || this.$mq === 'sm' ) {
          this.$store.commit( 'toggleMenu', false )
        }
      }
    },
    mounted() {
      this.$refs.tree.$on( 'node:selected', this.onNodeSelect )
    }
  }
</script>

<style lang="scss">
  .menu {
    grid-area: menu;
    background: linear-gradient(to right, #232526, #414345);

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    a {
      color: #fff;
      text-decoration: none;

      &:hover {
        color: #fff;
        text-decoration: none;
      }
    }

    .tree-node {
      &.selected > .tree-content {
        background-color: rgba(255, 255, 255, 0.2);
      }

      .tree-content:hover {
        background-color: rgba(255, 255, 255, 0.2);
      }
    }
  }

  .tree-arrow.has-child {
    filter: brightness(2);
  }

  .menu {
    .menu-filter {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 20px;
      padding-bottom: 8px;
      border-bottom: 1px solid #AAA;

      i {
        color: #AAA;
        margin-right: 10px;
      }
    }

    input {
      color: #CCC;
      font-size: 1.3rem;
      border: 0;
      outline: 0;
      width: 100%;
      background: transparent;
    }
  }

  .tree-filter-empty {
    color: #CCC;
    font-size: 1.3rem;
    margin-left: 20px;
  }
</style>
