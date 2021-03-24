const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// Lendo de forma síncrona (arquivos grandes podem travar o event loop)
const configSync = JSON.parse(fs.readFileSync(caminho,'utf-8'))
console.log('Leitura síncrona:')
console.log(configSync.db)

// Lendo de forma assíncrona (mais recomendado)
const configAsync = fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    try {
        config = JSON.parse(conteudo) 
        console.log('Leitura assíncrona:')
        console.log(config.db)
    } catch (err) {
        console.log(err)
    }
})

// Lendo o arquivo direto como um objeto (JSON -> Object)
const configDireta = require('./arquivo.json')
console.log('Leitura direta:')
console.log(configDireta.db)
