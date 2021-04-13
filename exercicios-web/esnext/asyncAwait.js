const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    let resultado = '' 

    return new Promise ((resolve, reject) => {
        http.get(url, res => {
            if (res.statusCode !== 200)
                reject(`Turma ${letra} inexistente!`)
            else
                res.on('data', dados => {
                    resultado += dados
                })

                res.on('end', () => {
                    try {
                        resolve(JSON.parse(resultado))
                    } catch (erro) {
                        reject('Erro no parse do JSON!')
                    }
                })
        })
    })
}

// Recurso do ES8
// Simplificar o uso de promises
let obterAlunos = async () => {
    const turmaA = await getTurma('A')
    const turmaB = await getTurma('B')
    const turmaC = await getTurma('C')
    return [].concat(turmaA, turmaB, turmaC)
} // Retorna um objeto AsyncFunction

obterAlunos()
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
