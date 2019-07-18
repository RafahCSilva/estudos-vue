<template>
  <header class="header">
    <a class="toggle" @click="toggleMenu">
      <i class="fa fa-lg" :class="toggle_icon"></i>
    </a>
    <h1 class="title">{{ title }}</h1>
  </header>
</template>

<script>
  export default {
    name: 'Header',
    props: {
      title: String,
      hideToggle: Boolean
    },
    computed: {
      toggle_icon() {
        return this.hideToggle ? 'fa-angle-left' : 'fa-angle-right'
      }
    },
    methods: {
      toggleMenu() {
        this.$store.commit( 'toggleMenu' )
      }
    },
  }
</script>

<style lang="scss">
  header.header {
    grid-area: header;
    background: linear-gradient(to right, #1e469a, #49a7c1);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .title {
    font-size: 1.2rem;
    color: #fff;
    font-weight: 100;
    flex-grow: 1;
    text-align: center;

    a {
      color: #FFF;
      text-decoration: none;

      &:hover {
        color: #FFF;
        text-decoration: none;
      }
    }
  }

  header.header > a.toggle {
    width: 60px;
    height: 100%;
    color: #fff;
    justify-self: flex-start;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      color: #fff;
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
</style>

