const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.90 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

precos = carrinho.map(material => {
    material = JSON.parse(material)
    return material.preco
})

console.log('Debug breakpoint!')
