const fs = require('fs')

const produto = {
    "name": "MacBook Pro M1",
    "value": 29899.00
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo escrito com sucesso!')
})