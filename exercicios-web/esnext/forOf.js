// Percorrendo strings
for (let l of 'Cod3r') {
    console.log(l)
}

// Percorrendo um array 
const assuntosEcma = ['Map', 'Set', 'promise']

for (let assunto in assuntosEcma) {
    console.log(assunto)
}

for (let assunto of assuntosEcma) {
    console.log(assunto)
}

// Percorrendo um Map 
const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }],
])

for (let assunto of assuntosMap) {
    console.log(assunto)
}

for (let chave of assuntosMap.keys()) {
    console.log(chave)
}

for (let valor of assuntosMap.values()) {
    console.log(valor)
}

for (let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl)
}

// Percorrendo um Set 
const s = new Set(['a', 'b', 'c']) 
 
for (let letra of s) {
    console.log(letra)
}