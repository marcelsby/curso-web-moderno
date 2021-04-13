Array.prototype.reduce2 = function (callback, startValue = 0) {
    let acumulador;

    if (startValue === 0) {
        acumulador = this[0]

        for (let i = 1; i < this.length; i++) {
            acumulador = callback(acumulador, this[i], i, this)
        }
    } else {
        acumulador = startValue

        for (let i = 0; i < this.length; i++) {
            acumulador = callback(acumulador, this[i], i, this)
        }
    }

    return acumulador
}

numArr = [1, 1, 1, 1, 1]

const soma = (total, valor) => total + valor
res = numArr.reduce2(soma, 100)

console.log(res)
