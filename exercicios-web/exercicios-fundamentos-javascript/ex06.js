const inverso = value => {
    const tipo = typeof(value)

    if (tipo === 'boolean')
        return !value
    else if (tipo === 'number')
        return value * -1
    else
        return `Tipo do valor esperado: 'number' ou 'boolean', tipo da entrada: '${tipo}'.\nSaindo...`
}
console.log(inverso(3))
console.log(inverso(-58))
console.log(inverso(false))
console.log(inverso('Teste'))