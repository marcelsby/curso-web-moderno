// Solução 1 - retorno "user friendly"
// A precedência no if foi algo interessante de se lidar
const estaEntre = (num, min, max, inclusivo = false) => {

    if (num > min && num < max && inclusivo === false)
        return `O número ${num} está entre ${min} e ${max}.`
    else if ((num === min || num === max) && inclusivo === true)
        return `O número ${num} está entre ${min} e ${max} (inclusivo).`
    else
        return 'O número não está entre o intervalo determinado.'

}

console.log(estaEntre(1, 1, 10))
console.log(estaEntre(1, 1, 10, true))
console.log(estaEntre(90, 1, 10, false))
console.log(estaEntre(999, 1, 1000, false))

// Solução 2 - retorno mais "mínimo"
const estaEntre2 = (num, min, max, inclusivo = false) => {
    return inclusivo ? num >= min && num <= max : num > min && num < max
}

console.log(estaEntre2(1, 1, 10))
console.log(estaEntre2(1, 1, 10, true))
console.log(estaEntre2(90, 1, 10, false))
console.log(estaEntre2(999, 1, 1000, false))