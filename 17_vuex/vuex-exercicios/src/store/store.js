import Vue from 'vue'
import Vuex from 'vuex'

import carrinho from './modules/carrinho'
import parametros from './modules/parametros'

Vue.use( Vuex )

export default new Vuex.Store( {
  // Na Modularizacao, somente o STATE é modularizado, o resto (mutations, actions...) vai pra root, q pode dar conflito
  modules: {
    carrinho,
    parametros
  }
} )
