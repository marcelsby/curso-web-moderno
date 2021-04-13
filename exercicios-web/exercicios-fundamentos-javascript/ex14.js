const desenvolvedora = {
    nome: "Maria",
    profissao: "Desenvolvedora de software"
}

// Resolução própria
const objectToArray = function (obj) {
    const arrayResultante = []

    for (prop in obj)
        arrayResultante.push([prop, obj[prop]])

    return arrayResultante
}

console.log(objectToArray(desenvolvedora))

// Resolução da apostila utilizando Map
function objetoParaArray(objeto) {
    const chaves = Object.keys(objeto)
    const resultado = chaves.map( chave => [chave, objeto[chave]] )
    return resultado
}

console.log(objetoParaArray(desenvolvedora))