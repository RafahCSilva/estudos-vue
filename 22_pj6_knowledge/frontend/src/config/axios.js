import axios from 'axios'

const success = res => res
const error = err => {
  if ( 401 === err.response.status ) {
    alert( 'Token Expirado, por favor relogue!' )
    window.location = '/'
  } else {
    return Promise.reject( err )
  }
}
axios.interceptors.response.use( success, error )
