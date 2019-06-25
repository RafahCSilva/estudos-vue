export default {
  computed: {
    m_c_fraseComVirgulas() {
      return this.frase.replace( /\s/g, ',' )
    },
    m_c_contaLetras() {
      return this
        .frase2
        .split( ' ' )
        .map( p => `${ p } (${ p.length })` )
        .join( ' ' )
    }
  },
}
