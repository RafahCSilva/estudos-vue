new Vue({
  el: '#desafio',
  data: {
    nome: 'Rafao',
    idade: 25,
    img_url: 'https://media.giphy.com/media/UuHitxwZ6nh4g34oTA/giphy.gif'
  },
  methods: {
    idadeVezes3: function () {
      return this.idade * 3
    }
  }
})
