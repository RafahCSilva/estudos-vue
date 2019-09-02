import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import './config/boostrap'
import './config/msgs'
import { store } from './config/store'
import router from './config/router'

import App from './App'

Vue.config.productionTip = false

new Vue( {
  store,
  router,
  render: h => h( App )
} ).$mount( '#app' )
