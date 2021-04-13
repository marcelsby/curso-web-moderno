const pilotosCompetindo = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
const pilotosEliminados = []

// Remove e retorna o último elemento do array
pilotosEliminados.push(pilotosCompetindo.pop())

// Adiciona um novo elemento na próxima posição disponível do array
pilotosCompetindo.push('Verstappen')

// Remove e retorna o primeiro elemento de um array
pilotosEliminados.push(pilotosCompetindo.shift())

// Adiciona na primeira posição
pilotosCompetindo.unshift('Hamilton')

// Splice - pode ser utilizado para inserir e/ou para remover elementos

// Adicionar 
pilotosCompetindo.splice(2, 0, pilotosEliminados.shift(), 'Bottas')

// Remover (N/A Massa)
pilotosEliminados.unshift(pilotosCompetindo.splice(2, 1)[0])

// Pegando um novo array com a "fatia" de pilotos a partir do índice 2
pilotosAleatorios = pilotosCompetindo.slice(2)

// Pegando outra fatia, com início e fim determinado.
/* OBS: o segundo argumento determina o final, logo ele não conta na fatia. */
pilotosAleatorios = pilotosCompetindo.slice(1,4)

console.log('Debug breakpoint!')