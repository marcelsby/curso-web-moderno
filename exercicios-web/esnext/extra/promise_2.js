// CALLBACK HELL!
// setTimeout(function() {
//     console.log('Executando callback...')
//     
//     setTimeout(function() {
//         console.log('Executando callback...')
//
//
//         setTimeout(function() {
//             console.log('Executando callback...')
//
//
//         }, 2000)
//     }, 2000)
// }, 2000)

function esperarPor(tempo = 2) {
    return new Promise((resolve) => {
        setTimeout(function() {
            console.log('Executando callback...')
            resolve()
        }, tempo * 1000)
    })
}

esperarPor()
    .then(() => esperarPor())
    .then(esperarPor)