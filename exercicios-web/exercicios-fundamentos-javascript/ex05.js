const maiorOuIgual = (n1, n2) => {
    if (typeof(n1) != 'number' || typeof(n2) != 'number') {
        return "Entrada inválida!\nTente novamente..."
    }

    const testes = {
        igual: n1 === n2,
        maior: n1 > n2,
        menor: n1 < n2
    }

    for (const prop in testes) {
        if (testes[prop] && prop === "igual")
            return `${n1} é ${prop} a ${n2}`
        else if (testes[prop])
            return `${n1} é ${prop} que ${n2}`
    }
}

console.log(maiorOuIgual(2, 1))
console.log(maiorOuIgual(2, 2))
console.log(maiorOuIgual(2, 3))