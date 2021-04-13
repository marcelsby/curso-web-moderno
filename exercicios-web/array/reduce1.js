const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

const notas = alunos.map(a => a.nota)

// A variável 'acumulador' é o retorno da callback anterior
somaNotas = notas.reduce(function (acumulador, valorAtual) {
    console.log(acumulador, valorAtual)

    return acumulador + valorAtual
    // o 0 abaixo significa o valor inicial da variável 'acumulador', que também pode ser um array [], por exemplo
}, 0)

console.log('Debug breakpoint!')