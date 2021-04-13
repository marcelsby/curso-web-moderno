// Implementando meu próprio filter
Array.prototype.filter2 = function (callback) {
    const filtered = new Array

    for (let i = 0; i < this.length; i++)
        if (callback(this[i], i, this))
            filtered.push(this[i])

    return filtered
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de plástico', preco: 18.99, fragil: false },
]

const caros = p => p.preco >= 1000
const frageis = p => p.fragil

produtosFiltrados = produtos.filter(caros).filter(frageis)

console.log('Debug breakpoint!')