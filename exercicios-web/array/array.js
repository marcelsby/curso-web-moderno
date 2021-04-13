console.log(typeof Array, typeof new Array, typeof [])

// Criando um array com a função construtora
let aprovados = new Array('Ana', 'Bia', 'Carlos')

// Criando um array de forma literal
aprovados = ['Bia', 'Carlos', 'Ana']

// Diferentes formas de adicionar elementos a um array
aprovados[3] = 'João' // mais utilizado para sobrescrever elementos já existentes
aprovados.push('Felipe')

// Adicionando um elemento em uma posição onde o valor é undefined
// O aprovados.length aumenta para 10 entretanto os elementos do índice 4 até o 8 ficam com o valor undefined
aprovados[9] = 'Paulo'

// Métodos para utilizar em arrays
aprovados.sort() // Ordena de forma alfabética/crescente (por padrão) nosso array

delete aprovados[1] // Deleta o segundo elemento do nosso array, mas não altera a ordem dos elementos

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1, 'Joana', 'Melissa')



console.log("Debug breakpoint!")