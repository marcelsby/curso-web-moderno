// No Mac e no Windows funcionará
// const moduloA = require('../../moduloa')

// Funciona em todos, inclusive no linux
const moduloA = require('../../moduloA')
console.log(moduloA.ola)

// Utilizando um módulo instalado a partir do arquivo package-lock.json
const lodash = require('lodash')
console.log(lodash.random(1, 10))

// Utilizando uma pasta que contém uma arquivo que segue o padrão index.js 
const index = require('./pastaC')
console.log(index.ola2)

// Utilizando um módulo core do Node
const http = require('http')
  http.createServer((req, res) => {
      res.write('Olá!')
      res.end()
  }).listen(8080)

