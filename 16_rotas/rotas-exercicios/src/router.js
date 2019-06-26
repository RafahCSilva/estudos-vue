import Vue from 'vue'
import Router from 'vue-router'

// import Inicio from './components/Inicio'
// import Usuario from './components/usuario/Usuario'
// import UsuarioIndex from './components/usuario/UsuarioIndex'
// import UsuarioShow from './components/usuario/UsuarioShow'
// import UsuarioEdit from './components/usuario/UsuarioEdit'
// import Menu from './components/template/Menu'
// import MenuAlt from './components/template/MenuAlt'

Vue.use( Router )

const Inicio = () => import( './components/Inicio'  )
const Usuario = () => import( /* webpackChunkName: "usuario" */ './components/usuario/Usuario' )
const UsuarioIndex = () => import( /* webpackChunkName: "usuario" */ './components/usuario/UsuarioIndex' )
const UsuarioShow = () => import( /* webpackChunkName: "usuario" */ './components/usuario/UsuarioShow' )
const UsuarioEdit = () => import( /* webpackChunkName: "usuario" */ './components/usuario/UsuarioEdit' )
const Menu = () => import( './components/template/Menu' )
const MenuAlt = () => import( './components/template/MenuAlt' )

const router = new Router( {
  mode: 'history', // ou 'hash',
  scrollBehavior( to, from, savedPosition ) {
    if ( savedPosition ) {
      return savedPosition
    }
    if ( to.hash ) {
      return { selector: to.hash }
    }
    return { x: 0, y: 0 }
  },
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
        {
          path: ':id', component: UsuarioShow, props: true,
          beforeEnter: ( to, from, next ) => {
            console.log( 'antes da rota -> usuario.show' )
            next()
          }
        },
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

router.beforeEach( ( to, from, next ) => {
  console.log( 'antes das rodas -> global' )
  next()
} )

export default router
