<template>
  <div class="article-item">
    <router-link :to="{ name: 'articleById', params: { id: article.id } }">
      <div class="article-item-image d-none d-sm-block">
        <!-- <img-->
        <!--   v-if="article.imageUrl"-->
        <!--   :src="article.imageUrl"-->
        <!--   height="150"-->
        <!--   width="150"-->
        <!--   alt="Article">-->
        <!--   v-else-->
        <img
          src="@/assets/article.png"
          height="150"
          width="150"
          alt="Article">
      </div>
      <div class="article-item-info">
        <h2>{{ article.name }}</h2>
        <p>{{ article.description }}</p>
        <span class="article-item-author">
          <strong>Autor:</strong> {{ article.author }}
        </span>
      </div>
    </router-link>
  </div>
</template>

<script>
  // eslint-disable-next-line
  let html_bkp = ``

  export default {
    name: 'ArticleItem',
    props: [ 'article' ]
  }
</script>

<style lang="scss">
  .article-item {
    border-radius: 8px;
    margin-bottom: 20px;
    background-color: #FFF;
    padding: 20px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);

    a {
      display: flex;
      align-items: flex-start;
      text-decoration: none;
      color: #000;
    }

    &-info h2 {
      font-size: 1.7rem;
    }

    &-image {
      padding-right: 20px;
      margin-right: 20px;
      border-right: 1px solid #AAA;
    }

    &-image img {
      border-radius: 5px;
    }

    &-info {
      display: flex;
      align-self: stretch;
      flex-direction: column;
    }

    &-info p {
      flex: 1;
      color: #555;
      font-size: 1.1rem;
    }
  }
</style>
