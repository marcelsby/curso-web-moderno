const primeiroElemento = function(array) {
    return array[0]
}

function primeiraLetra(string) {
    return string[0]
}

const letraMinuscula = letra => letra.toLowerCase()


let p = new Promise(function(cumprirPromessa) {
    cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

p
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    // .then(valor => console.log(valor))
    .then(console.log)