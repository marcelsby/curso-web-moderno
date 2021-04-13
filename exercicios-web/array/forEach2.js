// Nessa aula nós implementamos o nosso próprio forEach
Array.prototype.forEach2 = function (callback) {
    for (let i = 0; i < this.length; i++)
        callback(this[i], i, this)
}

// Eu criei um método para calcular o dobro de valores do tipo Number de um array
Array.prototype.dobro = function () {
    let resultado = new Array;

    for ( let i = 0; i < this.length; i++ ) {
        if ( typeof(this[i]) === 'number' )
            resultado.push((this[i] * 2));
    }

    return resultado
}

ns = [ 'João', 'Hello', 3, 21, 'Neo', 55, 30 ]
aprovados = [ 'Agatha', 'Aldo', 'Daniel', 'Raquel' ]

aprovados.forEach2((nome, indice) => {
    console.log(`${indice + 1}) ${nome}`)
})

novoArr = ns.dobro()

console.log('Debug breakpoint!')