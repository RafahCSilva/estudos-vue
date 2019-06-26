import Vue from 'vue'
import axios from 'axios'

// Config global (e unico)
axios.defaults.baseURL = 'https://curso-vue-3be10.firebaseio.com/'
Vue.use( {
  install( Vue ) {
    Vue.prototype.$http = axios
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
