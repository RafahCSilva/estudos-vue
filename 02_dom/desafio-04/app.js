new Vue( {
  el: '#desafio',
  data: {
    ex1_toggle: true,
    ex1_class: true,
    ex3: '',
    ex4: '',
    perigo: false,
    ex5: '',
    ex6: '0'
  },
  methods: {
    iniciarEfeito () {
      setTimeout( () => {
        console.log( 'ex1: toggle' )
        this.ex1_class = this.ex1_toggle ? 'destaque' : 'encolher'
        this.ex1_toggle = !this.ex1_toggle
        this.iniciarEfeito()
      }, 500 )
    },
    iniciarProgresso () {
      let valor = 0
      const temp = setInterval( () => {
        valor++
        this.ex6 = `${ valor }%`
        console.log( 'ex6: ', this.ex6 )
        if ( valor === 100 ) {
          console.log( 'saiu' )
          clearInterval( temp )
        }
      }, 10 )
    },
    setPerigo ( event ) {
      if ( event.target.value === 'true' ) {
        this.perigo = true
      } else if ( event.target.value === 'false' ) {
        this.perigo = false
      }
    }
  }
} )
