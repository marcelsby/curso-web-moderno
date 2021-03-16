const getPalavrasSemelhantes = (pattern, palavras) => {
    const searchResult = palavras.filter(palavra => palavra.includes(pattern))

    return searchResult
} 

sample = ['Lorem', 'ipsum', 'sit', 'dolor', 'amet']
console.log(getPalavrasSemelhantes('ips', sample))
console.log(getPalavrasSemelhantes('em', sample))