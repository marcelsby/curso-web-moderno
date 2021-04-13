// Arrow Function
const soma = (a, b) => a + b
console.log(soma(4, 8))

// Arrow Function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// Parâmetro Default
function log (runtime = 'Node') {
    console.log(runtime)
}

log()
log('OpenJDK')

// Operador rest ou spread
function total (...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(1,2,3,4,5));
