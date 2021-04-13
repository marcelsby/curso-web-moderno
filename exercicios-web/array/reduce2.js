const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: false },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: false }
]

bolsistas = alunos.map(aluno => aluno.bolsista)

// Todos os alunos são bolsistas?
todosSaoBolsistas = bolsistas.reduce((resAnterior, bolsista) => resAnterior && bolsista, true)

if (!todosSaoBolsistas)
    console.log('Nem todos os alunos são bolsistas.')
else
    console.log('Todos os alunos são bolsistas.')

// Algum aluno é bolsista?
algumBolsista = bolsistas.reduce((r, b) => r || b, false)

if (!algumBolsista)
    console.log('Não temos nenhum aluno bolsista.')
else
    console.log('Temos algum aluno bolsista.')