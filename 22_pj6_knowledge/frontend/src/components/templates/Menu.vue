<template>
  <aside class="menu">

  </aside>
</template>

<script>
  export default {
    name: 'Menu'
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
      &.selected > .tree-content, .tree-content:hover {
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
