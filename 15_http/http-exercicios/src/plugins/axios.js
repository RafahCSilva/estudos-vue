import Vue from 'vue'
import axios from 'axios'

// Config global (e unico)
axios.defaults.baseURL = 'https://curso-vue-3be10.firebaseio.com/'
Vue.use( {
  install( Vue ) {
    Vue.prototype.$http = axios

    // Interceptar Requisicao
    Vue.prototype.$http.interceptors.request.use( ( config ) => {
        console.log( config.method )
        // if ( config.method === 'post' ) {
        //   config.method = 'put'
        // }
        return config
      },
      ( error ) => { Promise.reject( error ) } )

    // Interceptar Resposta
    Vue.prototype.$http.interceptors.response.use( ( res ) => {
        console.log( res )
        const arr = []
        for ( let chave in res.data ) {
          arr.push( {
            id: chave,
            ...res.data[ chave ]
          } )
        }
        res.data = arr
        return res
      },
      ( error ) => { Promise.reject( error ) } )
  }
} )

// Config para cada instancia ($http_testeA, $http_testeB, ...)
// Vue.use( {
//   install( Vue ) {
//     Vue.prototype.$http_testeA = axios.create( {
//       baseURL: 'https://curso-vue-3be10.firebaseio.com/'
//     } )
//   }
// } )
