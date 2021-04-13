const getQtdPalavras = string => {
    const stringSplitted = string.split(' ')
    const qtdPalavras = stringSplitted.length

    return qtdPalavras
}

console.log(getQtdPalavras('Hello World!'))
console.log(getQtdPalavras('Lorem Ipsum Sit Dolor Amet'))