const contarCaractere = (caractere, string) => {
    let qtdCaractereNaFrase = string.search(caractere) 

    return qtdCaractereNaFrase
}

console.log(contarCaractere('L', 'Hello World!'))
console.log(contarCaractere('m', 'Lorem Ipsum Sit Dolor Amet'))