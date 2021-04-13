const getApenasConsoantes = string => {
    const regex = /(a|e|i|o|u|à|á|é|í|ó)/ig

    const res = string.replace(regex, '')
    
    return res
}

console.log(getApenasConsoantes('Hello World'))
console.log(getApenasConsoantes('Olá Mundo'))