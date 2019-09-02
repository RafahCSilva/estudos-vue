import Vue from 'vue'
import Vuex from 'vuex'

Vue.use( Vuex )

export const store = new Vuex.Store( {
  state: {
    isMenuVisible: true, // default do menu visivel
    user: {
      name: 'Rafao CS',
      email: 'rcs@rcs.com'
    }
  },
  mutations: {
    toggleMenu( state, isVisible ) {
      if ( isVisible === undefined ) {
        state.isMenuVisible = !state.isMenuVisible
      } else {
        state.isMenuVisible = isVisible
      }
    }
  },
} )
