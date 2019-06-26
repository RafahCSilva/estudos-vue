import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio'

import Usuario from './components/usuario/Usuario'
import UsuarioIndex from './components/usuario/UsuarioIndex'
import UsuarioShow from './components/usuario/UsuarioShow'
import UsuarioEdit from './components/usuario/UsuarioEdit'
import Menu from './components/template/Menu'
import MenuAlt from './components/template/MenuAlt'

Vue.use( Router )

export default new Router( {
  mode: 'history', // ou 'hash',
  routes: [
    {
      path: '/',
      name: 'inicio',
      // component: Inicio
      components: {
        default: Inicio,
        menu: Menu
      }
    },
    {
      path: '/usuario',
      // component: Usuario,
      components: {
        default: Usuario,
        menu: MenuAlt,
        menuInferior: MenuAlt
      },
      props: true, // passa uma props pro componente, assim nao precisa de watch
      children: [
        { path: '', component: UsuarioIndex },
        { path: ':id', component: UsuarioShow, props: true, },
        { path: ':id/edit', component: UsuarioEdit, props: true, name: 'usuariosEdit' }
      ]
    },
    {
      path: '/redirecionar',
      redirect: '/usuarios'
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
} )
