const checarAnoBissexto = ano => {
    let bissexto 
    multDeQuatro = ano % 4 === 0
    multDeCem = ano % 100 === 0
    multDeQuatrocentos = ano % 400 === 0

    bissexto = (multDeQuatro && !multDeCem) || multDeQuatrocentos

    return bissexto
}

console.log(checarAnoBissexto(2020))
console.log(checarAnoBissexto(2100))