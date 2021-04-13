const removerPropriedade = (obj, prop) => {
    const novoObj = {}

    for (p in obj) {
        if (prop !== p)
            novoObj[p] = obj[p]
    }
    
    return novoObj
}

greeting = {
    nome: 'Hello',
    sobrenome: 'World',
    final: '!'
}

console.log(removerPropriedade(greeting, 'nome'))
console.log(Object.is(removerPropriedade(greeting, 'nome')))


