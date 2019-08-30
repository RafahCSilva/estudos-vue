import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/home/Home'
import AdminPages from '@/components/admin/AdminPages'
import ArticlesByCategory from '@/components/article/ArticlesByCategory'
import ArticleById from '@/components/article/ArticleById'

Vue.use( VueRouter )

const routes = [
  { nome: 'home', path: '/', component: Home },
  { nome: 'adminPages', path: '/admin', component: AdminPages },
  { nome: 'articleByCategory', path: '/categories/:id/articles', component: ArticlesByCategory },
  { nome: 'articleById', path: '/articles/:id', component: ArticleById }
]

export default new VueRouter( {
  mode: 'history',
  routes
} )
