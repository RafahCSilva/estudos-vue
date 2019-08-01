import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import './config/boostrap'
import { store } from './config/store'
import router from './config/router'

import App from './App'

Vue.config.productionTip = false

// TEMPORARIO !!!
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IlJhRmFvIiwiZW1haWwiOiJyYWZhb0ByYWZhby5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNTY0Njk4NjE5LCJleHAiOjE1NjQ5NTc4MTl9.VCApZAFUZfDLXsOH0xCUPV6DOpbBYSWzCk17umo8VqQ'

new Vue( {
  store,
  router,
  render: h => h( App )
} ).$mount( '#app' )
