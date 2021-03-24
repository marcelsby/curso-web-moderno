console.log('Fora da função:')
console.log(this === global)
console.log(this === module)
console.log(this === exports)
console.log(this === module.exports)

function testandoThis() {
    console.log('\nDentro da função:')
    console.log(this === global)
    console.log(this === module)
    console.log(this === exports)
    console.log(this === module.exports)

    this.perigo = 'Cuidado!!! Aqui this é igual ao objeto global!'
}

this.ufa = 'Aqui já estamos dentro do módulo!'

testandoThis()