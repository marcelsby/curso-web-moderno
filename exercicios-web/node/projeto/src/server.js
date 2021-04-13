const express = require('express')
const database = require('./database')

const port = 8080
const app = express()

app.use(express.urlencoded({ extended: true }))

app.get('/products/:id', (req, res, next) => {
    res.send(database.getProductById(req.params.id))
})

app.get('/products', (req, res, next) => {
    res.send(database.getProducts())
})

app.post('/products', (req, res, next) => {
    const product = database.saveProduct({
        name: req.body.name,
        price: req.body.price
    })

    res.send(product)
})

app.put('/products/:id', (req, res, next) => {
    const product = database.saveProduct({
        name: req.body.name,
        price: req.body.price,
        id: parseInt(req.params.id)
    })

    res.send(product)
})

app.delete('/products/:id', (req, res, next) => {
    const status = database.deleteProduct(req.params.id)
    res.send(status)
})

try {
    app.listen(port)
    console.log(`Servidor iniciado em: localhost:${port}`)
} catch (err) {
    console.log(err)
}