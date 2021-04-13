// https://www.youtube.com/watch?v=DHvZLI7Db8E&ab_channel=WebDevSimplified
function falarDepoisDe(segundos, frase) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            // Uma promise só pode resolver um elemento
            resolve(frase)
        }, segundos * 1000)
    })
}

// Para acessarmos o retorno da promise nós utilizamos o método .then
falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('?!?').toUpperCase())
    .then(frase_final => console.log(frase_final))
    .catch(erro => console.log(erro))