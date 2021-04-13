const despesasTotais = array => array.reduce((acc, d) => acc += d.preco, 0)

despesasJan = [
    {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
    {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
]

console.log(despesasTotais(despesasJan))