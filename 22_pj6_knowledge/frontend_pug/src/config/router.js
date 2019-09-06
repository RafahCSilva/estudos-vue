import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/home/Home'
import AdminPages from '@/components/admin/AdminPages'
import ArticlesByCategory from '@/components/article/ArticlesByCategory'
import ArticleById from '@/components/article/ArticleById'
import Auth from '@/components/auth/Auth'
import { userKey } from '@/global'

Vue.use( VueRouter )

const routes = [
  { name: 'home', path: '/', component: Home },
  { name: 'adminPages', path: '/admin', component: AdminPages, meta: { requireAdmin: true } },
  { name: 'articleByCategory', path: '/categories/:id/articles', component: ArticlesByCategory },
  { name: 'articleById', path: '/articles/:id', component: ArticleById },
  { name: 'auth', path: '/auth', component: Auth }
]

const router = new VueRouter( {
  mode: 'history',
  routes
} )

router.beforeEach( ( to, from, next ) => {
  const json = localStorage.getItem( userKey )
  const user = JSON.parse( json )

  if ( to.matched.some( record => record.meta.requireAdmin ) ) {
    user && user.admin ? next() : next( { path: '/' } )
  }

  return next()
} )

export default router
