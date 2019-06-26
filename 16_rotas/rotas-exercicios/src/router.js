import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio'

import Usuario from './components/usuario/Usuario'
import UsuarioIndex from './components/usuario/UsuarioIndex'
import UsuarioShow from './components/usuario/UsuarioShow'
import UsuarioEdit from './components/usuario/UsuarioEdit'

Vue.use( Router )

export default new Router( {
  mode: 'history', // ou 'hash',
  routes: [
    {
      path: '/',
      component: Inicio
    },
    {
      path: '/usuario',
      component: Usuario,
      props: true, // passa uma props pro componente, assim nao precisa de watch
      children: [
        { path: '', component: UsuarioIndex },
        { path: ':id', component: UsuarioShow, props: true, },
        { path: ':id/edit', component: UsuarioEdit, props: true, }
      ]
    }
  ]
} )
