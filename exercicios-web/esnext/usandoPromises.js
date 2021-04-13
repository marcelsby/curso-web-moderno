// Com promise...
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

let nomes = []

// Utilizando promises aninhadas, estrutura parecida com a callback
// getTurma('A')
//     .then(alunos => {
//         nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
//     getTurma('B')
//         .then(alunos => {
//             nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
//         getTurma('C')
//             .then(alunos => {
//                 nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
//                 console.log(nomes)
//             })
//         })

// })

// Minha solução
// nomesMinhaSolucao = []
// Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
//     .then(turmas => {
//         turmas.forEach(t => t.map(a => nomesMinhaSolucao.push(a.nome)))
//         console.log(nomesMinhaSolucao)
//     })

// Solução do professor
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    
// Utilizando o catch para tratamento de erro    
getTurma('D').catch(erro => console.log(erro))

