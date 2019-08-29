import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import './config/boostrap'
import './config/msgs'
import { store } from './config/store'
import router from './config/router'

import App from './App'

Vue.config.productionTip = false

// TEMPORARIO !!!
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IlJhRmFvIiwiZW1haWwiOiJyYWZhb0ByYWZhby5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNTY3MTE3Mjg0LCJleHAiOjE1NjczNzY0ODR9.DlEtbolPeGwKuB_JYxlFbuD9Xzi9XVO0yIxC6_DumMk'

new Vue( {
  store,
  router,
  render: h => h( App )
} ).$mount( '#app' )
