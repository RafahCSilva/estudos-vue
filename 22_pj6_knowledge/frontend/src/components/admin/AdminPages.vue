<template>
  <div class="admin-pages">
  <PageTitle
    icon="fa fa-cogs"
    main="Administração do Sistema"
    sub="Cadastros & Cia"
  />
  <div class="admin-pages-tabs">
    <b-card no-body>
      <b-tabs card>
        <b-tab title="Artigos">
          <ArticleAdmin></ArticleAdmin>
        </b-tab>
        <b-tab title="Categorias">
          <CategoryAdmin></CategoryAdmin>
        </b-tab>
        <b-tab title="Usuários">
          <UserAdmin></UserAdmin>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
  </div>
</template>

<script>
  import PageTitle from '@/components/templates/PageTitle'
  import ArticleAdmin from '@/components/admin/ArticleAdmin'
  import CategoryAdmin from '@/components/admin/CategoryAdmin'
  import UserAdmin from '@/components/admin/UserAdmin'

  export default {
    name: 'AdminPages',
    components: { UserAdmin, CategoryAdmin, ArticleAdmin, PageTitle }
  }
</script>

<style lang="scss">

</style>
