const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

pessoaChinesa = p => p.pais === 'China'
mulheres = p => p.genero === 'F' 
menorSalario = (pAnterior, pAtual) => pAtual.salario < pAnterior.salario ? pAtual : pAnterior 

axios.get(url).then(res => {
    const funcionarios = res.data

    // Mulher chinesa com o menor salário?
    const mulherChinesaMenorSalario = funcionarios
                                        .filter(pessoaChinesa)
                                        .filter(mulheres)
                                        .reduce(menorSalario)
                                        
    console.log(mulherChinesaMenorSalario)
})


