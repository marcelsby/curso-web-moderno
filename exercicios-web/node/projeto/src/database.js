const sequence = {
    _id: 1,

    // getters e setters
    get id() { return this._id++ }
}

const products = {}

function saveProduct(product) {
    if (!product.id) product.id = sequence.id
    products[product.id] = product
    return product 
}

function getProductById(id) {
    return products[id] || {}
}

function getProducts() {
    return Object.values(products)
} 

function deleteProduct(id) {
    const product = products[id]
    delete products[id]
    return product || {}
}

module.exports = { saveProduct, getProductById, getProducts, deleteProduct }