Array.prototype.map2 = function (callback) {
    result = new Array

    for (i = 0; i < this.length; i++)
        result[i] = callback(this[i], i, this)
    
    return result
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.90 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

precos = carrinho.map2(material => {
    material = JSON.parse(material)
    return material.preco
})

console.log('Debug breakpoint!')
