const fs = require('fs')
const path = require('path')

function lerArquivo(arquivo) {
    const caminho = path.join(__dirname,  arquivo)

    return new Promise((resolve, reject) => {
        fs.readFile(caminho, (err, conteudo) => {
            try {
                resolve(conteudo.toString())
            } catch {
                reject(err)
            }
        })
    })
}

lerArquivo('dados.txt')
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => linhas.join(', '))
    .then(conteudo => `O conteúdo final é: ${conteudo}`)
    .then(console.log)
    .catch(err => console.log(err))