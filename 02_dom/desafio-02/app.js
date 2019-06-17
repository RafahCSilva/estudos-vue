new Vue({
  el: '#desafio',
  data: {
    valor: ''
  },
  methods: {
    alertar (event) {
      alert('aletado')
    },
    preenche (event) {
      this.valor = event.target.value
    }
  }
})
