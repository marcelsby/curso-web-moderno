const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de plástico', preco: 18.99, fragil: false },
]

function frageis (produto) {
    // retorna apenas os elementos onde o atributo frágil é igual a true
    return produto.fragil
}

// Mesma coisa utilizando arrow function
caros = produtos.filter(produto => produto.preco > 500)

// Filtrando duas vezes - elementos frageis e baratos
baratos = p => p.preco < 100

filtrados = produtos.filter(frageis).filter(baratos)

console.log('Debug breakpoint!')