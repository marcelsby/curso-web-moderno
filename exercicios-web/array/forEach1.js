aprovados = [ 'Agatha', 'Aldo', 'Daniel', 'Raquel' ]

/*
    Definição do forEach
    O que é? Um método que pode ser utilizado em arrays
    Parâmetros padrão que a função callback recebe, em ordem:
    1º: conteúdo de um certo índice do array
    2º: o índice atual
    3º: o próprio array que o forEach deve percorrer
    4º: undefined
*/

console.log('\nExemplo da definição do forEach')
aprovados.forEach((nome, indice, array, x) => {
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
    console.log(x)
})

console.log('\nExemplo #1')
aprovados.forEach((nome, indice) => {
    console.log(`${indice + 1}) ${nome}`)
})

// Utilizando o forEach com uma arrow function para imprimir apenas o conteúdo das posições do array
console.log('\nExemplo #2')
aprovados.forEach(nome => console.log(nome))

// Criando uma função em uma constante para chamá-la como callback do forEach
const exibirAprovados = aprovado => console.log(aprovado)

console.log('\nExemplo #3')
aprovados.forEach(nome => exibirAprovados(nome))