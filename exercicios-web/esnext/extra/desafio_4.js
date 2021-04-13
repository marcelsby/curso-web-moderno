// Inserir Async/Await no desafio_3.js
// Funções assíncronas: https://www.youtube.com/watch?v=V_Kr9OSfDeU&ab_channel=WebDevSimplified
const fs = require('fs')
const path = require('path')

function lerArquivo(arquivo) {
    const caminho = path.join(__dirname,  arquivo)

    return new Promise((resolve, reject) => {
        fs.readFile(caminho, 'utf-8', (err, conteudo) => {
            if (conteudo !== undefined)
                resolve(conteudo)
            else
                reject(err)
        })
    })
}

const mostrarArquivo = async (arquivo) => {
    try {
        const conteudo = await lerArquivo(arquivo)
        console.log(`Conteúdo do arquivo:\n${conteudo}`)
    } catch (err) {
        console.log(err)
    }
}

mostrarArquivo('dado.txt')
mostrarArquivo('dados.txt')