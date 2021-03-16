Array.prototype.menorNumero = function () {
    let menor = this[0];

    for (let i = 1; i < this.length; i++)
        this[i] < menor ? menor = this[i] : menor 

    return menor
}

arr1 = [10, 5, 35, 3]
arr2 = [5, -15, 50, 3]

console.log(arr1.menorNumero())
console.log(arr2.menorNumero())